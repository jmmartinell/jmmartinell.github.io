(function () {
    App.Controllers.Supplier = {
        init: function () {
            App.Core.Store.subscribe((state) => {
                this.render(state);
            });
            this.render(App.Core.Store.getState());
        },

        render: function (state) {
            const hash = window.location.hash;
            if (!hash.startsWith('#supplier')) return;

            const app = document.getElementById('app');
            app.innerHTML = App.Views.Supplier.Home(state);
        }
    };
})();
