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

document.addEventListener('DOMContentLoaded', function() {
  // Načteme seznam uživatelů, pokud nějaké existují v localStorage
  const userList = JSON.parse(localStorage.getItem('users')) || [];
  const userListElement = document.getElementById('userList');
  
  // Funkce pro zobrazení uživatelů
  function displayUsers() {
    userListElement.innerHTML = '';
    userList.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.username} - Role: ${user.role}`;
      userListElement.appendChild(li);
    });
  }

  // Inicializace zobrazení uživatelů
  displayUsers();

  // Přidání nového uživatele
  document.getElementById('createUserForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;

    // Přidání nového uživatele do pole
    const newUser = { username, role };
    userList.push(newUser);

    // Uložení do localStorage
    localStorage.setItem('users', JSON.stringify(userList));

    // Obnovení seznamu uživatelů na stránce
    displayUsers();

    // Vyprázdnění formuláře
    document.getElementById('createUserForm').reset();
  });
});
