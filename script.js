document.addEventListener("DOMContentLoaded", function(event) {

    var elements = document.getElementsByTagName('area');

    /* LOOPS THROUGH EVERY ELEMENT WITH THE TAG NAME "area" */
    for (var i = 0; i < elements.length; i++) {

      /* ADDS A "HOVER" LISTENER FOR EVERY ELEMENT */
      elements[i].addEventListener('mouseover', function() {
        /* WHEN MOUSED OVER: change the src of the image by the id "hoveredState" */
        var src = './images/' + this.id + '_hover.png';
        document.getElementById('hoveredState').setAttribute('src', src);
      });

      elements[i].addEventListener('mouseout', function() {
        /* WHEN MOUSED OUT: remove the src attribute of the image by the id "hoveredState" */
        document.getElementById('hoveredState').removeAttribute('src');
      });

      /* ADDS A CLICK LISTENER FOR EVERY ELEMENT */
      elements[i].addEventListener('click', function() {
        /* WHEN CLICKED: display the clicked state's abbreviation by the id "stateDisplay" */
        document.getElementById('stateDisplay').innerText = 'State Abbreviation: ' + this.id.toUpperCase();
      });

    }

});
