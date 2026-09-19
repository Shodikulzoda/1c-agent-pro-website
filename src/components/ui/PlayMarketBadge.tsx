"use client";

import { QRCodeSVG } from "qrcode.react";
import { playMarketUrl } from "@/content/site";

export function PlayMarketBadge() {
  return (
    <div className="flex items-center gap-4">
      <a
        href={playMarketUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 rounded-xl bg-[#0d0d0d] px-4 py-2.5 text-white transition-opacity hover:opacity-90"
      >
        {/* Google Play icon */}
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
          <path d="M3.18 23.76c.3.17.64.24.98.2l12.49-11.95L13.28 8.7 3.18 23.76zM22.47 10.28l-3.01-1.72-3.42 3.27 3.42 3.27 3.04-1.74c.87-.5.87-1.58-.03-2.08zM2.27.28C1.93-.12 1.37-.08.97.16L13.27 12.3l3.37-3.22L2.27.28zM3.18.24L13.28 15.3l3.37-3.22L4.16.04a1.23 1.23 0 00-.98.2z" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-[0.6rem] text-white/70 uppercase tracking-wide">Скачать в</span>
          <span className="text-[0.82rem] font-bold">Google Play</span>
        </div>
      </a>

      <div className="flex flex-col items-center gap-1">
        <div className="rounded-lg bg-white p-1.5 shadow-sm">
          <QRCodeSVG
            value={playMarketUrl}
            size={52}
            bgColor="#ffffff"
            fgColor="#0d0d0d"
            level="M"
          />
        </div>
        <span className="text-ink-soft text-[0.62rem]">QR для загрузки</span>
      </div>
    </div>
  );
}
