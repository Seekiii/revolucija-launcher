const shell = require('electron').shell;

$(document).on('click', 'a[href^="https"]', function(event) {
    event.preventDefault();
    shell.openExternal(this.href);
});

setTimeout(function() {
  $(".loading").fadeOut(500);
}, 1000);




function set_info() {
  var url = 'http://89.116.184.110:30120/dynamic.json';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      $("#igraci").text(data.clients + " / " + data.sv_maxclients);
      console.log(data.clients + " / " + data.sv_maxclients)
    })
    .catch(error => {
      console.log('Došlo je do greške pri dobavljanju podataka:', error);
    });
}

set_info()