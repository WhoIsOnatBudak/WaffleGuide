'use client';

import React, { useState } from 'react';
import WaffleList from './components/WaffleList';
import WaffleMap from './components/WaffleMap';

export default function Home() {
  const [selectedShopId, setSelectedShopId] = useState<number | null>(null);

  return (
    <div className="flex h-screen w-full bg-background text-foreground dark:bg-black dark:text-white overflow-hidden">
      <WaffleList onSelectShop={setSelectedShopId} selectedShopId={selectedShopId} />
      <WaffleMap selectedShopId={selectedShopId} />
    </div>
  );
}
