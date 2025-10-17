"""
Shopify Automated Setup Script for Aura.ai
This script will:
1. Create an API access token
2. Create 3 products in Shopify
3. Set up the subscription product
4. Get all Product IDs
5. Update the JavaScript file automatically
"""

import requests
import json
import sys
from pathlib import Path

# Shopify Store Configuration
SHOP_NAME = "aura-aii"
SHOP_URL = f"https://{SHOP_NAME}.myshopify.com"

# Admin API credentials (we'll create these)
# First, we need to create a custom app to get API access

print("=" * 60)
print("🚀 Aura.ai Shopify Automated Setup")
print("=" * 60)
print()

def create_storefront_access_token(admin_api_token):
    """Create a Storefront API access token"""
    url = f"{SHOP_URL}/admin/api/2024-10/storefront_access_tokens.json"
    headers = {
        "X-Shopify-Access-Token": admin_api_token,
        "Content-Type": "application/json"
    }
    data = {
        "storefront_access_token": {
            "title": "Aura Website Integration"
        }
    }
    
    response = requests.post(url, headers=headers, json=data)
    if response.status_code == 201:
        token = response.json()["storefront_access_token"]["access_token"]
        print(f"✅ Created Storefront Access Token: {token[:20]}...")
        return token
    else:
        print(f"❌ Error creating token: {response.status_code}")
        print(response.text)
        return None

def create_product(admin_api_token, title, price, description, tags, product_type="Digital Service"):
    """Create a product in Shopify"""
    url = f"{SHOP_URL}/admin/api/2024-10/products.json"
    headers = {
        "X-Shopify-Access-Token": admin_api_token,
        "Content-Type": "application/json"
    }
    
    data = {
        "product": {
            "title": title,
            "body_html": description,
            "vendor": "Aura",
            "product_type": product_type,
            "tags": tags,
            "variants": [
                {
                    "price": price,
                    "inventory_management": None,
                    "requires_shipping": False
                }
            ]
        }
    }
    
    response = requests.post(url, headers=headers, json=data)
    if response.status_code == 201:
        product = response.json()["product"]
        product_id = product["id"]
        print(f"✅ Created Product: {title} (ID: {product_id})")
        return product_id
    else:
        print(f"❌ Error creating {title}: {response.status_code}")
        print(response.text)
        return None

def create_subscription_product(admin_api_token, title, price, description, tags):
    """Create a subscription product"""
    # First create the base product
    product_id = create_product(admin_api_token, title, price, description, tags)
    
    if product_id:
        # Note: Setting up actual subscriptions requires the Shopify Subscriptions app
        # and additional API calls. For now, we'll create the product and provide instructions.
        print(f"⚠️  Subscription setup: Please install 'Subscriptions by Shopify' app")
        print(f"   and enable subscription for product ID: {product_id}")
    
    return product_id

def update_javascript_file(storefront_token, analysis_id, quiz_id, routine_id):
    """Update the JavaScript file with product IDs and token"""
    js_file = Path("static/js/shopify-buy-buttons.js")
    
    if not js_file.exists():
        print(f"❌ JavaScript file not found: {js_file}")
        return False
    
    # Read the current file
    content = js_file.read_text(encoding='utf-8')
    
    # Replace the placeholders
    content = content.replace(
        "storefrontAccessToken: 'YOUR_STOREFRONT_ACCESS_TOKEN_HERE'",
        f"storefrontAccessToken: '{storefront_token}'"
    )
    content = content.replace(
        "'AI_SKIN_ANALYSIS_PRODUCT_ID'",
        f"'{analysis_id}'"
    )
    content = content.replace(
        "'PERSONALIZED_QUIZ_PRODUCT_ID'",
        f"'{quiz_id}'"
    )
    content = content.replace(
        "'COMPLETE_ROUTINE_PRODUCT_ID'",
        f"'{routine_id}'"
    )
    
    # Write back to file
    js_file.write_text(content, encoding='utf-8')
    print(f"✅ Updated {js_file}")
    return True

def main():
    print("📋 Setup Instructions:")
    print()
    print("To use this script, you need to create a Custom App in Shopify:")
    print()
    print("1. Go to: https://admin.shopify.com/store/aura-aii/settings/apps/development")
    print("2. Click 'Create an app'")
    print("3. App name: 'Aura Setup Script'")
    print("4. Click 'Create app'")
    print("5. Click 'Configure Admin API scopes'")
    print("6. Enable these scopes:")
    print("   - write_products")
    print("   - read_products")
    print("   - write_publications")
    print("   - read_publications")
    print("7. Click 'Save'")
    print("8. Click 'Install app'")
    print("9. Copy the 'Admin API access token'")
    print()
    print("=" * 60)
    print()
    
    # Get API token from user
    admin_token = input("Paste your Admin API access token here: ").strip()
    
    if not admin_token:
        print("❌ No token provided. Exiting.")
        return
    
    print()
    print("🔧 Starting setup...")
    print()
    
    # Step 1: Create Storefront Access Token
    print("Step 1: Creating Storefront Access Token...")
    storefront_token = create_storefront_access_token(admin_token)
    if not storefront_token:
        print("❌ Failed to create storefront token. Exiting.")
        return
    print()
    
    # Step 2: Create AI Skin Analysis Product
    print("Step 2: Creating AI Skin Analysis Product...")
    analysis_description = """
    <p>Get a comprehensive AI-powered analysis of your skin. Upload photos and receive 
    personalized insights about your skin type, concerns, and recommended treatments.</p>
    
    <h3>What's Included:</h3>
    <ul>
        <li>Advanced AI skin analysis</li>
        <li>Detailed skin profile report</li>
        <li>Personalized product recommendations</li>
        <li>30-day access to your results</li>
    </ul>
    """
    analysis_id = create_product(
        admin_token,
        "AI Skin Analysis Service",
        "20.00",
        analysis_description,
        "digital-service, analysis, ai"
    )
    print()
    
    # Step 3: Create Personalized Quiz Product (Subscription)
    print("Step 3: Creating Personalized Quiz Product...")
    quiz_description = """
    <p>Discover your perfect skincare routine through our science-backed questionnaire. 
    Answer questions about your skin, lifestyle, and goals to get tailored recommendations.</p>
    
    <h3>What's Included:</h3>
    <ul>
        <li>Interactive skincare assessment</li>
        <li>Lifestyle & habit analysis</li>
        <li>Custom product recommendations</li>
        <li>Expert tips for your skin type</li>
        <li>Monthly routine updates</li>
    </ul>
    
    <p><strong>Subscription:</strong> First month free, then $5.00/month</p>
    """
    quiz_id = create_subscription_product(
        admin_token,
        "Personalized Skincare Quiz",
        "5.00",
        quiz_description,
        "digital-service, quiz, subscription, monthly"
    )
    print()
    
    # Step 4: Create Complete Routine Product
    print("Step 4: Creating Complete Routine Product...")
    routine_description = """
    <p>The complete Aura experience! Get AI analysis + personalized quiz + custom routine 
    with ongoing support. Save $20 when you bundle everything together.</p>
    
    <h3>What's Included:</h3>
    <ul>
        <li>AI-powered skin analysis with photo upload</li>
        <li>Comprehensive skincare quiz</li>
        <li>Complete personalized routine (AM/PM)</li>
        <li>Product recommendations with purchase links</li>
        <li>90-day access to your results</li>
        <li>Email support for routine questions</li>
    </ul>
    
    <p><strong>Regular Price:</strong> $70 → <strong>Bundle Price:</strong> $50 (Save $20!)</p>
    """
    routine_id = create_product(
        admin_token,
        "Complete Personalized Routine",
        "50.00",
        routine_description,
        "digital-service, complete, routine, featured"
    )
    print()
    
    # Check if all products were created
    if not all([analysis_id, quiz_id, routine_id]):
        print("❌ Some products failed to create. Please check errors above.")
        return
    
    # Step 5: Update JavaScript file
    print("Step 5: Updating JavaScript file...")
    if update_javascript_file(storefront_token, analysis_id, quiz_id, routine_id):
        print()
        print("=" * 60)
        print("✅ SUCCESS! Setup Complete!")
        print("=" * 60)
        print()
        print("📝 Summary:")
        print(f"   Storefront Token: {storefront_token[:30]}...")
        print(f"   AI Analysis ID: {analysis_id}")
        print(f"   Quiz ID: {quiz_id}")
        print(f"   Complete Routine ID: {routine_id}")
        print()
        print("🔄 Next Steps:")
        print("   1. Run: python build.py")
        print("   2. Run: git add -A")
        print("   3. Run: git commit -m 'Add Shopify product IDs and credentials'")
        print("   4. Run: git push origin main")
        print()
        print("⚠️  For Quiz Subscription:")
        print("   1. Go to: https://admin.shopify.com/store/aura-aii/products")
        print(f"   2. Click on 'Personalized Skincare Quiz' (ID: {quiz_id})")
        print("   3. Install 'Subscriptions by Shopify' app if not installed")
        print("   4. Enable subscription billing (Monthly, $5.00)")
        print("   5. Set up free trial (1 month)")
        print()
        print("🎉 Your Shopify integration is ready!")
        print()
    else:
        print("❌ Failed to update JavaScript file.")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n❌ Setup cancelled by user.")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
