import ModalService from "../src/index";
import TestUtils from "react-addons-test-utils/index.js";
import * as React from "react";

describe('modalService', function () {
  it('can not add modal when placeholder is not set,and it will throw a error', function () {
    const modalService = new ModalService();
    expect(() => modalService.show({ content: <div>123</div> })).toThrowError();

  })
  it('can not getModals when placeholder is not set,and it will throw a error', function () {
    const modalService = new ModalService();
    expect(() => modalService.show({ content: <div>123</div> })).toThrowError();
    expect(() => modalService.remove({ mockDate: true })).toThrowError();
    expect(() => modalService.getModals()).toThrowError();
  })
  it('it can add and remove MODAL when set correctly', function () {
    const modalService = new ModalService();
    const placeHolder = modalService.getPlaceHolder();
    TestUtils.renderIntoDocument(<div>{placeHolder}</div>)
    const modals = modalService.getModals()
    const handle1 = modalService.show({ content: <div>123</div> })
    expect(modals.length).toEqual(1);
    const handle2 = modalService.show({ content: <div>123</div> })
    expect(modals.length).toEqual(2);
    modalService.remove(handle1)
    expect(modalService.getModals().length).toEqual(1);
    modalService.remove(handle2)
    expect(modalService.getModals().length).toEqual(0);
  });
});
