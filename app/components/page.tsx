import { AnimatedModalDemo } from "@/components/customUI/AnimatedModalDemo";
import { BentoGridDemo } from "@/components/customUI/BentoGridDemo";
import { BentoGridThirdDemo } from "@/components/customUI/BentoGridThirdDemoTwo";
import Footer from "@/components/customUI/footer";
import { cn } from "@/utils/utils";

export default function Components() {
    return (
        <>
            <div
                className={cn(
                    "rounded-md flex flex-col md:flex-col bg-gray-100 dark:bg-neutral-900 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-y-auto",
                    "h-screen"
                )}
            >
                <BentoGridThirdDemo />
                <BentoGridDemo />

                {/* <AnimatedModalDemo /> */}
                <div>
                    <Footer />
                    {/* <p>footer</p> */}
                </div>
            </div>

        </>
    )

}