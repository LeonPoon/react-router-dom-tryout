import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

class Main extends React.Component {
    render() {
        return <div>
            <h1>This is the main page</h1>
            <p><Link to="/somepage">Somepage</Link></p>
        </div>;
    }
}


class Page2Component extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.boundClick = this.click.bind(this);
    }

    click() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        return <button onClick={this.boundClick}>{this.state.count}</button>;
    }
}

class Page2Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.newState(this.props);
        this.boundClick = this.click.bind(this);
    }

    newState() {
        return { count: 0 };
    }

    click() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    componentWillReceiveProps(props, context) {
        if (props.match.params.id != this.props.match.params.id)
            this.setState(this.newState(props));
    }

    render() {
        return <div><h2>Editing...</h2>
            <p><button onClick={this.boundClick}>{this.state.count}</button></p>
            <p><Link to="/:id">Cancel editing {this.props.match.params.id}</Link></p>
        </div>;
    }
}


class Page2 extends React.Component {
    render() {
        return <div>
            <div>
                <h1>This is page 2</h1>
                <p><Link to="..">Back home</Link></p>
                <Page2Component />
                <ul>
                    <li><a href={"#" + this.props.match.path + "/edit/123"}>123</a></li>
                    <li><a href={"#" + this.props.match.path + "/edit/456"}>456</a></li>
                </ul>
            </div>

            <HashRouter basename={this.props.match.path}>

                <Switch>
                    <Route path="/edit/:id" component={Page2Edit} />
                </Switch>
            </HashRouter>

        </div>
            ;

    }
}


export class App extends React.Component {

    render() {
        return <HashRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/somepage" component={Page2} />
            </Switch>
        </HashRouter>;
    }

}
