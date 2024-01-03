import { TOOLS } from "@/config";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Trigger = ({ tool }: { tool: (typeof TOOLS)[number] }) => (
  <li
    className={cn(
      buttonVariants({ variant: "outline" }),
      "w-10 h-10 p-0 cursor-pointer"
    )}
  >
    <tool.Icon className="w-5 h-5" />
  </li>
);

const Description = ({ tool }: { tool: (typeof TOOLS)[number] }) => (
  <>
    <div className="flex gap-2 items-center">
      <tool.Icon className="w-5 h-5" />
      <span className="text-md scroll-m-20 font-semibold tracking-tight">
        {tool.name}
      </span>
    </div>
    <span className="text-sm leading-6 [&:not(:first-child)]:mt-3">
      {tool.description}
    </span>
  </>
);

const ToolsTable = () => {
  return (
    <>
      <ul className="hidden md:flex justify-between">
        {TOOLS.map((tool) => (
          <HoverCard key={tool.name}>
            <HoverCardTrigger asChild>
              <Trigger tool={tool} />
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-col gap-1">
              <Description tool={tool} />
            </HoverCardContent>
          </HoverCard>
        ))}
      </ul>

      <ul className="flex md:hidden justify-between">
        {TOOLS.map((tool) => (
          <Popover key={tool.name}>
            <PopoverTrigger asChild>
              <Trigger tool={tool} />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-1">
              <Description tool={tool} />
            </PopoverContent>
          </Popover>
        ))}
      </ul>
    </>
  );
};

export default ToolsTable;
