export const BIT_WIDTHS = [8, 16, 32, 64] as const;

export type BitWidth = (typeof BIT_WIDTHS)[number];
