import ModalService from "../src/index";
import TestUtils from "react-addons-test-utils/index.js";
import * as React from "react";

describe('modalService', function () {
  it('someMethod should be call after placeholder has beed seted,or it will throw a error', function () {
    const modalService = new ModalService();
    expect(() => modalService.show({ content: <div>123</div> })).toThrowError();
    expect(() => modalService.remove({ mockDate: true })).toThrowError();
    expect(() => modalService.getModals()).toThrowError();
  })
  it('it can add and remove MODAL when set correctly', function () {
    const modalService = new ModalService();
    TestUtils.renderIntoDocument(<div>{modalService.getPlaceHolder()}</div>)
    const handle1 = modalService.show({ content: <div>123</div> })
    expect(modalService.getModals().length).toEqual(1);
    modalService.remove(handle1)
    expect(modalService.getModals().length).toEqual(0);
    const handle2 = modalService.show({ content: <div>123</div> })
    expect(modalService.getModals().length).toEqual(1);
    const handle3 = modalService.show({ content: <div>1234</div> })
    expect(modalService.getModals().length).toEqual(2);
    modalService.remove(handle2)
    expect(modalService.getModals().length).toEqual(1);
    modalService.remove(handle3)
    expect(modalService.getModals().length).toEqual(0);
  });
  it("modalService are Independency", function () {
    const modalService = new ModalService();
    const modalService1 = new ModalService();
    TestUtils.renderIntoDocument(<div>
      {modalService.getPlaceHolder()}
      {modalService1.getPlaceHolder()}
    </div>)
    const handle1 = modalService.show({ content: <div>111</div> })
    expect(modalService.getModals().length).toEqual(1);
    expect(modalService1.getModals().length).toEqual(0);
    modalService.remove(handle1)
    expect(modalService.getModals().length).toEqual(0);
    expect(modalService1.getModals().length).toEqual(0);
  })
});
