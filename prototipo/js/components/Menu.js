(function () {
    App.Components.Menu = (isOpen) => {
        const user = App.Core.Store.getUser();
        const userName = user.name;
        const userEmail = user.email;

        const overlayClass = isOpen ? 'drawer-overlay open' : 'drawer-overlay';
        const drawerClass = isOpen ? 'drawer open' : 'drawer';

        // Helper to close when clicking overlay
        const closeAction = 'App.Controllers.Client.toggleMenu(false)';

        return `
            <div class="${overlayClass}" onclick="${closeAction}"></div>
            <aside class="${drawerClass}">
                <div class="drawer-header">
                    <div class="drawer-avatar">
                        <i class="ph ph-user"></i>
                    </div>
                    <div>
                        <strong>${userName}</strong>
                        <br>
                        <small>${userEmail}</small>
                    </div>
                </div>
                <div class="drawer-content">
                    <a href="#" class="drawer-item" onclick="${closeAction}; App.Controllers.Client.goHome(); return false;">
                        <i class="ph ph-house"></i> Inicio
                    </a>
                    <a href="#" class="drawer-item" onclick="${closeAction}; App.Controllers.Client.viewCart(); return false;">
                        <i class="ph ph-shopping-cart"></i> Mi Carrito
                    </a>
                     <a href="#" class="drawer-item" onclick="${closeAction}; return false;">
                        <i class="ph ph-gear"></i> Configuración
                    </a>
                    <hr>
                    <a href="#" class="drawer-item" onclick="${closeAction}; App.Core.Router.navigateTo('#login'); return false;">
                        <i class="ph ph-sign-out"></i> Cerrar Sesión
                    </a>
                </div>
            </aside>
        `;
    };
})();
