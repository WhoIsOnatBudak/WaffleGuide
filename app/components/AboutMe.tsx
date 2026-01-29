'use client';

import React, { useState } from 'react';

export default function AboutMe() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group border-2 border-white/20"
                aria-label="About Me"
            >
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">👤</span>
            </button>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl max-w-lg w-full p-8 relative border border-zinc-200 dark:border-zinc-800 animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors flex items-center justify-center text-zinc-600 dark:text-zinc-400"
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        {/* Content */}
                        <div className="space-y-6">
                            {/* Header */}
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 flex items-center justify-center text-4xl shadow-lg">
                                    🧇
                                </div>
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                                    Benim Fikirlerim neden önemli?
                                </h2>
                            </div>

                            {/* Bio */}
                            <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                                <p className="leading-relaxed">
                                    Benim adım Onat Budak, neden fikirlerimin önemli olduğunu ve bu siteyi neden ciddiye almanız gerektiği sorusuna açıklık getirmek istiyorum.
                                </p>
                                <p className="leading-relaxed">
                                    Lütfen bu siteyi ciddiye almayın :D Waffle yemeyi seviyorum ve çok fazla farklı yer denediğimi fark edince bunları kaydetmek istedim ve bu site de bu işe yarıyor isterseniz siz de bu fikirlerden yararlanabilirsiniz.
                                </p>
                                <p className="leading-relaxed">
                                    Haritadaki renkli waffle ikonları her mekanın aldığı puana göre renk kodlu aradığınızı bulmanıza yardımcı olmak için. Umarım bu rehber sizin de favorinizi bulmanıza yardımcı olur! 🧇✨
                                </p>
                            </div>

                            {/* Footer */}
                            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-center">
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    Made with ❤️ and lots of waffles
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
}
