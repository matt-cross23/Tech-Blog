const router = require("express").Router();
const { Post } = require("../../Model");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
    name: req.body.name,
    description: req.body.description,
    },
    {
      where:{
        user_id: req.params.user_id,
      },
    })
    .then((updatedPost) => {
      res.json(updatedPost);
    })
    .catchcatch((err) => res.json(err) 
    )
  });

module.exports = router;
