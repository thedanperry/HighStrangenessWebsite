# Step-by-Step: Vercel DNS to Cloudflare Setup

This guide walks you through connecting your Vercel deployment to Cloudflare DNS for `highstrangeness.app`.

---

## Part 1: Get DNS Records from Vercel

### Step 1.1: Deploy Your Site to Vercel (if not done)

1. Go to **https://vercel.com** and sign in
2. Click **"Add New..."** → **"Project"**
3. Import your `HighStrangenessWebsite` repository from GitHub
4. Click **"Deploy"** (all settings auto-detect)
5. Wait for deployment to complete (usually 1-2 minutes)

### Step 1.2: Add Your Domain to Vercel

1. In your Vercel project dashboard, click on **"Settings"** (top menu)
2. Click **"Domains"** in the left sidebar
3. Click **"Add Domain"** button
4. Enter: `highstrangeness.app`
5. Click **"Add"**
6. Vercel will show you DNS configuration - **DON'T CLOSE THIS WINDOW YET**

### Step 1.3: Note the DNS Records

Vercel will display something like this:

```
To configure highstrangeness.app, add the following DNS records:

Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

**IMPORTANT**: Write down or copy these values:
- **A Record IP**: (e.g., `76.76.21.21`)
- **CNAME Value**: (e.g., `cname.vercel-dns.com`)

**Note**: Vercel may also show you a different format. Common variations:
- Sometimes the A record value is an IP like `76.76.21.21`
- Sometimes the CNAME is `cname.vercel-dns.com` or a custom subdomain

---

## Part 2: Set Up Cloudflare

### Step 2.1: Add Your Domain to Cloudflare

1. Go to **https://dash.cloudflare.com** and sign in (or create free account)
2. Click **"Add a Site"** button (top right or center of dashboard)
3. Enter your domain: `highstrangeness.app`
4. Click **"Add site"**
5. Select the **Free** plan (click "Continue with Free")
6. Cloudflare will scan your existing DNS records

### Step 2.2: Update Nameservers at Your Domain Registrar

**This is critical** - Cloudflare needs to manage your DNS.

1. Cloudflare will show you **two nameservers** that look like:
   ```
   alice.ns.cloudflare.com
   bob.ns.cloudflare.com
   ```
   (Your actual nameservers will be different)

2. **Copy both nameservers** from Cloudflare

3. Go to your **domain registrar** (where you bought `highstrangeness.app`):
   - Common registrars: Namecheap, GoDaddy, Google Domains, etc.
   - Log into your account

4. Find your domain settings:
   - Look for "DNS Settings", "Nameservers", or "DNS Management"
   - Each registrar's interface is different

5. **Replace the existing nameservers** with Cloudflare's:
   - Delete the old nameservers
   - Add the two Cloudflare nameservers
   - Save changes

6. **Go back to Cloudflare** and click **"Done, check nameservers"**

7. **Wait**: Nameserver changes can take 24-48 hours, but often work in 1-2 hours

---

## Part 3: Configure DNS Records in Cloudflare

### Step 3.1: Navigate to DNS Settings

1. In Cloudflare dashboard, click on your domain `highstrangeness.app`
2. Click **"DNS"** in the left sidebar (under your domain)
3. You'll see a list of existing DNS records (if any)

### Step 3.2: Add the A Record (Root Domain)

1. Click **"Add record"** button
2. Configure the record:
   - **Type**: Select `A` from dropdown
   - **Name**: Enter `@` (this represents the root domain)
   - **IPv4 address**: Enter the IP address from Vercel (e.g., `76.76.21.21`)
   - **Proxy status**: Click the cloud icon to make it **orange** (Proxied) ✅
     - **Orange cloud = Proxied** (recommended - uses Cloudflare's CDN)
     - **Gray cloud = DNS only** (not recommended for this setup)
   - **TTL**: Leave as "Auto"
3. Click **"Save"**

### Step 3.3: Add the CNAME Record (WWW Subdomain)

1. Click **"Add record"** button again
2. Configure the record:
   - **Type**: Select `CNAME` from dropdown
   - **Name**: Enter `www`
   - **Target**: Enter the CNAME value from Vercel (e.g., `cname.vercel-dns.com`)
   - **Proxy status**: Click the cloud icon to make it **orange** (Proxied) ✅
   - **TTL**: Leave as "Auto"
3. Click **"Save"**

### Step 3.4: Verify Your Records

You should now see two records in your DNS list:

```
Type    Name    Content                    Proxy
A       @       76.76.21.21               🟠 Proxied
CNAME   www     cname.vercel-dns.com      🟠 Proxied
```

**Important**: Both should show **orange clouds** (Proxied)

---

## Part 4: Configure SSL/TLS in Cloudflare

### Step 4.1: Set SSL/TLS Mode

1. In Cloudflare dashboard, click **"SSL/TLS"** in the left sidebar
2. Click on **"Overview"** tab
3. Find **"SSL/TLS encryption mode"**
4. Select **"Full"** or **"Full (strict)"**:
   - **Full**: Works with Vercel's SSL (recommended to start)
   - **Full (strict)**: Requires valid SSL certificate (use after everything works)
5. The setting saves automatically

### Step 4.2: Enable Always Use HTTPS (Optional but Recommended)

1. Still in **"SSL/TLS"** section
2. Click **"Edge Certificates"** tab
3. Scroll down to **"Always Use HTTPS"**
4. Toggle it **ON** ✅
5. This automatically redirects HTTP to HTTPS

---

## Part 5: Verify Everything Works

### Step 5.1: Wait for DNS Propagation

- DNS changes can take **5 minutes to 24 hours**
- Usually works within **1-2 hours**
- Cloudflare's proxy often makes it work faster

### Step 5.2: Check DNS Propagation

You can check if DNS has propagated:

1. **Using Terminal** (Mac/Linux):
   ```bash
   dig highstrangeness.app
   ```
   Look for the A record showing Cloudflare's IP or Vercel's IP

2. **Using Online Tools**:
   - https://www.whatsmydns.net
   - https://dnschecker.org
   - Enter `highstrangeness.app` and check A record

### Step 5.3: Test Your Site

1. **Wait 5-10 minutes** after adding DNS records
2. Visit: **https://highstrangeness.app**
3. Visit: **https://www.highstrangeness.app**
4. Both should load your Vercel site
5. Check that the SSL certificate is valid (lock icon in browser)

### Step 5.4: Verify in Vercel

1. Go back to Vercel dashboard
2. Navigate to **Settings** → **Domains**
3. Your domain should show:
   - ✅ **Valid Configuration**
   - ✅ **SSL Certificate Active**
   - Status: **"Valid"**

---

## Part 6: Troubleshooting

### Problem: Site Not Loading

**Check 1**: Are nameservers updated?
- Go to your domain registrar
- Verify Cloudflare nameservers are set
- Wait 24-48 hours if just changed

**Check 2**: Are DNS records correct?
- Cloudflare → DNS → Records
- Verify A record IP matches Vercel
- Verify CNAME target matches Vercel
- Both should be **Proxied** (orange cloud)

**Check 3**: Is SSL/TLS mode correct?
- Cloudflare → SSL/TLS → Overview
- Should be set to **"Full"** or **"Full (strict)"**

### Problem: SSL Certificate Error

1. Go to Vercel → Settings → Domains
2. Check domain status
3. If it says "Invalid Configuration", click "Refresh"
4. Wait 5-10 minutes for SSL to provision
5. Verify Cloudflare SSL/TLS is set to "Full"

### Problem: www Subdomain Not Working

1. Check CNAME record exists in Cloudflare
2. Verify it's Proxied (orange cloud)
3. Wait for DNS propagation
4. Try clearing browser cache

### Problem: Site Shows Cloudflare Error Page

- This usually means DNS is working but Vercel isn't configured
- Check Vercel dashboard → Settings → Domains
- Verify domain is added and shows "Valid"

---

## Quick Reference Checklist

- [ ] Site deployed to Vercel
- [ ] Domain added in Vercel (Settings → Domains)
- [ ] DNS records copied from Vercel
- [ ] Domain added to Cloudflare
- [ ] Nameservers updated at registrar
- [ ] A record added in Cloudflare (root domain, Proxied)
- [ ] CNAME record added in Cloudflare (www, Proxied)
- [ ] SSL/TLS mode set to "Full" in Cloudflare
- [ ] "Always Use HTTPS" enabled (optional)
- [ ] Waited 5-10 minutes for propagation
- [ ] Tested https://highstrangeness.app
- [ ] Tested https://www.highstrangeness.app
- [ ] Verified SSL certificate is valid

---

## Common Vercel DNS Record Formats

Vercel may show you different formats. Here's what to look for:

### Format 1: A Record + CNAME
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

### Format 2: CNAME Only (for root)
```
CNAME @     cname.vercel-dns.com
CNAME www   cname.vercel-dns.com
```
**Note**: Some DNS providers don't allow CNAME on root. Use A record instead.

### Format 3: Custom Subdomain
```
A     @     76.76.21.21
CNAME www   your-site.vercel-dns.com
```

**Always use exactly what Vercel shows you** - don't guess!

---

## Need Help?

- **Vercel Support**: https://vercel.com/support
- **Cloudflare Community**: https://community.cloudflare.com
- **Check Vercel Logs**: Dashboard → Your Project → Deployments → Click deployment → View logs
- **Check Cloudflare Analytics**: Dashboard → Your Domain → Analytics

