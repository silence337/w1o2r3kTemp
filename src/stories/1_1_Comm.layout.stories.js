// https://storybook.js.org/docs/react/api/csf  API 설명서
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

export default {
    title: "src/components - 공통/Layout",
    component: Header,
    decorators: [
        (Story) => (
            <div className="App">
                <Router>
                    <Story />
                </Router>
            </div>
        ),
    ],
};

export const header = () => <Header name="Header" />;
header.storyName = "Header";

export const footer = () => <Footer name="main" />;
footer.storyName = "Footer";
