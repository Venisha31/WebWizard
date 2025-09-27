import React from "react";

const NoteItem = ({ note, onDelete }) => {
  return (
    <div
      className="glass-card"
      style={{
        padding: "30px",                 // Slightly more spacious
        borderRadius: "25px",
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 12px 50px rgba(0,0,0,0.35)",
        color: "#fff",
        transition: "transform 0.3s, box-shadow 0.3s",
        width: "100%",                     // Expand full available width
        maxWidth: "900px",                 // Limit width same as Add Note card
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h3 style={{ marginBottom: "15px", fontSize: "1.4rem" }}>{note.title}</h3>
      <p style={{ marginBottom: "20px", fontSize: "1rem" }}>{note.content}</p>
      <button
        className="danger"
        onClick={() => onDelete(note._id)}
        style={{
          width: "100%",
          padding: "10px 0",
          fontWeight: "600",
          borderRadius: "15px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default NoteItem;
