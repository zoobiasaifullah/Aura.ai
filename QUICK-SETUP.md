# 🚀 Quick Shopify Setup - Do This First

## Step 1: Create Admin API Access

You need to create a Custom App to get API access:

1. **Login to Shopify:**
   - Go to: https://admin.shopify.com/store/aura-aii
   - Email: zs295@njit.edu
   - Password: Arsenal123!

2. **Create Custom App:**
   - Go to: https://admin.shopify.com/store/aura-aii/settings/apps/development
   - Click **"Create an app"**
   - App name: `Aura Setup Script`
   - App developer: (your name)
   - Click **"Create app"**

3. **Configure API Scopes:**
   - Click **"Configure Admin API scopes"**
   - Scroll down and enable these scopes:
     - ✅ `write_products`
     - ✅ `read_products`
     - ✅ `write_publications`
     - ✅ `read_publications`
   - Click **"Save"**

4. **Install the App:**
   - Click **"Install app"** button
   - Click **"Install"** to confirm

5. **Copy Admin API Token:**
   - You'll see **"Admin API access token"**
   - Click **"Reveal token once"**
   - **COPY THIS TOKEN** - you'll need it for the script!

---

## Step 2: Run the Automated Setup Script

Once you have the Admin API token:

```powershell
cd "C:\Users\zoobia\Aura.ai"
python setup_shopify.py
```

The script will ask you to paste the Admin API token, then it will:
- ✅ Create Storefront Access Token
- ✅ Create AI Skin Analysis Product ($20)
- ✅ Create Personalized Quiz Product ($5/month)
- ✅ Create Complete Routine Product ($50)
- ✅ Update the JavaScript file with all IDs and tokens
- ✅ Show you next steps

---

## Step 3: Deploy

After the script completes:

```powershell
python build.py
git add -A
git commit -m "Add Shopify product IDs and credentials"
git push origin main
```

Wait 1-2 minutes, then visit: https://zoobiasaifullah.github.io/Aura.ai/

Your Shopify Buy Buttons will be live! 🎉

---

## 🔐 Security Reminder

After setup is complete:
1. Go to: https://accounts.shopify.com/
2. Change your password from Arsenal123!
3. Enable 2-factor authentication
4. The Admin API token is stored locally only, not in git

---

**Ready? Start with Step 1 above!** 🚀
