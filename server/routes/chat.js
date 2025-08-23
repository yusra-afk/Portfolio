import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const { messages } = req.body;
  // Replace with OpenAI API later
  res.json({ reply: "Hi! I’m Yusra’s portfolio assistant 🚀 Ask me about projects or courses!" });
});

export default router;