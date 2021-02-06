![Rx-JS Logo](https://blog.knoldus.com/wp-content/uploads/2019/02/Rxjs.png)
## What is RxJs?
By Defination- 
RxJS (Reactive Extensions for JavaScript)  library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code.

## Creator of RxJs:
[Brian Troncone](https://twitter.com/BTroncone)
Brian is well known for creating [Learn-RxJS.io.](https://www.learnrxjs.io/)

## Quick Advantages:
RxJS is follows the same principles as other libraries for reactive streams. We can create asynchronous streams, have some degree of concurrency and web workers even allow for parallelism.

For Example: <br>
- In Angular, subscribe() is a method on the Observable type. The Observable type is a utility that asynchronously or synchronously streams data to a variety of components or services that have subscribed to the observable.

![Tree-diagram-RxJs](https://miro.medium.com/max/4164/1*HeOwc9fteR4oiVheE7qnAg.png)

## Whats Observable in RxJs?
RxJS introduces Observables, a new Push system for JavaScript. An Observable is a Producer of multiple values, "pushing" them to Observers (Consumers). A Function is a lazily evaluated computation that synchronously returns a single value on invocation.

## Main Repository
Github: [ReactiveX/RxJs](https://github.com/ReactiveX/rxjs)

## Things I have Learned So Far:

1. The Core power of RxJs the  **Observable** and **Subscriptions** and the difference between normal **Observable** v/s **BehavioralSubjects**
 
### About Observable:
Observables are lazy Push collections of multiple values. They fill the missing spot in the following table:

### About Subscription:
A Subscription is an object that represents a disposable resource, usually the execution of an Observable. A Subscription has one important method, unsubscribe, that takes no argument and just disposes the resource held by the subscription. In previous versions of RxJS, Subscription was called "Disposable".

### Subject
An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.

> A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.
 
 For Example: 
  - BehaviorSubject
  - combineLatest
  - interval
  - Observable
  - of
  - Subscription
  - timer

![observables-and-subsciption-logo](https://s3.amazonaws.com/coursetro/posts/148-full.png)

2. Various [Operators](https://rxjs-dev.firebaseapp.com/guide/operators) in helps writing RxJs over promises. 
    ### What are operators?
    Operators are functions. There are two kinds of operators:

    Pipeable Operators are the kind that can be piped to Observables using the syntax observableInstance.pipe(operator()). These include, filter(...), and mergeMap(...). When called, they do not change the existing Observable instance. Instead, they return a new Observable, whose subscription logic is based on the first Observable.

    > "A Pipeable Operator is a function that takes an Observable as its input and returns another Observable. It is a pure operation: the previous Observable stays unmodified."
    
    <br>
    [Note: https://rxjs-dev.firebaseapp.com/guide/operators]

    For Example: 
    - concatMap
    - debounceTime
    - distinctUntilChanged
    - filter
    - map
    - scan
    - share
    - startWith
    - switchMap
    - takeUntil
    - takeWhile


## Promises v/s Observables
![diagram-flow-of-two](https://i.stack.imgur.com/Ewn3b.png)

### About One Article:
I came across a good article on Medium - [Javascript Theory: Promise vs Observable by Wojciech Trawiński
](https://medium.com/javascript-everyday/javascript-theory-promise-vs-observable-d3087bc1239a#:~:text=the%20Promise%20is%20always%20asynchronous%2C%20while%20the%20Observable%20can%20be,get%20a%20new%20tailored%20stream.) of the advantages of using observables in some reactive dynamics states of data stream where it very much stateless.

![difference](https://i.stack.imgur.com/bazKh.png)

## For Quick Recapitulate:
- Always while writing `RxJs Styles` think of FM-Radio Approch and `Channel Subscrption Status` `streams of data handle` and `google realtime updatations`.

- The Reactive Extensions for JavaScript (RxJS) 4.0...
...is a set of libraries to compose asynchronous and event-based programs using observable collections and Array#extras style composition in JavaScript

The project is actively developed by Microsoft, in collaboration with a community of open source developers.

- **Need to go Reactive** How do we scale it? By moving towards "Reactive Architectures" which are event-driven, resilient and responsive. With the Reactive Extensions, you have all the tools you need to help build these systems.

-  Observable and Behavioral Subject both are same,
    but BehaviorSubject is Special cause it takes initialValue
    to emit just like FMRadio.

-   The Main point is that if anybody listens radio after delay,
    he/she can opt the previously played musics ; means the person
    will be synchronized, means
    <br>
            `Obserable` doesnot support Recorded Playbacks,
    <br>    where as `BehavioralSubject` supports   recorded Playback

        cool, isn;t it? :-)

-  **DistinctUntilChanged():** is used to subscribe the stream when you get a different data than previously emitted.

- **DebounceTime(time):** subscribe each value after <time> seconds.
    *Application:* Mostly Reactive-searchBar and continuos flow of streams to avid repetation>

- **CombineLatest([...obserables])** To combine multiple obserables into one and use subscribed datastream in array form.

    <Application Used:> concept used in React.useState() : [variable, React.Dispatcher<Function>]

<br>

## Quick Realizations:
I also used writing `RxJs styles` to one of **React** app which is currently in progress - 
[Google Drive Clone - React](https://github.com/sounishnath003/google-drive-clone-cloud-storage) and moreover simple `AlarmClock App` which I will say a **Hello world application** to start using RxJs in react.

## Resources Helped Me To Understand:
* [Fireship.io ~ rxjs-basic-pro-tips](https://fireship.io/lessons/rxjs-basic-pro-tips/)
* [Easy RxJs Patterns by Shagun](https://www.youtube.com/playlist?list=PL6GcqPPzylem7RYrKDp64QdaLGIkDu5Bn)
* [Angular RxJs](https://angular.io/guide/rx-library)
* [Writing Reactive Javascript](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html)


<br>
Thank you... :-)