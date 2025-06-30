import React, { useState } from 'react';
import './Home.css'; // Still using shared styles

function Admin() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: '',
    price: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (form.name && form.price && form.description) {
      setItems([...items, { ...form }]);
      setForm({ name: '', price: '', image: '', description: '' });
    }
  };

  const handleDelete = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  return (
    <div className="home">
      <h1>Admin Dashboard</h1>
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <input name="name" placeholder="Item name" value={form.name} onChange={handleChange} />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <button onClick={handleAdd}>Add Item</button>
      </div>

      <div className="menu-grid">
        {items.map((item, index) => (
          <div className="menu-item" key={index}>
            {item.image && <img src={item.image} alt={item.name} />}
            <button>{item.name} – {item.price}</button>
            <p className="menu-description">{item.description}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
