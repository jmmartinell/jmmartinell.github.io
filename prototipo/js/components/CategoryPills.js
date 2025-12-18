(function () {
    App.Components.CategoryPills = (currentId, categories, parentName = 'Todo', backAction = null) => {
        let html = '';

        // Back Pill
        if (backAction) {
            html += `
                <a href="#" class="category-pill active" onclick="${backAction}; return false;">
                    ← ${parentName}
                </a>
            `;
        } else {
            html += `<a href="#" class="category-pill active" onclick="App.Controllers.Client.navigateTo('root'); return false;">Todo</a>`;
        }

        // Category Pills
        html += categories.map(cat => `
            <a href="#" class="category-pill ${cat.id === currentId ? 'active' : ''}" onclick="App.Controllers.Client.navigateTo('${cat.id}'); return false;">
                ${cat.name}
            </a>
        `).join('');

        return `
            <div class="categories-scroll">
                ${html}
            </div>
        `;
    };
})();
