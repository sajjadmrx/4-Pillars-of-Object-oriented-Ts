const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

namespace Polymorphism {
    abstract class Character {
        public name: string;
        public damage: number;

        constructor(name: string, damage: number) {
            this.name = name;
            this.damage = damage;
        }

        public talk(): void {
            console.log('Says something ...');
        }

        public attack(): void {
            console.log(`Attacks his target with his fists.`);
        }
        // or 
        public abstract jump(): void;
    }

    class Monster extends Character {
        constructor(name: string, damage: number) {
            super(name, damage);
        }

        public attack(): void {
            console.log(`Hmmm, looks like he's going to attack you. :D`);
            wait(2000).then(() => {
                console.log(`Attacks you with his claws. 🦞`);
            })
        }

        public talk(): void {
            console.log("ADDDDDDDDDWWWWWWWWWWWWWWaaaaaa") // this is Monster's talk :-)
        }

        public jump(): void {
            console.log("Jumps on you. 🦞")
        }
    }

    const monster = new Monster('Goblin', 10)
    monster.talk();
    wait(1000).then(monster.jump)
    wait(2000).then(monster.attack)
}