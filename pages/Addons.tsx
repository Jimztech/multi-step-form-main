import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState  } from "react";

interface AddonsProps {
    selectedPlan?: string;
    isYearly?: boolean;
    onAddonsChange?: (addons: Array<{name: string, price: number}>) => void;
}

export default function Addons({ isYearly = false, onAddonsChange }: AddonsProps) {
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);


    const addons = [
        {
            id: "online",
            name: "Online service",
            description: "Access to multiplayer games",
            monthlyPrice: 1,
            yearlyPrice: 10,
        },
        {
            id: "storage",
            name: "Larger storage",
            description: "Extra 1TB of cloud save",
            monthlyPrice: 2,
            yearlyPrice: 20,
        },
        {
            id: "profile",
            name: "Customizable profile",
            description: "Custom theme on your profile",
            monthlyPrice: 2,
            yearlyPrice: 20,
        },
    ];

    const handleAddonToggle = (addonId: string) => {
        const newSelected = selectedAddons.includes(addonId)
            ? selectedAddons.filter(id => id !== addonId)
            : [...selectedAddons, addonId];
        
        setSelectedAddons(newSelected);

        // Send selected addons data to parent
        const selectedAddonsData = newSelected.map(id => {
            const addon = addons.find(a => a.id === id);
            return {
                name: addon!.name,
                price: isYearly ? addon!.yearlyPrice : addon!.monthlyPrice
            };
        });
        onAddonsChange?.(selectedAddonsData);
    };

    return (
        <div>
            {addons.map((addon) => (
                <section 
                    key={addon.id}
                    className={`border-2 rounded-lg my-2 md:my-4 flex items-center gap-4 justify-between px-4 py-2 cursor-pointer ${
                        selectedAddons.includes(addon.id) 
                            ? 'border-dark-blue bg-high-medium-blue' 
                            : 'border-light-purple'
                    }`}
                    onClick={() => handleAddonToggle(addon.id)}
                >
                    <section className="flex gap-4 items-center">
                        <div>
                            <Checkbox 
                                id={addon.id}
                                checked={selectedAddons.includes(addon.id)}
                                onCheckedChange={() => handleAddonToggle(addon.id)}
                                className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                            />
                        </div>

                        <div>
                            <Label htmlFor={addon.id} className="font-semibold md:text-xl text-lg text-dark-blue">
                                {addon.name}
                            </Label>
                            <p className="text-destructive-grey md:text-base text-sm">{addon.description}</p>
                        </div>
                    </section>

                    <div>
                        <span className="block text-dark-blue">
                            {isYearly ? `+$${addon.yearlyPrice}/yr` : `+$${addon.monthlyPrice}/mo`}
                        </span>
                    </div>
                </section>
            ))}
        </div>
    );
}