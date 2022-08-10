function alerta (){
    alert("¡Gracias por suscribirte! A partir de ahora vas a recibir nuestras novedades en tu email")
}

function initMap() {
const myLatLng = { lat:  -34.6501816, lng: -58.7564924  };
const map = new google.maps.Map(document.getElementById("map"), {
zoom: 16,
center: myLatLng,
  });

  const contentString = '<h2> Fc Accesorios</h2> <p> Reparacion y venta de accesorios de telefonia </p>  <a href="https://www.instagram.com/fc.accesorios_/?hl=es-la"> Encontranos en </a>';
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title : "Fc accesorios"
});

marker.addListener("click", () => {
  infowindow.open({
    anchor: marker,
    map,
    shouldFocus: false,
  });
});
}







  










