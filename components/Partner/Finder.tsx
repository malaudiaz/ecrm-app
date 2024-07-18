"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


import { FieldValues } from "react-hook-form"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
    code: "001"
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
    code: "002"
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
    code: "003"
  },
  {
    value: "remix",
    label: "Remix",
    code: "004"
  },
  {
    value: "astro",
    label: "Astro",
    code: "005"
  },
  {
    value: "flask",
    label: "Flask",
    code: "006"
  },
  {
    value: "django",
    label: "DJango",
    code: "007"
  },
  {
    value: "fastapi",
    label: "FastApi",
    code: "008"
  },
  {
    value: "odoo",
    label: "Odoo",
    code: "009"
  },
  {
    value: "beta",
    label: "Beta",
    code: "010"
  },
  {
    value: "test",
    label: "Test",
    code: "011"
  },
]


interface ComboboxProps {
  field: FieldValues
}


export function ComboboxDemo({field}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-[650px] p-0 peer block rounded-md border border-neutral-200 py-[9px] text-sm outline-sky-500 placeholder:text-neutral-500">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  // setValue(currentValue === value ? "" : currentValue)
                  setValue(currentValue)
                  field.onChange(currentValue)                  
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
