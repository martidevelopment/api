const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.json({message:"200 OK"})
})

app.get('/json/colors', (req, res) => {
    const colors = ['Red', 'Green', 'Blue', 'Yellow', 'White', 'Black', 'Silver', 'Maroon', 'Brown', 'Magenta', 'Violet', 'Purple'] 
    const randomizedColor = colors[Math.floor(Math.random() * colors.length)];     

    res.json({color:randomizedColor})
})

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`)
})
