"use strict"


var recettes = [
    {titre: "Salade Niçoise", page: "recette_salade_nicoise.html", image: "salade.jpg"},
    {titre: "Tarte aux poireaux", page: "recette_tarte_poireaux.html", image: "tarte.jpg" }
];

var html = "";
var len = recettes.length;

for(var i = 0; i < len; i++) {

    html += "<li class=\"elme\">" + "<a href=\"pages_entrees/" + recettes[i].page + "\">" + recettes[i].titre + "</a>" + "</li>";
};

console.log(html);

var container = document.getElementById("rec_container");
container.addEventListener("click", () => {
    container.style.display = "none";
});
var elems = document.getElementsByClassName("elem");
var len = elems.length;
for(var i = 0; i < len; i ++) {
    elems[i].addEventListener("click", (event) => {
        event.preventDefault();
        showRecette();
    })
    
}
console.log(elems);
function showRecette() {
    container.style.display = "block";
}