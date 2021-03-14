import Component from "../../../../types";
import Counter from "../../../components/app-counter/component";

type State = {
  count: number;
  startCounter: boolean;
};

export default class Home extends Component<State> {
  onCreate() {
    this.state = { count: 0, startCounter: true };
  }

  setCount(count: number) {
    this.state.count = count;
  }

  toggleCounter() {
    const { startCounter } = this.state;
    this.state.startCounter = !startCounter;
  }

  getCounter() {
    return this.getComponent?.<Counter>("counter");
  }

  pauseCounter() {
    const counter = this.getCounter();
    counter?.stop();
  }

  resumeCounter() {
    const counter = this.getCounter();
    counter?.start();
  }
}
