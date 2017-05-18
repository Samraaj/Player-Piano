# Player-Piano

This is a project for senior design at RIT, meant to control a custom configuration for a player piano built by the team.
The piano utalized MIDI format for songs and is able to translate them completely in to the signals to be read by the piano.

## Midi Processing

The midi processing module in midiprocessor.js uses the midiconvert NPM module to convert midi files in to JSON format. Once in this format, the file is converted in to a large array that can be streamed to each of the microcontrollers that actuate the piano keys

## Piano Serial

This module, in pianoserial.js, uses the serialport npm module to establish a connection from the raspberry pi to MSP432 controllers for each octave and a MSP430 for tempo control. It builds an object that facillitates control to the piano, loading songs, and playback. 

## Web Application

The web application module in app.js mounts a simple express-based web server that incorporates a simple UI for users to control the piano. The UI allows new songs to be uploaded easily, songs to be selected, and playback controlled.