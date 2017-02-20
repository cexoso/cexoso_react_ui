import {mkModalComponent} from "./ModalComponent"
import {Component} from "react";
class ModalService {
    private placeHolder: JSX.Element
    public a = 1
    private placeHolderRef
    constructor() {
        this.placeHolder = mkModalComponent((ref)=>this.placeHolderRef = ref);
    }
    getPlaceHolder() {
        return this.placeHolder;
    }
    show({content}) {
        this.placeHolderRef.addNewModal(content)
    }
}

export default ModalService;