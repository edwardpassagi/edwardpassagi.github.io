# Edward Passagi - Portfolio

A clean, modern portfolio website built with Next.js and Tailwind CSS, featuring an interactive 3D tilt card and dark mode support.

## ✨ Features

- **Interactive Parallax Card**: 3D tilt effect that responds to mouse movement
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Clean UI**: Minimalist design with subtle animations
- **Professional Links**: Direct access to resume, email, GitHub, LinkedIn, and YouTube

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (React)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: GitHub Pages ready

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/edwardpassagi/edwardpassagi.github.io.git
cd edwardpassagi.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── ProfileCard.tsx
│       └── ThemeProvider.tsx
├── public/
│   ├── images/
│   │   ├── avatar.jpg
│   │   └── icon.png
│   └── resume.pdf
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 🎨 Customization

### Personal Information
Update your details in `src/components/ProfileCard.tsx`:
- Name and title
- Professional background
- Contact links

### Assets
Replace files in the `public/` directory:
- `public/images/avatar.jpg` - Your profile photo
- `public/images/icon.png` - Your personal icon/logo
- `public/resume.pdf` - Your resume file

### Styling
Customize colors and styling in:
- `tailwind.config.js` - Tailwind configuration
- `src/app/globals.css` - Global styles
- Component files - Individual component styling

## 🌐 Deployment

### GitHub Pages
1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages or your preferred hosting platform

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Edward Passagi - [edward.passagi@gmail.com](mailto:edward.passagi@gmail.com)

Portfolio: [edwardpassagi.github.io](https://edwardpassagi.github.io)