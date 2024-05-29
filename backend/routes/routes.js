const routes=require('express').Router()
const controller=require('../controllers/controllers.js')

routes.route('/api/categories')
.post( controller.create_Categories)
.get( controller.get_Categories)


routes.route('/api/transaction')
.get(controller.get_Transactions)
.post( controller.create_Transaction)
.delete(controller.delete_Transaction)


module.exports=routes;