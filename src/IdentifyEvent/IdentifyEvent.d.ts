declare type EVENT_TYPE =
  | "CLICK"
  | "LONG_TAP"
  | "SWIPE"
  | "SWIPE_MOVE"
  | "MOVE";

declare type IdentifyEventConfig = {
  threshold: number; //120; //required min distance traveled to be considered swipe
  restraint: number; // = 100; // maximum distance allowed at the same time in perpendicular direction

  allowedTime: number; // = 200; // maximum time allowed to travel that distance
  allowedTimeToMoveSwipe: number; // = 30;
};

declare class IdentifyEvent {
  startX: number;
  startY: number;

  lastX: number;
  lastFiveXTouchMove: number[];
  lastFiveXTouchMoveIndex: number;
  lastFiveXToucheMoveSum: number;

  dist: number;

  elapsedTime: number;
  elapsedTimeAfterMove: number;
  startTime: number;
  startTimeAfterMove: number;

  swipeSpeed: number;

  config: IdentifyEventConfig;

  constructor(config?: IdentifyEventConfig);

  whatEventType: (pageY: number) => EVENT_TYPE;

  onTouchStart: (pageX: number, pageY: number) => void;

  onTouchMove: (pageX: number) => void;

  onTouchEnd: (pageX: number) => void;

  protected isSwipe: (pageY: number) => boolean;

  protected isSwipeAfterMoving: (pageY: number) => boolean;

  getSwipeSpeed: () => number;
}

export default IdentifyEvent;
