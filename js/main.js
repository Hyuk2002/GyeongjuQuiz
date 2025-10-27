document.addEventListener("DOMContentLoaded", function () {
      // 1️⃣ 현재 페이지 메뉴 하이라이트
    const currentPage = location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // 2️⃣ 로그인/로그아웃 기능
    const user = localStorage.getItem("user");
    const loginMenu = document.getElementById("login-menu");
    const logoutMenu = document.getElementById("logout-menu");
    const logoutBtn = document.getElementById("logout-btn");

    if (user) {
        if (loginMenu) loginMenu.style.display = "none";
        if (logoutMenu) logoutMenu.style.display = "block";
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault(); // href 이동 막기
            localStorage.removeItem("user");
            alert("로그아웃 되었습니다!");
            if (loginMenu) loginMenu.style.display = "block";
            if (logoutMenu) logoutMenu.style.display = "none";
            window.location.href = "index.html"; // 로그아웃 후 이동
        });
    }

});


