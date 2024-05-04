var serverModule = require('./server')
var router = require('./router')
var handler = require('./handler')
var handle = {};
handle['/home'] = handler.home
handle['/review'] = handler.review
serverModule.MyServer(router.route,handle)