import React from "react";

import { concat, interval, of, Subject } from "rxjs";
import {
  startWith,
  scan,
  takeWhile,
  repeatWhen,
  takeUntil,
  filter,
  share,
} from "rxjs/operators";

function useAlarm() {
  const [state, setState] = React.useState();

  // making observers
  const countDown$ = interval(1000)
    .pipe(
      startWith(10),
      scan((time) => time - 1),
      takeWhile((time) => time > 0)
    )
    .pipe(share());

  // making subjects
  const actions$ = new Subject();
  const snoozer$ = actions$.pipe(filter((action) => action === "snoozer"));
  const dismisser$ = actions$.pipe(filter((action) => action === "dismisser"));
  actions$.subscribe(console.log);

  // making actions
  const snoozableAlramTrigger$ = concat(
    countDown$,
    of(`Wake up buddy 😊🙌`)
  ).pipe(repeatWhen(() => snoozer$));

  const observable$ = concat(
    snoozableAlramTrigger$.pipe(takeUntil(dismisser$)),
    of(`Have a nice day! 😍🤳`)
  );

  React.useEffect(() => {
    const subscription = observable$.subscribe(setState);
    return () => subscription.unsubscribe();
  }, []);

  // eslint-disable-next-line no-unused-vars
  function clickHandler(type) {
    return type === `snoozer`
      ? actions$.next("snoozer")
      : actions$.next(`dismisser`);
  }

  return { state, actions$ };
}

export { useAlarm };