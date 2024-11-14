import pool from "../DB/connectDB.js";

const getAllSanPham = async () => {
  const [rows] = await pool.query("SELECT * FROM sanpham");
  return rows;
};

const getOneSanPham = async (id) => {
  const [rows] = await pool.query("SELECT * FROM sanpham WHERE masp = ?", [id]);
  return rows[0];
};

const getSanPhamByNhom = async (id) => {
  const [rows] = await pool.query("SELECT * FROM sanpham WHERE idnhom = ?", [
    id,
  ]);
  return rows;
};
export default { getAllSanPham, getOneSanPham, getSanPhamByNhom };
