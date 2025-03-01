import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, ChevronsUpDown, Plus, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SidebarProps {
  defaultLayout?: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize?: number;
  children: React.ReactNode;
  breakpoints?: Record<string, boolean>;
  onLayoutChange?(sizes: number[]): void;
}

export function Sidebar({
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize = 4,
  onLayoutChange,
  children,
  breakpoints,
}: SidebarProps) {
  const isTablet = breakpoints?.md ?? false;
  const isMobile = breakpoints?.sm ?? false;

  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const [showSidebar, setShowSidebar] = React.useState(false);
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();

  function formatTimeRange(date: Date, position: "start" | "end"): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes}`;
  }

  function formatDateRange(date: Date): string {
    return format(date, "LLL dd");
  }

  return (
    <>
      {isMobile ? (
        <>
          <button
            onClick={() => setShowSidebar(true)}
            className="fixed bottom-4 right-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-md"
          >
            <Plus />
          </button>
          <Dialog open={showSidebar} onOpenChange={setShowSidebar}>
            <DialogContent
              onEscapeKeyDown={closeSidebar}
              onPointerDownOutside={closeSidebar}
              className="h-full max-w-[90vw] border-none p-0 shadow-none transition-transform sm:max-w-[90vw]"
            >
              <div className="container flex size-full flex-col py-3">
                <div className="mb-4 flex items-center justify-between border-b pb-3">
                  <DialogTitle className="text-muted-foreground">
                    Filters
                  </DialogTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeSidebar}
                    className="mr-2"
                  >
                    <X />
                  </Button>
                </div>
                <div className="flex-1 overflow-y-auto no-scrollbar">
                  {children}
                </div>
                <DialogFooter className="gap-3 border-t pt-3">
                  <Button variant="secondary" size="sm" className="w-full">
                    Reset
                  </Button>
                  <Button size="sm" className="w-full">
                    Apply
                  </Button>
                </DialogFooter>
              </div>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <>
          <div
            data-state={isCollapsed ? "collapsed" : "expanded"}
            className="relative hidden border-r bg-background transition-all duration-300 ease-in-out data-[state=collapsed]:w-4 sm:block dark:bg-slate-950"
            style={{
              width: isCollapsed ? navCollapsedSize : defaultLayout[0],
            }}
          >
            <div className="flex size-full flex-col py-6 pl-6 pr-4">
              <div className="mb-6 flex items-center justify-between">
                <div className="text-xl font-medium">Filters</div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="mr-2"
                >
                  {isCollapsed ? <Plus /> : <X />}
                </Button>
              </div>
              <div
                data-state={isCollapsed ? "collapsed" : "expanded"}
                className="flex-1 overflow-y-auto data-[state=collapsed]:invisible"
              >
                {children}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export function SidebarFilters() {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();

  return (
    <>
      <div className="mb-8">
        <h3 className="font-medium">Date range</h3>
        <div className="mt-3 grid gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="from" className="text-xs text-muted-foreground">
              From
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="from"
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "w-full justify-start border bg-transparent text-left font-normal hover:bg-transparent hover:text-foreground",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? (
                    format(startDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="to" className="text-xs text-muted-foreground">
              To
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="to"
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "w-full justify-start border bg-transparent text-left font-normal hover:bg-transparent hover:text-foreground",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="font-medium">Time range</h3>
        <div className="mt-3 grid gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="time-from" className="text-xs text-muted-foreground">
              From
            </Label>
            <Select>
              <SelectTrigger
                id="time-from"
                className="border bg-transparent"
              >
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="09:00">09:00</SelectItem>
                <SelectItem value="09:30">09:30</SelectItem>
                <SelectItem value="10:00">10:00</SelectItem>
                <SelectItem value="10:30">10:30</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="time-to" className="text-xs text-muted-foreground">
              To
            </Label>
            <Select>
              <SelectTrigger
                id="time-to"
                className="border bg-transparent"
              >
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="11:00">11:00</SelectItem>
                <SelectItem value="11:30">11:30</SelectItem>
                <SelectItem value="12:00">12:00</SelectItem>
                <SelectItem value="12:30">12:30</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="font-medium">Duration</h3>
        <div className="mt-3 grid gap-3">
          <div className="grid grid-cols-2 gap-3">
            <Label
              className="flex h-10 cursor-pointer items-center justify-center rounded-md border bg-muted/50 px-4 py-2 text-sm"
              htmlFor="1h-or-less"
            >
              <input
                type="checkbox"
                id="1h-or-less"
                className="peer sr-only"
              />
              <Circle className="mr-1 size-4 transition-all peer-checked:hidden" />
              <Check className="mr-1 hidden size-4 transition-all peer-checked:block" />
              <span>1h or less</span>
            </Label>
            <Label
              className="flex h-10 cursor-pointer items-center justify-center rounded-md border bg-muted/50 px-4 py-2 text-sm"
              htmlFor="1-to-4-hours"
            >
              <input
                type="checkbox"
                id="1-to-4-hours"
                className="peer sr-only"
              />
              <Circle className="mr-1 size-4 transition-all peer-checked:hidden" />
              <Check className="mr-1 hidden size-4 transition-all peer-checked:block" />
              <span>1 to 4 hours</span>
            </Label>
            <Label
              className="flex h-10 cursor-pointer items-center justify-center rounded-md border bg-muted/50 px-4 py-2 text-sm"
              htmlFor="4-to-8-hours"
            >
              <input
                type="checkbox"
                id="4-to-8-hours"
                className="peer sr-only"
              />
              <Circle className="mr-1 size-4 transition-all peer-checked:hidden" />
              <Check className="mr-1 hidden size-4 transition-all peer-checked:block" />
              <span>4 to 8 hours</span>
            </Label>
            <Label
              className="flex h-10 cursor-pointer items-center justify-center rounded-md border bg-muted/50 px-4 py-2 text-sm"
              htmlFor="8h-or-more"
            >
              <input
                type="checkbox"
                id="8h-or-more"
                className="peer sr-only"
              />
              <Circle className="mr-1 size-4 transition-all peer-checked:hidden" />
              <Check className="mr-1 hidden size-4 transition-all peer-checked:block" />
              <span>8h or more</span>
            </Label>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="font-medium">Experience type</h3>
        <div className="mt-3 space-y-2">
          <Label
            className="flex cursor-pointer items-center rounded-md border bg-muted/50 px-4 py-2 text-sm"
            htmlFor="walking-tour"
          >
            <input
              type="checkbox"
              id="walking-tour"
              className="peer sr-only"
            />
            <Circle className="mr-1 size-4 transition-all peer-checked:hidden" />
            <Check className="mr-1 hidden size-4 transition-all peer-checked:block" />
            <span>Walking tour</span>
          </Label>
          <Label
            className="flex cursor-pointer items-center rounded-md border bg-muted/50 px-4 py-2 text-sm"
            htmlFor="sightseeing"
          >
            <input
              type="checkbox"
              id="sightseeing"
              className="peer sr-only"
            />
            <Circle className="mr-1 size-4 transition-all peer-checked:hidden" />
            <Check className="mr-1 hidden size-4 transition-all peer-checked:block" />
            <span>Sightseeing</span>
          </Label>
          <Label
            className="flex cursor-pointer items-center rounded-md border bg-muted/50 px-4 py-2 text-sm"
            htmlFor="activites"
          >
            <input
              type="checkbox"
              id="activites"
              className="peer sr-only"
            />
            <Circle className="mr-1 size-4 transition-all peer-checked:hidden" />
            <Check className="mr-1 hidden size-4 transition-all peer-checked:block" />
            <span>Activities</span>
          </Label>
          <Label
            className="flex cursor-pointer items-center rounded-md border bg-muted/50 px-4 py-2 text-sm"
            htmlFor="food-and-drink"
          >
            <input
              type="checkbox"
              id="food-and-drink"
              className="peer sr-only"
            />
            <Circle className="mr-1 size-4 transition-all peer-checked:hidden" />
            <Check className="mr-1 hidden size-4 transition-all peer-checked:block" />
            <span>Food & drink</span>
          </Label>
          <Label
            className="flex cursor-pointer items-center rounded-md border bg-muted/50 px-4 py-2 text-sm"
            htmlFor="entertainment"
          >
            <input
              type="checkbox"
              id="entertainment"
              className="peer sr-only"
            />
            <Circle className="mr-1 size-4 transition-all peer-checked:hidden" />
            <Check className="mr-1 hidden size-4 transition-all peer-checked:block" />
            <span>Entertainment</span>
          </Label>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-medium">Location</h3>
        <div className="mt-3">
          <div className="flex items-center space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-between border bg-transparent hover:bg-transparent hover:text-foreground"
                >
                  <span>Select a location</span>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="min-w-[200px] p-0"
              >
                <Command>
                  <CommandList>
                    <CommandGroup>
                      <CommandItem onSelect={(currentValue) => console.log(currentValue)}>
                        London
                      </CommandItem>
                      <CommandItem onSelect={(currentValue) => console.log(currentValue)}>
                        Paris
                      </CommandItem>
                      <CommandItem onSelect={(currentValue) => console.log(currentValue)}>
                        New York
                      </CommandItem>
                      <CommandItem onSelect={(currentValue) => console.log(currentValue)}>
                        Rome
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
}

export function SidebarHeaderMobile() {
  return (
    <div className="mb-6 px-6 md:hidden">
      <div className="flex items-center justify-between border-b pb-2">
        <div className="text-lg font-medium">Filters</div>
      </div>
    </div>
  );
}
