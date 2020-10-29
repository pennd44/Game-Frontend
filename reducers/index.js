import counterReducer from './counter'
import enemyReducer from './enemyReducer'
import loggedReducer from './isLogged'
import setUserReducer from './setUser'
import { combineReducers } from 'redux'
import updateEnemyReducer from './updateEnemyReducer'
import currentActivityReducer from './currentActivityReducer'
import isBattlingReducer from './isBattlingReducer'
import BattleBGReducer from './BattleBGReducer'

const appReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    user: setUserReducer,
    enemies: enemyReducer,
    enemy: updateEnemyReducer,
    isBattling: isBattlingReducer,
    battlebg: BattleBGReducer
    // activity: currentActivityReducer
})
const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === 'LOGOUT') {
        state = undefined;
    }

    return appReducer(state, action);
};
export default rootReducer