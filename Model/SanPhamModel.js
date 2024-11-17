import pool from "../DB/connectDB.js";

const createSanPham = async (sanPham) => {
  const { ten, gia, mota, idnhom } = sanPham;
  const [create] = await pool.query(
    "INSERT INTO sanpham (ten, gia, mota, idnhom) VALUES (?,?,?,?)",
    [ten, gia, mota, idnhom]  
  );
  return create;
};

const getAllSanPham = async () => {
  const [rows] = await pool.query("SELECT * FROM sanpham");
  return rows;
};

const getOneSanPham = async (id) => {
  const [rows] = await pool.query("SELECT * FROM sanpham WHERE masp = ?", [id]);
  return rows[0];
};

const getSanPhamByNhom = async (id) => {
  const [rows] = await pool.query("SELECT sanpham.* , nhom.ten as tennhom  FROM sanpham, nhom WHERE sanpham.idnhom = ? AND sanpham.idnhom = nhom.idnhom", [
    id,
  ]);
  return rows;
};
export default { getAllSanPham, getOneSanPham, getSanPhamByNhom, createSanPham };
