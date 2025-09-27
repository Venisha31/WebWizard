import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteItem from "../components/NoteItem";
import { getNotes, addNote, deleteNote } from "../api/api";

const Notes = ({ onLogout }) => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  const fetchNotes = async () => {
    try {
      const res = await getNotes(token, search);
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [search]);

  const handleAdd = async () => {
    if (!title || !content) return alert("Please enter title and content");
    await addNote(token, { title, content });
    setTitle("");
    setContent("");
    fetchNotes();
  };

  const handleDelete = async (id) => {
    await deleteNote(token, id);
    fetchNotes();
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "40px",
        boxSizing: "border-box",
        background: "linear-gradient(135deg, #6e8efb, #a777e3)",
      }}
    >
      <Navbar onLogout={onLogout} />

      {/* Add Note Form */}
      <div
        className="glass-card"
        style={{
          padding: "35px",
          marginBottom: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          maxWidth: "900px",    // Wider card
          marginLeft: "auto",   // Center horizontally
          marginRight: "auto",
        }}
      >
        <input
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
        />
        <button className="primary" onClick={handleAdd}>
          Add Note
        </button>
      </div>

      {/* Notes Grid */}
      {notes.length === 0 && (
        <p style={{ color: "#fff", textAlign: "center", marginTop: "20px" }}>
          No notes found.
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
        {notes.map((note) => (
          <NoteItem key={note._id} note={note} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
