const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'tag_brand'}]
    });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagsData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'tag_brand'}]
    });

    if (!travellerData) {
      res.status(404).json({ message: 'No Tag found with this id!' });
    return;
    }

    res.status(200).json(tagsData);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async ({body}, res) => {
  // create a new tag
  try {
    const tagsData = await Tag.create(body);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id',  (req, res) => {
  // update a tag's name by its `id` value

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
