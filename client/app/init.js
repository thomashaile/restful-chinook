export const init = async() => {

    const result = await fetch('/api/artists');
    const data = await result.json();
    const root = document.getElementById('root');
    const artist = document.createElement('P');
    artist.id = "display";
    var str = '<ol>'
    data.forEach(function(list) {
        str += '<li>' + JSON.stringify(list) + '</li>';
    });
    str += '</ol>';
    artist.innerHTML = str;
    root.appendChild(artist);
};