function initMap() {
	
  var myLatLng = {lat: 41.878876, lng: -87.635915};
	
  var map = new google.maps.Map(codument.getElementById('map'), {
	center: myLatLng,
	zoom: 14
  });
  
  var marker = new google.maps.Marker({
	map: map,
	position: myLatLng,
	title: 'Willis Tower'
  });
}

document.addEventListener('DOMContentLoaded', function() {
	
  initMap();
});