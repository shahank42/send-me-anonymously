import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SendMessage from "@/components/SendMessage";
import ToolsTable from "@/components/ToolsTable";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col h-[100dvh] justify-between">
          <TopBar />
          <div>
            <SendMessage />
          </div>
          <div className="flex flex-col gap-3">
            <span className="scroll-m-20 text-md tracking-tight">Made using</span>
            <ToolsTable />
          </div>
          <Footer />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
