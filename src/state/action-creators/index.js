export const depositMoney = (amount) => {
    return {
            type:"wood",
            payload: amount
    }
}

export const withdrawMoney = (amount) => {
    return {
            type:"metal",
            payload: amount
    }
}