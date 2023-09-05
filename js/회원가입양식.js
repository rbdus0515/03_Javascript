// 유효성 검사 객체
const checkObj = {
    "inputId" : false, // 아이디
    "inputPw" : false, // 비밀번호
    "inputPwConfirm" : false, // 비번확인
    "inputName" : false, // 이름
    "gender" : false, // 성별
    "inputTel" : false // 전화번호
}

// 아이디 확인
document.getElementById("inputId").addEventListener("change", function () {

    const regExp = /^[a-z][\w-_]{5,13}$/;
                // 소문자시작(1) + 나머지(5~13) = 6~14글자
    if (regExp.test(this.value)) {
        this.style.backgroundColor = "springgreen";
        checkObj.inputId = true;
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
        checkObj.inputId = false;
    }
});
    

// 비밀번호, 비밀번호 확인 : 키보드가 올라올 때
const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");

inputPwConfirm.addEventListener("keyup", function() {

    if(inputPw.value.length == 0) {
        this.value = "";
        alert("비밀번호를 입력해주세요");
        inputPw.focus();
        checkObj.inputPw = false;
    }
});

// 비밀번호 일치할 경우
// 비밀번호 일치하지 않을 경우
const pwMessage = document.getElementById("pwMessage");

inputPw.addEventListener("keyup", function() {

    if( (inputPw.value == inputPwConfirm.value) && inputPw.value.length != 0 ) {
        pwMessage.innerText = "비밀번호 일치";
        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error");
        checkObj.inputPw = true;
        checkObj.inputPwConfirm = true;
    } else {
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
        checkObj.inputPw = false;
        checkObj.inputPwConfirm = false;
    }

});

inputPwConfirm.addEventListener("keyup", function() {

    if( (inputPw.value == inputPwConfirm.value) && inputPw.value.length != 0 ) {
        pwMessage.innerText = "비밀번호 일치";
        pwMessage.classList.add("confirm");
        pwMessage.classList.remove("error");
        checkObj.inputPw = true;
        checkObj.inputPwConfirm = true;
    } else {
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.classList.add("error");
        pwMessage.classList.remove("confirm");
        checkObj.inputPw = false;
        checkObj.inputPwConfirm = false;
    }

});

// 이름 확인
document.getElementById("inputName").addEventListener("change", function() {

    const regExp = /^[가-힣]{2,5}$/;

    const nameMessage = document.getElementById("nameMessage");
    
    if(regExp.test(this.value)) {
        nameMessage.innerText = "정상입력";
        nameMessage.classList.add("confirm");
        nameMessage.classList.remove("error");
        checkObj.inputName = true;
    } else {
        nameMessage.innerText = "한글만 입력하세요";
        nameMessage.classList.add("error");
        nameMessage.classList.remove("confirm");
        checkObj.inputName = false;
    }

});

// 회원가입 버튼 클릭시
function validate() {

    // 성별이 선택되지 않은 경우
    const gender = document.getElementsByName("gender");

    if(!gender[0].checked && !gender[1].checkVisibility) {
        alert("성별을 선택해주세요.");
        checkObj.gender = false;

        return false;
    } else {
        checkObj.gender = frue;
    }
    // 전화번호 형식이 올바르지 않을 경우
    const inputTel = document.getElementById("inputTel");
    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    if(!regExp.test(inputTel.value)) {
        alert("전화번호의 형식이 올바르지 않습니다.");
        checkObj.inputTel = false;
        return false;
    } else {
        checkObj.inputTel = true;
    }

    // checkObj가 전부 true일때 == 모든 유효성 검사를 통과했을 때 ==> 회원가입
    for(let key in checkObj) {
        if( !ckeckObj[key] ) { // 1) checkObj["inputTel"] ==> false
            return false;
        }
    }

    alert("회원가입 완료")
    return true;
}

