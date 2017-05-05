document.addEventListener("DOMContentLoaded", function(event) {
    var elements = document.getElementsByTagName('area');
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('mouseover', function() {
        var src = './images/' + this.id + '_hover.png';
        document.getElementById('hoveredState').setAttribute('src', src);
      });
      elements[i].addEventListener('click', function() {
        document.getElementById('stateDisplay').innerText = 'State Abbreviation: ' + this.id.toUpperCase();
      });
    }
});
