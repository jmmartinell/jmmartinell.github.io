(function () {
    App.Controllers.Auth = {
        init: function () {
            const hash = window.location.hash || '#login';
            if (!hash.startsWith('#login')) return;

            // Ensure session is fresh when reaching login
            App.Core.Store.totalReset();
            const app = document.getElementById('app');
            app.innerHTML = App.Views.Auth.Login();
        },

        login: function () {
            const roleSelect = document.getElementById('role-select');
            const role = roleSelect.value;

            // Set user in store
            const userProfiles = {
                client: { name: 'Cliente Demo', role: 'client', email: 'cliente@gopelivery.com' },
                admin: { name: 'Administrador', role: 'admin', email: 'admin@gopelivery.com' },
                delivery: { name: 'Mensajero 01', role: 'delivery', email: 'delivery@gopelivery.com' },
                supplier: { name: 'Tienda Central', role: 'supplier', email: 'supplier@gopelivery.com' }
            };

            App.Core.Store.setUser(userProfiles[role]);

            // Redirect based on role
            switch (role) {
                case 'client':
                    App.Core.Router.navigateTo('#client');
                    break;
                case 'admin':
                    App.Core.Router.navigateTo('#admin');
                    break;
                case 'delivery':
                    App.Core.Router.navigateTo('#delivery');
                    break;
                case 'supplier':
                    App.Core.Router.navigateTo('#supplier');
                    break;
                default:
                    alert('Rol no reconocido');
            }
        }
    };
})();
