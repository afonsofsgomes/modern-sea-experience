
import React from 'react';
import { PhotoGallery } from '@/components/PhotoGallery';

const PORTO_SANTO_IMAGES = [
  'https://extranet.seayou.pt/photos/products/pxo/1.jpg',
  'https://extranet.seayou.pt/photos/products/pxo/2.jpg',
  'https://extranet.seayou.pt/photos/products/pxo/3.jpg',
  'https://extranet.seayou.pt/photos/products/pxo/4.jpg',
  'https://extranet.seayou.pt/photos/products/pxo/5.jpg'
];

export const PortoSantoGallery = () => {
  return (
    <PhotoGallery 
      images={PORTO_SANTO_IMAGES} 
      altPrefix="Porto Santo" 
      className="bg-gray-50"
    />
  );
};
