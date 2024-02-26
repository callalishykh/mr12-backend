import PostModel from "../../model/post/index.js";
import UserModel from "../../model/user/index.js";
import Joi from "joi";
const PostController = {
  create: async (req, res) => {
    const payload = req.body;
    const userId = req.user.id;

    const schema = Joi.object({
      title: Joi.string().min(3).max(90).required(),
      description: Joi.string().max(950),
    });

    const response = schema.validate(req.body);
    if (response.error) {
      return res
        .status(400)
        .json({ message: "Invalid data", error: response.error });
    }

    const post = await PostModel.create({
      title: payload.title,
      description: payload.description,
      UserId: userId,
    });

    res.json({
      message: "Post created",
      post,
    });
  },

  update: async (req, res) => {
    const payload = req.body;
    const params = req.params;

    const post = await PostModel.findByPk(params.postId);
    if (!post) {
      return res.status(404).json({
        message: "NO data found",
      });
    }

    post.title = payload.title;
    post.description = payload.description;

    await post.save();

    res.json({
      message: "Post updated",
      post,
    });
  },

  getAll: async (req, res) => {
    const posts = await PostModel.findAll({
      include: [UserModel],
    });
    res.json({
      posts,
    });
  },
  getOne: async (req, res) => {
    const params = req.params;
    console.log(params);

    const post = await PostModel.findByPk(params.postId, {
      include: [UserModel],
    });
    if (!post) {
      return res.status(404).json({ message: "NO Data found" });
    }
    res.json({
      post,
    });
  },
};

export default PostController;
