//function to return whether or not the item has been fired or not, as well as if it is cracked or not
export const firePottery = (pottery, temperature) => {
    pottery.fired = true
    pottery.cracked = false
        if (temperature > 2200) { //if temp is greater than 2200, item is cracked
            pottery.cracked = true
        } else { //if temp is less than 2200, item is not cracked
            pottery.cracked = false 
        }
            return pottery
}