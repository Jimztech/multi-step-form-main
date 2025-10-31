import { FieldSeparator } from "@/components/ui/field"

export default function Finishing() {
    return(
        <section>
            <h1 className="text-dark-blue font-bold text-2xl md:text-4xl">Finishing up</h1>
            <p className="text-destructive-grey md:py-2">
                Double-check everything looks OK before confirming.
            </p>

            <section className="bg-high-light-blue my-4 rounded-lg">
                <section className="flex justify-between items-center p-2">
                    <div>
                        <p>
                            Arcade(Monthly)
                        </p>
                        <p className="underline">Change</p>
                    </div>

                    <div>
                        <p>$9/mo</p>
                    </div>
                </section>

                <FieldSeparator />

                <section className="p-2">
                    <div className="flex justify-between items-center">
                        <p>Online service</p>
                        <p>+$1/mo</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Larger storage</p>
                        <p>+$2/mo</p>
                    </div>
                </section>
            </section>

            <div className="flex justify-between items-center p-2">
                <p>Total(per month)</p>
                <p>+$12/mo</p>
            </div>
        </section>
    )
}