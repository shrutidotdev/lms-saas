import { Button } from "@/components/ui/button"

export const GetStartedBtn = () => {
    return(
         <Button 
        className="bg-[var(--foreground)] text-[var(--background)] mt-4 rounded-3xl hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-all duration-200 ease-in-out " 
        size={"lg"}
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
    )
} 