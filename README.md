# RailTracker — Indian Railways Utility & Locomotive Intelligence Portal

**RailTracker** is a mission-critical transportation intelligence dashboard and utility web application engineered for Indian Railways railfans, locomotive spotters, railway personnel, and passengers.

It centralizes, organizes, and equips users with quick-access interfaces, live embeds, deep-linking engines, and search utilities across 7 foundational Indian Railways operational databases and community resources.

---

## 🚆 The 7 Core Integrated Gateways

| # | System / Portal | Official Gateway Source | Role & Capability |
|---|---|---|---|
| **1** | **Trains Running in India** | `https://railjournal.in/` | Live train map, network density, active train counts, zone-wise traffic & real-time running status. |
| **2** | **Freight Tracking (CMS FOIS)** | `https://cms.indianrail.gov.in/...` | Official Crew Management System engine-train assignment & turn-round timestamps by loco road number. |
| **3** | **Loco Allotment Directory** | `https://elocos.railnet.gov.in/Loco_bank/Loco_allotment.aspx` | Production unit dispatch batches (CLW, BLW, PLW, Alstom Madhepura) and inter-shed transfer register. |
| **4** | **Shed-Wise Electric Fleet** | `https://elocos.railnet.gov.in/Loco_bank/shedwise.aspx` | eLocos RailNet holding inventory classified by shed (GZB, BRC, RPM, LGD, etc.) and class (WAP-7, WAG-9, etc.). |
| **5** | **IRFCA Encyclopedia** | `https://irfca.org/locos` | Comprehensive spotter sighting logs, classification codes, technical specifications, and liveries. |
| **6** | **ChartMitra Berth Tracker** | `https://www.chartmitra.xyz/` | Reservation chart preparation status (4 hours before departure), coach layouts, and vacant berth tracker. |
| **7** | **Loco Tracking (RTIS Path)** | `https://www.fois.indianrail.gov.in/...MapRTISLocoPath.jsp?Loco=30573` | ISRO GAGAN Real-Time Train Information System (RTIS) geospatial path visualization by locomotive road number. |

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 18+ & TypeScript with Vite
- **Styling**: Tailwind CSS with custom Indian Railways branding:
  - Deep Navy (`#0A192F` / `#060D17`)
  - IR Saffron (`#FF671F`)
  - Signal Green (`#00873E`)
  - Steel Silver (`#E2E8F0`)
- **Mapping**: Leaflet.js with CartoDB Dark Matter high-contrast tiles and Indian Golden Quadrilateral rail corridor polylines.
- **Icons**: Lucide-React
- **Command Palette**: Global instant search (`Ctrl + K` or `Cmd + K`) for instant lookup of 5-digit Loco numbers, Train numbers, and Shed codes.
- **Storage & State**: React State + LocalStorage for:
  - Tracked Locos
  - Pinned Sheds
  - Sighting Notebook (Spotter log)
  - Recent Search History

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Run in Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm run preview
```

---

## 💡 Key Architectural Features

1. **Global Command Palette (`Ctrl + K` / `Cmd + K`)**:
   Fuzzy-searches across all locomotive road numbers, train names, and sheds with one-click direct dispatch.
2. **Multi-Mode Viewing Options**:
   - **Mode A (Embedded Modal)**: Sandboxed iframe with security fallback for `X-Frame-Options: SAMEORIGIN` government portals.
   - **Mode B (Deep Query Generator)**: Automatic URL constructor for `MapRTISLocoPath.jsp?Loco={NUM}` and `trainRunningDetailLoco.do?locoNo={NUM}`.
   - **Mode C (Offline Data Cache)**: 45+ electric sheds holdings, classification decoder, and popular high-speed train routes.
3. **Personalization & Utility Drawer**:
   - Bookmark favorite locomotives and pinned sheds.
   - LocalStorage Railfan Spotter Log to record live sightings with livery notes and stations.
   - 1-Click Shareable link generator and JSON backup export.

