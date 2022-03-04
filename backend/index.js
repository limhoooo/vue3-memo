const express = require('express')
const app = express()
const port = 3000

const memos = ['memo1', 'memo2', 'memo3'];

app.get('/api/memos', (req, res) => {
    res.send(memos)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})