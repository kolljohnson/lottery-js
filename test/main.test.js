//@flow
import { expect } from 'chai';
import Main from '../src/main';

describe('Main', () => {
    let rack: Main;
    
    beforeEach(() => {
	rack = new Main();
    });
    
    it('should be a class', () => {
	expect(new Main()).to.not.equal(undefined);
    });

    it('balls should initialize as an empty list', () => {
	expect(rack.balls).to.eql([]);
    });

    it('add() pushes 20 to balls list', () => {
	rack.add(20);
	expect(rack.balls).to.eql([20]);
    });
});
