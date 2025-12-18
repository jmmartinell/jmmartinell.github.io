window.App = {
    Core: {},
    Data: {},
    Components: {},
    Controllers: {},
    Views: {
        Client: {},
        Admin: {},
        Delivery: {},
        Supplier: {}
    },
    // Helper to init without modules
    init: function () {
        console.log('App Initialized');
        if (this.Core.Router) {
            this.Core.Router.init();
        }
    }
};
