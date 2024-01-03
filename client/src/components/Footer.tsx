import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="py-3">
      <div className="flex justify-center text-xs text-muted-foreground h-5 items-center gap-2.5">
        <div className="flex items-center tracking-tight">
          &copy; 2023,
          <Button variant="link" className="p-1 text-muted-foreground" asChild>
            <Link href="https://x.com/shahankk42" className="text-xs p-0">
              shahank42
            </Link>
          </Button>
        </div>
        <Separator orientation="vertical" className="" />
        pls don&apos;t DOS me
      </div>
    </div>
  );
};

export default Footer;
