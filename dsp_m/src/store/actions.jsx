import {
    SAVETOKEN,
} from './actions_type.jsx'
export const actions = {
    [SAVETOKEN](text) {
        return {
            type: SAVETOKEN,
            text: text
        }
    },
    
}