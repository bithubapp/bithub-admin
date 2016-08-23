import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

const Errors = DefineMap.extend({
	form: {
		Value: Array
	}
});

/** @add model-exlorer.viewModel */
export default DefineMap.extend({

    /**
     * @property {can.Map} errors Errors
     * @description Errors container object. Errors should follow the following structure:
     * ```
     error['{keyName}'] = [
         '{STRING}'
     ];
     ```
     */
    errors: Errors,

    /**
     * @property {can.Map|Object} models Models
     * @description Configuration object that contains desired models and their methods.
     */
    models: {
        Value: Object
    },

    /**
     * @property {array} modelOptions Model Options
     * @description Parses the listing of models into a value/label pair of objects that
     * the select-input component can use to render a select control.
     */
    modelOptions: {
        get: function () {
            var models = this.models;
            var resp = [];
            models.each(function (Model, key) {
                var item = {value: key, label: Model.label};
                resp.push(item);
            });

            return resp;
        }
    },

    /**
     * @property {string} selectedModel Selected Model
     * @description The key of the selected model.
     */
    selectedModel: {
        value: '',
        type: 'string',
        set: function (val) {
            this.resetRequest();
            return val;
        }
    },

    /**
     * @property {can.Model} Model Model
     * @description The current active Model constructor. Returns false if no selection has been made.
     */
    Model: {
        get: function () {
			const models = this.models;
			const selectedModel = this.selectedModel;
            return models[selectedModel]? models[selectedModel].Model: false;
        }
    },

    /**
     * @property {string} modelMethods Model Methods
     * @description The methods for the current selected model. They should match
     * the structure required by the select-input compontent:
     * `{value:"{{VALUE}}", label:"{{LABEL}}"}`
     */
    modelMethods: {
        get: function () {
            const selectedModel = this.selectedModel;
            const models = this.models;
            let resp = [];
            if (selectedModel) {
                resp = models[selectedModel].methods;
            }
            return new DefineList(resp);
        }
    },

    /**
     * @property {object} selectedMethodOptions Selected Method Options
     * @description The selected method object, contains useful data for
     * other parts of the tool.
     */
    selectedMethodOptions: {
        Value: Object,
        set: function (val) {
            if (val.defaultRequest) {
                this.params = val.defaultRequest;
            }
            return val;
        }
    },

    /**
     * @property {string} selectedMethod Seleted Method
     * @description The selected method's key, which should be the method name itself.
     */
    selectedMethod: {
        value: '',
        type: 'string',
        set: function (val) {
            this.resetRequest();
            var self = this;
            var selectedModel = this.selectedModel;
            var models = this.models;
            // Get the method object for the selected Model.
            if (selectedModel && models && models[selectedModel]) {
                var methods = models[selectedModel].methods;
                methods.each(function (method) {
                    if (method.value === val) {
                        self.selectedMethodOptions = method;
                        return false;
                    }
                });
            }
            return val;
        }
    },

    /**
     * @property {can.Map|Object} params Params
     * @description The parameters object parsed from the params editor string.
     */
    params: {
        Value: Object,
		Type: DefineMap
    },

    /**
     * @property {string} paramsString Params String
     * @description The JSON string that the user interacts with for the params.
     */
    paramsString: {
        set: function (val) {
            if (typeof val === 'string') {
                try {
                    val = JSON.parse(val);
                    this.resetRequest();
                    this.params = val;
                    return val;
                } catch(e) {
                    this.errors.params = ['Invalid JSON'];
                }
            }
        },
        get: function () {
            var params = this.params;
            var val = JSON.stringify(params.serialize(), null, 4);

            if (!val) {
                val = '{}';
            }

            return val;
        }
    },

    /**
     * @property {object} response Response
     * @description The response from the method, renders the errors response if
     * call was unsuccesful.
     */
    response: {
        Value: Object
    },

    /**
     * @property {boolean} useFixtures Use Fixtures
     * @description Sets fixtures on or off.
     */
    useFixtures: {
        value: true,
        type: 'boolean',
        set: function (val) {
            this.resetRequest();
            return val;
        }
    },

    /**
     * @property {can.List|array} usageLog Usage Log
     * @description Log storage
     */
    usageLog: {
        Value: Array
    },

    /**
     * @property {boolean} showErrors Show Errors
     * @description Tells template to render errors if params or validation
     * errors exist
     */
    showErrors: {
        get: function () {
            var errors = this.errors;
            // check for validation errors
            var validationErrors = errors.validation && errors.validation.hasErrors();

            // check for params errors
            return validationErrors || errors.params ? true : false;
        }
    },

    /**
     * @property {boolean} mustValidate Must Validate
     * @description Will not execute method if true and validation returns errors.
     */
    mustValidate: {
        value: true,
        type: 'boolean',
        set: function (val) {
            this.resetRequest();
            return val;
        }
    },

    /**
     * @property {string} version Version
     * @description The version of the data, needed for POST/DELETE/PUT calls
     * to work with fixtures.
     */
    version: {
        get: function () {
            var params = this.params;
            return params.version || '';
        }
    },

    /**
     * @function clearResponse Clear Response
     * @description Clears the response field.
     */
    clearResponse: function () {
        this.response = {};
    },

    resetRequest: function () {
        this.errors = {};
        this.response = {};
        this.params = {};
    },
	toggleProp: function (propName) {
		const val = this[propName];
		this[propName] = !val;
	},

    /**
     * @function submit Submit
     * @description Submits the params to the selected model and method.
     */
    submit: function () {
        var vm = this;
        var method = this.selectedMethod;
        var Model = this.Model;
        var params = this.params;
        var methodOpts = this.selectedMethodOptions;
        var Chain;

        vm.errors = {};
        vm.response = {};

        if (method && Model && params) {
            vm.usageLog.push(`Calling... ${this.selectedModel}.${method}(${this.paramsString})`);
            if (methodOpts.useMethodInstance) {
                var instance = new Model(params.serialize());
                //check validation, if any
                if (instance.validate) {
                    instance.validate();
                    this.errors.validation = instance.errors;
                    if (instance.errors.hasErrors() === true && this.mustValidate === true) {
                        return;
                    }
                }

                Chain = instance[method]();
            } else {
                Chain = Model[method](params.serialize());
            }

            Chain.then(function (resp) {
                vm.usageLog.push('Call completed successfully.');
                vm.response = resp;
			}, function (err) {
				vm.usageLog.push('Call failed! Use browser dev tools to debug.');
                vm.response = err;
			});
        } else {
            vm.usageLog.push('Oops. Missing method/Model and/or params.');
			debugger;
            vm.errors.form.push('Invalid method selected.');
        }

    }
});
