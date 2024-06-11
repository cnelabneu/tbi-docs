// Redirect to login page if not logged in and current page is not login page
if (!localStorage.getItem('loggedIn') && !window.location.pathname.includes('/login')) {
    window.location.href = '/login/';
}
