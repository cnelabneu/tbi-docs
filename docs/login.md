# Login

<form onsubmit="login(); return false;">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username"><br><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password"><br><br>
    <input type="submit" value="Login">
</form>

<script>
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'tbiadmin' && password === 'BrainImpact24') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html'; // Redirect to MkDocs index page
    } else {
        alert('Invalid credentials');
    }
}
</script>
