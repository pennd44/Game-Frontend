export const increment = (ammount) => {
    return {
        type: 'INCREMENT',
        payload: ammount
    }
}

export const decrement = (ammount) => {
    return {
        type: 'DECREMENT',
        payload: ammount
    }
}
export const signin = () => {
    return {
        type: "SIGN_IN",
    }
}
export const setUser = (user) => {
    return {
        type: "SETUSER",
        payload: user
    }
}
export const fetchEnemies = (enemies) => {
    return {
        type: "FETCH_ENEMIES",
        payload: enemies
    }
}
export const updateEnemy = (enemy) => {
    return {
        type: "UPDATE_ENEMY",
        payload: enemy
    }
}
export const currentActivity = (activity) => {
    return {
        type: "CURRENT_ACTIVITY",
        payload: activity
    }
}
export const isBattling = (boolean) => {
    return {
        type: "IS_BATTLING",
        payload: boolean
    }
}
export const setBattleBg = (bg) => {
    return {
        type: "SETBATTLEBG",
        payload: bg
    }
}
export const logout = () => {
    return {
        type: "LOGOUT"
    }
}
// export const fetchingEnemies = () => {
//     return (dispatch) => {
//         fetch('http://localhost:3000/api/v1/enemies')
//             .then(res => res.json)
//             .then(enemies => dispatch(fetchEnemies(enemies)))
//     }
// }
