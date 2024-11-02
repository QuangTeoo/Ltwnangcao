import pool from "../DB/connectDB.js";

const signup = async (user) => {
  const { username, password, fullname, address, sex, email } = user;
  const role = "user";
  const [result] = await pool.query(
    "INSERT INTO users (username, password,fullname,address,sex,email,status,role) VALUES (?, ?, ?, ?, ?, ?, ?,?)",
    [username, password, fullname, address, sex, email, 1, role]
  );
  return result;
};

const findUserFindByUserName = async (username) => {
  const [user] = await pool.query("SELECT * FROM users WHERE username = ? AND status = 1", [
    username,
  ]);
  return user[0];
};
export default { signup, findUserFindByUserName };
