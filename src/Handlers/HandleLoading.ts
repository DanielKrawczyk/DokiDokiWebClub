import IAssets from '@/Model/Engine/Loading/IAssets';
import IAssetsToLoad from "@/Model/Handlers/IAssetsToLoad";
import AppSettings from "@/AppSettings";

const images = [
    ...require.context(`@/Assets/Images/MainMenu`, true, /\.png$/).keys(),
    ...require.context(`@/Assets/Images/UI`, true, /\.png$/).keys(),
    ...require.context(`@/Assets/Images/Warning`, true, /\.png$/).keys(),
    ...require.context(`@/Assets/Images/Story`, true, /(\.png$ | \.jpg$ | \.JPG$)/).keys(),
    ...require.context(`@/Assets/Images/Monika`, true, /\.png$/).keys(),
    ...require.context(`@/Assets/Images/Natsuki`, true, /\.png$/).keys(),
    ...require.context(`@/Assets/Images/Sayori`, true, /\.png$/).keys(),
    ...require.context(`@/Assets/Images/Yuri`, true, /\.png$/).keys(),
    ...require.context(`@/Assets/Images/Yuri/stab`, true, /\.png$/).keys(),
];
const audio = [
    ...require.context(`@/Assets/Audio`, true, /\.ogg$/).keys(),
];

export default class LoadingAssets {

    private readonly Settings = new AppSettings();
    private DoneLoading = false;
    private Statusbar: HTMLElement;
    private PercentInfo: HTMLElement;
    private Count = 0;
    private AssetsToLoad: IAssetsToLoad = { Audio: audio, Images: images };
    private TotalImagesCount = this.AssetsToLoad.Images.length;
    private TotalAudioCount = this.AssetsToLoad.Audio.length;
    private Total = this.TotalAudioCount + this.TotalImagesCount;

    private Assets: IAssets = { Audio: [], Images: [] };

    constructor() {
        this.Statusbar = document.getElementById( 'loading-status' ) as HTMLElement;
        this.PercentInfo = document.getElementById( 'loading-percent' ) as HTMLElement;
    }

    public LoadAssets() {
        if ( this.Total === 0 || this.DoneLoading ) return this.DoneLoading = true;

        console.log(this.Assets)

        this.ImagesLoader();

        this.AudioLoader();

        return this.AllAssetsLoaded();
    }

    private AssetLoaded(): any {
        this.Count++;

        const StatusbarProgress = ( ( 40 / this.Total * this.Count ) + "vw");
        const Percent = ( ( 50 / this.Total * this.Count ) + "%" );

        this.Statusbar.style.width = StatusbarProgress;
        this.PercentInfo.innerHTML = Percent;

        if ( this.Count === this.Total ) {
            this.DoneLoading = true;
        }
    }

    private AllAssetsLoaded() {
        const result = {
            Audio: this.Assets.Audio,
            Images: this.Assets.Images,
        };

        if (this.Settings.DevelopmentMode) {
            console.log({
                ...result,
                Total: this.Total
            })
        }

        return result;
    }

    private ImagesLoader() {
        for ( let i = 0; i < this.TotalImagesCount; i++ ) {
            const image = new Image();
            image.onload = this.AssetLoaded();
            image.onerror = this.AssetLoaded();
            image.src = `${this.Settings.AssetsPath.Images}/${this.AssetsToLoad.Images[i]}`;

            this.Assets.Images.push(image);
        }
    }

    private AudioLoader() {
        for ( let i = 0; i < this.TotalAudioCount; i++ ) {
            const audio = new Audio();
            audio.onload = this.AssetLoaded();
            audio.onerror = this.AssetLoaded();
            audio.src = `${this.Settings.AssetsPath.Audio}/${this.AssetsToLoad.Audio[i]}`;

            this.Assets.Audio.push(audio);
        }
    }
}