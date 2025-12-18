(function () {
    App.Components.Header = (title, cartCount = 0) => {
        return `
            <nav>
                <ul>
                    <li>
                        <a href="#" onclick="App.Controllers.Client.toggleMenu(); return false;" role="button" class="secondary outline" style="border:none; padding: 0 10px;">
                            <i class="ph ph-list" style="font-size: 1.5rem;"></i>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#" onclick="App.Controllers.Client.viewCart(); return false;" role="button" class="outline">
                            Carrito (${cartCount})
                        </a>
                    </li>
                </ul>
            </nav>
        `;
    };
})();
