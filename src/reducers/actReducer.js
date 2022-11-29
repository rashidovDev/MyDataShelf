const SHOW_ACTIONS = "SHOW_ACTIONS"
const HIDE_ACTIONS = "HIDE_ACTIONS"

const defaultState = {
    actions : false
}

export default function actReducer(state = defaultState, action){
    switch(action.type){
        case SHOW_ACTIONS : return {...state, actions : !state.actions}
        case HIDE_ACTIONS : return {...state, actions : false}
        default : 
               return state
    }
}

export const showAction = () => ({type : SHOW_ACTIONS})
export const hideAction = () => ({type : HIDE_ACTIONS})








