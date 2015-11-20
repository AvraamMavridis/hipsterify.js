window.hipsterify = (function () {  
  
  var effects = {
    willow: 'filter:saturate(0.02) contrast(0.85) brightness(1.2) sepia(0.02); -webkit-filter: saturate(0.02) contrast(0.85) brightness(1.2) sepia(0.02)',
    walden: '-webkit-filter: sepia(0.35) contrast(0.9) brightness(1.1) hue-rotate(-10deg) saturate(1.5);filter: sepia(0.35) contrast(0.9) brightness(1.1) hue-rotate(-10deg) saturate(1.5);',
    xpro: '-webkit-filter: contrast(1.3) brightness(0.8) sepia(0.3) saturate(1.5) hue-rotate(-20deg);filter: contrast(1.3) brightness(0.8) sepia(0.3) saturate(1.5) hue-rotate(-20deg);',
    valencia: '-webkit-filter: sepia(0.15) saturate(1.5) contrast(0.9);filter: sepia(0.15) saturate(1.5) contrast(0.9);',
    toaster: '-webkit-filter:sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67);-filter:sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67);'
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
