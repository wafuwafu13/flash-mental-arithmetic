export const randomNumber = (max: number, min: number) => {
    return Math.floor( Math.random() * (max + 1 - min) ) + min
}