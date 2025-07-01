# TomatoGuard AI Frontend

A modern, responsive web interface for TomatoGuard AI, providing an intuitive user experience for tomato disease detection.

## 🌟 Features

- **Real-time Disease Detection**: Upload and instantly analyze tomato plant images
- **Disease Catalog**: Comprehensive information about various tomato diseases
- **Research Insights**: Interactive notebook viewer for technical documentation
- **Responsive Design**: Optimized for all device sizes
- **Dark Mode**: Enhanced viewing experience with theme support
- **Accessibility**: ARIA-compliant components for better usability

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom theme
- **Components**: Shadcn/ui for consistent UI
- **Icons**: Lucide React icons
- **State Management**: React Hooks

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/           # Next.js pages and layouts
│   │   ├── page.tsx   # Homepage
│   │   ├── predict/   # Disease detection page
│   │   ├── labels/    # Disease catalog page
│   │   └── notebook/  # Research viewer page
│   ├── components/    # Reusable UI components
│   │   ├── ui/       # Base UI components
│   │   └── footer.tsx # Global footer component
│   └── lib/          # Utilities and configurations
├── public/           # Static assets and images
└── package.json      # Project dependencies
```

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Key Components

### Pages
- **Home**: Landing page with feature highlights
- **Disease Detection**: Image upload and analysis interface
- **Disease Catalog**: Browse and learn about diseases
- **Research**: Technical documentation viewer

### UI Components
- **Navigation**: Responsive navbar with theme toggle
- **Footer**: Global footer with important links
- **Cards**: Information display components
- **Buttons**: Interactive elements with hover states

## 🎨 Styling Guidelines

### Theme
- Primary color: Red (customizable)
- Background: Light/Dark modes
- Typography: System font stack
- Spacing: Consistent grid system

### CSS Features
- Responsive breakpoints
- Dark mode variables
- Glassmorphism effects
- Smooth transitions
- Hover animations

## 🛠️ Development

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

### Build & Deploy

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 Best Practices

- Use TypeScript for all new components
- Follow component composition patterns
- Implement responsive design
- Write meaningful commit messages
- Add proper documentation
- Ensure accessibility compliance

## 🔗 Related Links

- [Main Project README](../README.md)
- [Backend Documentation](../backend/README.md)
- [Component Library](https://ui.shadcn.com)
- [Next.js Documentation](https://nextjs.org/docs)
