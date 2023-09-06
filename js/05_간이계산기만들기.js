function calculate(op) {
    // op에는 +,=,*,/,% 중 전달되서 옴

    // input에 입력된 값을 얻어와 number 타입으로 변환

    const num1 = Number (document.getElementById("num1").value);
    const num2 = Number (document.getElementById("num2").value);

    // 결과 저장용 변수
    let res = 0;

    switch(op) {
        case '+' : res = num1 + num2; break;
        case '-' : res = num1 - num2; break;
        case '*' : res = num1 * num2; break;
        case '/' : res = num1 / num2; break;
        case '%' : res = num1 % num2; break;
    }

    // span 태그 결과출력
    document.getElementById("result").innerText = res;
}