import Character from "@/Engine/Character/Character";

export default interface IStory {
  Music: string;
  Background: string;
  Text: string;
  Person: string;
  Characters: Array<Character>;
}