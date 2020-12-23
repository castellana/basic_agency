const express = require('express')
const router = express.Router()

// const nav = require('./nav.json')
// const gallery = require('./gallery.json')
// const news = require('./news.json')


// router.get('/', (req, res) => {
//     res.render('index', { nav })
// })
router.get('/', (req, res) => {
    res.render('index')
})


router.get('/work', (req, res) => {
    res.render('work')
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/news', (req, res) => {
    res.render('news')
})

router.get('/thinking', (req, res) => {
    res.render('thinking')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})




module.exports = router