import React from "react";

export default function MySecretBookFrontPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1b120d] text-[#f7dfb2]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Great+Vibes&display=swap');

        .msb-root {
          background:
            radial-gradient(circle at 50% 38%, rgba(255,245,224,0.96) 0%, rgba(244,223,190,0.9) 18%, rgba(223,182,132,0.5) 40%, rgba(84,48,31,0.18) 62%, rgba(27,18,13,0.7) 100%),
            linear-gradient(180deg, #2a1a12 0%, #7b5138 18%, #d8b28a 44%, #efd8b7 58%, #c88f5f 77%, #3a2418 100%);
        }

        .paper-overlay {
          background:
            radial-gradient(circle at 25% 30%, rgba(116,74,47,0.1), transparent 28%),
            radial-gradient(circle at 80% 66%, rgba(105,62,41,0.09), transparent 30%),
            repeating-linear-gradient(180deg, rgba(90,56,34,0.03) 0px, rgba(90,56,34,0.03) 2px, transparent 2px, transparent 8px);
          mix-blend-mode: multiply;
          opacity: 0.55;
        }

        .leaf-vignette {
          background:
            radial-gradient(circle at 8% 12%, rgba(21,14,10,0.9) 0%, rgba(21,14,10,0.55) 18%, transparent 34%),
            radial-gradient(circle at 92% 12%, rgba(21,14,10,0.86) 0%, rgba(21,14,10,0.5) 18%, transparent 34%),
            radial-gradient(circle at 7% 88%, rgba(21,14,10,0.88) 0%, rgba(21,14,10,0.48) 18%, transparent 35%),
            radial-gradient(circle at 94% 90%, rgba(21,14,10,0.88) 0%, rgba(21,14,10,0.52) 18%, transparent 35%),
            radial-gradient(circle at 0% 40%, rgba(37,24,18,0.5) 0%, transparent 25%),
            radial-gradient(circle at 100% 42%, rgba(37,24,18,0.45) 0%, transparent 24%);
          filter: blur(4px);
          opacity: 0.95;
        }

        .script-lines::before,
        .script-lines::after {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.16;
          background-repeat: no-repeat;
          background-size: contain;
          pointer-events: none;
        }

        .script-lines::before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='700' viewBox='0 0 900 700'%3E%3Cg fill='none' stroke='%238b5a3c' stroke-width='3' stroke-linecap='round' opacity='0.8'%3E%3Cpath d='M30 90c55 22 104-8 157 18 36 18 75 17 121 4 48-14 78 12 127 25 55 15 103-14 151-20 53-7 95 18 144 28'/%3E%3Cpath d='M44 160c70 13 110-11 166 4 45 11 73 30 126 15 44-12 79-33 126-22 47 11 73 35 131 30 48-4 95-27 145-20'/%3E%3Cpath d='M55 245c54 26 104 16 157 0 53-16 98-10 147 15 53 26 101 20 154 1 45-16 90-15 142 12'/%3E%3Cpath d='M38 340c44-14 84-2 122 22 43 28 97 28 149 14 48-13 93-23 144-4 42 16 83 30 144 19'/%3E%3Cpath d='M55 438c53 8 95 28 147 16 47-12 93-28 142-12 49 17 90 37 147 19 44-14 88-14 137 2'/%3E%3Cpath d='M62 530c57 26 103 17 155-1 44-15 88-18 133 0 52 20 99 25 152 9 47-14 96-18 141 10'/%3E%3C/g%3E%3C/svg%3E");
          background-position: left 6% top 25%;
          transform: rotate(-6deg);
        }

        .script-lines::after {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='700' viewBox='0 0 900 700'%3E%3Cg fill='none' stroke='%238b5a3c' stroke-width='3' stroke-linecap='round' opacity='0.75'%3E%3Cpath d='M60 110c45 10 76-18 122 8 34 19 76 18 126 3 52-16 101-12 145 9 43 21 83 33 138 19 58-15 103-7 155 15'/%3E%3Cpath d='M44 220c58 15 95 23 146 7 50-16 97-29 145-4 47 24 95 35 148 22 48-11 91-34 147-17'/%3E%3Cpath d='M78 328c53-12 88 16 134 25 49 9 96-15 143-29 51-16 94-9 143 17 45 23 91 18 145 0'/%3E%3Cpath d='M40 452c61 27 108-2 161-12 46-8 89 10 134 28 48 20 92 17 147-2 48-17 95-8 148 18'/%3E%3Cpath d='M66 566c59 8 103-19 154-24 50-5 89 16 138 34 45 17 98 11 150-7 48-16 94-13 136 16'/%3E%3C/g%3E%3C/svg%3E");
          background-position: right 4% top 20%;
          transform: rotate(7deg);
        }

        .wood-bar {
          background:
            linear-gradient(180deg, #6e442d 0%, #4c2d1f 18%, #311c14 50%, #4d2c1f 82%, #6f432c 100%);
          box-shadow:
            inset 0 2px 0 rgba(255,224,167,0.25),
            inset 0 -2px 0 rgba(0,0,0,0.35),
            0 16px 36px rgba(0,0,0,0.32);
        }

        .wood-bar::before {
          content: "";
          position: absolute;
          inset: 10px;
          border-radius: inherit;
          border: 1.5px solid rgba(219,174,100,0.55);
          pointer-events: none;
        }

        .wood-bar::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background:
            radial-gradient(circle at 12% 28%, rgba(255,220,170,0.16), transparent 18%),
            radial-gradient(circle at 62% 70%, rgba(255,220,170,0.09), transparent 18%),
            linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 48%, transparent 100%);
          pointer-events: none;
        }

        .ribbon-left,
        .ribbon-right {
          width: 88px;
          height: 124px;
          top: 26px;
          background:
            linear-gradient(180deg, #6a4029 0%, #2a160f 48%, #70452d 100%);
          box-shadow: inset 0 1px 0 rgba(255,220,170,0.2), 0 14px 20px rgba(0,0,0,0.34);
        }

        .ribbon-left {
          left: -56px;
          clip-path: polygon(65% 0, 100% 10%, 82% 44%, 100% 74%, 70% 100%, 0 84%, 14% 48%, 0 12%);
          border-top-left-radius: 30px;
          border-bottom-left-radius: 42px;
        }

        .ribbon-right {
          right: -56px;
          clip-path: polygon(0 10%, 35% 0, 100% 12%, 86% 48%, 100% 84%, 30% 100%, 0 74%, 18% 44%);
          border-top-right-radius: 30px;
          border-bottom-right-radius: 42px;
        }

        .mini-open-book {
          width: 108px;
          height: 82px;
          background:
            radial-gradient(circle at 50% 10%, rgba(255,255,255,0.35), transparent 38%),
            linear-gradient(180deg, #f6ecd8 0%, #ecdec6 48%, #d8c4a3 100%);
          border-radius: 10px 10px 14px 14px;
          box-shadow:
            0 10px 26px rgba(0,0,0,0.32),
            inset 0 -2px 6px rgba(127,96,62,0.3);
          transform: perspective(500px) rotateX(34deg);
          position: relative;
        }

        .mini-open-book::before,
        .mini-open-book::after {
          content: "";
          position: absolute;
          top: 6px;
          width: 48%;
          height: 76%;
          border-radius: 8px;
          background:
            repeating-linear-gradient(180deg, rgba(120,95,65,0.36) 0px, rgba(120,95,65,0.36) 1px, transparent 1px, transparent 6px),
            linear-gradient(180deg, #fff7e8, #e7d6ba);
        }

        .mini-open-book::before { left: 2px; transform: skewY(5deg); }
        .mini-open-book::after { right: 2px; transform: skewY(-5deg); }

        .mini-spine {
          position: absolute;
          left: 50%;
          top: 2px;
          transform: translateX(-50%);
          width: 12px;
          height: 78%;
          background: linear-gradient(180deg, #5f2e20, #8f4a33, #5f2e20);
          border-radius: 6px;
          box-shadow: inset 0 0 4px rgba(255,220,170,0.28);
          z-index: 2;
        }

        .bookmark {
          position: absolute;
          left: 50%;
          bottom: -18px;
          transform: translateX(-50%);
          width: 14px;
          height: 30px;
          background: linear-gradient(180deg, #c5312c, #8d1818);
          clip-path: polygon(0 0, 100% 0, 100% 84%, 50% 100%, 0 84%);
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
          z-index: 1;
        }

        .title-text {
          font-family: 'Great Vibes', cursive;
          text-shadow:
            0 0 8px rgba(255,233,191,0.8),
            0 0 22px rgba(255,213,131,0.45),
            0 10px 24px rgba(88,52,31,0.24);
        }

        .title-ornament {
          position: relative;
          width: min(340px, 52vw);
          height: 40px;
          margin: 0 auto;
        }

        .title-ornament::before,
        .title-ornament::after {
          content: "";
          position: absolute;
          top: 20px;
          width: 42%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(228,176,88,0.85), rgba(214,164,78,0.95), transparent);
          box-shadow: 0 0 12px rgba(255,214,122,0.35);
        }

        .title-ornament::before { left: 0; }
        .title-ornament::after { right: 0; }

        .title-heart {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -52%);
          color: rgba(219,168,82,0.9);
          font-size: 32px;
          text-shadow: 0 0 10px rgba(255,210,120,0.32);
          line-height: 1;
        }

        .title-heart::before,
        .title-heart::after {
          content: "❦";
          position: absolute;
          top: -4px;
          font-size: 17px;
        }

        .title-heart::before { left: -13px; transform: rotate(-20deg); }
        .title-heart::after { right: -13px; transform: rotate(20deg); }

        .sparkle-field {
          background-image:
            radial-gradient(circle, rgba(255,248,229,1) 0 1.3px, transparent 2px),
            radial-gradient(circle, rgba(255,216,131,0.96) 0 1.7px, transparent 2.8px),
            radial-gradient(circle, rgba(255,255,255,0.86) 0 0.9px, transparent 1.8px),
            radial-gradient(circle, rgba(248,208,109,0.82) 0 2.2px, transparent 3.4px);
          background-size: 160px 160px, 220px 220px, 110px 110px, 300px 300px;
          background-position: 0 0, 60px 90px, 40px 20px, 100px 140px;
          animation: twinkle 7s linear infinite;
          opacity: 0.95;
        }

        .bokeh {
          background:
            radial-gradient(circle at 20% 36%, rgba(255,245,220,0.55) 0%, transparent 10%),
            radial-gradient(circle at 26% 62%, rgba(255,241,213,0.38) 0%, transparent 7%),
            radial-gradient(circle at 78% 34%, rgba(255,232,190,0.36) 0%, transparent 8%),
            radial-gradient(circle at 82% 70%, rgba(255,240,210,0.3) 0%, transparent 6%),
            radial-gradient(circle at 56% 74%, rgba(255,225,160,0.28) 0%, transparent 8%),
            radial-gradient(circle at 44% 28%, rgba(255,250,238,0.25) 0%, transparent 9%);
          filter: blur(1px);
        }

        .rose {
          position: absolute;
          width: 148px;
          height: 148px;
          border-radius: 999px;
          background:
            radial-gradient(circle at 52% 50%, #f0a0b6 0%, #c45b77 16%, #8f2749 34%, #5c162f 52%, transparent 53%),
            radial-gradient(circle at 35% 35%, rgba(255,222,230,0.9) 0%, transparent 18%),
            radial-gradient(circle at 62% 62%, rgba(107,18,47,0.8) 0%, transparent 22%);
          filter: drop-shadow(0 12px 22px rgba(34,18,14,0.26));
        }

        .rose::before,
        .rose::after {
          content: "";
          position: absolute;
          width: 84px;
          height: 44px;
          background: radial-gradient(circle at 50% 50%, rgba(76,106,46,0.92) 0%, rgba(31,54,23,0.95) 62%, transparent 64%);
          z-index: -1;
          border-radius: 999px;
        }

        .rose::before { left: -18px; bottom: 18px; transform: rotate(-28deg); }
        .rose::after { right: -12px; bottom: 24px; transform: rotate(26deg); }

        .rose-sm { transform: scale(0.82); }
        .rose-lg { transform: scale(1.08); }

        .vine {
          position: absolute;
          width: 240px;
          height: 240px;
          opacity: 0.52;
          filter: blur(0.2px);
        }

        .vine::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 28% 16%, rgba(34,54,26,0.92) 0 6%, transparent 7%),
            radial-gradient(circle at 45% 26%, rgba(38,63,29,0.92) 0 6%, transparent 7%),
            radial-gradient(circle at 60% 42%, rgba(35,58,27,0.9) 0 6%, transparent 7%),
            radial-gradient(circle at 72% 58%, rgba(31,48,24,0.88) 0 6%, transparent 7%),
            radial-gradient(circle at 55% 74%, rgba(29,45,22,0.9) 0 6%, transparent 7%),
            radial-gradient(circle at 36% 84%, rgba(31,50,24,0.9) 0 6%, transparent 7%),
            linear-gradient(140deg, transparent 0 42%, rgba(65,83,43,0.75) 43%, rgba(65,83,43,0.75) 44%, transparent 45%),
            linear-gradient(162deg, transparent 0 57%, rgba(65,83,43,0.7) 58%, rgba(65,83,43,0.7) 59%, transparent 60%);
        }

        .book-wrap {
          animation: floatBook 4.6s ease-in-out infinite;
          transform-origin: center center;
          filter: drop-shadow(0 32px 28px rgba(39,21,13,0.28));
        }

        .ground-glow {
          background: radial-gradient(circle, rgba(255,204,93,0.5) 0%, rgba(255,210,110,0.22) 26%, rgba(255,232,196,0.08) 44%, transparent 65%);
          filter: blur(6px);
        }

        .book {
          position: relative;
          width: min(440px, 76vw);
          aspect-ratio: 0.78;
          border-radius: 28px 18px 22px 28px;
          background:
            linear-gradient(135deg, #6c3a23 0%, #8d5130 16%, #3c2218 31%, #181718 55%, #33241b 72%, #6e432b 100%);
          box-shadow:
            inset 0 0 0 2px rgba(70,44,30,0.9),
            inset 0 0 0 8px rgba(106,66,39,0.9),
            inset 0 0 0 16px rgba(198,140,66,0.58),
            inset 0 0 0 18px rgba(62,36,22,0.96),
            0 18px 32px rgba(22,10,7,0.45),
            0 36px 52px rgba(37,18,12,0.3);
          transform: rotate(-22deg);
          overflow: visible;
        }

        .book::before {
          content: "";
          position: absolute;
          inset: 14px;
          border-radius: 20px 14px 16px 24px;
          background:
            radial-gradient(circle at 20% 20%, rgba(231,182,86,0.18), transparent 14%),
            radial-gradient(circle at 76% 74%, rgba(231,182,86,0.14), transparent 16%),
            linear-gradient(135deg, rgba(11,15,19,0.92), rgba(26,31,34,0.92) 38%, rgba(12,13,17,0.94) 100%);
          box-shadow: inset 0 0 0 2px rgba(176,118,52,0.65), inset 0 0 0 10px rgba(64,37,22,0.86);
        }

        .book::after {
          content: "";
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: -18px;
          height: 44px;
          border-radius: 0 0 18px 18px;
          background:
            repeating-linear-gradient(180deg, #d0a154 0px, #d0a154 2px, #9a6f32 2px, #9a6f32 4px, #c99548 4px, #c99548 6px);
          box-shadow: inset 0 6px 8px rgba(255,219,144,0.22), 0 8px 24px rgba(32,17,10,0.36);
          transform: perspective(300px) rotateX(50deg);
        }

        .book-corner {
          position: absolute;
          width: 78px;
          height: 78px;
          background:
            radial-gradient(circle at 32% 32%, rgba(255,226,157,0.45), transparent 20%),
            linear-gradient(135deg, #edc871 0%, #b07a2e 55%, #7c4f19 100%);
          box-shadow: inset 0 0 0 2px rgba(250,222,148,0.36), inset 0 0 0 10px rgba(121,77,26,0.38);
          z-index: 3;
        }

        .book-corner.tl {
          left: -2px;
          top: -2px;
          border-radius: 24px 0 18px 0;
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }
        .book-corner.tr {
          right: -2px;
          top: -2px;
          border-radius: 0 18px 0 18px;
          clip-path: polygon(100% 0, 100% 100%, 0 0);
        }
        .book-corner.bl {
          left: -2px;
          bottom: -2px;
          border-radius: 0 18px 0 18px;
          clip-path: polygon(0 100%, 100% 100%, 0 0);
        }
        .book-corner.br {
          right: -2px;
          bottom: -2px;
          border-radius: 18px 0 18px 0;
          clip-path: polygon(100% 100%, 100% 0, 0 100%);
        }

        .medallion {
          position: absolute;
          inset: 50% auto auto 50%;
          width: 180px;
          height: 180px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          z-index: 4;
          background:
            radial-gradient(circle at 50% 50%, rgba(25,22,22,0.92) 0%, rgba(18,18,18,0.92) 52%, rgba(171,113,46,0.9) 53%, rgba(214,161,77,0.95) 58%, rgba(82,51,24,0.95) 61%, rgba(15,15,16,0.94) 66%, transparent 67%),
            radial-gradient(circle at 50% 50%, transparent 0 72%, rgba(185,128,53,0.85) 73%, rgba(107,67,29,0.92) 78%, transparent 79%);
          box-shadow: 0 0 24px rgba(235,186,91,0.12), inset 0 0 18px rgba(255,222,141,0.12);
        }

        .medallion::before {
          content: "✶";
          position: absolute;
          inset: 50% auto auto 50%;
          transform: translate(-50%, -52%);
          font-size: 88px;
          color: rgba(202,146,68,0.92);
          text-shadow: 0 0 10px rgba(255,216,137,0.28);
        }

        .medallion::after {
          content: "";
          position: absolute;
          inset: 14px;
          border-radius: 50%;
          border: 2px solid rgba(208,151,69,0.65);
          box-shadow: inset 0 0 0 2px rgba(70,41,23,0.95), inset 0 0 0 10px rgba(175,120,52,0.18);
        }

        .strap-h,
        .strap-v {
          position: absolute;
          z-index: 5;
          background:
            linear-gradient(180deg, #784627 0%, #5b331d 24%, #3d2115 50%, #5b331d 76%, #875336 100%);
          box-shadow: inset 0 1px 1px rgba(255,216,154,0.18), inset 0 -1px 1px rgba(0,0,0,0.3), 0 8px 14px rgba(0,0,0,0.22);
        }

        .strap-h {
          left: -26px;
          right: -26px;
          top: 44%;
          height: 34px;
          border-radius: 16px;
        }

        .strap-v {
          top: -18px;
          bottom: -18px;
          right: 9%;
          width: 34px;
          border-radius: 16px;
        }

        .buckle {
          position: absolute;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: radial-gradient(circle at 34% 30%, #f2d287 0%, #bb7e2d 44%, #6d4216 100%);
          box-shadow: inset 0 0 0 2px rgba(255,225,159,0.34), inset 0 0 0 12px rgba(121,77,31,0.26), 0 8px 16px rgba(0,0,0,0.24);
          z-index: 6;
        }

        .buckle::before {
          content: "";
          position: absolute;
          inset: 13px;
          border-radius: 50%;
          border: 2px solid rgba(101,62,25,0.7);
        }

        .buckle.left { left: -10px; top: calc(44% - 9px); }
        .buckle.right { right: -12px; top: calc(44% - 9px); }
        .buckle.top { right: calc(9% - 10px); top: -10px; }
        .buckle.bottom { right: calc(9% - 10px); bottom: -12px; }

        .book-title {
          position: absolute;
          left: 50%;
          top: 28%;
          transform: translateX(-50%);
          width: 70%;
          text-align: center;
          z-index: 6;
          color: #d9a455;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 0 0 10px rgba(255,218,145,0.12);
        }

        .book-title .small {
          display: block;
          font-size: clamp(0.85rem, 1.35vw, 1rem);
          letter-spacing: 0.34em;
          margin-bottom: 0.1rem;
          color: #bf8a44;
        }

        .book-title .big {
          display: block;
          font-size: clamp(2.35rem, 4.3vw, 3.8rem);
          line-height: 0.9;
          font-weight: 600;
        }

        .book-glyph {
          position: absolute;
          color: rgba(201,145,65,0.95);
          z-index: 6;
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 0 0 8px rgba(255,220,145,0.12);
        }

        .book-glyph.g1 { left: 14%; top: 73%; font-size: 48px; }
        .book-glyph.g2 { left: 70%; top: 73%; font-size: 54px; }
        .book-glyph.g3 { left: 18%; top: 16%; font-size: 26px; }
        .book-glyph.g4 { right: 18%; top: 16%; font-size: 26px; }

        .shadow-floor {
          width: min(320px, 50vw);
          height: 48px;
         
