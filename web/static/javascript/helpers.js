MYAPP = {};
MYAPP.rgbToHex = function (r, g, b) {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

// Below are mouseover/mouseout event listeners
MYAPP.marker_mouseover = function (e) {
  var feature = e.target.feature_properties;

<<<<<<< HEAD
  var popupContent ='';
  for (key_name in feature) {
    popupContent += '<b>' + String(key_name) + '</b>' + ' : ' + String(feature[key_name]) + ' <br> ';
=======
  var popupContent = 'For Time: ' + 'None' + ' <br> ';
  for (key_name in feature) {
    popupContent += String(key_name) + ' : ' + String(feature[key_name]) + ' <br> ';
>>>>>>> c5da41c47510e2dd1c46bea439d0e1b4959970af
  }

  // http://leafletjs.com/reference.html#popup for more options
  e.target.bindPopup(popupContent, {
    closeButton: false,
    autoPan: false
  }).openPopup();
};

MYAPP.marker_mouseout = function (e) {
  e.target.closePopup();
};

MYAPP.make_gradients = function(){
<<<<<<< HEAD
  return MYAPP.gradient("#35B927", "#DB4D27", 11);
}


=======
  return MYAPP.gradient("#DF151A", "#00DA3C", 11);
}

>>>>>>> c5da41c47510e2dd1c46bea439d0e1b4959970af
MYAPP.gradient = function(startColor, endColor, steps) {
     var start = {
             'Hex'   : startColor,
             'R'     : parseInt(startColor.slice(1,3), 16),
             'G'     : parseInt(startColor.slice(3,5), 16),
             'B'     : parseInt(startColor.slice(5,7), 16)
     }
     var end = {
             'Hex'   : endColor,
             'R'     : parseInt(endColor.slice(1,3), 16),
             'G'     : parseInt(endColor.slice(3,5), 16),
             'B'     : parseInt(endColor.slice(5,7), 16)
     }
     diffR = end['R'] - start['R'];
     diffG = end['G'] - start['G'];
     diffB = end['B'] - start['B'];

     stepsHex  = new Array();
     stepsR    = new Array();
     stepsG    = new Array();
     stepsB    = new Array();

     for(var i = 0; i <= steps; i++) {
             stepsR[i] = start['R'] + ((diffR / steps) * i);
             stepsG[i] = start['G'] + ((diffG / steps) * i);
             stepsB[i] = start['B'] + ((diffB / steps) * i);
             stepsHex[i] = '#' + Math.round(stepsR[i]).toString(16) + '' + Math.round(stepsG[i]).toString(16) + '' + Math.round(stepsB[i]).toString(16);
     }
     return stepsHex;

 }