import viewEngine from "./viewEngine.js";
import http from "http";
import myDateTime from "./date.js";
import getURL from "./getURL.js";
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(myDateTime()+"<br/>");
    res.write(getURL.getPath(req)+"<br/>");
    res.write(getURL.getParamsURL(req)+"<br/>");
    res.end("Hello KTPM0121, Chúc bạn thành công với Nodejs");
  })
  .listen(8080);
