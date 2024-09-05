import { Card, CardContent } from "@/components/ui/card"
import { Section } from "./Section"
import { ArrowUpRight, Code, Home, LucideIcon } from "lucide-react"
import Link from "next/link"

export const Status = () => {
    return <Section className="flex max-lg:flex-col items-start">
        <Card className="flex-[3] w-full p-4 flex flex-col gap-2">
        <p className="text-lg w-full text-muted-foreground">Project</p>
        <div className="flex flex-col gap-4">
            {PROJECT.map((project, index) => (
                <Project
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/" />
            ))}
        </div>
        </Card>
        <div className ="flex-[2] flex flex-col gap-4 w-full">
<Card className="p-4 flex-1 w-full">
            <p className="text-lg w-full text-muted-foreground">Work/Experiences</p>
            <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
                <Work
                key={index}
                image={work.image}
                title={work.title}
                date={work.date}
                role={work.role}
                url="/" />
            ))}
            </div>
            </Card>
            <Card className="p-4 flex-1 flex flex-col gap-2">
            <p className="text-sm w-full text-muted-foreground">Contact</p>
            <ContactCard name="Phone Number" image="https://i.pinimg.com/564x/e1/1e/8d/e11e8d261344dbd43cfa53874b3840f6.jpg  " mediumImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAADu7u7e3t4RERH6+vrp6en09PQ3Nzf7+/vm5uY0NDTi4uLr6+tWVlZTU1OZmZmOjo7GxsY7Ozunp6dPT09KSkp7e3twcHC/v7/Pz8+fn59nZ2fMzMxGRkZ1dXUmJiYXFxeysrKDg4OLi4ukpKQdHR0uLi5eXl4jIyMLCwuvr69iYmJpflA5AAAMoklEQVR4nO1d52LjKBB2k2XLJXJL4pa4Jo6d93++24QBoQYDHpB3T9+vu11Z4ltgZphGo1GjRo0aNWrUqFGjRo2/AmE3artB1A2rpTY8xJtep+kWnd4mPrT9kwunk2fH1NJ4nkxb/uh1bxev7Dgut8gLv+VTJfQYnpau6YWTCukxTFyu1uFLyVevHRe4lnztZeiIXyvHb/d6mm+HUXfUcoNRNxpu56fXXY6jk3lcpz8yiJf+lFUwjT/Tn4/Jv7H6kN+/OHgU3YDWYSwP4WtF+vbgKL27t+6SvhyP7ronjeMY0L25Lb342bm8VmIqGRoDMlPnlrx0Rrs2bLB6S4Zzo3llIkJ71c4fx3KQCFWC1wWJCUMvvyzRj8WYnu7ejKGQ0jNXetYGwxkf1uedOqu752+a0AyNDGIa93dJ9oTglGpkZJheCSiGnOCsKg2oQpev1I71Qg34Hhz3KUdGBiEEP23FDX/BhnRclNhwiWr3c64H32lHRYr3e/Ti7eFn8Ad8Fi2smzbfg/SjIgU/cBjbqAFYRjNCA94J+iBRB6YDhePS9RHVRBoR6MWj2c9WD6vo85jCWM2OPXCifxhbWwnw/32Y/AaMvpmrMREDtuIa/4sWzPsjnSZUGMJ48c6jl79pjf4gNtT78E/SczkmWvRBt2HjGjCFj+GywGFpNImwC9/cjokY4J7CnaMmxupldN58Xr/GcQWBTA5Q4DhPBHv2Gf3yNrd+/8x7dRYC+FExjy4NrZnE7/WDV/sx3ocpXng8mQnSbECqMlOd+eURR6HIzD54bWYxqCh/AmJj+qPCDfvgL/IEK6PYZV/XH4VZEgLS8SEIjteHufifXjULdfH78W/dYyEb5AH1TsGJaZYRd+/1KpnFA/u47tsgklA2LCf4IZb0uEqKYKnolABT9wPMGwXBxBoMOEVjnwIFmHtXp/SZ4sScKrgjLyWU+osK9yKbnYXmKdxMN4Qjp9nJLGhOsQKJCjtM/VAbt1uF8Zr34vWr24th8YjSYPJop33ZkhPMGxEV7sUdQg8wI1NrXHabCfKqs7K9+IoQIhuUOGpIyQJFgWYe0vG9F0+/X1WHIZj5Ote8KZMelQu+9StaqPPfj6o9hCzjd6t+EXfFnflU5gR0n8+i34W6/f1mR/kMG5fGiwiq/r0R8EyiRS6EWonSABea6hGQt2qXFZyvfl4kKI5zc1WF0oCRqb4IMlJ9dIIp/D1Nh9zYLlca1iFoc8DwR4pHIv0j/DXgxwl5flJeafAMNH9Ou5F+CTKT5qo8WYAg5dKIO2MVe5EiNQuFFgu0qYwaxjBraqbB1mUikpOFml2OQmn4SvdrdSgYgrySVKagmFuoPB3EV6SchiEsUvkRxV7sITY2HWgYXmQ5A+BB//xCBdFFlAeqAwnDPhvyOf2nyV7Mihtm6BrG2G1BwjAqlh2hsG4yf7EuWb5OQMIQHFq5Py8z4OYFi9oZSBiyOfnM/0WJAccONFonJg1IGLIwRdERrNiAY/4vT/FyEobMTjkV/VWR0mCL1FdaDgnDgWJOhNIQp/5ts2TbugEJQ/aOkshU1oDj2Uq+kjpIGLIhl7k5BMVfpcFn8MPXEZGE4VXJMLUXOUF/yXGEDMvjp2IvXoRLVefXogMJQ630FwuVwyDb7F6QMGTuNZVDNRxURZCG4ffvE8pTeyBTPKuepAYJQ0wES1qoXgnSMGRGylXzpX0FS7RBxBAkpPpL22oI0jAEh53at3SphiDpGV/plgjYM/5LUWj8NMx9powwgjnqP4eahiE70irjO0wa7WzGeB9oGMIEqd7CAskXy2HeARqGiPSxiX4huwENQ7DbVDPE5tCTb0YGEcOJ9hmW3lhBqj8RQ8ioViTjglXgv7SWiGFjr9tmKKvABagYQr6XwjXBPuS/gp+KISxTxdGdJfXt7YZ5B6gYgidDIUmWFS1TMoYTndKHlA7vGpGMYaQlALmnfhrIJSBjyE9H5ZFd2KqewoYCdAzBNlUIS/BjeK6TpmMIPkVFxw2QNZ7bMRAyhJCSwm26q0KcEjKE8EWzPKELFrLfWmlKhrF2EiGVxquvhpIhuGIUphvvq+Gz6pKSIU8cUuiDk/91SsowhK4L5e6mAJ7wlrdHzLBxZuNXuAy5X9hfTTgtQ9CJqvAnL6vxthWJGYJS/1I8ApbNzlcrUGKGPAdYYbvxfhWeUqLIGXJ9oPBtQ47YX5UTJeOknyFeAObHQCVnGIDxqQqD8m4EXg5S5AxFBZtinQYzjxTpGfIZUhXVctMArfmn8ffz+HizSZx2wBAcMkrHIXhPcfFEqef7xfzk5YChWKeqWjCuM5pP2uyv6b4pwdjec8GQlwh9qQbP1YpU1l6MeTONN8OCIicMuTxVZnJHYsxKGzVT1tg0bqHrhKHoXafMsIzE6lOI1DxB08o3NwyFUldmII5EntRbmWo5i4k7zWPR1MeoRNMRQ1H1q/T/BklT/GLHhiDI4iERT4w36XfjimELNJ6m6FdqfF4wBEFQLAVRaItfqK4Yiq2oyU2Qmte/Z+c7T9Cmrt8ZQyHlNZZZW7qJ4yWlOAoI2vTYcMdQtDnRpSLKLYkuQnOEoolIxnDgVajYheqQodg0Op/MMnWhyiZerra3ZIPmfm1YLu2SYYuPXGdMhvJdIFnkNrLhXnTJMDE+tdls7bccM4HycmmU0nDKUAhURMLeKpvsnmCRI2LSusAtQ+GT+UBEfrebLDV+QV15uTRiLzpmKNoLfmB+3o3liZwtW9pyaYTScM2Qe6aae9zvw+XkadfZDzbnn4UtqlDL96J2Fp0zFIbZ3iZFIV/5JoDtd+Oeoej/9WGTH1xeLo1VGh4YJkaLFcXShdoXSkP5Ah8MhX/UKoKv6HfDKSqzkLwwTGYR13oxjUDfY0N10PbDMDkH2oTwFf1uQNyoesF4YphQtHFzK3psAHnF+H0xFHqxebFoL9QvVRrQgEvh8vLGUHIqWSjG8n43L8XrN4E/hsJGtaoBLu13w96qCDp7ZJicNGxyoYMSvcjyrBSVgT4ZNiJxI93CvFa9pMcGc2UV9OTg8MqwEQoH6YemhV/RjwuVBqvQVYSw0AzVvb7QEP4li5VapDQgwKPwdiF6fWH6teGRyJuBsZmaN+B4HFIxOES/NlTPPTxWiWfNuORZLNQLoxh9NXWLFNNzD9U30WSYySXsz6bTmN6LXSCIWYJK0cYeIaz+lEJmprtR7MWx2GGaIB6i9yWuf6kR2sl10x+G6l8YcOP2Hv5LnZeD6V+K60FrhEC6H+LbLIkv12NDU6OC6UHLDrCFTZLsMZWugT8a6f+wZ0IQ1UcY2QvaEH05IhObHDiCngFBmB91RyNsP29TTOVuILHBPAZveIKoft7onuymCOTraDoTvMad4wmierLj++obY/gkcWy+ImXOO54grmeHwd0I5tim5MZgrl8pSXN7jGjA3Y3AnlKcUO7C/Evm2HxdKm38abIHUQlguPstTO4osUCQSezqXG4ly3U0l5QhyhxC3lFidM+MDfrpG7B+WL7Os0bU6pwKo+LqGZD3zJjdFWSHQy9L8mf7vEzi9fy8jk+bXfpv3pCCF3lXkOF9T5aYfhdwLAHWsYxu6Gt4Z5ctRvG1nJSEV/Q/NfrOLtN71+yxOu51/DYG5zj0vWvGd+fdg9VRkZgxmJicxGHYKKHEHvVV5xItj88F9J4nbbPOIQb3H1rcYXkv+sPD+jgesOP37ul43hoHPIzusPwr7yEF8wB5ZPjn75LlCmPgv4WOLUzvA/7373T+H9zLze2Df/du9Ubjy0T4Vg1Qb6p63Tx4hLO6G4zx4F3DDRU4pPJePfdfsQAvOTLN/OB5dBXdC4sH96iaX/HGC848Xb5hDe7Bsyj65wUg/hutmoDn0VndZMMjKp4bBRmBu1Mtm2+MH34W+QzabqWAh/7yWbsPAZEBbn95XbiHV/R8d17DQBTw7e8Is3Q5xQdU/SIqub9LZ3d5Nf3DGXCirP0+gn8WqgjD9x7ppDEULn/DYugCSOWt8aMciaXIQP56UAskmQaDx3BsLJOAMlETKqm8dUaZiGKHleRiJbuTry2FUp6rncep5FwdEDagCuS6yN66qiNVtJajVkdasbBKRW8XB1/NrRK0DqlEgC96j3WmqcPnZOnvLuNgOvlMf95JbKz10sxgtznNt8OoO2q5wagbDbfzXMj0jwh1tYSiHEfAteMCZRHGF5dWstQDqCpMnIuA5Vg/CmcY+9FV3ZtBGJ4Q3zePh7hwOlnoh0SIxWTq8Rp6jvYh3sw6+tHdhc5sEx98NrItQDiK2m4QjSqYtxo1atSoUaNGjRo1atjgP+iBlL4X+HQcAAAAAElFTkSuQmCC"
            description="07.80.55.43.73" />
            </Card>
        </div>
    </Section>
};

const ContactCard = (props:{
    image: string,
    mediumImage: string,
    name:string,
    description:string}
) => {
    return <Card className = "p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
        <div className="relative">
            <img src={props.image} alt={props.name} className="w-10 h-10" />
            <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full" />
        </div>
        <div>
        <p className="text-lg font-semibold">{props.name}</p>
        <p className="text-sm w-full text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16}/>
    </Card>
}

const PROJECT: ProjectProps[] = [
    {
        Logo: Code,
        title: "Project 1",
        description: "Description 1",
        url: "/"
    },
    {
        Logo: Code,
        title: "Project 2",
        description: "Description 2",
        url: "/"
    }
];

type ProjectProps = {
    Logo: LucideIcon, 
    title: string, 
    description: string,
    url: string
}

const Project = (props: ProjectProps) => {
    return (
    <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent transition-colors p-1 rounded-sm">
        <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo/>
        </span>
        <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm w-full text-muted-foreground">{props.description}</p>
        </div>
    </Link>
)};

const WORKS: WorkProps[] = [
    {
        image: "data:image/png;base64,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",
        title: "Intermarché",
        role: "multi-skilled operative",
        date: "Nov 2023 - Aug 2024",
        url: "/"
    },
];

type WorkProps = {
    image: string,  
    title: string, 
    role: string,
    date: string,
    url: string
}

const Work = (props: WorkProps) => {
    return (
    <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent transition-colors p-1 rounded-sm">
        <img 
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"   
        />
  
        <div>
        <p className="text-lg font-semibold">{props.title}</p>
        
        <p className="text-sm w-full text-muted-foreground">{props.role}</p>
        </div>
        <div className="ml-auto">
        <p className="text-sm w-full text-muted-foreground">{props.date}</p>
        </div>
    </Link>
)};