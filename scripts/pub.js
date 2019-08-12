var pubContainer = document.getElementById("publications");
var ourRequest = new XMLHttpRequest();

ourRequest.open('GET', 'https://api.github.com/repos/NoNGNLab/Publications/contents/');
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);

};
ourRequest.send( );

function renderHTML(data) {
  
  var htmlString = ""; 

  for (i = 0; i < data.length; i++) {
    htmlString += "<p><a href=\"" + data[i].html_url + "\">" + data[i].name + "</a></p>";
  }
  pubContainer.insertAdjacentHTML('beforeend', htmlString);
}
