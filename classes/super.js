class animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`the ${this.name} moves at a speed of ${speed} mph`)
    }
}

class rabbit extends animal {
    constructor(name, age, runSpeed) {
        super(name, age)
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`this ${this.name} can move`);
        super.move(this.runSpeed);
    }

}

class fish extends animal {
    constructor(name, age, swimSpeed) {
        super(name, age)
        this.swimSpeed = swimSpeed;
    }
}
class hawk extends animal {
    constructor(name, age, flySpeed) {
        super(name, age)
        this.flySpeed = flySpeed;
    }
}
const rabbit1 = new rabbit("rabbit", 1, 50);
rabbit1.run()