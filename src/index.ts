import {mkModalComponent} from "./ModalComponent"
import {Component} from "react";
class ModalService {
    private placeHolder: JSX.Element
    public a = 1
    constructor() {
        this.placeHolder = mkModalComponent();
    }
    getPlaceHolder() {
        return this.placeHolder;
    }
    show({content}) {
        console.log("======================")
        console.log(this.placeHolder)
        
        console.log("======================")
    }
}

export default ModalService;