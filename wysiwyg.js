//creating a dom element for each item in the object
//note to self: created array of objects on seperate page in attempt to keep it clean, will work, just make sure you load pages in correct order in html
var output = document.getElementById("container");
var containerContent;
var containerContentIdCounter = 1;

famousPeople.forEach(function (person) {
	containerContent = document.createElement('div');
	containerContent.setAttribute("class", "famous");
	containerContent.setAttribute("id", "counter" + containerContentIdCounter );
	containerContent.innerHTML = 
	"<img class='photo' src='" + person.image + "''>" +
	"<h4>" + person.title + person.name +"</h4>" + 
	"<section id='outputArea'>" + person.bio + "</section>" +
	"<p>" + "lifespan:" + person.lifespan.birth + "-" + person.lifespan.death + "</p>";
	output.appendChild(containerContent);
	containerContentIdCounter ++;


});
//event listener
var input = document.getElementById("textarea");
input.addEventListener("keyup", function (event) {
	if (event.keyCode == 13) {
		input.value = "";
	}
});

var listen = document.getElementsByClassName("famous");
listen[0].addEventListener("click", function(event) {
	listen[0].style.border = "dotted";
	input.focus();
	listen[0].classList.toggle("highlight");
	console.log(listen[0]);
});
listen[1].addEventListener("click", function(event) {
	listen[1].style.border = "dotted";
	input.focus();
	listen[1].classList.toggle("highlight");

});
listen[2].addEventListener("click", function(event) {
	listen[2].style.border = "dotted";
	input.focus();
	listen[2].classList.toggle("highlight");

});
listen[3].addEventListener("click", function(event) {
	listen[3].style.border = "dotted";
	input.focus();
	listen[3].classList.toggle("highlight");

});

input.addEventListener("keypress", function (event) {
	var output = document.getElementById("outputArea");
	output.innerHTML = input.value;
});





