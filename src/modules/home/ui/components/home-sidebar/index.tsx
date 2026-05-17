import { Sidebar, SidebarContent } from "@/components/frontend/ui/sidebar";
import { MainSection } from "./main-section";

import { PersonalSection } from "./personal-section";
import { Separator } from "@/components/frontend/ui/separator";

export const HomeSideBar = () => {
  return (
    <Sidebar className="pt-16 z-40 border-none" collapsible="icon">
      <SidebarContent className="bg-background">
        <MainSection />
        <Separator />
        <PersonalSection />
      </SidebarContent>
    </Sidebar>
  );
};
