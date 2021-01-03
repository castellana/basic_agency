const express = require('express')
const router = express.Router()

const newsdata = require('./newsdata.json')
const thinkdata = require('./thinkdata.json')
const featnewsdata = require('./featnewsdata.json')
const asidedata = require('./asidedata.json')
const nav = require('./navigation.json')


router.get('/', (req, res) => {
    res.render('index', { title: 'Home', featnewsdata, nav})
})


router.get('/work', (req, res) => {
    res.render('work', { title: 'Work', nav})
})

router.get('/about', (req, res) => {
    res.render('about',{ title: 'About', nav})
})

router.get('/news', (req, res) => {
    res.render('news', { title: 'News', newsdata, nav})
})

router.get('/thinking', (req, res) => {
    res.render('thinking', { title: 'Thinking', thinkdata, nav})
})

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact', nav})
})

router.get('/aside', (req, res) => {
    res.render('aside', { title: 'aside', asidedata})
})



module.exports = router