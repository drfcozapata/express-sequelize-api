const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/users", authMiddleware, userController.index);
router.post("/users", authMiddleware, userController.create);
router.get("/users/:id", authMiddleware, userController.show);
router.put("/users/:id", authMiddleware, userController.update);
router.delete("/users/:id", authMiddleware, userController.delete);

module.exports = router;
