var pubContainer = document.getElementById("repositories");
var ourRequest = new XMLHttpRequest();

ourRequest.open('GET', 'https://api.github.com/users/noNGNLab/repos');
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);

};
ourRequest.send( );

function renderHTML(data) {
  
  var htmlString = ""; 

  for (i = 0; i < data.length; i++) {
    if (data[i].name != "Publications" && data[i].name != "NoNGNLab.github.io") { 
      htmlString += "<p><a href=\"" + data[i].html_url + "\">" + data[i].name + "</a></p>";
    }
  }
  pubContainer.insertAdjacentHTML('beforeend', htmlString);
}
