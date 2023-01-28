var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Mapa Interactivo',
            'type': 'base',
            'opacity': 1.000000,
            source: new ol.source.XYZ({
             attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var format_COORDENADAS_2 = new ol.format.GeoJSON();
        var features_COORDENADAS_2 = format_COORDENADAS_2.readFeatures(json_COORDENADAS_2, 
                    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
        var jsonSource_COORDENADAS_2 = new ol.source.Vector({
            attributions: ' ',
        });

        jsonSource_COORDENADAS_2.addFeatures(features_COORDENADAS_2);
        var lyr_COORDENADAS_2 = new ol.layer.Vector({
                        declutter: true,
                        source:jsonSource_COORDENADAS_2, 
                        style: style_COORDENADAS_2,
                        interactive: true,
                        title: '<img src="./static/img/COORDENADAS_2.png"/> Fuente'
                    });
                    
console.log(maps)

if (maps==2 ){

            var format_Final_2 = new ol.format.GeoJSON();
            var features_Final_2 = format_Final_2.readFeatures(json_Final_2, 
                        {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
            var jsonSource_Final_2 = new ol.source.Vector({
                attributions: ' ',
            });
            jsonSource_Final_2.addFeatures(features_Final_2);
     
          
                var lyr_Final_3 = new ol.layer.Vector({
                                declutter: true,
                                source:jsonSource_Final_2, 
                                style: style_Final_3,
                                interactive: true,
                
                                title: "<img src='./static/img/Final_1_0.png'> 0-3 dB(A)<br <br />"
                        });


                var lyr_Final_4 = new ol.layer.Vector({
                                declutter: true,
                                source:jsonSource_Final_2, 
                                style: style_Final_4,
                                interactive: true,
                
                                title: "<img src='./static/img/Final_1_1.png'> 3-6 dB(A)<br <br />"
                        });
                
                var lyr_Final_5 = new ol.layer.Vector({
                            declutter: true,
                            source:jsonSource_Final_2, 
                            style: style_Final_5,
                            interactive: true,
            
                            title: "<img src='./static/img/Final_1_2.png'> 6-9 dB(A)<br <br />"
                    });
            
                var lyr_Final_6 = new ol.layer.Vector({
                        declutter: true,
                        source:jsonSource_Final_2, 
                        style: style_Final_6,
                        interactive: true,
        
                        title: "<img src='./static/img/Final_1_3.png'> 9-12 dB(A)<br <br />"
                });
            
                      
                var lyr_Final_7 = new ol.layer.Vector({
                    declutter: true,
                    source:jsonSource_Final_2, 
                    style: style_Final_7,
                    interactive: true,
    
                    title: "<img src='./static/img/Final_1_4.png'> 12-15 dB(A)<br <br />"
            });

            var lyr_Final_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Final_2, 
                style: style_Final_8,
                interactive: true,

                title: "<img src='./static/img/Final_1_5.png'> 15-18 dB(A)<br <br />"
        });


        var lyr_Final_9 = new ol.layer.Vector({
            declutter: true,
            source:jsonSource_Final_2, 
            style: style_Final_9,
            interactive: true,

            title: "<img src='./static/img/Final_1_6.png'> 18-21 dB(A)<br <br />"
    });

    var lyr_Final_10 = new ol.layer.Vector({
        declutter: true,
        source:jsonSource_Final_2, 
        style: style_Final_10,
        interactive: true,

        title: "<img src='./static/img/Final_1_7.png'> 21-24 dB(A)<br <br />"
});
var lyr_Final_11 = new ol.layer.Vector({
    declutter: true,
    source:jsonSource_Final_2, 
    style: style_Final_11,
    interactive: true,

    title: "<img src='./static/img/Final_1_8.png'> 24-27 dB(A)<br <br />"
});

var lyr_Final_12 = new ol.layer.Vector({
    declutter: true,
    source:jsonSource_Final_2, 
    style: style_Final_12,
    interactive: true,

    title: "<img src='./static/img/Final_1_9.png'> 27-30 <br <br />"
});


lyr_OpenStreetMap_0.setVisible(true);lyr_Final_3.setVisible(true);lyr_Final_4.setVisible(true);lyr_Final_5.setVisible(true);lyr_Final_6.setVisible(true);lyr_Final_7.setVisible(true);lyr_Final_8.setVisible(true);lyr_Final_9.setVisible(true);lyr_Final_10.setVisible(true);lyr_Final_11.setVisible(true);lyr_Final_12.setVisible(true);lyr_COORDENADAS_2.setVisible(true)
var layersList = [lyr_OpenStreetMap_0,lyr_Final_3,lyr_Final_4,lyr_Final_5,lyr_Final_6,lyr_Final_7,lyr_Final_8,lyr_Final_9,lyr_Final_10,lyr_Final_11,lyr_Final_12,lyr_COORDENADAS_2];


lyr_Final_3.set('fieldAliases', {'OBJECTID':'Objeto','Conflict_d': 'Conflict_d', 'Conflc_dB':'Conflc_dB','Area':'Area','Shape_Leng':'Shape_Leng','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_3.set('fieldImages', {'OBJECTID':'','Conflict_d': '', 'Conflc_dB':'','Area':'','Shape_Lenga':'','Shape_Area':'','RuleID':''});
lyr_Final_3.set('fieldLabels', {'OBJECTID':'inline label','Conflict_d': 'inline label', 'Conflc_dB':'inline label','Area':'inline label','Shape_Leng':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_4.set('fieldAliases', {'OBJECTID':'Objeto','Conflict_d': 'Conflict_d', 'Conflc_dB':'Conflc_dB','Area':'Area','Shape_Leng':'Shape_Leng','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_4.set('fieldImages', {'OBJECTID':'','Conflict_d': '', 'Conflc_dB':'','Area':'','Shape_Lenga':'','Shape_Area':'','RuleID':''});
lyr_Final_4.set('fieldLabels', {'OBJECTID':'inline label','Conflict_d': 'inline label', 'Conflc_dB':'inline label','Area':'inline label','Shape_Leng':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_5.set('fieldAliases', {'OBJECTID':'Objeto','Conflict_d': 'Conflict_d', 'Conflc_dB':'Conflc_dB','Area':'Area','Shape_Leng':'Shape_Leng','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_5.set('fieldImages', {'OBJECTID':'','Conflict_d': '', 'Conflc_dB':'','Area':'','Shape_Lenga':'','Shape_Area':'','RuleID':''});
lyr_Final_5.set('fieldLabels', {'OBJECTID':'inline label','Conflict_d': 'inline label', 'Conflc_dB':'inline label','Area':'inline label','Shape_Leng':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_6.set('fieldAliases', {'OBJECTID':'Objeto','Conflict_d': 'Conflict_d', 'Conflc_dB':'Conflc_dB','Area':'Area','Shape_Leng':'Shape_Leng','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_6.set('fieldImages', {'OBJECTID':'','Conflict_d': '', 'Conflc_dB':'','Area':'','Shape_Lenga':'','Shape_Area':'','RuleID':''});
lyr_Final_6.set('fieldLabels', {'OBJECTID':'inline label','Conflict_d': 'inline label', 'Conflc_dB':'inline label','Area':'inline label','Shape_Leng':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_7.set('fieldAliases', {'OBJECTID':'Objeto','Conflict_d': 'Conflict_d', 'Conflc_dB':'Conflc_dB','Area':'Area','Shape_Leng':'Shape_Leng','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_7.set('fieldImages', {'OBJECTID':'','Conflict_d': '', 'Conflc_dB':'','Area':'','Shape_Lenga':'','Shape_Area':'','RuleID':''});
lyr_Final_7.set('fieldLabels', {'OBJECTID':'inline label','Conflict_d': 'inline label', 'Conflc_dB':'inline label','Area':'inline label','Shape_Leng':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_8.set('fieldAliases', {'OBJECTID':'Objeto','Conflict_d': 'Conflict_d', 'Conflc_dB':'Conflc_dB','Area':'Area','Shape_Leng':'Shape_Leng','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_8.set('fieldImages', {'OBJECTID':'','Conflict_d': '', 'Conflc_dB':'','Area':'','Shape_Lenga':'','Shape_Area':'','RuleID':''});
lyr_Final_8.set('fieldLabels', {'OBJECTID':'inline label','Conflict_d': 'inline label', 'Conflc_dB':'inline label','Area':'inline label','Shape_Leng':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_9.set('fieldAliases', {'OBJECTID':'Objeto','Conflict_d': 'Conflict_d', 'Conflc_dB':'Conflc_dB','Area':'Area','Shape_Leng':'Shape_Leng','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_9.set('fieldImages', {'OBJECTID':'','Conflict_d': '', 'Conflc_dB':'','Area':'','Shape_Lenga':'','Shape_Area':'','RuleID':''});
lyr_Final_9.set('fieldLabels', {'OBJECTID':'inline label','Conflict_d': 'inline label', 'Conflc_dB':'inline label','Area':'inline label','Shape_Leng':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_10.set('fieldAliases', {'OBJECTID':'Objeto','Conflict_d': 'Conflict_d', 'Conflc_dB':'Conflc_dB','Area':'Area','Shape_Leng':'Shape_Leng','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_10.set('fieldImages', {'OBJECTID':'','Conflict_d': '', 'Conflc_dB':'','Area':'','Shape_Lenga':'','Shape_Area':'','RuleID':''});
lyr_Final_10.set('fieldLabels', {'OBJECTID':'inline label','Conflict_d': 'inline label', 'Conflc_dB':'inline label','Area':'inline label','Shape_Leng':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_11.set('fieldAliases', {'OBJECTID':'Objeto','Conflict_d': 'Conflict_d', 'Conflc_dB':'Conflc_dB','Area':'Area','Shape_Leng':'Shape_Leng','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_11.set('fieldImages', {'OBJECTID':'','Conflict_d': '', 'Conflc_dB':'','Area':'','Shape_Lenga':'','Shape_Area':'','RuleID':''});
lyr_Final_11.set('fieldLabels', {'OBJECTID':'inline label','Conflict_d': 'inline label', 'Conflc_dB':'inline label','Area':'inline label','Shape_Leng':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_12.set('fieldAliases', {'OBJECTID':'Objeto','Conflict_d': 'Conflict_d', 'Conflc_dB':'Conflc_dB','Area':'Area','Shape_Leng':'Shape_Leng','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_12.set('fieldImages', {'OBJECTID':'','Conflict_d': '', 'Conflc_dB':'','Area':'','Shape_Lenga':'','Shape_Area':'','RuleID':''});
lyr_Final_12.set('fieldLabels', {'OBJECTID':'inline label','Conflict_d': 'inline label', 'Conflc_dB':'inline label','Area':'inline label','Shape_Leng':'inline label','Shape_Area':'inline label','RuleID':'inline label'});


} else if (maps==1){


    var format_Final_2 = new ol.format.GeoJSON();
    var features_Final_2 = format_Final_2.readFeatures(json_Final_2, 
                {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_Final_2 = new ol.source.Vector({
        attributions: ' ',
    });
    jsonSource_Final_2.addFeatures(features_Final_2);

  
        var lyr_Final_3 = new ol.layer.Vector({
                        declutter: true,
                        source:jsonSource_Final_2, 
                        style: style_Final_3,
                        interactive: true,
        
                        title: "<img src='./static/img/Final_1_0R.png'> 35-40 dB(A)<br <br />"
                });


        var lyr_Final_4 = new ol.layer.Vector({
                        declutter: true,
                        source:jsonSource_Final_2, 
                        style: style_Final_4,
                        interactive: true,
        
                        title: "<img src='./static/img/Final_1_1R.png'> 40-45 dB(A)<br <br />"
                });
        
        var lyr_Final_5 = new ol.layer.Vector({
                    declutter: true,
                    source:jsonSource_Final_2, 
                    style: style_Final_5,
                    interactive: true,
    
                    title: "<img src='./static/img/Final_1_2R.png'> 45-50 dB(A)<br <br />"
            });
    
        var lyr_Final_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Final_2, 
                style: style_Final_6,
                interactive: true,

                title: "<img src='./static/img/Final_1_3R.png'> 50-55 dB(A)<br <br />"
        });
    
              
        var lyr_Final_7 = new ol.layer.Vector({
            declutter: true,
            source:jsonSource_Final_2, 
            style: style_Final_7,
            interactive: true,

            title: "<img src='./static/img/Final_1_4R.png'> 55-60 dB(A)<br <br />"
    });

    var lyr_Final_8 = new ol.layer.Vector({
        declutter: true,
        source:jsonSource_Final_2, 
        style: style_Final_8,
        interactive: true,

        title: "<img src='./static/img/Final_1_5R.png'> 60-65 dB(A)<br <br />"
});


var lyr_Final_9 = new ol.layer.Vector({
    declutter: true,
    source:jsonSource_Final_2, 
    style: style_Final_9,
    interactive: true,

    title: "<img src='./static/img/Final_1_6R.png'> 65-70 dB(A)<br <br />"
});

var lyr_Final_10 = new ol.layer.Vector({
declutter: true,
source:jsonSource_Final_2, 
style: style_Final_10,
interactive: true,

title: "<img src='./static/img/Final_1_7R.png'> 70-75 dB(A)<br <br />"
});
var lyr_Final_11 = new ol.layer.Vector({
declutter: true,
source:jsonSource_Final_2, 
style: style_Final_11,
interactive: true,

title: "<img src='./static/img/Final_1_8R.png'> 75-80 dB(A)<br <br />"
});

var lyr_Final_12 = new ol.layer.Vector({
declutter: true,
source:jsonSource_Final_2, 
style: style_Final_12,
interactive: true,

title: "<img src='./static/img/Final_1_9R.png'> >80 dB(A)<br <br />"
});


lyr_OpenStreetMap_0.setVisible(true);lyr_Final_3.setVisible(true);lyr_Final_4.setVisible(true);lyr_Final_5.setVisible(true);lyr_Final_6.setVisible(true);lyr_Final_7.setVisible(true);lyr_Final_8.setVisible(true);lyr_Final_9.setVisible(true);lyr_Final_10.setVisible(true);lyr_Final_11.setVisible(true);lyr_Final_12.setVisible(true);lyr_COORDENADAS_2.setVisible(true)
var layersList = [lyr_OpenStreetMap_0,lyr_Final_3,lyr_Final_4,lyr_Final_5,lyr_Final_6,lyr_Final_7,lyr_Final_8,lyr_Final_9,lyr_Final_10,lyr_Final_11,lyr_Final_12,lyr_COORDENADAS_2];


lyr_Final_3.set('fieldAliases', {'OBJECTID':'Objeto','ISO': 'ISO', 'Shape_Leng':'Shape_Leng','N_Pres_Son':'N_Pres_Son','Shape_Le_1':'Shape_Le_1','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_3.set('fieldImages', {'OBJECTID':'','ISO': '', 'Shape_Leng':'','N_Pres_Son':'','Shape_Le_1':'','Shape_Area':'','RuleID':''});
lyr_Final_3.set('fieldLabels', {'OBJECTID':'inline label','ISO': 'inline label', 'Shape_Leng':'inline label','N_Pres_Son':'inline label','Shape_Le_1':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_4.set('fieldAliases', {'OBJECTID':'Objeto','ISO': 'ISO', 'Shape_Leng':'Shape_Leng','N_Pres_Son':'N_Pres_Son','Shape_Le_1':'Shape_Le_1','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_4.set('fieldImages', {'OBJECTID':'','ISO': '', 'Shape_Leng':'','N_Pres_Son':'','Shape_Le_1':'','Shape_Area':'','RuleID':''});
lyr_Final_4.set('fieldLabels', {'OBJECTID':'inline label','ISO': 'inline label', 'Shape_Leng':'inline label','N_Pres_Son':'inline label','Shape_Le_1':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_5.set('fieldAliases', {'OBJECTID':'Objeto','ISO': 'ISO', 'Shape_Leng':'Shape_Leng','N_Pres_Son':'N_Pres_Son','Shape_Le_1':'Shape_Le_1','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_5.set('fieldImages', {'OBJECTID':'','ISO': '', 'Shape_Leng':'','N_Pres_Son':'','Shape_Le_1':'','Shape_Area':'','RuleID':''});
lyr_Final_5.set('fieldLabels', {'OBJECTID':'inline label','ISO': 'inline label', 'Shape_Leng':'inline label','N_Pres_Son':'inline label','Shape_Le_1':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_6.set('fieldAliases', {'OBJECTID':'Objeto','ISO': 'ISO', 'Shape_Leng':'Shape_Leng','N_Pres_Son':'N_Pres_Son','Shape_Le_1':'Shape_Le_1','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_6.set('fieldImages', {'OBJECTID':'','ISO': '', 'Shape_Leng':'','N_Pres_Son':'','Shape_Le_1':'','Shape_Area':'','RuleID':''});
lyr_Final_6.set('fieldLabels', {'OBJECTID':'inline label','ISO': 'inline label', 'Shape_Leng':'inline label','N_Pres_Son':'inline label','Shape_Le_1':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_7.set('fieldAliases', {'OBJECTID':'Objeto','ISO': 'ISO', 'Shape_Leng':'Shape_Leng','N_Pres_Son':'N_Pres_Son','Shape_Le_1':'Shape_Le_1','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_7.set('fieldImages', {'OBJECTID':'','ISO': '', 'Shape_Leng':'','N_Pres_Son':'','Shape_Le_1':'','Shape_Area':'','RuleID':''});
lyr_Final_7.set('fieldLabels', {'OBJECTID':'inline label','ISO': 'inline label', 'Shape_Leng':'inline label','N_Pres_Son':'inline label','Shape_Le_1':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_8.set('fieldAliases', {'OBJECTID':'Objeto','ISO': 'ISO', 'Shape_Leng':'Shape_Leng','N_Pres_Son':'N_Pres_Son','Shape_Le_1':'Shape_Le_1','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_8.set('fieldImages', {'OBJECTID':'','ISO': '', 'Shape_Leng':'','N_Pres_Son':'','Shape_Le_1':'','Shape_Area':'','RuleID':''});
lyr_Final_8.set('fieldLabels', {'OBJECTID':'inline label','ISO': 'inline label', 'Shape_Leng':'inline label','N_Pres_Son':'inline label','Shape_Le_1':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_9.set('fieldAliases', {'OBJECTID':'Objeto','ISO': 'ISO', 'Shape_Leng':'Shape_Leng','N_Pres_Son':'N_Pres_Son','Shape_Le_1':'Shape_Le_1','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_9.set('fieldImages', {'OBJECTID':'','ISO': '', 'Shape_Leng':'','N_Pres_Son':'','Shape_Le_1':'','Shape_Area':'','RuleID':''});
lyr_Final_9.set('fieldLabels', {'OBJECTID':'inline label','ISO': 'inline label', 'Shape_Leng':'inline label','N_Pres_Son':'inline label','Shape_Le_1':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_10.set('fieldAliases', {'OBJECTID':'Objeto','ISO': 'ISO', 'Shape_Leng':'Shape_Leng','N_Pres_Son':'N_Pres_Son','Shape_Le_1':'Shape_Le_1','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_10.set('fieldImages', {'OBJECTID':'','ISO': '', 'Shape_Leng':'','N_Pres_Son':'','Shape_Le_1':'','Shape_Area':'','RuleID':''});
lyr_Final_10.set('fieldLabels', {'OBJECTID':'inline label','ISO': 'inline label', 'Shape_Leng':'inline label','N_Pres_Son':'inline label','Shape_Le_1':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_11.set('fieldAliases', {'OBJECTID':'Objeto','ISO': 'ISO', 'Shape_Leng':'Shape_Leng','N_Pres_Son':'N_Pres_Son','Shape_Le_1':'Shape_Le_1','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_11.set('fieldImages', {'OBJECTID':'','ISO': '', 'Shape_Leng':'','N_Pres_Son':'','Shape_Le_1':'','Shape_Area':'','RuleID':''});
lyr_Final_11.set('fieldLabels', {'OBJECTID':'inline label','ISO': 'inline label', 'Shape_Leng':'inline label','N_Pres_Son':'inline label','Shape_Le_1':'inline label','Shape_Area':'inline label','RuleID':'inline label'});

lyr_Final_12.set('fieldAliases', {'OBJECTID':'Objeto','ISO': 'ISO', 'Shape_Leng':'Shape_Leng','N_Pres_Son':'N_Pres_Son','Shape_Le_1':'Shape_Le_1','Shape_Area':'Shape_Area','RuleID':'RuleID'});
lyr_Final_12.set('fieldImages', {'OBJECTID':'','ISO': '', 'Shape_Leng':'','N_Pres_Son':'','Shape_Le_1':'','Shape_Area':'','RuleID':''});
lyr_Final_12.set('fieldLabels', {'OBJECTID':'inline label','ISO': 'inline label', 'Shape_Leng':'inline label','N_Pres_Son':'inline label','Shape_Le_1':'inline label','Shape_Area':'inline label','RuleID':'inline label'});




}


lyr_COORDENADAS_2.set('fieldAliases', {'OBJECTID':'OBJECTID','Nombre': 'Nombre', 'Tipo': 'Tipo','id':'id' });
lyr_COORDENADAS_2.set('fieldImages', {'OBJECTID': '','Nombre': '', 'Tipo': '', 'id':''});
lyr_COORDENADAS_2.set('fieldLabels', {'OBJECTID': 'inline label','Nombre': 'inline label', 'Tipo': 'inline label', 'id':'inline label'});
lyr_COORDENADAS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});