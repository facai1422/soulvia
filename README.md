# Soulvia Landing Page

> Anonymous communication platform with end-to-end encryption - Landing page built with Next.js 14

## 🌟 Features

- **Modern Design**: Clean, privacy-focused design with smooth animations
- **SEO Optimized**: Complete meta tags, structured data, and sitemap
- **Performance**: Optimized for Core Web Vitals and fast loading
- **Responsive**: Mobile-first design that works on all devices
- **Privacy-First**: No tracking, respects user privacy
- **Dark Mode**: Built-in dark mode support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/soulvia/landing-page.git
cd soulvia-landing
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Railway**: Connect your GitHub repository
- **Digital Ocean**: Use App Platform
- **AWS**: Use Amplify or S3 + CloudFront
- **Google Cloud**: Use Cloud Run or Firebase Hosting

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
        500: '#0ea5e9',
        600: '#0284c7',
        // ...
      }
    }
  }
}
```

### Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **Features**: Edit `src/components/Features.tsx`  
- **Testimonials**: Edit `src/components/Testimonials.tsx`
- **Pricing**: Edit `src/components/CTA.tsx`

### SEO

Update SEO settings in `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your app description',
  // ... other meta tags
}
```

## 🔧 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Font**: Inter & Poppins (Google Fonts)
- **Deployment**: Vercel

## 📊 Performance

This landing page is optimized for:

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Bundle Size**: < 150KB gzipped
- **SEO**: Structured data, meta tags, sitemap

## 🔒 Privacy Features

- No user tracking by default
- GDPR compliant
- No cookies (except essential)
- Privacy-focused design
- Security headers included

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

- **Documentation**: [docs.soulvia.com](https://docs.soulvia.com)
- **Email**: support@soulvia.com
- **Discord**: [Join our community](https://discord.gg/soulvia)

---

Built with ❤️ for digital privacy and freedom.