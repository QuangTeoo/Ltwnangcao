import pool from "../DB/connectDB.js";

const getAllUser = async () => {
  const [rows] = await pool.query(
    "SELECT username,fullname,address,sex,email,role FROM users WHERE status = 1"
  );
  return rows;
};
const addUser = async (user) => {
  const { username, password, fullname, address, sex, email } = user;
  const role = "user";
  const [result] = await pool.query(
    "INSERT INTO users (username, password,fullname, address, sex, email, status, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [username, password, fullname, address, sex, email, 1, role]
  );
  return result;
};
const getUserByUsername = async (username) => {
  const [rows] = await pool.query(
    "SELECT username, fullname, address, sex, email, role,status FROM users WHERE username = ?",
    [username]
  );
  return rows[0];
};
const updateUser = async (oldUsername,user) => {
  const { username, fullname, address, sex, email } = user;
  const [result] = await pool.query(
    "UPDATE users SET username = ?, fullname = ?, address = ?, sex = ?, email = ? WHERE username = ?",
    [username, fullname, address, sex, email, oldUsername]
  );
  return result;
};
const deleteUser = async (username) => {
  const [result] = await pool.query(
    "UPDATE users SET status = 0 WHERE username = ?",
    [username]
  );
  return result;
};
export default { getAllUser, addUser, getUserByUsername, updateUser, deleteUser };
