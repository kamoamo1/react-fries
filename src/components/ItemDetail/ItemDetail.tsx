// src/components/ItemDetail/ItemDetail.tsx

import React from 'react';
import './itemDetail.css';

interface ItemDetailProps {
  id: number;
  name: string;
  description: string;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ id, name, description }) => {
  return (
    <div className="item-detail">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default ItemDetail;
