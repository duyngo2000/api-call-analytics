import express from 'express'
const app = express()
import FILE1 from './file1.js'
const port = process.env.PORT || 5000
import bodyParser from 'body-parser'
import cors from 'cors'

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send(FILE1)
})

app.get('/audioID=:id', function (req, res) {
  const id = req.params.id
  res.send(FILE1.find(audioID => audioID.audioID ==id))
})


app.delete('/audioID=:id', function (req, res) {
    const id = req.params.id
    const audioID = FILE1.map(item=>item.audioID)

    if(audioID.indexOf(Number(id)) !== -1){
        delete FILE1[id-1]
        res.send('FILE1' + FILE1)
    }
    else{
        res.send('không có' + id)
    }
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})