import express from 'express'
const router = express.Router()
import {
  getAllCategories,
  getCategoryById,
  getCategoryByName
} from '../controllers/categoryController.js'

router.get('/getAllCategories', getAllCategories)
router.get('/categories/:id', getCategoryById)
router.get('/categories', getCategoryByName)

export default router
