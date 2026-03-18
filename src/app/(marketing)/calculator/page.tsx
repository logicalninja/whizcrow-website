import { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
    title: "Reputation ROI Calculator | WhizCrow Intelligence",
    description: "Calculate the exact revenue impact of your online reputation. Discover the ROI of trust with our research-backed valuation formulas.",
};

export default function CalculatorPage() {
    return <CalculatorClient />;
}
