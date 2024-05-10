document.addEventListener("DOMContentLoaded", function () {
  var cookieName = "adServSSP";
  checkCookie(cookieName);
});

function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cookieName) {
  var user = getCookie(cookieName);
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    setCookie();
  }
}

function setCookie() {
  fetch("http://localhost:3000/admin/set-cookie", {
    method: "POST",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
}
