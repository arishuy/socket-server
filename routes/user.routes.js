const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
router.get("/friends", userController.getAllFriends);
router.get("/:id",userController.getUserById);
//router.get("/friendRequests", userController.getFriendRequestsByUserID);
router.post("/addFriend", userController.addNewFriend);
router.post("/acceptFriend", userController.acceptFriend);
router.post("/findUser", userController.FindUserByName);
router.delete("/deleteFriendRequest/:id", userController.deleteFriendRequest);
router.patch("/updateUser", userController.updateUser);


module.exports = router;
