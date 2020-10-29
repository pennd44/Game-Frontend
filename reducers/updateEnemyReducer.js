const updateEnemyReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_ENEMY":
            return { ...state, ...action.payload }
        default: return state
    }

}
export default updateEnemyReducer