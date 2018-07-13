import{createStore} from 'redux'

let initState={
    data:null,
    num:null
}

export const actions={
//axios请求数据 存到redux中1
getData(text){
    return{
        type:'getData',
        text:text
    }
},
//点击按钮时，获取到对应的数据
btnNum(text){
    return {
        type: 'btnNum',
        text: text
    }
},
//数量加
addNum(text){
    return {
        type: 'addNum',
        text: text
    }
}

}

const reducer = (state = initState , action) => {
    let {type,text}=action
    switch (type) {
        case 'getData':
        console.log(text)
            return Object.assign({},state,{data:text})
        case 'btnNum':
            console.log(text)
            return Object.assign({}, state, { num: text})
        case 'addNum':
            console.log(text)
            return Object.assign({}, state, { num: text+1 })

        default:
            return state
    }
}
export default new createStore(reducer)
