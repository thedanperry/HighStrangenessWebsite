# Quick Start: Deploy High Strangeness Website

## 🚀 Fast Track Deployment

### 1. GitHub ✅ (Already Done)
- Repository: https://github.com/thedanperry/HighStrangenessWebsite
- Code is pushed and ready

### 2. Vercel Deployment (5 minutes)

1. **Go to**: https://vercel.com/new
2. **Import**: Select `HighStrangenessWebsite` repository
3. **Deploy**: Click "Deploy" (all settings auto-detected)
4. **Add Domain**: 
   - Settings → Domains → Add `highstrangeness.app`
   - Copy the DNS records Vercel shows you

### 3. Cloudflare DNS (5 minutes)

1. **Go to**: https://dash.cloudflare.com
2. **Add Site**: Enter `highstrangeness.app`
3. **Update Nameservers**: At your domain registrar (where you bought the domain)
4. **Add DNS Records**:
   - Type: `A`, Name: `@`, Content: Vercel IP (from step 2)
   - Type: `CNAME`, Name: `www`, Content: `cname.vercel-dns.com`
   - Enable proxy (orange cloud) ✅

### 4. SSL (Automatic)
- Vercel provisions SSL automatically
- Wait 5-10 minutes for DNS to propagate
- Visit: https://highstrangeness.app

## 📋 Checklist

- [ ] Vercel account created
- [ ] Repository imported to Vercel
- [ ] Domain added in Vercel
- [ ] Cloudflare account created
- [ ] Domain added to Cloudflare
- [ ] Nameservers updated at registrar
- [ ] DNS records added in Cloudflare
- [ ] SSL certificate active
- [ ] Site accessible at https://highstrangeness.app

## 🔗 Important Links

- **GitHub**: https://github.com/thedanperry/HighStrangenessWebsite
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Cloudflare Dashboard**: https://dash.cloudflare.com
- **Domain**: highstrangeness.app

## 📚 Full Guide

See `DEPLOYMENT.md` for detailed instructions and troubleshooting.

