const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts);

const routes = require('./routes')
const nav = require('./navigation.json')


app.use(express.static('public'))
app.set('view engine', 'ejs')
 
app.use(routes)
 

app.use((req, res) => {
   res.status(404).render('./404', { title: '404', nav});
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))


