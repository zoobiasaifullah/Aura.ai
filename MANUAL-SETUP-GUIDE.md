# 🛠️ Manual Shopify Product Setup Guide

Since the API is having authentication issues, let's create the products manually. It's quick and easy!

## Step 1: Create AI Skin Analysis Product ($20)

1. Go to: https://admin.shopify.com/store/aura-aii/products/new

2. Fill in these details:
   - **Title:** `AI Skin Analysis Service`
   - **Description:** 
     ```
     Get a comprehensive AI-powered analysis of your skin. Upload photos and receive 
     personalized insights about your skin type, concerns, and recommended treatments.
     
     What's Included:
     • Advanced AI skin analysis
     • Detailed skin profile report
     • Personalized product recommendations
     • 30-day access to your results
     ```
   - **Price:** `20.00`
   - **Compare at price:** (leave blank)
   - **Cost per item:** (leave blank)
   - **Product type:** `Digital Service`
   - **Vendor:** `Aura`
   - **Tags:** `digital-service, analysis, ai`
   - **Inventory:** Uncheck "Track quantity"
   - **Shipping:** Uncheck "This is a physical product"

3. Click **"Save"**

4. **Copy the Product ID** from the URL (e.g., `https://admin.shopify.com/store/aura-aii/products/8573291045`)
   - Write down: AI Analysis ID = `_____________`

---

## Step 2: Create Personalized Quiz Product ($5/month)

1. Go to: https://admin.shopify.com/store/aura-aii/products/new

2. Fill in:
   - **Title:** `Personalized Skincare Quiz`
   - **Description:**
     ```
     Discover your perfect skincare routine through our science-backed questionnaire. 
     Answer questions about your skin, lifestyle, and goals to get tailored recommendations.
     
     What's Included:
     • Interactive skincare assessment
     • Lifestyle & habit analysis
     • Custom product recommendations
     • Expert tips for your skin type
     • Monthly routine updates
     
     Subscription: First month free, then $5.00/month
     ```
   - **Price:** `5.00`
   - **Product type:** `Digital Service`
   - **Vendor:** `Aura`
   - **Tags:** `digital-service, quiz, subscription, monthly`
   - **Inventory:** Uncheck "Track quantity"
   - **Shipping:** Uncheck "This is a physical product"

3. Click **"Save"**

4. **Copy the Product ID** from the URL
   - Write down: Quiz ID = `_____________`

---

## Step 3: Create Complete Routine Product ($50)

1. Go to: https://admin.shopify.com/store/aura-aii/products/new

2. Fill in:
   - **Title:** `Complete Personalized Routine`
   - **Description:**
     ```
     The complete Aura experience! Get AI analysis + personalized quiz + custom routine 
     with ongoing support. Save $20 when you bundle everything together.
     
     What's Included:
     • AI-powered skin analysis with photo upload
     • Comprehensive skincare quiz
     • Complete personalized routine (AM/PM)
     • Product recommendations with purchase links
     • 90-day access to your results
     • Email support for routine questions
     
     Regular Price: $70 → Bundle Price: $50 (Save $20!)
     ```
   - **Price:** `50.00`
   - **Compare at price:** `70.00` (this shows the discount!)
   - **Product type:** `Digital Service`
   - **Vendor:** `Aura`
   - **Tags:** `digital-service, complete, routine, featured`
   - **Inventory:** Uncheck "Track quantity"
   - **Shipping:** Uncheck "This is a physical product"

3. Click **"Save"**

4. **Copy the Product ID** from the URL
   - Write down: Complete Routine ID = `_____________`

---

## Step 4: Get Storefront Access Token

1. In your custom app, go to **"Configuration"** tab
2. Scroll to **"Storefront API"** section
3. Click **"Configure"**
4. Enable these scopes:
   - ✅ `unauthenticated_read_product_listings`
   - ✅ `unauthenticated_read_checkouts`  
   - ✅ `unauthenticated_write_checkouts`
5. Click **"Save"**
6. Go to **"API credentials"** tab
7. Look for **"Storefront access token"**
8. Copy the token
   - Write down: Storefront Token = `_____________`

---

## Step 5: Update JavaScript File

Open: `static/js/shopify-buy-buttons.js`

**Line 33** - Replace:
```javascript
storefrontAccessToken: 'YOUR_STOREFRONT_ACCESS_TOKEN_HERE'
```
With:
```javascript
storefrontAccessToken: 'YOUR_ACTUAL_TOKEN_HERE'
```

**Line 43** - Replace:
```javascript
createBuyButton(ui, 'AI_SKIN_ANALYSIS_PRODUCT_ID',
```
With:
```javascript
createBuyButton(ui, 'YOUR_AI_ANALYSIS_ID_HERE',
```

**Line 87** - Replace:
```javascript
createBuyButton(ui, 'PERSONALIZED_QUIZ_PRODUCT_ID',
```
With:
```javascript
createBuyButton(ui, 'YOUR_QUIZ_ID_HERE',
```

**Line 127** - Replace:
```javascript
createBuyButton(ui, 'COMPLETE_ROUTINE_PRODUCT_ID',
```
With:
```javascript
createBuyButton(ui, 'YOUR_ROUTINE_ID_HERE',
```

---

## Step 6: Deploy

```powershell
python build.py
git add -A
git commit -m "Add Shopify product IDs and credentials"
git push origin main
```

Wait 2 minutes, then visit: https://zoobiasaifullah.github.io/Aura.ai/

Your Buy Buttons will be LIVE! 🎉

---

**Need help?** Tell me the 3 Product IDs and Storefront Token and I'll update the file for you!
