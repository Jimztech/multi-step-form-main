import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Addons() {
    return (
        <section>
            <h1 className="text-dark-blue font-bold text-2xl md:text-4xl">Pick add-ons</h1>
            <p className="text-destructive-grey md:py-2">
                Add-ons help enhance your gaming experience.
            </p>

            <div className="">
                <section className="border-2 border-light-purple rounded-lg my-2 md:my-4 flex items-center gap-4 justify-between px-4 py-2">
                    <section className="flex gap-4 items-center">
                        <div>
                            <Checkbox 
                                id="online"
                                className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                            />
                        </div>

                        <div>
                            <Label htmlFor="online" className="font-semibold md:text-xl text-lg text-dark-blue">
                                Online service
                            </Label>
                            <p className="text-light-purple md:text-base text-sm">Access to multiplayer games</p>
                        </div>
                    </section>

                    <div>
                        <span className="block">+1$/mo</span>
                        <span className="block">+10$/yr</span>
                    </div>
                </section>

                <section className="border-2 border-light-purple rounded-lg my-2 md:my-4 flex items-center gap-4 justify-between px-4 py-2">
                    <div className="flex gap-4 items-center">
                        <section>
                            <Checkbox 
                                id="storage"
                                className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                            />
                        </section>

                        <div>
                            <Label htmlFor="storage" className="font-semibold md:text-xl text-lg text-dark-blue">
                                Larger Storage
                            </Label>
                            <p className="text-light-purple md:text-base text-sm">Extra 1TB of cloud save</p>
                        </div>
                    </div>

                    <div>
                        <span className="block">+2$/mo</span>
                        <span className="block">+20$/yr</span>
                    </div>
                </section>

                <section className="border-2 border-light-purple rounded-lg my-2 md:my-4 flex items-center gap-4 justify-between px-4 py-2">
                    <section className="flex gap-4 items-center">
                        <div>
                            <Checkbox 
                                id="custom"
                                className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                            />
                        </div>

                        <div>
                            <Label htmlFor="custom" className="font-semibold md:text-xl text-lg text-dark-blue">
                                Customizable profile
                            </Label>
                            <p className="text-light-purple md:text-base text-sm">Custom theme on your profile</p>
                        </div>
                    </section>

                    <div>
                        <span className="block">+2$/mo</span>
                        <span className="block">+20$/yr</span>
                    </div>
                </section>
            </div>
        </section>
    )
}