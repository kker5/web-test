
function encodeURIIfNotEmpty(url) {
    return url ? encodeURIComponent(url) : url
}

function decodeURIIfNotEmpty(url) {
    return url ? decodeURIComponent(url) : url
}