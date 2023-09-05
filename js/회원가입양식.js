// form 내부에서 회원가입(submit) 버튼이 클릭된 경우


// 아이디 확인
document.getElementById("clickButton").addEventListener("click", function() {
    
    document.getElementById("inputId").addEventListener("click", function() {

    const regExp = /^[a-z][\w\d][-][_]{6,14}/;

    if( regExp.test(this.value) ) {
        this.style.backgroundColor = "springgreen";
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    }
    });
    
});

// 비밀번호, 비밀번호 확인 : 키보드가 올라올 때
// 성공
document.getElementById("inputPwConfirm").addEventListener("keyup" , function() {

    const span = document.getElementById("pwMessage");


    if(inputPw.value == 0) {
        alert("비밀번호를 입력해주세요.");
        document.getElementById("inputPw").focus();
        inputPwConfirm.value = null;
        return;
    }

    if(inputPwConfirm.value == inputPw.value) {
        span.innerText = "비밀번호 일치";
        span.style.color = "green";
    } else {
        span.innerText = "비밀번호 불일치";
        span.style.color = "red";
    }

});

// 이름 확인
// 성공?
document.getElementById("inputName").addEventListener("keyup", function() {

    const span = document.getElementById("nameMessage");

    const regExp3 = /^[가-힣]{2,5}$/;
    
    if(this.value.length == 0) {
        span.innerText = "";
        return;
    }

    if (regExp3.test(this.value)) {
        span.innerText = "정상입력";
        span.style.color = "green";
    } else {
        span.innerText = "한글만 입력하세요.";
        span.style.color = "red";
    }
});

// 회원가입 버튼 클릭시 성별체크
document.getElementById("uploade").addEventListener("click", function() {

    
});

// 전화번호 형식이 올바르지 않을 경우
document.getElementById("inputTel").addEventListener("click", function() {

    const regExp4 = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if (regExp4.test(this.value)) {
        alert('전화번호의 형식이 올바르지 않습니다.')
    }

});