const Quizdata = [
    {
        question: "Who is the Father of Computer?",
        a: "Charles Babage",
        b: "Plaze pascal",
        c: "Alfrend Novel",
        d: "None of these",
        answer: "a"


    },
    {
        question: "RAM stands for:",
        a: "Random Access Memory",
        b: "Read Only Memory",
        c: "Both a & b",
        d: "None of these",
        answer: "a"

    },
    {
        question: "Who is the PM of India?",
        a: "Amit Shah",
        b: "Rajnath Singh",
        c: "Narendra Modi",
        d: "Anurag Thakur",
        answer: "c"
    },
    {
        question: "HTML stands for:",
        a: "Hypertext Markup Language",
        b: "Jeson",
        c: "Ajax",
        d: "React",
        answer: "a"
    },
    {
        question: "C Language was developed in?",
        a: "1972",
        b: "1971",
        c: "1976",
        d: "1975",
        answer: "a"

    }
]
const question = document.getElementById("question");
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const btn = document.getElementById("btn");
let cq = 0;
// const a=document.getElementById("a");
loadQuiz();
function loadQuiz() {
    q = Quizdata[cq];
    question.innerHTML = q.question;
    a_text.innerHTML = q.a;
    b_text.innerHTML = q.b;
    c_text.innerHTML = q.c;
    d_text.innerHTML = q.d;
   
    cq++;

}

btn.addEventListener("click", () => {
    
   
    
    if (cq < Quizdata.length) {
        loadQuiz();
    }
    else {
        alert("You finished!");
    }

})
