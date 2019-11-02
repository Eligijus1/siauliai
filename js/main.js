let uri = window.location.search.substring(1);
let params = new URLSearchParams(uri);

// DEBUG:
console.info("id=", params.get("id"));
console.info("jsonFile=", params.get("jsonFile"));


// var AdminLTEOptions = {
//     //Enable sidebar expand on hover effect for sidebar mini
//     //This option is forced to true if both the fixed layout and sidebar mini
//     //are used together
//     sidebarExpandOnHover: true,
//     //BoxRefresh Plugin
//     enableBoxRefresh: true,
//     //Bootstrap.js tooltip
//     enableBSToppltip: true
// };


new Vue({
    el: '#menuCityCouncilProjects',
    data: {
        json: {CityCouncilProjects: [
            { "file": "SiauiaiCityCouncilProjects_2019-11-07_13_00_00.json", name: 'Test 1' },
            { "file": "SiauiaiCityCouncilProjects_2019-11-07_13_00_00.json", name: 'Test 2' },
            { "file": "SiauiaiCityCouncilProjects_2019-11-07_13_00_00.json", name: 'Test 3' }
        ]}
    }
});


// new Vue({
//     el: '#appDebug',
//     data: {
//         json: null
//     },
//     created: function () {
//         fetch("data/index.json")
//             .then(r => r.json())
//             .then(json => {
//                 this.json = json;
//             });
//     }
// });

