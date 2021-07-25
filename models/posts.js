import mongoose from "mongoose";

// Modelin Yapısı
const postSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    content: String,
    tag: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

// Model Oluşturuldu
const Post = mongoose.model("Post", postSchema);

// Export Edildi
export default Post;