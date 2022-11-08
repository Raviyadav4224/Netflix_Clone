import express from "express";
import { getAllUserDetails, login, logout, register ,getCurrentUserDetails,updateUserDetails} from "../controllers/user.js";
import { authorizeRole, isAuthenticated } from "../middlewares/authorization.js";
const router = express.Router();


router.route('/login').post(login)
router.route('/register').post(register)
router.route('/logout').get(logout)
router.route("/allusers").get(isAuthenticated,authorizeRole("admin"),getAllUserDetails);
router.route("/me").get(isAuthenticated,getCurrentUserDetails);
router.route("/updateme").put(isAuthenticated,updateUserDetails)

export default router;
