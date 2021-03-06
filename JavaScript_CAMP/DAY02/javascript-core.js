/*! javascript-core.js © yamoo9.net, 2016 */

// ------------------------------------------------------------------------------------
// 자바스크립트의 데이터 유형
// ------------------------------------------------------------------------------------
// 아래 2가지는 객체가 아닙니다.
// null, undefined
// ------------------------------------------------------------------------------------
// 아래 6가지 데이터 유형은 객체입니다.
// 1. 숫자(Number)
// 2. 문자(String)
// 3. 불리언(Boolean)
// 4. 객체(Object)
// 5. 배열(Array)
// 6. 함수(Function)
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
// node.js 환경에서 실행
// $ node {javascript.js 파일 이름}
// ------------------------------------------------------------------------------------
// console.log('웹 브라우저가 아닌 환경에서도 코드가 실행됩니다. :-)');


// ------------------------------------------------------------------------------------
// 점으로 이루어지는 문장 구문
// 객체.속성
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
// 여러 줄 주석 ↙
// ------------------------------------------------------------------------------------
/*
상황에 따라 아래처럼 대괄호 표기법을 사용할 수도 있다.
대괄호 표기법 사용하는 예는 변수를 전달할 경우이다. 향후 예제를 통해 다뤄보자.

var prop = '속성이름';
객체[prop]
*/


// ------------------------------------------------------------------------------------
// 콘솔 패널에 아래와 같이 입력하면 화면에 스타일이 처리됩니다.
// console.log('%c this is console object', 'color: red; font-weight: bold; font-size: 200px');
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
// 메모리 공간 변수에 데이터를 대입할 때
// ------------------------------------------------------------------------------------
// 1. pass-to-value (복사)
// ------------------------------------------------------------------------------------
// 예시) 원시데이터: Number, String, Boolean, null, undefined
var current_year = 2016; // Number Data Type (숫자 리터럴)
var c_year = current_year;

// 변수에 담긴 값을 변화(교체)
current_year = 2017;
console.log(c_year); // 2016? 2017?

// ------------------------------------------------------------------------------------
// 2. pass-to-reference (참조)
// ------------------------------------------------------------------------------------
// 예시) 복합 데이터(자료형) Object, Array, Function, ..
var iropke = {}; // 객체(오브젝트) 리터럴(값)
iropke.location = '역삼';
iropke.members = 38;

console.log('iropke:', iropke);

var clone_iropke = iropke; // { location: '역삼', memebers: 38 }

clone_iropke.type = 'Agency';

console.log('clone_iropke:', clone_iropke);
console.log('iropke:', iropke);

clone_iropke = iropke = null;

console.log('iropke:', iropke); // null
console.log('clone_iropke:', clone_iropke); // null? < 참조된 객체가 출력된다 >
// ------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------
// 그 자체의 값(리터럴)의 경우 변수에 할당 시에 값이 복사된다.

// Application 초기화 과정
// 초기 변수 설정

var parent;
// var parent = null;
var grand_parent;
// var grand_parent = null;

console.log(parent, grand_parent); // undefined



// ------------------------------------------------------------------------------------
// 유형(Type) 변경하기

// 1. Number → String
// 1.1 '{number}'
// 1.2 {number} + ''
// 1.3 String( {number} )
// 1.4 {number}.toString()

// 2. String {숫자형 문자} → Number
// 2.1 -0, *1, /1
// 2.2 숫자형 문자 앞에 +를 붙인 경우
// 2.3 Number(숫자형문자)
// 2.4 parseInt(data, 10), parseFloat(data, 10)

// 3. Boolean 형 변환 {data} → Boolean
// 3.1 Boolean( {data} )
// 3.2 !!{data}


// 자바스크립트의 모든 빌트인(네이티브) 객체의 리터럴 값
var num, str, boo, fuc, arr, obj;

// ※ 특별한 경우가 아니라면 new 생성자() 가 아닌 리터럴을 사용하는 것이 권장됩니다.
num = 180;          // new Number()
str = 'how';        // new String()
boo = true;         // new Boolean()
fuc = function(){}; // new Function()
arr = [];           // new Array()
obj = {};           // new Object()


// ------------------------------------------------------------------------------------
// 연관배열
// 자바스크립트 배열은 실제 배열이 아니라, 객체이며 배열처럼 보이게 만든 유사품과 같다.
var cssList = [];

cssList[0] = 'font-size';
cssList[1] = 'flex';

cssList['maker'] = 'yamoo9';

console.log(cssList);
console.dir(cssList);

function type(data) {
   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}
