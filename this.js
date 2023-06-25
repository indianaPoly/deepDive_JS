// this : 객체 자신을 가리키는 지시자
// () => {} : 화살표 함수는 내부의 this 값을 변화시키지 않음 (외부 this 값 그대로 사용)

function a() {
  console.log(this); // window 출력
}
a();

var obj1 = {
  data: {
    act: function() {
      console.log(this); // obj1.data 객체를 가리킴
    },
    act1: () => {
      console.log(this); // window 출력 
    } 
  },
  act: function() {
    console.log(this); // obj1 객체를 가리킴
  },
}

obj1.data.act();
obj1.data.act1();
obj1.act();

let obj2 = {
  value : '',
  act: function() {
    this.value = "default value" // obj2 객체의 value

    function innerAct() {
      this.value = 'innerAct value'; // 전역 객체의 value
      console.log("this.value: " + this.value); // 전역 객체를 참조
    }
    
    function innerReact(caller) {
      caller.value = "innerReact value"; // obj2 객체의 value
      console.log("this.value: " + this.value) // 전역 객체 참조
      console.log("this.value: " + caller.value) // obj2 객체를 참조
    }

    innerAct();
    console.log("this.value: " + this.value); // obj2 객체를 참조
    
    innerReact(this); // 해당 this는 obj 객체
    console.log("this.value: " + this.value); // obj2 객체 참조
  }
};

obj2.act()

