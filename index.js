// ---------------------------------------------------------------
// Main initialization module and server loader
// ---------------------------------------------------------------

var piano = require('./pianoserial');
//var piano;
var midiProcessor = require('./midiprocessor');
var app = require('./app')(piano, midiProcessor);

// Initialize the piano (serial connections)
piano.initialize(function() {
    // successful init; Host the web server (environment out port or 3000)
    var server = app.listen(process.env.PORT || 3000, function() {
        var serverHostPort = server.address().port;
        console.log('started server on port ' + serverHostPort);
    });
});

// Host the web server (environment out port or 3000) (use this for testing with no piano connected)
// var server = app.listen(process.env.PORT || 3000, function() {
//     var serverHostPort = server.address().port;
//     console.log('started server on port ' + serverHostPort);
// });
