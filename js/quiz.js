// quiz.js

const quizData = [
    {
        question: "경주 불국사의 창건 연도는?",
        choices: ["528년", "751년", "774년", "802년"],
        answer: "751년"
    },
    {
        question: "첨성대의 용도는 무엇인가요?",
        choices: ["천문 관측", "종교 의식", "방어 시설", "저장 창고"],
        answer: "천문 관측"
    },
    {
        question: "경주에 있는 석굴암은 어떤 건축 양식을 보여주나요?",
        choices: ["신라 석조", "고려 목조", "조선 궁궐", "백제 탑"],
        answer: "신라 석조"
    }
];

let currentQuiz = 0;
let score = 0;

// DOM 요소 가져오기
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');

// 퀴즈 로드 함수
function loadQuiz() {
    const current = quizData[currentQuiz];
    questionEl.textContent = current.question;

    // 이전 선택지 초기화
    choicesEl.innerHTML = '';

    // 선택지 버튼 생성
    current.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.textContent = choice;
        btn.classList.add('btn-secondary');
        btn.onclick = () => selectAnswer(choice);
        choicesEl.appendChild(btn);
    });

    // 다음 버튼 숨기기
    nextBtn.style.display = 'none';
}

// 선택 답안 처리
function selectAnswer(choice) {
    const correct = quizData[currentQuiz].answer;

    if (choice === correct) {
        score++;
        alert("정답!");
    } else {
        alert(`오답! 정답은 ${correct}입니다.`);
    }

    // 다음 문제 버튼 보이기
    nextBtn.style.display = 'inline-block';
}

// 다음 문제 버튼 클릭
nextBtn.onclick = () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        showScore();
    }
};

// 최종 점수 표시
function showScore() {
    quizContainer.innerHTML = `<h3>퀴즈 종료! 점수: ${score} / ${quizData.length}</h3>`;
}

// 초기 퀴즈 로드
loadQuiz();
