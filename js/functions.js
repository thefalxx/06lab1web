function compareAge() {
    var artistAge = document.getElementById("artistAge").value;

    if (artistAge < 25) {
      document.getElementById("result").innerHTML =
        "They're " + artistAge + " years old and they're younger than Google.";
    } 
    else if (artistAge == 25) {
      document.getElementById("result").innerHTML =
        "They're " + artistAge + " years old and they're as old as Google.";
    } 
    else {
      document.getElementById("result").innerHTML =
        "They're " + artistAge + " years old and they're older than Google.";
    }
  }
  