$.getJSON(
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",
  function(json) {
    var nb_earthquake = $("#nb_earthquake");
    var nb = json.features.length;
    // rajouter une fonction if pour le singulier
    // Option 1: si 0, tu vas changer la phrase + écrire en vert
    // Option 2: si 1, mettre au singulier
    // Option 3: plus de 1
    if (nb == 0) {
      nb_earthquake.html(
        "Amazing, in the past hour, there was no earthquake in the US!"
      );
    } else if (nb == 1) {
      nb_earthquake.html(
        '<span id="nb">' +
          nb +
          "</span> earthquake only has happened in the past hour."
      );
      var number = $("#nb");
    } else {
      nb_earthquake.html(
        '<span id="nb">' +
          nb +
          "</span> earthquakes have happened in the past hour."
      );
      var number = $("#nb");
    }
    //nb_earthquake.html('<span id="nb">' + nb + "</span> earthquakes have happened in the past hour.");
    console.log(number)
    number.css("color", "red");
    number.css("font-size", nb * 5 + "px");

    // Avec une boucle qui traverse le json, récupère l'attribut title
    // pour chaque tremblements, crée un objet bouton

    var eq = json.features;
    var eqList = $("#eqList");

    for (var i = 0; i < json.features.length; i = i + 1) {
      // we add a new "li" element with the task at index "i" in our "tasks" array inside
      eqList.append(
        '<p class="earthquake" id="' +
          eq[i].properties.title +
          '"><span class="earthquake_title">' +
          eq[i].properties.title +
          "</span></p>"
      );
    }

    // then we listen for "click" events on each "li" elements
    $(".earthquake").on("click", function() {
      var i=1;
      var mg = $("#mg");

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
          
          if(typeof feat === "undefined") {
            console.log(elem[0].getElementsByClassName("earthquake_title")[0]);
            elem[0].innerHTML = '<span class="earthquake_title">' +
              elem[0].getElementsByClassName("earthquake_title")[0].innerHTML +
              "</span>"
          }
          else {
            elem.append('<div class="row">')
            var row = $(elem[0].getElementsByClassName("row")[0]);
            row.append('<div class="nine columns">')
            row.append('<div class="three columns">')
            var nine_row = $(elem[0].getElementsByClassName("nine columns")[0]);
            var three_row = $(elem[0].getElementsByClassName("three columns")[0]);
            
            var delta = Math.round(
              (new Date() - new Date(feat.properties.time)) / 60000
            );
            var date = new Date(feat.properties.time).toLocaleString("en-US");
            nine_row.append(
              "<b> Time: </b> " + date + " <i>(" + delta + " minutes ago)"
            );
            nine_row.append("</br>");
            nine_row.append("<b>Place: </b>" + feat.properties.place.replace(/null/i, "\"\""));
            nine_row.append("</br>");
            nine_row.append("<b>Magnitude: </b> " + feat.properties.mag + " ml");
            nine_row.append("</br>");
            var nst;
            if(feat.properties.nst){
              nst = feat.properties.nst;
            }
            else {
              nst = "0"
            }
            nine_row.append("<b>Number of station: </b>" + nst);
            nine_row.append("</br>");
            nine_row.append(
              "<b>Travel Time Residual: </b>" + feat.properties.rms + " s"
            );
            nine_row.append("</br>");
            var gap;
            if(feat.properties.gap){
              gap = feat.properties.gap;
            }
            else {
              gap = "0"
            }
            nine_row.append("<b>Azimuthal gap: </b>" + gap + "°");
            
            three_row.append('<div class="circle" id="'+ feat.properties.title + '"></div>')
            var circle = $(three_row[0].getElementsByClassName("circle")[0]);
            console.log(circle)
            circle.css("height", feat.properties.mag * 30 + "px");
            circle.css("width", feat.properties.mag * 30 + "px");
          }
        }
      );
    });
  }
);
