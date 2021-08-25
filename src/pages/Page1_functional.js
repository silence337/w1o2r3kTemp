import React, { useState } from "react";
// useState, useRef, useEffect 등 은 hooks 방식으로(함수형으로 사용) class 방식에서는 적용되지 않음.

const Page1 = () => {
    // useState 상태값 초기값은 false 이며, 아래 setToggle 로 상태값을 변경함.
    const [isToggle, setToggle] = useState(false);

    const toggle = () => {
        /*

        if(isToggle 이 true 이면){ 
            return setToggle(false);
            false로 변경하고 ↓ 아래 로직을 건너띄고 toggle 함수를 빠져나간다.
        }
        setToggle(true);  isToggle 를 true로 변경

        */

        if (isToggle) {
            return setToggle(false);
        }
        setToggle(true);

        /* 또는
        
		if (isToggle) {
			setToggle(false);
		} else {
            setToggle(true);
        }

        */
    };

    return (
        <div style={{ padding: "20px" }}>
            page1 - toggle 을 만들어보아요.
            <div style={{ paddingTop: "20px" }}>
                <button type="button" onClick={toggle}>
                    토글토글
                </button>
                {/*
                        삼항연산자로 isToggle 상태에 따라 class를 변경한다.
                        삼항연산자 = (조건) ? true : false 
                        https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
                        이해를 돕고자 삼항연산자를 풀어서 작성해보면 아래와 같음

                        if (isToggle) {
                            "show"
                        } else {
                            "hide" 
                        }

                    */}
                <div className={`toggleContent ${isToggle ? "show" : "hide"}`}>
                    간단한 토글토글
                </div>
            </div>
        </div>
    );
};

export default Page1;
