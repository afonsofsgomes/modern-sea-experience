import * as React from "react"
import { cva } from "class-variance-authority"
import { Circle, Check, Command, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex h-full w-64 flex-col fixed top-0 left-0 border-r bg-secondary/50 backdrop-blur-sm text-secondary-foreground",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Sidebar.displayName = "Sidebar"

const SidebarNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("flex flex-col space-y-1 px-2 py-4", className)}
      ref={ref}
      {...props}
    />
  )
})
SidebarNav.displayName = "SidebarNav"

const SidebarNavItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => {
  return (
    <a
      className={cn(
        "flex items-center gap-2 rounded-md p-2 text-sm font-semibold transition-colors hover:bg-secondary/80 focus:bg-secondary/80",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </a>
  )
})
SidebarNavItem.displayName = "SidebarNavItem"

const SidebarNavSubmenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, title, children, ...props }, ref) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className={cn("flex flex-col space-y-1", className)} ref={ref} {...props}>
      <Button variant="ghost" className="justify-between" onClick={() => setOpen(!open)}>
        {title}
        <ChevronRight className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-90")} />
      </Button>
      <div className={cn("flex flex-col pl-4 pt-1 transition-all duration-200 overflow-hidden", open ? "h-auto" : "h-0")}>
        {children}
      </div>
    </div>
  )
})
SidebarNavSubmenu.displayName = "SidebarNavSubmenu"

const SidebarNavBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, variant, ...props }, ref) => {
  const badgeVariants = cva(
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants: {
        variant: {
          default:
            "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
          success: "bg-green-500 hover:bg-green-600 text-white",
          warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
          danger: "bg-red-500 hover:bg-red-600 text-white",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  )

  return (
    <div className={cn(badgeVariants({ variant }))} ref={ref} {...props} />
  )
})
SidebarNavBadge.displayName = "SidebarNavBadge"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "mt-auto border-t p-4",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarThemeToggle = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className={cn("w-full justify-start font-normal", className)}
      ref={ref}
      {...props}
    >
      Dark Mode
    </Button>
  )
})
SidebarThemeToggle.displayName = "SidebarThemeToggle"

const SidebarSubscription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "rounded-md border p-4",
        className
      )}
      ref={ref}
      {...props}
    >
      <h4 className="mb-2 font-semibold">
        Upgrade to Pro
      </h4>
      <p className="text-sm text-muted-foreground">
        Unlock all features and get unlimited access.
      </p>
      <Button className="mt-4 w-full">
        Upgrade
      </Button>
    </div>
  )
})
SidebarSubscription.displayName = "SidebarSubscription"

const SidebarSettings = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "space-y-4",
        className
      )}
      ref={ref}
      {...props}
    >
      <div className="pb-4">
        <h4 className="mb-2 font-semibold">
          Appearance
        </h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-md border p-4">
            <div className="flex items-center space-x-2">
              <Circle className="h-4 w-4" />
              <p className="text-sm font-medium leading-none">
                Light
              </p>
            </div>
            <Check className="h-4 w-4 text-green-500" />
          </div>
          <div className="flex items-center justify-between rounded-md border p-4">
            <div className="flex items-center space-x-2">
              <Circle className="h-4 w-4" />
              <p className="text-sm font-medium leading-none">
                Dark
              </p>
            </div>
            <Check className="h-4 w-4 text-green-500" />
          </div>
          <div className="flex items-center justify-between rounded-md border p-4">
            <div className="flex items-center space-x-2">
              <Circle className="h-4 w-4" />
              <p className="text-sm font-medium leading-none">
                System
              </p>
            </div>
            <Check className="h-4 w-4 text-green-500" />
          </div>
        </div>
      </div>
      <div className="pb-4">
        <h4 className="mb-2 font-semibold">
          Language
        </h4>
        {/* @ts-expect-error */}
        <Command>
          {/* @ts-expect-error */}
          <CommandList>
            {/* @ts-expect-error */}
            <CommandGroup heading="Suggestions">
              {/* @ts-expect-error */}
              <CommandItem>
                English
              </CommandItem>
              {/* @ts-expect-error */}
              <CommandItem>
                German
              </CommandItem>
              {/* @ts-expect-error */}
              <CommandItem>
                French
              </CommandItem>
              {/* @ts-expect-error */}
              <CommandItem>
                Spanish
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  )
})
SidebarSettings.displayName = "SidebarSettings"

export { Sidebar, SidebarNav, SidebarNavItem, SidebarNavSubmenu, SidebarNavBadge, SidebarFooter, SidebarThemeToggle, SidebarSubscription, SidebarSettings }
