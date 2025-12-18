(function () {
    // Estado Privatizado
    let state = {
        cart: [],
        navStack: ['root'],
        searchQuery: '',
        currentView: 'home', // 'home', 'cart'
        user: { name: 'Invitado', role: 'client', email: 'invitado@gopelivery.com' }
    };

    // Observer Patter for reactivity (Optional, but good practice)
    const listeners = [];
    const notify = () => listeners.forEach(l => l(state));

    App.Core.Store = {
        subscribe: (listener) => listeners.push(listener),
        getState: () => ({ ...state }), // Return copy

        // --- Cart Actions ---
        getCart: () => state.cart,
        getCartCount: () => state.cart.reduce((s, i) => s + i.quantity, 0),
        addToCart: (product, offer) => {
            const existingItem = state.cart.find(item => item.productId === product.id && item.providerId === offer.providerId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cart.push({
                    productId: product.id,
                    name: product.name,
                    providerId: offer.providerId,
                    price: offer.price,
                    quantity: 1
                });
            }
            notify();
        },
        removeFromCart: (productId, providerId) => {
            state.cart = state.cart.filter(item => !(item.productId === productId && item.providerId === providerId));
            notify();
        },
        updateQuantity: (productId, providerId, delta) => {
            const item = state.cart.find(item => item.productId === productId && item.providerId === providerId);
            if (item) {
                item.quantity += delta;
                if (item.quantity <= 0) {
                    state.cart = state.cart.filter(i => i !== item);
                }
            }
            notify();
        },
        clearCart: () => {
            state.cart = [];
            notify();
        },

        // --- Navigation Actions ---
        getNavStack: () => state.navStack,
        pushCategory: (categoryId) => {
            const index = state.navStack.indexOf(categoryId);
            if (index !== -1) {
                // Return to existing level (Hierarchy jump)
                state.navStack = state.navStack.slice(0, index + 1);
            } else {
                // New level
                state.navStack.push(categoryId);
            }
            state.searchQuery = ''; // Clear search on nav
            notify();
        },
        popCategory: () => {
            if (state.navStack.length > 1) {
                state.navStack.pop();
                state.searchQuery = '';
                notify();
            }
        },
        resetNav: () => {
            state.navStack = ['root'];
            state.searchQuery = '';
            notify();
        },

        // --- Search Actions ---
        getSearchQuery: () => state.searchQuery,
        setSearchQuery: (query) => {
            state.searchQuery = query;
            notify();
        },
        clearSearch: () => {
            state.searchQuery = '';
            notify();
        },

        // --- View Actions ---
        getView: () => state.currentView,
        setView: (view) => {
            state.currentView = view;
            notify();
        },

        // --- UI State ---
        getMenuState: () => state.isMenuOpen || false,
        setMenuState: (isOpen) => {
            state.isMenuOpen = isOpen;
            notify();
        },

        // --- User Actions ---
        getUser: () => state.user,
        setUser: (user) => {
            state.user = { ...state.user, ...user };
            notify();
        },

        // --- Session Reset ---
        totalReset: () => {
            state.cart = [];
            state.navStack = ['root'];
            state.searchQuery = '';
            state.isMenuOpen = false;
            state.user = { name: 'Invitado', role: 'client', email: 'invitado@gopelivery.com' };
            state.currentView = 'home';
            notify();
        }
    };
})();
