# Shopify Integration - Next Steps

## ✅ What's Been Completed

1. **Created Pricing Section** (`templates/sections/pricing.html`)
   - 3 service tiers with beautiful gradient design
   - Placeholder divs for Shopify Buy Buttons
   - Responsive grid layout with hover effects
   - "Most Popular" badge on Complete Routine tier

2. **Created Buy Button JavaScript** (`static/js/shopify-buy-buttons.js`)
   - SDK initialization code
   - 3 button configurations matching your brand
   - Purple gradient (#D946EF) for Analysis & Quiz
   - Green gradient for Complete Routine (featured)

3. **Updated Homepage Template** (`templates/home.html`)
   - Added pricing section between "Why Choose" and "Testimonials"

4. **Updated Base Template** (`templates/base.html`)
   - Added Shopify Buy Button script reference

## 🔧 What You Need To Do Now

### Step 1: Create Products in Shopify Admin

1. **Login to Shopify:**
   - Go to: https://admin.shopify.com/store/aura-aii
   - Email: zs295@njit.edu
   - Password: Arsenal123! (CHANGE THIS ASAP!)

2. **Create Product 1 - AI Skin Analysis:**
   - Go to Products → Add product
   - Title: `AI Skin Analysis Service`
   - Description: 
     ```
     Get a comprehensive AI-powered analysis of your skin. Upload photos and receive 
     personalized insights about your skin type, concerns, and recommended treatments.
     
     What's Included:
     • Advanced AI skin analysis
     • Detailed skin profile report
     • Personalized product recommendations
     • 30-day access to your results
     ```
   - Price: $20.00
   - Product type: `Digital Service`
   - Vendor: `Aura`
   - Tags: `digital-service`, `analysis`, `ai`
   - Save

3. **Create Product 2 - Personalized Skincare Quiz:**
   - Go to Products → Add product
   - Title: `Personalized Skincare Quiz`
   - Description:
     ```
     Discover your perfect skincare routine through our science-backed questionnaire. 
     Answer questions about your skin, lifestyle, and goals to get tailored recommendations.
     
     What's Included:
     • Interactive skincare assessment
     • Lifestyle & habit analysis
     • Custom product recommendations
     • Expert tips for your skin type
     ```
   - Price: $10.00
   - Product type: `Digital Service`
   - Vendor: `Aura`
   - Tags: `digital-service`, `quiz`, `assessment`
   - Save

4. **Create Product 3 - Complete Personalized Routine:**
   - Go to Products → Add product
   - Title: `Complete Personalized Routine`
   - Description:
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
   - Price: $50.00
   - Compare at price: $70.00 (this shows the discount)
   - Product type: `Digital Service`
   - Vendor: `Aura`
   - Tags: `digital-service`, `complete`, `routine`, `featured`
   - Save

### Step 2: Install Buy Button Sales Channel

1. In Shopify Admin, go to **Settings → Apps and sales channels**
2. Click **Shopify App Store**
3. Search for "Buy Button"
4. Click **Buy Button channel** (official Shopify app)
5. Click **Add app** → **Add sales channel**

### Step 3: Create Buy Buttons

1. **Go to Buy Button Channel:**
   - In Shopify admin sidebar, click **Sales channels → Buy Button**
   - Click **Create a Buy Button**

2. **For Each Product (repeat 3 times):**
   - Select the product (AI Analysis, Quiz, or Complete Routine)
   - Click **Select product**
   - Customize button:
     - Button type: **Buy button** (not cart button)
     - Button destination: **Checkout** (direct to checkout)
     - Show product image: **OFF**
     - Show product title: **OFF**
     - Show product price: **OFF**
     - Button text: (leave default, we'll override in code)
   - Click **Next**
   - Copy the **entire generated code**
   - Save it in a text file temporarily

3. **Extract Product IDs:**
   - Look for this in the generated code:
     ```javascript
     id: '1234567890123',  // or gid://shopify/Product/1234567890123
     ```
   - Copy the numeric product ID for each product

### Step 4: Get Storefront Access Token

1. In Shopify Admin, go to **Settings → Apps and sales channels**
2. Click **Develop apps** (at top right)
3. Click **Create an app**
   - App name: `Aura Website Integration`
   - Click **Create app**
4. Click **Configure Storefront API scopes**
5. Enable these scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_checkouts`
   - `unauthenticated_write_checkouts`
6. Click **Save**
7. Click **Install app** → **Install**
8. Copy the **Storefront API access token**

### Step 5: Update the JavaScript File

1. **Open:** `static/js/shopify-buy-buttons.js`

2. **Replace these values:**
   ```javascript
   storefrontAccessToken: 'YOUR_STOREFRONT_ACCESS_TOKEN_HERE'  
   // Replace with token from Step 4
   
   'AI_SKIN_ANALYSIS_PRODUCT_ID'  
   // Replace with Product 1 ID
   
   'PERSONALIZED_QUIZ_PRODUCT_ID'  
   // Replace with Product 2 ID
   
   'COMPLETE_ROUTINE_PRODUCT_ID'  
   // Replace with Product 3 ID
   ```

3. **Example after replacement:**
   ```javascript
   storefrontAccessToken: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'
   
   createBuyButton(ui, '8573291045', 'shopify-buy-button-analysis', {
   
   createBuyButton(ui, '8573291167', 'shopify-buy-button-quiz', {
   
   createBuyButton(ui, '8573291289', 'shopify-buy-button-routine', {
   ```

### Step 6: Rebuild and Deploy

Run these commands in PowerShell:

```powershell
# Navigate to project directory
cd "C:\Users\zoobia\Aura.ai"

# Rebuild the static site
python build.py

# Commit changes
git add -A
git commit -m "Add Shopify Buy Button integration for AI services"

# Push to GitHub
git push origin main
```

### Step 7: Verify Live Site

1. Wait 1-2 minutes for GitHub Pages to deploy
2. Visit: https://zoobiasaifullah.github.io/Aura.ai/
3. Scroll to the **Pricing** section (after "Why Choose Us")
4. You should see 3 Buy Buttons
5. Click each button to test the Shopify checkout flow

## 🎨 Customization Options

If you want to change button colors or styles, edit `static/js/shopify-buy-buttons.js`:

```javascript
styles: {
    button: {
        'background': 'linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_COLOR2 100%)',
        'border-radius': '12px',  // Rounded corners
        'padding': '16px 32px',   // Button size
        'font-size': '16px',      // Text size
    }
}
```

## 🔐 Security Reminder

**IMPORTANT:** Change your Shopify password immediately:
- Go to: https://accounts.shopify.com/
- Login with zs295@njit.edu / Arsenal123!
- Update to a strong, unique password
- Enable two-factor authentication (2FA)

## 📞 Shopify Support

If you encounter issues:
- Shopify Help Center: https://help.shopify.com/
- Buy Button Documentation: https://help.shopify.com/manual/online-sales-channels/buy-button
- Developer Docs: https://shopify.dev/api/storefront

## ✨ Next Steps After Launch

1. **Test Payment Processing:**
   - Set up Shopify Payments or PayPal in Settings → Payments
   - Place a test order to verify checkout works

2. **Configure Order Fulfillment:**
   - Since these are digital services, set up email automation
   - Create order confirmation templates with access instructions

3. **Analytics:**
   - Enable Google Analytics in Shopify admin
   - Track conversion rates for each pricing tier

4. **Marketing:**
   - Share the pricing page: https://zoobiasaifullah.github.io/Aura.ai/#pricing
   - Consider adding discount codes in Shopify → Discounts

---

**Need help with any step?** Just ask! I can help you troubleshoot issues or make customizations.
