'use strict';

function initMap() {
	let map, coords, styles, marker, info, content;
	coords = {
			lat: 40.358187,  
			lng:  -74.670755
	};

	content = '<h1 class="info-title">I\'m here</h1>';

	styles = [
		{
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#f5f5f5"
			}
		  ]
		},
		{
		  "elementType": "labels.icon",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#616161"
			}
		  ]
		},
		{
		  "elementType": "labels.text.stroke",
		  "stylers": [
			{
			  "color": "#f5f5f5"
			}
		  ]
		},
		{
		  "featureType": "administrative.land_parcel",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#bdbdbd"
			}
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#eeeeee"
			}
		  ]
		},
		{
		  "featureType": "poi",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#757575"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#e5e5e5"
			}
		  ]
		},
		{
		  "featureType": "poi.park",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#9e9e9e"
			}
		  ]
		},
		{
		  "featureType": "road",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#ffffff"
			}
		  ]
		},
		{
		  "featureType": "road.arterial",
		  "elementType": "labels",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "road.arterial",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#757575"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#dadada"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "labels",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "road.highway",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#616161"
			}
		  ]
		},
		{
		  "featureType": "road.local",
		  "stylers": [
			{
			  "visibility": "off"
			}
		  ]
		},
		{
		  "featureType": "road.local",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#9e9e9e"
			}
		  ]
		},
		{
		  "featureType": "transit.line",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#e5e5e5"
			}
		  ]
		},
		{
		  "featureType": "transit.station",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#eeeeee"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "geometry",
		  "stylers": [
			{
			  "color": "#c9c9c9"
			}
		  ]
		},
		{
		  "featureType": "water",
		  "elementType": "labels.text.fill",
		  "stylers": [
			{
			  "color": "#9e9e9e"
			}
		  ]
		}
	  ]

    map = new google.maps.Map(document.getElementById('map'), {
	    center: coords,
		zoom: 13,
		styles: styles,
		disableDefaultUI: true,
		zoomControl: true
		
	});

	marker = new google.maps.Marker({
		position: coords, 
		map: map, 
		icon: 'images/marker.png', 
		draggable: true});

	info = new google.maps.InfoWindow({
		content: content
	});

	marker.addListener('click', function() {
		info.open(map, marker);
	});
}

(function($){
	$(document).ready(function() {
		// Code
		//Slider
		$('.slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: true,
			responsive: [
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 680,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]

		});

		//Scrol function
		let sections = {
			header: $('#header').offset().top,
			info: $('#info').offset().top,
			slids: $('#slids').offset().top,
			map: $('#map').offset().top,
		}

		$(window).scroll(function() {
			let scrTop = $(document).scrollTop() + ($(window).height() / 3),
				pos;

			if (scrTop < sections.info) {
				pos = 'header';
			} else if (scrTop >= sections.info && scrTop < sections.slids) {
				pos = 'info';
			} else if (scrTop >= sections.slids && scrTop < sections.map) {
				pos = 'slids';
			} else if (scrTop >= sections.map) {
				pos = 'map';
			}
			console.log($(document).height(), $('#map').offset().top, pos);

			$('.fixed-nav').find('.active').removeClass('active');
			$('.fixed-nav').find(`a[data-menu=${pos}]`).addClass('active');
		});

		//fancybox
		$('.photo').fancybox({
			buttons: [
				"fullScreen",
				"download",
				"thumbs",
				"close"
			],
			animationEffect: "zoom-in-out",
			animationDuration: 900,
			transitionEffect: "circular",
			transitionDuration: 800,
			loop: true,
		});
	});
})(jQuery);
