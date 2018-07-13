
const http = require('http');
const querystring = require('querystring')
const fs = require('fs')
const Mock = require('mockjs')
const _ = require('lodash')
const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        console.log(file)
        let filename = file.originalname.split('.')
        cb(null, filename[0] + '-' + Date.now() + '.' + filename[1])
    }
})

var upload = multer({ storage: storage })

const jwt = require('jsonwebtoken')

function queryApi(url, methods, params) {
    return new Promise((resolve, reject) => {
        let data = ''
        const options = {
            hostname: 'www.lb717.com',
            port: 80,
            path: url,
            method: methods,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        };

        let request = http.request(options, (response) => {
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                data += chunk
            });
            response.on('end', () => {
                resolve(JSON.stringify(data))
            });
        })
        if (methods.toLowerCase() == 'post') {
            request.write(querystring.stringify(params))
        }

        request.end()
    })


}
var ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'];

module.exports = function (app) {
    /* app.engine('html', require('ejs').renderFile);
    app.get('/',(req,res)=>{
        res.send(ejs.render('<ul><%= people.join(", "); %></ul>', {people: people}))
    }) */
    //注册接口
    app.post('/user/register', function (req, res) {
        let user = fs.readFileSync('user.json', { encoding: "utf-8" });
        user = JSON.parse(user);
        user.push(req.body);
        fs.writeFile('user.json', JSON.stringify(user), function () {
            res.end(JSON.stringify({
                "success": 1,
                "info": "register success"
            }))
        })
    })

    //login api
    app.post('/dsp-admin/user/login', function (req, res) {
        let user = fs.readFileSync(__dirname + '/user.json', { encoding: "utf-8" });
        user = JSON.parse(user);
        let login = req.body;

        let resInfo = {
            data: "login failed",
            msg: '登录信息有误',
            status: 1

        }
        user.forEach(usr => {
            if (usr.username == login.username && usr.password == login.password) {
                resInfo.success = 0;
                resInfo.info = "login success";
                resInfo.user = {
                    name: usr.username,
                    time: new Date().toLocaleTimeString(),
                    nickName: "Jacky"
                }
            }
        });

        if (resInfo.success == 0) {
            resInfo.token = jwt.sign(login, "zuoyebang", {
                expiresIn: 60 * 60
            })
        }

        res.end(JSON.stringify(resInfo))

    })
    //home graph
    app.post('/dsp-report/index', function (req, res) {
        let { startTime, endTime, dimLeft, dimRight, count } = req.body;
        let Random = Mock.Random;
        // let count = req.body.count || 5;
        let mockData = Mock.mock({
            "status": 0,
            "data": {
                exposeNum: 10000, //曝光量
                clickNum: 1000, // 点击量
                clickRate: 100,  // 点击率
                clickPrice: 10000, // 点击均价
                cpmPrice: 200000, // 千次展示均价
                consumed: 1000, // 时间段消耗(单位分)
                [`dataY1|${count || 5}`]: [() => Random.natural(1, 99999)],
                dataY2: [1100, 1382, 1325, 1600, 1600]
            }
        })
        res.send(mockData)

    })
    //计划列表
    let Random = Mock.Random
    let datatable = Mock.mock({
        "data": {
            "list|30": [{
                "key": () => Random.increment(),
                "name": () => Random.cname(),
                "promotionType": 1, // 推广目的
                "status|1": [1,2,3,4,999],//计划状态 (1:投放中；2:下线-达到日预算；3:下线-达到账户预算； 4:暂停；999:删除)
                "dayBudget": () => Random.natural(1000, 10000), // 计划日预算(单位分)
                "exposeNum": () => Random.natural(1000, 10000),//曝光量
                "clickNum": () => Random.natural(1000, 10000),//点击量
                "clickRate": () => Random.natural(1000, 10000),//点击率
                "clickPrice": () => Random.natural(1000, 10000),//点击均价；  单位是分 消费/点击量
                "cpmPrice": () => Random.natural(1000, 10000),//千次展示均价；  单位是分 消费/曝光量
                "consumed": () => Random.natural(1000, 10000), //总消耗
                "modifyTime": () => Random.natural(10000, 100000),
                "createTime": () => Random.natural(10000, 100000),
                "operatorId": 1,//操作人Id
                "operatorName": "张三" //创建人姓名
            }]
        }
    }) 
    app.post("/dsp-advert/campaigns/list",function(req,res){
        res.send(datatable)
    })

    //upload 上传接口
    app.post('/dsp-creative/creative/upload', upload.single('file'), function (req, res) {

        res.send({
            "data": {
                "size": req.file.size,
                "value": req.file.path,
                "key": "2A36B67C6"
            },
            "status": 0
        }
        )
    })
    app.get('/dsp-test', function (req, res) {
        res.send({ "test": "ok" })
    })
}

