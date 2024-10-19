import HomeModel from "../Model/HomeModel";
const getAllUser = async (req, res) => {
  const users = await HomeModel.getAllUser();
  res.render("main", {
    title: "Home Page ",
    body: "home",
    rows: users,
  });
};
const addUser = async (req, res) => {
  if (req.method === "GET") {
    res.render("main", {
      title: "Home Page ",
      body: "users/Add",
    });
    return;
  } else if (req.method === "POST") {
    const user = req.body;
    const result = await HomeModel.addUser(user);
    console.log(result);
    res.redirect("/home");
  }
};

const updateUser = async (req, res) => {
  if (req.method === "GET") {
    const username = req.query.username;
    const user = await HomeModel.getUserByUsername(username);
    res.render("main", {
      title: "Home Page ",
      body: "users/Update",
      user: user,
    });
  } else if (req.method === "POST") {
    const oldUsername = req.body.oldUsername;
    const user = {
      username: req.body.username,
      fullname: req.body.fullname,
      address: req.body.address,
      sex: req.body.sex,
      email: req.body.email,
    };
    const result = await HomeModel.updateUser(oldUsername, user);
    console.log(result);
    res.redirect("/home");
  }
};
const deleteUser = async (req, res) => {
  if (req.method === "GET") {
    const username = req.query.username;
    const user = await HomeModel.getUserByUsername(username);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.render("main", {
      title: "Delete User",
      body: "users/Delete",
      user: user,
    });
  } else if (req.method === "POST") {
    const username = req.body.username;
    const result = await HomeModel.deleteUser(username);
    console.log(result);
    res.redirect("/home");
  }
};
export default {
  getAllUser,
  addUser,
  updateUser,
  deleteUser,
};
