(function () {
    App.Components.SearchBar = (value) => {
        return `
            <div class="search-wrapper">
                <input 
                    type="search" 
                    id="search" 
                    name="search" 
                    placeholder="Buscar productos..." 
                    value="${value}"
                    oninput="App.Controllers.Client.search(this.value)"
                    autocomplete="off"
                >
                ${value ? `
                    <button 
                        onclick="App.Controllers.Client.clearSearch()" 
                        class="search-clear" 
                        title="Limpiar búsqueda"
                    >
                        ✕
                    </button>
                ` : ''}
            </div>
        `;
    };
})();
