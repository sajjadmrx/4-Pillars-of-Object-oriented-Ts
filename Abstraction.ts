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
