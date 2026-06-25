import sqlite3 from "better-sqlite3";
import express from "express";
import { createServer } from "vite";

const app = express();
const db = new sqlite3("backend.db", { verbose: console.log });

db.exec(`
  CREATE TABLE IF NOT EXISTS Feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phoneNumber TEXT,
    info TEXT NOT NULL,
    submittedAt TEXT DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'Received'
    )`);

app.use(express.json());
app.post("/api/contact", (request, response) => {
  const { email, info, name, phoneNumber } = request.body;

  try {
    const insert = db.prepare(`
        INSERT INTO Feedback (name, email, phoneNumber, info)
        VALUES (?, ?, ?, ?)
      `);

    const result = insert.run(name, email, phoneNumber || null, info);

    response.json({
      feedbackId: result.lastInsertRowid,
      message: `Thank you for your submission, ${name}!`,
      success: true,
    });
  } catch (error) {
    console.error("Database error:", error);
    response.status(500).json({
      message: "Sorry, something went wrong while saving your feedback.",
      success: false,
    });
  }
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

  app.get("/api/contact", (req, res) => {
    try {
      const data = db.prepare(`
      SELECT id, name, email, phoneNumber, info, submittedAt, status 
      FROM Feedback 
      ORDER BY submittedAt DESC
    `);

      const allFeedback = data.all();

      res.json({
        count: allFeedback.length,
        feedback: allFeedback,
        success: true,
      });
    } catch (error) {
      console.error("Error fetching feedback:", error);
      res.status(500).json({ message: "Failed to retrieve feedback", success: false });
    }
  });

  app.use(vite.middlewares);
}

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
