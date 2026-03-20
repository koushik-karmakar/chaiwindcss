const UNIT = 4;

export const spacing = {
  p: (v) => ({ padding: `${v * UNIT}px` }),
  m: (v) => ({ margin: `${v * UNIT}px` }),
  px: (v) => ({ paddingLeft: `${v * UNIT}px`, paddingRight: `${v * UNIT}px` }),
  py: (v) => ({ paddingTop: `${v * UNIT}px`, paddingBottom: `${v * UNIT}px` }),
  pt: (v) => ({ paddingTop: `${v * UNIT}px` }),
  pb: (v) => ({ paddingBottom: `${v * UNIT}px` }),
  pl: (v) => ({ paddingLeft: `${v * UNIT}px` }),
  pr: (v) => ({ paddingRight: `${v * UNIT}px` }),
  mt: (v) => ({ marginTop: `${v * UNIT}px` }),
  mb: (v) => ({ marginBottom: `${v * UNIT}px` }),
  ml: (v) => ({ marginLeft: `${v * UNIT}px` }),
  mr: (v) => ({ marginRight: `${v * UNIT}px` }),
  mx: (v) => ({ marginLeft: `${v * UNIT}px`, marginRight: `${v * UNIT}px` }),
  my: (v) => ({ marginTop: `${v * UNIT}px`, marginBottom: `${v * UNIT}px` }),
  gap: (v) => ({ gap: `${v * UNIT}px` }),
  "gap-x": (v) => ({ columnGap: `${v * UNIT}px` }),
  "gap-y": (v) => ({ rowGap: `${v * UNIT}px` }),
};
