import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import InputField from '../../components/InputField';
import Dropdown from '../../components/Dropdown';
import Button from '../../components/Button';

const AddStoreForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    owner: ''
  });

  const owners = [
    { label: 'Ravi Kumar (ravi@example.com)', value: 'ravi@example.com' },
    { label: 'Priya Shah (priya@example.com)', value: 'priya@example.com' },
    { label: 'Amit Das (amit@example.com)', value: 'amit@example.com' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOwnerSelect = (value) => {
    setFormData((prev) => ({ ...prev, owner: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Store Submitted:', formData);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar role="admin" />
      <main style={{ marginLeft: '220px', padding: '40px', width: '100%', backgroundColor: '#F9FAFB', height: '100vh' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '32px' }}>Add Store</h1>
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}>
          <InputField label="Store Name" name="name" value={formData.name} onChange={handleChange} required />
          <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #D1D5DB', marginBottom: '20px' }}
              required
            />
          </div>

          <Dropdown
            label="Store Owner"
            options={owners}
            selected={formData.owner}
            onSelect={handleOwnerSelect}
          />

          <Button type="submit">Add Store</Button>
        </form>
      </main>
    </div>
  );
};

export default AddStoreForm;
