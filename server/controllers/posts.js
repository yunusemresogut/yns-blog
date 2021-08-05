import Post from "../models/posts.js"; //backend tarafında .js eklemek zorundayız

export const getPosts = async (req, res) => {
  //asenkron bir fonksiyon oluşturduk ve bu yüzden await kullandık
  try {
    const posts = await Post.find(); //veri tabanında ne kadar post varsa onları bul ve getir
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
