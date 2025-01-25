document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "admin123") {
    // Přesměrování na další stránku po úspěšném přihlášení
    window.location.href = "admin_dashboard.html"; // Změňte URL podle potřeby
  } else {
    document.getElementById("errorMessage").innerText = "Neplatné uživatelské jméno nebo heslo.";
  }
});
