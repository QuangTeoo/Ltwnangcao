import { response } from "express";
import AuthModel from "../Model/AuthModel";
import bcrypt from "bcryptjs";
import { createToken } from "../DB/jwt";

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
  const token = createToken({ username: findUser.username });
  res.cookie("token", token, {
    httpOnly: true,
  });
  res.status(200).send({
    message: "Login Success",
  });
}

async function logout(req, res) {
  res.clearCookie("token");
  res.status(200).send("Logout Success");
}

async function getProfile(req, res) {
  const user = req.user;
  const findUser = await AuthModel.findUserFindByUserName(user.username);
  if (!findUser || findUser.length === 0) {
    return res.status(400).send("User not found");
  }
  res.status(200).send({
    user: findUser.username,
    fullname: findUser.fullname,
    address: findUser.address,
    // email: findUser.email,
  });
}
export default { login, logout, getProfile };
