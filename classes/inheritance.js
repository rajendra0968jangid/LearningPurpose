class animal {
    alive = true;
    eat() {
        console.log(`this ${this.name} is eating`);
    }

    sleep() {
        console.log(`this ${this.name} is sleeping`);
    }
}

class rabbit extends animal {
    name = "rabbit";
    run() {
        console.log(`this ${this.name} is running`);    

    }
}


const rabbit1 = new rabbit();
rabbit1.eat();
rabbit1.sleep();
rabbit1.run();