import clsx from "clsx";
import { shopify } from "@/config/config.json";
import { formatCurrency } from "@/utils/currency";

const Price = ({
  amount,
  className,
  currencyCode = shopify.currencyCode,
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => (
  <p suppressHydrationWarning={true} className={className}>
    {`${formatCurrency(Number(amount), currencyCode)}`}
  </p>
);

export default Price;
