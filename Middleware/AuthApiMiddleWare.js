import jwt from "jsonwebtoken";

function authenticataToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).send("Access Denied");
//   console.log(token);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send("Invalid Token");
    req.user = user;
    next();
  });
}
export default authenticataToken;