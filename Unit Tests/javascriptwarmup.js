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
    var x = 0;
    return function ( base, reset ) {
        if ( reset ) {
            x = 0;
        }
        else {
            var y = Math.pow( base, x );
            x++;
            return y;
        }
    }
} ();

// Problem 4:
var powersOfTwo = function ( limit, f ) {
    var base = 2;
    var reset = true;
    iterator( base, reset );
    for ( var i = iterator( base, !reset ); i < limit; i = iterator( base, !reset ) ) {
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
    var interleavedArrays = [];
    while ( ( a1.length > 0 ) || ( a2.length > 0 ) ) {
        if ( a1.length > 0 ) {
            interleavedArrays.push( a1.shift() );
        }
        if ( a2.length > 0 ) {
            interleavedArrays.push( a2.shift() );
        }
    }
    return interleavedArrays;
};

// Problem 7:
var stutter = function ( a ) {
    var doubledUpArrayItems = [];
    var item;
    while ( a.length > 0 ) {
        item = a.shift();
        doubledUpArrayItems.push( item );
        doubledUpArrayItems.push( item );
    }
    return doubledUpArrayItems;
};

// Problem 8:
var wordCount = function ( s ) {
    var dictionary = {};
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
            if ( dictionary[ word ] === undefined ) {
                dictionary[ word ] = 1;
            }
            else {
                dictionary[ word ] += 1;
            }
            word = "";
        }
    }
    return dictionary;
};
