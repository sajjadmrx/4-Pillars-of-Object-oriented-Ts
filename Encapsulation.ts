namespace Encapsulation {
    abstract class Character {
        private _name: string;
        constructor(name: string) {
            this._name = name;
        }

        public get name(): string {
            return this._name;
        }

        public set name(value: string) {
            const filterdNames = ["Bob", "Tom", "John"];
            if (!filterdNames.includes(value))
                throw new Error("Invalid name");
            this._name = value;
        }

        protected abstract attack(): void;
    }


    class Player extends Character {
        private _level: number;
        constructor(name: string, level: number) {
            super(name);
            this._level = level;
        }

        public get level(): number {
            return this._level;
        }

        public set level(value: number) {
            // if (value < 1 || value > 100)
            //     throw new Error("Invalid level");
            this._level = value;
        }

        public attack(): void {
            console.log(`${this.name} is attacking 🤺`);
        }

    }

    class Monster extends Character {
        private _level: number;
        constructor(name: string, level: number) {
            super(name);
            this._level = level;
        }

        public get level(): number {
            return this._level;
        }

        public set level(value: number) {
            this._level = value;
        }

        public attack(): void {
            console.log(`${this.name} is attacking 👺`);
        }
    }



    const player = new Player("John", 1);
    // player._level //! error because _level is private
    player.name = "Bob";
    player.level = 1;
    console.log(player.attack());
    const monster = new Monster("Tom", 1); // tom is Monster :D
    monster.name = "Tom";
    monster.level = 50;
    console.log(monster.attack());
}

