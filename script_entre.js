"use strict"


var recettes = [
    {titre: "Salade Niçoise", page: "recette_salade_nicoise.html", image: "salade.jpg"},
    {titre: "Tarte aux poireaux", page: "recette_tarte_poireaux.html", image: "tarte.jpg" }
];

var html = "";
var len = recettes.length;

for(var i = 0; i < len; i++) {

    html += "<li>" + "<a href=\"pages_entrees/" + recettes[i].page + "\">" + recettes[i].titre + "</a>" + "<img src=\"img/" + recettes[i].image + "</li>";
};

console.log(html);

var liste = document.getElementById("liste");
liste.innerHTML = html;