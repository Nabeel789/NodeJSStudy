const { validationResult } = require("express-validator");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        creator: {
          name: "AS MOHAMED FAHEEM ANVER"
        },
        createdAt: new Date(),
        title: "first post from nodejs",
        content: "this is the first post",
        imageUrl: "images/84208556_554391971825327_5409517833367322624_n.jpg"
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({
        message: "Validation failed, entered data is incorrect!",
        errors: errors.array()
      });
  }
  const title = req.body.title;
  const content = req.body.content;

  res.status(201).json({
    message: "Post create successfully!",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "AS MOHAMED FAHEEM ANVER" },
      createdAt: new Date()
    }
  });
};