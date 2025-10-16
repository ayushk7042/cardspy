import React, { useEffect, useState } from "react";
import { fetchBanks, createBank, deleteBank } from "../api";
import "./Manage.css";

export default function ManageBanks() {
  const [banks, setBanks] = useState([]);
  const [form, setForm] = useState({ name: "", logo: null });

  const loadBanks = async () => {
    const data = await fetchBanks();
    setBanks(data);
  };

  useEffect(() => {
    loadBanks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    await createBank(formData);
    setForm({ name: "", logo: null });
    loadBanks();
  };

  return (
    <div className="manage-section">
      <h2>Manage Banks / Partners</h2>
      <form onSubmit={handleSubmit} className="form-section">
        <input
          type="text"
          placeholder="Bank Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input type="file" onChange={(e) => setForm({ ...form, logo: e.target.files[0] })} />
        <button type="submit">Add Bank</button>
      </form>

      <div className="items-list">
        {banks.map((b) => (
          <div className="item" key={b._id}>
            <img src={b.logo} alt={b.name} />
            <h3>{b.name}</h3>
            <button onClick={() => deleteBank(b._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
