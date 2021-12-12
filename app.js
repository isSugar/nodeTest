const express  = require(express)

const app = express()

app.get('/',(Request,Response) => {
  Response.send('Hello Express!')
})
app.post('/post',(req,res) => {
  res.send('这个是post请求')
})

app.listen(8000,() => {
  console.log("http://localhost:8000")
})