import { Router } from "express";
import HomeController from "../Controller/HomeController.js";
import AboutController from "../Controller/About.Controller.js";
import ContactController from "../Controller/ContactController.js";
const webRoute = Router();

webRoute.get("/", HomeController.getAllUser);
webRoute.get("/home", HomeController.getAllUser);
webRoute.get("/home/add", HomeController.addUser);
webRoute.post("/home/add", HomeController.addUser);
webRoute.get("/home/update", HomeController.updateUser);
webRoute.post("/home/update", HomeController.updateUser);
webRoute.get("/home/delete", HomeController.deleteUser);
webRoute.post("/home/delete", HomeController.deleteUser);
webRoute.get("/home/detail", HomeController.updateUser);

webRoute.get("/about", AboutController.Index);

webRoute.get("/contact", ContactController.index);
export default webRoute;
