/**
 * @hoisting
 * 인터프리터가 변수와 함수의 메모리 공간을 선언하기 전에 미리 할당하는 것
 * 자바스크립트 엔진은 코드를 실행하기 전 실행한 코드를 형상화 하고 구분하는 과정을 거침
 * 이 때 모든 선언 (var, let, cont function, class)를 스코프에 등록
*/

// var : 호이스팅시 undefined로 변수 초기화
// let , const : 호이스팅시 변수 초기화 하지 않음

// javascript는 초기화를 제외한 선언만 호이스팅
// 변수 먼저 사용 후 선언 및 초기화가 나타나면, 사용하는 시점의 변수는 기본 초기화 상태
console.log(num); // 호이스팅한 var 선언으로 인해 undefined 출력
var num;

// ------------------------------------
x = 1;
console.log(x + " " + y); // 1 undefined 출력
var y = 2;