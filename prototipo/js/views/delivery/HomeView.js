(function () {
    App.Views.Delivery.Home = (state) => {
        const headerHtml = App.Components.Header('Entregas', 0);
        const menuHtml = App.Components.Menu(App.Core.Store.getMenuState());
        return `
            ${menuHtml}
            ${headerHtml}
            <section class="container">
                <h1>Mis Entregas</h1>
                <article>
                    <p>No tienes entregas asignadas en este momento.</p>
                </article>
            </section>
        `;
    };
})();
