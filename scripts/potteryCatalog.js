const potteryForSale = []

export const toSellOrNotToSell = (pottery) => {
    let price

    if (pottery.weight >= 6) { //if the pottery's weight is greater than or equal to 6, the price will be 40
        price = 40
    } else {
        price = 20 //if weight is less than 6, price wll be 20
    } pottery.price = price 

    if (!pottery.cracked) { 
        potteryForSale.push(pottery)
    } return pottery
}

export const usePottery = () => {
    return [...potteryForSale]
}