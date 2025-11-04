import { FieldSeparator } from "@/components/ui/field"


interface FinishingProps {
    isYearly?: boolean;
    selectedAddons?: Array<{name: string, price: number}>;
    onChangeStep?: (step: number) => void;
    selectedPlan?: string;
    selectedPlanPrice?: number;
} 


export default function Finishing({ 
    isYearly = false, 
    selectedPlan = "No plan selected",
    selectedPlanPrice = 0,
    selectedAddons = [],
    onChangeStep
}: FinishingProps) {
    const billingPeriod = isYearly ? "yr" : "mo";
    const billingLabel = isYearly ? "year" : "month";

    // Calculate total
    const addonsTotal = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
    const total = selectedPlanPrice + addonsTotal;

    return(
        <section>
            <h1 className="text-dark-blue font-bold text-2xl md:text-4xl">Finishing up</h1>
            <p className="text-destructive-grey md:py-2">
                Double-check everything looks OK before confirming.
            </p>

            <section className="bg-high-light-blue my-4 rounded-lg">
                <section className="flex justify-between items-center p-2">
                    <div>
                        <p className="font-semibold text-dark-blue">
                            {selectedPlan} ({isYearly ? "Yearly" : "Monthly"})
                        </p>
                        <button
                            onClick={() => onChangeStep?.(2)}
                            className="underline text-destructive-grey hover:text-dark-blue"
                        >
                            Change
                        </button>
                    </div>

                    <div>
                        {/* Price still from Plan.tsx */}
                        <p>${selectedPlanPrice}/{billingPeriod}</p>
                    </div>
                </section>

                {selectedAddons.length > 0 && (
                    <>
                        <FieldSeparator />
                        <section className="pt-4 space-y-2">
                            {selectedAddons.map((addon, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <p className="text-destructive-grey">{addon.name}</p>
                                    <p className="text-dark-blue">+${addon.price}/{billingPeriod}</p>
                                </div>
                            ))}
                        </section>
                    </>
                )}
            </section>


            <div className="flex justify-between items-center p-2">
                <p className="text-destructive-grey">Total (per {billingLabel})</p>
                <p className="font-bold text-lg text-blue-600">+${total}/{billingPeriod}</p>
            </div>
        </section>
    )
}