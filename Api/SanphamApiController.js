import nhomModel from "../SqueModel/NhomSeque";
import sanPhamModel from "../Model/SanPhamModel";
async function getAll(req, res) {
  const data = await nhomModel
    .findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

async function createNhom(req, res) {
  const ten = req.body;
  const data = await nhomModel
    .create(ten)
    .then(() => {
      res.json("Create success");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

async function getAllSanPham(req, res) {
  const data = await sanPhamModel
    .getAllSanPham()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}
async function detailSanPham(req, res) {
  const id = req.params.id;
  const data = await sanPhamModel
    .getOneSanPham(id)
    .then((data) => {
      if (!data) {
        res.status(404).send("Not found");
      }
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

export default { getAll, getAllSanPham, detailSanPham, createNhom };
