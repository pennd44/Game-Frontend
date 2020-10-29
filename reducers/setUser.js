const setUserReducer = (state = {}, action) => {
    switch (action.type) {
        case "SETUSER":
            return { ...state, ...action.payload }
        default: return state
    }

}
export default setUserReducer