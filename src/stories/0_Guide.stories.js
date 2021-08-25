// https://storybook.js.org/docs/react/api/csf  API 설명서
import React from "react";
import Element from "guide/Element";

export default {
    title: "Guide",
    component: Element,
    decorators: [
        (Story) => ( 
            <div className="App">
                    <Story />
            </div>
        ),
    ],
};

export const elementGuide = () => <Element />;
elementGuide.storyName = "element";

