
import React from 'react';
import { PhotoGallery } from '@/components/PhotoGallery';

const PRIVATE_CRUISE_IMAGES = [
  'https://extranet.seayou.pt/photos/products/private/1.jpg',
  'https://extranet.seayou.pt/photos/products/private/2.webp',
  'https://extranet.seayou.pt/photos/products/private/3.webp',
  'https://extranet.seayou.pt/photos/products/private/4.jpg',
  'https://extranet.seayou.pt/photos/products/private/5.webp'
];

export const PrivateCruiseGallery = () => {
  return (
    <PhotoGallery 
      images={PRIVATE_CRUISE_IMAGES} 
      altPrefix="Private Cruise" 
      className="bg-gray-50"
    />
  );
};
