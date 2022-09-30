export default class RNG {
    public static Random = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
}