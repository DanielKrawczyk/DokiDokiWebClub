import { GetID } from "@/Handlers/HandleDOM";

const ELEMENTS = {
  ARROW: "arrow"
}

export default class Writer {
  private Index = 0;
  private readonly Time = 35;
  private Content = "";
  public IsDone = false;

  private Text: Array<string> = [];

  public SetNewText = (ArrayOfChars: Array<string>) => this.Text = ArrayOfChars;
 
  public Write = (TargetID: string): void => this.WritingScript(GetID(TargetID));

  private WritingScript(Target: HTMLElement): void {
    this.Content += this.Text[this.Index];
    Target.innerHTML = this.Content;
    this.Index++;
    
    if (this.Index < this.Text.length && !this.IsDone) {
        setTimeout(() => {
            this.WritingScript( Target );
        }, this.Time);
    } else if (this.Index < this.Text.length && this.IsDone) {
        this.WritingScript(Target);
    } else {
        this.IsDone = true;
        GetID("arrow")?.classList.add("active");
    }
  }
}