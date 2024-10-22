const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.put("/:id", async (req, res) => {
    try {
        // Check if the authenticated user is authorized to update the user
        if (req.body.userId === req.params.id || req.user.isAdmin) {
            // Check if a new password is being updated
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }

            // Update user information
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true } // Return the updated user object
            );
            
            // Check if user was updated successfully
            if (!updatedUser) {
                return res.status(404).json("User not found");
            }

            res.status(200).json(updatedUser); // Send updated user object in response
        } else {
            return res.status(403).json("You can only update your own account or you are not authorized");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});




router.delete("/:id", async (req, res) => {
    try {
        // Check if the authenticated user is authorized to delete the user
        if (req.body.userId === req.params.id || req.user.isAdmin) {
            // Delete the user from the database
            const delUser = await User.findByIdAndDelete(req.params.id);

            // Check if user was found and deleted successfully
            if (!delUser) {
                return res.status(404).json("User not found");
            }

            res.status(200).json("User has been deleted"); // Send success message
        } else {
            return res.status(403).json("You can only delete your own account or you are not authorized");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id); // Await the result
        const {password,updatedAt,...other}=user._doc
        if (!user) {
            return res.status(404).json("User not found");
        }

        res.status(200).json(user); // Return the user object
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal server error" }); // Handle server errors
    }
});


router.put("/:id/follow",async (req,res)=>{
    if(req.body.userId!==req.params.id){
       try{
         const user=await User.findById(req.params.id)
         const currentUser=await User.findById(req.body.userId)

         if(!user.followers.includes(req.body.userId)){
             await user.updateOne({$push:{followers:req.body.userId}})
             await currentUser.updateOne({$push:{followings:req.params.userId}})
             res.status(200).json("user has been follwoed")
         }else{
            res.status(403).json("already follow")
         }
       }catch(e){
        console.log(e)
       }
    }else{
        res.status(403).json("no")
    }
})



router.put("/:id/unfollow",async (req,res)=>{
    if(req.body.userId!==req.params.id){
       try{
         const user=await User.findById(req.params.id)
         const currentUser=await User.findById(req.body.userId)

         if(user.followers.includes(req.body.userId)){
             await user.updateOne({$pull:{followers:req.body.userId}})
             await currentUser.updateOne({$pull:{followings:req.params.userId}})
             res.status(200).json("user has been unfollwoed")
         }else{
            res.status(403).json("already unfollow")
         }
       }catch(e){
        console.log(e)
       }
    }else{
        res.status(403).json("no")
    }
})



module.exports = router;
