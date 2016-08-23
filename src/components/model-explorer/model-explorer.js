/**
 * @module {can.Component} model-explorer Model Explorer
 * @parent utilities
 * @group utilities.model-explorer.viewModel 0 ViewModel
 * @group utilities.model-explorer.events 1 Events
 *
 *
 * @description
 * The Model Explorer is a tool that executes method calls on a specified model.
 * The explorer can be configured based on the `models` object passed to it,
 * desired models and methods can be passed.
 * The explorer has a params JSON editor for adding params to the method call. It
 * has some basic validation; the value must be valid JSON.
 * The call response, whether successful or not, will print in the result area.
 * The explorer can operate against the proxied API or using fixtures.
 *
 *
 * @signature '<model-explorer></model-explorer>'
 *
 * @param {can.Map|Object} models An object of objects. Configuration object that
 * contains the desired models and their methods.
 *
 *
 * @body
 *
 * ## Component Initialization
 *
 * ```html
 *   <model-explorer models="{models}"></model-explorer>
 * ```
 *
 */

import $ from 'jquery';
import Component from 'can-component';
import template from './model-explorer.stache!';
import ViewModel from './viewmodel';
import fixture from 'can-fixture';

export default Component.extend({
    tag: 'model-explorer',
    template,
    ViewModel,
    helpers: {
        objectToString: function (obj, opts) {
            var resp = obj();
            return JSON.stringify(resp.serialize?resp.serialize():resp, null, 4);
        }
    },
    events: {

        /**
         * @function events.inserted Inserted
         * @description Bootstraps the useFixtures variable.
         */
        inserted: function () {
            this.viewModel.useFixtures = fixture.on;
        },

        /**
         * @function events.useFixtures Use Fixtures Change
         * @description Updates fixtures setting when useFixtures is updated.
         */
        '{viewModel} useFixtures': function (ctx, opts, useFixtures) {
            fixture.on = !!useFixtures;
        }
    }
});
