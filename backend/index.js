const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

const memos = ['memo1', 'memo2', 'memo3'];

app.get('/api/memos', (req, res) => {
    res.send(memos)
})
app.post("/api/memos", (req, res) => {
    memos.push(req.body.content)
    res.send(memos)
})
app.post("/api/edit", (req, res) => {
    const idx = req.body.idx;
    const content = req.body.content
    memos[idx] = content;
    res.send(memos)
})

app.post("/api/delete", (req, res) => {
    const idx = req.body.idx;
    memos.splice(idx, 1)
    res.send(memos)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})