import { GetClass, GetID } from "@/Handlers/HandleDOM";
import ELEMENTS from './Constants';

export default class Screen {

    public static Add(id: string, param: string): void {
        GetID(id).classList.add(param);
    }

    public static Remove(id: string, param: string): void {
        GetID(id).classList.remove(param);
    }

    public static BlackscreenOn(): void {
        GetClass(ELEMENTS.BLACKSCREEN.CLASS).classList.add(ELEMENTS.BLACKSCREEN.SWITCH);
    }

    public static BlackscreenOff(): void {
        GetClass(ELEMENTS.BLACKSCREEN.CLASS).classList.remove(ELEMENTS.BLACKSCREEN.SWITCH);
    }

    public static FadeOut(id: string): void {
        GetID(id).classList.add("fade-out");
    }

    public static FadeIn(id: string): void {
        GetID(id).classList.remove("fade-out");
    }

    public static Hide(id: string): void {
        GetID(id).classList.add("hide");
    }

    public static Show(id: string): void {
        GetID(id).classList.remove("hide");
    }

    public static Active(id: string): void {
        GetID(id).classList.add("active");
    }

    public static Inactive(id: string): void {
        GetID(id).classList.remove("active");
    }
}