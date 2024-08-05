import React from 'react';

interface BannerImageProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerImageProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <div className='flex flex-col items-center justify-center px-12 py-12' style={{ background: background, marginBottom: '48px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <img src={image} alt={title} style={{ width: '60%', borderRadius: '12px', marginBottom: '20px' }} />
      <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#333', fontWeight: 'bold', textAlign: 'center' }}>{title}</h2>
      <p style={{ fontSize: '1rem', marginBottom: '16px', color: '#555', textAlign: 'center', lineHeight: '1.5' }}>{description}</p>
      <div className="flex items-center space-x-4">
        <button onClick={onEdit} style={{ padding: '10px 20px', backgroundColor: '#f39c12', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
          Edit
        </button>
        <a href="#" style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', borderRadius: '5px', textDecoration: 'none', display: 'inline-block' }}>
          {cta}
        </a>
      </div>
    </div>
  );
};

export default BannerImageComp;
