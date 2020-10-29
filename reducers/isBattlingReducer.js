const isBattlingReducer = (state = false, action) => {
    switch (action.type) {
        case "IS_BATTLING":
            return action.payload
        default: return state
    }

}
export default isBattlingReducer