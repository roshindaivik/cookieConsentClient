document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("search").addEventListener("input", function (e) {
    var searchValue = e.target.value.toLowerCase();
    var articles = document.querySelectorAll("article");
    articles.forEach(function (article) {
      var title = article.querySelector("h1").textContent.toLowerCase();
      if (title.includes(searchValue)) {
        article.style.display = "";
      } else {
        article.style.display = "none";
      }
    });
  });

  var cookieBanner = document.getElementById("cookie-banner");
  var acceptCookies = document.getElementById("accept-cookies");
  var rejectCookies = document.getElementById("reject-cookies");

  const cookieConsent = cookieExists("cookieConsent");
  if (cookieConsent) {
    cookieBanner.style.display = "none";
  }
  acceptCookies.addEventListener("click", function () {
    setCookie("cookieConsent", true, 365);
    cookieBanner.style.display = "none";
  });

  rejectCookies.addEventListener("click", function () {
    setCookie("cookieConsent", false, 365);
    cookieBanner.style.display = "none";
  });
});

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function cookieExists(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return true;
  }
  return false;
}
