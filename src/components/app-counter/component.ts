import Component from "../../../types";

export default class Counter extends Component<any, { count: number }> {
  declare interval: NodeJS.Timeout;

  onMount() {
    this.start();
  }

  onDestroy() {
    this.stop();
  }

  start() {
    this.interval = setInterval(() => {
      this.emit?.("count", this.input.count + 1);
    }, 500);
  }

  stop() {
    clearInterval(this.interval);
  }
}
