import 'steal-mocha';
import chai from 'chai';
import {Service} from './service';

const assert = chai.assert;

xdescribe('models/service', () => {
	it('getList', done => {
		Service.getList().then(items => {
			assert.equal(items.length, 2);
			assert.equal(items[0].description, 'First item');
			done();
		});
	});
});
