namespace Abstraction {

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

namespace Abstraction { // React.Component
    abstract class Component {
        private _state: any;


        constructor(protected props: unknown) { }

        protected get state(): any {
            return this._state
        }

        protected setState(state: any) {
            this._state = state;
        }

        public abstract render(): void;

    }



    class button extends Component {
        constructor(props: unknown) {
            super(props);
        }
        public render(): void {
            console.log("button");
        }
    }

    class Text extends Component {
        constructor(props: unknown) {
            super(props);
            this.setState({
                text: "hello"
            })
        }
        public render(): void {
            console.log("text");
            // this.state = {} //! error
            this.setState({
                text: this.state.text + " world"
            })

        }
    }

    class Image extends Component {
        public render(): void {
            console.log("image");
        }
    }

    new Text('').render()


}


namespace Abstraction { // Car

    abstract class Car {
        private _speed: number = 0;
        constructor(public name: string) { }




        public get speed(): number {
            return this._speed;
        }

        protected setSpeed(speed: number): void {
            this._speed = speed;
        }

        public abstract drive(): void;
        public abstract stop(): void;
        public abstract updateSpeed(speed: number): void;

    }

    class BMW extends Car {

        constructor(name: string) {
            super(name);
            this.setSpeed(100);
        }

        public drive(): void {
            console.log(`${this.name} 🚘 With ${this.speed}km/h`);
        }
        public stop(): void {
            console.log(`${this.name} 🚗 Stop`);
        }

        public updateSpeed(speed: number): void {
            if (speed > 300)
                throw new Error("Speed cannot be more than 300km/h");
            this.setSpeed(speed)
        }

    }

    class Ferrari extends Car {
        constructor(name: string) {
            super(name);
            this.setSpeed(200);
        }

        public drive(): void {
            console.log(`${this.name} 🚘 With ${this.speed}km/h`);
        }
        public stop(): void {
            console.log(`${this.name} 🚗 Stoped`);
        }

        public updateSpeed(speed: number): void {
            if (speed > 500) {
                console.warn('[WARNING] OMG! You are driving too fast! 🙀')
            }
            this.setSpeed(speed)
        }
    }

    const carBmw1 = new BMW("BMW");
    const carBmw2 = new BMW("BMW");
    console.log(carBmw1.drive(), carBmw2.drive());
    carBmw2.updateSpeed(600)
    console.log(carBmw2.drive())
    const carFerrari1 = new Ferrari("Ferrari");
    carFerrari1.updateSpeed(600)
    console.log(carFerrari1.drive())
    // const carFerrari2 = new Ferrari("Ferrari");
    // console.log(carFerrari1.speed, carFerrari2.drive());
}