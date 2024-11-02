import { response } from "express";
import AuthModel from "../Model/AuthModel.js";
import bcrypt from "bcryptjs";

async function login(req, res) {
  const { username, password } = req.body;
  const findUser = await AuthModel.findUserFindByUserName(username);
  if (!findUser || findUser.length === 0) {
    return res.status(400).send("User not found");
  }
  const isPasswordMatch = await bcrypt.compare(password, findUser.password);
  if (!isPasswordMatch) {
    return res.status(401).send("Username or Password not match");
  }
  req.session.user = findUser;
  res.status(200).send("Login Success");
}
async function logout(req, res) {
  req.session.destroy();
  res.status(200).send("Logout Success");
}
export default { login, logout };
