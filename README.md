This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds a static export and
deploys it whenever `main` is updated. It can also be started manually from Actions.

1. For https://mkhantkyaw.github.io/, rename the repository to
   `MKhantKyaw.github.io` in **Settings → General**.
2. Open **Settings → Pages** and set **Build and deployment → Source** to
   **GitHub Actions**.
3. Update your local remote after renaming:

   ```bash
   git remote set-url origin git@github-personal:MKhantKyaw/MKhantKyaw.github.io.git
   ```

4. Commit and push the portfolio, including its public assets and workflow, to `main`.
5. Open **Actions → Deploy portfolio to GitHub Pages** to follow the deployment.

The workflow reads the site path from GitHub Pages. The user-site repository
`MKhantKyaw.github.io` uses the root URL; keeping the name `minkhantkyaw` instead
publishes at https://mkhantkyaw.github.io/minkhantkyaw/. A custom domain configured
in Pages settings is also supported. No personal access token is needed.

To test the same static build locally:

```bash
GITHUB_PAGES=true npm run build -- --webpack
```

The resulting static files are in `out/`. To test the project-site URL instead,
also set `NEXT_PUBLIC_BASE_PATH=/minkhantkyaw` when building and serve `out/` under
that URL path. `npm run dev` and ordinary
`npm run build` still use the normal Next.js configuration at the root URL.
