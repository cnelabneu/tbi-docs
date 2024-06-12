// Check if the user is authenticated
function isAuthenticated() {
    // Implement your authentication logic here
    return sessionStorage.getItem('authenticated') === 'true';
}

// Redirect to login page if not authenticated
function redirectToLogin() {
    const loginPagePath = '/tbi-docs/login.html'; // Adjust path to the correct login page path

    if (!isAuthenticated()) {
        if (!window.location.pathname.endsWith(loginPagePath)) {
            console.log('User not authenticated. Redirecting to login page.');
            window.location.href = loginPagePath;
        } else {
            console.log('Already on the login page.');
        }
    } else {
        console.log('User is authenticated.');
    }
}

// Run the redirection check on page load
document.addEventListener('DOMContentLoaded', function () {
    redirectToLogin();
});
