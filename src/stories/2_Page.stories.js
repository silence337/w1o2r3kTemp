// https://storybook.js.org/docs/react/api/csf  API 설명서
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import { PageID1, PageID2, PageID3, PageID4, PageID5, PageID6 } from "pages";

export default {
    title: "src/pages",
    component: PageID1,
    decorators: [
        (Story) => (
            <div className="App">
                <Router>
                    <Header />
                    <div className="container">
                        <Story />
                    </div>
                    <Footer />
                </Router>
            </div>
        ),
    ],
};

export const page1 = () => <PageID1 name="dsad" />;
page1.storyName = "페이지1페이지1페이지1페이지1페이지1페이지1";

export const page2 = () => <PageID2 mode="dsad" />;
page2.storyName = "페이지2";
page2.parameters = {
    docs: {
        viewMode: "story",
    },
};

export const page3 = () => <PageID3 />;
page3.storyName = "페이지3";

export const page4 = () => <PageID4 />;
page4.storyName = "페이지4";

export const page5 = () => <PageID5 />;
page5.storyName = "페이지5";

export const page6 = () => <PageID6 />;
page6.storyName = "페이지6";
