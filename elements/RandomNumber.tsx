export const randomNumber = (max: number, min: number): number => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};
