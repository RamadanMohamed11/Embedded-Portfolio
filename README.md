# Embedded Systems Portfolio

📡 A modern, interactive portfolio website showcasing embedded systems projects, skills, and experience.

## 🔗 Live Demo

[View Portfolio](https://your-portfolio-url.com) <!-- Update with actual deployment URL -->

## 📋 Overview

This portfolio website is specifically designed to highlight embedded systems engineering expertise, featuring projects, technical skills, and professional experience in a clean, modern interface.

## ✨ Features

- **📦 Projects Showcase**: Detailed presentations of embedded systems projects
- **🛠️ Skills Display**: Technical competencies in hardware and software
- **📚 Experience Timeline**: Professional and academic background
- **💬 Contact Section**: Easy ways to get in touch
- **🎨 Modern UI/UX**: Responsive design with smooth animations
- **🌙 Dark Mode**: Eye-friendly theme options
- **⚡ Fast Performance**: Optimized loading and rendering

## 🛠️ Tech Stack

### Frontend
- **React** - UI component library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Git** - Version control

## 📁 Project Structure

```
Embedded-Portfolio/
├── src/
│   ├── components/     # React components
│   ├── assets/         # Images, icons, files
│   ├── styles/         # CSS and styling
│   ├── data/           # Portfolio content data
│   └── App.tsx         # Main application component
├── public/             # Static assets
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS config
└── tsconfig.json       # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- Basic knowledge of React and TypeScript

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/RamadanMohamed11/Embedded-Portfolio.git
cd Embedded-Portfolio
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Start development server**:
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**:
```
http://localhost:5173
```

### Building for Production

```bash
npm run build
# or
yarn build
```

The optimized build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎨 Customization

### Update Portfolio Content

Edit the content in `src/data/` directory:

```typescript
// src/data/projects.ts
export const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    technologies: ["C", "STM32", "FreeRTOS"],
    image: "/path/to/image.jpg",
    link: "project-url",
    github: "github-repo-url"
  },
  // Add more projects...
];
```

### Customize Styling

Modify Tailwind configuration in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        // Add custom colors
      },
    },
  },
}
```

### Update Personal Information

Edit your details in the respective component files:
- About section: `src/components/About.tsx`
- Contact info: `src/components/Contact.tsx`
- Skills: `src/data/skills.ts`

## 📦 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Update `vite.config.ts` with base URL
2. Build the project
3. Deploy `dist/` folder to gh-pages branch

## 🎯 Featured Sections

### Projects
- **PIC Microcontroller Drivers**: Low-level embedded C drivers
- **Sumo Robot Competition**: Autonomous robotics system
- **Minesweeper Robot**: ROS-based navigation and vision
- **Student Attendance System**: IoT-based attendance tracking

### Skills
- **Programming**: C, C++, Python, Assembly
- **Microcontrollers**: STM32, PIC, Arduino, ESP32
- **RTOS**: FreeRTOS, Zephyr
- **Tools**: Git, MPLAB, Keil, Proteus
- **Protocols**: SPI, I2C, UART, CAN, Ethernet

## 📊 Performance

- Lighthouse Score: 95+ (Performance)
- First Contentful Paint: <1.5s
- Time to Interactive: <3.0s
- Fully Responsive: Mobile, Tablet, Desktop

## 🔧 Troubleshooting

**Port already in use:**
```bash
# Change port in package.json or:
npm run dev -- --port 3000
```

**Build errors:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**TypeScript errors:**
```bash
npm run type-check
```

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to:
- Report bugs
- Suggest new features
- Improve documentation
- Submit pull requests

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ramadan Mohamed**
- **Role**: Embedded System Engineer & Flutter Developer
- **GitHub**: [@RamadanMohamed11](https://github.com/RamadanMohamed11)
- **Location**: Egypt
- **Interests**: Embedded Systems, IoT, Robotics, Mobile Development

## 🙏 Acknowledgments

- React and Vite communities
- Tailwind CSS for the amazing framework
- All open-source contributors
- Assiut Robotics Team

## 📞 Contact

Interested in collaboration or have questions?
- **Email**: [your-email@example.com]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [@RamadanMohamed11](https://github.com/RamadanMohamed11)

---

**⭐ If you find this portfolio helpful, please give it a star!**

Built with ❤️ using React, TypeScript, and Tailwind CSS