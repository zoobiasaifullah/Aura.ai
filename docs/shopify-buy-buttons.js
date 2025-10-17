/**
 * Shopify Buy Buttons for Aura.ai
 * Generated from Shopify Buy Button Channel
 */

(function() {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
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
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'aura-setup-script.myshopify.com',
            storefrontAccessToken: '9ff9170a37edc539b61be905f2a14a61',
        });

        ShopifyBuy.UI.onReady(client).then(function(ui) {
            // AI Skin Analysis Button - $20
            if (document.getElementById('shopify-buy-button-analysis')) {
                ui.createComponent('product', {
                    id: '9909201338675',
                    node: document.getElementById('shopify-buy-button-analysis'),
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: {
                        "product": {
                            "buttonDestination": "checkout",
                            "contents": {
                                "img": false,
                                "title": false,
                                "price": false
                            },
                            "text": {
                                "button": "Get AI Analysis"
                            },
                            "styles": {
                                "button": {
                                    "font-family": "Inter, sans-serif",
                                    "font-size": "15px",
                                    "padding": "14px 28px",
                                    "background-color": "#D946EF",
                                    "border-radius": "8px",
                                    "font-weight": "600",
                                    ":hover": {
                                        "background-color": "#C026D3"
                                    }
                                }
                            }
                        },
                        "cart": {
                            "styles": {
                                "button": {
                                    "background-color": "#D946EF",
                                    "border-radius": "8px",
                                    ":hover": {
                                        "background-color": "#C026D3"
                                    }
                                }
                            }
                        },
                        "toggle": {
                            "styles": {
                                "toggle": {
                                    "background-color": "#D946EF",
                                    ":hover": {
                                        "background-color": "#C026D3"
                                    }
                                }
                            }
                        }
                    }
                });
            }

            // Personalized Quiz Button - $5
            if (document.getElementById('shopify-buy-button-quiz')) {
                ui.createComponent('product', {
                    id: '9909201535283',
                    node: document.getElementById('shopify-buy-button-quiz'),
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: {
                        "product": {
                            "buttonDestination": "checkout",
                            "contents": {
                                "img": false,
                                "title": false,
                                "price": false
                            },
                            "text": {
                                "button": "Start Free Quiz"
                            },
                            "styles": {
                                "button": {
                                    "font-family": "Inter, sans-serif",
                                    "font-size": "15px",
                                    "padding": "14px 28px",
                                    "background-color": "#D946EF",
                                    "border-radius": "8px",
                                    "font-weight": "600",
                                    ":hover": {
                                        "background-color": "#C026D3"
                                    }
                                }
                            }
                        },
                        "cart": {
                            "styles": {
                                "button": {
                                    "background-color": "#D946EF",
                                    "border-radius": "8px",
                                    ":hover": {
                                        "background-color": "#C026D3"
                                    }
                                }
                            }
                        },
                        "toggle": {
                            "styles": {
                                "toggle": {
                                    "background-color": "#D946EF",
                                    ":hover": {
                                        "background-color": "#C026D3"
                                    }
                                }
                            }
                        }
                    }
                });
            }

            // Complete Routine Button - $50
            if (document.getElementById('shopify-buy-button-routine')) {
                ui.createComponent('product', {
                    id: '9909201666355',
                    node: document.getElementById('shopify-buy-button-routine'),
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: {
                        "product": {
                            "buttonDestination": "checkout",
                            "contents": {
                                "img": false,
                                "title": false,
                                "price": false
                            },
                            "text": {
                                "button": "Get My Routine"
                            },
                            "styles": {
                                "button": {
                                    "font-family": "Inter, sans-serif",
                                    "font-size": "15px",
                                    "padding": "14px 28px",
                                    "background-color": "#D946EF",
                                    "border-radius": "8px",
                                    "font-weight": "600",
                                    ":hover": {
                                        "background-color": "#C026D3"
                                    }
                                }
                            }
                        },
                        "cart": {
                            "styles": {
                                "button": {
                                    "background-color": "#D946EF",
                                    "border-radius": "8px",
                                    ":hover": {
                                        "background-color": "#C026D3"
                                    }
                                }
                            }
                        },
                        "toggle": {
                            "styles": {
                                "toggle": {
                                    "background-color": "#D946EF",
                                    ":hover": {
                                        "background-color": "#C026D3"
                                    }
                                }
                            }
                        }
                    }
                });
            }
        });
    }
})();
