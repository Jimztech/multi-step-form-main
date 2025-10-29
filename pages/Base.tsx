import { Button } from "@/components/ui/button";

export default function Base() {
    return (
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-[1fr_2fr] relative">
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
                            <p className="uppercase">step 1</p>
                            <p className="uppercase text-xl">Your info</p>
                        </div>
                    </section>

                    <section className="md:flex gap-4 md:items-center md:py-4 md:px-6">
                        <Button className="rounded-full hover:text-black hover:bg-medium-blue bg-transparent border-2 border-white">2</Button>
                        <div className="hidden sm:block">
                            <p className="uppercase">step 2</p>
                            <p className="uppercase text-xl">select plan</p>
                        </div>
                    </section>

                    <section className="md:flex gap-4 md:items-center md:py-4 md:px-6">
                        <Button className="rounded-full hover:text-black hover:bg-medium-blue bg-transparent border-2 border-white">3</Button>
                        <div className="hidden sm:block">
                            <p className="uppercase">step 3</p>
                            <p className="uppercase text-xl">add-ons</p>
                        </div>
                    </section>

                    <section className="md:flex gap-4 md:items-center md:py-4 md:px-6">
                        <Button className="rounded-full hover:text-black hover:bg-medium-blue bg-transparent border-2 border-white">4</Button>
                        <div className="hidden sm:block">
                            <p className="uppercase">step 4</p>
                            <p className="uppercase text-white font-bold text-xl">summary</p>
                        </div>
                    </section>
                </div>
            </div>

            <div className="h-[57.14vh] md:h-auto bg-high-medium-blue md:bg-white"></div>

            <div className="h-[14.29vh] flex justify-end items-center px-2 md:hidden">
                <Button className="text-white bg-dark-blue">
                    Next
                </Button>
            </div>

            {/* Absolutely positioned white div */}
            <div className="absolute inset-0 flex items-center justify-center md:hidden">
                <div className="bg-white p-6 rounded-lg shadow-lg"></div>
            </div>
        </section>
    )
}