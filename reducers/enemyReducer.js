const { ActionSheetIOS } = require("react-native");

const enemyReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ENEMIES':
            return action.payload
        default:
            return state
    }
}
export default enemyReducer