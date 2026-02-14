const ensureAuthenticated = require("../Middleware/Auth");

const router=require("express").Router();
router.get("/",ensureAuthenticated,(req,res)=>{
    console.log("---logges user detail",req.user);
    res.status(200).json([
        {
            name:"mobile",
            prices:1000
        },{
            name:"tv",
            prices:5000
        }
    ])
});
module.exports=router;