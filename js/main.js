

let uri = window.location.search.substring(1);
let params = new URLSearchParams(uri);

// DEBUG:
console.info("id=",params.get("id"));
