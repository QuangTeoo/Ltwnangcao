import HomeModel from "../Model/HomeModel";
const getAllUser = async (req, res) => {
  const users = await HomeModel.getAllUser();
  res.render("main", {
    title: "Home Page ",
    body: "home",
    rows: users,
  });
};
 
// const addUser = async (req, res) => {
//   // const { username, fullname, address, sex, email, role } = req.body;
//   // await HomeModel.addUser(username, fullname, address, sex, email, role);
//   res.
// }
export default {
  getAllUser,
};
