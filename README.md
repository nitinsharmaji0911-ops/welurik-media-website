# Welurik Media — Official Website

Official production repository for **Welurik Media** ([welurikmedia.com](https://welurikmedia.com)), a premier digital marketing agency and video production company in Nagpur, India.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js**: v18.x or v20.x or higher
- **npm**: v9.x or higher

### 2. Clone the Repository
```bash
git clone https://github.com/nitinsharmaji0911-ops/welurik-media-website.git
cd welurik-media-website
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the site with hot-module reloading.

---

## 🛠️ Build & Production

To generate the optimized production bundle:
```bash
npm run build
```
This runs `vite build` and syncs all static `/assets`, `/videos`, and `/public` files into `dist/` ready for hosting on Vercel or any static host.

To preview the built production bundle locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/                 # Static assets, favicon, and authentic client logos
│   ├── clients/            # Brand logos (Tamtara, Raasta, Heera Sweets, SM Engineering, etc.)
│   └── images/clients/     # Instagram creator showcase screenshots
├── assets/                 # Photography, curated client project visuals
├── videos/                 # Web-optimized high-retention commercial showreels (MP4/WebM)
├── src/
│   ├── components/         # Modular React components
│   │   ├── Navbar.jsx
│   │   ├── EverydayEdit.jsx    # 3-card Instagram creator carousel
│   │   ├── FullCoverageEdit.jsx # Video showreels carousel
│   │   ├── ShopByType.jsx      # Customer logo marquee & founder testimonials
│   │   ├── GirliesMustHaves.jsx# Web platforms portfolio
│   │   └── Footer.jsx
│   ├── data/
│   │   └── welurikMediaData.js # Centralized agency data and showcase listings
│   ├── pages/
│   │   └── HomePage.jsx    # Main page layout
│   ├── App.jsx             # Root routing and state
│   ├── index.css           # Tailwind + Custom infinite marquee keyframe animations
│   └── main.jsx            # React 19 entrypoint
├── copy_static_to_dist.js  # Build-step static asset sync script
├── vite.config.js          # Vite build configuration
└── tailwind.config.js      # Tailwind CSS styling configuration
```

---

## 🤝 Making Changes & Collaborating

1. Create a new feature branch:
   ```bash
   git checkout -b feature/your-change-name
   ```
2. Make your modifications in `src/` or `public/`.
3. Test locally using `npm run dev`.
4. Ensure the build succeeds:
   ```bash
   npm run build
   ```
5. Commit and push:
   ```bash
   git add .
   git commit -m "feat: description of changes"
   git push origin feature/your-change-name
   ```

---

## 🌐 Production Deployment
The repository is linked directly to Vercel for production deployments at **[welurikmedia.com](https://welurikmedia.com)**.
