var express = require('express')
    app     = express()

app.get('/', (req, res) => {
    console.log('A new hello request')
    res.send('Hello there...! :)')
})

app.listen(1337, () => {
    console.log('App is running...')
})
