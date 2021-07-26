import postModel from "../models/posts.js";

export const getPosts = async (req,res)=>{
    try {
        const posts = await postModel.find(); // Veri tabanındaki modele ait her şeyi getirir.
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        })
    }
}

export const createPost = async (req,res)=>{
    const newPost = new postModel(req.body); // gönderi oluşturuldu
    try {
      await newPost.save();
        
    } catch (error) {
        res.status(409).json({
            message: error.message,
        })
    }
}