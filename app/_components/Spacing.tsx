import { cn } from "@/lib/utils";

export type SpacingProps = {
    height: number;
};

export const Spacing = ({size = "md"}) => {
    return <div className={cn({
        "h-8 lg:h-16": size === "sm",
        "h-16 md:h-32": size === "md",
        "h-32 lg:h-64": size === "lg",       
    })}/>
    ;}