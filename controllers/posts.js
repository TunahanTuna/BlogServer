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