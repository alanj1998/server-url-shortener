let express = require('express'),
    app = express(),
    port = process.env.PORT || 8080

app.use(express.static('/public'))
app.set('view-engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index.pug')
})

app.listen(port, () => console.log(`Listening on ${port}...`))