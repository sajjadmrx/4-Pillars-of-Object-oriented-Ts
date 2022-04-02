namespace Abstraction_ex1 {

    abstract class Character {
        constructor(public name: string, public age: number, public damage: number) { }

        public abstract attack(): void;
    }


    // const cj = new Character("CJ", 25, 10); //* without abstraction
    // const cj = new Character() //* Abstract class cannot be instantiated

    class Hero extends Character {
        constructor(name: string, age: number, speed: number) {
            super(name, age, speed);
        }

        public attack(): void {
            console.log(`${this.name} attacks with ${this.damage} damage`);
        }
    }

    const cj = new Hero("CJ", 25, 10);
    const michael = new Hero("Michael", 30, 15);
    michael.attack();



}
