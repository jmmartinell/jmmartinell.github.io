(function () {
    App.Views.Client.Cart = (state) => {
        const { cart } = state;

        const headerHtml = `
            <nav>
                <ul><li><a href="#" onclick="App.Controllers.Client.goHome(); return false;">← Seguir Comprando</a></li></ul>
                <ul><li><strong>Tu Pedido</strong></li></ul>
            </nav>
        `;

        const cartCount = App.Core.Store.getCartCount();
        const menuHtml = App.Components.Menu(App.Core.Store.getMenuState());

        if (cart.length === 0) {
            return `
                ${menuHtml}
                ${headerHtml}
                <div class="text-center" style="margin-top: 50px;">
                    <h3>Tu carrito está vacío</h3>
                    <p>¡Agrega algo delicioso para comenzar!</p>
                </div>
            `;
        }

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        const itemsHtml = cart.map(item => `
            <article style="padding: 15px; margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <div>
                        <strong>${item.name}</strong>
                        <br>
                        <small style="color: #666;">Precio: $${item.price}</small>
                    </div>
                    <div style="text-align: right;">
                        <strong>$${item.price * item.quantity}</strong>
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center; border: 1px solid #ccc; border-radius: 5px; overflow: hidden;">
                        <button class="outline secondary" style="border:none; padding: 5px 12px; margin: 0;" onclick="App.Controllers.Client.updateQuantity('${item.productId}', '${item.providerId}', -1); return false;">-</button>
                        <span style="font-weight: bold; padding: 0 10px; min-width: 30px; text-align: center;">${item.quantity}</span>
                        <button class="outline secondary" style="border:none; padding: 5px 12px; margin: 0;" onclick="App.Controllers.Client.updateQuantity('${item.productId}', '${item.providerId}', 1); return false;">+</button>
                    </div>
                    
                    <a href="#" class="secondary" onclick="App.Controllers.Client.removeFromCart('${item.productId}', '${item.providerId}'); return false;" style="color: #d81b60; font-size: 1.2rem;" aria-label="Eliminar">
                        <i class="ph ph-trash"></i>
                    </a>
                </div>
            </article>
        `).join('');

        return `
            ${menuHtml}
            ${headerHtml}
            <section>
                ${itemsHtml}
                <hr>
                <div style="display: flex; justify-content: space-between; font-size: 1.2rem; margin-bottom: 20px;">
                    <strong>Total</strong>
                    <strong>$${total}</strong>
                </div>
                 <label for="whatsapp">Teléfono Whatsapp (Requerido)
                    <input type="tel" id="whatsapp" required>
                </label>
                <button onclick="App.Controllers.Client.checkout()" class="contrast">Pedir por WhatsApp</button>
            </section>
        `;
    };
})();
