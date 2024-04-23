const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/help', (req,res) => {
    res.send({
        name:'apple',
        color:'red'
    })
})

app.get('/about', (req,res) => {
    res.send('About page')
})
 
app.get('*', (req,res) => {
    res.send('404 page')
})

app.listen(3000, () => {
    console.log('Server started on port 3000.')
})