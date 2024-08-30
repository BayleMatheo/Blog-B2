import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcons"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LinkedinIcon } from "./icons/LindekinIcon"

export const Header = () => {
    return(
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primarys">Bayle.com</h1>
                <div className="flex-1"/>
                <ul className="flex items-center gap-2">
                <Link href="https://github.com/BayleMatheo" className={cn(buttonVariants({variant: "outline"}), "size-8 p-0")}>
                <GithubIcon size={16} className="text-foreground"/>
                </Link>
                <Link href="https://www.linkedin.com/in/matheo-bayle-b1b367267/" className={cn(buttonVariants({variant: "outline"}), "size-8 p-0")}>
                <LinkedinIcon size={16} className="text-foreground"/>
                </Link>
                </ul>
            </Section>
        </header>
    )
}