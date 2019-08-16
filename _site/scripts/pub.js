var pubContainer = document.getElementById("publications");
var ourRequest = new XMLHttpRequest();

ourRequest.open('GET', 'https://api.github.com/repos/NordNeurogenomicsLab/Publications/contents/');
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);

};
ourRequest.send( );

function renderHTML(data) {
  
  var pubList = [];
  var htmlString = ""; 
  var temp = "";
 
  for (i = 0; i < data.length; i++) {
    if (data[i].name != "README.md") {
      temp = data[i].html_url + '$$$' + data[i].name;
      pubList.push(temp);
      temp = "";
    }
  }
  var sorted = pubList.sort(function(a, b) {

    if (parseInt(a.split("_").slice(-1)[0], 10) > parseInt(b.split("_").slice(-1)[0], 10))
        return -1;
    else if (parseInt(a.split("_").slice(-1)[0], 10) < parseInt(b.split("_").slice(-1)[0], 10))
        return 1;

    return 0;
  })

  for (i = 0; i < pubList.length; i++) { 
     htmlString += "<p><a href=\"" + pubList[i].split("$$$")[0] + "/README.md\">" + pubList[i].split("$$$").slice(-1)[0] + "</a></p>";
  }
  pubContainer.insertAdjacentHTML('beforeend', htmlString);
}
