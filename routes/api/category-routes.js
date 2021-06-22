const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {

  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = Category.findAll({
      include: [ Product ]
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = Category.findOne({
      where: {
        id: req.params.id,
      }
      include: [ Product ]
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', ({body}, res) => {
  // create a new category
  try {
    const createCategory = Category.create(body)
  } catch (err) {
    // laterrr
  }

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try { 
    const updateCategory = Category.update(req.body,
      {

    })
  } catch (err) {

  }


});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
