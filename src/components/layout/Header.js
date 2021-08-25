import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

// 클래스형 컴포넌트 ( 함수형 컴포넌트로 바꿔보기 )
class Navigation extends Component {
    render() {
        
        return (
            <>
                <ul className="navigation">
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/page1" activeClassName="active">page1</NavLink></li>
                    <li><NavLink to="/page2" activeClassName="active">page2</NavLink></li>
                    <li><NavLink to="/page3" activeClassName="active">hookState</NavLink></li>
                    <li><NavLink to="/page4" activeClassName="active">Dropdown 모듈을 설치</NavLink></li>
                    <li><NavLink to="/page5" activeClassName="active">Swiperjs 모듈을 설치</NavLink></li>
                </ul>
            </>
        );
    }
}

export default Navigation;