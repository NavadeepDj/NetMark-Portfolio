# NetMark Web

Next.js 14 App Router site with Tailwind, shadcn/ui, and Magic UI backgrounds.

## Setup

1. Install dependencies
2. Copy .env.example to .env.local and fill values
3. Run the dev server

## Env

- RESEND_API_KEY=your_resend_key
- CONTACT_TO_EMAIL=you@example.com
- AUTH_ENABLED=false
- NEXTAUTH_SECRET=generate_one

## Scripts

- dev: start dev server
- build: production build
- start: run production server
- lint: run ESLint
- typecheck: run TypeScript check

## APK download

If you want to offer a direct APK download from the site (for example, `https://your-site.com/app-debug.apk`), place your APK file at `public/app-debug.apk` in the project root. Next.js will serve any files in `public/` at the web root, e.g. `/app-debug.apk`.

Example (PowerShell):

```powershell
# from your build folder
Copy-Item -Path "C:\path\to\app-debug.apk" -Destination .\public\app-debug.apk
```

Then start the site (`npm run dev`) and click the "Download APK" button on the home page.

Note: The repository already includes a download link in `app/page.tsx` which points to `/app-debug.apk`. Make sure you commit the APK into `public/` only when you intend to publish it (APKs can be large). For CI/deploy, upload the APK to the `public/` folder prior to running your build step.