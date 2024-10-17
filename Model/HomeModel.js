import pool from "../DB/connectDB.js";

const getAllUser = async () => {
  const [rows] = await pool.query(
    "SELECT username,fullname,address,sex,email,role FROM users"
  );
  return rows;
};
export default { getAllUser };
