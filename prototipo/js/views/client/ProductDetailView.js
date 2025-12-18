(function () {
    App.Views.Client.ProductDetail = (product) => {
        // --- State/Data ---
        const cartCount = App.Core.Store.getCartCount();
        const productName = product ? product.name : 'Producto Demo';
        const productId = product ? product.id : '';

        // --- Header ---
        const headerHtml = App.Components.Header('Detalles', cartCount);

        // Price calculation
        let price = '---';
        if (product && product.offers && product.offers.length > 0) {
            const best = [...product.offers].sort((a, b) => a.price - b.price)[0];
            price = `$${best.price}`;
        }

        const menuHtml = App.Components.Menu(App.Core.Store.getMenuState());

        // Check if in cart
        const cart = App.Core.Store.getCart();
        const cartItem = cart.find(item => item.productId === productId);
        const q = cartItem ? cartItem.quantity : 0;

        let footerActionHtml = '';
        if (q > 0) {
            footerActionHtml = `
                <div style="display: flex; align-items: center; border: 1px solid #ccc; border-radius: 5px; height: 100%;">
                    <button class="outline secondary" style="border:none; padding: 10px 15px; margin:0;" onclick="App.Controllers.Client.updateQuantity('${productId}', '${cartItem.providerId}', -1); return false;">-</button>
                    <span style="font-weight: bold; padding: 0 15px; min-width: 40px; text-align: center;">${q}</span>
                    <button class="outline secondary" style="border:none; padding: 10px 15px; margin:0;" onclick="App.Controllers.Client.updateQuantity('${productId}', '${cartItem.providerId}', 1); return false;">+</button>
                </div>
                <button style="flex: 1; margin: 0;" onclick="App.Controllers.Client.viewCart(); return false;">Ir al Carrito</button>
            `;
        } else {
            footerActionHtml = `
                <div style="display: flex; align-items: center; border: 1px solid #ccc; border-radius: 5px; height: 100%; opacity: 0.5;">
                    <button class="outline secondary" style="border:none; padding: 10px 15px; margin:0;" disabled>-</button>
                    <span style="font-weight: bold; padding: 0 15px; min-width: 40px; text-align: center;">1</span>
                    <button class="outline secondary" style="border:none; padding: 10px 15px; margin:0;" disabled>+</button>
                </div>
                <button style="flex: 1; margin: 0;" onclick="App.Controllers.Client.addToCart('${productId}'); return false;">Agregar al Carrito</button>
            `;
        }

        return `
            <style>
                .carousel {
                    display: flex;
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;
                    gap: 10px;
                    padding: 20px;
                    background: #f9f9f9;
                    margin-bottom: 10px;
                }
                .carousel-item {
                    flex: 0 0 100%;
                    scroll-snap-align: center;
                    height: 300px;
                    background: #ddd;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    color: #888;
                }
                .carousel-indicators {
                    display: flex;
                    justify-content: center;
                    gap: 5px;
                    margin-bottom: 20px;
                }
                .indicator {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #ccc;
                }
                .indicator.active { background: var(--pico-primary); }
                
                .product-info { padding: 0 20px; margin-bottom: 120px; }
                .price-large { font-size: 1.8rem; color: #b12704; font-weight: bold; }
                .price-label { color: #565959; font-size: 0.9rem; }
                
                details { 
                    border-bottom: 1px solid #e7e7e7; 
                    padding: 15px 0; 
                }
                summary { font-weight: bold; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;}
                summary::after { content: '+'; font-size: 1.2rem; }
                details[open] summary::after { content: '-'; }
                
                .sticky-footer {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background: white;
                    padding: 15px 20px;
                    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
                    display: flex;
                    gap: 15px;
                    align-items: center;
                    z-index: 999;
                    height: 80px;
                }
            </style>
            ${menuHtml}
            ${headerHtml}
            <div style="padding: 10px 20px; background: white; border-bottom: 1px solid #eee; display: flex; align-items: center;">
                <a href="#" onclick="App.Controllers.Client.goHome(); return false;" style="text-decoration: none; color: var(--pico-primary); display: flex; align-items: center; gap: 5px; font-weight: bold;">
                    <i class="ph ph-arrow-left"></i> Volver al catálogo
                </a>
            </div>
            
            <!-- 1. Carousel -->
            <div class="carousel">
                <div class="carousel-item" style="background: #e3f2fd;"><i class="ph ph-image"></i> 1</div>
                <div class="carousel-item" style="background: #f3e5f5;"><i class="ph ph-image"></i> 2</div>
                <div class="carousel-item" style="background: #e8f5e9;"><i class="ph ph-image"></i> 3</div>
                <div class="carousel-item" style="background: #fff3e0;"><i class="ph ph-image"></i> 4</div>
                <div class="carousel-item" style="background: #ffebee;"><i class="ph ph-image"></i> 5</div>
            </div>
            <div class="carousel-indicators">
                <div class="indicator active"></div>
                <div class="indicator"></div>
                <div class="indicator"></div>
                <div class="indicator"></div>
                <div class="indicator"></div>
            </div>

            <!-- 2. Header Info -->
            <div class="product-info">
                <h2 style="margin-bottom: 5px;">${productName}</h2>
                <div>
                    <span class="price-large">${price}</span>
                    <span class="price-label">Precio por libra</span>
                </div>
                
                <!-- 3. Details Accordions -->
                <details open>
                    <summary>Lo más destacado</summary>
                    <ul style="margin-top: 10px; padding-left: 20px;">
                        <li>Frescura garantizada por nuestros proveedores locales.</li>
                        <li>Seleccionado cuidadosamente bajo estándares de calidad.</li>
                        <li>Envío rápido disponible en tu zona.</li>
                    </ul>
                </details>

                <details>
                    <summary>Acerca de este artículo</summary>
                    <table style="margin-top: 10px; width: 100%; font-size: 0.9rem;">
                        <tr><td><strong>Categoría:</strong></td><td>Alimentos Frescos</td></tr>
                        <tr><td><strong>Origen:</strong></td><td>Nacional</td></tr>
                        <tr><td><strong>Peso aprox:</strong></td><td>1 Libra</td></tr>
                        <tr><td><strong>Disponible:</strong></td><td>Sí</td></tr>
                    </table>
                </details>

                <details>
                    <summary>Descripción del Producto</summary>
                    <p style="margin-top: 10px; color: #565959;">
                        Este producto ha sido seleccionado de los mejores lotes disponibles. 
                        Ideal para el consumo diario en el hogar. Mantenemos una estrecha relación 
                        con los proveedores para asegurar que recibas siempre lo mejor en tu mesa.
                        <br><br>
                        Disfruta de la calidad y el sabor que solo Gopelivery te puede ofrecer.
                    </p>
                </details>
            </div>

            <!-- 4. Sticky Footer -->
            <div class="sticky-footer">
                ${footerActionHtml}
            </div>
        `;
    };
})();
