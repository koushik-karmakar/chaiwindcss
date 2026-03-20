import { spacing } from "./spacing.js";
import { typography } from "./typography.js";
import { sizing } from "./sizing.js";
import { colors } from "./colors.js";
import { layout } from "./layout.js";
import { borders } from "./borders.js";
import { effects } from "./effects.js";
import { position } from "./position.js";

export const rules = {
  ...spacing,
  ...typography,
  ...sizing,
  ...colors,
  ...layout,
  ...borders,
  ...effects,
  ...position,
};
