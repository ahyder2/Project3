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
var index=1;
picDisplay(index);
function next(n){
    picDisplay(index += n);
}
function current(n){
    picDisplay(index = n);
}
function picDisplay(n){
    var k;
    var pics = document.getElementByClassName("overwatch");
    if (n>pics.length) {
        index = 1
    }
    if (n<1) {
        index = pics.length
    }
    for (k = 0; k <pics.length; k++){
        pics[k].style.display = 'none';
    }
    if(pics.length > 0){
        pics[index-1].style.display = 'block';
    }
}

