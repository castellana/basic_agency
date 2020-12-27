const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

//////////
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts);
///////


const routes = require('./routes')
//json
// const nav = require('./navigation.json')


app.use(express.static('public'))
app.set('view engine', 'ejs')
 
//express sucht automatisch in einem "views" Ordner nach den Templates. (Si lo quisiéramos tener en otra carpeta, tendríamos que decírselo a express)
app.use(routes)
 
// app.get('/', (req, res) => {
//    res.render('index', {title: "Main"})
// })

app.use((req, res) => {
   res.status(404).render('./404');
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))


