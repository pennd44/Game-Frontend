const BattleBGReducer = (state = "", action) => {
    switch (action.type) {
        case "SETBATTLEBG":
            return action.payload
        default: return state
    }

}
export default BattleBGReducer