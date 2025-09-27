const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Note = require("../models/Note");

// Get all notes for logged-in user
router.get("/", auth, async (req, res) => {
  const { search } = req.query;
  const query = { user: req.user.id };
  if (search) query.$or = [{ title: { $regex: search, $options: "i" } }, { content: { $regex: search, $options: "i" } }];
  const notes = await Note.find(query).sort({ date: -1 });
  res.json(notes);
});

// Add note
router.post("/", auth, async (req, res) => {
  const { title, content } = req.body;
  const note = new Note({ user: req.user.id, title, content });
  await note.save();
  res.json(note);
});

// Update note
router.put("/:id", auth, async (req, res) => {
  const { title, content } = req.body;
  let note = await Note.findById(req.params.id);
  if (!note) return res.status(404).json({ msg: "Note not found" });
  if (note.user.toString() !== req.user.id) return res.status(401).json({ msg: "Not authorized" });

  note.title = title || note.title;
  note.content = content || note.content;
  await note.save();
  res.json(note);
});

// Delete note
router.delete("/:id", auth, async (req, res) => {
  let note = await Note.findById(req.params.id);
  if (!note) return res.status(404).json({ msg: "Note not found" });
  if (note.user.toString() !== req.user.id) return res.status(401).json({ msg: "Not authorized" });

  await Note.findByIdAndRemove(req.params.id);
  res.json({ msg: "Note removed" });
});

module.exports = router;
