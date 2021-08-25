import React, { Component } from "react";
import ExampleChild from './Child';
import 'assets/scss/test.scss';

// class 컴포넌트 방식
class Example extends Component {
    constructor () {
        super(); //super() 를 호출해 주는 이유는, constructor 안에서 this 를 사용하기 위해서 : 이점은 ES6 class와는 조금 다른? 리액트가 변형시켰나?

        // state
        this.state = {
            name : '이름을 변경해보아요',
            input: '',
        }
    }

    // class 안에 arrow function 
    handleChange = (e) => {
        this.setState({
            input: e.target.value 
        });
    }

    changeName = (e) => {
        // input value 로 this.state.name 변경
        const { input } = this.state;

        if(input === ''){
			return;
		}
        this.setState({ input: '', name: '' }, () => {
            this.setState({ name: input }, () => {
                console.log(input);
            });
        });
    }


    render() {
        const {name, input} = this.state; // > this.state.name, this.state.input
        const {changeName, handleChange} = this;
        
        return (
            <div className="test">
                {
                    /*
                        ExampleChild component 에 state 값, 이벤트 함수 전달 
                        sendName, sendHandler, sendChange, sendValue 등으로 네이밍을 정해서 value 에 state 값을 전달한다.
                    */
                }
                <ExampleChild sendName={name} sendHandler={changeName} sendChange={handleChange} sendValue={input} />
                <br/><br/>
                <img src={require('assets/images/IMG_4379.jpg').default} alt=""/>
            </div>
        );
    }
}

export default Example;