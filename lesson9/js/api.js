fetch("https://maps.googleapis.com/maps/api/js?key=AIzaSyChcfH2ffkBU-mqtryWx_zBXhNsWy-Ycgk");

google.maps.event.addDomListener(window, 'load', function() {
	var mapdiv = document.getElementById('user_gmap');
	var myOptions = {
	zoom: 3,
	center: new google.maps.LatLng(43.056709804020926,-84.92234630041509),
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	scaleControl: true
	};
	var map = new google.maps.Map(mapdiv, myOptions);
	var marker = new google.maps.Marker({
	position: new google.maps.LatLng(43.056709804020926,-84.92234630041509),
	map: map, 
	title: ''
	});
	var infowindow = new google.maps.InfoWindow({
	content: '<strong></strong><br />',
	size: new google.maps.Size(200, 200)
	});
	google.maps.event.addListener(marker, 'click', function() {
	infowindow.open(map,marker);
	});
	
});