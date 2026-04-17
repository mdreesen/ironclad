import { L as injectConfigProviderContext, x as useForwardExpose, d as useForwardPropsEmits, z as Presence_default, T as Teleport_default, P as Primitive, y as createContext, r as useForwardProps, w as isNullish, B as getActiveElement, M as AUTOFOCUS_ON_MOUNT, N as focusFirst, O as getTabbableCandidates, Q as focus, R as AUTOFOCUS_ON_UNMOUNT, S as EVENT_OPTIONS, U as getTabbableEdges, W as usePrimitiveElement } from './server.mjs';
import { isToday, getLocalTimeZone, isSameMonth, isSameDay, isEqualDay, CalendarDate, getDayOfWeek, startOfWeek, DateFormatter, createCalendar, toCalendar, CalendarDateTime, isEqualMonth, ZonedDateTime, today, startOfMonth, endOfMonth } from '@internationalized/date';
import { m as defu } from '../nitro/nitro.mjs';
import * as vue from 'vue';
import { defineComponent, openBlock, createBlock, unref, normalizeProps, guardReactiveProps, withCtx, renderSlot, createVNode, mergeProps, toRefs, ref, resolveDynamicComponent, computed, createElementBlock, normalizeStyle, watchEffect, withModifiers, watchPostEffect, watch, mergeDefaults, reactive, toValue, nextTick, withKeys, createTextVNode, toDisplayString, createElementVNode } from 'vue';
import { useVModel, onKeyStroke, unrefElement, computedEager, createSharedComposable, useEventListener, createGlobalState } from '@vueuse/core';
import { offset, flip, shift, limitShift, size, arrow, hide, useFloating, autoUpdate } from '@floating-ui/vue';
import { syncRef, tryOnBeforeUnmount, refAutoReset, tryOnScopeDispose, createEventHook, reactiveOmit, isClient, isIOS } from '@vueuse/shared';
import { hideOthers } from 'aria-hidden';

function handleAndDispatchCustomEvent(name, handler, detail) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  });
  if (handler) target.addEventListener(name, handler, { once: true });
  target.dispatchEvent(event);
}
const useBodyLockStackCount = createSharedComposable(() => {
  const map = ref(/* @__PURE__ */ new Map());
  const initialOverflow = ref();
  const locked = computed(() => {
    for (const value of map.value.values()) if (value) return true;
    return false;
  });
  const context2 = injectConfigProviderContext({ scrollBody: ref(true) });
  let stopTouchMoveListener = null;
  const resetBodyStyle = () => {
    (void 0).body.style.paddingRight = "";
    (void 0).body.style.marginRight = "";
    (void 0).body.style.pointerEvents = "";
    (void 0).documentElement.style.removeProperty("--scrollbar-width");
    (void 0).body.style.overflow = initialOverflow.value ?? "";
    isIOS && stopTouchMoveListener?.();
    initialOverflow.value = void 0;
  };
  watch(locked, (val, oldVal) => {
    if (!isClient) return;
    if (!val) {
      if (oldVal) resetBodyStyle();
      return;
    }
    if (initialOverflow.value === void 0) initialOverflow.value = (void 0).body.style.overflow;
    const verticalScrollbarWidth = (void 0).innerWidth - (void 0).documentElement.clientWidth;
    const defaultConfig = {
      padding: verticalScrollbarWidth,
      margin: 0
    };
    const config = context2.scrollBody?.value ? typeof context2.scrollBody.value === "object" ? defu({
      padding: context2.scrollBody.value.padding === true ? verticalScrollbarWidth : context2.scrollBody.value.padding,
      margin: context2.scrollBody.value.margin === true ? verticalScrollbarWidth : context2.scrollBody.value.margin
    }, defaultConfig) : defaultConfig : {
      padding: 0,
      margin: 0
    };
    if (verticalScrollbarWidth > 0) {
      (void 0).body.style.paddingRight = typeof config.padding === "number" ? `${config.padding}px` : String(config.padding);
      (void 0).body.style.marginRight = typeof config.margin === "number" ? `${config.margin}px` : String(config.margin);
      (void 0).documentElement.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
      (void 0).body.style.overflow = "hidden";
    }
    if (isIOS) stopTouchMoveListener = useEventListener(void 0, "touchmove", (e) => preventDefault(e), { passive: false });
    nextTick(() => {
      if (!locked.value) return;
      (void 0).body.style.pointerEvents = "none";
      (void 0).body.style.overflow = "hidden";
    });
  }, {
    immediate: true,
    flush: "sync"
  });
  return map;
});
function useBodyScrollLock(initialState) {
  const id = Math.random().toString(36).substring(2, 7);
  const map = useBodyLockStackCount();
  map.value.set(id, initialState);
  const locked = computed({
    get: () => map.value.get(id) ?? false,
    set: (value) => map.value.set(id, value)
  });
  tryOnBeforeUnmount(() => {
    map.value.delete(id);
  });
  return locked;
}
function checkOverflowScroll(ele) {
  const style = (void 0).getComputedStyle(ele);
  if (style.overflowX === "scroll" || style.overflowY === "scroll" || style.overflowX === "auto" && ele.clientWidth < ele.scrollWidth || style.overflowY === "auto" && ele.clientHeight < ele.scrollHeight) return true;
  else {
    const parent = ele.parentNode;
    if (!(parent instanceof Element) || parent.tagName === "BODY") return false;
    return checkOverflowScroll(parent);
  }
}
function preventDefault(rawEvent) {
  const e = rawEvent || (void 0).event;
  const _target = e.target;
  if (_target instanceof Element && checkOverflowScroll(_target)) return false;
  if (e.touches.length > 1) return true;
  if (e.preventDefault && e.cancelable) e.preventDefault();
  return false;
}
function toDate(dateValue, tz = getLocalTimeZone()) {
  if (isZonedDateTime(dateValue)) return dateValue.toDate();
  else return dateValue.toDate(tz);
}
function isCalendarDateTime(dateValue) {
  return dateValue instanceof CalendarDateTime;
}
function isZonedDateTime(dateValue) {
  return dateValue instanceof ZonedDateTime;
}
function hasTime(dateValue) {
  return isCalendarDateTime(dateValue) || isZonedDateTime(dateValue);
}
function getDaysInMonth(date) {
  if (date instanceof Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  } else return date.set({ day: 100 }).day;
}
function isBefore(dateToCompare, referenceDate) {
  return dateToCompare.compare(referenceDate) < 0;
}
function isAfter(dateToCompare, referenceDate) {
  return dateToCompare.compare(referenceDate) > 0;
}
function isBeforeOrSame(dateToCompare, referenceDate) {
  return dateToCompare.compare(referenceDate) <= 0;
}
function isAfterOrSame(dateToCompare, referenceDate) {
  return dateToCompare.compare(referenceDate) >= 0;
}
function isBetweenInclusive(date, start, end) {
  return isAfterOrSame(date, start) && isBeforeOrSame(date, end);
}
function isBetween(date, start, end) {
  return isAfter(date, start) && isBefore(date, end);
}
function getLastFirstDayOfWeek(date, firstDayOfWeek, locale) {
  const day = getDayOfWeek(date, locale, "sun");
  if (firstDayOfWeek > day) return date.subtract({ days: day + 7 - firstDayOfWeek });
  if (firstDayOfWeek === day) return date;
  return date.subtract({ days: day - firstDayOfWeek });
}
function getNextLastDayOfWeek(date, firstDayOfWeek, locale) {
  const day = getDayOfWeek(date, locale, "sun");
  const lastDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  if (day === lastDayOfWeek) return date;
  if (day > lastDayOfWeek) return date.add({ days: 7 - day + lastDayOfWeek });
  return date.add({ days: lastDayOfWeek - day });
}
function areAllDaysBetweenValid(start, end, isUnavailable, isDisabled, isHighlightable) {
  if (isUnavailable === void 0 && isDisabled === void 0 && isHighlightable === void 0) return true;
  let dCurrent = start.add({ days: 1 });
  if ((isDisabled?.(dCurrent) || isUnavailable?.(dCurrent)) && !isHighlightable?.(dCurrent)) return false;
  const dEnd = end;
  while (dCurrent.compare(dEnd) < 0) {
    dCurrent = dCurrent.add({ days: 1 });
    if ((isDisabled?.(dCurrent) || isUnavailable?.(dCurrent)) && !isHighlightable?.(dCurrent)) return false;
  }
  return true;
}
function getDefaultDate(props) {
  const { defaultValue, defaultPlaceholder, granularity = "day", locale = "en" } = props;
  if (Array.isArray(defaultValue) && defaultValue.length) return defaultValue.at(-1).copy();
  if (defaultValue && !Array.isArray(defaultValue)) return defaultValue.copy();
  if (defaultPlaceholder) return defaultPlaceholder.copy();
  const date = /* @__PURE__ */ new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const calendarDateTimeGranularities = [
    "hour",
    "minute",
    "second"
  ];
  const defaultFormatter = new DateFormatter(locale);
  const calendar = createCalendar(defaultFormatter.resolvedOptions().calendar);
  if (calendarDateTimeGranularities.includes(granularity ?? "day")) return toCalendar(new CalendarDateTime(year, month, day, 0, 0, 0), calendar);
  return toCalendar(new CalendarDate(year, month, day), calendar);
}
function chunk(arr, size2) {
  const result = [];
  for (let i = 0; i < arr.length; i += size2) result.push(arr.slice(i, i + size2));
  return result;
}
function getDaysBetween(start, end) {
  const days = [];
  let dCurrent = start.add({ days: 1 });
  const dEnd = end;
  while (dCurrent.compare(dEnd) < 0) {
    days.push(dCurrent);
    dCurrent = dCurrent.add({ days: 1 });
  }
  return days;
}
function createMonth(props) {
  const { dateObj, weekStartsOn, fixedWeeks, locale } = props;
  const daysInMonth = getDaysInMonth(dateObj);
  const datesArray = Array.from({ length: daysInMonth }, (_, i) => dateObj.set({ day: i + 1 }));
  const firstDayOfMonth = startOfMonth(dateObj);
  const lastDayOfMonth = endOfMonth(dateObj);
  const lastSunday = getLastFirstDayOfWeek(firstDayOfMonth, weekStartsOn, locale);
  const nextSaturday = getNextLastDayOfWeek(lastDayOfMonth, weekStartsOn, locale);
  const lastMonthDays = getDaysBetween(lastSunday.subtract({ days: 1 }), firstDayOfMonth);
  const nextMonthDays = getDaysBetween(lastDayOfMonth, nextSaturday.add({ days: 1 }));
  const totalDays = lastMonthDays.length + datesArray.length + nextMonthDays.length;
  if (fixedWeeks && totalDays < 42) {
    const extraDays = 42 - totalDays;
    let startFrom = nextMonthDays[nextMonthDays.length - 1];
    if (!startFrom) startFrom = endOfMonth(dateObj);
    const extraDaysArray = Array.from({ length: extraDays }, (_, i) => {
      const incr = i + 1;
      return startFrom.add({ days: incr });
    });
    nextMonthDays.push(...extraDaysArray);
  }
  const allDays = lastMonthDays.concat(datesArray, nextMonthDays);
  const weeks = chunk(allDays, 7);
  return {
    value: dateObj,
    cells: allDays,
    rows: weeks
  };
}
function createMonths(props) {
  const { numberOfMonths, dateObj, ...monthProps } = props;
  const months = [];
  if (!numberOfMonths || numberOfMonths === 1) {
    months.push(createMonth({
      ...monthProps,
      dateObj
    }));
    return months;
  }
  months.push(createMonth({
    ...monthProps,
    dateObj
  }));
  for (let i = 1; i < numberOfMonths; i++) {
    const nextMonth = dateObj.add({ months: i });
    months.push(createMonth({
      ...monthProps,
      dateObj: nextMonth
    }));
  }
  return months;
}
function getWeekStartsOn(locale) {
  const monday = new CalendarDate(2025, 1, 6);
  const dayOfWeek = getDayOfWeek(monday, locale);
  return (1 - dayOfWeek + 7) % 7;
}
function getWeekNumber(date, locale = "en-US", firstDayOfWeek) {
  const jan1 = new CalendarDate(date.year, 1, 1);
  const usesISOWeek = jan1.toDate("UTC").getUTCDay() !== getDayOfWeek(jan1, locale);
  const weekStartsOn = firstDayOfWeek ?? (usesISOWeek ? "mon" : "sun");
  const firstWeekContainsDate = usesISOWeek ? 4 : 1;
  const dayOfWeek = getDayOfWeek(date, locale, weekStartsOn);
  const decidingDay = date.add({ days: 7 - firstWeekContainsDate - dayOfWeek });
  const weekYear = decidingDay.year;
  const week1Ref = new CalendarDate(weekYear, 1, firstWeekContainsDate);
  const week1Start = startOfWeek(week1Ref, locale, weekStartsOn);
  const currentWeekStart = startOfWeek(date, locale, weekStartsOn);
  const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1e3;
  const daysDiff = Math.round((currentWeekStart.toDate("UTC").getTime() - week1Start.toDate("UTC").getTime()) / MS_PER_WEEK);
  return daysDiff + 1;
}
function useDateFormatter(initialLocale, opts = {}) {
  const locale = ref(initialLocale);
  function getLocale() {
    return locale.value;
  }
  function setLocale(newLocale) {
    locale.value = newLocale;
  }
  function custom(date, options) {
    return new DateFormatter(locale.value, {
      ...opts,
      ...options
    }).format(date);
  }
  function selectedDate(date, includeTime = true) {
    if (hasTime(date) && includeTime) return custom(toDate(date), {
      dateStyle: "long",
      timeStyle: "long"
    });
    else return custom(toDate(date), { dateStyle: "long" });
  }
  function fullMonthAndYear(date, options = {}) {
    return new DateFormatter(locale.value, {
      ...opts,
      month: "long",
      year: "numeric",
      ...options
    }).format(date);
  }
  function fullMonth(date, options = {}) {
    return new DateFormatter(locale.value, {
      ...opts,
      month: "long",
      ...options
    }).format(date);
  }
  function getMonths() {
    const defaultDate = today(getLocalTimeZone());
    const months = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ];
    return months.map((item) => ({
      label: fullMonth(toDate(defaultDate.set({ month: item }))),
      value: item
    }));
  }
  function fullYear(date, options = {}) {
    return new DateFormatter(locale.value, {
      ...opts,
      year: "numeric",
      ...options
    }).format(date);
  }
  function toParts(date, options) {
    if (isZonedDateTime(date)) return new DateFormatter(locale.value, {
      ...opts,
      ...options,
      timeZone: date.timeZone
    }).formatToParts(toDate(date));
    else return new DateFormatter(locale.value, {
      ...opts,
      ...options
    }).formatToParts(toDate(date));
  }
  function dayOfWeek(date, length = "narrow") {
    return new DateFormatter(locale.value, {
      ...opts,
      weekday: length
    }).format(date);
  }
  function dayPeriod(date) {
    const parts = new DateFormatter(locale.value, {
      ...opts,
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(date);
    const value = parts.find((p) => p.type === "dayPeriod")?.value;
    if (value === "PM" || value === "pm" || value === "p.m.") return "PM";
    return "AM";
  }
  const defaultPartOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function part(dateObj, type, options = {}) {
    const opts$1 = {
      ...defaultPartOptions,
      ...options
    };
    const parts = toParts(dateObj, opts$1);
    const part$1 = parts.find((p) => p.type === type);
    return part$1 ? part$1.value : "";
  }
  return {
    setLocale,
    getLocale,
    fullMonth,
    fullYear,
    fullMonthAndYear,
    toParts,
    custom,
    part,
    dayPeriod,
    selectedDate,
    dayOfWeek,
    getMonths
  };
}
function useDirection(dir) {
  const context2 = injectConfigProviderContext({ dir: ref("ltr") });
  return computed(() => dir?.value || context2.dir?.value || "ltr");
}
let count$1 = 0;
function useFocusGuards() {
  watchEffect((cleanupFn) => {
    if (!isClient) return;
    const edgeGuards = (void 0).querySelectorAll("[data-reka-focus-guard]");
    (void 0).body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    (void 0).body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count$1++;
    cleanupFn(() => {
      if (count$1 === 1) (void 0).querySelectorAll("[data-reka-focus-guard]").forEach((node) => node.remove());
      count$1--;
    });
  });
}
function createFocusGuard() {
  const element = (void 0).createElement("span");
  element.setAttribute("data-reka-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}
function useGraceArea(triggerElement, containerElement) {
  const isPointerInTransit = refAutoReset(false, 300);
  tryOnScopeDispose(() => {
    isPointerInTransit.value = false;
  });
  const pointerGraceArea = ref(null);
  const pointerExit = createEventHook();
  function handleRemoveGraceArea() {
    pointerGraceArea.value = null;
    isPointerInTransit.value = false;
  }
  function handleCreateGraceArea(event, hoverTarget) {
    if (!hoverTarget) return;
    const currentTarget = event.currentTarget;
    const exitPoint = {
      x: event.clientX,
      y: event.clientY
    };
    const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
    const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide, 1);
    const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
    const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
    pointerGraceArea.value = graceArea;
    isPointerInTransit.value = true;
  }
  watchEffect((cleanupFn) => {
    if (triggerElement.value && containerElement.value) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, containerElement.value);
      const handleContentLeave = (event) => handleCreateGraceArea(event, triggerElement.value);
      triggerElement.value.addEventListener("pointerleave", handleTriggerLeave);
      containerElement.value.addEventListener("pointerleave", handleContentLeave);
      cleanupFn(() => {
        triggerElement.value?.removeEventListener("pointerleave", handleTriggerLeave);
        containerElement.value?.removeEventListener("pointerleave", handleContentLeave);
      });
    }
  });
  watchEffect((cleanupFn) => {
    if (pointerGraceArea.value) {
      const handleTrackPointerGrace = (event) => {
        if (!pointerGraceArea.value || !(event.target instanceof Element)) return;
        const target = event.target;
        const pointerPosition = {
          x: event.clientX,
          y: event.clientY
        };
        const hasEnteredTarget = triggerElement.value?.contains(target) || containerElement.value?.contains(target);
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea.value);
        const isAnotherGraceAreaTrigger = !!target.closest("[data-grace-area-trigger]");
        if (hasEnteredTarget) handleRemoveGraceArea();
        else if (isPointerOutsideGraceArea || isAnotherGraceAreaTrigger) {
          handleRemoveGraceArea();
          pointerExit.trigger();
        }
      };
      triggerElement.value?.ownerDocument.addEventListener("pointermove", handleTrackPointerGrace);
      cleanupFn(() => triggerElement.value?.ownerDocument.removeEventListener("pointermove", handleTrackPointerGrace));
    }
  });
  return {
    isPointerInTransit,
    onPointerExit: pointerExit.on
  };
}
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "bottom":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      });
      break;
    case "left":
      paddedExitPoints.push({
        x: exitPoint.x + padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x + padding,
        y: exitPoint.y + padding
      });
      break;
    case "right":
      paddedExitPoints.push({
        x: exitPoint.x - padding,
        y: exitPoint.y - padding
      }, {
        x: exitPoint.x - padding,
        y: exitPoint.y + padding
      });
      break;
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: right,
      y: bottom
    },
    {
      x: left,
      y: bottom
    }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
  else return upperHull.concat(lowerHull);
}
function useHideOthers(target) {
  let undo;
  watch(() => unrefElement(target), (el) => {
    let isInsideClosedPopover = false;
    try {
      isInsideClosedPopover = !!el?.closest("[popover]:not(:popover-open)");
    } catch {
    }
    if (el && !isInsideClosedPopover) undo = hideOthers(el);
    else if (undo) undo();
  });
}
let count = 0;
function useId(deterministicId, prefix = "reka") {
  if (deterministicId) return deterministicId;
  let id;
  if ("useId" in vue) id = vue.useId?.();
  else {
    const configProviderContext = injectConfigProviderContext({ useId: void 0 });
    id = configProviderContext.useId?.() ?? `${++count}`;
  }
  return prefix ? `${prefix}-${id}` : id;
}
function useKbd() {
  return {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    SPACE_CODE: "Space"
  };
}
function useLocale(locale) {
  const context2 = injectConfigProviderContext({ locale: ref("en") });
  return computed(() => locale?.value || context2.locale?.value || "en");
}
function useSize(element) {
  const size2 = ref();
  const width = computed(() => size2.value?.width ?? 0);
  const height = computed(() => size2.value?.height ?? 0);
  return {
    width,
    height
  };
}
const POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
const FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
function isLayerExist(layerElement, targetElement) {
  if (!(targetElement instanceof Element)) return false;
  const targetLayer = targetElement.closest("[data-dismissable-layer]");
  const mainLayer = layerElement.dataset.dismissableLayer === "" ? layerElement : layerElement.querySelector("[data-dismissable-layer]");
  const nodeList = Array.from(layerElement.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  if (targetLayer && (mainLayer === targetLayer || nodeList.indexOf(mainLayer) < nodeList.indexOf(targetLayer))) return true;
  else return false;
}
function usePointerDownOutside(onPointerDownOutside, element, enabled = true) {
  const ownerDocument = element?.value?.ownerDocument ?? globalThis?.document;
  const isPointerInsideDOMTree = ref(false);
  const handleClickRef = ref(() => {
  });
  watchEffect((cleanupFn) => {
    if (!isClient || !toValue(enabled)) return;
    const handlePointerDown = async (event) => {
      const target = event.target;
      if (!element?.value || !target) return;
      if (isLayerExist(element.value, target)) {
        isPointerInsideDOMTree.value = false;
        return;
      }
      if (event.target && !isPointerInsideDOMTree.value) {
        let handleAndDispatchPointerDownOutsideEvent = function() {
          handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, onPointerDownOutside, eventDetail);
        };
        const eventDetail = { originalEvent: event };
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.value);
          handleClickRef.value = handleAndDispatchPointerDownOutsideEvent;
          ownerDocument.addEventListener("click", handleClickRef.value, { once: true });
        } else handleAndDispatchPointerDownOutsideEvent();
      } else ownerDocument.removeEventListener("click", handleClickRef.value);
      isPointerInsideDOMTree.value = false;
    };
    const timerId = (void 0).setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown);
    }, 0);
    cleanupFn(() => {
      (void 0).clearTimeout(timerId);
      ownerDocument.removeEventListener("pointerdown", handlePointerDown);
      ownerDocument.removeEventListener("click", handleClickRef.value);
    });
  });
  return { onPointerDownCapture: () => {
    if (!toValue(enabled)) return;
    isPointerInsideDOMTree.value = true;
  } };
}
function useFocusOutside(onFocusOutside, element, enabled = true) {
  const ownerDocument = element?.value?.ownerDocument ?? globalThis?.document;
  const isFocusInsideDOMTree = ref(false);
  watchEffect((cleanupFn) => {
    if (!isClient || !toValue(enabled)) return;
    const handleFocus = async (event) => {
      if (!element?.value) return;
      await nextTick();
      await nextTick();
      const target = event.target;
      if (!element.value || !target || isLayerExist(element.value, target)) return;
      if (event.target && !isFocusInsideDOMTree.value) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent(FOCUS_OUTSIDE, onFocusOutside, eventDetail);
      }
    };
    ownerDocument.addEventListener("focusin", handleFocus);
    cleanupFn(() => ownerDocument.removeEventListener("focusin", handleFocus));
  });
  return {
    onFocusCapture: () => {
      if (!toValue(enabled)) return;
      isFocusInsideDOMTree.value = true;
    },
    onBlurCapture: () => {
      if (!toValue(enabled)) return;
      isFocusInsideDOMTree.value = false;
    }
  };
}
const context = reactive({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  originalBodyPointerEvents: void 0,
  branches: /* @__PURE__ */ new Set()
});
var DismissableLayer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false,
      default: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { forwardRef, currentElement: layerElement } = useForwardExpose();
    const ownerDocument = computed(() => layerElement.value?.ownerDocument ?? globalThis.document);
    const layers = computed(() => context.layersRoot);
    const index = computed(() => {
      return layerElement.value ? Array.from(layers.value).indexOf(layerElement.value) : -1;
    });
    const isBodyPointerEventsDisabled = computed(() => {
      return context.layersWithOutsidePointerEventsDisabled.size > 0;
    });
    const isPointerEventsEnabled = computed(() => {
      const localLayers = Array.from(layers.value);
      const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
      const highestLayerWithOutsidePointerEventsDisabledIndex = localLayers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
      return index.value >= highestLayerWithOutsidePointerEventsDisabledIndex;
    });
    const pointerDownOutside = usePointerDownOutside(async (event) => {
      const isPointerDownOnBranch = [...context.branches].some((branch) => branch?.contains(event.target));
      if (!isPointerEventsEnabled.value || isPointerDownOnBranch) return;
      emits("pointerDownOutside", event);
      emits("interactOutside", event);
      await nextTick();
      if (!event.defaultPrevented) emits("dismiss");
    }, layerElement);
    const focusOutside = useFocusOutside((event) => {
      const isFocusInBranch = [...context.branches].some((branch) => branch?.contains(event.target));
      if (isFocusInBranch) return;
      emits("focusOutside", event);
      emits("interactOutside", event);
      if (!event.defaultPrevented) emits("dismiss");
    }, layerElement);
    onKeyStroke("Escape", (event) => {
      const isHighestLayer = index.value === layers.value.size - 1;
      if (!isHighestLayer) return;
      emits("escapeKeyDown", event);
      if (!event.defaultPrevented) emits("dismiss");
    });
    watchEffect((cleanupFn) => {
      if (!layerElement.value) return;
      if (props.disableOutsidePointerEvents) {
        if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
          context.originalBodyPointerEvents = ownerDocument.value.body.style.pointerEvents;
          ownerDocument.value.body.style.pointerEvents = "none";
        }
        context.layersWithOutsidePointerEventsDisabled.add(layerElement.value);
      }
      layers.value.add(layerElement.value);
      cleanupFn(() => {
        if (props.disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1 && !isNullish(context.originalBodyPointerEvents)) ownerDocument.value.body.style.pointerEvents = context.originalBodyPointerEvents;
      });
    });
    watchEffect((cleanupFn) => {
      cleanupFn(() => {
        if (!layerElement.value) return;
        layers.value.delete(layerElement.value);
        context.layersWithOutsidePointerEventsDisabled.delete(layerElement.value);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref: unref(forwardRef),
        "as-child": _ctx.asChild,
        as: _ctx.as,
        "data-dismissable-layer": "",
        style: normalizeStyle({ pointerEvents: isBodyPointerEventsDisabled.value ? isPointerEventsEnabled.value ? "auto" : "none" : void 0 }),
        onFocusCapture: unref(focusOutside).onFocusCapture,
        onBlurCapture: unref(focusOutside).onBlurCapture,
        onPointerdownCapture: unref(pointerDownOutside).onPointerDownCapture
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as-child",
        "as",
        "style",
        "onFocusCapture",
        "onBlurCapture",
        "onPointerdownCapture"
      ]);
    };
  }
});
var DismissableLayer_default = DismissableLayer_vue_vue_type_script_setup_true_lang_default;
const useFocusStackState = createGlobalState(() => {
  const stack = ref([]);
  return stack;
});
function createFocusScopesStack() {
  const stack = useFocusStackState();
  return {
    add(focusScope) {
      const activeFocusScope = stack.value[0];
      if (focusScope !== activeFocusScope) activeFocusScope?.pause();
      stack.value = arrayRemove(stack.value, focusScope);
      stack.value.unshift(focusScope);
    },
    remove(focusScope) {
      stack.value = arrayRemove(stack.value, focusScope);
      stack.value[0]?.resume();
    }
  };
}
function arrayRemove(array, item) {
  const updatedArray = [...array];
  const index = updatedArray.indexOf(item);
  if (index !== -1) updatedArray.splice(index, 1);
  return updatedArray;
}
var FocusScope_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "FocusScope",
  props: {
    loop: {
      type: Boolean,
      required: false,
      default: false
    },
    trapped: {
      type: Boolean,
      required: false,
      default: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { currentRef, currentElement } = useForwardExpose();
    const lastFocusedElementRef = ref(null);
    const focusScopesStack = createFocusScopesStack();
    const focusScope = reactive({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    });
    watchEffect((cleanupFn) => {
      if (!isClient) return;
      const container = currentElement.value;
      if (!props.trapped) return;
      function handleFocusIn(event) {
        if (focusScope.paused || !container) return;
        const target = event.target;
        if (container.contains(target)) lastFocusedElementRef.value = target;
        else focus(lastFocusedElementRef.value, { select: true });
      }
      function handleFocusOut(event) {
        if (focusScope.paused || !container) return;
        const relatedTarget = event.relatedTarget;
        if (relatedTarget === null) return;
        if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.value, { select: true });
      }
      function handleMutations(mutations) {
        const lastFocusedElement = lastFocusedElementRef.value;
        if (lastFocusedElement === null) return;
        const anyNodesRemoved = mutations.some((m) => m.removedNodes.length > 0);
        if (!anyNodesRemoved) return;
        const isLastFocusedElementExist = container.contains(lastFocusedElement);
        if (!isLastFocusedElementExist) focus(container);
      }
      (void 0).addEventListener("focusin", handleFocusIn);
      (void 0).addEventListener("focusout", handleFocusOut);
      const mutationObserver = new MutationObserver(handleMutations);
      if (container) mutationObserver.observe(container, {
        childList: true,
        subtree: true
      });
      cleanupFn(() => {
        (void 0).removeEventListener("focusin", handleFocusIn);
        (void 0).removeEventListener("focusout", handleFocusOut);
        mutationObserver.disconnect();
      });
    });
    watchEffect(async (cleanupFn) => {
      const container = currentElement.value;
      await nextTick();
      if (!container) return;
      focusScopesStack.add(focusScope);
      const previouslyFocusedElement = getActiveElement();
      const hasFocusedCandidate = container.contains(previouslyFocusedElement);
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
        container.addEventListener(AUTOFOCUS_ON_MOUNT, (ev) => emits("mountAutoFocus", ev));
        container.dispatchEvent(mountEvent);
        if (!mountEvent.defaultPrevented) {
          focusFirst(getTabbableCandidates(container), { select: true });
          if (getActiveElement() === previouslyFocusedElement) focus(container);
        }
      }
      cleanupFn(() => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, (ev) => emits("mountAutoFocus", ev));
        const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
        const unmountEventHandler = (ev) => {
          emits("unmountAutoFocus", ev);
        };
        container.addEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
        container.dispatchEvent(unmountEvent);
        setTimeout(() => {
          if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? (void 0).body, { select: true });
          container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, unmountEventHandler);
          focusScopesStack.remove(focusScope);
        }, 0);
      });
    });
    function handleKeyDown(event) {
      if (!props.loop && !props.trapped) return;
      if (focusScope.paused) return;
      const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
      const focusedElement = getActiveElement();
      if (isTabKey && focusedElement) {
        const container = event.currentTarget;
        const [first, last] = getTabbableEdges(container);
        const hasTabbableElementsInside = first && last;
        if (!hasTabbableElementsInside) {
          if (focusedElement === container) event.preventDefault();
        } else if (!event.shiftKey && focusedElement === last) {
          event.preventDefault();
          if (props.loop) focus(first, { select: true });
        } else if (event.shiftKey && focusedElement === first) {
          event.preventDefault();
          if (props.loop) focus(last, { select: true });
        }
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref_key: "currentRef",
        ref: currentRef,
        tabindex: "-1",
        "as-child": _ctx.asChild,
        as: _ctx.as,
        onKeydown: handleKeyDown
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, ["as-child", "as"]);
    };
  }
});
var FocusScope_default = FocusScope_vue_vue_type_script_setup_true_lang_default;
const [injectPopperRootContext, providePopperRootContext] = createContext("PopperRoot");
var PopperRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperRoot",
  setup(__props) {
    const anchor = ref();
    providePopperRootContext({
      anchor,
      onAnchorChange: (element) => anchor.value = element
    });
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var PopperRoot_default = PopperRoot_vue_vue_type_script_setup_true_lang_default;
var PopperAnchor_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const { forwardRef, currentElement } = useForwardExpose();
    const rootContext = injectPopperRootContext();
    watchPostEffect(() => {
      rootContext.onAnchorChange(props.reference ?? currentElement.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref: unref(forwardRef),
        as: _ctx.as,
        "as-child": _ctx.asChild
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, ["as", "as-child"]);
    };
  }
});
var PopperAnchor_default = PopperAnchor_vue_vue_type_script_setup_true_lang_default;
const _hoisted_1$2 = {
  key: 0,
  d: "M0 0L6 6L12 0"
};
const _hoisted_2$2 = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
};
var Arrow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "Arrow",
  props: {
    width: {
      type: Number,
      required: false,
      default: 10
    },
    height: {
      type: Number,
      required: false,
      default: 5
    },
    rounded: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "svg"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        width: _ctx.width,
        height: _ctx.height,
        viewBox: _ctx.asChild ? void 0 : "0 0 12 6",
        preserveAspectRatio: _ctx.asChild ? void 0 : "none"
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [!_ctx.rounded ? (openBlock(), createElementBlock("path", _hoisted_1$2)) : (openBlock(), createElementBlock("path", _hoisted_2$2))])]),
        _: 3
      }, 16, [
        "width",
        "height",
        "viewBox",
        "preserveAspectRatio"
      ]);
    };
  }
});
var Arrow_default = Arrow_vue_vue_type_script_setup_true_lang_default;
function isNotNull(value) {
  return value !== null;
}
function transformOrigin(options) {
  return {
    name: "transformOrigin",
    options,
    fn(data) {
      const { placement, rects, middlewareData } = data;
      const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
      const isArrowHidden = cannotCenterArrow;
      const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
      const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
      const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
      const noArrowAlign = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[placedAlign];
      const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
      const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
      let x = "";
      let y = "";
      if (placedSide === "bottom") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${-arrowHeight}px`;
      } else if (placedSide === "top") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${rects.floating.height + arrowHeight}px`;
      } else if (placedSide === "right") {
        x = `${-arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      } else if (placedSide === "left") {
        x = `${rects.floating.width + arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      }
      return { data: {
        x,
        y
      } };
    }
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
const PopperContentPropsDefaultValue = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: true,
  align: "center",
  alignOffset: 0,
  alignFlip: true,
  arrowPadding: 0,
  hideShiftedArrow: true,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: false,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: false
};
const [injectPopperContentContext, providePopperContentContext] = createContext("PopperContent");
var PopperContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperContent",
  props: /* @__PURE__ */ mergeDefaults({
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  }, { ...PopperContentPropsDefaultValue }),
  emits: ["placed"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectPopperRootContext();
    const { forwardRef, currentElement: contentElement } = useForwardExpose();
    const floatingRef = ref();
    const arrow$1 = ref();
    const { width: arrowWidth, height: arrowHeight } = useSize();
    const desiredPlacement = computed(() => props.side + (props.align !== "center" ? `-${props.align}` : ""));
    const collisionPadding = computed(() => {
      return typeof props.collisionPadding === "number" ? props.collisionPadding : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...props.collisionPadding
      };
    });
    const boundary = computed(() => {
      return Array.isArray(props.collisionBoundary) ? props.collisionBoundary : [props.collisionBoundary];
    });
    const detectOverflowOptions = computed(() => {
      return {
        padding: collisionPadding.value,
        boundary: boundary.value.filter(isNotNull),
        altBoundary: boundary.value.length > 0
      };
    });
    const flipOptions = computed(() => {
      return {
        mainAxis: props.sideFlip,
        crossAxis: props.alignFlip
      };
    });
    const computedMiddleware = computedEager(() => {
      return [
        offset({
          mainAxis: props.sideOffset + arrowHeight.value,
          alignmentAxis: props.alignOffset
        }),
        props.prioritizePosition && props.avoidCollisions && flip({
          ...detectOverflowOptions.value,
          ...flipOptions.value
        }),
        props.avoidCollisions && shift({
          mainAxis: true,
          crossAxis: !!props.prioritizePosition,
          limiter: props.sticky === "partial" ? limitShift() : void 0,
          ...detectOverflowOptions.value
        }),
        !props.prioritizePosition && props.avoidCollisions && flip({
          ...detectOverflowOptions.value,
          ...flipOptions.value
        }),
        size({
          ...detectOverflowOptions.value,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference;
            const contentStyle = elements.floating.style;
            contentStyle.setProperty("--reka-popper-available-width", `${availableWidth}px`);
            contentStyle.setProperty("--reka-popper-available-height", `${availableHeight}px`);
            contentStyle.setProperty("--reka-popper-anchor-width", `${anchorWidth}px`);
            contentStyle.setProperty("--reka-popper-anchor-height", `${anchorHeight}px`);
          }
        }),
        arrow$1.value && arrow({
          element: arrow$1.value,
          padding: props.arrowPadding
        }),
        transformOrigin({
          arrowWidth: arrowWidth.value,
          arrowHeight: arrowHeight.value
        }),
        props.hideWhenDetached && hide({
          strategy: "referenceHidden",
          ...detectOverflowOptions.value
        })
      ];
    });
    const reference = computed(() => props.reference ?? rootContext.anchor.value);
    const { floatingStyles, placement, isPositioned, middlewareData, update } = useFloating(reference, floatingRef, {
      strategy: props.positionStrategy,
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        const cleanup = autoUpdate(...args, {
          layoutShift: !props.disableUpdateOnLayoutShift,
          animationFrame: props.updatePositionStrategy === "always"
        });
        return cleanup;
      },
      middleware: computedMiddleware
    });
    const placedSide = computed(() => getSideAndAlignFromPlacement(placement.value)[0]);
    const placedAlign = computed(() => getSideAndAlignFromPlacement(placement.value)[1]);
    watchPostEffect(() => {
      if (isPositioned.value) emits("placed");
    });
    const shouldHideArrow = computed(() => {
      const cannotCenterArrow = middlewareData.value.arrow?.centerOffset !== 0;
      return props.hideShiftedArrow && cannotCenterArrow;
    });
    const contentZIndex = ref("");
    watchEffect(() => {
      if (contentElement.value) contentZIndex.value = (void 0).getComputedStyle(contentElement.value).zIndex;
    });
    const arrowX = computed(() => middlewareData.value.arrow?.x ?? 0);
    const arrowY = computed(() => middlewareData.value.arrow?.y ?? 0);
    providePopperContentContext({
      placedSide,
      onArrowChange: (element) => arrow$1.value = element,
      arrowX,
      arrowY,
      shouldHideArrow
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: floatingRef,
        "data-reka-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(floatingStyles),
          transform: unref(isPositioned) ? unref(floatingStyles).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: contentZIndex.value,
          ["--reka-popper-transform-origin"]: [unref(middlewareData).transformOrigin?.x, unref(middlewareData).transformOrigin?.y].join(" "),
          ...unref(middlewareData).hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [createVNode(unref(Primitive), mergeProps({ ref: unref(forwardRef) }, _ctx.$attrs, {
        "as-child": props.asChild,
        as: _ctx.as,
        "data-side": placedSide.value,
        "data-align": placedAlign.value,
        style: { animation: !unref(isPositioned) ? "none" : void 0 }
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "as-child",
        "as",
        "data-side",
        "data-align",
        "style"
      ])], 4);
    };
  }
});
var PopperContent_default = PopperContent_vue_vue_type_script_setup_true_lang_default;
const OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var PopperArrow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperArrow",
  props: {
    width: {
      type: Number,
      required: false
    },
    height: {
      type: Number,
      required: false
    },
    rounded: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "svg"
    }
  },
  setup(__props) {
    const { forwardRef } = useForwardExpose();
    const contentContext = injectPopperContentContext();
    const baseSide = computed(() => OPPOSITE_SIDE[contentContext.placedSide.value]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref: (el) => {
          unref(contentContext).onArrowChange(el);
          return void 0;
        },
        style: normalizeStyle({
          position: "absolute",
          left: unref(contentContext).arrowX?.value ? `${unref(contentContext).arrowX?.value}px` : void 0,
          top: unref(contentContext).arrowY?.value ? `${unref(contentContext).arrowY?.value}px` : void 0,
          [baseSide.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[unref(contentContext).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: `rotate(180deg)`,
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[unref(contentContext).placedSide.value],
          visibility: unref(contentContext).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [createVNode(Arrow_default, mergeProps(_ctx.$attrs, {
        ref: unref(forwardRef),
        style: { display: "block" },
        as: _ctx.as,
        "as-child": _ctx.asChild,
        rounded: _ctx.rounded,
        width: _ctx.width,
        height: _ctx.height
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "as",
        "as-child",
        "rounded",
        "width",
        "height"
      ])], 4);
    };
  }
});
var PopperArrow_default = PopperArrow_vue_vue_type_script_setup_true_lang_default;
function useCalendarState(props) {
  function isDateSelected(dateObj) {
    if (Array.isArray(props.date.value)) return props.date.value.some((d) => isSameDay(d, dateObj));
    else if (!props.date.value) return false;
    else return isSameDay(props.date.value, dateObj);
  }
  const isInvalid = computed(() => {
    if (Array.isArray(props.date.value)) {
      if (!props.date.value.length) return false;
      for (const dateObj of props.date.value) {
        if (props.isDateDisabled?.(dateObj)) return true;
        if (props.isDateUnavailable?.(dateObj)) return true;
      }
    } else {
      if (!props.date.value) return false;
      if (props.isDateDisabled?.(props.date.value)) return true;
      if (props.isDateUnavailable?.(props.date.value)) return true;
    }
    return false;
  });
  const hasSelectedDate = computed(() => {
    return Array.isArray(props.date.value) ? props.date.value.length > 0 : !!props.date.value;
  });
  const isSelectedDateDisabled = computed(() => {
    if (Array.isArray(props.date.value)) {
      if (!props.date.value.length) return false;
      return props.date.value.some((dateObj) => props.isDateDisabled?.(dateObj));
    }
    if (!props.date.value) return false;
    return !!props.isDateDisabled?.(props.date.value);
  });
  return {
    isDateSelected,
    isInvalid,
    hasSelectedDate,
    isSelectedDateDisabled
  };
}
function handleNextDisabled(lastPeriodInView, nextPageFunc) {
  const firstPeriodOfNextPage = nextPageFunc(lastPeriodInView);
  const diff = firstPeriodOfNextPage.compare(lastPeriodInView);
  const duration = {};
  if (diff >= 7) duration.day = 1;
  if (diff >= getDaysInMonth(lastPeriodInView)) duration.month = 1;
  return firstPeriodOfNextPage.set({ ...duration });
}
function handlePrevDisabled(firstPeriodInView, prevPageFunc) {
  const lastPeriodOfPrevPage = prevPageFunc(firstPeriodInView);
  const diff = firstPeriodInView.compare(lastPeriodOfPrevPage);
  const duration = {};
  if (diff >= 7) duration.day = 35;
  if (diff >= getDaysInMonth(firstPeriodInView)) duration.month = 13;
  return lastPeriodOfPrevPage.set({ ...duration });
}
function handleNextPage(date, nextPageFunc) {
  return nextPageFunc(date);
}
function handlePrevPage(date, prevPageFunc) {
  return prevPageFunc(date);
}
function useCalendar(props) {
  const formatter = useDateFormatter(props.locale.value);
  const headingFormatOptions = computed(() => {
    const options = { calendar: props.placeholder.value.calendar.identifier };
    if (props.placeholder.value.calendar.identifier === "gregory" && props.placeholder.value.era === "BC") options.era = "short";
    return options;
  });
  const grid = ref(createMonths({
    dateObj: props.placeholder.value,
    weekStartsOn: props.weekStartsOn.value,
    locale: props.locale.value,
    fixedWeeks: props.fixedWeeks.value,
    numberOfMonths: props.numberOfMonths.value
  }));
  const visibleView = computed(() => {
    return grid.value.map((month) => month.value);
  });
  function isOutsideVisibleView(date) {
    return !visibleView.value.some((month) => isEqualMonth(date, month));
  }
  const isNextButtonDisabled = (nextPageFunc) => {
    if (!props.maxValue.value || !grid.value.length) return false;
    if (props.disabled.value) return true;
    const lastPeriodInView = grid.value[grid.value.length - 1].value;
    if (!nextPageFunc && !props.nextPage.value) {
      const firstPeriodOfNextPage$1 = lastPeriodInView.add({ months: 1 }).set({ day: 1 });
      return isAfter(firstPeriodOfNextPage$1, props.maxValue.value);
    }
    const firstPeriodOfNextPage = handleNextDisabled(lastPeriodInView, nextPageFunc || props.nextPage.value);
    return isAfter(firstPeriodOfNextPage, props.maxValue.value);
  };
  const isPrevButtonDisabled = (prevPageFunc) => {
    if (!props.minValue.value || !grid.value.length) return false;
    if (props.disabled.value) return true;
    const firstPeriodInView = grid.value[0].value;
    if (!prevPageFunc && !props.prevPage.value) {
      const lastPeriodOfPrevPage$1 = firstPeriodInView.subtract({ months: 1 }).set({ day: 35 });
      return isBefore(lastPeriodOfPrevPage$1, props.minValue.value);
    }
    const lastPeriodOfPrevPage = handlePrevDisabled(firstPeriodInView, prevPageFunc || props.prevPage.value);
    return isBefore(lastPeriodOfPrevPage, props.minValue.value);
  };
  function isDateDisabled(dateObj) {
    if (props.isDateDisabled?.(dateObj) || props.disabled.value) return true;
    if (props.maxValue.value && isAfter(dateObj, props.maxValue.value)) return true;
    if (props.minValue.value && isBefore(dateObj, props.minValue.value)) return true;
    return false;
  }
  const isDateUnavailable = (date) => {
    if (props.isDateUnavailable?.(date)) return true;
    return false;
  };
  const weekdays = computed(() => {
    if (!grid.value.length) return [];
    return grid.value[0].rows[0].map((date) => {
      return formatter.dayOfWeek(toDate(date), props.weekdayFormat.value);
    });
  });
  const nextPage = (nextPageFunc) => {
    const firstDate = grid.value[0].value;
    if (!nextPageFunc && !props.nextPage.value) {
      const newDate$1 = firstDate.add({ months: props.pagedNavigation.value ? props.numberOfMonths.value : 1 });
      const newGrid$1 = createMonths({
        dateObj: newDate$1,
        weekStartsOn: props.weekStartsOn.value,
        locale: props.locale.value,
        fixedWeeks: props.fixedWeeks.value,
        numberOfMonths: props.numberOfMonths.value
      });
      grid.value = newGrid$1;
      props.placeholder.value = newGrid$1[0].value.set({ day: 1 });
      return;
    }
    const newDate = handleNextPage(firstDate, nextPageFunc || props.nextPage.value);
    const newGrid = createMonths({
      dateObj: newDate,
      weekStartsOn: props.weekStartsOn.value,
      locale: props.locale.value,
      fixedWeeks: props.fixedWeeks.value,
      numberOfMonths: props.numberOfMonths.value
    });
    grid.value = newGrid;
    const duration = {};
    if (!nextPageFunc) {
      const diff = newGrid[0].value.compare(firstDate);
      if (diff >= getDaysInMonth(firstDate)) duration.day = 1;
      if (diff >= 365) duration.month = 1;
    }
    props.placeholder.value = newGrid[0].value.set({ ...duration });
  };
  const prevPage = (prevPageFunc) => {
    const firstDate = grid.value[0].value;
    if (!prevPageFunc && !props.prevPage.value) {
      const newDate$1 = firstDate.subtract({ months: props.pagedNavigation.value ? props.numberOfMonths.value : 1 });
      const newGrid$1 = createMonths({
        dateObj: newDate$1,
        weekStartsOn: props.weekStartsOn.value,
        locale: props.locale.value,
        fixedWeeks: props.fixedWeeks.value,
        numberOfMonths: props.numberOfMonths.value
      });
      grid.value = newGrid$1;
      props.placeholder.value = newGrid$1[0].value.set({ day: 1 });
      return;
    }
    const newDate = handlePrevPage(firstDate, prevPageFunc || props.prevPage.value);
    const newGrid = createMonths({
      dateObj: newDate,
      weekStartsOn: props.weekStartsOn.value,
      locale: props.locale.value,
      fixedWeeks: props.fixedWeeks.value,
      numberOfMonths: props.numberOfMonths.value
    });
    grid.value = newGrid;
    const duration = {};
    if (!prevPageFunc) {
      const diff = firstDate.compare(newGrid[0].value);
      if (diff >= getDaysInMonth(firstDate)) duration.day = 1;
      if (diff >= 365) duration.month = 1;
    }
    props.placeholder.value = newGrid[0].value.set({ ...duration });
  };
  watch(props.placeholder, (value) => {
    if (visibleView.value.some((month) => isEqualMonth(month, value))) return;
    grid.value = createMonths({
      dateObj: value,
      weekStartsOn: props.weekStartsOn.value,
      locale: props.locale.value,
      fixedWeeks: props.fixedWeeks.value,
      numberOfMonths: props.numberOfMonths.value
    });
  });
  watch([
    props.locale,
    props.weekStartsOn,
    props.fixedWeeks,
    props.numberOfMonths
  ], () => {
    grid.value = createMonths({
      dateObj: props.placeholder.value,
      weekStartsOn: props.weekStartsOn.value,
      locale: props.locale.value,
      fixedWeeks: props.fixedWeeks.value,
      numberOfMonths: props.numberOfMonths.value
    });
  });
  const headingValue = computed(() => {
    if (!grid.value.length) return "";
    if (props.locale.value !== formatter.getLocale()) formatter.setLocale(props.locale.value);
    if (grid.value.length === 1) {
      const month = grid.value[0].value;
      return `${formatter.fullMonthAndYear(toDate(month), headingFormatOptions.value)}`;
    }
    const startMonth = toDate(grid.value[0].value);
    const endMonth = toDate(grid.value[grid.value.length - 1].value);
    const startMonthName = formatter.fullMonth(startMonth, headingFormatOptions.value);
    const endMonthName = formatter.fullMonth(endMonth, headingFormatOptions.value);
    const startMonthYear = formatter.fullYear(startMonth, headingFormatOptions.value);
    const endMonthYear = formatter.fullYear(endMonth, headingFormatOptions.value);
    const content = startMonthYear === endMonthYear ? `${startMonthName} - ${endMonthName} ${endMonthYear}` : `${startMonthName} ${startMonthYear} - ${endMonthName} ${endMonthYear}`;
    return content;
  });
  const fullCalendarLabel = computed(() => `${props.calendarLabel.value ?? "Event Date"}, ${headingValue.value}`);
  const isPlaceholderFocusable = computed(() => {
    return !(isDateDisabled(props.placeholder.value) || isDateUnavailable(props.placeholder.value) || isOutsideVisibleView(props.placeholder.value));
  });
  const firstFocusableDate = computed(() => {
    for (const month of grid.value) {
      if (props.minValue.value && isBefore(month.value, props.minValue.value)) continue;
      const daysInMonth = getDaysInMonth(month.value);
      const startDay = props.minValue.value && isSameMonth(props.minValue.value, month.value) ? props.minValue.value.day : 1;
      for (let day = startDay; day <= daysInMonth; day++) {
        const date = month.value.set({ day });
        if (isDateDisabled(date) || isDateUnavailable(date)) continue;
        return date;
      }
    }
  });
  return {
    isDateDisabled,
    isDateUnavailable,
    isNextButtonDisabled,
    isPrevButtonDisabled,
    grid,
    weekdays,
    visibleView,
    isOutsideVisibleView,
    formatter,
    nextPage,
    prevPage,
    headingValue,
    fullCalendarLabel,
    isPlaceholderFocusable,
    firstFocusableDate
  };
}
const _hoisted_1$1 = { style: {
  "border": "0px",
  "clip": "rect(0px, 0px, 0px, 0px)",
  "clip-path": "inset(50%)",
  "height": "1px",
  "margin": "-1px",
  "overflow": "hidden",
  "padding": "0px",
  "position": "absolute",
  "white-space": "nowrap",
  "width": "1px"
} };
const _hoisted_2$1 = {
  role: "heading",
  "aria-level": "2"
};
const [injectCalendarRootContext, provideCalendarRootContext] = createContext("CalendarRoot");
var CalendarRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarRoot",
  props: {
    defaultValue: {
      type: null,
      required: false,
      default: void 0
    },
    defaultPlaceholder: {
      type: null,
      required: false
    },
    placeholder: {
      type: null,
      required: false,
      default: void 0
    },
    pagedNavigation: {
      type: Boolean,
      required: false,
      default: false
    },
    preventDeselect: {
      type: Boolean,
      required: false,
      default: false
    },
    weekStartsOn: {
      type: Number,
      required: false
    },
    weekdayFormat: {
      type: String,
      required: false,
      default: "narrow"
    },
    calendarLabel: {
      type: String,
      required: false
    },
    fixedWeeks: {
      type: Boolean,
      required: false,
      default: false
    },
    maxValue: {
      type: null,
      required: false
    },
    minValue: {
      type: null,
      required: false
    },
    locale: {
      type: String,
      required: false
    },
    numberOfMonths: {
      type: Number,
      required: false,
      default: 1
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    },
    initialFocus: {
      type: Boolean,
      required: false,
      default: false
    },
    isDateDisabled: {
      type: Function,
      required: false,
      default: void 0
    },
    isDateUnavailable: {
      type: Function,
      required: false,
      default: void 0
    },
    dir: {
      type: String,
      required: false
    },
    nextPage: {
      type: Function,
      required: false
    },
    prevPage: {
      type: Function,
      required: false
    },
    modelValue: {
      type: null,
      required: false
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    disableDaysOutsideCurrentView: {
      type: Boolean,
      required: false,
      default: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { disabled, readonly, initialFocus, pagedNavigation, weekdayFormat, fixedWeeks, multiple, minValue, maxValue, numberOfMonths, preventDeselect, isDateDisabled: propsIsDateDisabled, isDateUnavailable: propsIsDateUnavailable, calendarLabel, defaultValue, nextPage: propsNextPage, prevPage: propsPrevPage, dir: propDir, locale: propLocale, disableDaysOutsideCurrentView } = toRefs(props);
    const { primitiveElement, currentElement: parentElement } = usePrimitiveElement();
    const locale = useLocale(propLocale);
    const dir = useDirection(propDir);
    const weekStartsOn = computed(() => props.weekStartsOn ?? getWeekStartsOn(locale.value));
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: defaultValue.value,
      passive: props.modelValue === void 0
    });
    const defaultDate = getDefaultDate({
      defaultPlaceholder: props.placeholder,
      defaultValue: modelValue.value,
      locale: props.locale
    });
    const placeholder = useVModel(props, "placeholder", emits, {
      defaultValue: props.defaultPlaceholder ?? defaultDate.copy(),
      passive: props.placeholder === void 0
    });
    function onPlaceholderChange(value) {
      placeholder.value = value.copy();
    }
    const { fullCalendarLabel, headingValue, isDateDisabled, isDateUnavailable, isNextButtonDisabled, isPrevButtonDisabled, weekdays, isOutsideVisibleView, nextPage, prevPage, formatter, grid, isPlaceholderFocusable, firstFocusableDate } = useCalendar({
      locale,
      placeholder,
      weekStartsOn,
      fixedWeeks,
      numberOfMonths,
      minValue,
      maxValue,
      disabled,
      weekdayFormat,
      pagedNavigation,
      isDateDisabled: propsIsDateDisabled.value,
      isDateUnavailable: propsIsDateUnavailable.value,
      calendarLabel,
      nextPage: propsNextPage,
      prevPage: propsPrevPage
    });
    const { isInvalid, isDateSelected, hasSelectedDate, isSelectedDateDisabled } = useCalendarState({
      date: modelValue,
      isDateDisabled,
      isDateUnavailable
    });
    watch(modelValue, (_modelValue) => {
      if (Array.isArray(_modelValue) && _modelValue.length) {
        const lastValue = _modelValue[_modelValue.length - 1];
        if (lastValue && !isEqualDay(placeholder.value, lastValue)) onPlaceholderChange(lastValue);
      } else if (!Array.isArray(_modelValue) && _modelValue && !isEqualDay(placeholder.value, _modelValue)) onPlaceholderChange(_modelValue);
    });
    function onDateChange(value) {
      if (!multiple.value) {
        if (!modelValue.value) {
          modelValue.value = value.copy();
          return;
        }
        if (!preventDeselect.value && isEqualDay(modelValue.value, value)) {
          placeholder.value = value.copy();
          modelValue.value = void 0;
        } else modelValue.value = value.copy();
      } else if (!modelValue.value) modelValue.value = [value.copy()];
      else if (Array.isArray(modelValue.value)) {
        const index = modelValue.value.findIndex((date) => isSameDay(date, value));
        if (index === -1) modelValue.value = [...modelValue.value, value];
        else if (!preventDeselect.value) {
          const next = modelValue.value.filter((date) => !isSameDay(date, value));
          if (!next.length) {
            placeholder.value = value.copy();
            modelValue.value = void 0;
            return;
          }
          modelValue.value = next.map((date) => date.copy());
        }
      }
    }
    provideCalendarRootContext({
      isDateUnavailable,
      dir,
      isDateDisabled,
      locale,
      formatter,
      modelValue,
      placeholder,
      disabled,
      initialFocus,
      pagedNavigation,
      grid,
      weekDays: weekdays,
      weekStartsOn,
      weekdayFormat,
      fixedWeeks,
      multiple,
      numberOfMonths,
      readonly,
      preventDeselect,
      fullCalendarLabel,
      headingValue,
      isInvalid,
      isDateSelected,
      isNextButtonDisabled,
      isPrevButtonDisabled,
      isOutsideVisibleView,
      nextPage,
      prevPage,
      parentElement,
      onPlaceholderChange,
      onDateChange,
      disableDaysOutsideCurrentView,
      minValue,
      maxValue,
      isPlaceholderFocusable,
      firstFocusableDate,
      hasSelectedDate,
      isSelectedDateDisabled
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref_key: "primitiveElement",
        ref: primitiveElement,
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "aria-label": unref(fullCalendarLabel),
        "data-readonly": unref(readonly) ? "" : void 0,
        "data-disabled": unref(disabled) ? "" : void 0,
        "data-invalid": unref(isInvalid) ? "" : void 0,
        dir: unref(dir)
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          date: unref(placeholder),
          grid: unref(grid),
          weekDays: unref(weekdays),
          weekStartsOn: weekStartsOn.value,
          locale: unref(locale),
          fixedWeeks: unref(fixedWeeks),
          modelValue: unref(modelValue)
        }), createElementVNode("div", _hoisted_1$1, [createElementVNode("div", _hoisted_2$1, toDisplayString(unref(fullCalendarLabel)), 1)])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-label",
        "data-readonly",
        "data-disabled",
        "data-invalid",
        "dir"
      ]);
    };
  }
});
var CalendarRoot_default = CalendarRoot_vue_vue_type_script_setup_true_lang_default;
var CalendarCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarCell",
  props: {
    date: {
      type: null,
      required: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "td"
    }
  },
  setup(__props) {
    const rootContext = injectCalendarRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: _ctx.as,
        "as-child": _ctx.asChild,
        role: "gridcell",
        "aria-selected": unref(rootContext).isDateSelected(_ctx.date) ? true : void 0,
        "aria-disabled": unref(rootContext).isDateDisabled(_ctx.date) || unref(rootContext).isDateUnavailable?.(_ctx.date) || unref(rootContext).disableDaysOutsideCurrentView.value,
        "data-disabled": unref(rootContext).isDateDisabled(_ctx.date) || unref(rootContext).disableDaysOutsideCurrentView.value ? "" : void 0
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-selected",
        "aria-disabled",
        "data-disabled"
      ]);
    };
  }
});
var CalendarCell_default = CalendarCell_vue_vue_type_script_setup_true_lang_default;
var CalendarCellTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarCellTrigger",
  props: {
    day: {
      type: null,
      required: true
    },
    month: {
      type: null,
      required: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  setup(__props) {
    const props = __props;
    const kbd = useKbd();
    const rootContext = injectCalendarRootContext();
    const { primitiveElement } = usePrimitiveElement();
    const dayValue = computed(() => props.day.day.toLocaleString(rootContext.locale.value));
    const labelText = computed(() => {
      return rootContext.formatter.custom(toDate(props.day), {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      });
    });
    const isUnavailable = computed(() => rootContext.isDateUnavailable?.(props.day) ?? false);
    const isDateToday = computed(() => {
      return isToday(props.day, getLocalTimeZone());
    });
    const isOutsideView = computed(() => {
      return !isSameMonth(props.day, props.month);
    });
    const isOutsideVisibleView = computed(() => rootContext.isOutsideVisibleView(props.day));
    const isDisabled = computed(() => rootContext.isDateDisabled(props.day) || rootContext.disableDaysOutsideCurrentView.value && isOutsideView.value);
    const isFocusedDate = computed(() => {
      if (isOutsideView.value || isDisabled.value) return false;
      if (!rootContext.disabled.value && rootContext.isPlaceholderFocusable.value && isSameDay(props.day, rootContext.placeholder.value)) return true;
      if ((!rootContext.hasSelectedDate.value || rootContext.isSelectedDateDisabled.value) && !rootContext.isPlaceholderFocusable.value) return rootContext.firstFocusableDate.value && isSameDay(props.day, rootContext.firstFocusableDate.value);
      return false;
    });
    const isSelectedDate = computed(() => rootContext.isDateSelected(props.day));
    function changeDate(date) {
      if (rootContext.readonly.value) return;
      if (rootContext.isDateDisabled(date) || rootContext.isDateUnavailable?.(date)) return;
      rootContext.onDateChange(date);
    }
    function handleClick() {
      if (isDisabled.value) return;
      changeDate(props.day);
    }
    function handleArrowKey(e) {
      if (isDisabled.value) return;
      e.preventDefault();
      e.stopPropagation();
      const parentElement = rootContext.parentElement.value;
      const indexIncrementation = 7;
      const sign = rootContext.dir.value === "rtl" ? -1 : 1;
      switch (e.code) {
        case kbd.ARROW_RIGHT:
          shiftFocus(props.day, sign);
          break;
        case kbd.ARROW_LEFT:
          shiftFocus(props.day, -sign);
          break;
        case kbd.ARROW_UP:
          shiftFocus(props.day, -indexIncrementation);
          break;
        case kbd.ARROW_DOWN:
          shiftFocus(props.day, indexIncrementation);
          break;
        case kbd.ENTER:
        case kbd.SPACE_CODE:
          changeDate(props.day);
      }
      function shiftFocus(day, add) {
        const candidateDayValue = day.add({ days: add });
        if (rootContext.minValue.value && candidateDayValue.compare(rootContext.minValue.value) < 0 || rootContext.maxValue.value && candidateDayValue.compare(rootContext.maxValue.value) > 0) return;
        const candidateDay = parentElement.querySelector(`[data-value='${candidateDayValue.toString()}']:not([data-outside-view])`);
        if (!candidateDay) {
          if (add > 0) {
            if (rootContext.isNextButtonDisabled()) return;
            rootContext.nextPage();
          } else {
            if (rootContext.isPrevButtonDisabled()) return;
            rootContext.prevPage();
          }
          nextTick(() => {
            shiftFocus(day, add);
          });
          return;
        }
        if (candidateDay && candidateDay.hasAttribute("data-disabled")) return shiftFocus(candidateDayValue, add);
        rootContext.onPlaceholderChange(candidateDayValue);
        candidateDay?.focus();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref_key: "primitiveElement",
        ref: primitiveElement,
        as: props.as,
        "as-child": props.asChild,
        role: "button",
        "aria-label": labelText.value,
        "data-reka-calendar-cell-trigger": "",
        "aria-disabled": isDisabled.value || isUnavailable.value ? true : void 0,
        "data-selected": isSelectedDate.value ? true : void 0,
        "data-value": _ctx.day.toString(),
        "data-disabled": isDisabled.value ? "" : void 0,
        "data-unavailable": isUnavailable.value ? "" : void 0,
        "data-today": isDateToday.value ? "" : void 0,
        "data-outside-view": isOutsideView.value ? "" : void 0,
        "data-outside-visible-view": isOutsideVisibleView.value ? "" : void 0,
        "data-focused": isFocusedDate.value ? "" : void 0,
        tabindex: isFocusedDate.value ? 0 : isOutsideView.value || isDisabled.value ? void 0 : -1,
        onClick: handleClick,
        onKeydown: [withKeys(handleArrowKey, [
          "up",
          "down",
          "left",
          "right",
          "space",
          "enter"
        ]), _cache[0] || (_cache[0] = withKeys(withModifiers(() => {
        }, ["prevent"]), ["enter"]))]
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          dayValue: dayValue.value,
          disabled: isDisabled.value,
          today: isDateToday.value,
          selected: isSelectedDate.value,
          outsideView: isOutsideView.value,
          outsideVisibleView: isOutsideVisibleView.value,
          unavailable: isUnavailable.value
        }, () => [createTextVNode(toDisplayString(dayValue.value), 1)])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-label",
        "aria-disabled",
        "data-selected",
        "data-value",
        "data-disabled",
        "data-unavailable",
        "data-today",
        "data-outside-view",
        "data-outside-visible-view",
        "data-focused",
        "tabindex"
      ]);
    };
  }
});
var CalendarCellTrigger_default = CalendarCellTrigger_vue_vue_type_script_setup_true_lang_default;
var CalendarGrid_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarGrid",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "table"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectCalendarRootContext();
    const disabled = computed(() => rootContext.disabled.value ? true : void 0);
    const readonly = computed(() => rootContext.readonly.value ? true : void 0);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        tabindex: "-1",
        role: "application",
        "aria-readonly": readonly.value,
        "aria-disabled": disabled.value,
        "data-readonly": readonly.value && "",
        "data-disabled": disabled.value && ""
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "aria-readonly",
        "aria-disabled",
        "data-readonly",
        "data-disabled"
      ]);
    };
  }
});
var CalendarGrid_default = CalendarGrid_vue_vue_type_script_setup_true_lang_default;
var CalendarGridBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarGridBody",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "tbody"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var CalendarGridBody_default = CalendarGridBody_vue_vue_type_script_setup_true_lang_default;
var CalendarGridHead_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarGridHead",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "thead"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { "aria-hidden": "true" }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var CalendarGridHead_default = CalendarGridHead_vue_vue_type_script_setup_true_lang_default;
var CalendarGridRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarGridRow",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "tr"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var CalendarGridRow_default = CalendarGridRow_vue_vue_type_script_setup_true_lang_default;
var CalendarHeadCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarHeadCell",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "th"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var CalendarHeadCell_default = CalendarHeadCell_vue_vue_type_script_setup_true_lang_default;
var CalendarHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarHeader",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var CalendarHeader_default = CalendarHeader_vue_vue_type_script_setup_true_lang_default;
var CalendarHeading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarHeading",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectCalendarRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { "data-disabled": unref(rootContext).disabled.value ? "" : void 0 }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { headingValue: unref(rootContext).headingValue.value }, () => [createTextVNode(toDisplayString(unref(rootContext).headingValue.value), 1)])]),
        _: 3
      }, 16, ["data-disabled"]);
    };
  }
});
var CalendarHeading_default = CalendarHeading_vue_vue_type_script_setup_true_lang_default;
var CalendarNext_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarNext",
  props: {
    nextPage: {
      type: Function,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const disabled = computed(() => rootContext.disabled.value || rootContext.isNextButtonDisabled(props.nextPage));
    const rootContext = injectCalendarRootContext();
    function handleClick() {
      if (disabled.value) return;
      rootContext.nextPage(props.nextPage);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: props.as,
        "as-child": props.asChild,
        "aria-label": "Next page",
        type: props.as === "button" ? "button" : void 0,
        "aria-disabled": disabled.value || void 0,
        "data-disabled": disabled.value || void 0,
        disabled: disabled.value,
        onClick: handleClick
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { disabled: disabled.value }, () => [_cache[0] || (_cache[0] = createTextVNode(" Next page "))])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "type",
        "aria-disabled",
        "data-disabled",
        "disabled"
      ]);
    };
  }
});
var CalendarNext_default = CalendarNext_vue_vue_type_script_setup_true_lang_default;
var CalendarPrev_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "CalendarPrev",
  props: {
    prevPage: {
      type: Function,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const disabled = computed(() => rootContext.disabled.value || rootContext.isPrevButtonDisabled(props.prevPage));
    const rootContext = injectCalendarRootContext();
    function handleClick() {
      if (disabled.value) return;
      rootContext.prevPage(props.prevPage);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        "aria-label": "Previous page",
        as: props.as,
        "as-child": props.asChild,
        type: props.as === "button" ? "button" : void 0,
        "aria-disabled": disabled.value || void 0,
        "data-disabled": disabled.value || void 0,
        disabled: disabled.value,
        onClick: handleClick
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { disabled: disabled.value }, () => [_cache[0] || (_cache[0] = createTextVNode(" Prev page "))])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "type",
        "aria-disabled",
        "data-disabled",
        "disabled"
      ]);
    };
  }
});
var CalendarPrev_default = CalendarPrev_vue_vue_type_script_setup_true_lang_default;
const [injectPopoverRootContext, providePopoverRootContext] = createContext("PopoverRoot");
var PopoverRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    modal: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { modal } = toRefs(props);
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const triggerElement = ref();
    const hasCustomAnchor = ref(false);
    providePopoverRootContext({
      contentId: "",
      triggerId: "",
      modal,
      open,
      onOpenChange: (value) => {
        open.value = value;
      },
      onOpenToggle: () => {
        open.value = !open.value;
      },
      triggerElement,
      hasCustomAnchor
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperRoot_default), null, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          open: unref(open),
          close: () => open.value = false
        })]),
        _: 3
      });
    };
  }
});
var PopoverRoot_default = PopoverRoot_vue_vue_type_script_setup_true_lang_default;
var PopoverAnchor_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverAnchor",
  props: {
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    injectPopoverRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperAnchor_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var PopoverAnchor_default = PopoverAnchor_vue_vue_type_script_setup_true_lang_default;
var PopoverArrow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverArrow",
  props: {
    width: {
      type: Number,
      required: false,
      default: 10
    },
    height: {
      type: Number,
      required: false,
      default: 5
    },
    rounded: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "svg"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var PopoverArrow_default = PopoverArrow_vue_vue_type_script_setup_true_lang_default;
var PopoverClose_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverClose",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    const rootContext = injectPopoverRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        type: _ctx.as === "button" ? "button" : void 0,
        as: _ctx.as,
        "as-child": props.asChild,
        onClick: _cache[0] || (_cache[0] = ($event) => unref(rootContext).onOpenChange(false))
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "type",
        "as",
        "as-child"
      ]);
    };
  }
});
var PopoverClose_default = PopoverClose_vue_vue_type_script_setup_true_lang_default;
var PopoverContentImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardProps(reactiveOmit(props, "trapFocus", "disableOutsidePointerEvents"));
    const { forwardRef } = useForwardExpose();
    const rootContext = injectPopoverRootContext();
    useFocusGuards();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(FocusScope_default), {
        "as-child": "",
        loop: "",
        trapped: _ctx.trapFocus,
        onMountAutoFocus: _cache[5] || (_cache[5] = ($event) => emits("openAutoFocus", $event)),
        onUnmountAutoFocus: _cache[6] || (_cache[6] = ($event) => emits("closeAutoFocus", $event))
      }, {
        default: withCtx(() => [createVNode(unref(DismissableLayer_default), {
          "as-child": "",
          "disable-outside-pointer-events": _ctx.disableOutsidePointerEvents,
          onPointerDownOutside: _cache[0] || (_cache[0] = ($event) => emits("pointerDownOutside", $event)),
          onInteractOutside: _cache[1] || (_cache[1] = ($event) => emits("interactOutside", $event)),
          onEscapeKeyDown: _cache[2] || (_cache[2] = ($event) => emits("escapeKeyDown", $event)),
          onFocusOutside: _cache[3] || (_cache[3] = ($event) => emits("focusOutside", $event)),
          onDismiss: _cache[4] || (_cache[4] = ($event) => unref(rootContext).onOpenChange(false))
        }, {
          default: withCtx(() => [createVNode(unref(PopperContent_default), mergeProps(unref(forwarded), {
            id: unref(rootContext).contentId,
            ref: unref(forwardRef),
            "data-state": unref(rootContext).open.value ? "open" : "closed",
            "aria-labelledby": unref(rootContext).triggerId,
            style: {
              "--reka-popover-content-transform-origin": "var(--reka-popper-transform-origin)",
              "--reka-popover-content-available-width": "var(--reka-popper-available-width)",
              "--reka-popover-content-available-height": "var(--reka-popper-available-height)",
              "--reka-popover-trigger-width": "var(--reka-popper-anchor-width)",
              "--reka-popover-trigger-height": "var(--reka-popper-anchor-height)"
            },
            role: "dialog"
          }), {
            default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
            _: 3
          }, 16, [
            "id",
            "data-state",
            "aria-labelledby"
          ])]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])]),
        _: 3
      }, 8, ["trapped"]);
    };
  }
});
var PopoverContentImpl_default = PopoverContentImpl_vue_vue_type_script_setup_true_lang_default;
var PopoverContentModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentModal",
  props: {
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectPopoverRootContext();
    const isRightClickOutsideRef = ref(false);
    useBodyScrollLock(true);
    const forwarded = useForwardPropsEmits(props, emits);
    const { forwardRef, currentElement } = useForwardExpose();
    useHideOthers(currentElement);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(PopoverContentImpl_default, mergeProps(unref(forwarded), {
        ref: unref(forwardRef),
        "trap-focus": unref(rootContext).open.value,
        "disable-outside-pointer-events": "",
        onCloseAutoFocus: _cache[0] || (_cache[0] = withModifiers((event) => {
          emits("closeAutoFocus", event);
          if (!isRightClickOutsideRef.value) unref(rootContext).triggerElement.value?.focus();
        }, ["prevent"])),
        onPointerDownOutside: _cache[1] || (_cache[1] = (event) => {
          emits("pointerDownOutside", event);
          const originalEvent = event.detail.originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          isRightClickOutsideRef.value = isRightClick;
        }),
        onFocusOutside: _cache[2] || (_cache[2] = withModifiers(() => {
        }, ["prevent"]))
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["trap-focus"]);
    };
  }
});
var PopoverContentModal_default = PopoverContentModal_vue_vue_type_script_setup_true_lang_default;
var PopoverContentNonModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentNonModal",
  props: {
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectPopoverRootContext();
    const hasInteractedOutsideRef = ref(false);
    const hasPointerDownOutsideRef = ref(false);
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(PopoverContentImpl_default, mergeProps(unref(forwarded), {
        "trap-focus": false,
        "disable-outside-pointer-events": false,
        onCloseAutoFocus: _cache[0] || (_cache[0] = (event) => {
          emits("closeAutoFocus", event);
          if (!event.defaultPrevented) {
            if (!hasInteractedOutsideRef.value) unref(rootContext).triggerElement.value?.focus();
            event.preventDefault();
          }
          hasInteractedOutsideRef.value = false;
          hasPointerDownOutsideRef.value = false;
        }),
        onInteractOutside: _cache[1] || (_cache[1] = async (event) => {
          emits("interactOutside", event);
          if (!event.defaultPrevented) {
            hasInteractedOutsideRef.value = true;
            if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.value = true;
          }
          const target = event.target;
          const targetIsTrigger = unref(rootContext).triggerElement.value?.contains(target);
          if (targetIsTrigger) event.preventDefault();
          if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.value) event.preventDefault();
        })
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var PopoverContentNonModal_default = PopoverContentNonModal_vue_vue_type_script_setup_true_lang_default;
var PopoverContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const rootContext = injectPopoverRootContext();
    const forwarded = useForwardPropsEmits(props, emits);
    const { forwardRef } = useForwardExpose();
    rootContext.contentId ||= useId(void 0, "reka-popover-content");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(rootContext).open.value }, {
        default: withCtx(() => [unref(rootContext).modal.value ? (openBlock(), createBlock(PopoverContentModal_default, mergeProps({ key: 0 }, unref(forwarded), { ref: unref(forwardRef) }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16)) : (openBlock(), createBlock(PopoverContentNonModal_default, mergeProps({ key: 1 }, unref(forwarded), { ref: unref(forwardRef) }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16))]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var PopoverContent_default = PopoverContent_vue_vue_type_script_setup_true_lang_default;
var PopoverPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverPortal",
  props: {
    to: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    defer: {
      type: Boolean,
      required: false
    },
    forceMount: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var PopoverPortal_default = PopoverPortal_vue_vue_type_script_setup_true_lang_default;
var PopoverTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectPopoverRootContext();
    const { forwardRef } = useForwardExpose();
    rootContext.triggerId ||= useId(void 0, "reka-popover-trigger");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(unref(rootContext).hasCustomAnchor.value ? unref(Primitive) : unref(PopperAnchor_default)), { "as-child": "" }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          id: unref(rootContext).triggerId,
          ref: unref(forwardRef),
          type: _ctx.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": unref(rootContext).open.value,
          "aria-controls": unref(rootContext).contentId,
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          as: _ctx.as,
          "as-child": props.asChild,
          onClick: unref(rootContext).onOpenToggle
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "id",
          "type",
          "aria-expanded",
          "aria-controls",
          "data-state",
          "as",
          "as-child",
          "onClick"
        ])]),
        _: 3
      });
    };
  }
});
var PopoverTrigger_default = PopoverTrigger_vue_vue_type_script_setup_true_lang_default;
function useRangeCalendarState(props) {
  const isStartInvalid = computed(() => {
    if (!props.start.value) return false;
    if (props.isDateDisabled(props.start.value)) return true;
    return false;
  });
  const isEndInvalid = computed(() => {
    if (!props.end.value) return false;
    if (props.isDateDisabled(props.end.value)) return true;
    return false;
  });
  const isInvalid = computed(() => {
    if (isStartInvalid.value || isEndInvalid.value) return true;
    if (props.start.value && props.end.value && isBefore(props.end.value, props.start.value)) return true;
    return false;
  });
  const isSelectionStart = (date) => {
    if (!props.start.value) return false;
    return isSameDay(props.start.value, date);
  };
  const isSelectionEnd = (date) => {
    if (!props.end.value) return false;
    return isSameDay(props.end.value, date);
  };
  const isSelected = (date) => {
    if (props.start.value && isSameDay(props.start.value, date)) return true;
    if (props.end.value && isSameDay(props.end.value, date)) return true;
    if (props.end.value && props.start.value) return isBetween(date, props.start.value, props.end.value);
    return false;
  };
  const rangeIsDateDisabled = (date) => {
    if (props.isDateDisabled(date)) return true;
    if (props.maximumDays?.value) {
      if (props.start.value && props.end.value) {
        if (props.fixedDate.value) {
          const diff = getDaysBetween(props.start.value, props.end.value).length;
          if (diff <= props.maximumDays.value) {
            const daysLeft = props.maximumDays.value - diff - 1;
            const startLimit = props.start.value.subtract({ days: daysLeft });
            const endLimit = props.end.value.add({ days: daysLeft });
            return !isBetween(date, startLimit, endLimit);
          }
        }
        return false;
      }
      if (props.start.value) {
        const maxDate = props.start.value.add({ days: props.maximumDays.value });
        const minDate = props.start.value.subtract({ days: props.maximumDays.value });
        return !isBetween(date, minDate, maxDate);
      }
    }
    return false;
  };
  const isDateHighlightable = (date) => {
    if (props.isDateHighlightable?.(date)) return true;
    return false;
  };
  const highlightedRange = computed(() => {
    if (props.start.value && props.end.value && !props.fixedDate.value) return null;
    if (!props.start.value || !props.focusedValue.value) return null;
    const isStartBeforeFocused = isBefore(props.start.value, props.focusedValue.value);
    const start = isStartBeforeFocused ? props.start.value : props.focusedValue.value;
    const end = isStartBeforeFocused ? props.focusedValue.value : props.start.value;
    if (isSameDay(start, end)) return {
      start,
      end
    };
    if (props.maximumDays?.value && !props.end.value) {
      const maximumDays = props.maximumDays.value;
      const anchor = props.start.value;
      const focused = props.focusedValue.value;
      if (!isBefore(focused, anchor)) return {
        start: anchor,
        end: anchor.add({ days: maximumDays - 1 })
      };
      return {
        start: anchor.subtract({ days: maximumDays - 1 }),
        end: anchor
      };
    }
    const isValid = areAllDaysBetweenValid(start, end, props.allowNonContiguousRanges.value ? () => false : props.isDateUnavailable, rangeIsDateDisabled, props.isDateHighlightable);
    if (isValid) return {
      start,
      end
    };
    return null;
  });
  const isHighlightedStart = (date) => {
    if (!highlightedRange.value || !highlightedRange.value.start) return false;
    return isSameDay(highlightedRange.value.start, date);
  };
  const isHighlightedEnd = (date) => {
    if (!highlightedRange.value || !highlightedRange.value.end) return false;
    return isSameDay(highlightedRange.value.end, date);
  };
  const hasSelectedDate = computed(() => {
    return !!(props.start.value || props.end.value);
  });
  const isStartDateDisabled = computed(() => {
    return !!(props.start.value && props.isDateDisabled(props.start.value));
  });
  const isEndDateDisabled = computed(() => {
    return !!(props.end.value && props.isDateDisabled(props.end.value));
  });
  const isSelectedDisabled = computed(() => {
    const hasStart = !!props.start.value;
    const hasEnd = !!props.end.value;
    if (!hasStart && !hasEnd) return false;
    if (hasStart && hasEnd) return isStartDateDisabled.value && isEndDateDisabled.value;
    return hasStart && isStartDateDisabled.value || hasEnd && isEndDateDisabled.value;
  });
  const selectedFocusableDate = computed(() => {
    if (props.start.value && !isStartDateDisabled.value) return props.start.value;
    if (props.end.value && !isEndDateDisabled.value) return props.end.value;
    return void 0;
  });
  return {
    isInvalid,
    isSelected,
    isDateHighlightable,
    highlightedRange,
    isSelectionStart,
    isSelectionEnd,
    isHighlightedStart,
    isHighlightedEnd,
    isDateDisabled: rangeIsDateDisabled,
    hasSelectedDate,
    isSelectedDisabled,
    selectedFocusableDate
  };
}
const _hoisted_1 = { style: {
  "border": "0px",
  "clip": "rect(0px, 0px, 0px, 0px)",
  "clip-path": "inset(50%)",
  "height": "1px",
  "margin": "-1px",
  "overflow": "hidden",
  "padding": "0px",
  "position": "absolute",
  "white-space": "nowrap",
  "width": "1px"
} };
const _hoisted_2 = {
  role: "heading",
  "aria-level": "2"
};
const [injectRangeCalendarRootContext, provideRangeCalendarRootContext] = createContext("RangeCalendarRoot");
var RangeCalendarRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarRoot",
  props: {
    defaultPlaceholder: {
      type: null,
      required: false
    },
    defaultValue: {
      type: Object,
      required: false,
      default: () => ({
        start: void 0,
        end: void 0
      })
    },
    modelValue: {
      type: [Object, null],
      required: false
    },
    placeholder: {
      type: null,
      required: false,
      default: void 0
    },
    allowNonContiguousRanges: {
      type: Boolean,
      required: false,
      default: false
    },
    pagedNavigation: {
      type: Boolean,
      required: false,
      default: false
    },
    preventDeselect: {
      type: Boolean,
      required: false,
      default: false
    },
    maximumDays: {
      type: Number,
      required: false,
      default: void 0
    },
    weekStartsOn: {
      type: Number,
      required: false
    },
    weekdayFormat: {
      type: String,
      required: false,
      default: "narrow"
    },
    calendarLabel: {
      type: String,
      required: false
    },
    fixedWeeks: {
      type: Boolean,
      required: false,
      default: false
    },
    maxValue: {
      type: null,
      required: false
    },
    minValue: {
      type: null,
      required: false
    },
    locale: {
      type: String,
      required: false
    },
    numberOfMonths: {
      type: Number,
      required: false,
      default: 1
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    },
    initialFocus: {
      type: Boolean,
      required: false,
      default: false
    },
    isDateDisabled: {
      type: Function,
      required: false,
      default: void 0
    },
    isDateUnavailable: {
      type: Function,
      required: false,
      default: void 0
    },
    isDateHighlightable: {
      type: Function,
      required: false,
      default: void 0
    },
    dir: {
      type: String,
      required: false
    },
    nextPage: {
      type: Function,
      required: false
    },
    prevPage: {
      type: Function,
      required: false
    },
    disableDaysOutsideCurrentView: {
      type: Boolean,
      required: false,
      default: false
    },
    fixedDate: {
      type: String,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  emits: [
    "update:modelValue",
    "update:validModelValue",
    "update:placeholder",
    "update:startValue"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { disabled, readonly, initialFocus, pagedNavigation, weekdayFormat, fixedWeeks, numberOfMonths, preventDeselect, isDateUnavailable: propsIsDateUnavailable, isDateHighlightable: propsIsDateHighlightable, isDateDisabled: propsIsDateDisabled, calendarLabel, maxValue, minValue, dir: propDir, locale: propLocale, nextPage: propsNextPage, prevPage: propsPrevPage, allowNonContiguousRanges, disableDaysOutsideCurrentView, fixedDate, maximumDays } = toRefs(props);
    const { primitiveElement, currentElement: parentElement } = usePrimitiveElement();
    const dir = useDirection(propDir);
    const locale = useLocale(propLocale);
    const weekStartsOn = computed(() => props.weekStartsOn ?? getWeekStartsOn(locale.value));
    const lastPressedDateValue = ref();
    const focusedValue = ref();
    const isEditing = ref(false);
    const modelValue = useVModel(props, "modelValue", emits, {
      defaultValue: props.defaultValue ?? {
        start: void 0,
        end: void 0
      },
      passive: props.modelValue === void 0
    });
    const normalizeRange = (value) => value ?? {
      start: void 0,
      end: void 0
    };
    const normalizedModelValue = computed(() => normalizeRange(modelValue.value));
    const validModelValue = ref(normalizeRange(modelValue.value));
    watch(validModelValue, (value) => {
      emits("update:validModelValue", value);
    });
    const defaultDate = getDefaultDate({
      defaultPlaceholder: props.placeholder,
      defaultValue: normalizeRange(modelValue.value).start,
      locale: props.locale
    });
    const startValue = ref(normalizeRange(modelValue.value).start);
    const endValue = ref(normalizeRange(modelValue.value).end);
    const placeholder = useVModel(props, "placeholder", emits, {
      defaultValue: props.defaultPlaceholder ?? defaultDate.copy(),
      passive: props.placeholder === void 0
    });
    function onPlaceholderChange(value) {
      placeholder.value = value.copy();
    }
    const { fullCalendarLabel, headingValue, isDateDisabled, isDateUnavailable, isNextButtonDisabled, isPrevButtonDisabled, grid, weekdays, isOutsideVisibleView, nextPage, prevPage, formatter, isPlaceholderFocusable, firstFocusableDate } = useCalendar({
      locale,
      placeholder,
      weekStartsOn,
      fixedWeeks,
      numberOfMonths,
      minValue,
      maxValue,
      disabled,
      weekdayFormat,
      pagedNavigation,
      isDateDisabled: propsIsDateDisabled.value,
      isDateUnavailable: propsIsDateUnavailable.value,
      calendarLabel,
      nextPage: propsNextPage,
      prevPage: propsPrevPage
    });
    const { isInvalid, isSelected, isDateHighlightable, highlightedRange, isSelectionStart, isSelectionEnd, isHighlightedStart, isHighlightedEnd, isDateDisabled: rangeIsDateDisabled, hasSelectedDate, isSelectedDisabled, selectedFocusableDate } = useRangeCalendarState({
      start: startValue,
      end: endValue,
      isDateDisabled,
      isDateUnavailable,
      isDateHighlightable: propsIsDateHighlightable.value,
      focusedValue,
      allowNonContiguousRanges,
      fixedDate,
      maximumDays
    });
    watch(modelValue, (_modelValue) => {
      const next = normalizeRange(_modelValue);
      const isStartSynced = !next.start && !startValue.value || !!next.start && !!startValue.value && isEqualDay(next.start, startValue.value);
      if (!isStartSynced) startValue.value = next.start?.copy?.();
      const isEndSynced = !next.end && !endValue.value || !!next.end && !!endValue.value && isEqualDay(next.end, endValue.value);
      if (!isEndSynced) endValue.value = next.end?.copy?.();
    });
    watch(startValue, (_startValue) => {
      if (_startValue && !isEqualDay(_startValue, placeholder.value)) onPlaceholderChange(_startValue);
      emits("update:startValue", _startValue);
    });
    watch([startValue, endValue], ([_startValue, _endValue]) => {
      const value = modelValue.value;
      if (value && value.start && value.end && _startValue && _endValue && isEqualDay(value.start, _startValue) && isEqualDay(value.end, _endValue)) return;
      isEditing.value = true;
      if (_endValue && _startValue) {
        const nextValue = isBefore(_endValue, _startValue) ? {
          start: _endValue.copy(),
          end: _startValue.copy()
        } : {
          start: _startValue.copy(),
          end: _endValue.copy()
        };
        modelValue.value = {
          start: nextValue.start,
          end: nextValue.end
        };
        isEditing.value = false;
        validModelValue.value = {
          start: nextValue.start.copy(),
          end: nextValue.end.copy()
        };
      } else modelValue.value = _startValue ? {
        start: _startValue.copy(),
        end: void 0
      } : {
        start: _endValue?.copy(),
        end: void 0
      };
    });
    const kbd = useKbd();
    useEventListener(parentElement, "keydown", (ev) => {
      if (ev.key === kbd.ESCAPE && isEditing.value) {
        startValue.value = validModelValue.value.start?.copy();
        endValue.value = validModelValue.value.end?.copy();
      }
    });
    provideRangeCalendarRootContext({
      isDateUnavailable,
      isDateHighlightable,
      startValue,
      endValue,
      formatter,
      modelValue: normalizedModelValue,
      placeholder,
      disabled,
      initialFocus,
      pagedNavigation,
      grid,
      weekDays: weekdays,
      weekStartsOn,
      weekdayFormat,
      fixedWeeks,
      numberOfMonths,
      readonly,
      preventDeselect,
      fullCalendarLabel,
      headingValue,
      isInvalid,
      isDateDisabled: rangeIsDateDisabled,
      allowNonContiguousRanges,
      highlightedRange,
      focusedValue,
      lastPressedDateValue,
      isSelected,
      isSelectionEnd,
      isSelectionStart,
      isNextButtonDisabled,
      isPrevButtonDisabled,
      isOutsideVisibleView,
      nextPage,
      prevPage,
      parentElement,
      onPlaceholderChange,
      locale,
      dir,
      isHighlightedStart,
      isHighlightedEnd,
      disableDaysOutsideCurrentView,
      fixedDate,
      maximumDays,
      minValue,
      maxValue,
      isPlaceholderFocusable,
      firstFocusableDate,
      hasSelectedDate,
      isSelectedDisabled,
      selectedFocusableDate
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref_key: "primitiveElement",
        ref: primitiveElement,
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "aria-label": unref(fullCalendarLabel),
        "data-readonly": unref(readonly) ? "" : void 0,
        "data-disabled": unref(disabled) ? "" : void 0,
        "data-invalid": unref(isInvalid) ? "" : void 0,
        dir: unref(dir)
      }, {
        default: withCtx(() => [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, toDisplayString(unref(fullCalendarLabel)), 1)]), renderSlot(_ctx.$slots, "default", {
          date: unref(placeholder),
          grid: unref(grid),
          weekDays: unref(weekdays),
          weekStartsOn: weekStartsOn.value,
          locale: unref(locale),
          fixedWeeks: unref(fixedWeeks),
          modelValue: normalizedModelValue.value
        })]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-label",
        "data-readonly",
        "data-disabled",
        "data-invalid",
        "dir"
      ]);
    };
  }
});
var RangeCalendarRoot_default = RangeCalendarRoot_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarCell",
  props: {
    date: {
      type: null,
      required: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "td"
    }
  },
  setup(__props) {
    const rootContext = injectRangeCalendarRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: _ctx.as,
        "as-child": _ctx.asChild,
        role: "gridcell",
        "aria-selected": unref(rootContext).isSelected(_ctx.date) ? true : void 0,
        "aria-disabled": unref(rootContext).isDateDisabled(_ctx.date) || unref(rootContext).isDateUnavailable?.(_ctx.date) || unref(rootContext).disableDaysOutsideCurrentView.value,
        "data-disabled": unref(rootContext).isDateDisabled(_ctx.date) || unref(rootContext).disableDaysOutsideCurrentView.value ? "" : void 0
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-selected",
        "aria-disabled",
        "data-disabled"
      ]);
    };
  }
});
var RangeCalendarCell_default = RangeCalendarCell_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarCellTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {
      type: null,
      required: true
    },
    month: {
      type: null,
      required: true
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectRangeCalendarRootContext();
    const kbd = useKbd();
    const { primitiveElement } = usePrimitiveElement();
    const labelText = computed(() => rootContext.formatter.custom(toDate(props.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }));
    const isUnavailable = computed(() => rootContext.isDateUnavailable?.(props.day) ?? false);
    const isSelectedDate = computed(() => rootContext.isSelected(props.day));
    const isSelectionStart = computed(() => rootContext.isSelectionStart(props.day));
    const isSelectionEnd = computed(() => rootContext.isSelectionEnd(props.day));
    const isHighlightStart = computed(() => rootContext.isHighlightedStart(props.day));
    const isHighlightEnd = computed(() => rootContext.isHighlightedEnd(props.day));
    const isHighlighted = computed(() => rootContext.highlightedRange.value ? isBetweenInclusive(props.day, rootContext.highlightedRange.value.start, rootContext.highlightedRange.value.end) : false);
    const allowNonContiguousRanges = computed(() => rootContext.allowNonContiguousRanges.value);
    const isDateToday = computed(() => {
      return isToday(props.day, getLocalTimeZone());
    });
    const isOutsideView = computed(() => {
      return !isSameMonth(props.day, props.month);
    });
    const isOutsideVisibleView = computed(() => rootContext.isOutsideVisibleView(props.day));
    const isDisabled = computed(() => rootContext.isDateDisabled(props.day) || rootContext.disableDaysOutsideCurrentView.value && isOutsideView.value);
    const dayValue = computed(() => props.day.day.toLocaleString(rootContext.locale.value));
    const isFocusedDate = computed(() => {
      if (isOutsideView.value || isDisabled.value) return false;
      if (!rootContext.disabled.value && rootContext.isPlaceholderFocusable.value && isSameDay(props.day, rootContext.placeholder.value)) return true;
      if (!rootContext.disabled.value && rootContext.selectedFocusableDate.value && !rootContext.isPlaceholderFocusable.value) return isSameDay(props.day, rootContext.selectedFocusableDate.value);
      if (!rootContext.disabled.value && (!rootContext.hasSelectedDate.value || rootContext.isSelectedDisabled.value) && !rootContext.isPlaceholderFocusable.value) return rootContext.firstFocusableDate.value && isSameDay(props.day, rootContext.firstFocusableDate.value);
      return false;
    });
    function changeDate(e, date) {
      if (rootContext.readonly.value) return;
      if (rootContext.isDateDisabled(date) || rootContext.isDateUnavailable?.(date)) return;
      if (rootContext.startValue.value && rootContext.highlightedRange.value === null) {
        if (isSameDay(date, rootContext.startValue.value) && !rootContext.preventDeselect.value && !rootContext.endValue.value) {
          rootContext.startValue.value = void 0;
          rootContext.onPlaceholderChange(date);
          rootContext.lastPressedDateValue.value = date.copy();
          return;
        } else if (!rootContext.endValue.value) {
          e.preventDefault();
          if (rootContext.lastPressedDateValue.value && isSameDay(rootContext.lastPressedDateValue.value, date)) rootContext.startValue.value = date.copy();
          rootContext.lastPressedDateValue.value = date.copy();
          return;
        }
      }
      rootContext.lastPressedDateValue.value = date.copy();
      if (rootContext.startValue.value && rootContext.endValue.value && isSameDay(rootContext.startValue.value, rootContext.endValue.value) && isSameDay(rootContext.startValue.value, date) && !rootContext.preventDeselect.value) {
        rootContext.startValue.value = void 0;
        rootContext.endValue.value = void 0;
        rootContext.onPlaceholderChange(date);
        return;
      }
      if (!rootContext.startValue.value) rootContext.startValue.value = date.copy();
      else if (!rootContext.endValue.value) rootContext.endValue.value = date.copy();
      else if (rootContext.endValue.value && rootContext.startValue.value) {
        if (!rootContext.fixedDate.value) {
          rootContext.endValue.value = void 0;
          rootContext.startValue.value = date.copy();
        } else if (rootContext.fixedDate.value === "start") if (date.compare(rootContext.startValue.value) < 0) rootContext.startValue.value = date.copy();
        else rootContext.endValue.value = date.copy();
        else if (rootContext.fixedDate.value === "end") if (date.compare(rootContext.endValue.value) > 0) rootContext.endValue.value = date.copy();
        else rootContext.startValue.value = date.copy();
      }
    }
    function handleClick(e) {
      if (isDisabled.value) return;
      changeDate(e, props.day);
    }
    function handleFocus() {
      if (isDisabled.value || rootContext.isDateUnavailable?.(props.day)) return;
      rootContext.focusedValue.value = props.day.copy();
    }
    function handleArrowKey(e) {
      if (isDisabled.value) return;
      e.preventDefault();
      e.stopPropagation();
      const parentElement = rootContext.parentElement.value;
      const indexIncrementation = 7;
      const sign = rootContext.dir.value === "rtl" ? -1 : 1;
      switch (e.code) {
        case kbd.ARROW_RIGHT:
          shiftFocus(props.day, sign);
          break;
        case kbd.ARROW_LEFT:
          shiftFocus(props.day, -sign);
          break;
        case kbd.ARROW_UP:
          shiftFocus(props.day, -indexIncrementation);
          break;
        case kbd.ARROW_DOWN:
          shiftFocus(props.day, indexIncrementation);
          break;
        case kbd.ENTER:
        case kbd.SPACE_CODE:
          changeDate(e, props.day);
      }
      function shiftFocus(day, add) {
        const candidateDayValue = day.add({ days: add });
        if (rootContext.minValue.value && candidateDayValue.compare(rootContext.minValue.value) < 0 || rootContext.maxValue.value && candidateDayValue.compare(rootContext.maxValue.value) > 0) return;
        const candidateDay = parentElement.querySelector(`[data-value='${candidateDayValue.toString()}']:not([data-outside-view])`);
        if (!candidateDay) {
          if (add > 0) {
            if (rootContext.isNextButtonDisabled()) return;
            rootContext.nextPage();
          } else {
            if (rootContext.isPrevButtonDisabled()) return;
            rootContext.prevPage();
          }
          nextTick(() => {
            shiftFocus(day, add);
          });
          return;
        }
        if (candidateDay && candidateDay.hasAttribute("data-disabled")) return shiftFocus(candidateDayValue, add);
        rootContext.onPlaceholderChange(candidateDayValue);
        candidateDay?.focus();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        ref_key: "primitiveElement",
        ref: primitiveElement,
        as: _ctx.as,
        "as-child": _ctx.asChild,
        role: "button",
        "aria-label": labelText.value,
        "data-reka-calendar-cell-trigger": "",
        "aria-pressed": isSelectedDate.value && (allowNonContiguousRanges.value || !isUnavailable.value) ? true : void 0,
        "aria-disabled": isDisabled.value || isUnavailable.value ? true : void 0,
        "data-highlighted": isHighlighted.value && (allowNonContiguousRanges.value || !isUnavailable.value) ? "" : void 0,
        "data-selection-start": isSelectionStart.value ? true : void 0,
        "data-selection-end": isSelectionEnd.value ? true : void 0,
        "data-highlighted-start": isHighlightStart.value ? true : void 0,
        "data-highlighted-end": isHighlightEnd.value ? true : void 0,
        "data-selected": isSelectedDate.value && (allowNonContiguousRanges.value || !isUnavailable.value) ? true : void 0,
        "data-outside-visible-view": isOutsideVisibleView.value ? "" : void 0,
        "data-value": _ctx.day.toString(),
        "data-disabled": isDisabled.value ? "" : void 0,
        "data-unavailable": isUnavailable.value ? "" : void 0,
        "data-today": isDateToday.value ? "" : void 0,
        "data-outside-view": isOutsideView.value ? "" : void 0,
        "data-focused": isFocusedDate.value ? "" : void 0,
        tabindex: isFocusedDate.value ? 0 : isOutsideView.value || isDisabled.value ? void 0 : -1,
        onClick: handleClick,
        onFocusin: handleFocus,
        onMouseenter: handleFocus,
        onKeydown: withKeys(handleArrowKey, [
          "up",
          "down",
          "left",
          "right",
          "enter",
          "space"
        ])
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", {
          dayValue: dayValue.value,
          disabled: isDisabled.value,
          today: isDateToday.value,
          selected: isSelectedDate.value,
          outsideView: isOutsideView.value,
          outsideVisibleView: isOutsideVisibleView.value,
          unavailable: isUnavailable.value,
          highlighted: isHighlighted.value && (allowNonContiguousRanges.value || !isUnavailable.value),
          highlightedStart: isHighlightStart.value,
          highlightedEnd: isHighlightEnd.value,
          selectionStart: isSelectionStart.value,
          selectionEnd: isSelectionEnd.value
        }, () => [createTextVNode(toDisplayString(dayValue.value), 1)])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "aria-label",
        "aria-pressed",
        "aria-disabled",
        "data-highlighted",
        "data-selection-start",
        "data-selection-end",
        "data-highlighted-start",
        "data-highlighted-end",
        "data-selected",
        "data-outside-visible-view",
        "data-value",
        "data-disabled",
        "data-unavailable",
        "data-today",
        "data-outside-view",
        "data-focused",
        "tabindex"
      ]);
    };
  }
});
var RangeCalendarCellTrigger_default = RangeCalendarCellTrigger_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarGrid_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGrid",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "table"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectRangeCalendarRootContext();
    const disabled = computed(() => rootContext.disabled.value ? true : void 0);
    const readonly = computed(() => rootContext.readonly.value ? true : void 0);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        tabindex: "-1",
        role: "application",
        "aria-readonly": readonly.value,
        "aria-disabled": disabled.value,
        "data-readonly": readonly.value && "",
        "data-disabled": disabled.value && "",
        onMouseleave: _cache[0] || (_cache[0] = ($event) => unref(rootContext).focusedValue.value = void 0)
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "aria-readonly",
        "aria-disabled",
        "data-readonly",
        "data-disabled"
      ]);
    };
  }
});
var RangeCalendarGrid_default = RangeCalendarGrid_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarGridBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "tbody"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var RangeCalendarGridBody_default = RangeCalendarGridBody_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarGridHead_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "thead"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { "aria-hidden": "true" }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var RangeCalendarGridHead_default = RangeCalendarGridHead_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarGridRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "tr"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var RangeCalendarGridRow_default = RangeCalendarGridRow_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarHeadCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "th"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var RangeCalendarHeadCell_default = RangeCalendarHeadCell_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarHeader",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var RangeCalendarHeader_default = RangeCalendarHeader_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarHeading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarHeading",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "div"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectRangeCalendarRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, { "data-disabled": unref(rootContext).disabled.value ? "" : void 0 }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { headingValue: unref(rootContext).headingValue.value }, () => [createTextVNode(toDisplayString(unref(rootContext).headingValue.value), 1)])]),
        _: 3
      }, 16, ["data-disabled"]);
    };
  }
});
var RangeCalendarHeading_default = RangeCalendarHeading_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarNext_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarNext",
  props: {
    nextPage: {
      type: Function,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const disabled = computed(() => rootContext.disabled.value || rootContext.isNextButtonDisabled(props.nextPage));
    const rootContext = injectRangeCalendarRootContext();
    function handleClick() {
      if (disabled.value) return;
      rootContext.nextPage(props.nextPage);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: props.as,
        "as-child": props.asChild,
        "aria-label": "Next page",
        type: props.as === "button" ? "button" : void 0,
        "aria-disabled": disabled.value || void 0,
        "data-disabled": disabled.value || void 0,
        disabled: disabled.value,
        onClick: handleClick
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { disabled: disabled.value }, () => [_cache[0] || (_cache[0] = createTextVNode(" Next page "))])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "type",
        "aria-disabled",
        "data-disabled",
        "disabled"
      ]);
    };
  }
});
var RangeCalendarNext_default = RangeCalendarNext_vue_vue_type_script_setup_true_lang_default;
var RangeCalendarPrev_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarPrev",
  props: {
    prevPage: {
      type: Function,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const disabled = computed(() => rootContext.disabled.value || rootContext.isPrevButtonDisabled(props.prevPage));
    const rootContext = injectRangeCalendarRootContext();
    function handleClick() {
      if (disabled.value) return;
      rootContext.prevPage(props.prevPage);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), {
        as: props.as,
        "as-child": props.asChild,
        "aria-label": "Previous page",
        type: props.as === "button" ? "button" : void 0,
        "aria-disabled": disabled.value || void 0,
        "data-disabled": disabled.value || void 0,
        disabled: disabled.value,
        onClick: handleClick
      }, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { disabled: disabled.value }, () => [_cache[0] || (_cache[0] = createTextVNode(" Prev page "))])]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "type",
        "aria-disabled",
        "data-disabled",
        "disabled"
      ]);
    };
  }
});
var RangeCalendarPrev_default = RangeCalendarPrev_vue_vue_type_script_setup_true_lang_default;
var HoverCardArrow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardArrow",
  props: {
    width: {
      type: Number,
      required: false,
      default: 10
    },
    height: {
      type: Number,
      required: false,
      default: 5
    },
    rounded: {
      type: Boolean,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "svg"
    }
  },
  setup(__props) {
    const props = __props;
    useForwardExpose();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperArrow_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var HoverCardArrow_default = HoverCardArrow_vue_vue_type_script_setup_true_lang_default;
const [injectHoverCardRootContext, provideHoverCardRootContext] = createContext("HoverCardRoot");
var HoverCardRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    openDelay: {
      type: Number,
      required: false,
      default: 700
    },
    closeDelay: {
      type: Number,
      required: false,
      default: 300
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { openDelay, closeDelay } = toRefs(props);
    useForwardExpose();
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const openTimerRef = ref(0);
    const closeTimerRef = ref(0);
    const hasSelectionRef = ref(false);
    const isPointerDownOnContentRef = ref(false);
    const isPointerInTransitRef = ref(false);
    const triggerElement = ref();
    function handleOpen() {
      clearTimeout(closeTimerRef.value);
      openTimerRef.value = (void 0).setTimeout(() => open.value = true, openDelay.value);
    }
    function handleClose() {
      clearTimeout(openTimerRef.value);
      if (!hasSelectionRef.value && !isPointerDownOnContentRef.value) closeTimerRef.value = (void 0).setTimeout(() => open.value = false, closeDelay.value);
    }
    function handleDismiss() {
      open.value = false;
    }
    provideHoverCardRootContext({
      open,
      onOpenChange(value) {
        open.value = value;
      },
      onOpen: handleOpen,
      onClose: handleClose,
      onDismiss: handleDismiss,
      hasSelectionRef,
      isPointerDownOnContentRef,
      isPointerInTransitRef,
      triggerElement
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperRoot_default), null, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default", { open: unref(open) })]),
        _: 3
      });
    };
  }
});
var HoverCardRoot_default = HoverCardRoot_vue_vue_type_script_setup_true_lang_default;
function excludeTouch(eventHandler) {
  return (event) => event.pointerType === "touch" ? void 0 : eventHandler();
}
var HoverCardContentImpl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardContentImpl",
  props: {
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardProps(props);
    const { forwardRef, currentElement: contentElement } = useForwardExpose();
    const rootContext = injectHoverCardRootContext();
    const { isPointerInTransit, onPointerExit } = useGraceArea(rootContext.triggerElement, contentElement);
    syncRef(rootContext.isPointerInTransitRef, isPointerInTransit, { direction: "rtl" });
    onPointerExit(() => {
      rootContext.onClose();
    });
    const containSelection = ref(false);
    let originalBodyUserSelect;
    watchEffect((cleanupFn) => {
      if (containSelection.value) {
        const body = (void 0).body;
        originalBodyUserSelect = body.style.userSelect || body.style.webkitUserSelect;
        body.style.userSelect = "none";
        body.style.webkitUserSelect = "none";
        cleanupFn(() => {
          body.style.userSelect = originalBodyUserSelect;
          body.style.webkitUserSelect = originalBodyUserSelect;
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(DismissableLayer_default), {
        "as-child": "",
        "disable-outside-pointer-events": false,
        onEscapeKeyDown: _cache[1] || (_cache[1] = ($event) => emits("escapeKeyDown", $event)),
        onPointerDownOutside: _cache[2] || (_cache[2] = ($event) => emits("pointerDownOutside", $event)),
        onFocusOutside: _cache[3] || (_cache[3] = withModifiers(($event) => emits("focusOutside", $event), ["prevent"])),
        onDismiss: unref(rootContext).onDismiss
      }, {
        default: withCtx(() => [createVNode(unref(PopperContent_default), mergeProps({
          ...unref(forwarded),
          ..._ctx.$attrs
        }, {
          ref: unref(forwardRef),
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          style: {
            "userSelect": containSelection.value ? "text" : void 0,
            "WebkitUserSelect": containSelection.value ? "text" : void 0,
            "--reka-hover-card-content-transform-origin": "var(--reka-popper-transform-origin)",
            "--reka-hover-card-content-available-width": "var(--reka-popper-available-width)",
            "--reka-hover-card-content-available-height": "var(--reka-popper-available-height)",
            "--reka-hover-card-trigger-width": "var(--reka-popper-anchor-width)",
            "--reka-hover-card-trigger-height": "var(--reka-popper-anchor-height)"
          },
          onPointerdown: _cache[0] || (_cache[0] = (event) => {
            if (event.currentTarget.contains(event.target)) containSelection.value = true;
            unref(rootContext).hasSelectionRef.value = false;
            unref(rootContext).isPointerDownOnContentRef.value = true;
          })
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16, ["data-state", "style"])]),
        _: 3
      }, 8, ["onDismiss"]);
    };
  }
});
var HoverCardContentImpl_default = HoverCardContentImpl_vue_vue_type_script_setup_true_lang_default;
var HoverCardContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardContent",
  props: {
    forceMount: {
      type: Boolean,
      required: false
    },
    side: {
      type: null,
      required: false
    },
    sideOffset: {
      type: Number,
      required: false
    },
    sideFlip: {
      type: Boolean,
      required: false
    },
    align: {
      type: null,
      required: false
    },
    alignOffset: {
      type: Number,
      required: false
    },
    alignFlip: {
      type: Boolean,
      required: false
    },
    avoidCollisions: {
      type: Boolean,
      required: false
    },
    collisionBoundary: {
      type: null,
      required: false
    },
    collisionPadding: {
      type: [Number, Object],
      required: false
    },
    arrowPadding: {
      type: Number,
      required: false
    },
    hideShiftedArrow: {
      type: Boolean,
      required: false
    },
    sticky: {
      type: String,
      required: false
    },
    hideWhenDetached: {
      type: Boolean,
      required: false
    },
    positionStrategy: {
      type: String,
      required: false
    },
    updatePositionStrategy: {
      type: String,
      required: false
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: false
    },
    prioritizePosition: {
      type: Boolean,
      required: false
    },
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    const { forwardRef } = useForwardExpose();
    const rootContext = injectHoverCardRootContext();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Presence_default), { present: _ctx.forceMount || unref(rootContext).open.value }, {
        default: withCtx(() => [createVNode(HoverCardContentImpl_default, mergeProps(unref(forwarded), {
          ref: unref(forwardRef),
          onPointerenter: _cache[0] || (_cache[0] = ($event) => unref(excludeTouch)(unref(rootContext).onOpen)($event))
        }), {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 16)]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var HoverCardContent_default = HoverCardContent_vue_vue_type_script_setup_true_lang_default;
var HoverCardPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardPortal",
  props: {
    to: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    defer: {
      type: Boolean,
      required: false
    },
    forceMount: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var HoverCardPortal_default = HoverCardPortal_vue_vue_type_script_setup_true_lang_default;
var HoverCardTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "HoverCardTrigger",
  props: {
    reference: {
      type: null,
      required: false
    },
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "a"
    }
  },
  setup(__props) {
    const { forwardRef, currentElement } = useForwardExpose();
    const rootContext = injectHoverCardRootContext();
    rootContext.triggerElement = currentElement;
    function handleLeave() {
      setTimeout(() => {
        if (!rootContext.isPointerInTransitRef.value && !rootContext.open.value) rootContext.onClose();
      }, 0);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(PopperAnchor_default), {
        "as-child": "",
        reference: _ctx.reference
      }, {
        default: withCtx(() => [createVNode(unref(Primitive), {
          ref: unref(forwardRef),
          "as-child": _ctx.asChild,
          as: _ctx.as,
          "data-state": unref(rootContext).open.value ? "open" : "closed",
          "data-grace-area-trigger": "",
          onPointerenter: _cache[0] || (_cache[0] = ($event) => unref(excludeTouch)(unref(rootContext).onOpen)($event)),
          onPointerleave: _cache[1] || (_cache[1] = ($event) => unref(excludeTouch)(handleLeave)($event)),
          onFocus: _cache[2] || (_cache[2] = ($event) => unref(rootContext).onOpen()),
          onBlur: _cache[3] || (_cache[3] = ($event) => unref(rootContext).onClose())
        }, {
          default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
          _: 3
        }, 8, [
          "as-child",
          "as",
          "data-state"
        ])]),
        _: 3
      }, 8, ["reference"]);
    };
  }
});
var HoverCardTrigger_default = HoverCardTrigger_vue_vue_type_script_setup_true_lang_default;
const Calendar = {
  Root: CalendarRoot_default,
  Header: CalendarHeader_default,
  Heading: CalendarHeading_default,
  Grid: CalendarGrid_default,
  Cell: CalendarCell_default,
  HeadCell: CalendarHeadCell_default,
  Next: CalendarNext_default,
  Prev: CalendarPrev_default,
  GridHead: CalendarGridHead_default,
  GridBody: CalendarGridBody_default,
  GridRow: CalendarGridRow_default,
  CellTrigger: CalendarCellTrigger_default
};
const HoverCard = {
  Root: HoverCardRoot_default,
  Trigger: HoverCardTrigger_default,
  Portal: HoverCardPortal_default,
  Content: HoverCardContent_default,
  Arrow: HoverCardArrow_default
};
const Popover = {
  Root: PopoverRoot_default,
  Trigger: PopoverTrigger_default,
  Portal: PopoverPortal_default,
  Content: PopoverContent_default,
  Arrow: PopoverArrow_default,
  Close: PopoverClose_default,
  Anchor: PopoverAnchor_default
};
const RangeCalendar = {
  Root: RangeCalendarRoot_default,
  Header: RangeCalendarHeader_default,
  Heading: RangeCalendarHeading_default,
  Grid: RangeCalendarGrid_default,
  Cell: RangeCalendarCell_default,
  HeadCell: RangeCalendarHeadCell_default,
  Next: RangeCalendarNext_default,
  Prev: RangeCalendarPrev_default,
  GridHead: RangeCalendarGridHead_default,
  GridBody: RangeCalendarGridBody_default,
  GridRow: RangeCalendarGridRow_default,
  CellTrigger: RangeCalendarCellTrigger_default
};

export { Calendar as C, DismissableLayer_default as D, FocusScope_default as F, HoverCard as H, Popover as P, RangeCalendar as R, useDirection as a, PopperRoot_default as b, PopperAnchor_default as c, PopperArrow_default as d, useHideOthers as e, useBodyScrollLock as f, getWeekNumber as g, PopperContent_default as h, useGraceArea as i, useId as u };
//# sourceMappingURL=index-fuea8ytG.mjs.map
