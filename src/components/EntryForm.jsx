import { useState } from "react";

export default function EntryForm ({ onEntryAdded}) {
    const [form, setFOrm] = useState({
        title: "",
        content: "",
        modd: "",
        date: "",
    });

    const handleChange =(e) => {
        setFOrm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onEntryAdded) onEntryAdded(form);
        if (onEntryAdded) onEntryAdded(form);
        setFOrm({title: "", content:"", mood: "", date: ""});
    };

    return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
      <input
        type="text"
        name="title"
        placeholder="Entry Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Write your thoughts..."
        value={form.content}
        onChange={handleChange}
        required
      />
      <select name="mood" value={form.mood} onChange={handleChange} required>
        <option value="">Select mood</option>
        <option value="happy">😊 Happy</option>
        <option value="sad">😢 Sad</option>
        <option value="angry">😠 Angry</option>
        <option value="peaceful">🧘 Peaceful</option>
        <option value="excited">🎉 Excited</option>
      </select>
      <button type="submit">Add Entry</button>
    </form>
  );
}