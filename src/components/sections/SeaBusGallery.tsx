
import React from 'react';
import { PhotoGallery } from '@/components/PhotoGallery';

const SEABUS_IMAGES = [
  'https://extranet.seayou.pt/photos/products/seabus/1.webp',
  'https://extranet.seayou.pt/photos/products/seabus/2.webp',
  'https://extranet.seayou.pt/photos/products/seabus/3.jpg',
  'https://extranet.seayou.pt/photos/products/seabus/4.jpg',
  'https://extranet.seayou.pt/photos/products/seabus/5.jpg'
];

export const SeaBusGallery = () => {
  return (
    <PhotoGallery 
      images={SEABUS_IMAGES} 
      altPrefix="SeaBus" 
      className="bg-gray-50 pb-0 pt-4"
    />
  );
};
