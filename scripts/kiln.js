export const firePottery = (pottery, temperature) => {
    pottery.fired = true
    pottery.cracked = false
        if (temperature > 2200) {
            pottery.cracked = true
        } else {
            pottery.cracked = false
        }
            return pottery
}