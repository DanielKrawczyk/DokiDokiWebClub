import LinkedList from "../../../Engine/Features/LinkedList/LinkedList";

export default abstract class ALinkedList<T> {
  protected abstract Update: () => void;
  public abstract Move: () => LinkedList<T> | boolean;
  public abstract Reset: () => LinkedList<T>;
  public abstract Add: ( arg: T ) => LinkedList<T>;
  public abstract AddMultiple: ( args: Array<T> ) => void;

  public abstract get Value(): T | null | undefined;
  public abstract get Previous(): T | null | undefined;
  public abstract get Next(): T | null | undefined;
}