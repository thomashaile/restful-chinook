const artistSearch = async(req, res) => {
    const result = await fetch('/api/artists/' + req)
    const data = await result.json();

    var str = '<ol>'
    data.forEach(function(list) {
        str += "<li>" + JSON.stringify(list) + '</li>';
    });
    str += '</ol>';
    document.getElementById("display").innerHTML = str;

}
const artistDelete = async(req, res) => {
    const result = await fetch('/api/artists/' + req, {
        method: 'DELETE'
    })
    const data = await result.json();

    var str = '<ol>'

    str += '<li class="delete">' + JSON.stringify(data) + '</li>';

    str += '</ol>';
    document.getElementById("display").innerHTML = str;

}
const viewAlbums = async() => {
    const result = await fetch('/api/albums')
    const data = await result.json();
    var str = '<ol>'
    data.forEach(function(list) {
        str += '<li>' + JSON.stringify(list) + '</li>';
    });
    str += '</ol>';
    document.getElementById("display").innerHTML = str;
}
const viewPlaylists = async() => {
    const result = await fetch('/api/playlists')
    const data = await result.json();
    var str = '<ol>'
    data.forEach(function(list) {
        str += '<li>' + JSON.stringify(list) + '</li>';
    });
    str += '</ol>';
    document.getElementById("display").innerHTML = str;
}
const viewMediatypes = async() => {
    const result = await fetch('/api/media-types')
    const data = await result.json();
    var str = '<ol>'
    data.forEach(function(list) {
        str += '<li>' + JSON.stringify(list) + '</li>';
    });
    str += '</ol>';
    document.getElementById("display").innerHTML = str;
}
const viewTracks = async() => {
    const result = await fetch('/api/tracks');
    const data = await result.json();
    var str = '<ol>'
    data.forEach(function(list) {
        str += '<li>' + JSON.stringify(list) + '</li>';
    });
    str += '</ol>';
    document.getElementById("display").innerHTML = str;
}