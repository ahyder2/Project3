var map;
function initMap(){
	map = new google.maps.Map(document.getElementById('mapcontainer'), {
	center: {lat: 41.833895, lng: -87.627395},
	zoom: 13,
	styles: [
	{elementType: 'geometry', stylers: [{color: '#5B14C2'}]},
	{elementType: 'labels.text.stroke', stylers: [{color: '5B14C2'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#852E5'}]},
    {
    	featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#4B0D9A'}]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#4B0D9A'}]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#0F540F'}]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#47BD62'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#556985'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#141D29'}]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#8681EB'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#092AA6'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#3A5987'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#236CDA'}]
    },
    {
     	featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#1A3968'}]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#7663D5'}]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#5C6EFF'}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#2B42FF'}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#5C6EFF'}]
    }
	]
	}
	)
}
var picIndex = 1;
picDisplay(picIndex);

function nextPic(n) {
    picDisplay(picIndex += n);
}
function picDisplay(n) {
    var k;
    var pics = document.getElementByClassName("sliderCurrent");
    if (n > pics.length) {picIndex = 1}
    if (n < 1) {picIndex = pics.length}
    for (k = 0; k < pics.length; k++){
        pics[k].style.display = "none";
    }
    pics[picIndex - 1].style.display = "block";
}

