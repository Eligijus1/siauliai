let uri = window.location.search.substring(1);
let params = new URLSearchParams(uri);

// DEBUG:
console.info("id=", params.get("id"));

new Vue({
    el: '#appDebug',
    data: {
        json: null
    },
    created: function () {
        fetch("data/index.json")
            .then(r => r.json())
            .then(json => {
                this.json = json;
            });
    }
});
