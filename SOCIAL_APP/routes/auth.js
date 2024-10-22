const router=require("express").Router();
const User=require("../models/User")
const bcrypt=require("bcrypt")

router.get("/",(req,res)=>{
    res.send("Hello World");
})
router.post("/register", async (req,res)=>{
   
    try{

        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(req.body.password,salt)

        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
            
        })

      const user=await newUser.save()
      res.status(200).json(user)
    }
    catch(e){
        console.log(e)
    }
})

router.post("/login", async (req, res) => {
    try {
        // Check if email and password are in the request body
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json("Email and password are required");
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json("User not found");

        // Check if the password is correct
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json("Wrong password");

        res.status(200).json(user);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal server error" });
    }
});






module.exports=router