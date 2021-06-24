const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagsData = await Tag.findAll({
      include: [
        { model: Product },
      ],
    });

    const tags = tagsData.map((project) => project.get({ plain: true }));

    res.render('homepage', { tags });


  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagsData = await Tag.findByPk({
      include: [
        {
        model: Product,
        attributes: ['name'],
      },
      ],
    });

    const tags = tagsData.map((project) => project.get({ plain: true }));

    res.render('homepage', { tags });
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
