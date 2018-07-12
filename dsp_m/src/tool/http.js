import {getCookie} from "../tool/cookie.js"
let querystring = {
    stringify(obj) {
        let arr = [];
        for (let i in obj) {
            arr.push(i + "=" + obj[i])
        }
        return arr.join("&")
    },
    parse(str) {
        let newarr = str.split("&")
        let o = {};
        for (let i = 0; i < newarr.length; i++) {
            let temp = newarr[i].split("=");
            o[temp[0]] = temp[1]
        }
        return o
    }

}
let base = process.env.NODE_ENV =="development"?"http://localhost:9000":""
export default {
    get(url, params) {
        let s = querystring.stringify(params)
        if (url.indexOf("?") == -1) {
            url = url + "?" + s
        } else {
            url = url + "&" + s
        }
        return new Promise((resolve, reject) => {
            fetch(base + url, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(body => body.json())
                .then(res => {
                    resolve(res)
                })
        })

    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            fetch(base + url, {
                method:"post",//必填
                headers: {
                    "Content-Type": "application/json",
                    "Token":getCookie("token")
                },
                body: JSON.stringify(params)
            })
                .then(body => { return body.json()} )
                .then(res => {
                    resolve(res)
                })
        })

    },
}