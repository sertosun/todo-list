var myListItems = document.getElementsByTagName("li");

// erstellt einen close button
for (i = 0; i < myListItems.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("X");
  span.className = "closeButton";
  span.append(txt);
  myListItems[i].append(span);
}
