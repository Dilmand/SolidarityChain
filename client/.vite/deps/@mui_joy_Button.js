"use client";
import {
  ButtonGroupContext_default,
  ToggleButtonGroupContext_default
} from "./chunk-5ABMBYUX.js";
import "./chunk-2H2X46UZ.js";
import "./chunk-FBRNPY62.js";
import "./chunk-3LU7AAO3.js";
import {
  useButton
} from "./chunk-XYPELHYZ.js";
import {
  generateUtilityClass,
  generateUtilityClasses,
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-3KTIQMCQ.js";
import "./chunk-WFJOCB3R.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  capitalize,
  clsx_default,
  composeClasses,
  css,
  init_clsx,
  init_composeClasses,
  init_esm,
  init_esm2,
  init_extends,
  init_objectWithoutPropertiesLoose,
  keyframes,
  require_jsx_runtime,
  require_prop_types,
  useForkRef
} from "./chunk-LUACO7OZ.js";
import {
  require_react
} from "./chunk-UM3JHGVO.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/@mui/joy/Button/Button.js
init_objectWithoutPropertiesLoose();
init_extends();
var React2 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
init_composeClasses();
init_esm();

// node_modules/@mui/joy/CircularProgress/CircularProgress.js
init_extends();
init_objectWithoutPropertiesLoose();
var import_prop_types = __toESM(require_prop_types());
var React = __toESM(require_react());
init_clsx();
init_esm();
init_esm2();

// node_modules/@mui/joy/CircularProgress/circularProgressClasses.js
function getCircularProgressUtilityClass(slot) {
  return generateUtilityClass("MuiCircularProgress", slot);
}
var circularProgressClasses = generateUtilityClasses("MuiCircularProgress", ["root", "determinate", "svg", "track", "progress", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);

// node_modules/@mui/joy/CircularProgress/CircularProgress.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _ = (t) => t;
var _t;
var _excluded = ["color", "backgroundColor"];
var _excluded2 = ["children", "className", "color", "size", "variant", "thickness", "determinate", "value", "component", "slots", "slotProps"];
var circulate = keyframes({
  "0%": {
    // let the progress start at the top of the ring
    transform: "rotate(-90deg)"
  },
  "100%": {
    transform: "rotate(270deg)"
  }
});
var useUtilityClasses = (ownerState) => {
  const {
    determinate,
    color,
    variant,
    size
  } = ownerState;
  const slots = {
    root: ["root", determinate && "determinate", color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`, size && `size${capitalize(size)}`],
    svg: ["svg"],
    track: ["track"],
    progress: ["progress"]
  };
  return composeClasses(slots, getCircularProgressUtilityClass, {});
};
function getThickness(slot, defaultValue) {
  return `var(--CircularProgress-${slot}Thickness, var(--CircularProgress-thickness, ${defaultValue}))`;
}
var CircularProgressRoot = styled_default("span", {
  name: "JoyCircularProgress",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  var _theme$variants, _theme$variants$solid, _theme$variants$softH, _theme$variants$solid2;
  const _ref = ((_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]) || {}, {
    color,
    backgroundColor
  } = _ref, rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  return _extends({
    // integration with icon
    "--Icon-fontSize": "calc(0.4 * var(--_root-size))",
    // public variables
    "--CircularProgress-trackColor": backgroundColor,
    "--CircularProgress-progressColor": color,
    "--CircularProgress-percent": ownerState.value,
    // 0 - 100
    "--CircularProgress-linecap": "round"
  }, ownerState.size === "sm" && {
    "--_root-size": "var(--CircularProgress-size, 24px)",
    // use --_root-size to let other components overrides via --CircularProgress-size
    "--_track-thickness": getThickness("track", "3px"),
    "--_progress-thickness": getThickness("progress", "3px")
  }, ownerState.instanceSize === "sm" && {
    "--CircularProgress-size": "24px"
  }, ownerState.size === "md" && {
    "--_track-thickness": getThickness("track", "6px"),
    "--_progress-thickness": getThickness("progress", "6px"),
    "--_root-size": "var(--CircularProgress-size, 40px)"
  }, ownerState.instanceSize === "md" && {
    "--CircularProgress-size": "40px"
  }, ownerState.size === "lg" && {
    "--_track-thickness": getThickness("track", "8px"),
    "--_progress-thickness": getThickness("progress", "8px"),
    "--_root-size": "var(--CircularProgress-size, 64px)"
  }, ownerState.instanceSize === "lg" && {
    "--CircularProgress-size": "64px"
  }, ownerState.thickness && {
    "--_track-thickness": `${ownerState.thickness}px`,
    "--_progress-thickness": `${ownerState.thickness}px`
  }, {
    // internal variables
    "--_thickness-diff": "calc(var(--_track-thickness) - var(--_progress-thickness))",
    "--_inner-size": "calc(var(--_root-size) - 2 * var(--variant-borderWidth, 0px))",
    "--_outlined-inset": "max(var(--_track-thickness), var(--_progress-thickness))",
    width: "var(--_root-size)",
    height: "var(--_root-size)",
    borderRadius: "var(--_root-size)",
    margin: "var(--CircularProgress-margin)",
    boxSizing: "border-box",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    // prevent from shrinking when CircularProgress is in a flex container.
    position: "relative",
    color
  }, ownerState.children && {
    // only add font related properties when there is a child.
    // so that when there is no child, the size can be controlled by the parent font-size e.g. Link
    fontFamily: theme.vars.fontFamily.body,
    fontWeight: theme.vars.fontWeight.md,
    fontSize: "calc(0.2 * var(--_root-size))"
  }, rest, ownerState.variant === "outlined" && {
    "&:before": _extends({
      content: '""',
      display: "block",
      position: "absolute",
      borderRadius: "inherit",
      top: "var(--_outlined-inset)",
      left: "var(--_outlined-inset)",
      right: "var(--_outlined-inset)",
      bottom: "var(--_outlined-inset)"
    }, rest)
  }, ownerState.variant === "soft" && {
    "--CircularProgress-trackColor": theme.variants.soft.neutral.backgroundColor,
    "--CircularProgress-progressColor": (_theme$variants$solid = theme.variants.solid) == null ? void 0 : _theme$variants$solid[ownerState.color].backgroundColor
  }, ownerState.variant === "solid" && {
    "--CircularProgress-trackColor": (_theme$variants$softH = theme.variants.softHover) == null ? void 0 : _theme$variants$softH[ownerState.color].backgroundColor,
    "--CircularProgress-progressColor": (_theme$variants$solid2 = theme.variants.solid) == null ? void 0 : _theme$variants$solid2[ownerState.color].backgroundColor
  });
});
var CircularProgressSvg = styled_default("svg", {
  name: "JoyCircularProgress",
  slot: "Svg",
  overridesResolver: (props, styles) => styles.svg
})({
  width: "inherit",
  height: "inherit",
  display: "inherit",
  boxSizing: "inherit",
  position: "absolute",
  top: "calc(-1 * var(--variant-borderWidth, 0px))",
  // centered align
  left: "calc(-1 * var(--variant-borderWidth, 0px))"
  // centered align
});
var CircularProgressTrack = styled_default("circle", {
  name: "JoyCircularProgress",
  slot: "track",
  overridesResolver: (props, styles) => styles.track
})({
  cx: "50%",
  cy: "50%",
  r: "calc(var(--_inner-size) / 2 - var(--_track-thickness) / 2 + min(0px, var(--_thickness-diff) / 2))",
  fill: "transparent",
  strokeWidth: "var(--_track-thickness)",
  stroke: "var(--CircularProgress-trackColor)"
});
var CircularProgressProgress = styled_default("circle", {
  name: "JoyCircularProgress",
  slot: "progress",
  overridesResolver: (props, styles) => styles.progress
})({
  "--_progress-radius": "calc(var(--_inner-size) / 2 - var(--_progress-thickness) / 2 - max(0px, var(--_thickness-diff) / 2))",
  "--_progress-length": "calc(2 * 3.1415926535 * var(--_progress-radius))",
  // the circumference around the progress
  cx: "50%",
  cy: "50%",
  r: "var(--_progress-radius)",
  fill: "transparent",
  strokeWidth: "var(--_progress-thickness)",
  stroke: "var(--CircularProgress-progressColor)",
  strokeLinecap: "var(--CircularProgress-linecap, round)",
  // can't use CSS variable directly, need to cast type.
  strokeDasharray: "var(--_progress-length)",
  strokeDashoffset: "calc(var(--_progress-length) - var(--CircularProgress-percent) * var(--_progress-length) / 100)",
  transformOrigin: "center",
  transform: "rotate(-90deg)"
  // to initially appear at the top-center of the circle.
}, ({
  ownerState
}) => !ownerState.determinate && css(_t || (_t = _`
      animation: var(--CircularProgress-circulation, 0.8s linear 0s infinite normal none running)
        ${0};
    `), circulate));
var CircularProgress = React.forwardRef(function CircularProgress2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyCircularProgress"
  });
  const {
    children,
    className,
    color = "primary",
    size = "md",
    variant = "soft",
    thickness,
    determinate = false,
    value = determinate ? 0 : 25,
    // `25` is the 1/4 of the circle.
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const ownerState = _extends({}, props, {
    color,
    size,
    variant,
    thickness,
    value,
    determinate,
    instanceSize: inProps.size
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: CircularProgressRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: _extends({
      role: "progressbar",
      style: {
        // Setting this CSS variable via inline-style
        // prevents the generation of new CSS every time
        // `value` prop updates
        "--CircularProgress-percent": value
      }
    }, value && determinate && {
      "aria-valuenow": typeof value === "number" ? Math.round(value) : Math.round(Number(value || 0))
    })
  });
  const [SlotSvg, svgProps] = useSlot("svg", {
    className: classes.svg,
    elementType: CircularProgressSvg,
    externalForwardedProps,
    ownerState
  });
  const [SlotTrack, trackProps] = useSlot("track", {
    className: classes.track,
    elementType: CircularProgressTrack,
    externalForwardedProps,
    ownerState
  });
  const [SlotProgress, progressProps] = useSlot("progress", {
    className: classes.progress,
    elementType: CircularProgressProgress,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime2.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime2.jsxs)(SlotSvg, _extends({}, svgProps, {
      children: [(0, import_jsx_runtime.jsx)(SlotTrack, _extends({}, trackProps)), (0, import_jsx_runtime.jsx)(SlotProgress, _extends({}, progressProps))]
    })), children]
  }));
});
true ? CircularProgress.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The boolean to select a variant.
   * Use indeterminate when there is no progress value.
   * @default false
   */
  determinate: import_prop_types.default.bool,
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["sm", "md", "lg"]), import_prop_types.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    progress: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    svg: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    track: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    progress: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType,
    svg: import_prop_types.default.elementType,
    track: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The thickness of the circle.
   */
  thickness: import_prop_types.default.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   *
   * @default determinate ? 0 : 25
   */
  value: import_prop_types.default.number,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'soft'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
var CircularProgress_default = CircularProgress;

// node_modules/@mui/joy/Button/buttonClasses.js
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses("MuiButton", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "focusVisible", "disabled", "sizeSm", "sizeMd", "sizeLg", "fullWidth", "startDecorator", "endDecorator", "loading", "loadingIndicatorCenter"]);
var buttonClasses_default = buttonClasses;

// node_modules/@mui/joy/Button/Button.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded3 = ["children", "action", "color", "variant", "size", "fullWidth", "startDecorator", "endDecorator", "loading", "loadingPosition", "loadingIndicator", "disabled", "component", "slots", "slotProps"];
var useUtilityClasses2 = (ownerState) => {
  const {
    color,
    disabled,
    focusVisible,
    focusVisibleClassName,
    fullWidth,
    size,
    variant,
    loading
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", fullWidth && "fullWidth", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`, loading && "loading"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"],
    loadingIndicatorCenter: ["loadingIndicatorCenter"]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, {});
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
var ButtonStartDecorator = styled_default("span", {
  name: "JoyButton",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})({
  "--Icon-margin": "0 0 0 calc(var(--Button-gap) / -2)",
  "--CircularProgress-margin": "0 0 0 calc(var(--Button-gap) / -2)",
  display: "inherit",
  marginRight: "var(--Button-gap)"
});
var ButtonEndDecorator = styled_default("span", {
  name: "JoyButton",
  slot: "EndDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})({
  "--Icon-margin": "0 calc(var(--Button-gap) / -2) 0 0",
  "--CircularProgress-margin": "0 calc(var(--Button-gap) / -2) 0 0",
  display: "inherit",
  marginLeft: "var(--Button-gap)"
});
var ButtonLoadingCenter = styled_default("span", {
  name: "JoyButton",
  slot: "LoadingCenter",
  overridesResolver: (props, styles) => styles.loadingIndicatorCenter
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$variants2;
  return _extends({
    display: "inherit",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: (_theme$variants = theme.variants[ownerState.variant]) == null || (_theme$variants = _theme$variants[ownerState.color]) == null ? void 0 : _theme$variants.color
  }, ownerState.disabled && {
    color: (_theme$variants2 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2.color
  });
});
var getButtonStyles = ({
  theme,
  ownerState
}) => {
  var _theme$variants3, _theme$variants4, _theme$variants5, _theme$variants6;
  return [_extends({
    "--Icon-margin": "initial",
    // reset the icon's margin.
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon
  }, ownerState.size === "sm" && {
    "--Icon-fontSize": theme.vars.fontSize.lg,
    "--CircularProgress-size": "20px",
    // must be `px` unit, otherwise the CircularProgress is broken in Safari
    "--CircularProgress-thickness": "2px",
    "--Button-gap": "0.375rem",
    minHeight: "var(--Button-minHeight, 2rem)",
    fontSize: theme.vars.fontSize.sm,
    paddingBlock: "var(--Button-paddingBlock, 0.25rem)",
    paddingInline: "0.75rem"
  }, ownerState.size === "md" && {
    "--Icon-fontSize": theme.vars.fontSize.xl,
    "--CircularProgress-size": "20px",
    // must be `px` unit, otherwise the CircularProgress is broken in Safari
    "--CircularProgress-thickness": "2px",
    "--Button-gap": "0.5rem",
    minHeight: "var(--Button-minHeight, 2.25rem)",
    // use min-height instead of height to make the button resilient to its content
    fontSize: theme.vars.fontSize.sm,
    // internal --Button-paddingBlock is used to control the padding-block of the button from the outside, e.g. as a decorator of an Input
    paddingBlock: "var(--Button-paddingBlock, 0.375rem)",
    // the padding-block act as a minimum spacing between content and root element
    paddingInline: "1rem"
  }, ownerState.size === "lg" && {
    "--Icon-fontSize": theme.vars.fontSize.xl2,
    "--CircularProgress-size": "28px",
    // must be `px` unit, otherwise the CircularProgress is broken in Safari
    "--CircularProgress-thickness": "4px",
    "--Button-gap": "0.75rem",
    minHeight: "var(--Button-minHeight, 2.75rem)",
    fontSize: theme.vars.fontSize.md,
    paddingBlock: "var(--Button-paddingBlock, 0.5rem)",
    paddingInline: "1.5rem"
  }, {
    WebkitTapHighlightColor: "transparent",
    boxSizing: "border-box",
    borderRadius: `var(--Button-radius, ${theme.vars.radius.sm})`,
    // to be controlled by other components, e.g. Input
    margin: `var(--Button-margin)`,
    // to be controlled by other components, e.g. Input
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    textDecoration: "none",
    // prevent user agent underline when used as anchor
    fontFamily: theme.vars.fontFamily.body,
    fontWeight: theme.vars.fontWeight.lg,
    lineHeight: theme.vars.lineHeight.md
  }, ownerState.fullWidth && {
    width: "100%"
  }, {
    [theme.focus.selector]: theme.focus.default
  }), _extends({}, (_theme$variants3 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants3[ownerState.color], {
    "&:hover": {
      "@media (hover: hover)": (_theme$variants4 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants4[ownerState.color]
    },
    '&:active, &[aria-pressed="true"]': (_theme$variants5 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants5[ownerState.color],
    [`&.${buttonClasses_default.disabled}`]: (_theme$variants6 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants6[ownerState.color]
  }, ownerState.loadingPosition === "center" && {
    // this has to come after the variant styles to take effect.
    [`&.${buttonClasses_default.loading}`]: {
      color: "transparent"
    }
  })];
};
var ButtonRoot = styled_default("button", {
  name: "JoyButton",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(getButtonStyles);
var Button = React2.forwardRef(function Button2(inProps, ref) {
  var _ref;
  const props = useThemeProps({
    props: inProps,
    name: "JoyButton"
  });
  const {
    children,
    action,
    color: colorProp = "primary",
    variant: variantProp = "solid",
    size: sizeProp = "md",
    fullWidth = false,
    startDecorator,
    endDecorator,
    loading = false,
    loadingPosition = "center",
    loadingIndicator: loadingIndicatorProp,
    disabled: disabledProp,
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const buttonGroup = React2.useContext(ButtonGroupContext_default);
  const toggleButtonGroup = React2.useContext(ToggleButtonGroupContext_default);
  const variant = inProps.variant || buttonGroup.variant || variantProp;
  const size = inProps.size || buttonGroup.size || sizeProp;
  const color = inProps.color || buttonGroup.color || colorProp;
  const disabled = (_ref = inProps.disabled || inProps.loading) != null ? _ref : buttonGroup.disabled || disabledProp || loading;
  const buttonRef = React2.useRef(null);
  const handleRef = useForkRef(buttonRef, ref);
  const {
    focusVisible,
    setFocusVisible,
    getRootProps
  } = useButton(_extends({}, props, {
    disabled,
    rootRef: handleRef
  }));
  const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : (0, import_jsx_runtime3.jsx)(CircularProgress_default, {
    color,
    thickness: {
      sm: 2,
      md: 3,
      lg: 4
    }[size] || 3
  });
  React2.useImperativeHandle(action, () => ({
    focusVisible: () => {
      var _buttonRef$current;
      setFocusVisible(true);
      (_buttonRef$current = buttonRef.current) == null || _buttonRef$current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = _extends({}, props, {
    color,
    fullWidth,
    variant,
    size,
    focusVisible,
    loading,
    loadingPosition,
    disabled
  });
  const classes = useUtilityClasses2(ownerState);
  const handleClick = (event) => {
    var _onClick;
    let onClick = props.onClick;
    if (typeof slotProps.root === "function") {
      onClick = slotProps.root(ownerState).onClick;
    } else if (slotProps.root) {
      onClick = slotProps.root.onClick;
    }
    (_onClick = onClick) == null || _onClick(event);
    if (toggleButtonGroup) {
      var _toggleButtonGroup$on;
      (_toggleButtonGroup$on = toggleButtonGroup.onClick) == null || _toggleButtonGroup$on.call(toggleButtonGroup, event, props.value);
    }
  };
  let ariaPressed = props["aria-pressed"];
  if (typeof slotProps.root === "function") {
    ariaPressed = slotProps.root(ownerState)["aria-pressed"];
  } else if (slotProps.root) {
    ariaPressed = slotProps.root["aria-pressed"];
  }
  if (toggleButtonGroup != null && toggleButtonGroup.value) {
    if (Array.isArray(toggleButtonGroup.value)) {
      ariaPressed = toggleButtonGroup.value.indexOf(props.value) !== -1;
    } else {
      ariaPressed = toggleButtonGroup.value === props.value;
    }
  }
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: ButtonRoot,
    externalForwardedProps,
    getSlotProps: getRootProps,
    ownerState,
    additionalProps: {
      onClick: handleClick,
      "aria-pressed": ariaPressed
    }
  });
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: ButtonStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: ButtonEndDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotLoadingIndicatorCenter, loadingIndicatorCenterProps] = useSlot("loadingIndicatorCenter", {
    className: classes.loadingIndicatorCenter,
    elementType: ButtonLoadingCenter,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime4.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [(startDecorator || loading && loadingPosition === "start") && (0, import_jsx_runtime3.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
      children: loading && loadingPosition === "start" ? loadingIndicator : startDecorator
    })), children, loading && loadingPosition === "center" && (0, import_jsx_runtime3.jsx)(SlotLoadingIndicatorCenter, _extends({}, loadingIndicatorCenterProps, {
      children: loadingIndicator
    })), (endDecorator || loading && loadingPosition === "end") && (0, import_jsx_runtime3.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
      children: loading && loadingPosition === "end" ? loadingIndicator : endDecorator
    }))]
  }));
});
true ? Button.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.shape({
    current: import_prop_types2.default.shape({
      focusVisible: import_prop_types2.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  children: import_prop_types2.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types2.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types2.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types2.default.bool,
  /**
   * Element placed after the children.
   */
  endDecorator: import_prop_types2.default.node,
  /**
   * @ignore
   */
  focusVisibleClassName: import_prop_types2.default.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types2.default.bool,
  /**
   * If `true`, the loading indicator is shown and the button becomes disabled.
   * @default false
   */
  loading: import_prop_types2.default.bool,
  /**
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default we render a `CircularProgress` that is labelled by the button itself.
   * @default <CircularProgress />
   */
  loadingIndicator: import_prop_types2.default.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: import_prop_types2.default.oneOf(["center", "end", "start"]),
  /**
   * @ignore
   */
  onClick: import_prop_types2.default.func,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["sm", "md", "lg"]), import_prop_types2.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types2.default.shape({
    endDecorator: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    loadingIndicatorCenter: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    root: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    startDecorator: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types2.default.shape({
    endDecorator: import_prop_types2.default.elementType,
    loadingIndicatorCenter: import_prop_types2.default.elementType,
    root: import_prop_types2.default.elementType,
    startDecorator: import_prop_types2.default.elementType
  }),
  /**
   * Element placed before the children.
   */
  startDecorator: import_prop_types2.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types2.default.number,
  /**
   * @ignore
   */
  value: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.string), import_prop_types2.default.number, import_prop_types2.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'solid'
   */
  variant: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types2.default.string])
} : void 0;
Button.muiName = "Button";
var Button_default = Button;
export {
  buttonClasses_default as buttonClasses,
  Button_default as default,
  getButtonUtilityClass
};
//# sourceMappingURL=@mui_joy_Button.js.map
