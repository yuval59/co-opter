var express = require('express')
var router = express.Router()

var FileController = require('../controllers/file.controller')
var ListController = require('../controllers/list.controller')


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' })
})

router.post('/api/getDir', function(req, res) {
    FileController.getFiles(req, res)
})

router.post('/api/goToParent', function(req, res) {
    FileController.getParent(req, res)
})

router.get('/api/getList', function(req, res) {
    ListController.getList(req, res)
})

router.delete('/api/deleteSuggestion', function(req, res) {
    ListController.deleteSuggestion(req, res)
})

router.post('/api/changeSuggestion', function(req, res) {
    ListController.changeSuggestion(req, res)
})

router.get('/test', function(req, res) {
    res.send("tagId is set to " + req.query.tagId);
});

module.exports = router