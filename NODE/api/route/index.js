const mongoose = require('mongoose')
module.exports = function (app) {
    const listRoute = require('../controller/index')
    app.route('/tasks')
        .get(listRoute.getItem)
        .post(listRoute.addItem)

    app.route('/task/:id')
        .delete(listRoute.deleteItem)
        .put(listRoute.updateItem)
        .get(listRoute.getOne)

    app.route('/pagination')
        .get(listRoute.paginationItem)
        

    app.route('/search')
        .get(listRoute.searchItem)



}