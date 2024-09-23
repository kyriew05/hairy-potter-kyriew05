let potteryPrimaryKey = 1
//function to hold an object with the pottery's properties
export const makePottery = (shape, weight, height) => {
    return {
        shape,
        weight,
        height,
        id: potteryPrimaryKey
    }
}