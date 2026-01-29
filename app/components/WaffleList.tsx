import React from 'react';
import Image from 'next/image';
import { waffleShops } from '../data/waffles';

interface WaffleListProps {
    onSelectShop: (id: number) => void;
    selectedShopId: number | null;
}

export default function WaffleList({ onSelectShop, selectedShopId }: WaffleListProps) {
    return (
        <aside className="w-1/3 flex flex-col border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-xl overflow-y-auto z-10">
            <div className="sticky top-0 z-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-6 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">🧇</span>
                    <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
                        Waffle Guide
                    </h1>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                    Discover Istanbul's best waffle spots
                </p>
            </div>

            <div className="flex-1 p-4 space-y-4">
                {waffleShops.map((shop) => (
                    <button
                        key={shop.id}
                        onClick={() => onSelectShop(shop.id)}
                        className={`w-full text-left p-0 rounded-2xl border transition-all duration-300 group relative overflow-hidden flex flex-col
              ${selectedShopId === shop.id
                                ? 'border-orange-500/50 bg-white dark:bg-zinc-800 shadow-lg shadow-orange-500/10 scale-[1.02] ring-1 ring-orange-500/20'
                                : 'border-white dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md hover:border-orange-200 dark:hover:border-zinc-700 hover:-translate-y-0.5'
                            }
            `}
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-40 overflow-hidden">
                            <Image
                                src={shop.image}
                                alt={shop.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                            {/* Rating Badge on Image */}
                            <div className="absolute top-3 right-3">
                                <span
                                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold shadow-md border backdrop-blur-md ${shop.rating === null
                                            ? 'bg-blue-500/80 text-white border-blue-400/50'
                                            : shop.rating >= 8
                                                ? 'bg-green-500/80 text-white border-green-400/50'
                                                : shop.rating >= 7
                                                    ? 'bg-yellow-500/80 text-white border-yellow-400/50'
                                                    : 'bg-orange-500/80 text-white border-orange-400/50'
                                        }`}
                                >
                                    {shop.rating !== null ? (
                                        <>
                                            <span className="text-[10px]">⭐</span>
                                            {shop.rating}
                                        </>
                                    ) : '👑 Special'}
                                </span>
                            </div>
                        </div>

                        {selectedShopId === shop.id && (
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-orange-400 to-amber-500 z-10"></div>
                        )}

                        <div className="p-4">
                            <h3 className={`font-bold text-lg tracking-tight mb-2 ${selectedShopId === shop.id ? 'text-zinc-900 dark:text-white' : 'text-zinc-700 dark:text-zinc-200'}`}>
                                {shop.name}
                            </h3>

                            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed italic border-l-2 border-zinc-100 dark:border-zinc-800 pl-3 line-clamp-2 group-hover:line-clamp-none transition-all">
                                "{shop.comment}"
                            </p>
                        </div>
                    </button>
                ))}

                <div className="h-8"></div> {/* Spacer for bottom scroll */}
            </div>
        </aside>
    );
}
