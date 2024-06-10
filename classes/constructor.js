class animal {
    constructor(name, age, speed) {
        this.name = name;
        this.age = age;
        this.speed = speed;
    }
    rabbit() {
        console.log(`${this.speed}`);
    }
}

const result = new animal("rabbit",1,50);
result.rabbit()