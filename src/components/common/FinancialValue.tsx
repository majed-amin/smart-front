import React from "react";

interface FinancialValueProps {
    value: string | number | null | undefined;
    decimals?: number; // number of decimal places
    className?: string;
    prefix?: React.ReactNode; // optional prefix
    suffix?: React.ReactNode; // optional suffix
}

const FinancialValue: React.FC<FinancialValueProps> = ({
                                                           value,
                                                           decimals = 0,
                                                           className,
                                                           prefix,
                                                           suffix,
                                                       }) => {
    // Convert value to number safely
    let numberValue: number | null = null;
    if (typeof value === "number") {
        numberValue = value;
    } else if (typeof value === "string") {
        const parsed = parseFloat(value.replace(/,/g, "")); // remove commas
        numberValue = isNaN(parsed) ? null : parsed;
    }

    // Format value with thousand separators
    const formattedValue =
        numberValue !== null
            ? numberValue.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
            : "-";

    return (
        <span className={`inline-flex items-center ${className ?? ""}`}>
            {prefix}
            <span>{formattedValue}</span>
            {suffix}
            {/* Riyal Icon */}
            <span className="icon-saudi_riyal_new ms-1 font-normal" aria-hidden="true"></span>
    </span>
    );
};

export default FinancialValue;
