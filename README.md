# Lifa Group — 3D Corporate Web Platform
> **“Ensuring Life. Building Lifestyle.”**

A high-end multi-page corporate web application for **Lifa Group** and its educational arm **LifaEducare Pvt. Ltd.** (associated with *Aakash Institute, Hajipur* and *St. Mary's P School, Sonpur*).

Built with **React Router v6 + Three.js (3D WebGL Background) + Framer Motion + Lenis Smooth Scroll + TypeScript**, featuring deep luxury 3D glassmorphism and real multi-page routing.

---

## 🌐 Dedicated Multi-Page Routing Architecture

Each section lives on its own dedicated, long scrollable page with full 3D interactive depth:

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Grand 3D Hero, Bento portfolio showcase, strategic numbers, executive preview |
| `/about` | **About Us** | Corporate story, 4 strategic pillars, vision & core values matrix |
| `/enterprises` | **Our Businesses** | **LifaEducare Pvt. Ltd.**, in-depth **Aakash Institute Hajipur** & **St. Mary's P School Sonpur** |
| `/horizon` | **The Horizon** | Mysterious "Coming Soon" teaser, strategic phases, confidential briefing portal |
| `/leadership` | **Leadership** | 4 Executive leaders with 3D interactive tilt cards, bios, and direct contact buttons |
| `/contact` | **Contact** | Corporate secretariat headquarters, interactive 3D dispatch form, protocols |
| `/privacy-policy` | **Privacy Policy** | Legal compliance, data protection, and institutional governance |
| `/terms` | **Terms & Conditions** | Terms of service, representations, and corporate registry |

---

## 💎 3D Dynamics & Visual Features

1. **Interactive 3D WebGL Background (`src/components/ThreeCanvas.tsx`)**:
   - Built with Three.js running on a hardware-accelerated WebGL canvas.
   - Features a floating central 3D golden faceted polyhedron with an inner luminous core.
   - Dual concentric orbiting gold architectural rings.
   - 1,400 floating champagne gold and starlight particles with additive blending.
   - **Mouse Parallax**: Responsive camera and geometry tracking with smooth lerp physics.
   - **Scroll-Linked 3D Rotation**: As you scroll through each long page, the 3D geometry rotates across multiple axes, creating real three-dimensional depth.

2. **3D Glassmorphic Tilt Cards (`src/components/GlassCard3D.tsx`)**:
   - Every card calculates cursor perspective (`perspective: 1000px`, dynamic `rotateX`, `rotateY`, `scale3d`).
   - Dynamic radial holographic specular shine follows cursor movement.
   - Deep frosted glass (`backdrop-filter: blur(20px)`), champagne gold borders, and ambient drop shadows.

3. **Lenis Momentum Scroll Engine**:
   - Integrated buttery smooth wheel momentum across all long pages.
   - Automatic scroll restoration to top on route navigation via `ScrollToTop.tsx`.

---

## 🚀 How to Run in VS Code

1. Open the project folder in **Visual Studio Code**: `c:\Users\siddh\Desktop\LIfanew`.
2. Open the terminal (`Ctrl + ~`) and start the local development server:
   ```bash
   npm run dev
   ```
3. Open the browser at `http://localhost:3000` (or the port shown in your terminal).

---

## 👥 How to Update the 4 Leadership Details

All leadership profiles are centralized in [src/data/leadership.ts](file:///c:/Users/siddh/Desktop/LIfanew/src/data/leadership.ts):

```typescript
export const leadershipData: LeaderProfile[] = [
  {
    id: 'leader-1',
    name: 'Your Name Here',
    designation: 'Managing Director & Founder',
    category: 'Executive Board',
    bio: 'Enter the executive background and credentials here.',
    image: '', // E.g. '/assets/images/leader1.jpg' or external URL
    email: 'leader@lifagroup.in',
    phone: '+91 98765 43210',
    whatsapp: '919876543210', // Country code without '+' (e.g. 919876543210)
    linkedin: 'https://linkedin.com/in/username'
  },
  // Repeat for leader-2, leader-3, and leader-4...
];
```
