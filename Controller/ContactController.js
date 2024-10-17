function index(req, res) {
    res.render("main", {
        title: "Contact Page",
        body: "contact",
    });
}
export default {
    index,
}