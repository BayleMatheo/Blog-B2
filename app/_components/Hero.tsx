import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"
import { cn } from "@/lib/utils"

const Code = ({className,...props}: ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("bg-accent/32 font-mono border border-accent p-1 text-primary rounded-sm", className)} {...props} />
}

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start py-16 px-6">
            <div className="flex-[3] space-y-6">
                <h2 className="font-caption text-6xl text-primary leading-tight">
                    Matheo Bayle
                </h2>
                <h3 className="font-caption text-3xl text-primary">
                    Student at Ynov Campus
                </h3>
                <p className="text-lg leading-relaxed">
                I am a dynamic student at Bordeaux Ynov Campus, passionate about IT and cybersecurity. Actively seeking an apprenticeship, I aim to build on my strong foundation in computer science and apply my skills in a professional environment. My interest in cybersecurity began in high school, and I am eager to tackle challenges in network security, cryptography, and ethical hacking.
                </p>
                <p className="text-lg leading-relaxed">
                Known for my curiosity, dedication, and adaptability, I thrive in team settings and am confident that an apprenticeship will refine my abilities while offering valuable industry insights. Always eager to learn, I am ready to contribute to a forward-thinking organization.
                </p>
            </div>
        </Section>
    )
}
