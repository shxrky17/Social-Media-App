const router = require("express").Router();
const Post = require("../models/Post");

// Create a new post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);

    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (e) {
        res.status(500).json(e);
    }
});

// Update an existing post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id); // Await the result
        if (!post) {
            return res.status(404).json("Post not found");
        }

        // Check if the user is authorized to update the post
        if (post.userId === req.body.userId) { // Ensure correct case (userId)
            await post.updateOne({ $set: req.body });
            res.status(200).json("Post updated");
        } else {
            res.status(403).json("You can only update your own post");
        }
    } catch (e) {
        console.log(e);
        res.status(500).json("Error updating post");
    }
});



router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        // Check if the post exists
        if (!post) {
            return res.status(404).json("Post not found");
        }

        // Check if the userId is already in the likes array
        if (!post.likes.includes(req.body.userId)) {
            // If not liked, add userId to likes
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("Post has been liked");
        } else {
            // If already liked, remove userId from likes
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("Post has been disliked");
        }
    } catch (e) {
        console.log(e);
        res.status(500).json("Internal server error");
    }
});



router.get("/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    }
    catch(e){
        res.status(500).json(e)
    }
})


router.get("/timeline/all",async(req,res)=>{
    let postarray=[]
    try{
        const currentuser = await User.findById(req.user._id)
        const userpost = await Post.find({userId:currentuser._id})
        const friendpost=await Promise.all()
        currentuser.followings.map(friendId=>{
            Post.find({userId:friendId}) 
        })
        res.json(userpost.concat(...friendpost))
    }catch(e){
        res.status(500).json("error")
    }
})


module.exports = router;
