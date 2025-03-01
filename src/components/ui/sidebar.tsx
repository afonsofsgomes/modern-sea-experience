import * as React from "react"
import {
  AlignJustify,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Copy,
  Github,
  HelpCircle,
  Laptop,
  Moon,
  Palette,
  Plus,
  Settings,
  Sun,
  User,
  X,
} from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className, ...props }: SidebarProps) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className={cn("hidden border-r bg-background md:block", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Dashboard
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="justify-start w-full">
              <AlignJustify className="mr-2 h-4 w-4" />
              <span>Overview</span>
            </Button>
            <Button variant="ghost" className="justify-start w-full">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Button>
            <Button variant="ghost" className="justify-start w-full">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Components
          </h2>
          <div className="space-y-1">
            <AccordionDemo />
            <AlertDialogDemo />
            <AspectRatioDemo />
            <AvatarDemo />
            <BadgeDemo />
            <ButtonDemo />
            <CalendarDemo />
            <CardDemo />
            <CheckboxDemo />
            <ComboboxDemo />
            <CommandDemo />
            <ContextMenuDemo />
            <DialogDemo />
            <DropdownMenuDemo />
            <FormDemo />
            <InputDemo />
            <LabelDemo />
            <PopoverDemo />
            <RadioGroupDemo />
            <ScrollAreaDemo />
            <SelectDemo />
            <SeparatorDemo />
            <SheetDemo />
            <SkeletonDemo />
            <SliderDemo />
            <SwitchDemo />
            <TableDemo />
            <TabsDemo />
            <TextareaDemo />
            <ToastDemo />
            <TooltipDemo />
          </div>
        </div>
      </div>
      <MobileSidebar />
    </div>
  )
}

function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
        >
          <AlignJustify className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:w-64">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <SheetHeader>
              <SheetTitle className="text-lg font-semibold tracking-tight">
                Dashboard
              </SheetTitle>
            </SheetHeader>
            <div className="space-y-1">
              <Button variant="ghost" className="justify-start w-full">
                <AlignJustify className="mr-2 h-4 w-4" />
                <span>Overview</span>
              </Button>
              <Button variant="ghost" className="justify-start w-full">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Button>
              <Button variant="ghost" className="justify-start w-full">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Button>
            </div>
          </div>
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Components
            </h2>
            <div className="space-y-1">
              <AccordionDemo />
              <AlertDialogDemo />
              <AspectRatioDemo />
              <AvatarDemo />
              <BadgeDemo />
              <ButtonDemo />
              <CalendarDemo />
              <CardDemo />
              <CheckboxDemo />
              <ComboboxDemo />
              <CommandDemo />
              <ContextMenuDemo />
              <DialogDemo />
              <DropdownMenuDemo />
              <FormDemo />
              <InputDemo />
              <LabelDemo />
              <PopoverDemo />
              <RadioGroupDemo />
              <ScrollAreaDemo />
              <SelectDemo />
              <SeparatorDemo />
              <SheetDemo />
              <SkeletonDemo />
              <SliderDemo />
              <SwitchDemo />
              <TableDemo />
              <TabsDemo />
              <TextareaDemo />
              <ToastDemo />
              <TooltipDemo />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button 
                variant="ghost" 
                size="sm"
                className="h-9 w-9 p-0"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function TooltipDemo() {
  return (
    <TooltipProvider>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="justify-start w-full">
            Tooltip
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Tooltip</h4>
              <p className="text-sm text-muted-foreground">
                This is a tooltip.
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  )
}

function ToastDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      Toast
    </Button>
  )
}

function TextareaDemo() {
  return (
    <div className="grid gap-2">
      <Button variant="ghost" className="justify-start w-full">
        Textarea
      </Button>
    </div>
  )
}

function TabsDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      Tabs
    </Button>
  )
}

function TableDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      Table
    </Button>
  )
}

function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" className="justify-start w-full">
        Switch
      </Button>
    </div>
  )
}

function SliderDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      Slider
    </Button>
  )
}

function SkeletonDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      Skeleton
    </Button>
  )
}

function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="justify-start w-full">
          Sheet
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

function SeparatorDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      Separator
    </Button>
  )
}

function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  )
}

function ScrollAreaDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      ScrollArea
    </Button>
  )
}

function RadioGroupDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      RadioGroup
    </Button>
  )
}

function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="justify-start w-full">
          Popover
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Popover</h4>
            <p className="text-sm text-muted-foreground">
              This is a popover.
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function LabelDemo() {
  return (
    <div className="flex flex-col space-y-1.5">
      <Button variant="ghost" className="justify-start w-full">
        Label
      </Button>
    </div>
  )
}

function InputDemo() {
  return (
    <div className="grid gap-2">
      <Button variant="ghost" className="justify-start w-full">
        Input
      </Button>
    </div>
  )
}

function FormDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      Form
    </Button>
  )
}

function DropdownMenuDemo() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="justify-start w-full">
          Dropdown Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HelpCircle className="mr-2 h-4 w-4" />
          <span>Support</span>
          <DropdownMenuShortcut>⌘?</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Palette className="mr-2 h-4 w-4" />
            <span>Theme</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup onValueChange={setTheme} defaultValue="system">
              <DropdownMenuRadioItem value="light">
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="system">
                <Laptop className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="justify-start w-full">
          Dialog
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function ContextMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="justify-start w-full">
          Context Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          Copy
          <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Paste
          <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Undo
          <DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Redo
          <DropdownMenuShortcut>⇧⌘Z</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function CommandDemo() {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="justify-start w-full">
          Command
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Plus className="mr-2 h-4 w-4" />
                Create
              </CommandItem>
              <CommandItem>
                <Copy className="mr-2 h-4 w-4" />
                Duplicate
              </CommandItem>
              <CommandItem>
                <Github className="mr-2 h-4 w-4" />
                Clone
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ]

  return (
    <Command>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Select framework..."}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup heading="Frameworks">
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  onSelect={() => {
                    setValue(framework.value)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </PopoverContent>
      </Popover>
    </Command>
  )
}

function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" className="justify-start w-full">
        Checkbox
      </Button>
    </div>
  )
}

function CardDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      Card
    </Button>
  )
}

function CalendarDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          <Calendar className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={setValue}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

function ButtonDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      Button
    </Button>
  )
}

function BadgeDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      Badge
    </Button>
  )
}

function AvatarDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      Avatar
    </Button>
  )
}

function AspectRatioDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      Aspect Ratio
    </Button>
  )
}

function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" className="justify-start w-full">
          Alert Dialog
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

function AccordionDemo() {
  return (
    <Button variant="ghost" className="justify-start w-full">
      Accordion
    </Button>
  )
}

import * as React from "react"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { TooltipProvider } from "@/components/ui/tooltip"
