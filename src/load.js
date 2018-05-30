const http = require('http');
const https = require('https');

const htinterp = require('./htinterp');

//link is input from search bar
module.exports.url = function(link) {
    if('http' in link) {
        http.get({
        //options
        path: link,
        }, (res) => {
            //stuff
            res.on('connect', function(req, socket, head){
                //put connected indicator
             });
            res.on('error', function(e){
                //write 'unable to connect, ${e}' or something of the sort on page
            });
            res.on('data', (chunk) => {
                //send data to interpreter (htinterp.js)
                //htinterp.interp(data); //disabled as would do nothing
            });

        });
    }
    else if('https' in link){
        https.get({
        //options
        path: link,
        }, (res) => {
            //stuff
            res.on('connect', function(req, socket, head){
                //put connected indicator
             });
            res.on('error', function(e){
                //write 'unable to connect, ${e}' or something of the sort on page
            });
            res.on('data', (chunk) => {
                //send data to interpreter (htinterp.js)
            });

        });  
    }
}
//probably gonna have it just context print it to the page for now, so i can interpret it from there.
//need to set up a UI of sorts probably, so i can search things kek
