// --------- Recapitulate about Promises and writing RxJs functions --------

import {
  concatMap,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  scan,
  share,
  startWith,
  switchMap,
  takeUntil,
  takeWhile,
} from "rxjs/operators";
// ------ Observable Example / Promise
import {
  BehaviorSubject,
  combineLatest,
  interval,
  Observable,
  of,
  Subscription,
  timer,
} from "rxjs";

function isAvailable(): boolean {
  return true;
}

function bringBread() {
  return new Promise((resolve, reject) => {
    if (isAvailable()) {
      resolve({ msg: `braead found!`, status: true, code: 200 });
    }
    reject({ msg: `no bread found!`, status: false, code: 500 });
  });
}

// bringBread().then((data) => console.log(data)).catch((err) => console.error(err));

// -------- Started writing RxJs -----------

function listenRadio(): Observable<number> {
  return interval(250);
}

listenRadio().subscribe(
  (channelNo) => {
    console.log(`subscribeTo new FM_Radio channel ${channelNo}`);
  },
  (err) => {
    console.error(err);
  }
);

// ---------- Map and Filter pipes() ----------

listenRadio()
  .pipe(map((data) => data * 2))
  .subscribe(
    (channelNo) => console.log(`subscribedTo new 2 * channel ${channelNo}`),
    (err) => {
      console.error(err);
    }
  );

type IUser = {
  name: string;
  mob: string;
  pin: number;
};
type IHttp = {
  data: IUser;
};

function fetchUser() {
  const observable$ = new Observable((observer) => {
    observer.next({
      data: { name: `sounish`, mob: `9434715454`, pin: 721212 },
    } as IHttp);
  });
  return observable$.pipe(map((user: any) => user.data));
}

fetchUser().subscribe((data) => {
  console.log(data);
});

const timerObseravle$ = interval(1000).pipe(filter((value) => value < 5));
timerObseravle$.subscribe(
  (data) => console.log(`subscribeTo to ${data} mode`),
  (err) => console.error(err)
);

// ------------ SwitchMap() ---------

function buySugarInBulk() {
  const observable$ = new Observable((observer) => {
    observer.next(`sugar is brought!`);
  });
  return observable$;
}

function getSugarInQuantity(kg: number): Observable<string> {
  return new Observable((observer) => {
    observer.next(`sugar quantity : ${kg}kg is in stock!`);
  });
}

function getSugarFromShop(quantity: number) {
  return buySugarInBulk().pipe(switchMap(() => getSugarInQuantity(quantity)));
}

getSugarFromShop(5).subscribe((data) => console.log(data));

const alarmInitiator$ = interval(1000)
  .pipe(
    startWith(10),
    scan((time) => time - 1),
    takeWhile((time) => time > 0)
  )
  .pipe(share());

const alamClockObserver$ = alarmInitiator$;

alamClockObserver$.subscribe(
  (seconds) => console.log(`alarm clock ticking countDown - ${seconds}`),
  (err) => {
    console.error(err);
  }
);

const ipPattern = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/;
const ips: string[] = [
  `192.158.11.338`,
  `100.100.2.12`,
  `256.1.121.44`,
  `187.45.11.32`,
  `454.45.14.12`,
  `14.45.87.99`,
];

for (const ip of ips) {
  const matched = ipPattern.test(ip);
  console.log({ ip, status: matched, code: matched ? "ok" : "error" });
}

// ------------- Behaviour Subject ----------------

/*
    Observable and Behavioral Subject both are same,
    but BehaviorSubject is Special cause it takes initialValue
    to emit just like FMRadio.

    The Main point is that if anybody listens radio after delay,
    he/she can opt the previously played musics ; means the person
    will be synchronized, means
        ||    `Obserable` doesnot support Recorded Playbacks,
        ||    where as `BehavioralSubject` supports recorded Playback

    cool, isn;t it?
 */

const musics: string[] = [
  `Tum hi ho`,
  `Aye Zindegi`,
  `Tumpa Song`,
  `Friends`,
  `Memories`,
];
const fmObserverble$ = new BehaviorSubject(`Playing ... First Song I`);

function changeMusics() {
  for (const music of musics) {
    fmObserverble$.next(`new song is started playing... ${music}`);
  }
}

// lets subscribe FMChannel Initally
fmObserverble$.subscribe((song: string) => {
  // console.log(song);
});

// Clicked => change music
changeMusics();

// again continue playing after 4sec delay
setTimeout(() => {
  fmObserverble$.subscribe((song: string) => {
    // console.log(song);
  });
}, 4000);

// ------------- DistinctUntilChanged & Debounce Time (Observables) -------

/* QuickNote:
-------------
    DistinctUntilChanged(): is used to subscribe the stream when you get
                         a different data than previously emitted.
    DebounceTime(time): subscribe each value after <time> seconds
    <Application: Mostly Reactive-searchBar and continuos flow of streams to avid repetation>
*/

const ob$ = of(1, 2, 3, 4, 5);
const searchBar$ = of("a", "an", "ann", "ann", "ann", "anny");
searchBar$
  .pipe(distinctUntilChanged(), debounceTime(1000))
  .subscribe((data) => console.log(data));

// ---------- Combine Latest (Observables) -------------

// To combine multiple obserables into one and use subscribed datastream in array form.
// <Application Used:> concept used in React.useState() : [variable, React.Dispatcher<Function>]

const timer1$ = timer(1000, 4000);
const timer2$ = timer(2000, 4000);
const timer3$ = timer(420, 1000);

combineLatest([timer1$, timer2$, timer3$]).subscribe((data) => {
  console.log(data);
});

// ---------- Concat & ContactMap -------------
const ttime1$ = timer(1000, 400).pipe(map((data) => data + ` timeer_1 thew`));
const ttime2$ = timer(1000, 500).pipe(map((data) => data + ` timeer_2 thew`));

const contactOberservable$ = ttime1$.pipe(
  concatMap((timer1data) =>
    ttime2$.pipe(map((timer2Data) => timer2Data + timer1data))
  )
);

contactOberservable$.subscribe((data) => console.log(data));
