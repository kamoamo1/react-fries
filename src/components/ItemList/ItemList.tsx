// src/components/ItemList/ItemList.tsx

import React, { useEffect, useState } from 'react';
import './itemList.css';

interface Item {
  id: number;
  name: string;
  description: string;
}

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Tutaj można dodać logikę pobierania danych z API
    // Na razie użyjemy przykładowych danych
    const mockItems: Item[] = [
      { id: 1, name: 'Item 1', description: 'Description 1' },
      { id: 2, name: 'Item 2', description: 'Description 2' },
    ];
    setItems(mockItems);
  }, []);

  return (
    <div className="item-list">
      {items.map(item => (
        <div key={item.id} className="item">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
