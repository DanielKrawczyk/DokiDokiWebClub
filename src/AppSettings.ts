import IAssetsPath from "./Model/AppSettings/IAssetsPath";

export default class AppSettings {
  public readonly AssetsPath: IAssetsPath = {
    Images: "/Assets/Images",
    Audio: "/Assets/Audio"
  };
  public readonly DevelopmentMode: boolean = false; // should be false for production
  public readonly AllowSmallScreens: boolean = false; // should be false forever ever - bad things happens on small screens ;-;
  public readonly AllowTestingArea: boolean = false; // should be always false, unless for testing new animations
}