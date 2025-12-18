(function () {
    App.Controllers.Client = {
        init: function () {
            // Subscribe to store changes to re-render
            App.Core.Store.subscribe((state) => {
                this.render(state);
            });
            this.render(App.Core.Store.getState());
        },

        render: function (state) {
            const hash = window.location.hash || '#login';
            if (!hash.startsWith('#client')) return; // Ignore if not in client route

            const app = document.getElementById('app');
            const view = state.currentView;

            if (view === 'cart') {
                app.innerHTML = App.Views.Client.Cart(state);
            } else if (typeof view === 'object' && view.name === 'product-detail') {
                app.innerHTML = App.Views.Client.ProductDetail(view.data);
            } else {
                app.innerHTML = App.Views.Client.Home(state);

                // Focus restoration logic (simplified)
                if (state.searchQuery) {
                    const input = document.getElementById('search');
                    if (input) {
                        input.focus();
                        const val = input.value; input.value = ''; input.value = val;
                    }
                }
            }
        },

        // --- Actions ---
        navigateTo: (id) => App.Core.Store.pushCategory(id),
        goBack: () => App.Core.Store.popCategory(),
        search: (q) => App.Core.Store.setSearchQuery(q),
        clearSearch: () => App.Core.Store.clearSearch(),

        toggleMenu: (isOpen) => {
            if (typeof isOpen === 'undefined') {
                const current = App.Core.Store.getMenuState();
                App.Core.Store.setMenuState(!current);
            } else {
                App.Core.Store.setMenuState(isOpen);
            }
        },

        viewCart: () => {
            App.Core.Store.setView('cart');
        },

        goHome: () => {
            const user = App.Core.Store.getUser();
            // Reset filters and nav stack
            App.Core.Store.resetNav();
            // Automatically close menu
            App.Core.Store.setMenuState(false);

            if (user.role === 'admin') App.Core.Router.navigateTo('#admin');
            else if (user.role === 'delivery') App.Core.Router.navigateTo('#delivery');
            else if (user.role === 'supplier') App.Core.Router.navigateTo('#supplier');
            else {
                App.Core.Store.setView('home');
                App.Core.Router.navigateTo('#client');
            }
        },

        updateQuantity: (productId, providerId, delta) => {
            App.Core.Store.updateQuantity(productId, providerId, delta);
        },

        removeFromCart: (productId, providerId) => {
            App.Core.Store.removeFromCart(productId, providerId);
        },

        addOne: (productId) => {
            App.Controllers.Client.addToCart(productId);
        },

        viewProduct: (productId) => {
            const product = App.Data.Catalog.getProductById(productId);
            if (product) {
                // We'll set a special state in store or just hack the view for now
                App.Core.Store.setView({ name: 'product-detail', data: product });
            }
        },

        addToCart: (productId) => {
            const product = App.Data.Catalog.getProductById(productId);
            if (!product) return;
            // Get cheapest offer logic (duplicated from before, ideally in utils or domain helper)
            const availableOffers = product.offers.filter(o => o.stock > 0);
            availableOffers.sort((a, b) => a.price - b.price);
            const offer = availableOffers[0];

            if (offer) {
                App.Core.Store.addToCart(product, offer);
                this.showToast(`Agregado: ${product.name}`);
            }
        },

        checkout: () => {
            const phone = document.getElementById('whatsapp').value;
            if (!phone) { alert('Falta el teléfono'); return; }
            const cart = App.Core.Store.getCart();
            let msg = "¡Hola! Pedido:\n\n";
            cart.forEach(item => { msg += `- ${item.name} (${item.quantity}): $${item.price * item.quantity}\n`; });
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            msg += `\nTotal: $${total}\nTel: ${phone}`;
            window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');

            App.Core.Store.clearCart();
            this.goHome();
        },

        showToast: (msg) => {
            const toast = document.createElement('div');
            Object.assign(toast.style, {
                position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
                backgroundColor: 'var(--pico-primary)', color: 'white', padding: '10px 20px',
                borderRadius: '50px', zIndex: '1000'
            });
            toast.textContent = msg;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 2000);
        }
    };
})();
