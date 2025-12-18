(function () {
    App.Views.Supplier.Home = (state) => {
        const headerHtml = App.Components.Header('Inventario', 0);
        const menuHtml = App.Components.Menu(App.Core.Store.getMenuState());
        return `
            ${menuHtml}
            ${headerHtml}
            <section class="container">
                <h1>Panel de Proveedor</h1>
                <article>
                    <p>Gestiona tus productos y existencias aquí.</p>
                </article>
            </section>
        `;
    };
})();
