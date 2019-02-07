
# Node Serialport <-> Arduino Example

Ready made example to start a localhost Node webserver using Express Framework to read & write to Arduino (Uno) Board via serial communication.

### Setup Instructions

-> Setup_Instructions.pdf
Installation proceedures for Node.js, NPM, Serialport pkg, & Arduino can be found in this tutorial I built for a Computer System Design course based on Arduino I teach at CUNY CityTech.

### Important Links

This example was taken from a previous project done by Barry Vandam using an outdated version of Node from years ago. I have modernized the code but Barry's explanation & video of working Arduino Kit are still useful resources.

http://www.barryvandam.com/node-js-communicating-with-arduino/#comment-4834
https://youtu.be/m-3XvNQko4s

### NOTE
I have included the node_modules directory but if you get any runtime errors you should start by re-installing the following node modules (See Setup Instr.):
    serialport
    express
    socket.io