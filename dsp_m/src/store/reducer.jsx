
import initState from './state.jsx'//全局数据
//actions type
import {
   SAVETOKEN,
} from './actions_type.jsx'


export default (state=initState,action) => {
    let {type,text}=action
    switch (type) {
        case SAVETOKEN: {//请求到的数据存在redux中
            return Object.assign({}, state, {username:text })
        }
        default:
            return state
    }
}

