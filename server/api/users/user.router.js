const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  createUser,
  getUserById,
  login,
  getUsers,
  getUserByIdNumber,
} = require("./user.controller");

//new user to be registered using createUser controller from frontend to db
router.post("/", createUser);
router.get("/all", getUsers);

// user to be verified using auth middleware and getUserById
router.get("/",auth, getUserById);
router.post("/id", getUserByIdNumber);
router.post("/login", login);

module.exports = router;

