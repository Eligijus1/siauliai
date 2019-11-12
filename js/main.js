const testConst = 1;

let router = new VueRouter({
    mode: 'history',
    routes: []
});

console.info(testConst);

new Vue({
    router,
    el: '#menuCity',
    data: {
        json: {},
        activeClass: 'active',
        navLinkClass: 'nav-link',
        activeItem: null,
        currentRoute: window.location.pathname
    },
    mounted: function () {
        this.setActive(this.$route.query.id);
    },
    created: function () {
        fetch("https://stugys.lt/siauliai/data/index.json")
            .then(r => r.json())
            .then(json => {
                this.json = json;
            });
    },
    methods: {
        isActive: function (menuItem) {
            return this.activeItem === menuItem
        },
        setActive(menuItem, event) {
            this.activeItem = menuItem;
        }
    },
});
