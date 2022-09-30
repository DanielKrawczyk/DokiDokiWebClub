import ICharacter from "@/Model/Engine/Character/ICharacter";
import ICharacterImages from "@/Model/Engine/Character/ICharacterImages";
import { GetID } from "@/Handlers/HandleDOM";
import PositionList from "./Features/PositionList";

export default class Character implements ICharacter {
  public readonly CharacterName: string;
  public readonly Effects: Array<string>;
  public readonly Position: string;
  public readonly Images: ICharacterImages;

  constructor( CharacterName: string, Effects: Array<string>, Position: string, Images: ICharacterImages ) {
    this.CharacterName = CharacterName;
    this.Effects = Effects;
    this.Position = Position;
    this.Images = Images;
  }

  Element = (): DOMTokenList => { return GetID(`character-${this.CharacterName}`).classList }

  ResetPosition = (): void => PositionList.PositionList.forEach((position: string) => this.Element().remove(position));

  CheckEffects = (): void => this.Effects.forEach((effect: string) => this.ImplementEffect(effect));

  ImplementEffect = (effect: string): void => {
    switch(effect) {

      case 'fade-in':
          this.Element().add('fade-in');
          break;

      case 'fade-out':
          this.Element().remove('fade-in');
          this.Element().remove('fade-left', 'fade-right');
          break;

      case 'push-down':
          this.Element().add('push-down');
          break;

      case 'push-back':
          this.Element().remove('push-down');
          break;

      case 'jump':
          this.Element().remove('push-down');
          this.Element().add('jump');
          break;

      case 'fade-from-left':
          this.Element().add('fade-from-left');
          break;

      case 'fade-left':
        this.Element().add('fade-from-left');
          this.Element().add('fade-left');
          break;

      case 'fade-left-away':
          this.Element().remove('fade-left');
          break;

      default:
          break;
    }
  }

  CheckPosition = (): void => {
    switch( this.Position ) {
      case 'center':
          this.Element().add('pos-center');
          break;
      case 'center-left':
          this.Element().add('pos-center-left');
          break;
      case 'center-right':
          this.Element().add('pos-center-right');
          break;
      case 'left':
          this.Element().add('pos-left');
          break;
      case 'right':
          this.Element().add('pos-right');
          break;
      case 'left-center':
          this.Element().add('pos-left-center');
          break;
      case 'right-center':
          this.Element().add('pos-right-center');
          break;
      case 'behind-left-center':
          this.Element().add('pos-behind-left-center');
          break;
      default:
          break;
    }

    const { Body } = this.Images;

    // Natsuki head fix - don't ask, it was terrible ;-;
    if ( this.CharacterName === "Natsuki" )
      if ( Body[0] === "3" || Body[0] === "3b" )
        this.Element().add( "natsuki-head-fix" );
    
  }
}