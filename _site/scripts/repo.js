var pubContainer = document.getElementById("repositories");
var ourRequest = new XMLHttpRequest();

ourRequest.open('GET', 'https://api.github.com/users/NordNeurogenomicsLab/repos');
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);

};
ourRequest.send( );

function renderHTML(data) {
  
  var htmlString = ""; 

  for (i = 0; i < data.length; i++) {
    if (data[i].name != "Publications" && data[i].name != "NordNeurogenomicsLab.github.io") { 
      htmlString += "<p><a href=\"" + data[i].html_url + "\"  target=\"_blank\">" + data[i].name + "</a></p>";
    }
  }
  pubContainer.insertAdjacentHTML('beforeend', htmlString);
}
