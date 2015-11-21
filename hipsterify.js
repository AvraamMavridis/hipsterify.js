window.hipsterify = (function () {  
  
  var effects = {
    willow: 'filter:saturate(0.02) contrast(0.85) brightness(1.2) sepia(0.02); -webkit-filter: saturate(0.02) contrast(0.85) brightness(1.2) sepia(0.02)',
    walden: '-webkit-filter: sepia(0.35) contrast(0.9) brightness(1.1) hue-rotate(-10deg) saturate(1.5);filter: sepia(0.35) contrast(0.9) brightness(1.1) hue-rotate(-10deg) saturate(1.5);',
    xpro: '-webkit-filter: contrast(1.3) brightness(0.8) sepia(0.3) saturate(1.5) hue-rotate(-20deg);filter: contrast(1.3) brightness(0.8) sepia(0.3) saturate(1.5) hue-rotate(-20deg);',
    valencia: '-webkit-filter: sepia(0.15) saturate(1.5) contrast(0.9);filter: sepia(0.15) saturate(1.5) contrast(0.9);',
    toaster: '-webkit-filter:sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67);-filter:sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67);',
    sutro: '-webkit-filter: brightness(0.75) contrast(1.3) sepia(0.5) hue-rotate(-25deg);filter: brightness(0.75) contrast(1.3) sepia(0.5) hue-rotate(-25deg);',
    siera: '-webkit-filter: contrast(0.8) saturate(1.2) sepia(0.15);filter: contrast(0.8) saturate(1.2) sepia(0.15);',
    rise: '-webkit-filter: saturate(1.4) sepia(0.25) hue-rotate(-15deg) contrast(0.8) brightness(1.1);filter: saturate(1.4) sepia(0.25) hue-rotate(-15deg) contrast(0.8) brightness(1.1);',
    nashville: '-webkit-filter: sepia(0.4) saturate(1.5) contrast(0.9) brightness(1.1) hue-rotate(-15deg);filter: sepia(0.4) saturate(1.5) contrast(0.9) brightness(1.1) hue-rotate(-15deg);',
    mayfair: '-webkit-filter: saturate(1.4) contrast(1.1);filter: saturate(1.4) contrast(1.1);',
    lofi: 'filter: contrast(1.4) brightness(0.9) sepia(0.05);-webkit-filter: contrast(1.4) brightness(0.9) sepia(0.05);',
    kelvin: 'filter: sepia(0.4) saturate(2.4) brightness(1.3) contrast(1);-webkit-filter: sepia(0.4) saturate(2.4) brightness(1.3) contrast(1);',
    inkwell: '-webkit-filter: grayscale(1) brightness(1.2) contrast(1.05);filter: grayscale(1) brightness(1.2) contrast(1.05);',
    hudson: '-webkit-filter: contrast(1.2) brightness(0.9) hue-rotate(-10deg);filter: contrast(1.2) brightness(0.9) hue-rotate(-10deg);',
    hefe: '-webkit-filter: contrast(1.3) sepia(0.3) saturate(1.3) hue-rotate(-10deg) brightness(0.95);filter: contrast(1.3) sepia(0.3) saturate(1.3) hue-rotate(-10deg) brightness(0.95);',
    earlybird: '-webkit-filter: sepia(0.4) saturate(1.6) contrast(1.1) brightness(0.9) hue-rotate(-10deg);filter: sepia(0.4) saturate(1.6) contrast(1.1) brightness(0.9) hue-rotate(-10deg);',
    brannan: '-webkit-filter: sepia(0.5) contrast(1.4);filter: sepia(0.5) contrast(1.4);',
    amaro: '-webkit-filter: hue-rotate(-10deg) contrast(0.9) brightness(1.1) saturate(1.5);filter: hue-rotate(-10deg) contrast(0.9) brightness(1.1) saturate(1.5);',
    1997: '-webkit-filter: sepia(0.5) hue-rotate(-30deg) saturate(1.2) contrast(0.8);filter: sepia(0.5) hue-rotate(-30deg) saturate(1.2) contrast(0.8);'
  }
  
  /**
  * Returns the DOM selector
  * 
  * @param {string or DOMobject or NODElement }
  */
  var getSelector = function ( selector ) {
      var _selector ;

      if ( typeof selector === "string" ) {
          _selector = document.querySelectorAll( selector );
      } 
      else if ( selector.length ) {
          _selector = selector;
      } 
      else {
          _selector = [ selector ];
      }
      return _selector;
  } 
  
  
    var hipsterify = function( selector ){
        var _selector = getSelector( selector );
      
        _selector.filter = function( eff ){
                     var s = Array.prototype.slice.call(_selector);
          s.forEach(function( sel ){
            sel.setAttribute('style', effects[ eff ] );
          });
        }

        return _selector;
    }
     
    return hipsterify;
}());
