//@flow
export default class Main {
    balls: Array<number>
    
    constructor() {
	this.balls = [];
    }

    add(ball: number) {
	this.balls.push(ball);
    }
}
