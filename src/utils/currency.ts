import { shopify } from "@/config/config.json";

export function formatCurrency(
  amount: number,
  currency?: string,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currency || shopify.currencyCode,
    currencyDisplay: "narrowSymbol",
    ...options,
  }).format(amount);
}
