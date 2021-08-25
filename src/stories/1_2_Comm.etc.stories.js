// https://storybook.js.org/docs/react/api/csf  API 설명서
import React from "react";
import Header from "components/layout/Header";

export default {
    title: "src/components - 공통/ETC",
    component: Header,
    decorators: [
        (Story) => (
            <div className="App">
                <Story />
            </div>
        ),
    ],
};
