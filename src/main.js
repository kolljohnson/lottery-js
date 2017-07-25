//@flow
export default class Main {
    balls: Array<number>
    
    constructor() {
	this.balls = [];
    }

    add(ball: number) {
	this.balls.push(ball);
	if(this.balls.length > 1) {
	    this.ballSort();
	}
    }

    ballSort() {
	for (let i = 0; i < this.balls.length - 1; i++) {
	    for(let j = 1; j < this.balls.length; j++) {
		if(this.balls[i] > this.balls[j]) {
		    let ballI = this.balls[i];
		    this.balls[i] = this.balls[j];
		    this.balls[j] = ballI;
		}
	    }
	}
    }
}
