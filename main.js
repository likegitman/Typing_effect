let target = document.querySelector("#dynamic");

// 지워졌을 때 다시 문자열 배열 출력
function randomString() {
    let stringArr = ["Lean to HTML", "Lean to CSS",
        "Lean to JAVASCRIPT", "Lean to C language", "Lean to JAVA"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

// 타이핑 된 글자 리셋
function resetTyping() {
    target.textContent = "";

    dynamic(randomString());
}

// 한 글자씩 text를 출력
function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function () {
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

// 커서 깜빡임
function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);