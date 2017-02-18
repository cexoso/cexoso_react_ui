import {Component} from "react";
import * as React from "react";
interface props {
    a?: string
}
export default class App extends Component<props,any>{
    render() {
        const {a} = this.props
        return (<div>
            hello world
        </div>)
    }
}
