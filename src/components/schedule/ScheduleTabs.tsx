
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SeaBusSchedule } from "./SeaBusSchedule";
import { PortoSantoSchedule } from "./PortoSantoSchedule";
import { DesertasSchedule } from "./DesertasSchedule";
import { ScheduleInfo } from "./ScheduleInfo";

export const ScheduleTabs = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Tabs defaultValue="seabus" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="seabus">SeaBus</TabsTrigger>
          <TabsTrigger value="porto-santo">Porto Santo</TabsTrigger>
          <TabsTrigger value="desertas">Desertas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="seabus">
          <SeaBusSchedule />
        </TabsContent>
        
        <TabsContent value="porto-santo">
          <PortoSantoSchedule />
        </TabsContent>
        
        <TabsContent value="desertas">
          <DesertasSchedule />
        </TabsContent>
      </Tabs>
      
      <ScheduleInfo />
    </div>
  );
};
