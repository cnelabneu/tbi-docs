// Check if the user is authenticated
function isAuthenticated() {
    // Implement your authentication logic here
    return sessionStorage.getItem('authenticated') === 'true';
}

// Redirect to login page if not authenticated
function redirectToLogin() {
    const loginPagePath = '/login'; // Adjust path as needed, e.g., '/login' if the file is login.html

    if (!isAuthenticated()) {
        if (window.location.pathname !== loginPagePath) {
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
