const express = require('express')
const router = express.Router()

// const nav = require('./nav.json')
// const gallery = require('./gallery.json')
// const news = require('./news.json')


// router.get('/', (req, res) => {
//     res.render('index', { nav })
// })
router.get('/', (req, res) => {
    res.render('index', { title: 'Home'})
})


router.get('/work', (req, res) => {
    res.render('work', { title: 'Work'})
})

router.get('/about', (req, res) => {
    res.render('about',{ title: 'About'})
})

router.get('/news', (req, res) => {
    res.render('news', { title: 'News'})
})

router.get('/thinking', (req, res) => {
    res.render('thinking', { title: 'Thinking'})
})

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact'})
})

router.get('/aside', (req, res) => {
    res.render('aside', { title: 'aside'})
})



module.exports = router