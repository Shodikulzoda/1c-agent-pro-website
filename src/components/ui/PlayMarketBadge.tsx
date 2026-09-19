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
        {/* Google Play 2022 icon */}
        <svg viewBox="30 336.7 120.9 129.2" className="h-6 w-6 shrink-0" aria-hidden="true">
          <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"/>
          <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1z"/>
          <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"/>
          <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"/>
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
