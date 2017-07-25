//@flow
import { expect } from 'chai';
import Main from '../src/main';

describe('Main', () => {
    it('should be a class', () => {
	expect(new Main()).to.not.equal(undefined);
    });

    it('balls should initialize as an empty list', () => {
	let rack = new Main();
	expect(rack.balls).to.eql([]);
    });
});
