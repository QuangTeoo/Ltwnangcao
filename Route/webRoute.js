import { Router } from "express";
import HomeController from "../Controller/HomeController.js";
import AboutController from "../Controller/About.Controller.js";
import ContactController from "../Controller/ContactController.js";
import AuthController from "../Controller/Auth.Controller.js";
import AuthMiddleware from "../Middleware/AuthMiddleware.js";
import UserApiController from "../Api/UserApiController.js";
import AuthApiController from "../Api/AuthApiController.js";
import SanphamApiController from "../Api/SanphamApiController.js";
import authenticataToken from "../Middleware/AuthApiMiddleWare.js";
const webRoute = Router();

webRoute.get("/", HomeController.getAllUser);
webRoute.get("/home", HomeController.getAllUser);
webRoute.get(
  "/home/add",
  AuthMiddleware.checkRole("admin"),
  HomeController.addUser
);
webRoute.post(
  "/home/add",
  AuthMiddleware.checkRole("admin"),
  HomeController.addUser
);
webRoute.get(
  "/home/update/:username",
  AuthMiddleware.checkRole(["admin", "user"]),
  HomeController.updateUser
);
webRoute.post(
  "/home/update/:username",
  AuthMiddleware.checkRole(["admin", "user"]),
  HomeController.updateUser
);
webRoute.get(
  "/home/delete/:username",
  AuthMiddleware.checkRole("admin"),
  HomeController.deleteUser
);
webRoute.post(
  "/home/delete/:username",
  AuthMiddleware.checkRole("admin"),
  HomeController.deleteUser
);
webRoute.get(
  "/home/detail/:username",
  AuthMiddleware.checkRole("admin"),
  HomeController.updateUser
);

webRoute.get("/auth/login", AuthController.login);
webRoute.post("/auth/login", AuthController.login);

webRoute.get("/auth/logout", AuthController.logout);

webRoute.get("/auth/signup", AuthController.signup);
webRoute.post("/auth/signup", AuthController.signup);

webRoute.get("/about", AboutController.Index);

webRoute.get("/contact", ContactController.index);

//API
webRoute.get("/api/v1/users", UserApiController.getAll);
webRoute.get("/api/v1/users/:username", UserApiController.getOne);
webRoute.post("/api/v1/users", UserApiController.addOne);
webRoute.put("/api/v1/users/:username", UserApiController.updateOne);
webRoute.delete("/api/v1/users/:username", UserApiController.deleteOne);

webRoute.get("/api/v1/sanpham/nhom/all", SanphamApiController.getAll);
webRoute.post("/api/v1/sanpham/nhom/create", SanphamApiController.createNhom);
webRoute.get("/api/v1/sanpham/all", SanphamApiController.getAllSanPham);
webRoute.get(
  "/api/v1/nhom/sanpham/:nhomId",
  SanphamApiController.getSanPhamByNhom
);
webRoute.post("/api/v1/sanpham/create", SanphamApiController.createSanPham);

webRoute.get("/api/v1/sanpham/detail/:id", SanphamApiController.detailSanPham);

webRoute.post("/api/v1/auth/login", AuthApiController.login);
webRoute.post(
  "/api/v1/auth/logout",
  authenticataToken,
  AuthApiController.logout
);
webRoute.get(
  "/api/v1/auth/profile",
  authenticataToken,
  AuthApiController.getProfile
);
export default webRoute;
