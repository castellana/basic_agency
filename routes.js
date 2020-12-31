const express = require('express')
const router = express.Router()

const newsdata = require('./newsdata.json')
const thinkdata = require('./thinkdata.json')
const featnewsdata = require('./featnewsdata.json')
// const worksdata = require('./worksdata.json')


// router.get('/', (req, res) => {
//     res.render('index', { nav })
// })
router.get('/', (req, res) => {
    res.render('index', { title: 'Home', featnewsdata})
})


router.get('/work', (req, res) => {
    res.render('work', { title: 'Work'})
})

router.get('/about', (req, res) => {
    res.render('about',{ title: 'About'})
})

router.get('/news', (req, res) => {
    res.render('news', { title: 'News', newsdata})
})

router.get('/thinking', (req, res) => {
    res.render('thinking', { title: 'Thinking', thinkdata})
})

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact'})
})

router.get('/aside', (req, res) => {
    res.render('aside', { title: 'aside'})
})



module.exports = router