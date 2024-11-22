import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import { cn } from "@/lib/utils"


const ShinyTextDemo = () => {

    return (
        <div className="z-10 hidden md:flex items-center justify-center">
        <div
          className={cn(
            "group rounded-full text-base text-white cursor-default transition-all ease-in",
          )}
        >
          <AnimatedShinyText className=" 
          items-center 
          justify-center 
           py-1 transition ease-out
            hover:text-neutral-600 
            hover:duration-300
             hover:dark:text-neutral-400">
            
            ⭐{" "}   ⭐{" "}   ⭐{" "}   ⭐{" "}   ⭐
          </AnimatedShinyText>
        </div>
      </div>
    )
}

export default ShinyTextDemo