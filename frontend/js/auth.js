// Check if user is logged in
function checkAuth() {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
        const authLink = document.getElementById("authLink");
        if (authLink) {
            authLink.textContent = `Logout (${user.name})`;
            authLink.href = "#";
            authLink.onclick = logout;
        }
    }
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    window.location.href = "login.html";
}

// Run on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAuth);
} else {
    checkAuth();
}