import HomeModel from "../Model/HomeModel";
import bcrypt from "bcryptjs";
function getAll(req, res) {
  HomeModel.getAllUser()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}
function getOne(req, res) {
  HomeModel.getUserByUsername(req.params.username)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500, err);
    });
}
async function addOne(req, res) {
  const user = req.body;
  //   console.log(user);
  user.password = await bcrypt.hash(user.password, 10);
  HomeModel.addUser(user)
    .then(() => {
      res.json("Success");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}
async function updateOne(req, res) {
  const oldUsername = req.params.username;
  const findUser = await HomeModel.getUserByUsername(oldUsername);
  if (!findUser) {
    return res.status(404).send("User not found");
  }
  const user = {
    username: req.body.username,
    fullname: req.body.fullname,
    address: req.body.address,
    sex: req.body.sex,
    email: req.body.email,
  };
  HomeModel.updateUser(oldUsername, user)
    .then(() => {
      res.json("Success");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}
async function deleteOne(req, res) {
  const username = req.params.username;
  const user = await HomeModel.getUserByUsername(username);
  if (!user) {
    return res.status(404).send("User not found");
  }
  HomeModel.deleteUser(username)
    .then(() => {
      res.json("Success");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

export default { getAll, getOne, addOne, updateOne, deleteOne };
