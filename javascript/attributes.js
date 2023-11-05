function filter(evt, column) {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = evt.target;
	filter = input.value.toUpperCase();
	table = evt.path[4];
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 2; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[column];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function goToMap(layer, featureID){
	var feature = layer._layers[featureID];
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}

	document.getElementById('mapBtn').click();
	feature.openPopup();

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	};
}

tableHTML__Jalan = '<table id="_Jalan_table">';
tableHTML__Jalan += 	'<tr>';
tableHTML__Jalan += 		'<th>Map</th>';
tableHTML__Jalan += 		'<th>layer</th>';
tableHTML__Jalan += 		'<th>name</th>';
tableHTML__Jalan += 	'</tr>';
tableHTML__Jalan += 	'<tr>';
tableHTML__Jalan += 		'<td></td>';
tableHTML__Jalan += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Cari layer"></td>';
tableHTML__Jalan += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Cari name"></td>';
tableHTML__Jalan += 	'</tr>';

var _Jalan_IDs = Object.keys(_Jalan._layers);
for (var i=0; i < _Jalan_IDs.length; i++){
	var feature = _Jalan._layers[_Jalan_IDs[i]].feature;
	tableHTML__Jalan += '<tr>';
	tableHTML__Jalan += 	'<td onclick="goToMap(_Jalan, ' + _Jalan_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Jalan += 	'<td>' + feature.properties['layer'] + '</td>';
	tableHTML__Jalan += 	'<td>' + feature.properties['name'] + '</td>';
	tableHTML__Jalan += '</tr>';
}

tableHTML__Jalan += '</table>';
document.getElementById('_Jalan_tab').innerHTML = tableHTML__Jalan;

tableHTML__Meninggal = '<table id="_Meninggal_table">';
tableHTML__Meninggal += 	'<tr>';
tableHTML__Meninggal += 		'<th>Map</th>';
tableHTML__Meninggal += 		'<th>Kelurahan</th>';
tableHTML__Meninggal += 		'<th>Kode</th>';
tableHTML__Meninggal += 		'<th>jml_menggl</th>';
tableHTML__Meninggal += 	'</tr>';
tableHTML__Meninggal += 	'<tr>';
tableHTML__Meninggal += 		'<td></td>';
tableHTML__Meninggal += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Cari Kelurahan"></td>';
tableHTML__Meninggal += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Cari Kode"></td>';
tableHTML__Meninggal += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Cari jml_menggl"></td>';
tableHTML__Meninggal += 	'</tr>';

var _Meninggal_IDs = Object.keys(_Meninggal._layers);
for (var i=0; i < _Meninggal_IDs.length; i++){
	var feature = _Meninggal._layers[_Meninggal_IDs[i]].feature;
	tableHTML__Meninggal += '<tr>';
	tableHTML__Meninggal += 	'<td onclick="goToMap(_Meninggal, ' + _Meninggal_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Meninggal += 	'<td>' + feature.properties['Kelurahan'] + '</td>';
	tableHTML__Meninggal += 	'<td>' + feature.properties['Kode'] + '</td>';
	tableHTML__Meninggal += 	'<td>' + feature.properties['jml_menggl'] + '</td>';
	tableHTML__Meninggal += '</tr>';
}

tableHTML__Meninggal += '</table>';
document.getElementById('_Meninggal_tab').innerHTML = tableHTML__Meninggal;

tableHTML__ODP = '<table id="_ODP_table">';
tableHTML__ODP += 	'<tr>';
tableHTML__ODP += 		'<th>Map</th>';
tableHTML__ODP += 		'<th>Jumlah ODP</th>';
tableHTML__ODP += 		'<th>Kelurahan</th>';
tableHTML__ODP += 		'<th>Kode</th>';
tableHTML__ODP += 	'</tr>';
tableHTML__ODP += 	'<tr>';
tableHTML__ODP += 		'<td></td>';
tableHTML__ODP += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Cari Jumlah ODP"></td>';
tableHTML__ODP += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Cari Kelurahan"></td>';
tableHTML__ODP += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Cari Kode"></td>';
tableHTML__ODP += 	'</tr>';

var _ODP_IDs = Object.keys(_ODP._layers);
for (var i=0; i < _ODP_IDs.length; i++){
	var feature = _ODP._layers[_ODP_IDs[i]].feature;
	tableHTML__ODP += '<tr>';
	tableHTML__ODP += 	'<td onclick="goToMap(_ODP, ' + _ODP_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__ODP += 	'<td>' + feature.properties['Jumlah ODP'] + '</td>';
	tableHTML__ODP += 	'<td>' + feature.properties['Kelurahan'] + '</td>';
	tableHTML__ODP += 	'<td>' + feature.properties['Kode'] + '</td>';
	tableHTML__ODP += '</tr>';
}

tableHTML__ODP += '</table>';
document.getElementById('_ODP_tab').innerHTML = tableHTML__ODP;

tableHTML__PDP = '<table id="_PDP_table">';
tableHTML__PDP += 	'<tr>';
tableHTML__PDP += 		'<th>Map</th>';
tableHTML__PDP += 		'<th>Kelurahan</th>';
tableHTML__PDP += 		'<th>Kode</th>';
tableHTML__PDP += 		'<th>jml_pdp</th>';
tableHTML__PDP += 	'</tr>';
tableHTML__PDP += 	'<tr>';
tableHTML__PDP += 		'<td></td>';
tableHTML__PDP += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Cari Kelurahan"></td>';
tableHTML__PDP += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Cari Kode"></td>';
tableHTML__PDP += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Cari jml_pdp"></td>';
tableHTML__PDP += 	'</tr>';

var _PDP_IDs = Object.keys(_PDP._layers);
for (var i=0; i < _PDP_IDs.length; i++){
	var feature = _PDP._layers[_PDP_IDs[i]].feature;
	tableHTML__PDP += '<tr>';
	tableHTML__PDP += 	'<td onclick="goToMap(_PDP, ' + _PDP_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__PDP += 	'<td>' + feature.properties['Kelurahan'] + '</td>';
	tableHTML__PDP += 	'<td>' + feature.properties['Kode'] + '</td>';
	tableHTML__PDP += 	'<td>' + feature.properties['jml_pdp'] + '</td>';
	tableHTML__PDP += '</tr>';
}

tableHTML__PDP += '</table>';
document.getElementById('_PDP_tab').innerHTML = tableHTML__PDP;

tableHTML__Positif = '<table id="_Positif_table">';
tableHTML__Positif += 	'<tr>';
tableHTML__Positif += 		'<th>Map</th>';
tableHTML__Positif += 		'<th>Jml_positi</th>';
tableHTML__Positif += 		'<th>Kelurahan</th>';
tableHTML__Positif += 		'<th>Kode</th>';
tableHTML__Positif += 	'</tr>';
tableHTML__Positif += 	'<tr>';
tableHTML__Positif += 		'<td></td>';
tableHTML__Positif += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Cari Jml_positi"></td>';
tableHTML__Positif += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Cari Kelurahan"></td>';
tableHTML__Positif += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Cari Kode"></td>';
tableHTML__Positif += 	'</tr>';

var _Positif_IDs = Object.keys(_Positif._layers);
for (var i=0; i < _Positif_IDs.length; i++){
	var feature = _Positif._layers[_Positif_IDs[i]].feature;
	tableHTML__Positif += '<tr>';
	tableHTML__Positif += 	'<td onclick="goToMap(_Positif, ' + _Positif_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Positif += 	'<td>' + feature.properties['Jml_positi'] + '</td>';
	tableHTML__Positif += 	'<td>' + feature.properties['Kelurahan'] + '</td>';
	tableHTML__Positif += 	'<td>' + feature.properties['Kode'] + '</td>';
	tableHTML__Positif += '</tr>';
}

tableHTML__Positif += '</table>';
document.getElementById('_Positif_tab').innerHTML = tableHTML__Positif;

tableHTML__Sungai = '<table id="_Sungai_table">';
tableHTML__Sungai += 	'<tr>';
tableHTML__Sungai += 		'<th>Map</th>';
tableHTML__Sungai += 		'<th>name</th>';
tableHTML__Sungai += 		'<th>width</th>';
tableHTML__Sungai += 	'</tr>';
tableHTML__Sungai += 	'<tr>';
tableHTML__Sungai += 		'<td></td>';
tableHTML__Sungai += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Cari name"></td>';
tableHTML__Sungai += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Cari width"></td>';
tableHTML__Sungai += 	'</tr>';

var _Sungai_IDs = Object.keys(_Sungai._layers);
for (var i=0; i < _Sungai_IDs.length; i++){
	var feature = _Sungai._layers[_Sungai_IDs[i]].feature;
	tableHTML__Sungai += '<tr>';
	tableHTML__Sungai += 	'<td onclick="goToMap(_Sungai, ' + _Sungai_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Sungai += 	'<td>' + feature.properties['name'] + '</td>';
	tableHTML__Sungai += 	'<td>' + feature.properties['width'] + '</td>';
	tableHTML__Sungai += '</tr>';
}

tableHTML__Sungai += '</table>';
document.getElementById('_Sungai_tab').innerHTML = tableHTML__Sungai;

tableHTML__Kelurahan_Tangerang_Selatan = '<table id="_Kelurahan_Tangerang_Selatan_table">';
tableHTML__Kelurahan_Tangerang_Selatan += 	'<tr>';
tableHTML__Kelurahan_Tangerang_Selatan += 		'<th>Map</th>';
tableHTML__Kelurahan_Tangerang_Selatan += 		'<th>Jml_Pen_PR</th>';
tableHTML__Kelurahan_Tangerang_Selatan += 		'<th>Jml_Pen_lk</th>';
tableHTML__Kelurahan_Tangerang_Selatan += 		'<th>Kelurahan</th>';
tableHTML__Kelurahan_Tangerang_Selatan += 	'</tr>';
tableHTML__Kelurahan_Tangerang_Selatan += 	'<tr>';
tableHTML__Kelurahan_Tangerang_Selatan += 		'<td></td>';
tableHTML__Kelurahan_Tangerang_Selatan += 		'<td><input type="text" onkeyup="filter(event, 1)" placeholder="Cari Jml_Pen_PR"></td>';
tableHTML__Kelurahan_Tangerang_Selatan += 		'<td><input type="text" onkeyup="filter(event, 2)" placeholder="Cari Jml_Pen_lk"></td>';
tableHTML__Kelurahan_Tangerang_Selatan += 		'<td><input type="text" onkeyup="filter(event, 3)" placeholder="Cari Kelurahan"></td>';
tableHTML__Kelurahan_Tangerang_Selatan += 	'</tr>';

var _Kelurahan_Tangerang_Selatan_IDs = Object.keys(_Kelurahan_Tangerang_Selatan._layers);
for (var i=0; i < _Kelurahan_Tangerang_Selatan_IDs.length; i++){
	var feature = _Kelurahan_Tangerang_Selatan._layers[_Kelurahan_Tangerang_Selatan_IDs[i]].feature;
	tableHTML__Kelurahan_Tangerang_Selatan += '<tr>';
	tableHTML__Kelurahan_Tangerang_Selatan += 	'<td onclick="goToMap(_Kelurahan_Tangerang_Selatan, ' + _Kelurahan_Tangerang_Selatan_IDs[i] + ')"><img src="javascript/icon.png" width="32px" height="32px"/></td>';
	tableHTML__Kelurahan_Tangerang_Selatan += 	'<td>' + feature.properties['Jml_Pen_PR'] + '</td>';
	tableHTML__Kelurahan_Tangerang_Selatan += 	'<td>' + feature.properties['Jml_Pen_lk'] + '</td>';
	tableHTML__Kelurahan_Tangerang_Selatan += 	'<td>' + feature.properties['Kelurahan'] + '</td>';
	tableHTML__Kelurahan_Tangerang_Selatan += '</tr>';
}

tableHTML__Kelurahan_Tangerang_Selatan += '</table>';
document.getElementById('_Kelurahan_Tangerang_Selatan_tab').innerHTML = tableHTML__Kelurahan_Tangerang_Selatan;

