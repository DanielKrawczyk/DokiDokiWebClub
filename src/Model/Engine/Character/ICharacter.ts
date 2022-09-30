import ICharacterImages from "./ICharacterImages";

export default interface ICharacter {
  CharacterName: string;
  Effects: Array<string>;
  Position: string;
  Images: ICharacterImages;
  
  ResetPosition: () => void;
  CheckEffects: () => void;
  ImplementEffect: (arg: string) => void;
  CheckPosition: () => void;
  Element: () => DOMTokenList;
}