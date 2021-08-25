import React, { Component } from "react";

class ExampleChild extends Component {
    constructor(props){
        super(props); 
        console.log(props); // props 는 아래 this.props 와 같다.

        //1. element DOM 에 접근하기 위하여 createRef 를 생성한다.
        this.headingTagRef = React.createRef();
    }


    /*
        2. componentDidMount()는 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출됩니다. 
            DOM 노드가 있어야 하는 초기화 작업은 이 메서드에서 이루어지면 됩니다.
            https://ko.reactjs.org/docs/react-component.html
    */
    componentDidMount() {
        console.log(this.headingTagRef.current); //1. createRef 생성한 엘레멘트를 가져와본다. 이후 스타일링이 필요하면 아래와 같이
        const elemH1 = this.headingTagRef.current;
        elemH1.style.border = '1px solid blue';
    }

    render() {
        console.log('render');

        // 3. 부모 컴포넌트에서 지정한 props 를 받아온다. 
        const { sendName , sendHandler, sendValue, sendChange} = this.props;

        return (
            <div>
                <h1 ref={this.headingTagRef}>Hello, world! - {sendName}</h1>{/* 3. 부모컴포넌트에 만든 state.name */}
                <input type="text" name="" value={sendValue} onChange={sendChange} />{/* 3. onChange 시 부모컴포넌트에 만든 changeName 이벤트 호출 */}
                <button onClick={sendHandler}>변경</button>{/* 3. 클릭시 부모컴포넌트에 만든 handleChange 이벤트 호출 */}
            </div>
        );
    }
}

export default ExampleChild;