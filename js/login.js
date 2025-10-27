document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const id = document.getElementById("username").value.trim().toLowerCase();
        const password = document.getElementById("password").value.trim();

         if (!id || !password) {
            alert("아이디와 비밀번호를 입력해주세요.");
            return;
        }

        // localStorage에서 회원 정보 불러오기
        const users = JSON.parse(localStorage.getItem("users")) || {};

        if (users[id] && users[id] === password) {
            // 로그인 성공 → 상태 저장
            localStorage.setItem("user", id);

            alert("로그인 성공!");
            window.location.href = "index.html"; // 로그인 후 이동
        } else {
            alert("ID 또는 비밀번호가 틀렸습니다!");
        }
    });
});
