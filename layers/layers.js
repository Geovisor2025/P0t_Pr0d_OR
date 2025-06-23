var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_POTENCIALESPRODUCTIVOSORURO_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'POTENCIALES PRODUCTIVOS ORURO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_0.png" /> AGROPECUARIO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_1.png" /> AGROPECUARIO LIMITADO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_2.png" /> ANDINISMO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_3.png" /> APROVECHAMIENTO FORRAJERO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_4.png" /> CULTIVOS AGRICOLAS<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_5.png" /> CULTIVOS AGRICOLAS LIMITADO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_6.png" /> CULTIVOS AGRICOLAS MERCADO LOCAL<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_7.png" /> CULTIVOS DE HORTALIZAS Y FRUTAS<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_8.png" /> EXPLOTACION DE SALMUERAS Y EVAPORITAS<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_9.png" /> EXPLOTACION DE YACIMIENTOS MINEROS<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_10.png" /> FORESTAL MADERABLE<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_11.png" /> GANADERIA<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_12.png" /> PASTOREO EXTENSIVO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_13.png" /> PASTOREO LIMITADO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_14.png" /> PISCICOLA Y CAPTACION DE AGUA<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_15.png" /> PROTECCION Y VIDA SILVESTRE<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_16.png" /> RAMAJE PARA COMBUSTIBLE<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_17.png" /> TURISTICO ESCENICO<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_18.png" /> VIDA SILVESTRE<br />\
    <img src="styles/legend/POTENCIALESPRODUCTIVOSORURO_1_19.png" /> ZONA  URBANA<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/POTENCIALESPRODUCTIVOSORURO_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7784530.756036, -2624326.938884, -6378100.508078, -1071371.544357]
        })
    });
var format_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2 = new ol.format.GeoJSON();
var features_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2 = format_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2.readFeatures(json_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2.addFeatures(features_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2);
var lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2, 
                style: style_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2,
                popuplayertitle: 'MUNICIPIOS POTENCIALES PRODUCTIVOS ORURO',
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2.png" /> MUNICIPIOS POTENCIALES PRODUCTIVOS ORURO'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_POTENCIALESPRODUCTIVOSORURO_1.setVisible(true);lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_POTENCIALESPRODUCTIVOSORURO_1,lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2];
lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROV': 'PROV', 'MUNICIPIO': 'MUNICIPIO', 'ZONA': 'ZONA', 'POT PROD': 'POT PROD', 'REGION': 'REGION', });
lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2.set('fieldImages', {'DEPTO': 'TextEdit', 'PROV': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ZONA': 'TextEdit', 'POT PROD': 'TextEdit', 'REGION': 'TextEdit', });
lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2.set('fieldLabels', {'DEPTO': 'inline label - always visible', 'PROV': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'POT PROD': 'inline label - always visible', 'REGION': 'inline label - always visible', });
lyr_MUNICIPIOSPOTENCIALESPRODUCTIVOSORURO_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});