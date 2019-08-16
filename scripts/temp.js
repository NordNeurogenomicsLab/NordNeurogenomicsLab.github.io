function myFunction() {
  alert("hey");
  var sorted = lastLetterSort.sort(function(a, b) {

    if (parseInt(a.split("_").slice(-1)[0], 10) > parseInt(b.split("_").slice(-1)[0], 10))
        return -1;
    else if (parseInt(a.split("_").slice(-1)[0], 10) < parseInt(b.split("_").slice(-1)[0], 10))
        return 1;

    return 0;

})


