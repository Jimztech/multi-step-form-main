import Image from "next/image";

export default function ThankYou() {
    return (
        <section className="flex flex-col items-center">
            <Image 
                src="/icon-thank-you.svg"
                alt="thank you icon"
                width={40}
                height={40}
                className="block my-2"
            />

            <h1 className="text-dark-blue font-bold text-2xl md:text-4xl">Thank you!</h1>
            <p className="text-destructive-grey md:py-2">
                Thanks for confirming your subscription! we hope you have
                fun using our platform. If you ever need support, please feel 
                free to email us at support@loremgaming.com.
            </p>
        </section>
    )
}