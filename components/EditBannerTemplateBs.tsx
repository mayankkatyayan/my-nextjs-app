import React, { useState } from 'react';

interface EditBannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onSave: (updatedBanner: any) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ title, description, cta, image, background, onSave }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newCta, setNewCta] = useState(cta);
  const [newImage, setNewImage] = useState(image);
  const [newBackground, setNewBackground] = useState(background);

  const handleSave = () => {
    onSave({ title: newTitle, description: newDescription, cta: newCta, image: newImage, background: newBackground });
  };

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#fff', padding: '20px', boxShadow: '0 -2px 10px rgba(0,0,0,0.1)' }}>
      <h3>Edit Banner</h3>
      <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Title" />
      <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Description" />
      <input type="text" value={newCta} onChange={(e) => setNewCta(e.target.value)} placeholder="Call to Action" />
      <input type="text" value={newImage} onChange={(e) => setNewImage(e.target.value)} placeholder="Image URL" />
      <input type="text" value={newBackground} onChange={(e) => setNewBackground(e.target.value)} placeholder="Background Color" />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditBannerTemplateBs;
