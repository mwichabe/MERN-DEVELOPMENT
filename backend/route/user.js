const express=require('express')
const router=express.Router();
const {sayHello} = require("../controllers/users");

router.get('/',sayHello);
module.exports=router;