import { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import adsData from '../public/ads.json';

export default function Home() {
  const [banners, setBanners] = useState(adsData);
  const [editBanner, setEditBanner] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (banner: any) => {
    setEditBanner(banner);
    setIsEditing(true);
  };

  const handleSave = (updatedBanner: any) => {
    setBanners((prevBanners) =>
      prevBanners.map((banner) => (banner.id === editBanner.id ? { ...banner, ...updatedBanner } : banner))
    );
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto  p-12">
      {banners.map((banner) => (
        <BannerImageComp
          key={banner.id}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
          onEdit={() => handleEditClick(banner)}
        />
      ))}
      {isEditing && (
        <EditBannerTemplateBs
          title={editBanner.title}
          description={editBanner.description}
          cta={editBanner.cta}
          image={editBanner.image}
          background={editBanner.background}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
