import { Subject, Observer } from "./observer";

describe("Observer", () => {
  let subject, observer;

  beforeEach(() => {
    subject = new Subject();
    observer = new Observer();
    jest.spyOn(observer, "notify");
    subject.subscribeObserver(observer);
  });

  it("should call notify on the observer when notifyObserver is called", () => {
    subject.notifyObserver(observer);
    expect(observer.notify).toHaveBeenCalled();
  });

  it("should call notify on all observers when notifyAllObservers is called", () => {
    const observer2 = new Observer();
    jest.spyOn(observer2, "notify");
    subject.subscribeObserver(observer2);

    subject.notifyAllObservers();
    expect(observer.notify).toHaveBeenCalled();
    expect(observer2.notify).toHaveBeenCalled();
  });
});
