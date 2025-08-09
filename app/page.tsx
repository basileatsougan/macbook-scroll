import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
    <MacbookScroll
    src="/track.jpg" 
    badge="New Feature"

    title="Welcome to Basile tracking UI app"
    
    />
    </div>
  );
}
