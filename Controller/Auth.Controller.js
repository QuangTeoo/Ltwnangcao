import AuthModel from "../Model/AuthModel.js";
import bcrypt from "bcryptjs";

const login = async (req, res) => {
  if (req.method === "GET") {
    res.render("auth/login", {
      title: "Login Page",
    });
    return;
  } else if (req.method === "POST") {
    const { username, password } = req.body;
    const user = await AuthModel.findUserFindByUserName(username);
    console.log(user, password);
    if (!user || user.length === 0) {
      return res.status(400).send("User not found");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log(isPasswordMatch);
    if (!isPasswordMatch) {
      console.log(`${password} ${user.password}`);
      return res.status(401).send("Username or Password not match");
    } else {
      req.session.user = {
        username: user.username,
        fullname: user.fullname,
        // email: user.email,
        role: user.role,
      };
      res.redirect("/home");
    }
  }
};

const signup = async (req, res) => {
  if (req.method === "GET") {
    res.render("auth/signup", {
      title: "Signup Page",
    });
    return;
  } else if (req.method === "POST") {
    const user = req.body;
    console.log(user);
    user.password = await bcrypt.hash(user.password, 10);
    const result = await AuthModel.signup(user);
    console.log(result);
    res.redirect("/auth/login");
  }
};

export default {
  login,
  signup,
};
