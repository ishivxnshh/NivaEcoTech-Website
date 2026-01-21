# Niva Ecotech Website

This is the official website for Niva Ecotech, built with Vite, Tailwind CSS, and Alpine.js.

## Project Structure

- `index.html`: Main landing page with Floating Header and Hero Carousel.
- `contact.html`: Contact page.
- `src/`: Source files (if any extra JS/CSS).
- `public/`: Public assets (images, logos).
- `dist/`: Build output directory (generated after running build).

## Run Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173).

## Build for Production

To create the production build in the `dist/` folder:

```bash
npm run build
```

## Deployment on Vercel

This project is set up to be deployed on [Vercel](https://vercel.com).

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project into Vercel.
3. Vercel will automatically detect the **Vite** framework.
4. The default build settings should likely be correct:
   - **Build Command**: `vite build` (or `npm run build`)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.

**Note**: A `vercel.json` file is included to enable Clean URLs (e.g., `/contact` instead of `/contact.html`).
