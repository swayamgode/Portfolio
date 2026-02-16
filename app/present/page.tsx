'use client';
import React, { useState, useEffect } from 'react';
import { Maximize2, Minimize2, Play, FileText, Download, AlertCircle } from 'lucide-react';

export default function PresentPage() {
    const [isPresenting, setIsPresenting] = useState(false);
    const [hasPdf, setHasPdf] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsPresenting(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);

        // Check if the optimized PDF version exists
        fetch('/p1.pdf', { method: 'HEAD' })
            .then(res => {
                if (res.ok && res.headers.get('content-type')?.includes('pdf')) {
                    setHasPdf(true);
                }
            })
            .catch(err => console.error("Error checking for PDF:", err))
            .finally(() => setIsLoading(false));

        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    const togglePresentation = async () => {
        if (!document.fullscreenElement) {
            try {
                await document.documentElement.requestFullscreen();
            } catch (err) {
                console.error("Error attempting to enable fullscreen:", err);
            }
        } else {
            if (document.exitFullscreen) {
                await document.exitFullscreen();
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-black">
            {!isPresenting ? (
                <div className="text-center animate-in fade-in zoom-in duration-500 max-w-2xl px-6">
                    <h1 className="text-4xl font-bold text-white mb-8 tracking-tighter">
                        Presentation Mode
                    </h1>

                    <div className="flex flex-col gap-4 items-center">
                        <button
                            onClick={togglePresentation}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
                        >
                            <Play className="w-5 h-5 fill-black" />
                            <span>Start Presentation</span>
                            <div className="absolute inset-0 rounded-full ring-2 ring-white/50 group-hover:ring-white/80 transition-all scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-110" />
                        </button>

                        {!isLoading && !hasPdf && (
                            <div className="mt-8 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl max-w-md text-left">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                                    <div className="space-y-2">
                                        <p className="text-zinc-300 text-sm font-medium">
                                            Optimization Recommended
                                        </p>
                                        <p className="text-zinc-500 text-xs leading-relaxed">
                                            Browsers cannot natively display PowerPoint (.pptx) files directly.
                                            For the best experience, please save your presentation as
                                            <code className="mx-1 px-1 py-0.5 bg-zinc-800 rounded text-zinc-300">p1.pdf</code>
                                            in the <code className="mx-1 px-1 py-0.5 bg-zinc-800 rounded text-zinc-300">public</code> folder.
                                        </p>
                                        <a
                                            href="/p1.pptx"
                                            download
                                            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-xs mt-2 transition-colors"
                                        >
                                            <Download className="w-3 h-3" />
                                            Download current .pptx
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <>
                    <div className="absolute top-4 right-4 z-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={togglePresentation}
                            className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white/50 hover:text-white hover:bg-black/70 transition-all"
                            title="Exit Presentation"
                        >
                            <Minimize2 className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="w-full h-full bg-black flex items-center justify-center">
                        {hasPdf ? (
                            <iframe
                                src="/p1.pdf#view=FitH"
                                className="w-full h-full border-none"
                                title="Presentation"
                            />
                        ) : (
                            <div className="text-center p-8 max-w-md">
                                <FileText className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
                                <h3 className="text-xl font-medium text-zinc-400 mb-2">No PDF Found</h3>
                                <p className="text-zinc-600 mb-6">
                                    Please convert your PowerPoint to PDF and save it as "p1.pdf" in the public folder to view it here.
                                </p>
                                <a
                                    href="/p1.pptx"
                                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm transition-all"
                                >
                                    Open .pptx (Download)
                                </a>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
