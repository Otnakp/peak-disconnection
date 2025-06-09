# Screen Maxi - Next.js Version

This is a Next.js conversion of the original HTML Screen Maxi website. It includes:

- **Hero Section**: Main landing section with headline and CTA
- **Programs Section**: All 5 program cards with their original descriptions
- **Waitlist Form**: Complete form with all fields from the original

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features Converted

✅ Hero section with main headline  
✅ All 5 program cards with original content  
✅ Complete waitlist form with all fields  
✅ Responsive design  
✅ Smooth scrolling navigation  
✅ Form validation and submission handling  

## What's Different

- Removed complex animations for simplicity
- Converted to React components
- Added TypeScript for better development experience
- Form now uses React state management
- Simplified navigation (removed some menu items for cleaner look)

## Structure

- `pages/index.tsx` - Main page
- `components/Header.tsx` - Navigation header
- `components/Hero.tsx` - Hero section
- `components/Programs.tsx` - Program cards
- `components/WaitlistForm.tsx` - Waitlist form
- `styles/globals.css` - Global styles

## API Integration

The form currently simulates a successful submission. To integrate with your existing Supabase setup:

1. Install Supabase client: `npm install @supabase/supabase-js`
2. Add your environment variables
3. Update the form submission in `WaitlistForm.tsx` 