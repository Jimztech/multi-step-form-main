import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useState } from 'react';

const features = [
    {
        id: "arcade",
        icon: "/icon-arcade.svg",
        title: "Arcade",
        monthlyPrice: 9,
        yearlyPrice: 90,
    },
    {
        id: "advanced",
        icon: "/icon-advanced.svg",
        title: "Advanced",
        monthlyPrice: 12,
        yearlyPrice: 120,
    },
    {
        id: "pro",
        icon: "/icon-pro.svg",
        title: "Pro",
        monthlyPrice: 15,
        yearlyPrice: 150,
    },
] 


interface PlanProps {
    onPlanSelect?: (plan: string) => void;
    isYearly?: boolean;
    onYearlyChange?: (isYearly: boolean) => void;
    onPlanPriceSelect?: (price: number) => void;
}

export default function Plan({ onPlanSelect, onPlanPriceSelect, isYearly = false, onYearlyChange }: PlanProps) {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const handlePlanSelect = (feature: typeof features[0]) => {
        setSelectedPlan(feature.title);
        onPlanSelect?.(feature.title);
        const price = isYearly ? feature.yearlyPrice : feature.monthlyPrice;
        onPlanPriceSelect?.(price); // to notify parent component
    }

    return(
        <section className="">
            <h1 className="text-dark-blue font-bold text-2xl md:text-4xl">Select your plan</h1>
            <p className="text-destructive-grey md:py-2">You have the option of monthly or yearly billing.</p>

            <div className="md:flex md:gap-6 md:items-center">
                {features.map((feature) => (
                    <div 
                        key={feature.id} 
                        onClick={() => handlePlanSelect(feature)}
                        className={`flex flex-col gap-4 border-2  my-4 md:py-6 md:px-10 p-2 rounded-sm cursor-pointer transition-colors ${
                            selectedPlan === feature.title
                                ? "border-dark-blue bg-high-medium-blue"
                                : "border-light-purple hover:border-dark-blue"
                        }`}
                    >
                        <section className="flex flex-row gap-2 md:flex-col">
                            <Image 
                                src={feature.icon}
                                alt={feature.title}
                                width={40}
                                height={40}
                                className="block"
                            />
                            <div className="md:py-4">
                                <p className="font-semibold text-xl text-dark-blue">{feature.title}</p>
                                <p className="text-light-purple">
                                    {isYearly ? `$${feature.yearlyPrice}/yr` : `$${feature.monthlyPrice}/mo`}
                                </p>
                            </div>
                        </section>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center space-x-4 py-2 bg-high-medium-blue">
                <Label htmlFor="time" className={isYearly ? "text-dark-blue font-semibold" : "text-light-purple"}>
                    Monthly    
                </Label>
                <Switch 
                    id="time"
                    checked={isYearly}
                    onCheckedChange={onYearlyChange}
                />
                <Label htmlFor="time" className={isYearly ? "text-dark-blue font-semibold" : "text-light-purple"}>
                    Yearly
                </Label>
            </div>
        </section>
    )
}