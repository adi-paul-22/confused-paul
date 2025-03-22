
# Welcome to The Confused Paul Portfolio

## Project info

**URL**: https://theconfusedpaul.in

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/1f1c4316-727e-4ddb-a9f3-d2eb284d4188) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How to deploy this project to your custom domain (theconfusedpaul.in)

### Build the project
```sh
npm run build
```

This will create a `dist` directory with your built project.

### Deployment Options

#### Option 1: Netlify

1. Sign up for a Netlify account
2. Connect your repository
3. Configure your build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Set up your custom domain (theconfusedpaul.in) in the Netlify dashboard
5. Configure your DNS settings to point to Netlify

#### Option 2: Vercel

1. Sign up for a Vercel account
2. Import your repository
3. Vercel will automatically detect Vite and set up build settings
4. Add your custom domain (theconfusedpaul.in) in the Vercel dashboard
5. Configure your DNS settings to point to Vercel

#### Option 3: Traditional Web Hosting

1. Build your project locally with `npm run build`
2. Upload the contents of the `dist` directory to your web hosting server
3. Configure your DNS settings to point to your hosting provider
4. Ensure your server is configured to serve a Single Page Application correctly (redirecting 404s to index.html)
