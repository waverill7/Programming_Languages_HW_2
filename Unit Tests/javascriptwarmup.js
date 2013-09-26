// Problem 1:
var change = function ( cents ) {
    var coins = [ 0, 0, 0, 0 ];
    var coinValues = [ 25, 10, 5, 1 ];
    if ( cents >= 0 ) {
        for ( var i = 0; i < coins.length; i++ ) {
            coins[ i ] = Math.floor( cents / coinValues[ i ] );
            cents = cents % coinValues[ i ];
        }
    }
    return coins;
};

// Problem 2:
var stripVowels = function ( s ) {
    var vowels = [ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' ];
    for ( var i = 0; i < vowels.length; i++ ) {
        s = s.replace( new RegExp( vowels[ i ], 'g' ), "" );
    }
    return s;
};

// Problem 3:
var scramble = function ( s ) {
    var randomlyPermutedString = '';
    var i;
    var c;
    while ( s.length > 0 ) {
        i = Math.floor( s.length * Math.random() );
        c = s.charAt( i );
        randomlyPermutedString = randomlyPermutedString.concat( c );
        s = s.replace( c, '' );
    }
    return randomlyPermutedString;
};

// For Problems 4 and 5:
var iterator = function () {
    var n = 0;
    return function ( base, reset ) {
        if ( reset ) {
            n = 0;
        }
        else {
            var result = Math.pow( base, n );
            n++;
            return result;
        }
    }
} ();

// Problem 4:
var powersOfTwo = function ( limit, f ) {
    var reset = true;
    iterator( 2, reset );
    for ( var i = iterator( 2, !reset ); i < limit; i = iterator( 2, !reset ) ) {
        f( i );
    }
};

// Problem 5:
var powers = function ( base, limit, f ) {
    var reset = true;
    if ( base > 1 ) {
        iterator( base, reset );
        for ( var i = iterator( base, !reset ); i < limit; i = iterator( base, !reset ) ) {
            f( i );
        }
    }
};

// Problem 6:
var interleave = function ( a1, a2 ) {
    var result = [];
    while ( ( a1.length > 0 ) || ( a2.length > 0 ) ) {
        if ( a1.length > 0 ) {
            result.push( a1.shift() );
        }
        if ( a2.length > 0 ) {
            result.push( a2.shift() );
        }
    }
    return result;
};

// Problem 7:
var stutter = function ( a ) {
    var result = [];
    var temp;
    while ( a.length > 0 ) {
        temp = a.shift();
        for ( var i = 0; i < 2; i++ ) {
            result.push( temp );
        }
    }
    return result;
};

// Problem 8:
var wordCount = function ( s ) {
    var result = {};
    var word = "";
    var character = "";
    s = s.toLowerCase();
    while ( s.length > 0 ) {
        character = s.charAt( 0 );
        s = s.replace( character, "" );
        if ( ( ( "a" <= character ) && ( "z" >= character ) ) || ( "'" === character ) ) {
            word = word.concat( character );
        }
        else if ( word !== "" ) {
            if ( result[ word ] === undefined ) {
                result[ word ] = 1;
            }
            else {
                result[ word ] += 1;
            }
            word = "";
        }
    }
    return result;
};
