var map = L.map('map', {});

// PAINEIS
map.createPane('pane_0').style.zIndex = 499;
map.createPane('pane_1').style.zIndex = 498;
map.createPane('pane_2').style.zIndex = 497;
map.createPane('pane_3').style.zIndex = 496;
map.createPane('pane_4').style.zIndex = 495;
map.createPane('pane_5').style.zIndex = 494;
map.createPane('pane_6').style.zIndex = 493;

var baseMaps = {};
var overlayMaps = {};

// CAMADAS BASE
var googleStreet = L.tileLayer('http://{s}.google.com/vt/lyrs=m,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
googleStreet.addTo(map);
baseMaps["Google Street"] = googleStreet;

var googleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
baseMaps['Google Satellite'] = googleSatellite;

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
baseMaps["Google Hybrid"] = googleHybrid;

// CAMADAS VETORIAIS
var _Jalan = L.geoJSON(_Jalan_data, {
			pane: 'pane_0',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 3.3000000000000003,
						color: 'rgba(219, 30, 42, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Jalan</h4><br/>'  +
							'<b>NAME:</b>&ensp;' + feature.properties['name'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Jalan'] = _Jalan;

var _Meninggal = L.geoJSON(_Meninggal_data, {
			pointToLayer: function(geoJsonPoint, latlng) {return L.circleMarker(latlng, {pane: 'pane_1'})},
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 6.6,
						weight: 1.0,
						color: 'rgba(0, 0, 0, 1.0)',
						fillColor: 'rgba(0, 0, 0, 1.0)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Meninggal</h4><br/>'  +
							'<b>KELURAHAN:</b>&ensp;' + feature.properties['Kelurahan'] + '<br/>' +
							'<b>KODE:</b>&ensp;' + feature.properties['Kode'] + '<br/>' +
							'<b>JML_MENGGL:</b>&ensp;' + feature.properties['jml_menggl'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Meninggal'] = _Meninggal;

var _ODP = L.geoJSON(_ODP_data, {
			pointToLayer: function(geoJsonPoint, latlng) {return L.circleMarker(latlng, {pane: 'pane_2'})},
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 4.0,
						weight: 2.0,
						color: 'rgba(179, 92, 21, 1.00)',
						fillColor: 'rgba(247, 128, 30, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: ODP</h4><br/>'  +
							'<b>JUMLAH ODP:</b>&ensp;' + feature.properties['Jumlah ODP'] + '<br/>' +
							'<b>KELURAHAN:</b>&ensp;' + feature.properties['Kelurahan'] + '<br/>' +
							'<b>KODE:</b>&ensp;' + feature.properties['Kode'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['ODP'] = _ODP;

var _PDP = L.geoJSON(_PDP_data, {
			pointToLayer: function(geoJsonPoint, latlng) {return L.circleMarker(latlng, {pane: 'pane_3'})},
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 4.0,
						weight: 2.0,
						color: 'rgba(247, 225, 55, 1.00)',
						fillColor: 'rgba(250, 255, 57, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: PDP</h4><br/>'  +
							'<b>KELURAHAN:</b>&ensp;' + feature.properties['Kelurahan'] + '<br/>' +
							'<b>KODE:</b>&ensp;' + feature.properties['Kode'] + '<br/>' +
							'<b>JML_PDP:</b>&ensp;' + feature.properties['jml_pdp'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['PDP'] = _PDP;

var _Positif = L.geoJSON(_Positif_data, {
			pointToLayer: function(geoJsonPoint, latlng) {return L.circleMarker(latlng, {pane: 'pane_4'})},
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						radius: 4.0,
						weight: 2.0,
						color: 'rgba(128, 17, 25, 1.00)',
						fillColor: 'rgba(219, 30, 42, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Positif</h4><br/>'  +
							'<b>JML_POSITI:</b>&ensp;' + feature.properties['Jml_positi'] + '<br/>' +
							'<b>KELURAHAN:</b>&ensp;' + feature.properties['Kelurahan'] + '<br/>' +
							'<b>KODE:</b>&ensp;' + feature.properties['Kode'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Positif'] = _Positif;

var _Sungai = L.geoJSON(_Sungai_data, {
			pane: 'pane_5',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 3.3000000000000003,
						color: 'rgba(72, 123, 182, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Sungai</h4><br/>'  +
							'<b>NAME:</b>&ensp;' + feature.properties['name'] + '<br/>' +
							'<b>WIDTH:</b>&ensp;' + feature.properties['width'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Sungai'] = _Sungai;

var _Kelurahan_Tangerang_Selatan = L.geoJSON(_Kelurahan_Tangerang_Selatan_data, {
			pane: 'pane_6',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(166, 221, 125, 0.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Kelurahan Tangerang Selatan</h4><br/>'  +
							'<b>KELURAHAN:</b>&ensp;' + feature.properties['Kelurahan'] + '<br/>' +
							'<b>SEX RATIO:</b>&ensp;' + feature.properties['Sex Ratio'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Kelurahan_Tangerang_Selatan'] = _Kelurahan_Tangerang_Selatan;

//Função que dá zoom sobre a feição clicada
function clickedFeature(e) {
	var feature = e.target;
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}
}

// LEGENDA
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'info legend');
	div.innerHTML = '<dl>';
	div.innerHTML += 	'<dt class="_Jalan_lgd"><svg class="legendIcon"><line x1="0" y1="9" x2="18" y2="9" stroke="rgba(219, 30, 42, 1.00)" stroke-width="3"></svg>Jalan</dt>';
	div.innerHTML += 	'<dt class="_Meninggal_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(0, 0, 0, 1.0)" stroke-width="2" fill="rgba(0, 0, 0, 1.0)"></svg>Meninggal</dt>';
	div.innerHTML += 	'<dt class="_ODP_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(179, 92, 21, 1.00)" stroke-width="2" fill="rgba(247, 128, 30, 1.00)"></svg>ODP</dt>';
	div.innerHTML += 	'<dt class="_PDP_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(247, 225, 55, 1.00)" stroke-width="2" fill="rgba(250, 255, 57, 1.00)"></svg>PDP</dt>';
	div.innerHTML += 	'<dt class="_Positif_lgd"><svg class="legendIcon"><circle cx="9" cy="9" r="5" stroke="rgba(128, 17, 25, 1.00)" stroke-width="2" fill="rgba(219, 30, 42, 1.00)"></svg>Positif</dt>';
	div.innerHTML += 	'<dt class="_Sungai_lgd"><svg class="legendIcon"><line x1="0" y1="9" x2="18" y2="9" stroke="rgba(72, 123, 182, 1.00)" stroke-width="3"></svg>Sungai</dt>';
	div.innerHTML += 	'<dt class="_Kelurahan_Tangerang_Selatan_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(166, 221, 125, 0.00)"></svg>Kelurahan Tangerang Selatan</dt>';
	div.innerHTML += '</dl>';
	return div
}
legend.addTo(map);

//ESCALA
L.control.scale({
	maxWidth: 250,
	imperial: false
}).addTo(map);

// CONTROLE DE CAMADAS
L.control.layers(baseMaps, overlayMaps, {
	position: 'topright',
	collapsed: false,
	sortLayers: true
}).addTo(map);

function layerON (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'block';
	}
}

function layerOFF (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'none';
	}
}

map.on('overlayadd', layerON);
map.on('overlayremove', layerOFF);

// CALCULA A AREA QUE COBRE TODAS AS CAMADAS
var bounds = {xmin: 180, ymin: 90, xmax: -180, ymax: -90};
for (var layer in overlayMaps) {
	var layerBounds = overlayMaps[layer].getBounds();
	if (bounds.xmin > layerBounds.getSouthWest().lng) {bounds.xmin = layerBounds.getSouthWest().lng};
	if (bounds.ymin > layerBounds.getSouthWest().lat) {bounds.ymin = layerBounds.getSouthWest().lat};
	if (bounds.xmax < layerBounds.getNorthEast().lng) {bounds.xmax = layerBounds.getNorthEast().lng};
	if (bounds.ymax < layerBounds.getNorthEast().lat) {bounds.ymax = layerBounds.getNorthEast().lat};
}
map.fitBounds([
	[bounds.ymin, bounds.xmin],
	[bounds.ymax, bounds.xmax]
]);
