const currentActivityReducer = (state = "", action) => {
    switch (action.type) {
        case "CURRENT_ACTIVITY":
            return action.payload
        default: return state
    }

}
export default currentActivityReducer