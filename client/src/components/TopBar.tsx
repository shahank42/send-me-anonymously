import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { buttonVariants } from "./ui/button";
import { GithubIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const TopBar = () => {
  return (
    <div className="flex justify-end py-4 gap-2">
      <Link
        href="https://github.com/shahank42/send-me-anonymously"
        className={cn("flex gap-2", buttonVariants({ variant: "outline" }))}
      >
        <GithubIcon />
        GitHub
      </Link>
      <ThemeToggle />
    </div>
  );
};

export default TopBar;
