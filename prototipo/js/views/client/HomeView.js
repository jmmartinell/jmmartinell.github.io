(function () {
    App.Views.Client.Home = (state) => {
        const { navStack, searchQuery, cart } = state;
        const currentId = navStack[navStack.length - 1];

        // --- Header ---
        let title = 'Gopelivery';
        // Title logic removed as requested (always generic)

        const headerHtml = App.Components.Header(title, App.Core.Store.getCartCount());

        // --- Search Bar ---
        const searchHtml = App.Components.SearchBar(searchQuery);

        // --- Category Pills ---
        let pillsHtml = '';
        if (!searchQuery) {
            let children = App.Data.Catalog.getSubcategories(currentId === 'root' ? null : currentId);

            // If leaf, show siblings
            if (children.length === 0 && currentId !== 'root') {
                const currentCat = App.Data.Catalog.getCategoryById(currentId);
                if (currentCat && currentCat.parentId) {
                    children = App.Data.Catalog.getSubcategories(currentCat.parentId); // Siblings
                }
            }

            // Parent info for "Back" pill
            let parentName = 'Todo';
            let pillBackAction = null;

            if (currentId !== 'root') {
                const currentCat = App.Data.Catalog.getCategoryById(currentId);
                // Normalize parentId: if null/undefined, it means we go back to root
                const parentId = (currentCat && currentCat.parentId) ? currentCat.parentId : 'root';

                if (parentId !== 'root') {
                    const p = App.Data.Catalog.getCategoryById(parentId);
                    parentName = p ? p.name : 'Atrás';
                }
                // Fix: Use navigateTo for hierarchical jump
                pillBackAction = `App.Controllers.Client.navigateTo('${parentId}')`;
            }

            pillsHtml = App.Components.CategoryPills(currentId, children, parentName, pillBackAction);
        }

        // --- Product List ---
        let products = [];
        let emptyMessage = '';

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            products = App.Data.Catalog.getAllProducts().filter(p => p.name.toLowerCase().includes(q));
            emptyMessage = 'No se encontraron productos.';
        } else {
            const relevantIds = App.Data.Catalog.getDescendantCategoryIds(currentId);
            products = App.Data.Catalog.getAllProducts().filter(p => relevantIds.includes(p.category));
            emptyMessage = 'No hay productos en esta sección.';
        }

        let listHtml = '';
        if (products.length === 0) {
            listHtml = `<p class="text-center" style="margin-top:20px; color: var(--pico-muted-color);">${emptyMessage}</p>`;
        } else {
            listHtml = `<div class="product-list">${products.map(p => App.Components.ProductCard(p)).join('')}</div>`;
        }

        const scrollTopHtml = `
            <a href="#" class="scroll-top-btn" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;" aria-label="Volver arriba">
                <i class="ph ph-arrow-up" style="font-size: 1.5rem;"></i>
            </a>
        `;

        const menuHtml = App.Components.Menu(App.Core.Store.getMenuState());

        return `
            ${menuHtml}
            ${headerHtml}
            ${searchHtml}
            ${pillsHtml}
            ${listHtml}
            ${scrollTopHtml}
        `;
    };
})();
