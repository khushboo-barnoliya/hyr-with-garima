import { r as reactExports, j as jsxRuntimeExports, c as cn, P as PageLoading, G as GoalType } from "./index-BLaxd34b.js";
import { c as createLucideIcon, r as useComposedRefs, d as useSessions, q as useFitnessPlans, s as useMealPlans, t as useAllMembers, v as useAllBookings, L as Layout, m as motion, S as Shield, B as Badge, D as Dumbbell, w as useAssignPlanToMember, b as Button, x as useAllPlanAssignments, y as useCreateFitnessPlan, z as useDeleteFitnessPlan, A as useCreateSession, C as useDeleteSession, a as useTestimonials, E as useCreateTestimonial, F as useDeleteTestimonial, G as useCreateMealPlan, H as useDeleteMealPlan } from "./useBackend-CKG5PE8y.js";
import { C as Card } from "./card-emnBK9cC.js";
import { I as Input } from "./input-B1VeGqv0.js";
import { u as useDirection, d as Primitive, e as Presence, f as createContextScope, g as composeEventHandlers, h as useCallbackRef, i as useLayoutEffect2, T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent, L as Label, P as Plus } from "./tabs-DZ0QK3m3.js";
import { u as ue } from "./index-BLvi-Fth.js";
import { S as StatsCard, T as Trash2 } from "./StatsCard-CjPaeaT4.js";
import { U as Users } from "./users-qqJWaj6-.js";
import { C as Calendar } from "./calendar-DmMOsX3A.js";
import { B as BookOpen, C as ChartNoAxesColumn } from "./chart-no-axes-column-CGuhT0Op.js";
import { S as Star } from "./star-Cb0Aklli.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8", key: "n7qcjb" }],
  [
    "path",
    { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7", key: "d0u48b" }
  ],
  ["path", { d: "m2.1 21.8 6.4-6.3", key: "yn04lh" }],
  ["path", { d: "m19 5-7 7", key: "194lzd" }]
];
const UtensilsCrossed = createLucideIcon("utensils-crossed", __iconNode);
function clamp(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}
function useStateMachine(initialState, machine) {
  return reactExports.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext] = createContextScope(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeScrollArea,
      type = "hover",
      dir,
      scrollHideDelay = 600,
      ...scrollAreaProps
    } = props;
    const [scrollArea, setScrollArea] = reactExports.useState(null);
    const [viewport, setViewport] = reactExports.useState(null);
    const [content, setContent] = reactExports.useState(null);
    const [scrollbarX, setScrollbarX] = reactExports.useState(null);
    const [scrollbarY, setScrollbarY] = reactExports.useState(null);
    const [cornerWidth, setCornerWidth] = reactExports.useState(0);
    const [cornerHeight, setCornerHeight] = reactExports.useState(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = reactExports.useState(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = reactExports.useState(false);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollArea(node));
    const direction = useDirection(dir);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScrollAreaProvider,
      {
        scope: __scopeScrollArea,
        type,
        dir: direction,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            dir: direction,
            ...scrollAreaProps,
            ref: composedRefs,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
              ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
              ...props.style
            }
          }
        )
      }
    );
  }
);
ScrollArea$1.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
    const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
          },
          nonce
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...viewportProps,
          ref: composedRefs,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
            ...props.style
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: context.onContentChange, style: { minWidth: "100%", display: "table" }, children })
        }
      )
    ] });
  }
);
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    reactExports.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef }) : null;
  }
);
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = reactExports.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const scrollArea = context.scrollArea;
    let hideTimer = 0;
    if (scrollArea) {
      const handlePointerEnter = () => {
        window.clearTimeout(hideTimer);
        setVisible(true);
      };
      const handlePointerLeave = () => {
        hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
      };
      scrollArea.addEventListener("pointerenter", handlePointerEnter);
      scrollArea.addEventListener("pointerleave", handlePointerLeave);
      return () => {
        window.clearTimeout(hideTimer);
        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, [context.scrollArea, context.scrollHideDelay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || visible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarAuto,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
});
var ScrollAreaScrollbarScroll = reactExports.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const isHorizontal = props.orientation === "horizontal";
  const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
  const [state, send] = useStateMachine("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  reactExports.useEffect(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
      return () => window.clearTimeout(hideTimer);
    }
  }, [state, context.scrollHideDelay, send]);
  reactExports.useEffect(() => {
    const viewport = context.viewport;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          send("SCROLL");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll);
      return () => viewport.removeEventListener("scroll", handleScroll);
    }
  }, [context.viewport, isHorizontal, send, debounceScrollEnd]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || state !== "hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarVisible,
    {
      "data-state": state === "hidden" ? "hidden" : "visible",
      ...scrollbarProps,
      ref: forwardedRef,
      onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
      onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
    }
  ) });
});
var ScrollAreaScrollbarAuto = reactExports.forwardRef((props, forwardedRef) => {
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const { forceMount, ...scrollbarProps } = props;
  const [visible, setVisible] = reactExports.useState(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = useDebounceCallback(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver(context.viewport, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || visible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarVisible,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
});
var ScrollAreaScrollbarVisible = reactExports.forwardRef((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const thumbRef = reactExports.useRef(null);
  const pointerOffsetRef = reactExports.useRef(0);
  const [sizes, setSizes] = reactExports.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => thumbRef.current = thumb,
    onThumbPointerUp: () => pointerOffsetRef.current = 0,
    onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
  };
  function getScrollPosition(pointerPos, dir) {
    return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
  }
  if (orientation === "horizontal") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScrollAreaScrollbarX,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
            thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
          }
        }
      }
    );
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScrollAreaScrollbarY,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes);
            thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
      }
    );
  }
  return null;
});
var ScrollAreaScrollbarX = reactExports.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = reactExports.useState();
  const ref = reactExports.useRef(null);
  const composeRefs = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
  reactExports.useEffect(() => {
    if (ref.current) setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "horizontal",
      ...scrollbarProps,
      ref: composeRefs,
      sizes,
      style: {
        bottom: 0,
        left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollLeft + event.deltaX;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollWidth,
            viewport: context.viewport.offsetWidth,
            scrollbar: {
              size: ref.current.clientWidth,
              paddingStart: toInt(computedStyle.paddingLeft),
              paddingEnd: toInt(computedStyle.paddingRight)
            }
          });
        }
      }
    }
  );
});
var ScrollAreaScrollbarY = reactExports.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = reactExports.useState();
  const ref = reactExports.useRef(null);
  const composeRefs = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
  reactExports.useEffect(() => {
    if (ref.current) setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "vertical",
      ...scrollbarProps,
      ref: composeRefs,
      sizes,
      style: {
        top: 0,
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollTop + event.deltaY;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollHeight,
            viewport: context.viewport.offsetHeight,
            scrollbar: {
              size: ref.current.clientHeight,
              paddingStart: toInt(computedStyle.paddingTop),
              paddingEnd: toInt(computedStyle.paddingBottom)
            }
          });
        }
      }
    }
  );
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = reactExports.forwardRef((props, forwardedRef) => {
  const {
    __scopeScrollArea,
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
  const [scrollbar, setScrollbar] = reactExports.useState(null);
  const composeRefs = useComposedRefs(forwardedRef, (node) => setScrollbar(node));
  const rectRef = reactExports.useRef(null);
  const prevWebkitUserSelectRef = reactExports.useRef("");
  const viewport = context.viewport;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
  const handleResize = useDebounceCallback(onResize, 10);
  function handleDragScroll(event) {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  }
  reactExports.useEffect(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar == null ? void 0 : scrollbar.contains(element);
      if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  reactExports.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver(scrollbar, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollbarProvider,
    {
      scope: __scopeScrollArea,
      scrollbar,
      hasThumb,
      onThumbChange: useCallbackRef(onThumbChange),
      onThumbPointerUp: useCallbackRef(onThumbPointerUp),
      onThumbPositionChange: handleThumbPositionChange,
      onThumbPointerDown: useCallbackRef(onThumbPointerDown),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          ...scrollbarProps,
          ref: composeRefs,
          style: { position: "absolute", ...scrollbarProps.style },
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              if (context.viewport) context.viewport.style.scrollBehavior = "auto";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            if (context.viewport) context.viewport.style.scrollBehavior = "";
            rectRef.current = null;
          })
        }
      )
    }
  );
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || scrollbarContext.hasThumb, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaThumbImpl, { ref: forwardedRef, ...thumbProps }) });
  }
);
var ScrollAreaThumbImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeScrollArea, style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = useComposedRefs(
      forwardedRef,
      (node) => scrollbarContext.onThumbChange(node)
    );
    const removeUnlinkedScrollListenerRef = reactExports.useRef(void 0);
    const debounceScrollEnd = useDebounceCallback(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = void 0;
      }
    }, 100);
    reactExports.useEffect(() => {
      const viewport = scrollAreaContext.viewport;
      if (viewport) {
        const handleScroll = () => {
          debounceScrollEnd();
          if (!removeUnlinkedScrollListenerRef.current) {
            const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
            removeUnlinkedScrollListenerRef.current = listener;
            onThumbPositionChange();
          }
        };
        onThumbPositionChange();
        viewport.addEventListener("scroll", handleScroll);
        return () => viewport.removeEventListener("scroll", handleScroll);
      }
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...thumbProps,
        ref: composedRef,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...style
        },
        onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
          const thumb = event.target;
          const thumbRect = thumb.getBoundingClientRect();
          const x = event.clientX - thumbRect.left;
          const y = event.clientY - thumbRect.top;
          scrollbarContext.onThumbPointerDown({ x, y });
        }),
        onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
      }
    );
  }
);
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaCornerImpl, { ...props, ref: forwardedRef }) : null;
  }
);
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeScrollArea, ...cornerProps } = props;
  const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
  const [width, setWidth] = reactExports.useState(0);
  const [height, setHeight] = reactExports.useState(0);
  const hasSize = Boolean(width && height);
  useResizeObserver(context.scrollbarX, () => {
    var _a;
    const height2 = ((_a = context.scrollbarX) == null ? void 0 : _a.offsetHeight) || 0;
    context.onCornerHeightChange(height2);
    setHeight(height2);
  });
  useResizeObserver(context.scrollbarY, () => {
    var _a;
    const width2 = ((_a = context.scrollbarY) == null ? void 0 : _a.offsetWidth) || 0;
    context.onCornerWidthChange(width2);
    setWidth(width2);
  });
  return hasSize ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      ...cornerProps,
      ref: forwardedRef,
      style: {
        width,
        height,
        position: "absolute",
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...props.style
      }
    }
  ) : null;
});
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset;
  const minPointerPos = sizes.scrollbar.paddingStart + offset;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node, handler = () => {
}) => {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll) handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = reactExports.useRef(0);
  reactExports.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return reactExports.useCallback(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}
function useResizeObserver(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  useLayoutEffect2(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}
var Root = ScrollArea$1;
var Viewport = ScrollAreaViewport;
var Corner = ScrollAreaCorner;
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollBar, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
function MembersAdmin() {
  const { data: members, isLoading } = useAllMembers();
  const { data: fitnessPlans } = useFitnessPlans();
  const { data: mealPlans } = useMealPlans();
  const assignPlan = useAssignPlanToMember();
  const [assignFitnessForm, setAssignFitnessForm] = reactExports.useState({
    memberId: "",
    planId: ""
  });
  const [assignMealForm, setAssignMealForm] = reactExports.useState({
    memberId: "",
    planId: ""
  });
  const handleAssignFitness = async (e) => {
    e.preventDefault();
    if (!assignFitnessForm.memberId || !assignFitnessForm.planId) {
      ue.error("Please fill in both fields.");
      return;
    }
    try {
      await assignPlan.mutateAsync(assignFitnessForm);
      ue.success("Fitness plan assigned!");
      setAssignFitnessForm({ memberId: "", planId: "" });
    } catch {
      ue.error("Failed to assign fitness plan.");
    }
  };
  const handleAssignMeal = async (e) => {
    e.preventDefault();
    if (!assignMealForm.memberId || !assignMealForm.planId) {
      ue.error("Please fill in both fields.");
      return;
    }
    try {
      await assignPlan.mutateAsync(assignMealForm);
      ue.success("Meal plan assigned!");
      setAssignMealForm({ memberId: "", planId: "" });
    } catch {
      ue.error("Failed to assign meal plan.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border p-5 shadow-subtle", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dumbbell, { size: 16, className: "text-primary", "aria-hidden": "true" }),
          "Assign Fitness Plan"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAssignFitness, className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "af-member",
                className: "text-xs font-body text-muted-foreground",
                children: "Member Principal ID"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "af-member",
                value: assignFitnessForm.memberId,
                onChange: (e) => setAssignFitnessForm((f) => ({
                  ...f,
                  memberId: e.target.value
                })),
                placeholder: "Paste member principal...",
                className: "bg-muted border-border text-sm",
                "data-ocid": "admin-input-af-member"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "af-plan",
                className: "text-xs font-body text-muted-foreground",
                children: "Fitness Plan ID"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "af-plan",
                value: assignFitnessForm.planId,
                onChange: (e) => setAssignFitnessForm((f) => ({
                  ...f,
                  planId: e.target.value
                })),
                placeholder: "Plan ID",
                className: "bg-muted border-border text-sm",
                "data-ocid": "admin-input-af-plan"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground space-y-0.5", children: (fitnessPlans ?? []).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono truncate", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: String(p.id) }),
            " —",
            " ",
            p.name
          ] }, String(p.id))) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              size: "sm",
              className: "bg-primary text-primary-foreground",
              disabled: assignPlan.isPending,
              "data-ocid": "btn-assign-fitness-plan",
              children: assignPlan.isPending ? "Assigning..." : "Assign Fitness Plan"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border p-5 shadow-subtle", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-foreground mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            UtensilsCrossed,
            {
              size: 16,
              className: "text-accent",
              "aria-hidden": "true"
            }
          ),
          "Assign Meal Plan"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAssignMeal, className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "am-member",
                className: "text-xs font-body text-muted-foreground",
                children: "Member Principal ID"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "am-member",
                value: assignMealForm.memberId,
                onChange: (e) => setAssignMealForm((f) => ({ ...f, memberId: e.target.value })),
                placeholder: "Paste member principal...",
                className: "bg-muted border-border text-sm",
                "data-ocid": "admin-input-am-member"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "am-plan",
                className: "text-xs font-body text-muted-foreground",
                children: "Meal Plan ID"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "am-plan",
                value: assignMealForm.planId,
                onChange: (e) => setAssignMealForm((f) => ({ ...f, planId: e.target.value })),
                placeholder: "Meal Plan ID",
                className: "bg-muted border-border text-sm",
                "data-ocid": "admin-input-am-plan"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground space-y-0.5", children: (mealPlans ?? []).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono truncate", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: String(m.id) }),
            " — ",
            m.name
          ] }, String(m.id))) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              size: "sm",
              className: "bg-accent text-accent-foreground hover:bg-accent/90",
              disabled: assignPlan.isPending,
              "data-ocid": "btn-assign-meal-plan",
              children: assignPlan.isPending ? "Assigning..." : "Assign Meal Plan"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border shadow-subtle overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-b border-border flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 16, className: "text-primary", "aria-hidden": "true" }),
          "All Members"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/15 text-primary border-primary/30 text-xs", children: [
          (members == null ? void 0 : members.length) ?? 0,
          " total"
        ] })
      ] }),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, {}) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollArea, { className: "max-h-96", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide", children: "Joined" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide", children: "Meal Plan" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: (members ?? []).map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-b border-border/50 hover:bg-muted/20 transition-colors",
              "data-ocid": `admin-member-row-${i}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-body font-medium text-foreground", children: m.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: m.email }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground font-mono text-xs", children: new Date(
                  Number(m.joinedAt) / 1e6
                ).toLocaleDateString() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: m.assignedMealPlanId ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent/15 text-accent border-accent/30 text-xs", children: String(m.assignedMealPlanId) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "—" }) })
              ]
            },
            String(m.id)
          )) })
        ] }),
        !(members == null ? void 0 : members.length) && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-muted-foreground text-sm font-body text-center py-8",
            "data-ocid": "members-admin-empty",
            children: "No members yet."
          }
        )
      ] })
    ] })
  ] });
}
function PlansAdmin() {
  const { data: plans, isLoading } = useFitnessPlans();
  const { data: assignments } = useAllPlanAssignments();
  const createPlan = useCreateFitnessPlan();
  const deletePlan = useDeleteFitnessPlan();
  const [form, setForm] = reactExports.useState({
    name: "",
    description: "",
    durationDays: 84,
    price: 4999
  });
  const handleCreate = async (e) => {
    e.preventDefault();
    if (!form.name) {
      ue.error("Plan name required.");
      return;
    }
    try {
      await createPlan.mutateAsync({
        name: form.name,
        description: form.description,
        durationDays: BigInt(form.durationDays),
        price: form.price
      });
      ue.success("Fitness plan created!");
      setForm({ name: "", description: "", durationDays: 84, price: 4999 });
    } catch {
      ue.error("Failed to create plan.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatsCard,
        {
          label: "Active Plans",
          value: (plans == null ? void 0 : plans.length) ?? 0,
          icon: Dumbbell,
          "data-ocid": "admin-stat-plans"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatsCard,
        {
          label: "Assignments",
          value: (assignments == null ? void 0 : assignments.length) ?? 0,
          icon: Users,
          "data-ocid": "admin-stat-assignments"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border p-5 shadow-subtle", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-foreground mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16, className: "text-primary", "aria-hidden": "true" }),
        " Create Fitness Plan"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleCreate, className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "plan-name",
              className: "text-xs font-body text-muted-foreground",
              children: "Plan Name"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "plan-name",
              type: "text",
              value: form.name,
              onChange: (e) => setForm((f) => ({ ...f, name: e.target.value })),
              className: "bg-muted border-border text-sm",
              "data-ocid": "admin-input-plan-name"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "plan-description",
              className: "text-xs font-body text-muted-foreground",
              children: "Description"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "plan-description",
              type: "text",
              value: form.description,
              onChange: (e) => setForm((f) => ({ ...f, description: e.target.value })),
              className: "bg-muted border-border text-sm",
              "data-ocid": "admin-input-plan-description"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "plan-duration",
              className: "text-xs font-body text-muted-foreground",
              children: "Duration (days)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "plan-duration",
              type: "number",
              value: form.durationDays,
              onChange: (e) => setForm((f) => ({ ...f, durationDays: Number(e.target.value) })),
              className: "bg-muted border-border text-sm",
              "data-ocid": "admin-input-plan-duration"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "plan-price",
              className: "text-xs font-body text-muted-foreground",
              children: "Price (₹)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "plan-price",
              type: "number",
              value: form.price,
              onChange: (e) => setForm((f) => ({ ...f, price: Number(e.target.value) })),
              className: "bg-muted border-border text-sm",
              "data-ocid": "admin-input-plan-price"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            size: "sm",
            className: "bg-primary text-primary-foreground",
            disabled: createPlan.isPending,
            "data-ocid": "btn-create-plan",
            children: createPlan.isPending ? "Creating..." : "Create Plan"
          }
        ) })
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      (plans ?? []).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-lg px-4 py-3 flex items-center justify-between gap-4",
          "data-ocid": `admin-plan-${p.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body font-semibold text-foreground text-sm truncate", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                Number(p.durationDays),
                " days · ₹",
                p.price
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => deletePlan.mutateAsync(p.id).catch(() => ue.error("Failed")),
                className: "p-1 text-muted-foreground hover:text-destructive shrink-0",
                "aria-label": "Delete plan",
                "data-ocid": `btn-delete-plan-${p.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14, "aria-hidden": "true" })
              }
            )
          ]
        },
        String(p.id)
      )),
      !(plans == null ? void 0 : plans.length) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-muted-foreground text-sm font-body text-center py-6",
          "data-ocid": "plans-admin-empty",
          children: "No plans yet."
        }
      )
    ] })
  ] });
}
function SessionsAdmin() {
  const { data: sessions, isLoading } = useSessions();
  const { data: bookings } = useAllBookings();
  const createSession = useCreateSession();
  const deleteSession = useDeleteSession();
  const [form, setForm] = reactExports.useState({
    title: "",
    description: "",
    startTime: BigInt(Date.now() + 864e5) * BigInt(1e6),
    endTime: BigInt(Date.now() + 864e5 + 36e5) * BigInt(1e6),
    capacity: 8
  });
  const handleCreate = async (e) => {
    e.preventDefault();
    if (!form.title) {
      ue.error("Session title required.");
      return;
    }
    try {
      await createSession.mutateAsync({
        title: form.title,
        description: form.description,
        startTime: form.startTime,
        endTime: form.endTime,
        capacity: BigInt(form.capacity)
      });
      ue.success("Session created!");
      setForm((f) => ({ ...f, title: "", description: "" }));
    } catch {
      ue.error("Failed to create session.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatsCard,
        {
          label: "Total Sessions",
          value: (sessions == null ? void 0 : sessions.length) ?? 0,
          icon: Calendar,
          "data-ocid": "admin-stat-sessions"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatsCard,
        {
          label: "Total Bookings",
          value: (bookings == null ? void 0 : bookings.length) ?? 0,
          icon: Users,
          "data-ocid": "admin-stat-bookings"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border p-5 shadow-subtle", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-foreground mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16, className: "text-primary", "aria-hidden": "true" }),
        " Create Training Session"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleCreate, className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "session-title",
              className: "text-xs font-body text-muted-foreground",
              children: "Title"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "session-title",
              value: form.title,
              onChange: (e) => setForm((f) => ({ ...f, title: e.target.value })),
              className: "bg-muted border-border text-sm",
              "data-ocid": "admin-input-session-title"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "session-capacity",
              className: "text-xs font-body text-muted-foreground",
              children: "Capacity"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "session-capacity",
              type: "number",
              value: form.capacity,
              onChange: (e) => setForm((f) => ({
                ...f,
                capacity: Number(e.target.value)
              })),
              className: "bg-muted border-border text-sm",
              "data-ocid": "admin-input-session-capacity"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "session-desc",
              className: "text-xs font-body text-muted-foreground",
              children: "Description"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "session-desc",
              value: form.description,
              onChange: (e) => setForm((f) => ({ ...f, description: e.target.value })),
              className: "bg-muted border-border text-sm",
              "data-ocid": "admin-input-session-desc"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            size: "sm",
            className: "bg-primary text-primary-foreground",
            disabled: createSession.isPending,
            "data-ocid": "btn-create-session",
            children: createSession.isPending ? "Creating..." : "Create Session"
          }
        ) })
      ] })
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      (sessions ?? []).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-lg px-4 py-3 flex items-center justify-between gap-4",
          "data-ocid": `admin-session-${s.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body font-semibold text-foreground text-sm truncate", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                new Date(Number(s.startTime) / 1e6).toLocaleString(),
                " ·",
                " ",
                Number(s.bookedCount),
                "/",
                Number(s.capacity),
                " booked"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => deleteSession.mutateAsync(s.id).catch(() => ue.error("Failed")),
                className: "p-1 text-muted-foreground hover:text-destructive shrink-0",
                "aria-label": "Delete",
                "data-ocid": `btn-delete-session-${s.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14, "aria-hidden": "true" })
              }
            )
          ]
        },
        String(s.id)
      )),
      !(sessions == null ? void 0 : sessions.length) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-muted-foreground text-sm font-body text-center py-6",
          "data-ocid": "sessions-admin-empty",
          children: "No sessions yet."
        }
      )
    ] }),
    ((bookings == null ? void 0 : bookings.length) ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border shadow-subtle overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 16, className: "text-accent", "aria-hidden": "true" }),
        " ",
        "All Bookings"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "max-h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide", children: "Booking ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide", children: "Member" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide", children: "Session" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-2.5 font-body text-xs text-muted-foreground uppercase tracking-wide", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: (bookings ?? []).map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-b border-border/50",
            "data-ocid": `admin-booking-${b.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-xs text-muted-foreground truncate max-w-[120px]", children: String(b.id) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-xs text-muted-foreground truncate max-w-[120px]", children: String(b.memberId) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-mono text-xs text-muted-foreground truncate max-w-[120px]", children: String(b.sessionId) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: b.status === "confirmed" ? "bg-primary/15 text-primary border-primary/30 text-xs" : "bg-destructive/15 text-destructive border-destructive/30 text-xs",
                  children: b.status
                }
              ) })
            ]
          },
          String(b.id)
        )) })
      ] }) })
    ] })
  ] });
}
function GalleryAdmin() {
  const { data: testimonials, isLoading: testLoading } = useTestimonials();
  const createTestimonial = useCreateTestimonial();
  const deleteTestimonial = useDeleteTestimonial();
  const [testForm, setTestForm] = reactExports.useState({
    clientName: "",
    content: "",
    rating: 5
  });
  const handleCreateTestimonial = async (e) => {
    e.preventDefault();
    if (!testForm.clientName || !testForm.content) {
      ue.error("Client name and content required.");
      return;
    }
    try {
      await createTestimonial.mutateAsync({
        clientName: testForm.clientName,
        content: testForm.content,
        rating: BigInt(testForm.rating)
      });
      ue.success("Testimonial added!");
      setTestForm({ clientName: "", content: "", rating: 5 });
    } catch {
      ue.error("Failed to add testimonial.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg border-b border-border pb-2", children: "Testimonials" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border p-5 shadow-subtle", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-body font-semibold text-foreground mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 15, className: "text-primary", "aria-hidden": "true" }),
        " Add Testimonial"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleCreateTestimonial,
          className: "grid sm:grid-cols-2 gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "test-name",
                  className: "text-xs font-body text-muted-foreground",
                  children: "Client Name"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "test-name",
                  value: testForm.clientName,
                  onChange: (e) => setTestForm((f) => ({ ...f, clientName: e.target.value })),
                  className: "bg-muted border-border text-sm",
                  "data-ocid": "admin-input-test-name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "test-rating",
                  className: "text-xs font-body text-muted-foreground",
                  children: "Rating (1–5)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "test-rating",
                  type: "number",
                  min: 1,
                  max: 5,
                  value: testForm.rating,
                  onChange: (e) => setTestForm((f) => ({ ...f, rating: Number(e.target.value) })),
                  className: "bg-muted border-border text-sm",
                  "data-ocid": "admin-input-test-rating"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Label,
                {
                  htmlFor: "test-content",
                  className: "text-xs font-body text-muted-foreground",
                  children: "Content"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "test-content",
                  value: testForm.content,
                  onChange: (e) => setTestForm((f) => ({ ...f, content: e.target.value })),
                  className: "bg-muted border-border text-sm",
                  "data-ocid": "admin-input-test-content"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                size: "sm",
                className: "bg-primary text-primary-foreground",
                disabled: createTestimonial.isPending,
                "data-ocid": "btn-add-testimonial",
                children: createTestimonial.isPending ? "Adding..." : "Add Testimonial"
              }
            ) })
          ]
        }
      )
    ] }),
    testLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      (testimonials ?? []).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-lg px-4 py-3 flex items-start justify-between gap-4",
          "data-ocid": `admin-testimonial-${t.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body font-semibold text-foreground text-sm", children: t.clientName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: Array.from({ length: Number(t.rating) }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    size: 10,
                    className: "fill-accent text-accent",
                    "aria-hidden": "true"
                  },
                  `star-${t.id}-${j}`
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: t.content })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => deleteTestimonial.mutateAsync(t.id).catch(() => ue.error("Failed")),
                className: "p-1 text-muted-foreground hover:text-destructive shrink-0",
                "aria-label": "Delete",
                "data-ocid": `btn-delete-testimonial-${t.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14, "aria-hidden": "true" })
              }
            )
          ]
        },
        String(t.id)
      )),
      !(testimonials == null ? void 0 : testimonials.length) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-muted-foreground text-sm font-body text-center py-6",
          "data-ocid": "testimonials-admin-empty",
          children: "No testimonials yet."
        }
      )
    ] })
  ] }) });
}
function NutritionAdmin() {
  const { data: mealPlans, isLoading: mpLoading } = useMealPlans();
  const createMealPlan = useCreateMealPlan();
  const deleteMealPlan = useDeleteMealPlan();
  const [mpForm, setMpForm] = reactExports.useState({
    name: "",
    description: "",
    goalType: GoalType.weightLoss,
    dailyCalories: 2e3,
    proteinGrams: 150,
    carbsGrams: 220,
    fatGrams: 65
  });
  const handleCreateMP = async (e) => {
    e.preventDefault();
    if (!mpForm.name) {
      ue.error("Plan name required.");
      return;
    }
    try {
      await createMealPlan.mutateAsync({
        name: mpForm.name,
        description: mpForm.description,
        goalType: mpForm.goalType,
        dailyCalories: BigInt(mpForm.dailyCalories),
        proteinGrams: BigInt(mpForm.proteinGrams),
        carbsGrams: BigInt(mpForm.carbsGrams),
        fatGrams: BigInt(mpForm.fatGrams)
      });
      ue.success("Meal plan created!");
      setMpForm({
        name: "",
        description: "",
        goalType: GoalType.weightLoss,
        dailyCalories: 2e3,
        proteinGrams: 150,
        carbsGrams: 220,
        fatGrams: 65
      });
    } catch {
      ue.error("Failed to create meal plan.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg border-b border-border pb-2", children: "Meal Plans" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-card border-border p-5 shadow-subtle", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-body font-semibold text-foreground mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 15, className: "text-primary", "aria-hidden": "true" }),
        " ",
        "Create Meal Plan"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleCreateMP, className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "mp-name",
              className: "text-xs font-body text-muted-foreground",
              children: "Plan Name"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "mp-name",
              value: mpForm.name,
              onChange: (e) => setMpForm((f) => ({ ...f, name: e.target.value })),
              className: "bg-muted border-border text-sm",
              "data-ocid": "admin-input-mp-name"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "mp-goal",
              className: "text-xs font-body text-muted-foreground",
              children: "Goal Type"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "mp-goal",
              value: mpForm.goalType,
              onChange: (e) => setMpForm((f) => ({
                ...f,
                goalType: e.target.value
              })),
              className: "w-full h-9 rounded-md border border-border bg-muted px-3 text-sm text-foreground",
              "data-ocid": "admin-input-mp-goal",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: GoalType.weightLoss, children: "Weight Loss" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: GoalType.muscleGain, children: "Muscle Gain" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: GoalType.maintenance, children: "Maintenance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: GoalType.endurance, children: "Endurance" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "mp-calories",
              className: "text-xs font-body text-muted-foreground",
              children: "Daily Calories"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "mp-calories",
              type: "number",
              value: mpForm.dailyCalories,
              onChange: (e) => setMpForm((f) => ({
                ...f,
                dailyCalories: Number(e.target.value)
              })),
              className: "bg-muted border-border text-sm",
              "data-ocid": "admin-input-mp-calories"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "mp-protein",
              className: "text-xs font-body text-muted-foreground",
              children: "Protein (g)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "mp-protein",
              type: "number",
              value: mpForm.proteinGrams,
              onChange: (e) => setMpForm((f) => ({
                ...f,
                proteinGrams: Number(e.target.value)
              })),
              className: "bg-muted border-border text-sm",
              "data-ocid": "admin-input-mp-protein"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "mp-carbs",
              className: "text-xs font-body text-muted-foreground",
              children: "Carbs (g)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "mp-carbs",
              type: "number",
              value: mpForm.carbsGrams,
              onChange: (e) => setMpForm((f) => ({
                ...f,
                carbsGrams: Number(e.target.value)
              })),
              className: "bg-muted border-border text-sm",
              "data-ocid": "admin-input-mp-carbs"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "mp-fat",
              className: "text-xs font-body text-muted-foreground",
              children: "Fat (g)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "mp-fat",
              type: "number",
              value: mpForm.fatGrams,
              onChange: (e) => setMpForm((f) => ({
                ...f,
                fatGrams: Number(e.target.value)
              })),
              className: "bg-muted border-border text-sm",
              "data-ocid": "admin-input-mp-fat"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "mp-desc",
              className: "text-xs font-body text-muted-foreground",
              children: "Description"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "mp-desc",
              value: mpForm.description,
              onChange: (e) => setMpForm((f) => ({ ...f, description: e.target.value })),
              className: "bg-muted border-border text-sm",
              "data-ocid": "admin-input-mp-desc"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            size: "sm",
            className: "bg-primary text-primary-foreground",
            disabled: createMealPlan.isPending,
            "data-ocid": "btn-create-meal-plan",
            children: createMealPlan.isPending ? "Creating..." : "Create Meal Plan"
          }
        ) })
      ] })
    ] }),
    mpLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(PageLoading, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      (mealPlans ?? []).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-lg px-4 py-3 flex items-center justify-between gap-4",
          "data-ocid": `admin-mealplan-${m.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body font-semibold text-foreground text-sm truncate", children: m.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                m.goalType,
                " · ",
                Number(m.dailyCalories),
                "kcal · P:",
                Number(m.proteinGrams),
                "g C:",
                Number(m.carbsGrams),
                "g F:",
                Number(m.fatGrams),
                "g"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => deleteMealPlan.mutateAsync(m.id).catch(() => ue.error("Failed")),
                className: "p-1 text-muted-foreground hover:text-destructive shrink-0",
                "aria-label": "Delete",
                "data-ocid": `btn-delete-mealplan-${m.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14, "aria-hidden": "true" })
              }
            )
          ]
        },
        String(m.id)
      )),
      !(mealPlans == null ? void 0 : mealPlans.length) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-muted-foreground text-sm font-body text-center py-6",
          "data-ocid": "mealplans-admin-empty",
          children: "No meal plans yet."
        }
      )
    ] })
  ] }) });
}
function AdminPage() {
  const { data: sessions } = useSessions();
  const { data: plans } = useFitnessPlans();
  const { data: mealPlans } = useMealPlans();
  const { data: members } = useAllMembers();
  const { data: bookings } = useAllBookings();
  const adminTabs = [
    {
      value: "members",
      label: "Members",
      icon: Users,
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(MembersAdmin, {})
    },
    {
      value: "plans",
      label: "Plans",
      icon: Dumbbell,
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(PlansAdmin, {})
    },
    {
      value: "sessions",
      label: "Sessions",
      icon: Calendar,
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(SessionsAdmin, {})
    },
    {
      value: "gallery",
      label: "Gallery & Stories",
      icon: ChartNoAxesColumn,
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryAdmin, {})
    },
    {
      value: "nutrition",
      label: "Nutrition",
      icon: BookOpen,
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(NutritionAdmin, {})
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 20, className: "text-accent", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-1 bg-accent/15 text-accent border-accent/30 text-xs tracking-widest uppercase", children: "Admin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl sm:text-3xl text-foreground", children: "ADMIN DASHBOARD" })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatsCard,
          {
            label: "Members",
            value: (members == null ? void 0 : members.length) ?? 0,
            icon: Users,
            "data-ocid": "admin-overview-members"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatsCard,
          {
            label: "Active Plans",
            value: (plans == null ? void 0 : plans.length) ?? 0,
            icon: Dumbbell,
            "data-ocid": "admin-overview-plans"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatsCard,
          {
            label: "Sessions",
            value: (sessions == null ? void 0 : sessions.length) ?? 0,
            icon: Calendar,
            "data-ocid": "admin-overview-sessions"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StatsCard,
          {
            label: "Meal Plans",
            value: (mealPlans == null ? void 0 : mealPlans.length) ?? 0,
            icon: BookOpen,
            "data-ocid": "admin-overview-mealplans"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatsCard,
        {
          label: "Bookings",
          value: (bookings == null ? void 0 : bookings.length) ?? 0,
          icon: Calendar,
          iconColor: "text-accent",
          "data-ocid": "admin-overview-bookings"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "members", className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsList,
          {
            className: "bg-card border border-border flex-wrap h-auto gap-1 p-1",
            "data-ocid": "admin-tabs",
            children: adminTabs.map(({ value, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TabsTrigger,
              {
                value,
                className: "gap-1.5 text-xs",
                "data-ocid": `admin-tab-${value}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 13, "aria-hidden": "true" }),
                  label
                ]
              },
              value
            ))
          }
        ),
        adminTabs.map(({ value, component }) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value, children: component }, value))
      ] })
    ] })
  ] });
}
export {
  AdminPage as default
};
