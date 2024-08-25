import { BentoGridDemo } from "@/components/customUI/BentoGridDemo";
import { cn } from "@/utils/utils";

export default function Components() {
    return (
        <>
            <div
                className={cn(
                    "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-900 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-y-auto",
                    "h-screen" 
                )}
            >
                <BentoGridDemo />
            </div>;
        </>
    )

}