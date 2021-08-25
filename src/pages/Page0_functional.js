import React, { Component } from "react";
//              요 Component 는 class 방식에서 사용하는 Component 이므로, hook 방식에선 사용하지 않음
import Parent from "components/state/Parent";

/*
 * hooks 방식은 함수형 방식을 사용함.
 * 표기법 ES5 function >           function ExampleState ()
 * 표기법 ES6 Arrow function >    const ExampleState = () =>
 */

//function ExampleState () {
const ExampleState = () => {
    return (
        <div>
            <Parent />
        </div>
    );
};

export default ExampleState;
