import { Component } from "react";
import * as React from "react";
import ModalService from "../src"
const modalService = new ModalService();
const placeHolder = modalService.getPlaceHolder()
export default class App extends Component<any, any>{
    modal() {
        modalService.show({content: <div>123</div>})
    }
    render() {
        return (<div>
            hello world
            <div>
                <button onClick={this.modal.bind(this)}>
                    点击弹窗
                </button>
            </div>
            <div>
                {placeHolder}
            </div>
        </div>)
    }
}
