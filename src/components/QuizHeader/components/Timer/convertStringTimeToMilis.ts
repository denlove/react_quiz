export const convertStringTimeToMilis = (timer: string): Date => {
    const timeInSec = timer
        .split(':')
        .reduceRight(
            (acc, item, ind, arr) => acc + +item * 60 ** (arr.length - 1 - ind),
            0,
        )
    let time = new Date()

    return new Date(time.setSeconds(time.getSeconds() + timeInSec))
}
