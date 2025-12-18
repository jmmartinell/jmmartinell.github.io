(function () {
    App.Views.Admin.Dashboard = (state) => {
        const headerHtml = App.Components.Header('Puesto de Mando', 0);
        const menuHtml = App.Components.Menu(App.Core.Store.getMenuState());
        return `
            ${menuHtml}
            ${headerHtml}
            <section class="container">
                <h1>Panel de Administración</h1>
                <p>Bienvenido al centro de control del Marketplace.</p>
                <article>
                    <header>Resumen de Pedidos</header>
                    <p>No hay pedidos pendientes actualmente (Simulado).</p>
                </article>
            </section>
        `;
    };
})();
