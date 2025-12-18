(function () {
    App.Views.Auth = {};
    App.Views.Auth.Login = () => {
        return `
            <div style="
                display: flex; 
                flex-direction: column; 
                align-items: center; 
                justify-content: center; 
                height: 100vh;
                padding: 20px;
                background-color: var(--pico-card-background-color);
            ">
                <div style="
                    width: 100%;
                    max-width: 400px;
                    text-align: center;
                ">
                    <h1 style="margin-bottom: 2rem;">
                        <i class="ph ph-shopping-cart" style="font-size: 3rem; color: var(--pico-primary);"></i>
                        <br>
                        Gopelivery
                    </h1>
                    
                    <article>
                        <header><strong>Iniciar Sesión</strong></header>
                        <form onsubmit="event.preventDefault(); App.Controllers.Auth.login();">
                            <label for="role-select">Selecciona tu Rol</label>
                            <select id="role-select" required>
                                <option value="client" selected>Cliente</option>
                                <option value="admin">Puesto de Mando (Admin)</option>
                                <option value="delivery">Repartidor</option>
                                <option value="supplier">Proveedor</option>
                            </select>
                            
                            <button type="submit" class="contrast">Ingresar</button>
                        </form>
                    </article>
                </div>
            </div>
        `;
    };
})();
