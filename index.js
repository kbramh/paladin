import express from "express";
import { createServer } from "vite";

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("dist"));
} else {
  const vite = await createServer({
    appType: "spa",
    server: {
      middlewareMode: true,
    },
  });

  app.use(vite.middlewares);
}

//app.get("/", (request, response) => {
// response.send("Hello World");
//});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
