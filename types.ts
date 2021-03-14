// type LifeCycleEvents =
//   | "create"
//   | "input"
//   | "render"
//   | "mount"
//   | "update"
//   | "destroy";

type Listener = (...args: any[]) => void;

type EventEmitterWrapper = {
  on(event: string, listener: Listener): void;
  once(event: string, listener: Listener): void;
  removeAllListeners(event: string): void;
  removeListeneron(event: string, listener: Listener): void;
};

export default abstract class Component<
  State extends Record<string, any> = any,
  Input extends Record<string, any> = any
> {
  state: State;
  input: Input;

  id: string;
  el: HTMLElement;
  els: HTMLElement[];

  onCreate?(input: Input): void;

  onInput?(input: Input): void;

  onMount?(): void;

  onUpdate?(): void;

  onDestroy?(): void;

  destroy?(): void;

  elId?(key: string, index?: number): string;

  forceUpdate?(): void;

  getComponent?<componentType extends Component>(
    key: string,
    index?: number
  ): componentType;

  getComponents?<componentType extends Component>(key: string): componentType[];

  getEl?<elementType extends HTMLElement>(
    key?: string,
    index?: number
  ): elementType;

  getElId?(key: string, index?: number): string;

  getEls?<elementType extends HTMLElement>(key?: string): elementType[];

  isDestroyed?(): boolean;

  replaceState?(newState: State): void;

  setState?<K extends keyof State>(name: K, value: State[K]): void;

  setState?<K extends keyof State>(name: K): void;

  setState?<K extends keyof State>(name: K, value?: State[K]): void;

  setStateDirty?<K extends keyof State>(name: K, value?: State[K]): void;

  shouldUpdate?(newState: State, newProps: Input): boolean;

  update?(): void;

  rerender?(input?: Input): void;

  subscribeTo?(
    emitter: Window | Document | NodeJS.EventEmitter
  ): EventEmitterWrapper;

  addListener?(event: string | symbol, listener: Listener): this;

  on?(event: string | symbol, listener: Listener): this;

  once?(event: string | symbol, listener: Listener): this;

  removeListener?(event: string | symbol, listener: Listener): this;

  off?(event: string | symbol, listener: Listener): this;

  removeAllListeners?(event?: string | symbol): this;

  setMaxListeners?(n: number): this;

  getMaxListeners?(): number;

  listeners?(event: string | symbol): Function[];

  rawListeners?(event: string | symbol): Function[];

  emit?(event: string | symbol, ...args: any[]): boolean;

  listenerCount?(event: string | symbol): number;

  prependListener?(event: string | symbol, listener: Listener): this;

  prependOnceListener?(event: string | symbol, listener: Listener): this;

  eventNames?(): (string | symbol)[];

  appendTo?(referenceEl: string | Node): this;

  prependTo?(referenceEl: string | Node): this;

  replace?(referenceEl: string | Node): this;

  replaceChildrenOf?(referenceEl: string | Node): this;

  insertBefore?(referenceEl: string | Node): this;

  insertAfter?(referenceEl: string | Node): this;
}
