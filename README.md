<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>WebHostManager</title>

    <!-- ================= CSS ================= -->
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f6f8;
            margin: 0;
        }

        header {
            background: #1e293b;
            color: white;
            padding: 15px;
            text-align: center;
        }

<<<<<<< HEAD
        nav {
            background: #334155;
            padding: 10px;
            text-align: center;
            display: none;
        }

        nav a {
            color: white;
            margin: 0 15px;
            text-decoration: none;
            cursor: pointer;
        }

        .container {
            padding: 20px;
            display: none;
        }

        .card {
            display: inline-block;
            background: white;
            padding: 20px;
            margin: 10px;
            width: 200px;
            text-align: center;
            border-radius: 5px;
        }

        .login-box {
            width: 300px;
            margin: 120px auto;
            background: white;
            padding: 25px;
            border-radius: 5px;
            text-align: center;
        }

        input, select {
            width: 90%;
            padding: 8px;
            margin: 8px 0;
        }

        button {
            padding: 10px 15px;
            background: #2563eb;
            color: white;
            border: none;
            cursor: pointer;
        }

        table {
            width: 100%;
            margin-top: 15px;
            border-collapse: collapse;
        }

        table, th, td {
            border: 1px solid #ccc;
        }

        th, td {
            padding: 10px;
            text-align: center;
        }

        #error {
            color: red;
        }
    </style>
</head>
<body>

<!-- ================= LOGIN PAGE ================= -->
<div id="loginPage" class="login-box">
    <h2>WebHostManager</h2>
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button onclick="login()">Login</button>
    <p id="error"></p>
</div>

<!-- ================= HEADER ================= -->
<header id="mainHeader" style="display:none;">
    <h2>WebHostManager Dashboard</h2>
</header>

<!-- ================= NAVBAR ================= -->
<nav id="navbar">
    <a onclick="showDashboard()">Dashboard</a>
    <a onclick="showClients()">Clients</a>
    <a onclick="logout()">Logout</a>
</nav>

<!-- ================= DASHBOARD ================= -->
<div id="dashboard" class="container">
    <div class="card">Total Clients<br><strong id="totalClients">0</strong></div>
    <div class="card">Active Hosting<br><strong>—</strong></div>
    <div class="card">Pending Payments<br><strong>—</strong></div>
</div>

<!-- ================= CLIENT MANAGEMENT ================= -->
<div id="clients" class="container">
    <h3>Add Client</h3>

    <input type="text" id="clientName" placeholder="Client Name">
    <input type="text" id="domain" placeholder="Domain Name">

    <select id="payment">
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
    </select>

    <button onclick="addClient()">Add Client</button>

    <h3>Client List</h3>
    <table>
        <tr>
            <th>Name</th>
            <th>Domain</th>
            <th>Payment</th>
        </tr>
        <tbody id="clientTable"></tbody>
    </table>
</div>

<!-- ================= JAVASCRIPT ================= -->
<script>
    function login() {
        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;

        if (user === "admin" && pass === "admin") {
            document.getElementById("loginPage").style.display = "none";
            document.getElementById("navbar").style.display = "block";
            document.getElementById("mainHeader").style.display = "block";
            showDashboard();
        } else {
            document.getElementById("error").innerText = "Invalid Login";
        }
    }

    function showDashboard() {
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("clients").style.display = "none";
    }

    function showClients() {
        document.getElementById("dashboard").style.display = "none";
        document.getElementById("clients").style.display = "block";
    }

    function logout() {
        location.reload();
    }

    function addClient() {
        let name = document.getElementById("clientName").value;
        let domain = document.getElementById("domain").value;
        let payment = document.getElementById("payment").value;

        if (name === "" || domain === "") {
            alert("Please fill all fields");
            return;
        }

        let table = document.getElementById("clientTable");
        let row = table.insertRow();

        row.insertCell(0).innerText = name;
        row.insertCell(1).innerText = domain;
        row.insertCell(2).innerText = payment;

        document.getElementById("totalClients").innerText = table.rows.length;

        document.getElementById("clientName").value = "";
        document.getElementById("domain").value = "";
    }
</script>

</body>
</html>
=======
## Live Website
https://prajwalgit216.github.io/my-developer-profile/
>>>>>>> 76b89ccb106bb57972bd318f456631ef4c916c29
