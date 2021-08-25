import React from "react";
import Dropdown from "react-dropdown"; //https://www.npmjs.com/package/react-dropdown
import "react-dropdown/style.css"; // node_module 에 설치된 css 이므로 커스텀은 해당 CSS파일 소스를 복사해서 내부 SCSS에 넣고 내부 SCSS를 import 함당.

const ExampleDropdown = () => {
    const options = [
        { value: "one", label: "One" },
        { value: "two", label: "Two", className: "myOptionClassName" },
        {
            type: "group",
            name: "group1",
            items: [
                {
                    value: "three",
                    label: "Three",
                    className: "myOptionClassName",
                },
                { value: "four", label: "Four" },
            ],
        },
        {
            type: "group",
            name: "group2",
            items: [
                { value: "five", label: "Five" },
                { value: "six", label: "Six" },
            ],
        },
    ];
    const defaultOption = options[0];

    const onSelect = () => {};

    return (
        <div style={{ padding: "20px" }}>
            <h4>dropdown 모듈을 설치해서 사용해본다.ㅎㅎㅎㅎㅋㅋ</h4>
            <Dropdown
                options={options}
                onChange={onSelect}
                value={defaultOption}
                placeholder="Select an option"
            />
        </div>
    );
};

export default ExampleDropdown;
