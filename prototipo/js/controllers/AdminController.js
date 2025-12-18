(function () {
    App.Controllers.Admin = {
        init: function () {
            // Subscribe to store changes to re-render
            App.Core.Store.subscribe((state) => {
                this.render(state);
            });
            this.render(App.Core.Store.getState());
        },

        render: function (state) {
            const hash = window.location.hash;
            if (!hash.startsWith('#admin')) return;

            const app = document.getElementById('app');
            app.innerHTML = App.Views.Admin.Dashboard(state);
        }
    };
})();
