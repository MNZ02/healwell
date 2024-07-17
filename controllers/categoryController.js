import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const getAllCategories = async (req, res) => {
  try {
    const data = await import('../categories/categoriesData.json', {
      assert: { type: 'json' }
    })
    res.status(200).json(data.default)
  } catch (error) {
    console.error('Error in getAllCategories', error.message)
    res.status(500).send(error.message)
  }
}

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params
    const categoriesData = await import('../categories/categoriesData.json', {
      assert: { type: 'json' }
    })
    const category = categoriesData.default.find(
      item => item.categoryId === parseInt(id, 10)
    )

    if (!category) {
      res.status(404).send('Category not found')
    }

    res.status(200).json(category)
  } catch (error) {
    console.error('Error in getCategoryById', error.message)
    res.status(500).send(error.message)
  }
}

export const getCategoryByName = async (req, res) => {
  try {
    const { name } = req.query
    const data = await import('../categories/categoriesData.json', {
      assert: { type: 'json' }
    })

    const category = data.default.find(item => item.categoryName === name)

    if (!category) {
      res.status(404).send('Category not found')
    }
    res.status(200).json(category)
  } catch (error) {
    console.error('Error in getCategoryByName', error.message)
    res.status(500).send(error.message)
  }
}
