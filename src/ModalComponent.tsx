import * as React from "react";
import {Component} from "react";
import {map,filter,curry,eq} from "lodash"
interface state {
    modalInstances: Array<JSX.Element>
}
function mkStyle(index:number): Object {
    return {
        zIndex: 1000 + index        
    }
}
export default class ModalComponent extends Component<any,any>{
    state: state
    constructor(props) {
        super(props)
        this.state = {
            modalInstances: []
        }
    }
    addNewModal(modalInstance) {
        const {modalInstances} = this.state;
        modalInstances.push(modalInstance);
        this.forceUpdate();
        return modalInstance;
    }
    removeModal(modalInstance) {
        const {modalInstances} = this.state;
        const eqModalInstance = curry(eq)(modalInstance)
        const res = filter(modalInstances,eqModalInstance)
        this.setState({modalInstances: res});
    }    
    render() {
        const {modalInstances} = this.state
        return <div>
            {map(modalInstances,(ins,index)=><div key={index} style={mkStyle(index)}>
                {ins}
            </div>)}
        </div>
    }
}
export function mkModalComponent(refCallBack) {
    return <ModalComponent ref={refCallBack}/>;
}