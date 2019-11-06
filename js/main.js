// Define global variables:
let uri = window.location.search.substring(1);
let params = new URLSearchParams(uri);

// DEBUG:
//console.info("id=", params.get("id"));
//console.info("jsonFile=", params.get("jsonFile"));

new Vue({
    el: '#menuCityCouncilProjects',
    data: {
        json: {
            CityCouncilProjects: [
                {
                    "id": "menu_1",
                    "file": "SiauiaiCityCouncilProjects_2019-11-07_13_00_00.json",
                    name: 'Test 1',
                    "enabled": true
                },
                {
                    "id": "menu_2",
                    "file": "SiauiaiCityCouncilProjects_2019-11-07_13_00_00.json",
                    name: 'Test 2',
                    "enabled": true
                },
                {
                    "id": "menu_3",
                    "file": "SiauiaiCityCouncilProjects_2019-11-07_13_00_00.json",
                    name: 'Test 3',
                    "enabled": true
                }
            ]
        },
        activeClass: 'active',
        navLinkClass: 'nav-link',
        activeItem: null
    },
    created: function () {
        console.info("created");
//         fetch("data/index.json")
//             .then(r => r.json())
//             .then(json => {
//                 this.json = json;
//             });
    },
    methods: {
        isActive: function (menuItem) {
            return this.activeItem === menuItem
        },
        setActive(menuItem, event) {
            // vm = this;
            // Vue.set(this.$data, 'isActive', true)
            //let element = this.$ref[projectId];
            //console.info("projectId=",projectId);
            //console.info("event=",event);
            //console.info("event.target=",event.target);
            //console.info("this.id=",this.id);
            //console.info("this=",this);
            //console.info("member=",member);
            //console.info("element=",element);
            //console.info("this.$refs=",this.$refs[projectId]);
            //className: "nav-link"
            //<a href="../UI/modals.html" class="nav-link active">
            //console.info("this.$refs=", this.$refs[projectId]);
            //console.info("this.$refs=", this.$refs[projectId][0]);
            //this.$refs[projectId][0].addClass("active");
            this.activeItem = menuItem;
        }
    },
});
