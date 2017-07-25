//@flow
export default class Main {
    balls: Array<number>
    
    constructor() {
	this.balls = [];
    }

    add(ball) {
	this.balls.push(ball);
    }
}
