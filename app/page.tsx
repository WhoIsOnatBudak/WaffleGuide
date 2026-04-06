'use client';

import React, { useState } from 'react';
import WaffleList from './components/WaffleList';
import WaffleMap from './components/WaffleMap';
import AboutMe from './components/AboutMe';
import { waffleShops, ShopType } from './data/waffles';

export default function Home() {
  const [selectedShopId, setSelectedShopId] = useState<number | null>(null);
  const [filterType, setFilterType] = useState<'all' | ShopType>('all');

  const filteredShops = filterType === 'all' ? waffleShops : waffleShops.filter(shop => shop.type === filterType);

  return (
    <div className="flex h-screen w-full bg-background text-foreground dark:bg-black dark:text-white overflow-hidden">
      <WaffleList
        onSelectShop={setSelectedShopId}
        selectedShopId={selectedShopId}
        shops={filteredShops}
        filterType={filterType}
        setFilterType={setFilterType}
      />
      <WaffleMap selectedShopId={selectedShopId} shops={filteredShops} />
      <AboutMe />
    </div>
  );
}
