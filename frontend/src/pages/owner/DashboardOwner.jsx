import React from 'react';
import Sidebar from '../../components/Sidebar';
import RatingStars from '../../components/RatingStars';

const ratings = [
  { name: 'John Doe', rating: 5 },
  { name: 'Jane Smith', rating: 4 }
];

const MetricCard = ({ label, value, icon }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <p className="text-gray-600 text-sm font-medium">{label}</p>
    <div className="flex items-center gap-2 mt-2">
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      {icon}
    </div>
  </div>
);

const UserReviewCard = ({ name, rating }) => (
  <div className="flex items-center justify-between border-b pb-2 last:border-b-0">
    <p className="font-medium">{name}</p>
    <RatingStars rating={rating} />
  </div>
);

const DashboardOwner = () => {
  return (
    <div className="flex">
      <Sidebar role="owner" />
      <main style={{ backgroundColor: '#F9FAFB', marginLeft: '240px', height: '100vh', padding: '40px' }}>
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <MetricCard
            label="Average Rating"
            value="4.2"
            icon={<RatingStars rating={4.2} />}
          />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Users Who Rated</h2>
          <div className="bg-white rounded-lg shadow p-4 space-y-4">
            {ratings.map((r, index) => (
              <UserReviewCard key={index} name={r.name} rating={r.rating} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardOwner;