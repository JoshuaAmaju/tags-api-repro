import MarkoComponent from "marko/src/components/Component";

type LifeCycleEvents =
  | "create"
  | "input"
  | "render"
  | "mount"
  | "update"
  | "destroy"
  | any;

type EventEmitterWrapper = {
  on(event: string, listener: () => void): void;
  once(event: string, listener: () => void): void;
  removeAllListeners(event: string): void;
  removeListeneron(event: string, listener: () => void): void;
};

// @ts-ignore
// export default abstract class Component<
//   State extends Record<string, any> = any,
//   Input extends Record<string, any> = any
// > implements MarkoComponent {
//   id = "";
//   input: State = {} as State;
//   state: Input = {} as Input;

//   el = (null as any) as HTMLElement;
//   els = (null as any) as HTMLElement[];

//   onCreate?(input: Input): void;
//   onInput?(input: Input): void;
//   onMount?(): void;
//   onUpdate?(): void;
//   onDestroy?(): void;

//   destroy(): void {
//     throw new Error("Method not implemented.");
//   }

//   elId(key: string, index?: number): string {
//     throw new Error("Method not implemented.");
//   }

//   forceUpdate(): void {
//     throw new Error("Method not implemented.");
//   }

//   getComponent(key: string, index?: number): MarkoComponent {
//     throw new Error("Method not implemented.");
//   }

//   getComponents(key: string): MarkoComponent[] {
//     throw new Error("Method not implemented.");
//   }

//   getEl<elementType extends HTMLElement>(
//     key?: string,
//     index?: number
//   ): elementType {
//     throw new Error("Method not implemented.");
//   }

//   getElId(key: string, index?: number): string {
//     throw new Error("Method not implemented.");
//   }

//   getEls<elementType extends HTMLElement>(key?: string): elementType[] {
//     throw new Error("Method not implemented.");
//   }

//   isDestroyed(): boolean {
//     throw new Error("Method not implemented.");
//   }

//   replaceState(newState: State): void {
//     throw new Error("Method not implemented.");
//   }

//   setState<K extends keyof State>(name: K, value: State[K]): void;

//   setState<K extends keyof State>(name: K): void;

//   setState<K extends keyof State>(name: K, value?: State[K]) {
//     throw new Error("Method not implemented.");
//   }

//   setStateDirty<K extends keyof State>(name: K, value?: State[K]): void {
//     throw new Error("Method not implemented.");
//   }

//   shouldUpdate(newState: State, newProps: Input): boolean {
//     throw new Error("Method not implemented.");
//   }

//   update(): void {
//     throw new Error("Method not implemented.");
//   }

//   addListener(
//     event: string | symbol,
//     listener: (...args: any[]) => void
//   ): this {
//     throw new Error("Method not implemented.");
//   }

//   on(event: string | symbol, listener: (...args: any[]) => void): this {
//     throw new Error("Method not implemented.");
//   }

//   once(event: string | symbol, listener: (...args: any[]) => void): this {
//     throw new Error("Method not implemented.");
//   }

//   removeListener(
//     event: string | symbol,
//     listener: (...args: any[]) => void
//   ): this {
//     throw new Error("Method not implemented.");
//   }

//   off(event: string | symbol, listener: (...args: any[]) => void): this {
//     throw new Error("Method not implemented.");
//   }

//   removeAllListeners(event?: string | symbol): this {
//     throw new Error("Method not implemented.");
//   }

//   setMaxListeners(n: number): this {
//     throw new Error("Method not implemented.");
//   }

//   getMaxListeners(): number {
//     throw new Error("Method not implemented.");
//   }

//   listeners(event: string | symbol): Function[] {
//     throw new Error("Method not implemented.");
//   }

//   rawListeners(event: string | symbol): Function[] {
//     throw new Error("Method not implemented.");
//   }

//   emit(event: string | symbol, ...args: any[]): boolean {
//     throw new Error("Method not implemented.");
//   }

//   listenerCount(event: string | symbol): number {
//     throw new Error("Method not implemented.");
//   }

//   prependListener(
//     event: string | symbol,
//     listener: (...args: any[]) => void
//   ): this {
//     throw new Error("Method not implemented.");
//   }

//   prependOnceListener(
//     event: string | symbol,
//     listener: (...args: any[]) => void
//   ): this {
//     throw new Error("Method not implemented.");
//   }

//   eventNames(): (string | symbol)[] {
//     throw new Error("Method not implemented.");
//   }

//   appendTo(referenceEl: string | Node): this {
//     throw new Error("Method not implemented.");
//   }

//   prependTo(referenceEl: string | Node): this {
//     throw new Error("Method not implemented.");
//   }

//   replace(referenceEl: string | Node): this {
//     throw new Error("Method not implemented.");
//   }

//   replaceChildrenOf(referenceEl: string | Node): this {
//     throw new Error("Method not implemented.");
//   }

//   insertBefore(referenceEl: string | Node): this {
//     throw new Error("Method not implemented.");
//   }

//   insertAfter(referenceEl: string | Node): this {
//     throw new Error("Method not implemented.");
//   }
// }

export default abstract class Component<
  State extends Record<string, any> = any,
  Input extends Record<string, any> = any
> {
  // Variables
  state: State = {} as State;
  input: Input = {} as Input;

  id: MarkoComponent["id"] = "";
  el: MarkoComponent["el"] = null as any;
  els: MarkoComponent["els"] = null as any;

  onCreate?(input: Input): void;
  onInput?(input: Input): void;
  onMount?(): void;
  onUpdate?(): void;
  onDestroy?(): void;

  destroy(): void {
    throw new Error("Method not implemented.");
  }

  elId(key: string, index?: number): string {
    throw new Error("Method not implemented.");
  }

  forceUpdate(): void {
    throw new Error("Method not implemented.");
  }

  getComponent(key: string, index?: number): MarkoComponent {
    throw new Error("Method not implemented.");
  }

  getComponents(key: string): MarkoComponent[] {
    throw new Error("Method not implemented.");
  }

  getEl<elementType extends HTMLElement>(
    key?: string,
    index?: number
  ): elementType {
    throw new Error("Method not implemented.");
  }

  getElId(key: string, index?: number): string {
    throw new Error("Method not implemented.");
  }

  getEls<elementType extends HTMLElement>(key?: string): elementType[] {
    throw new Error("Method not implemented.");
  }

  isDestroyed(): boolean {
    throw new Error("Method not implemented.");
  }

  replaceState(newState: State): void {
    throw new Error("Method not implemented.");
  }

  setState<K extends keyof State>(name: K, value: State[K]): void;

  setState<K extends keyof State>(name: K): void;

  setState<K extends keyof State>(name: K, value?: State[K]) {
    throw new Error("Method not implemented.");
  }

  setStateDirty<K extends keyof State>(name: K, value?: State[K]): void {
    throw new Error("Method not implemented.");
  }

  shouldUpdate(newState: State, newProps: Input): boolean {
    throw new Error("Method not implemented.");
  }

  update(): void {
    throw new Error("Method not implemented.");
  }

  addListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this {
    throw new Error("Method not implemented.");
  }

  on(event: string | symbol, listener: (...args: any[]) => void): this {
    throw new Error("Method not implemented.");
  }

  once(event: string | symbol, listener: (...args: any[]) => void): this {
    throw new Error("Method not implemented.");
  }

  removeListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this {
    throw new Error("Method not implemented.");
  }

  off(event: string | symbol, listener: (...args: any[]) => void): this {
    throw new Error("Method not implemented.");
  }

  removeAllListeners(event?: string | symbol): this {
    throw new Error("Method not implemented.");
  }

  setMaxListeners(n: number): this {
    throw new Error("Method not implemented.");
  }

  getMaxListeners(): number {
    throw new Error("Method not implemented.");
  }

  listeners(event: string | symbol): Function[] {
    throw new Error("Method not implemented.");
  }

  rawListeners(event: string | symbol): Function[] {
    throw new Error("Method not implemented.");
  }

  emit(event: string | symbol, ...args: any[]): boolean {
    throw new Error("Method not implemented.");
  }

  listenerCount(event: string | symbol): number {
    throw new Error("Method not implemented.");
  }

  prependListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this {
    throw new Error("Method not implemented.");
  }

  prependOnceListener(
    event: string | symbol,
    listener: (...args: any[]) => void
  ): this {
    throw new Error("Method not implemented.");
  }

  eventNames(): (string | symbol)[] {
    throw new Error("Method not implemented.");
  }

  appendTo(referenceEl: string | Node): this {
    throw new Error("Method not implemented.");
  }

  prependTo(referenceEl: string | Node): this {
    throw new Error("Method not implemented.");
  }

  replace(referenceEl: string | Node): this {
    throw new Error("Method not implemented.");
  }

  replaceChildrenOf(referenceEl: string | Node): this {
    throw new Error("Method not implemented.");
  }

  insertBefore(referenceEl: string | Node): this {
    throw new Error("Method not implemented.");
  }

  insertAfter(referenceEl: string | Node): this {
    throw new Error("Method not implemented.");
  }

  // Methods
  //   destroy(_?: { recursive?: boolean; removeNode?: boolean }): void {}

  //   forceUpdate(): void {}

  //   getEl<elementType extends HTMLElement>(
  //     key?: string,
  //     index?: number
  //   ): elementType {
  //     throw new Error("No implementation");
  //   }

  //   getEls<elementType extends HTMLElement>(key?: string): elementType[] {
  //     throw new Error("No implementation");
  //   }

  //   getElId<elementType extends HTMLElement>(
  //     key?: string,
  //     index?: number
  //   ): elementType {
  //     throw new Error("No implementation");
  //   }

  //   getComponent<elementType extends Component>(
  //     key: string,
  //     index?: number
  //   ): elementType {
  //     throw new Error("No implementation");
  //   }

  //   getComponents<elementType extends Component>(
  //     key: string,
  //     index?: number
  //   ): elementType[] {
  //     throw new Error("No implementation");
  //   }

  //   isDestroyed(): boolean {
  //     throw new Error("No implementation");
  //   }

  //   isDirty(): boolean {
  //     throw new Error("No implementation");
  //   }

  //   replaceState(newState: Partial<State>): void {}

  //   rerender(input?: Input): void {}

  //   setState<key extends keyof State, value extends State[key]>(
  //     name: key | State,
  //     value?: value
  //   ): void {}

  //   setStateDirty<K extends keyof State>(key: K, value?: State[K]): void {}

  //   update(): void {
  //     throw new Error("No implementation");
  //   }

  //   subscribeTo(
  //     emitter: Window | Document | NodeJS.EventEmitter
  //   ): EventEmitterWrapper {
  //     throw new Error("No implementation");
  //   }

  //   on(eventType: LifeCycleEvents, callback: (...args: any[]) => void): void {
  //     throw new Error("No implementation");
  //   }

  //   once(eventType: LifeCycleEvents, callback: (...args: any[]) => void): void {
  //     throw new Error("No implementation");
  //   }

  //   emit(eventName: string, ...args: any[]): void {}

  //   // DOM manipulation
  //   appendTo(targetEl: HTMLElement): void {}
  //   insertAfter(targetEl: HTMLElement): void {}
  //   insertBefore(targetEl: HTMLElement): void {}
  //   prependTo(targetEl: HTMLElement): void {}
  //   replace(targetEl: HTMLElement): void {}
  //   replaceChildrenOf(targetEl: HTMLElement): void {}
}
