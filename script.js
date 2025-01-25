document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "admin123") {
    // Přesměrování na admin panel po úspěšném přihlášení
    window.location.href = "admin_dashboard.html";  // Ujistěte se, že soubor admin_dashboard.html existuje
  } else {
    document.getElementById("errorMessage").innerText = "Neplatné uživatelské jméno nebo heslo.";
  }
});


document.addEventListener('DOMContentLoaded', function() {
  // Inicializace záložek
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Skrytí všech záložek
      tabContents.forEach(content => content.style.display = 'none');

      // Odebrání třídy "active" ze všech záložek
      tabs.forEach(tab => tab.classList.remove('active'));

      // Zobrazení aktuální záložky
      const contentId = tab.id.replace('tab', '').toLowerCase();
      document.getElementById(contentId).style.display = 'block';

      // Přidání třídy "active" k aktuální záložce
      tab.classList.add('active');
    });
  });

  // Aktivace první záložky po načtení stránky
  document.getElementById('tabBans').click();
});
