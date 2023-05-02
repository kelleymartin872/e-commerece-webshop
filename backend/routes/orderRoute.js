import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
  deleteOrder,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleWare.js'

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router
  .route('/:id')
  .get(protect, getOrderById)
  .delete(protect, admin, deleteOrder)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/delivered').put(protect, admin, updateOrderToDelivered)
export default router
