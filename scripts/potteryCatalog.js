const potteryForSale = [] //empty array to store the returned values

// function to determine how much each item will be based on their weight and if it returns cracked, to not sell it
export const toSellOrNotToSell = (pottery) => {
    let price

    if (pottery.weight >= 6) { //if the pottery's weight is greater than or equal to 6, the price will be 40
        price = 40
    } else {
        price = 20 //if weight is less than 6, price wll be 20
    } pottery.price = price 

    if (!pottery.cracked) { //if pottery is not cracked, push to be sold (pottery)
        potteryForSale.push(pottery)
    } return pottery
}

export const usePottery = () => {
    return [...potteryForSale]
}