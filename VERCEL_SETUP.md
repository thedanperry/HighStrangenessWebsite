# Vercel Setup Guide for highstrangeness.app

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `high-strangeness-website` (or your preferred name)
3. Make it **public** or **private** (your choice)
4. **Don't** initialize with README, .gitignore, or license (we already have these)

## Step 2: Push Code to GitHub

```bash
cd website
git init
git add .
git commit -m "Initial commit: High Strangeness website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/high-strangeness-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 3: Connect Vercel to GitHub

1. Go to [Vercel](https://vercel.com) and sign in (or create account)
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your `high-strangeness-website` repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
6. Click **"Deploy"**

## Step 4: Configure Custom Domain in Vercel

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter: `highstrangeness.app`
4. Also add: `www.highstrangeness.app` (optional, for www redirect)
5. Vercel will show you DNS records to add

## Step 5: Configure Cloudflare DNS

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your `highstrangeness.app` domain
3. Go to **DNS** → **Records**
4. Add these records:

### For Root Domain (highstrangeness.app):
- **Type**: `CNAME`
- **Name**: `@` (or root domain)
- **Target**: `cname.vercel-dns.com`
- **Proxy status**: Proxied (orange cloud) ✅

### For WWW (www.highstrangeness.app):
- **Type**: `CNAME`
- **Name**: `www`
- **Target**: `cname.vercel-dns.com`
- **Proxy status**: Proxied (orange cloud) ✅

**Note**: If Cloudflare doesn't allow CNAME on root, use:
- **Type**: `A`
- **Name**: `@`
- **IPv4 address**: `76.76.21.21` (Vercel's IP)
- **Proxy status**: Proxied ✅

## Step 6: Verify SSL

1. Vercel will automatically provision SSL certificates
2. Wait 5-10 minutes for DNS propagation
3. Visit `https://highstrangeness.app` to verify

## Step 7: Enable Automatic Deployments

Vercel automatically deploys on every push to `main` branch. No additional setup needed!

## Troubleshooting

### DNS Not Working?
- Wait 24-48 hours for full DNS propagation
- Check Cloudflare DNS settings match Vercel's requirements
- Ensure proxy is enabled (orange cloud) in Cloudflare

### SSL Certificate Issues?
- Vercel handles SSL automatically
- If issues persist, check domain verification in Vercel dashboard

### Build Errors?
- Check Vercel build logs in dashboard
- Ensure `package.json` has correct scripts
- Verify Node.js version (Vercel auto-detects)

## Next Steps

1. Customize the landing page content in `app/page.tsx`
2. Add app store links when ready
3. Add analytics (Vercel Analytics, Google Analytics, etc.)
4. Add more pages (Privacy Policy, Terms, etc.)
