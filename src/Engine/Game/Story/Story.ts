import IStory from "@/Model/Engine/Story/IStory";
import Character from "@/Engine/Character/Character";
import IStoryJSON from "@/Model/Data/IStoryJSON";

export default class Story implements IStory {
  public readonly Music: string;
  public readonly Background: string;
  public readonly Text: string;
  public readonly Person: string;
  public readonly Characters: Array<Character>;

  constructor(Data: IStoryJSON) {
    this.Music = Data.music;
    this.Background = Data.background;
    this.Text = Data.text;
    this.Person = Data.person;
    this.Characters = Data.characters;
  }
}