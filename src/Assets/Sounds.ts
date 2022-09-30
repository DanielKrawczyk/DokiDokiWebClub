export class Hover {
  private static _hoverAudio = require('@/Assets/Audio/hover.ogg');
  public static Play = (): Promise<void> => new Audio(Hover._hoverAudio).play();
}

export class Click {
  private static _click = require('@/Assets/Audio/select.ogg');
  public static Play = (): Promise<void> => new Audio(Click._click).play();
}