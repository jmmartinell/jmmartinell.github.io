(function () {
    App.Core.Router = {
        init: function () {
            window.addEventListener('hashchange', this.handleRoute.bind(this));
            this.handleRoute(); // Handle initial load
        },

        handleRoute: function () {
            const hash = window.location.hash || '#login'; // Default to login

            if (hash.startsWith('#client')) {
                App.Controllers.Client.init();
            } else if (hash.startsWith('#admin')) {
                App.Controllers.Admin.init();
            } else if (hash.startsWith('#delivery')) {
                App.Controllers.Delivery.init();
            } else if (hash.startsWith('#supplier')) {
                App.Controllers.Supplier.init();
            } else if (hash.startsWith('#login')) {
                App.Controllers.Auth.init();
            } else {
                window.location.hash = '#login';
            }
        },

        navigateTo: function (route) {
            window.location.hash = route;
        }
    };
})();
