function Index(req, res) {
  res.render("main", {
    title: "About Page",
    body: "about",
  });
}

export default {
  Index,
};
