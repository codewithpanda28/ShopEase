// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Search functionality
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    // Implement search functionality here
    console.log(`Searching for: ${searchTerm}`);
});

// Slider functionality
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slider-arrow.prev');
const nextButton = document.querySelector('.slider-arrow.next');

let currentSlide = 0;
const slideCount = slides.length;

function showSlide(index) {
    sliderContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Product data (replace with your actual product data)
const products = [
    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/w/w/pixel-buds-pro-with-active-noise-cancellation-google-original-imah3zxwwhuvjuxw.jpeg?q=70', category: 'electronics' },
    { id: 2, name: 'Smart Watch', price: 129.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/7/-original-imagvpakfvggsgg5.jpeg?q=70', category: 'electronics' },
  
    { id: 5, name: 'Facial Serum', price: 34.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/milk-drink-mix/p/q/r/-original-imah3zwvtknfpzqh.jpeg?q=70', category: 'beauty' },

    { id: 6, name: 'Yoga Mat', price: 29.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/g/z/j/exercise-mat-for-women-men-eva-material-antislip-for-workout-original-imah4cczbvbtpvmw.jpeg?q=70', category: 'fitness' },

    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/q/n/-original-imagmugg8hx9v5fr.jpeg?q=70', category: 'electronics' },
    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/w/w/pixel-buds-pro-with-active-noise-cancellation-google-original-imah3zxwwhuvjuxw.jpeg?q=70', category: 'electronics' },
    { id: 2, name: 'Smart Watch', price: 129.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/7/-original-imagvpakfvggsgg5.jpeg?q=70', category: 'electronics' },
  
    { id: 5, name: 'Facial Serum', price: 34.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/milk-drink-mix/p/q/r/-original-imah3zwvtknfpzqh.jpeg?q=70', category: 'beauty' },

    { id: 6, name: 'Yoga Mat', price: 29.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/g/z/j/exercise-mat-for-women-men-eva-material-antislip-for-workout-original-imah4cczbvbtpvmw.jpeg?q=70', category: 'fitness' },

    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/q/n/-original-imagmugg8hx9v5fr.jpeg?q=70', category: 'electronics' },
    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/w/w/pixel-buds-pro-with-active-noise-cancellation-google-original-imah3zxwwhuvjuxw.jpeg?q=70', category: 'electronics' },
    { id: 2, name: 'Smart Watch', price: 129.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/7/-original-imagvpakfvggsgg5.jpeg?q=70', category: 'electronics' },
  
    { id: 5, name: 'Facial Serum', price: 34.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/milk-drink-mix/p/q/r/-original-imah3zwvtknfpzqh.jpeg?q=70', category: 'beauty' },

    { id: 6, name: 'Yoga Mat', price: 29.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/g/z/j/exercise-mat-for-women-men-eva-material-antislip-for-workout-original-imah4cczbvbtpvmw.jpeg?q=70', category: 'fitness' },

    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/q/n/-original-imagmugg8hx9v5fr.jpeg?q=70', category: 'electronics' },
    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/w/w/pixel-buds-pro-with-active-noise-cancellation-google-original-imah3zxwwhuvjuxw.jpeg?q=70', category: 'electronics' },
    { id: 2, name: 'Smart Watch', price: 129.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/7/-original-imagvpakfvggsgg5.jpeg?q=70', category: 'electronics' },
  
    { id: 5, name: 'Facial Serum', price: 34.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/milk-drink-mix/p/q/r/-original-imah3zwvtknfpzqh.jpeg?q=70', category: 'beauty' },

    { id: 6, name: 'Yoga Mat', price: 29.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/g/z/j/exercise-mat-for-women-men-eva-material-antislip-for-workout-original-imah4cczbvbtpvmw.jpeg?q=70', category: 'fitness' },

    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/q/n/-original-imagmugg8hx9v5fr.jpeg?q=70', category: 'electronics' },
    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/w/w/pixel-buds-pro-with-active-noise-cancellation-google-original-imah3zxwwhuvjuxw.jpeg?q=70', category: 'electronics' },
    { id: 2, name: 'Smart Watch', price: 129.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/7/-original-imagvpakfvggsgg5.jpeg?q=70', category: 'electronics' },
  
    { id: 5, name: 'Facial Serum', price: 34.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/milk-drink-mix/p/q/r/-original-imah3zwvtknfpzqh.jpeg?q=70', category: 'beauty' },

    { id: 6, name: 'Yoga Mat', price: 29.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/g/z/j/exercise-mat-for-women-men-eva-material-antislip-for-workout-original-imah4cczbvbtpvmw.jpeg?q=70', category: 'fitness' },

    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/q/n/-original-imagmugg8hx9v5fr.jpeg?q=70', category: 'electronics' },
    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/w/w/pixel-buds-pro-with-active-noise-cancellation-google-original-imah3zxwwhuvjuxw.jpeg?q=70', category: 'electronics' },
    { id: 2, name: 'Smart Watch', price: 129.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/7/-original-imagvpakfvggsgg5.jpeg?q=70', category: 'electronics' },
  
    { id: 5, name: 'Facial Serum', price: 34.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/milk-drink-mix/p/q/r/-original-imah3zwvtknfpzqh.jpeg?q=70', category: 'beauty' },

    { id: 6, name: 'Yoga Mat', price: 29.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/g/z/j/exercise-mat-for-women-men-eva-material-antislip-for-workout-original-imah4cczbvbtpvmw.jpeg?q=70', category: 'fitness' },

    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/q/n/-original-imagmugg8hx9v5fr.jpeg?q=70', category: 'electronics' },
    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/w/w/pixel-buds-pro-with-active-noise-cancellation-google-original-imah3zxwwhuvjuxw.jpeg?q=70', category: 'electronics' },
    { id: 2, name: 'Smart Watch', price: 129.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/7/-original-imagvpakfvggsgg5.jpeg?q=70', category: 'electronics' },
  
    { id: 5, name: 'Facial Serum', price: 34.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/milk-drink-mix/p/q/r/-original-imah3zwvtknfpzqh.jpeg?q=70', category: 'beauty' },

    { id: 6, name: 'Yoga Mat', price: 29.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/g/z/j/exercise-mat-for-women-men-eva-material-antislip-for-workout-original-imah4cczbvbtpvmw.jpeg?q=70', category: 'fitness' },

    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/q/n/-original-imagmugg8hx9v5fr.jpeg?q=70', category: 'electronics' },
    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/w/w/pixel-buds-pro-with-active-noise-cancellation-google-original-imah3zxwwhuvjuxw.jpeg?q=70', category: 'electronics' },
    { id: 2, name: 'Smart Watch', price: 129.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/7/-original-imagvpakfvggsgg5.jpeg?q=70', category: 'electronics' },
  
    { id: 5, name: 'Facial Serum', price: 34.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/milk-drink-mix/p/q/r/-original-imah3zwvtknfpzqh.jpeg?q=70', category: 'beauty' },

    { id: 6, name: 'Yoga Mat', price: 29.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/g/z/j/exercise-mat-for-women-men-eva-material-antislip-for-workout-original-imah4cczbvbtpvmw.jpeg?q=70', category: 'fitness' },

    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/q/n/-original-imagmugg8hx9v5fr.jpeg?q=70', category: 'electronics' },
    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/w/w/pixel-buds-pro-with-active-noise-cancellation-google-original-imah3zxwwhuvjuxw.jpeg?q=70', category: 'electronics' },
    { id: 2, name: 'Smart Watch', price: 129.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/7/-original-imagvpakfvggsgg5.jpeg?q=70', category: 'electronics' },
  
    { id: 5, name: 'Facial Serum', price: 34.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/milk-drink-mix/p/q/r/-original-imah3zwvtknfpzqh.jpeg?q=70', category: 'beauty' },

    { id: 6, name: 'Yoga Mat', price: 29.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/g/z/j/exercise-mat-for-women-men-eva-material-antislip-for-workout-original-imah4cczbvbtpvmw.jpeg?q=70', category: 'fitness' },

    { id: 1, name: 'Wireless Earbuds', price: 59.99, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/q/n/-original-imagmugg8hx9v5fr.jpeg?q=70', category: 'electronics' },

    
];

// Render product cards
const productGrid = document.querySelector('.product-grid');

function renderProducts() {
    productGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

renderProducts();

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

productGrid.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.id === productId);

        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCart();
    }
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    console.log(`Subscribed to newsletter: ${email}`);
    // Implement newsletter subscription logic here
    e.target.reset();
});

// Initialize cart count
updateCart();

// Dark mode toggle
// const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateThemeIcon(isDarkMode);
});

function updateThemeIcon(isDarkMode) {
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('darkMode');
if (savedTheme === 'true') {
    document.body.classList.add('dark-mode');
    updateThemeIcon(true);
}

// Rest of the script.js content (search, slider, products, cart) remains the same

// Check login status
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && window.location.pathname !== '/login.html' && window.location.pathname !== '/signup.html') {
        window.location.href = 'login.html';
    }
}

// Run on page load
checkLoginStatus();

// ... (previous code remains unchanged) ...

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="cart-item-details">
                        <h3>${item.title}</h3>
                        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                        <div class="cart-item-quantity">
                            <button class="decrease-quantity">-</button>
                            <span>${item.quantity}</span>
                            <button class="increase-quantity">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove">Remove</button>
                </div>
            `).join('');
        }
    }
    updateCartSummary();
}

// Function to update cart summary
function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 10 : 0; // Example shipping cost
    const total = subtotal + shipping;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Function to update item quantity
function updateItemQuantity(id, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
        updateCartCount();
    }
}

// Function to remove item from cart
function removeItemFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // ... (previous event listeners remain unchanged) ...

    // Cart page specific event listeners
    if (window.location.pathname.includes('cart.html')) {
        renderCartItems();

        document.getElementById('cart-items').addEventListener('click', (e) => {
            const cartItem = e.target.closest('.cart-item');
            if (cartItem) {
                const id = parseInt(cartItem.dataset.id);

                if (e.target.classList.contains('increase-quantity')) {
                    updateItemQuantity(id, 1);
                } else if (e.target.classList.contains('decrease-quantity')) {
                    updateItemQuantity(id, -1);
                } else if (e.target.classList.contains('cart-item-remove')) {
                    removeItemFromCart(id);
                }
            }
        });

        document.getElementById('checkout-button').addEventListener('click', () => {
            alert('Proceeding to checkout... (This is a placeholder for the checkout process)');
        });
    }
});

// ... (previous code remains unchanged) ...

// ... (previous code remains unchanged) ...

// Function to update cart summary
function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const gstRate = 0.18; // 18% GST
    const gstAmount = subtotal * gstRate;
    const shipping = subtotal > 0 ? 10 : 0; // Example shipping cost
    const total = subtotal + gstAmount + shipping;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('gst').textContent = `$${gstAmount.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="cart-item-details">
                        <h3>${item.title}</h3>
                        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                        <div class="cart-item-quantity">
                            <button class="decrease-quantity">-</button>
                            <span>${item.quantity}</span>
                            <button class="increase-quantity">+</button>
                        </div>
                    </div>
                    <p class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</p>
                    <button class="cart-item-remove">Remove</button>
                </div>
            `).join('');
        }
    }
    updateCartSummary();
}

// ... (previous code remains unchanged) ...

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // ... (previous event listeners remain unchanged) ...

    // Cart page specific event listeners
    if (window.location.pathname.includes('cart.html')) {
        renderCartItems();

        document.getElementById('cart-items').addEventListener('click', (e) => {
            const cartItem = e.target.closest('.cart-item');
            if (cartItem) {
                const id = parseInt(cartItem.dataset.id);

                if (e.target.classList.contains('increase-quantity')) {
                    updateItemQuantity(id, 1);
                } else if (e.target.classList.contains('decrease-quantity')) {
                    updateItemQuantity(id, -1);
                } else if (e.target.classList.contains('cart-item-remove')) {
                    removeItemFromCart(id);
                }
            }
        });

        document.getElementById('checkout-button').addEventListener('click', () => {
            alert('Proceeding to checkout... (This is a placeholder for the checkout process)');
        });
    }
});

// ... (previous code remains unchanged) ...

