
import { ScheduleHeader } from './ScheduleHeader';
import { ScheduleDayCard } from '@/components/schedule/ScheduleDayCard';
import { ScheduleNotice } from '@/components/schedule/ScheduleNotice';
import { BookingButton } from './BookingButton';

export const ScheduleDisplay = () => {
  // Data for Tuesday, Saturday, Sunday schedule
  const weekendSchedule = [
    {
      departureTime: "09:00",
      returnTime: "18:15",
      origin: "Calheta",
      destination: "Funchal",
      duration: "1h 15m"
    },
    {
      departureTime: "09:00",
      returnTime: "17:00",
      origin: "Calheta",
      destination: "Caniçal",
      duration: "2h 30m"
    },
    {
      departureTime: "10:30",
      returnTime: "17:00",
      origin: "Funchal",
      destination: "Caniçal",
      duration: "1h"
    }
  ];

  // Data for Wednesday, Thursday, Friday schedule
  const weekdaySchedule = [
    {
      departureTime: "09:00",
      returnTime: "18:30",
      origin: "Caniçal",
      destination: "Funchal",
      duration: "1h"
    },
    {
      departureTime: "09:00",
      returnTime: "17:00",
      origin: "Caniçal",
      destination: "Calheta",
      duration: "2h 30m"
    },
    {
      departureTime: "10:15",
      returnTime: "17:00",
      origin: "Funchal",
      destination: "Calheta",
      duration: "1h 15m"
    }
  ];

  return (
    <section className="py-16 bg-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <ScheduleHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScheduleDayCard 
            title="Tuesday, Saturday, Sunday"
            departures={weekendSchedule}
            initialAnimation={{ x: -30 }}
          />
          
          <ScheduleDayCard 
            title="Wednesday, Thursday, Friday"
            departures={weekdaySchedule}
            initialAnimation={{ x: 30 }}
          />
        </div>
        
        <ScheduleNotice />
        
        <BookingButton />
      </div>
    </section>
  );
};
