import React from "react";
import { Slider } from "./ui/slider";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import ProductSearchBar from "./ProductSearchBar";
import Link from "next/link";
import SignInButton from "./SignInButton";

function MobileNavbarSlider({ categories }) {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <HiOutlineMenuAlt1 size={25} />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>Mobile Menu</SheetHeader>
          <SheetDescription>
            Manage all the important sections of this website from here.
          </SheetDescription>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex w-full">
              <ProductSearchBar onSheet={true} />
            </div>
            <div className="mt-4">
              <p className="underline underline-offset-8">Links</p>
            </div>
            <div className="flex justify-start items-center">
              <Link href="/">
                <SheetClose>Home</SheetClose>
              </Link>
            </div>
            <div className="flex justify-start items-center">
              <Link href="/about">
                <SheetClose>About</SheetClose>
              </Link>
            </div>

            <div className="flex justify-start items-center">
              <Link href="/faq">
                <SheetClose>FAQ's</SheetClose>
              </Link>
            </div>

            <div className="flex justify-start items-center">
              <Link href="/contact">
                <SheetClose>Contact</SheetClose>
              </Link>
            </div>

            <div className="mt-4">
              <p className="underline underline-offset-8">Categories</p>
            </div>

            {categories &&
              categories.map((category, index) => (
                <div className="flex justify-start items-center" key={index}>
                  <Link href={`/category/${category.categoryName}`}>
                    <SheetClose>{category.categoryName}</SheetClose>
                  </Link>
                </div>
              ))}

            {/* <div className="flex w-full">
              <SignInButton className="flex w-full" />
            </div> */}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbarSlider;
