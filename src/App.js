import "assets/scss/test.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import { PageID0, PageID1, PageID2, PageID3, PageID4, PageID5 } from "pages";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={PageID0} />
                        <Route path="/page1" component={PageID1} />
                        <Route path="/page2" component={PageID2} />
                        <Route path="/Page3" component={PageID3} />
                        <Route path="/Page4" component={PageID4} />
                        <Route path="/Page5" component={PageID5} />
                        {/* <Route component={PageNotFound} /> */}
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
