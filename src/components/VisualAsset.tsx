import React from 'react';

interface VisualAssetProps {
  type: 'hero-portrait' | 'people' | 'places' | 'sports' | 'about-fence' | 'contact-clock' | 'architecture' | 'clock';
  className?: string;
  alt?: string;
}

export const VisualAsset: React.FC<VisualAssetProps> = ({ type, className = '', alt = '' }) => {
  if (type === 'hero-portrait') {
    // Authentic portrait of Kalkidan Tadesse inspired by uploaded photo k.jpg
    return (
      <div className={`relative overflow-hidden ${className}`} role="img" aria-label={alt || "Portrait of Kalkidan Tadesse"}>
        <svg viewBox="0 0 800 1000" className="w-full h-full object-cover select-none pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Soft warm cafe interior background */}
            <linearGradient id="cafeBg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EDE1D1" />
              <stop offset="40%" stopColor="#F5ECE0" />
              <stop offset="100%" stopColor="#E4D6C4" />
            </linearGradient>

            {/* Warm skin tones */}
            <linearGradient id="skinGrad" x1="30%" y1="0%" x2="70%" y2="100%">
              <stop offset="0%" stopColor="#C49372" />
              <stop offset="35%" stopColor="#B37E5C" />
              <stop offset="70%" stopColor="#9C6B4B" />
              <stop offset="100%" stopColor="#7E5236" />
            </linearGradient>

            {/* Sweatshirt slate blue/heather grey gradient */}
            <linearGradient id="sweatshirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6C7688" />
              <stop offset="30%" stopColor="#5B6679" />
              <stop offset="70%" stopColor="#4A5466" />
              <stop offset="100%" stopColor="#3C4556" />
            </linearGradient>

            {/* Wood chair material */}
            <linearGradient id="woodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E5C79E" />
              <stop offset="100%" stopColor="#B89569" />
            </linearGradient>

            <linearGradient id="silverChain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#DDE1E6" />
              <stop offset="100%" stopColor="#9BA3AF" />
            </linearGradient>
          </defs>

          {/* Warm background wall with studio lighting */}
          <rect width="800" height="1000" fill="url(#cafeBg)" />

          {/* Background architectural details & hanging plant from k.jpg */}
          <g opacity="0.65">
            {/* Wooden crossbeam near ceiling */}
            <rect x="360" y="40" width="440" height="18" fill="#CBB191" rx="2" />
            {/* Hanging macramé plant strings */}
            <line x1="650" y1="58" x2="650" y2="160" stroke="#B09678" strokeWidth="2" strokeDasharray="4 2" />
            {/* Hanging potted plant foliage */}
            <ellipse cx="650" cy="180" rx="40" ry="24" fill="#6E8457" />
            <ellipse cx="665" cy="170" rx="30" ry="20" fill="#889E70" />
            <ellipse cx="635" cy="175" rx="25" ry="18" fill="#586E42" />
            <path d="M 640 185 Q 650 220 655 200" stroke="#758B5E" strokeWidth="4" fill="none" />
            {/* Left plant pot */}
            <ellipse cx="440" cy="140" rx="35" ry="22" fill="#7D9366" />
            <ellipse cx="445" cy="130" rx="26" ry="18" fill="#9AB082" />
            {/* Soft room ambient warm glow */}
            <circle cx="400" cy="300" r="350" fill="#FFE8CE" opacity="0.35" filter="blur(40px)" />
          </g>

          {/* Light wooden chair background slats */}
          <g stroke="url(#woodGrad)" strokeWidth="8" strokeLinecap="round" opacity="0.8">
            <line x1="120" y1="560" x2="120" y2="820" />
            <line x1="160" y1="560" x2="160" y2="820" />
            <line x1="200" y1="560" x2="200" y2="820" />
            <line x1="600" y1="560" x2="600" y2="820" />
            <line x1="640" y1="560" x2="640" y2="820" />
            <line x1="680" y1="560" x2="680" y2="820" />
          </g>

          {/* Shoulders & Heather Slate Crewneck Sweatshirt (Matching k.jpg) */}
          <g>
            {/* Torso shape */}
            <path d="M 120 1000 C 130 750 200 660 300 620 Q 400 640 500 620 C 600 660 670 750 680 1000 Z" fill="url(#sweatshirtGrad)" />
            {/* Sweatshirt fabric marbling & folds */}
            <path d="M 280 660 Q 320 740 280 820" stroke="#3A4352" strokeWidth="3" fill="none" opacity="0.4" />
            <path d="M 520 660 Q 480 740 520 820" stroke="#3A4352" strokeWidth="3" fill="none" opacity="0.4" />
            <path d="M 220 720 Q 300 780 400 770 Q 500 780 580 720" stroke="#3A4352" strokeWidth="2.5" fill="none" opacity="0.3" />
            {/* Ribbed crewneck collar */}
            <ellipse cx="400" cy="625" rx="100" ry="42" fill="#525D70" stroke="#343C4A" strokeWidth="3" />
            <ellipse cx="400" cy="622" rx="90" ry="34" fill="#B37E5C" />
          </g>

          {/* Delicate Silver Chain & Cross Necklace (Matching k.jpg) */}
          <g>
            <path d="M 345 615 Q 400 690 455 615" stroke="url(#silverChain)" strokeWidth="2" fill="none" />
            {/* Small Silver Latin Cross */}
            <g transform="translate(400, 690)">
              <line x1="0" y1="-14" x2="0" y2="16" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
              <line x1="-9" y1="-4" x2="9" y2="-4" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
              <circle cx="0" cy="-4" r="1.5" fill="#E2E6EC" />
            </g>
          </g>

          {/* Neck & Throat with gentle shading */}
          <path d="M 350 490 Q 400 525 450 490 L 455 630 Q 400 655 345 630 Z" fill="url(#skinGrad)" />
          {/* Subtle clavicle shadow */}
          <path d="M 370 600 Q 400 620 430 600" stroke="#664129" strokeWidth="2" fill="none" opacity="0.4" />

          {/* Neat cornrow braids coming down behind shoulders */}
          <g stroke="#181310" strokeWidth="4" strokeLinecap="round">
            <line x1="475" y1="500" x2="495" y2="590" />
            <line x1="485" y1="510" x2="510" y2="600" />
            <line x1="495" y1="520" x2="520" y2="615" />
            <line x1="325" y1="500" x2="310" y2="570" />
          </g>

          {/* Face Structure: Natural, warm, soft features (Matching k.jpg) */}
          <path d="M 315 420 C 310 490 340 555 400 560 C 460 555 490 490 485 420 C 480 345 445 330 400 330 C 355 330 320 345 315 420 Z" fill="url(#skinGrad)" />

          {/* Cheeks & soft warm contour */}
          <ellipse cx="355" cy="465" rx="22" ry="16" fill="#8C5C3D" opacity="0.35" />
          <ellipse cx="445" cy="465" rx="22" ry="16" fill="#8C5C3D" opacity="0.35" />

          {/* Natural expressive dark almond eyes (Matching k.jpg) */}
          <g>
            {/* Left Eye */}
            <path d="M 335 440 Q 360 426 385 440 Q 360 454 335 440 Z" fill="#F4EDE6" />
            <circle cx="360" cy="440" r="9" fill="#1C140F" />
            <circle cx="362" cy="438" r="3" fill="#FFFFFF" opacity="0.8" />
            <path d="M 332 440 Q 360 423 388 440" stroke="#2B1A12" strokeWidth="2.5" fill="none" />

            {/* Right Eye */}
            <path d="M 415 440 Q 440 426 465 440 Q 440 454 415 440 Z" fill="#F4EDE6" />
            <circle cx="440" cy="440" r="9" fill="#1C140F" />
            <circle cx="442" cy="438" r="3" fill="#FFFFFF" opacity="0.8" />
            <path d="M 412 440 Q 440 423 468 440" stroke="#2B1A12" strokeWidth="2.5" fill="none" />

            {/* Natural defined eyebrows */}
            <path d="M 330 422 Q 360 410 390 420" stroke="#1F1510" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <path d="M 410 420 Q 440 410 470 422" stroke="#1F1510" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          </g>

          {/* Gentle natural nose */}
          <g stroke="#664129" strokeWidth="2" strokeLinecap="round" fill="none">
            <path d="M 400 435 L 396 480 Q 400 488 406 488" />
            <ellipse cx="388" cy="485" rx="5" ry="3" fill="#52321D" stroke="none" />
            <ellipse cx="414" cy="485" rx="5" ry="3" fill="#52321D" stroke="none" />
          </g>

          {/* Natural lips with warm tone */}
          <g>
            <path d="M 375 515 Q 400 508 425 515 Q 400 535 375 515 Z" fill="#8A4E38" />
            <line x1="378" y1="515" x2="422" y2="515" stroke="#5E2F1E" strokeWidth="1.8" />
          </g>

          {/* Ears with small stud earrings (Matching k.jpg) */}
          <ellipse cx="310" cy="460" rx="10" ry="18" fill="#9C6B4B" />
          <circle cx="311" cy="470" r="2.5" fill="#E8D5B5" stroke="#B08D5B" strokeWidth="1" />
          <ellipse cx="490" cy="460" rx="10" ry="18" fill="#9C6B4B" />
          <circle cx="489" cy="470" r="2.5" fill="#E8D5B5" stroke="#B08D5B" strokeWidth="1" />

          {/* Neat cornrow braids parted back across forehead and crown (Matching k.jpg) */}
          <g>
            {/* Hair base shape */}
            <path d="M 315 420 C 310 330 345 285 400 285 C 455 285 490 330 485 420 C 475 350 450 340 400 340 C 350 340 325 350 315 420 Z" fill="#1C1410" />
            {/* Braided tracks parting straight back */}
            <path d="M 400 340 Q 400 310 400 285" stroke="#2E2019" strokeWidth="3" fill="none" />
            <path d="M 380 343 Q 375 315 370 290" stroke="#2E2019" strokeWidth="3" fill="none" />
            <path d="M 420 343 Q 425 315 430 290" stroke="#2E2019" strokeWidth="3" fill="none" />
            <path d="M 358 350 Q 350 325 345 305" stroke="#2E2019" strokeWidth="3" fill="none" />
            <path d="M 442 350 Q 450 325 455 305" stroke="#2E2019" strokeWidth="3" fill="none" />
            <path d="M 335 365 Q 330 340 325 320" stroke="#2E2019" strokeWidth="3" fill="none" />
            <path d="M 465 365 Q 470 340 475 320" stroke="#2E2019" strokeWidth="3" fill="none" />
          </g>

          {/* Foreground chair armrest (Light wooden chair from k.jpg) */}
          <g stroke="url(#woodGrad)" strokeWidth="16" strokeLinecap="round">
            <line x1="80" y1="920" x2="320" y2="940" />
            <line x1="480" y1="940" x2="720" y2="920" />
          </g>

          {/* Frame outline */}
          <rect width="800" height="1000" fill="none" stroke="#3D2E25" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }

  if (type === 'people') {
    // Strip 1: "PEOPLE" - Man in straw hat / portrait inspired by p3.jpg
    return (
      <div className={`relative overflow-hidden w-full h-full ${className}`}>
        <svg viewBox="0 0 1200 450" preserveAspectRatio="xMidYMid slice" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sepiaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#302621" />
              <stop offset="60%" stopColor="#4A3B33" />
              <stop offset="100%" stopColor="#251D19" />
            </linearGradient>
            <linearGradient id="hatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E3D1BE" />
              <stop offset="100%" stopColor="#9C8572" />
            </linearGradient>
            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0D7CD" />
              <stop offset="100%" stopColor="#9E9488" />
            </linearGradient>
          </defs>
          <rect width="1200" height="450" fill="url(#sepiaGrad)" />
          {/* Subtle outdoor landscape blur in background */}
          <path d="M 0 320 Q 300 240 600 290 T 1200 270 L 1200 450 L 0 450 Z" fill="#211A16" opacity="0.6" />
          <path d="M 0 360 Q 400 300 800 340 T 1200 310 L 1200 450 L 0 450 Z" fill="#1A1411" opacity="0.8" />

          {/* Man in straw hat pointing arm to the left (matching p3.jpg) */}
          <g transform="translate(620, 60)">
            {/* Extended left arm pointing outward */}
            <path d="M 0 180 C -120 160 -240 120 -340 100 C -360 95 -370 120 -345 130 C -260 160 -150 210 -20 250 Z" fill="#755E4E" />
            {/* Hand & fingers */}
            <ellipse cx="-355" cy="110" rx="20" ry="12" fill="#755E4E" transform="rotate(-15 -355 110)" />

            {/* Torso / Buttoned Shirt */}
            <path d="M -30 220 L -90 400 L 220 400 L 180 230 Q 80 190 -30 220 Z" fill="url(#shirtGrad)" />
            {/* Collar & Buttons */}
            <path d="M 30 200 L 60 270 L 40 400" stroke="#5E5346" strokeWidth="2.5" />
            <circle cx="50" cy="290" r="3" fill="#423A30" />
            <circle cx="47" cy="330" r="3" fill="#423A30" />
            <circle cx="44" cy="370" r="3" fill="#423A30" />

            {/* Neck & Face */}
            <path d="M 20 150 Q 55 170 90 150 L 80 220 Q 55 230 25 215 Z" fill="#7D6554" />
            <path d="M 15 100 Q 10 165 55 175 Q 95 165 95 100 Q 90 60 55 60 Q 20 60 15 100 Z" fill="#8C7360" />

            {/* Hat (straw wide brim hat matching p3.jpg) */}
            <ellipse cx="55" cy="70" rx="140" ry="50" fill="url(#hatGrad)" transform="rotate(-6 55 70)" />
            {/* Crown of hat */}
            <path d="M -15 65 C -20 0 120 -10 125 65 Z" fill="#C2AB95" />
            <path d="M -15 60 Q 55 72 125 58" stroke="#594434" strokeWidth="4" />
          </g>

          {/* Film grain and edge shading */}
          <rect width="1200" height="450" fill="black" opacity="0.25" />
        </svg>
      </div>
    );
  }

  if (type === 'places') {
    // Strip 2: "PLACES" - Mountain ridge & scenic terrain inspired by p3.jpg
    return (
      <div className={`relative overflow-hidden w-full h-full ${className}`}>
        <svg viewBox="0 0 1200 450" preserveAspectRatio="xMidYMid slice" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#DDD6CC" />
              <stop offset="50%" stopColor="#BEB4A6" />
              <stop offset="100%" stopColor="#8C8173" />
            </linearGradient>
            <linearGradient id="mountainFront" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B3029" />
              <stop offset="100%" stopColor="#1C1613" />
            </linearGradient>
          </defs>
          {/* Cloudy dramatic sky */}
          <rect width="1200" height="450" fill="url(#skyGrad)" />
          {/* Distant mountain layer */}
          <path d="M 0 250 L 140 180 L 280 230 L 450 140 L 610 200 L 780 120 L 960 190 L 1100 130 L 1200 160 L 1200 450 L 0 450 Z" fill="#6B6054" opacity="0.8" />
          {/* Mid-range jagged peaks */}
          <path d="M 0 310 L 180 220 L 320 270 L 530 170 L 680 250 L 890 160 L 1050 240 L 1200 190 L 1200 450 L 0 450 Z" fill="#4F4239" opacity="0.9" />
          {/* Foreground mountain ridges with textures */}
          <path d="M 0 380 L 120 290 L 290 340 L 460 220 L 650 330 L 840 210 L 1020 310 L 1200 240 L 1200 450 L 0 450 Z" fill="url(#mountainFront)" />

          {/* Valley road indicator / arrow sign as in p3.jpg */}
          <g transform="translate(600, 390)">
            <rect x="-14" y="-14" width="28" height="28" fill="#17120F" rx="3" stroke="#D1C4B5" strokeWidth="1.5" />
            <path d="M 0 8 L 0 -4 M -5 0 L 0 -6 L 5 0" stroke="#D1C4B5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          {/* Monochromatic overlay */}
          <rect width="1200" height="450" fill="#241B15" opacity="0.2" />
        </svg>
      </div>
    );
  }

  if (type === 'sports') {
    // Strip 3: "SPORTS" - Runner legs in dynamic stride on track inspired by p3.jpg
    return (
      <div className={`relative overflow-hidden w-full h-full ${className}`}>
        <svg viewBox="0 0 1200 450" preserveAspectRatio="xMidYMid slice" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="trackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#6E6258" />
              <stop offset="100%" stopColor="#2E2620" />
            </linearGradient>
            <linearGradient id="shoeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5EDE4" />
              <stop offset="60%" stopColor="#C4B4A3" />
              <stop offset="100%" stopColor="#2E2620" />
            </linearGradient>
          </defs>
          <rect width="1200" height="450" fill="url(#trackGrad)" />
          {/* Running track lane lines */}
          <line x1="0" y1="280" x2="1200" y2="280" stroke="#DFD5C8" strokeWidth="4" strokeOpacity="0.4" />
          <line x1="0" y1="360" x2="1200" y2="360" stroke="#DFD5C8" strokeWidth="5" strokeOpacity="0.4" />
          <line x1="0" y1="430" x2="1200" y2="430" stroke="#DFD5C8" strokeWidth="4" strokeOpacity="0.3" />

          {/* Left Foot in mid-air with running sneaker (matching p3.jpg) */}
          <g transform="translate(240, 240) rotate(-22)">
            {/* Calf muscle */}
            <path d="M 0 -180 C 15 -120 20 -40 -10 10 L 30 10 C 50 -40 45 -120 30 -180 Z" fill="#3D3128" />
            {/* Sneaker silhouette */}
            <path d="M -30 20 C -20 -10 40 -15 80 15 C 90 35 70 70 20 70 C -15 70 -35 50 -30 20 Z" fill="url(#shoeGrad)" stroke="#1F1813" strokeWidth="2" />
            {/* Laces and sole */}
            <path d="M -20 60 L 75 60 L 80 72 L -25 72 Z" fill="#FFFFFF" />
            <path d="M 0 10 L 25 10 M 5 20 L 30 20 M 10 30 L 35 30" stroke="#1F1813" strokeWidth="2" />
          </g>

          {/* Right Leg & Muscular Calf descending (matching p3.jpg) */}
          <g transform="translate(880, 160)">
            <path d="M -40 -160 C -10 -90 -5 -10 -25 90 C -20 180 -10 240 0 290 L 55 290 C 70 230 85 150 75 70 C 65 -20 60 -100 40 -160 Z" fill="#241B16" />
            {/* Muscle striations in calf */}
            <path d="M 10 20 C 25 60 25 120 15 170" stroke="#4F3E32" strokeWidth="3" fill="none" strokeOpacity="0.6" />
            <path d="M 35 30 C 50 80 50 140 40 190" stroke="#4F3E32" strokeWidth="2.5" fill="none" strokeOpacity="0.6" />
          </g>
          <rect width="1200" height="450" fill="#211A16" opacity="0.2" />
        </svg>
      </div>
    );
  }

  if (type === 'about-fence') {
    // Strip 4: "ABOUT" - Portrait behind wire fence with aviator sunglasses inspired by p3.jpg
    return (
      <div className={`relative overflow-hidden w-full h-full ${className}`}>
        <svg viewBox="0 0 1200 450" preserveAspectRatio="xMidYMid slice" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fenceBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A3D35" />
              <stop offset="100%" stopColor="#241B16" />
            </linearGradient>
            <pattern id="wireGrid" width="45" height="45" patternUnits="userSpaceOnUse">
              <path d="M 0 0 L 45 45 M 45 0 L 0 45" stroke="#E3DCD3" strokeWidth="1.2" strokeOpacity="0.38" />
            </pattern>
          </defs>
          <rect width="1200" height="450" fill="url(#fenceBg)" />

          {/* Man with aviator sunglasses on right side (matching p3.jpg) */}
          <g transform="translate(820, 140)">
            {/* Leather / bomber jacket */}
            <path d="M -120 220 C -80 160 -40 140 0 150 C 40 140 120 160 160 220 L 190 320 L -140 320 Z" fill="#1C1410" />
            {/* Neck & jaw */}
            <path d="M -30 90 L -30 170 Q 0 190 30 170 L 30 90 Z" fill="#755E4E" />
            {/* Head & face */}
            <ellipse cx="0" cy="70" rx="65" ry="85" fill="#8C7361" />
            {/* Short cropped hair */}
            <path d="M -60 40 C -50 -15 50 -15 60 40 C 40 15 -40 15 -60 40 Z" fill="#1F1713" />

            {/* Aviator Sunglasses */}
            <g>
              <line x1="-30" y1="52" x2="30" y2="52" stroke="#140D0A" strokeWidth="3" />
              {/* Left Lens teardrop */}
              <path d="M -45 45 C -25 45 -18 60 -20 80 C -22 95 -40 95 -50 80 C -55 60 -52 45 -45 45 Z" fill="#120E0C" stroke="#2B211A" strokeWidth="2" />
              {/* Right Lens teardrop */}
              <path d="M 20 45 C 40 45 48 60 50 80 C 48 95 30 95 20 80 C 15 60 15 45 20 45 Z" fill="#120E0C" stroke="#2B211A" strokeWidth="2" />
            </g>
          </g>

          {/* Wire grid fence overlay across the entire foreground (signature feature of p3.jpg) */}
          <rect width="1200" height="450" fill="url(#wireGrid)" />
          {/* Subtle horizontal blur / depth */}
          <rect width="1200" height="450" fill="#1E1612" opacity="0.25" />
        </svg>
      </div>
    );
  }

  // Strip 5: "CONTACT" / Clock tower inspired by p3.jpg
  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      <svg viewBox="0 0 1200 450" preserveAspectRatio="xMidYMid slice" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cloudySky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CFC5B8" />
            <stop offset="60%" stopColor="#A89A8B" />
            <stop offset="100%" stopColor="#6B5D50" />
          </linearGradient>
          <linearGradient id="clockMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#29201B" />
            <stop offset="50%" stopColor="#17120F" />
            <stop offset="100%" stopColor="#0B0907" />
          </linearGradient>
        </defs>
        {/* Soft atmospheric moody sky */}
        <rect width="1200" height="450" fill="url(#cloudySky)" />

        {/* Vintage Station Clock Tower centered / right-of-center (matching p3.jpg) */}
        <g transform="translate(680, 160)">
          {/* Vertical mounting column / pillar */}
          <rect x="-18" y="140" width="36" height="150" fill="url(#clockMetal)" />
          <path d="M -30 140 L 30 140 L 18 170 L -18 170 Z" fill="#17120F" />

          {/* Hexagonal / octagonal clock housing angled in perspective */}
          <path d="M -90 -60 L 50 -120 L 140 -40 L 140 100 L 0 150 L -90 80 Z" fill="url(#clockMetal)" stroke="#3D2F27" strokeWidth="3" />

          {/* Clock White Dial Face */}
          <ellipse cx="25" cy="15" rx="75" ry="85" fill="#F4EFE6" stroke="#1F1813" strokeWidth="4" />

          {/* Roman numerals and hour tick marks */}
          <g stroke="#1F1813" strokeWidth="2.5">
            <line x1="25" y1="-55" x2="25" y2="-45" strokeWidth="4" /> {/* XII */}
            <line x1="25" y1="75" x2="25" y2="85" strokeWidth="4" /> {/* VI */}
            <line x1="-38" y1="15" x2="-28" y2="15" strokeWidth="4" /> {/* IX */}
            <line x1="78" y1="15" x2="88" y2="15" strokeWidth="4" /> {/* III */}
            {/* Angled hour ticks */}
            <line x1="-15" y1="-40" x2="-8" y2="-32" />
            <line x1="60" y1="-32" x2="52" y2="-24" />
            <line x1="65" y1="60" x2="57" y2="52" />
            <line x1="-12" y1="65" x2="-6" y2="57" />
          </g>

          {/* Clock Hands pointing to 10:10 */}
          <line x1="25" y1="15" x2="-10" y2="-30" stroke="#17120F" strokeWidth="4" strokeLinecap="round" />
          <line x1="25" y1="15" x2="65" y2="-10" stroke="#17120F" strokeWidth="3" strokeLinecap="round" />
          <circle cx="25" cy="15" r="5" fill="#5C3A28" />
        </g>
        <rect width="1200" height="450" fill="#1C1510" opacity="0.25" />
      </svg>
    </div>
  );
};
