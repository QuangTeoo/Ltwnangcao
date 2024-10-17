import { Router } from "express";
import HomeController from "../Controller/HomeController.js";
import AboutController from "../Controller/About.Controller.js";
import ContactController from "../Controller/ContactController.js";
const webRoute = Router();

webRoute.get("/", HomeController.getAllUser);
webRoute.get("/home", HomeController.getAllUser);
webRoute.get("home/add", HomeController.getAllUser);

webRoute.get("/about", AboutController.Index);


webRoute.get("/contact",ContactController.index);
export default webRoute;
