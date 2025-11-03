"use client";

import { Button } from "@/components/ui/button";
import Info from "./Info";
import Addons from "./Addons";
import Plan from "./Plan";
import Finishing from "./Finishing";
import ThankYou from "./ThankYou";
import { useState } from "react";

export default function Base() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isStep1Valid, setIsStep1Valid] = useState(false);

    const steps = [
        { number: 1, label: "Your info", component: Info },
        { number: 2, label: "select plan", component: Plan },
        { number: 3, label: "add-ons", component: Addons },
        { number: 4, label: "summary", component: Finishing },
        { number: 5, label: "thank you", component: ThankYou}
    ];

    const CurrentComponent = steps[currentStep - 1].component;

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            e.preventDefault();
            e.stopPropagation();
            console.log("Next button clicked, current step:", currentStep);
            console.log("Event details:", e.type, e.currentTarget);

            // Check validation for step 1
        if (currentStep === 1 && !isStep1Valid) {
            console.log('Step 1 validation failed - form is incomplete');
            return; // Don't proceed to next step
        }
        
            if (currentStep < 5) {
                setCurrentStep(currentStep + 1);
                console.log('Successfully moved to step:', currentStep + 1);
            } else {
                console.log('Already at last step');
            }
        } catch(error) {
            console.error('Error in handleNext:', error);
            alert('Error navigating: ' + error);
        }
    };

    const handleBack = () => {
        if(currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const isThankYouPage = currentStep === 5;

    return (
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-[1fr_2fr] relative md:px-4 md:py-8">
            <div className="h-[28.57vh] md:h-auto relative">
                <picture>

                    {/* Tablet bg upwards */}
                    <source 
                        media="(min-width: 640px)" 
                        srcSet="/bg-sidebar-desktop.svg" 
                    />

                    {/* Mobile bg */}
                    <img 
                        src="/bg-sidebar-mobile.svg" 
                        alt="sidebar background" 
                        className="w-full h-full object-cover"
                    />
                </picture>

                <div className="absolute inset-0 flex flex-row gap-2 md:flex-col items-center justify-center md:justify-start md:items-start md:py-6">
                    {steps.slice(0, 4).map((step) => (
                        <section key={step.number} className="md:flex gap-4 md:items-center md:py-4 md:px-6">
                            <Button 
                                className={`rounded-full hover:text-black hover:bg-medium-blue bg-transparent border-2 border-white ${
                                    currentStep === step.number
                                        ? 'bg-medium-blue text-black'
                                        : 'bg-transparent'
                                }`}>
                                    {step.number}
                                </Button>
                            <div className="hidden sm:block">
                                <p className="uppercase text-white/50">step {step.number}</p>
                                <p className="uppercase text-xl text-white font-bold">{step.label}</p>
                            </div>
                        </section>
                    ))};
                </div>
            </div>

            {/* Desktop view */}
            <div className="h-[57.14vh] md:h-auto bg-high-medium-blue md:flex md:flex-col md:items-center py-8 md:bg-white">
                <div className="hidden md:block w-full max-w-md">
                    {currentStep === 1 ? (
                        <CurrentComponent onValidationChange={setIsStep1Valid} />
                    ) : (
                        <CurrentComponent />
                    )}
                </div>

                {!isThankYouPage && (
                    <section className="hidden md:flex md:justify-between md:py-4 md:mt-auto md:w-full md:max-w-md">
                        <div>
                            {currentStep > 1 && (
                                <Button 
                                    variant="ghost" 
                                    className="text-destructive-grey hover:text-dark-blue"
                                    onClick={handleBack}
                                >
                                    Go back
                                </Button>
                            )}
                        </div>

                        <div>
                            <Button 
                                className="text-white bg-dark-blue"
                                onClick={handleNext}
                            >
                                {currentStep === 4 ? 'Confirm' : 'Next'}
                            </Button>
                        </div>
                    </section>
                )}
            </div>

            {/* Mobile view */}
            {!isThankYouPage && (
                <section className="flex justify-between h-[14.29vh] py-4 md:hidden">
                    <div>
                        {currentStep > 1 && (
                            <Button 
                                variant="ghost" 
                                className="text-destructive-grey hover:text-dark-blue"
                                onClick={handleBack}
                            >
                                Go back
                            </Button>
                        )}
                    </div>
                    
                    <div className="px-2">
                        <Button 
                            className="text-white bg-dark-blue"
                            onClick={handleNext}
                        >
                            {currentStep === 4 ? 'Confirm' : 'Next Step'}
                        </Button>
                    </div>
                </section>
            )}

            {/* Absolutely positioned white div */}
            <div className="absolute top-[19.57vh] left-0 right-0 bottom-[14.29vh] flex items-start justify-center md:hidden  pointer-events-none">
                <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md pointer-events-auto">
                    {currentStep === 1 ? (
                        <CurrentComponent onValidationChange={setIsStep1Valid} />
                    ) : (
                        <CurrentComponent />
                    )}
                </div>
            </div>
        </section>
    )
}