'use client';

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { WaffleShop } from '../data/waffles';

export default function WaffleMap({ selectedShopId, shops }: { selectedShopId: number | null, shops: WaffleShop[] }) {
    const Map = useMemo(() => dynamic(
        () => import('./MapComponent'),
        {
            loading: () => <div className="flex items-center justify-center h-full text-muted-foreground">Loading Map...</div>,
            ssr: false
        }
    ), []);

    return (
        <main className="flex-1 relative bg-zinc-50 dark:bg-zinc-950 flex flex-col h-full w-full p-6">
            <div className="h-full w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 relative ring-1 ring-zinc-200 dark:ring-zinc-800">
                <Map selectedShopId={selectedShopId} shops={shops} />
            </div>
            {/* Optional: Add a subtle powered by or legend below if needed, or keep clean */}
        </main>
    );
}
