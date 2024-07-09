import { AccordionComponent} from "@/components/Accordion/Accordion";
import { CommunityComponent } from "@/components/Community/Community";
import { FooterComponent } from "@/components/Footer/Footer";
import { VideoComponent } from "@/components/Video/Video";
import { NavbarComponent } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <CommunityComponent />
      <VideoComponent />
      <AccordionComponent />
      <FooterComponent/>
    </>
  );
}
