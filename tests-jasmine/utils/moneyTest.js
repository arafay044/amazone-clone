// creating test case using jasmine

import {formatCurrency} from '../../scripts/utlis/money.js';
//describe function create a test suite
describe('test suite: formatCurrency',() => {
    // it function create a test
    it('convert cents into dollars', () =>{
        expect(formatCurrency(2095)).toEqual('20.95');//compare as if and else expect is function
    });

    it('works with 0', () => {
        //expect give us an object and it has a method toEqual that compare
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('round to nearest cent',() => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });
});

