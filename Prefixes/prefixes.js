document.getElementById( "start" ).onclick = function () {    
    var s = document.getElementById( "input" ).value;
    var i = 0;
    display( s, i ); 
};

var display = function ( s, i ) {
    var div;
    var prefixes = document.getElementById( "prefixes" );
    if ( i <= s.length ) {
        div = document.createElement( "div" );
        div.innerHTML = "o " + s.substring( 0, i );
        prefixes.appendChild( div );
        setTimeout( function () { display( s, ( i + 1 ) ) }, 1000 );
    }
};
