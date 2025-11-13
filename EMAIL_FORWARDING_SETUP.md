# Setting Up Email Forwarding on Cloudflare

This guide walks you through setting up email forwarding for `support@highstrangeness.app` using Cloudflare's Email Routing feature.

---

## Prerequisites

- Cloudflare account with `highstrangeness.app` domain added
- Domain nameservers pointing to Cloudflare (already done if your site is working)
- An existing email address to forward to (e.g., your personal Gmail, Outlook, etc.)

---

## Step 1: Enable Email Routing in Cloudflare

1. **Log into Cloudflare Dashboard**
   - Go to [https://dash.cloudflare.com](https://dash.cloudflare.com)
   - Sign in to your account

2. **Select Your Domain**
   - Click on `highstrangeness.app` from your domain list

3. **Navigate to Email Routing**
   - In the left sidebar, click **"Email"** → **"Email Routing"**
   - If you don't see "Email" in the sidebar, look for it under "Apps" or search for "Email Routing" in the dashboard

4. **Enable Email Routing**
   - Click **"Get Started"** or **"Enable Email Routing"** button
   - Cloudflare will automatically add the required DNS records (MX records)
   - Wait a few seconds for the setup to complete

---

## Step 2: Verify Email Routing is Active

1. **Check Status**
   - You should see a green checkmark indicating "Email Routing is active"
   - Cloudflare will show you the MX records that were automatically added

2. **Verify DNS Records**
   - Go to **"DNS"** → **"Records"** in the left sidebar
   - You should see new MX records added automatically:
     - **Type**: `MX`
     - **Name**: `@` (root domain)
     - **Priority**: Various (Cloudflare sets these)
     - **Target**: `route1.mx.cloudflare.net` and `route2.mx.cloudflare.net`

**Note**: These MX records are required for email routing to work. Don't delete them!

---

## Step 3: Create Email Address (Destination Address)

1. **Go to Email Routing Settings**
   - Still in **"Email"** → **"Email Routing"**
   - Click on the **"Destination Addresses"** tab (or **"Addresses"**)

2. **Add Destination Address**
   - Click **"Create address"** or **"Add address"** button
   - Enter the email address you want to receive forwarded emails:
     - Example: `yourname@gmail.com`
     - Example: `yourname@outlook.com`
     - Example: `yourname@icloud.com`
   - Click **"Save"** or **"Add"**

3. **Verify Destination Address**
   - Cloudflare will send a verification email to the address you entered
   - **Check your email inbox** (and spam folder)
   - Click the verification link in the email
   - Once verified, the address will show as "Verified" in Cloudflare

---

## Step 4: Create Custom Email Address (support@highstrangeness.app)

1. **Go to Routing Rules**
   - In **"Email"** → **"Email Routing"**
   - Click on the **"Routing Rules"** tab (or **"Rules"**)

2. **Create New Rule**
   - Click **"Create address"** or **"Add address"** button
   - You'll see two fields:
     - **Custom address**: Enter `support`
     - **Destination address**: Select your verified destination address from the dropdown

3. **Save the Rule**
   - Click **"Save"** or **"Create"**
   - The rule will be created immediately

4. **Verify the Setup**
   - You should now see:
     - **Custom address**: `support@highstrangeness.app`
     - **Destination**: Your verified email address
     - **Status**: Active

---

## Step 5: Test Email Forwarding

1. **Send a Test Email**
   - From any email account, send an email to: `support@highstrangeness.app`
   - Use a subject like "Test Email" so you can identify it

2. **Check Your Destination Inbox**
   - Check the email address you set as the destination
   - The forwarded email should arrive within a few minutes
   - **Note**: First email might take a few minutes, subsequent emails are usually instant

3. **Verify Sender Information**
   - The forwarded email will show:
     - **From**: `support@highstrangeness.app` (or the original sender, depending on Cloudflare settings)
     - **To**: Your destination email address
     - **Subject**: Original subject with optional prefix like `[support@highstrangeness.app]`

---

## Step 6: Optional - Add More Email Addresses

You can add more custom addresses following the same process:

- `info@highstrangeness.app`
- `contact@highstrangeness.app`
- `hello@highstrangeness.app`
- etc.

**Steps for each:**
1. Go to **"Routing Rules"**
2. Click **"Create address"**
3. Enter the custom address name (e.g., `info`)
4. Select your destination address
5. Save

---

## Troubleshooting

### Email Not Arriving

**Check 1: DNS Propagation**
- MX records can take 24-48 hours to fully propagate
- Use a DNS checker: https://mxtoolbox.com/SuperTool.aspx
- Enter `highstrangeness.app` and check MX records
- Should show `route1.mx.cloudflare.net` and `route2.mx.cloudflare.net`

**Check 2: Destination Address Verification**
- Go to **"Destination Addresses"** in Cloudflare
- Ensure your email shows as "Verified"
- If not verified, check spam folder for verification email
- Resend verification if needed

**Check 3: Routing Rule Status**
- Go to **"Routing Rules"**
- Ensure `support@highstrangeness.app` shows as "Active"
- If inactive, check the destination address is verified

**Check 4: Spam Folder**
- Check spam/junk folder in your destination email
- Mark as "Not Spam" if found there
- Add `support@highstrangeness.app` to your contacts

### MX Records Not Showing

- If MX records weren't added automatically:
  1. Go to **"DNS"** → **"Records"**
  2. Click **"Add record"**
  3. **Type**: `MX`
  4. **Name**: `@`
  5. **Priority**: `15` (or lowest priority)
  6. **Target**: `route1.mx.cloudflare.net`
  7. Click **"Save"**
  8. Repeat for `route2.mx.cloudflare.net` with priority `15` (or next lowest)

### Can't Find Email Routing

- Email Routing is available on **all Cloudflare plans** (including free)
- If you don't see it:
  - Make sure your domain is fully set up in Cloudflare
  - Check that nameservers are pointing to Cloudflare
  - Try refreshing the dashboard
  - Look under **"Apps"** in the sidebar

---

## Email Routing Features

### Reply-To Behavior

- By default, when you reply to a forwarded email, it will reply to the original sender
- This is the expected behavior for support emails

### Email Limits

- Cloudflare Email Routing (free tier) has generous limits
- Should be more than enough for support email volume
- Check Cloudflare docs for current limits

### Multiple Destinations

- You can forward one custom address to multiple destinations
- Useful if multiple people need to receive support emails
- In routing rules, you can add multiple destination addresses

---

## Quick Reference

**Cloudflare Dashboard Path:**
- Domain → Email → Email Routing

**Key Settings:**
- **Destination Addresses**: Your real email addresses (Gmail, Outlook, etc.)
- **Routing Rules**: Custom addresses like `support@highstrangeness.app`

**DNS Records (Auto-added):**
- MX records pointing to Cloudflare's mail servers

**Test Email:**
- Send to: `support@highstrangeness.app`
- Should forward to your destination address

---

## Support

If you encounter issues:
- **Cloudflare Email Routing Docs**: https://developers.cloudflare.com/email-routing/
- **Cloudflare Community**: https://community.cloudflare.com
- **Cloudflare Support**: Available in dashboard

---

## Security Notes

- Email Routing is secure and encrypted
- Cloudflare doesn't store your emails (they're forwarded immediately)
- Your destination email address is private
- Consider using a dedicated email for support (not personal email) for better organization

