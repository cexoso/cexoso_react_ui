import ModalService from "../src/index";
import TestUtils from "react-addons-test-utils/index.js";
import * as React from "react";

describe('modalService', function () {
  it('it can add MODAL', function () {
    const modalService = new ModalService();
    const placeHolder = modalService.getPlaceHolder();
    const ret = TestUtils.renderIntoDocument(placeHolder)
    modalService.show({content: <div>123</div>})
    const {modalInstances} = ret.state;    
    expect(modalInstances.length).toEqual(1);
  });
});
