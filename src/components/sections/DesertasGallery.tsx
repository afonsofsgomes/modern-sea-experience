
import React from 'react';
import { PhotoGallery } from '@/components/PhotoGallery';

const DESERTAS_IMAGES = [
  'https://extranet.seayou.pt/photos/products/desertas/1.jpg',
  'https://extranet.seayou.pt/photos/products/desertas/2.jpg',
  'https://extranet.seayou.pt/photos/products/desertas/3.jpg',
  'https://extranet.seayou.pt/photos/products/desertas/4.jpg',
  'https://extranet.seayou.pt/photos/products/desertas/5.webp'
];

export const DesertasGallery = () => {
  return (
    <PhotoGallery 
      images={DESERTAS_IMAGES} 
      altPrefix="Desertas Islands" 
      className="bg-gray-50"
    />
  );
};
