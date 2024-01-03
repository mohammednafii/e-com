"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingBag } from "lucide-react"
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

 
export function ShoppingCard() {

  console.log(ShoppingCard);
  return (
    <Sheet >
      <SheetTrigger asChild >
        <Button  
        variant={"outline"}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              card
            </span></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>you items</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              
            </ul>
          </div>
        </div>

      </SheetContent>
    </Sheet>
  )
}
