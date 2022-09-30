import ALinkedList from "../../../Model/Engine/Features/ALinkedList";
import ListItem from "./ListItem";

export default class LinkedList<T> extends ALinkedList<T> {
  private List: Array<ListItem<T>> = [];
  public Iterator = 0;

  constructor(Array: Array<T> = []) {
    super();
    this.AddMultiple(Array);
  }

  public get Value(): T | null {
    if ( this.List.length !== 0 )
        return this.List[this.Iterator].Value;
    else 
        return null;
  }

  public get Previous(): T | null {
    if ( this.List.length !== 0 ) 
        return this.List[this.Iterator].Previous;
    else
        return null;
  }

  public get Next(): T | null  {
    if (this.List.length !== 0)
        return this.List[this.Iterator].Next;
    else 
        return null;
  }

  public Move = (): boolean => {
    if ( this.List.length > this.Iterator ) {
        this.Iterator++;
        return true;
    } else {
        return false;
    }
  }

  public GetPrevious = (numberOfElements: number): Array<ListItem<T>> => {
    let tempIterator = this.Iterator;
    const tempArray = [];

    for (let i = 0; i < numberOfElements; i++) {
        if (tempIterator > 0) {
            tempIterator--;
            tempArray.push(this.List[tempIterator])
        }
    }

    return tempArray;
  }
 
  public Reset = (): LinkedList<T> => {
      this.Iterator = 0;

      return this;
  }

  public AddMultiple = (Array: Array<T>): void => {
      Array.forEach((item: T) => {
          this.Add(item);
      })
  }

  public Add = (Value: T): LinkedList<T> => {
      this.List.push(new ListItem<T>(Value));
      this.Update();

      return this;
  }

  protected Update = (): void => {
      const LastIndex = this.List.length - 1;

      if (this.List[LastIndex - 1] !== undefined) {
          this.List[LastIndex - 1].Next = this.List[LastIndex].Value;
          this.List[LastIndex].Previous = this.List[LastIndex - 1].Value;
      }
  }
}