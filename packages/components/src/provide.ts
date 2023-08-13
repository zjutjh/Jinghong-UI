import type { InjectionKey, Ref } from "vue";
import type { JColorTheme } from "./types";

export const ColorThemeKey = Symbol() as InjectionKey<Ref<JColorTheme>>;
