// require('dns').lookup(require('os').hostname(), function (err, add, fam) {
//   console.log('addr: '+add);
// })

var dns = require('dns');
var hostname = require('os').hostname();

module.exports = function(cb){
  dns.lookup(hostname, function(err, add, fam){
    cb(add);
  });
};
