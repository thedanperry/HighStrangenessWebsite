# Deployment Guide for High Strangeness Website

This guide will walk you through deploying the High Strangeness website to Vercel and configuring Cloudflare DNS.

## Prerequisites

- GitHub account with the repository: `https://github.com/thedanperry/HighStrangenessWebsite`
- Vercel account (free tier works)
- Cloudflare account (free tier works)
- Domain: `highstrangeness.app`

## Step 1: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. **Go to Vercel**: Visit [https://vercel.com](https://vercel.com) and sign in (or create an account)

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Import the `HighStrangenessWebsite` repository from GitHub
   - Vercel will auto-detect Next.js settings

3. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables**: None required for this project

5. **Deploy**: Click "Deploy"

6. **Get Your Vercel URL**: After deployment, you'll get a URL like `high-strangeness-website.vercel.app`

### Option B: Via Vercel CLI

```bash
cd website
npm install -g vercel
vercel login
vercel
```

Follow the prompts to deploy.

## Step 2: Configure Custom Domain in Vercel

1. **Add Domain**:
   - Go to your project in Vercel dashboard
   - Navigate to "Settings" → "Domains"
   - Add `highstrangeness.app` and `www.highstrangeness.app`

2. **Get DNS Records**:
   - Vercel will show you the DNS records you need to add
   - You'll typically need:
     - Type: `A` record pointing to Vercel's IP
     - Type: `CNAME` record for `www` subdomain
   - **Note these values** - you'll need them for Cloudflare

## Step 3: Configure Cloudflare DNS

1. **Add Site to Cloudflare**:
   - Go to [https://dash.cloudflare.com](https://dash.cloudflare.com)
   - Click "Add a Site"
   - Enter `highstrangeness.app`
   - Follow the prompts to scan your DNS

2. **Update Nameservers** (if needed):
   - Cloudflare will provide nameservers
   - Update your domain registrar (where you bought `highstrangeness.app`) to use Cloudflare's nameservers
   - This usually takes 24-48 hours to propagate

3. **Configure DNS Records**:
   - In Cloudflare dashboard, go to "DNS" → "Records"
   - Add the DNS records from Vercel:
     - **Type**: `A`
     - **Name**: `@` (or root domain)
     - **Content**: Vercel's IP address (from Step 2)
     - **Proxy status**: Proxied (orange cloud) ✅
     - **TTL**: Auto
   
     - **Type**: `CNAME`
     - **Name**: `www`
     - **Content**: `cname.vercel-dns.com` (or the CNAME value from Vercel)
     - **Proxy status**: Proxied (orange cloud) ✅
     - **TTL**: Auto

4. **SSL/TLS Settings**:
   - Go to "SSL/TLS" in Cloudflare
   - Set encryption mode to "Full" or "Full (strict)"
   - This ensures HTTPS works properly

5. **Wait for Propagation**:
   - DNS changes can take a few minutes to several hours
   - Check propagation with: `dig highstrangeness.app` or use online DNS checkers

## Step 4: Verify Deployment

1. **Check Vercel Deployment**:
   - Visit your Vercel deployment URL
   - Ensure the site loads correctly

2. **Check Custom Domain**:
   - Visit `https://highstrangeness.app`
   - Visit `https://www.highstrangeness.app`
   - Both should redirect to your Vercel deployment

3. **Test All Pages**:
   - Home page: `https://highstrangeness.app`
   - Privacy: `https://highstrangeness.app/privacy`
   - Terms: `https://highstrangeness.app/terms`
   - Legal: `https://highstrangeness.app/legal`

## Step 5: Automatic Deployments (Already Configured)

- **GitHub Integration**: Vercel automatically deploys when you push to the `main` branch
- **Preview Deployments**: Pull requests get preview URLs automatically
- **Production Deployments**: Merges to `main` trigger production deployments

## Troubleshooting

### DNS Not Working
- Wait 24-48 hours for nameserver changes
- Check Cloudflare DNS records match Vercel's requirements
- Ensure proxy is enabled (orange cloud) in Cloudflare

### SSL Certificate Issues
- Ensure Cloudflare SSL/TLS is set to "Full" or "Full (strict)"
- Wait a few minutes after adding domain in Vercel for SSL to provision

### Build Errors
- Check Vercel build logs in the dashboard
- Ensure `package.json` has correct scripts
- Verify Node.js version (Vercel auto-detects, but you can set it in settings)

### 404 Errors
- Ensure Next.js routing is working correctly
- Check that all pages are in the `app/` directory
- Verify `next.config.js` is correct

## Additional Cloudflare Optimizations (Optional)

1. **Caching**:
   - Go to "Caching" → "Configuration"
   - Set caching level to "Standard"
   - Enable "Browser Cache TTL" to 4 hours

2. **Speed**:
   - Enable "Auto Minify" for HTML, CSS, and JavaScript
   - Enable "Brotli" compression

3. **Security**:
   - Enable "Always Use HTTPS"
   - Set Security Level to "Medium"
   - Enable "Bot Fight Mode" (free tier)

## Support

If you encounter issues:
- Vercel Docs: https://vercel.com/docs
- Cloudflare Docs: https://developers.cloudflare.com
- Check deployment logs in Vercel dashboard

