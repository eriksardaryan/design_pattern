# design_pattern

## Observer Pattern Implementation in JavaScript

This repository contains an implementation of the Observer design pattern in JavaScript. The Observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.

### Files

**observer.js**: This file contains the implementation of the Observer pattern. It includes two classes: Subject and Observer.

### Classes

**Subject**: This class maintains a list of observers and provides methods to add (subscribe) or remove (unsubscribe) them. It also includes methods to notify a specific observer or all observers.

**Observer**: This class represents an observer that can be added to a subject. It has a notify method that logs a message to the console when the observer is notified.

```javascript
const subject = new Subject();
const observer0 = new Observer();
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();

subject.subscribeObserver(observer0);
subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.notifyObserver(observer1); // Observer 1 is notified!
subject.notifyAllObservers();

// Observer 0 is notified!
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!
```
