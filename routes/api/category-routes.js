const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {

  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [ Product ]
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findOne({
      include: [Product]
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', async ({body}, res) => {
  // create a new category
  try {
    const createCategory = await Category.create(body);
    res.status(200).json(createCategory);
  } catch (err) {
    res.status(500).json(err)
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
       where: {
         id: req.params.id,
       },
      });
      
    if (!updateCategory[0]) {
      res.status(404).json({message: 'No category with this id! '})
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
