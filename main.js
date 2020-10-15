$.getJSON(
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",
  function(json) {
    var nb_earthquake = $("#nb_earthquake");
    var nb = json.features.length;
    // rajouter une fonction if pour le singulier
    // Option 1: si 0, tu vas changer la phrase + écrire en vert
    // Option 2: si 1, mettre au singulier
    // Option 3: plus de 1
    nb_earthquake.html(
      '<span id="nb">' +
        nb +
        "</span> earthquakes have happened in the past hour."
    );
    var number = $("#nb");
    number.css("color", "red");
    number.css("font-size", nb * 5 + "px");

    // Avec une boucle qui traverse le json, récupère l'attribut title
    // pour chaque tremblements, crée un objet bouton

    const test = nb_earthquake.html;

    for (let i = 0; i < test; i++) {
      console.log(i); // 0, 1, 2, 3, 4
    }
  }
);

// Fonction evenement clic de boutton
// Quand un bouton est cliqué, créer un paragraphe avec les infos intéressantes
// convertir la date (timestamp to datetime)
// mag = magnitude

console.log("Theo");
