import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"
import { cn } from "@/lib/utils"

const Code = ({className,...props}: ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("bg-accent/32 font-mono border border-accent p-1 text-primary rounded-sm")}{...props}/>
}

export const Hero = () => {
    return <Section className="flex max-lg:flex-col items-start">
        <div className="flex-[2]">
            <h2 className="font-caption text-6xl text-primary">Matheo Bayle</h2>
            <h3 className="font-caption text-3xl">Student at Ynov Campus</h3>
            <p>i Love watch stream on <Code>Twitch</Code></p>
        </div >
    </Section>
}