import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { PythonIcon } from "./icons/PythonIcon";
import { ReactIcon } from "./icons/ReactIcon";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight firs:mt-0">
                I love working on...
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div >
                    <div className="flex flex-col gap-2">
                        <PythonIcon size={42}/>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">Python</h3>
                    <p className="text-sm text-muted-foreground">Python was the first language I learned, and it's the one I've grown with the most as a developer.</p>
                </div>
                <div>
                    <div className="flex flex-col gap-2">
                        <ReactIcon size={42}/>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight">React</h3>
                    <p className="text-sm text-muted-foreground">I've been using React, and though I'm new to it, I enjoy working with it.</p>
                </div>
            
            </div>
        </Section>
    );
};