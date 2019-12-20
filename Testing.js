class Testing {
    constructor () {
        this.message = "hello world"
    }

    handle () {
        this.greetRightAway();
        this.greetAfterSignUp()
    }

    greetRightAway () {
        console.log("in greet right away"); 
        console.log(this.message); 
        console.log(this); 
    }

    greetAfterSignUp () {
        const self = this; 
        setTimeout(function () {
            console.log("in timeout"); 
            console.log(self.message)
            console.log(this)
        }, 200)
    }
}


// setTimeout(function () {
//     console.log("in timeout"); 
//     console.log(this.message)
//     console.log(this)
// }, 200)

(new Testing).handle()