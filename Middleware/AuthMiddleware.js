const checkRole = (role) => {
  return (req, res, next) => {
    const { user } = req.session;
    const username = req.params.username;
    if (!user) {
      res.status(403).send("You are not allowed to access this function");
    }
    console.log(user);
    if (user.role === "admin") {
      return next();
    }
    console.log(user.username, username);
    if (user.role === "user" && user.username === username) {
      return next();
    }
    res.status(403).send("You are not allowed to access this function");
  };
};
export default {
  checkRole,
};
