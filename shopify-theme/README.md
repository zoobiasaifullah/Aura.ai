# Aura AI Skincare - Shopify Theme

A modern, conversion-optimized Shopify theme for AI-powered personalized skincare e-commerce.

## Features

- ✨ Beautiful gradient design with soft pastel colors
- 🤖 AI skin analysis integration-ready
- 📱 Fully responsive and mobile-optimized
- 🛒 Optimized product pages with variant selection
- ⚡ Fast loading with performance optimization
- ♿ Accessible and SEO-friendly
- 🎨 Customizable through Shopify theme editor

## Installation Instructions

### Step 1: Download the Theme
The theme files are in the `shopify-theme` folder.

### Step 2: Create a ZIP File
1. Compress the entire `shopify-theme` folder into a ZIP file
2. Name it something like `aura-theme.zip`

### Step 3: Upload to Shopify
1. Log in to your Shopify admin: https://admin.shopify.com/
2. Go to **Online Store** → **Themes**
3. Click **Add theme** → **Upload ZIP file**
4. Select your `aura-theme.zip` file
5. Wait for the upload to complete

### Step 4: Customize Your Theme
1. Once uploaded, click **Customize** on the Aura theme
2. Configure sections through the theme editor:
   - **Hero Section**: Set your main headline and CTA buttons
   - **FAQ Section**: Add your frequently asked questions
   - **Product pages**: Will automatically work with your products

### Step 5: Publish the Theme
1. After customizing, click **Publish** in the theme editor
2. Or go back to **Online Store** → **Themes**
3. Click **Actions** → **Publish** on the Aura theme

## Setting Up Products

### Required Product Metafields
To get the most out of this theme, add these custom metafields to your products:

1. **Key Ingredients** (`custom.key_ingredients`)
   - Type: Multi-line text
   - Shows on product pages

2. **Skin Type** (`custom.skin_type`)
   - Type: Single line text
   - Values: "Dry", "Oily", "Combination", "Sensitive"
   - Shows on collection pages

3. **Recommended by AI** (`custom.recommended_by_ai`)
   - Type: Boolean (true/false)
   - Shows AI badge on product cards

4. **Routine Products** (`custom.routine_products`)
   - Type: Single line text
   - Comma-separated product handles
   - Example: "cleanser-gentle,serum-vitamin-c,moisturizer-hydrating"
   - Shows "Complete Your Routine" section

### How to Add Metafields:
1. Go to **Settings** → **Custom data**
2. Click **Products**
3. Click **Add definition**
4. Create each metafield above

## Theme Structure

```
shopify-theme/
├── assets/           # CSS, JS, images
├── config/           # Theme settings
├── layout/           # Main theme layout
├── locales/          # Translations
├── sections/         # Reusable sections
├── snippets/         # Small reusable components
└── templates/        # Page templates
```

## Customization

### Colors
Edit colors in the Shopify theme editor:
- **Theme settings** → **Colors**
- Change primary (lavender), secondary (teal), and gradient colors

### Fonts
- Default: DM Serif Display (headings) + Inter (body)
- Change in **Theme settings** → **Typography**

### Sections
All homepage sections can be reordered, hidden, or customized:
- Hero
- Value Props
- Why Choose
- How It Works
- Testimonials
- FAQ
- CTA

## AI Skin Analysis Integration

The theme is ready for AI integration. To connect your AI service:

1. Go to **Theme settings** → **AI Analysis**
2. Enable AI Analysis
3. Enter your API endpoint
4. The "Get My Free Analysis" button will link to your analysis page

## Support

For questions or issues:
- Email: support@aura.ai
- Documentation: https://aura.ai/docs

## Version

Current version: 1.0.0

---

Built with ❤️ for modern skincare brands
