import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import StoreCard from '../../components/StoreCard';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import { useAuth } from '../../context/AuthContext';

const dummyStores = [
  { id: 1, name: 'VARALAKSMI TRADERS', email: 'varalakshmi@gmail.com', address: 'NY', rating: 4 },
  { id: 2, name: 'GHUMAGUHMALU', email: 'ghumaghuma123@store.com', address: 'Texas', rating: 3 },
  { id: 3, name: 'JOY SUPERMARKET STORE', email: 'joysupermarket@store.com', address: 'Delhi', rating: 5 },
  { id: 4, name: 'THE HIGH STREET CHAAP', email: 'streetchaap@store.com', address: 'London', rating: 0 },
];

const StoreList = () => {
  const [stores, setStores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    // Simulate API call
    setStores(dummyStores);
  }, []);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredStores = stores.filter((store) => {
    const searchLower = searchTerm.toLowerCase();
    if (!searchTerm) return true;
    
    return (
      store.name.toLowerCase().includes(searchLower) ||
      store.email.toLowerCase().includes(searchLower) ||
      store.address.toLowerCase().includes(searchLower) ||
      store.rating.toString().includes(searchLower)
    );
  });

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar role={user?.role || 'user'} />
      <main style={{ marginLeft: '240px', padding: '40px', width: '100%', backgroundColor: '#F9FAFB' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111827' }}>Store List</h1>
          {user?.role === 'admin' && (
            <Button style={{ padding: '10px 24px' }}>Add Store</Button>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <SearchBar 
            value={searchTerm} 
            onChange={handleSearch} 
            placeholder="Search by name, email, address or rating..." 
            height='25px'
            style={{ minWidth: '400px' }}
          />
        </div>

        <div>
          {filteredStores.map((store) => (
            <StoreCard
              key={store.id}
              id={store.id}
              name={store.name}
              email={store.email}
              address={store.address}
              rating={store.rating}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default StoreList;
