// change the logo image
var logo = document.getElementById("hplogo");
logo.setAttribute("srcset", "https://image.slidesharecdn.com/huski-150206103143-conversion-gate01/95/huski-2-638.jpg?cb=1423240402");
logo.style.width = "200px";
logo.style.height = "100px";

// view all link contents, change all links to www.bing.com with pink background
var links = document.getElementsByTagName("a");
for (var i=0; i<links.length; i++){
    console.log(links[i].textContent)
}
for (var i=0; i<links.length; i++){
    links[i].style.background = "pink";
    links[i].setAttribute("href","http://www.bing.com");
}