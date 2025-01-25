<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roblox Admin Panel - Login</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
            margin: 0;
            background: linear-gradient(135deg, #00c6ff, #0072ff);
            color: #fff;
        }
        .login-container {
            background: rgba(0, 0, 0, 0.6);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            width: 300px;
            text-align: center;
        }
        .login-container h1 {
            margin-bottom: 20px;
        }
        .login-container input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: none;
            border-radius: 5px;
        }
        .login-container button {
            background: #00c6ff;
            color: #fff;
            border: none;
            padding: 10px;
            width: 100%;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }
        .login-container button:hover {
            background: #0072ff;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h1>Login</h1>
        <form id="loginForm">
            <input type="text" id="username" placeholder="Uživatelské jméno" required>
            <input type="password" id="password" placeholder="Heslo" required>
            <button type="submit">Přihlásit se</button>
        </form>
    </div>

    <script>
        // Simulovaný login (zatím neověřuje proti serveru)
        const loginForm = document.getElementById("loginForm");
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Kontrola přihlašovacích údajů (tady bude později napojení na backend)
            if (username === "admin" && password === "1234") {
                alert("Přihlášení úspěšné!");
                // Tady můžeš přesměrovat na hlavní stránku admin panelu
                window.location.href = "panel.html";
            } else {
                alert("Nesprávné přihlašovací údaje.");
            }
        });
    </script>
</body>
</html>
