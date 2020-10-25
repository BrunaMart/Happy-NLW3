// creat map
const map = L.map('mapid').setView([-22.4867299,-44.1257514], 15); 

// creat and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
).addTo(map);

// creat icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {

    //create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/host2?id=${id}"><img src="/images/arrow-white.svg"> </a>`)

    // create and add marker
    L
    .marker([lat,lng], {icon})
    .addTo(map)
    .bindPopup(popup)
}

const hostSpan = document.querySelectorAll('.host span')

hostSpan.forEach( span => {
    const host2 = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(host2)
})