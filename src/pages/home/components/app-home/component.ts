import Component from "../../../../../types";

type State = {
  appName: string;
};

export default class Home extends Component<State> {
  onCreate(input: any) {
    this.state = { appName: "Home" };
  }

  changeAppName({ target }: Event) {
    this.state.appName = (target as HTMLInputElement).value;
  }
}
