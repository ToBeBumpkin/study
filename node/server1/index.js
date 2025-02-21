const express = require('express')

const app = express()

const port = 8001

app.get('/server1', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send('get请求')
})
app.post('/server1', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','*')
    res.send('post请求')
})

app.post('/delay', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(()=>{
        res.send('post请求')
    },5000)
    
})
app.get('/posts',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    let posts = [
        {
            id:1,
            name:'小明',
            age:18
        },
        {
            id:2,
            name:'张三',
            age:55
        },
    ]
    res.send({posts:JSON.stringify(posts)})
})

app.listen(port, () => {
    console.log('服务器启动了，端口号' + port);
})