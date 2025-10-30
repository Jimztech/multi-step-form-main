import { Button } from "@/components/ui/button";
import Info from "./Info";
import Plan from "./Plan";

export default function Base() {
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
                    <section className="md:flex gap-4 md:items-center md:py-4 md:px-6">
                        <Button className="rounded-full hover:text-black hover:bg-medium-blue bg-transparent border-2 border-white">1</Button>
                        <div className="hidden sm:block">
                            <p className="uppercase text-white/50">step 1</p>
                            <p className="uppercase text-xl text-white font-bold">Your info</p>
                        </div>
                    </section>

                    <section className="md:flex gap-4 md:items-center md:py-4 md:px-6">
                        <Button className="rounded-full hover:text-black hover:bg-medium-blue bg-transparent border-2 border-white">2</Button>
                        <div className="hidden sm:block">
                            <p className="uppercase text-white/50">step 2</p>
                            <p className="uppercase text-xl text-white font-bold">select plan</p>
                        </div>
                    </section>

                    <section className="md:flex gap-4 md:items-center md:py-4 md:px-6">
                        <Button className="rounded-full hover:text-black hover:bg-medium-blue bg-transparent border-2 border-white">3</Button>
                        <div className="hidden sm:block">
                            <p className="uppercase text-white/50">step 3</p>
                            <p className="uppercase text-xl text-white font-bold">add-ons</p>
                        </div>
                    </section>

                    <section className="md:flex gap-4 md:items-center md:py-4 md:px-6">
                        <Button className="rounded-full hover:text-black hover:bg-medium-blue bg-transparent border-2 border-white">4</Button>
                        <div className="hidden sm:block">
                            <p className="uppercase text-white/50">step 4</p>
                            <p className="uppercase text-white font-bold text-xl">summary</p>
                        </div>
                    </section>
                </div>
            </div>

            <div className="h-[57.14vh] md:h-auto bg-high-medium-blue md:flex md:flex-col md:items-center py-8 md:bg-white">
                <div className="hidden md:block w-full max-w-md">
                    <Plan />
                </div>

                <div className="hidden md:flex md:justify-end md:items-end md:mt-auto md:w-full md:max-w-md md:px-2">
                    <Button>Next</Button>
                </div>
            </div>

            <div className="h-[14.29vh] flex justify-end items-center px-2 md:hidden">
                <Button className="text-white bg-dark-blue">
                    Next
                </Button>
            </div>

            {/* Absolutely positioned white div */}
            <div className="absolute inset-0 flex items-center justify-center md:hidden">
                <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] max-w-md">
                    <Info />
                </div>
            </div>
        </section>
    )
}