import { InjectionKey, Ref } from "vue";
import type { JColorTheme, ComponentSize } from "./types";

export const ColorThemeKey = Symbol() as InjectionKey<Ref<JColorTheme>>;
export const ComponentSizeKey = Symbol() as InjectionKey<Ref<ComponentSize>>;
