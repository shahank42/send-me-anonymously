import { TOOLS } from "@/config";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const ToolsTable = () => {
  return (
    <ul className="flex justify-between">
      {TOOLS.map((tool) => (
        <HoverCard key={tool.name}>
          <HoverCardTrigger asChild>
            <li
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-10 h-10 p-0 cursor-pointer"
              )}
            >
              <tool.Icon className="w-5 h-5" />
            </li>
          </HoverCardTrigger>
          <HoverCardContent className="flex flex-col gap-1">
            <span className="text-md scroll-m-20 font-semibold tracking-tight">
              {tool.name}
            </span>
            <span className="text-sm leading-6 [&:not(:first-child)]:mt-3">
              {tool.description}
            </span>
          </HoverCardContent>
        </HoverCard>
      ))}
    </ul>
  );
};

export default ToolsTable;
