$.getJSON(
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",
  function(json) {
    var nb_earthquake = $("#nb_earthquake");
    var nb = json.features.length;
    var number = $("#nb");
    // rajouter une fonction if pour le singulier
    // Option 1: si 0, tu vas changer la phrase + écrire en vert
    // Option 2: si 1, mettre au singulier
    // Option 3: plus de 1
    if(nb == 0) {
      nb_earthquake.html("Amazing, in the past hour, there was no earthquake in the US!");
    }
    else if (nb == 1) {
      nb_earthquake.html('<span id="nb">' + nb + "</span> earthquake only has happened in the past hour.");
      var number = $("#nb");
    }
    else {
      nb_earthquake.html('<span id="nb">' + nb + "</span> earthquakes have happened in the past hour.");
      var number = $("#nb");
    }
    //nb_earthquake.html('<span id="nb">' + nb + "</span> earthquakes have happened in the past hour.");

    
    number.css("color", "red");
    number.css("font-size", nb * 5 + "px");

    // Avec une boucle qui traverse le json, récupère l'attribut title
    // pour chaque tremblements, crée un objet bouton

    var eq = json.features;
    var eqList = $("#eqList");

    for (var i = 0; i < json.features.length; i = i + 1) {
      // we add a new "li" element with the task at index "i" in our "tasks" array inside
      eqList.append('<p class="earthquake" id="' + eq[i].properties.title + '"><span class="earthquake_title">' + eq[i].properties.title + "</span></p>");
    }

    // then we listen for "click" events on each "li" elements
    $(".earthquake").on("click", function() {
      // we select the current "li" on which there is a "click"
      // and we make them disappear slowly
      var elem = $(this);
      var title = $(this)[0].innerText;
      
      $.getJSON(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",
      function(json) {
        var feat;
        var eq = json.features;
        for (var i = 0; i < json.features.length; i = i + 1) {
          if (eq[i].properties.title === title) {
            feat = eq[i];
            break;
          }
        }
        elem.append("</br>")
        elem.append("Magnitude: " + feat.properties.mag + " ml")
        elem.append("</br>")
        elem.append("Number of station: " + feat.properties.nst)
        elem.append("</br>")
        elem.append("Time: " + feat.properties.time)
        elem.append("</br>")
        elem.append("Number of station: " + feat.properties.nst)
      });
    });
  }
);

// TODO
// 1. rajouter les éléments utiles pour le premier click
// 2. style.css = rajouter un beau style
// 3.
