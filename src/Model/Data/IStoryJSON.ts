import Character from "@/Engine/Character/Character";

export default interface IStoryJSON {
  music: string;
  background: string;
  text: string;
  person: string;
  characters: Array<Character>;
}