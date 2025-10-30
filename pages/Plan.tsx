import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { title } from "process";
import Image from "next/image";

const features = [
    {
        id: "arcade",
        icon: "/icon-arcade.svg",
        title: "Arcade",
        content: "$9/mo",
    },
    {
        id: "advanced",
        icon: "/icon-advanced.svg",
        title: "Advanced",
        content: "$12/mo",
    },
    {
        id: "pro",
        icon: "/icon-pro.svg",
        title: "Pro",
        content: "$15/mo",
    },
] 



export default function Plan() {
    return(
        <section className="">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>

            <div className="md:flex md:gap-6 md:items-center">
                {features.map((feature) => (
                    <div key={feature.id} className="flex flex-col gap-4 border-2 border-light-purple my-4 md:p-6">
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
                                <p className="text-light-purple">{feature.content}</p>
                            </div>
                        </section>
                    </div>
                ))}
            </div>
        </section>
    )
}