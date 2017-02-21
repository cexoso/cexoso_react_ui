import { mkModalComponent } from "./ModalComponent"
import { Component } from "react";
function mksurePlaceHolderHasBeenSet(handleFn) {
    return function (...o) {
        const { placeHolderRef } = this;
        if (placeHolderRef) {
            return handleFn.apply(this, o)
        } else {
            throw new Error("placeHolder hasn't beed set");
        }
    }
}
const getModals = mksurePlaceHolderHasBeenSet(function () {
    return this.placeHolderRef.state.modalInstances
});
const show = mksurePlaceHolderHasBeenSet(function ({content}) {
    return this.placeHolderRef.addNewModal(content)
});
const remove = mksurePlaceHolderHasBeenSet(function (handle) {
    return this.placeHolderRef.removeModal(handle)
});
class ModalService {
    private placeHolder: JSX.Element
    private placeHolderRef
    public remove: Function
    public getModals: Function
    public show: Function
    constructor() {
        this.placeHolder = mkModalComponent(ref => this.placeHolderRef = ref);
        this.remove = remove
        this.getModals = getModals
        this.show = show
    }
    getPlaceHolder() {
        return this.placeHolder;
    }
}

export default ModalService;