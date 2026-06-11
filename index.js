import express from "express";
import { createServer } from "vite";

const app = express();

app.use(express.json());
app.post("/api/contact", (request, response) => {
  const { name } = request.body;
  console.log(request.body);
  response.send(`Thank you for your submission ${name}`);
});

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

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
