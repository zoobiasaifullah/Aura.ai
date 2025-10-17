/**
 * Shopify Buy Button Integration for Aura.ai
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://admin.shopify.com/store/aura-aii/buy_button
 * 2. Create Buy Buttons for each product
 * 3. Replace the PRODUCT_ID values below with your actual product IDs
 * 4. Copy the generated script URLs if they're different
 */

// Load Shopify Buy Button SDK
(function() {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            initializeBuyButtons();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = initializeBuyButtons;
    }

    function initializeBuyButtons() {
        // Initialize Shopify Buy Button SDK
        var client = ShopifyBuy.buildClient({
            domain: 'aura-aii.myshopify.com', // Your Shopify store domain
            storefrontAccessToken: 'b18dc5f67c379150dae7c51f5ab360ad' // Get this from Shopify Admin
        });

        ShopifyBuy.UI.onReady(client).then(function(ui) {
            // AI Skin Analysis Button - $20
            createBuyButton(ui, 'gid://shopify/Product/9909201338675', 'shopify-buy-button-analysis', {
                product: {
                    buttonDestination: 'checkout',
                    contents: {
                        img: false,
                        title: false,
                        price: false
                    },
                    text: {
                        button: 'Get AI Analysis'
                    },
                    styles: {
                        button: {
                            'font-family': 'Inter, sans-serif',
                            'font-size': '15px',
                            'padding': '14px 28px',
                            'background': 'linear-gradient(135deg, #D946EF 0%, #A855F7 100%)',
                            'border-radius': '8px',
                            'font-weight': '600',
                            ':hover': {
                                'background': 'linear-gradient(135deg, #C026D3 0%, #9333EA 100%)'
                            }
                        }
                    }
                },
                cart: {
                    styles: {
                        button: {
                            'background': 'linear-gradient(135deg, #D946EF 0%, #A855F7 100%)',
                            'border-radius': '12px'
                        }
                    }
                },
                toggle: {
                    styles: {
                        toggle: {
                            'background': 'linear-gradient(135deg, #D946EF 0%, #A855F7 100%)'
                        }
                    }
                }
            });

            // Personalized Quiz Button - Free first time, then $5/month
            createBuyButton(ui, 'gid://shopify/Product/9909201535283', 'shopify-buy-button-quiz', {
                product: {
                    buttonDestination: 'checkout',
                    contents: {
                        img: false,
                        title: false,
                        price: false
                    },
                    text: {
                        button: 'Start Free Quiz'
                    },
                    styles: {
                        button: {
                            'font-family': 'Inter, sans-serif',
                            'font-size': '15px',
                            'padding': '14px 28px',
                            'background': 'linear-gradient(135deg, #D946EF 0%, #A855F7 100%)',
                            'border-radius': '8px',
                            'font-weight': '600',
                            ':hover': {
                                'background': 'linear-gradient(135deg, #C026D3 0%, #9333EA 100%)'
                            }
                        }
                    }
                },
                cart: {
                    styles: {
                        button: {
                            'background': 'linear-gradient(135deg, #D946EF 0%, #A855F7 100%)',
                            'border-radius': '12px'
                        }
                    }
                },
                toggle: {
                    styles: {
                        toggle: {
                            'background': 'linear-gradient(135deg, #D946EF 0%, #A855F7 100%)'
                        }
                    }
                }
            });

            // Complete Routine Button - $50
            createBuyButton(ui, 'gid://shopify/Product/9909201666355', 'shopify-buy-button-routine', {
                product: {
                    buttonDestination: 'checkout',
                    contents: {
                        img: false,
                        title: false,
                        price: false
                    },
                    text: {
                        button: 'Get My Routine'
                    },
                    styles: {
                        button: {
                            'font-family': 'Inter, sans-serif',
                            'font-size': '15px',
                            'padding': '14px 28px',
                            'background': 'linear-gradient(135deg, #D946EF 0%, #A855F7 100%)',
                            'border-radius': '8px',
                            'font-weight': '600',
                            ':hover': {
                                'background': 'linear-gradient(135deg, #C026D3 0%, #9333EA 100%)'
                            }
                        }
                    }
                },
                cart: {
                    styles: {
                        button: {
                            'background': 'linear-gradient(135deg, #D946EF 0%, #A855F7 100%)',
                            'border-radius': '12px'
                        }
                    }
                },
                toggle: {
                    styles: {
                        toggle: {
                            'background': 'linear-gradient(135deg, #D946EF 0%, #A855F7 100%)'
                        }
                    }
                }
            });
        });
    }

    function createBuyButton(ui, productId, containerId, options) {
        if (!document.getElementById(containerId)) {
            console.warn('Container not found:', containerId);
            return;
        }

        ui.createComponent('product', {
            id: productId,
            node: document.getElementById(containerId),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: options
        });
    }
})();
