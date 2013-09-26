$( function () {

    var anagram = function ( s, t ) {
        if ( s.length !== t.length ) {
            return false;
        }
        var a = s.split( "" ), b = t.split( "" );
        return $( a ).not( b ).length === 0 && $( b ).not( a ).length === 0
    };

    test( "Change Tests", function () {
        deepEqual( change( 97 ), [ 3, 2, 0, 2 ] );
        deepEqual( change( 8 ), [ 0, 0, 1, 3 ] );
        deepEqual( change( 250 ), [ 10, 0, 0, 0 ] );
        deepEqual( change( 0 ), [ 0, 0, 0, 0 ] );
        deepEqual( change( 1 ), [ 0, 0, 0, 1 ] );
        deepEqual( change( 5 ), [ 0, 0, 1, 0 ] );
        deepEqual( change( 10 ), [ 0, 1, 0, 0 ] );
        deepEqual( change( 25 ), [ 1, 0, 0, 0 ] );
        deepEqual( change( 999 ), [ 39, 2, 0, 4 ] );
        deepEqual( change( 10068 ), [ 402, 1, 1, 3 ] );  
    } );

    test( "Strip Vowels Tests", function () {
        deepEqual( stripVowels( "Hello, world" ), "Hll, wrld" );
        deepEqual( stripVowels( "aeiouAEIOU" ), "" );
        deepEqual( stripVowels( "ALL YOUR BASE ARE BELONG TO US" ), "LL YR BS R BLNG T S" );
        deepEqual( stripVowels( "Mississippi" ), "Msssspp" );
        deepEqual( stripVowels( "onomatopoeia" ), "nmtp" );
        deepEqual( stripVowels( "`~1!2@3#4$5%6^7&8*9(0)-_=+[{]}\|;:,<.>/?" ), "`~1!2@3#4$5%6^7&8*9(0)-_=+[{]}\|;:,<.>/?" );
    } );

    test( "Scramble Tests", function () {
        var data = [ "", "a", "rat", "zzz", "^*&^*&^?ÄÈËg??" ];
        data.forEach( function ( s ) {
            ok( anagram( s, scramble( s ) ) );
        } );
    } );

    test("Powers of Two Tests", function () {
        var data;

        data = [];
        powersOfTwo( 0, function ( x ) { data.push( x ); } );
        deepEqual( data, [] );
        
        data = [];
        powersOfTwo( 1, function ( x ) { data.push( x ); } );
        deepEqual( data, [] );

        data = [];
        powersOfTwo( 2, function ( x ) { data.push( x ); } );
        deepEqual( data, [ 1 ] );

        data = [];
        powersOfTwo( -10, function ( x ) { data.push( x ); } );
        deepEqual( data, [] );

        data = [];
        powersOfTwo( 70, function ( x ) { data.push( x ); } );
        deepEqual( data, [ 1, 2, 4, 8, 16, 32, 64 ] );
    
        data = [];
        powersOfTwo( 2000, function ( x ) { data.push( x ); } );
        deepEqual( data, [ 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 ] );
    });

    test( "Powers Tests", function () {
        var data;

        data = [];
        powers( 0, 1000, function ( x ) { data.push( x ); } );
        deepEqual( data, [] );

        data = [];
        powers( 1, 1000, function ( x ) { data.push( x ); } );
        deepEqual( data, [] );

        data = [];
        powers( 1000, 0, function ( x ) { data.push( x ); } );
        deepEqual( data, [] );

        data = [];
        powers( 1000, 1000, function ( x ) { data.push( x ); } );
        deepEqual( data, [ 1 ] );
 
        data = [];
        powers( 3, 400, function ( x ) { data.push( x ); } );
        deepEqual( data, [ 1, 3, 9, 27, 81, 243 ] );

        data = [];
        powers( -2, 2000, function ( x ) { data.push( x ); } );
        deepEqual( data, [] );

        data = [];
        powers( -2, -2000, function ( x ) { data.push( x ); } );
        deepEqual( data, [] );

        data = [];
        powers( 2, -2000, function ( x ) { data.push( x ); } );
        deepEqual( data, [] );  
    } );

    test( "Interleave Tests", function () {
        deepEqual( interleave( [], [] ), [] );
        deepEqual( interleave( [ 1, "a", [ 1, "a" ] ], [] ), [ 1, "a", [ 1, "a" ] ] );
        deepEqual( interleave( [], [ 1, "a", [ 1, "a" ] ] ), [ 1, "a", [ 1, "a" ] ] );
        deepEqual( interleave( [ 0, 2, 4, 6 ], [ 1, 3, 5, 7 ] ), [ 0, 1, 2, 3, 4, 5, 6, 7 ] );
        deepEqual( interleave( [ "a", "b" ], [ 1, 2, true, null ] ), [ "a", 1, "b", 2, true, null ] );
        deepEqual( interleave( [ 1, 2, true, null ], [ "a", "b" ] ), [ 1, "a", 2, "b", true, null ] );
    } );

    test( "Stutter Tests", function () {
        deepEqual( stutter( [ 5, 4, [ 3 ], 9 ] ), [ 5, 5, 4, 4, [ 3 ], [ 3 ], 9, 9 ] );
        deepEqual( stutter( [] ), [] );
        deepEqual( stutter( [ [] ] ), [ [], [] ] );
        deepEqual( stutter( [ [ "Hello", [ "World", [ "Again" ] ] ] ] ), [ [ "Hello", [ "World", [ "Again" ] ] ], [ "Hello", [ "World", [ "Again" ] ] ] ] );
        deepEqual( stutter( [ [ 2 ], 2, 2.0, "2" ] ), [ [ 2 ], [ 2 ], 2, 2, 2.0, 2.0, "2", "2" ] );    
    } );

    // Test word count here
    test( "Word Count Tests", function () {
        deepEqual( wordCount( "If you dog a dog, you'll\nbe DOG_TIRED." ), { "if":1, "you":1, "dog":3, "a":1, "you'll":1, "be":1, "tired":1 } );
        deepEqual( wordCount( "" ), {} );
        deepEqual( wordCount( "Somewhere Over The Rainbow..." ), { "somewhere":1, "over":1, "the":1, "rainbow":1 } );
        deepEqual( wordCount( "LEFT, LEFT, UP, RIGHT, DOWN, RIGHT, LEFT, UP, DOWN, DOWN, DOWN." ), { "left":3, "up":2, "right":2, "down":4 } );
        deepEqual( wordCount( "Testing...Testing...One, Two, Three..." ), { "testing":2, "one":1, "two":1, "three":1 } );
    } );
} );