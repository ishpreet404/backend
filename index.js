const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/github", (res,req) => {
    res.send("ishpreet404")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
