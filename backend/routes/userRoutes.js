 const express = require("express");
 const { protect } = require("../../Middlewares/authMiddleware");
const  {registerUser,authUser,allUsers, } = require("../../controllers/userController");

 const router = express.Router();


 router.route('/').post(registerUser);
 router.post('/login',authUser);
 router.route("/").get(protect, allUsers);



module.exports = router;
