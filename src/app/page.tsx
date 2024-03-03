"use client";

import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "@/components/footer";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Home() {
  const cmps = [
    {
      label: "Company's Name",
      placeholder: "Company's Name",
    },
    {
      label: "Company's Linkedin",
      placeholder: "Company's Linkedin",
    },
    {
      label: "Company's Website",
      placeholder: "Company's Website",
    },
    {
      label: "Company's Industry",
      placeholder: "Company's Industry",
    },
  ];

  const infos = [
    {
      label: "Company's description",
      placeholder: "Company's description",
      id: "1",
    },
    {
      label: "What are your company goals",
      placeholder: "",
      id: "2",
    },
    {
      label: "Headquarters",
      placeholder: "Delhi, India",
      id: "3",
    },
  ];

  const { handleSubmit } = useForm();

  return (
    <main className="w-full h-[fit-content]">
      <Navbar />
      <main className="mt-12 mx-5 md:mx-20 pb-10">
        <h1 className="text-3xl font-bold">Settings</h1>
        <div className="rounded-xl mt-5 w-[fit-content] bg-[#FAFAFA]">
          <ul className="flex sm:gap-5 gap-2 h-12 items-center sm:px-5 px-2 cursor-pointer">
            <li className="h-[80%] flex text-center items-center px-2 text-xs sm:text-base hover:active">
              Your Profile
            </li>
            <li className="h-[80%] flex text-center items-center px-2 bg-white drop-shadow-lg rounded-lg text-xs sm:text-base font-medium">
              Company Info
            </li>
            <li className="h-[80%] flex text-center items-center px-2 text-xs sm:text-base hover:active">
              Manage Seats
            </li>
            <li className="h-[80%] flex text-center items-center px-2 text-xs sm:text-base hover:active hidden lg:flex">
              Do not Contact
            </li>
            <li className="h-[80%] flex text-center items-center px-2 text-xs sm:text-base hover:active hidden lg:flex">
              Integration
            </li>
          </ul>
        </div>
        <section className="mt-5 h-[fit-content]">
          <div className="flex flex-col lg:flex-row items-center justify-between h-[8rem]">
            <div className="flex gap-5 w-full flex lg:hidden my-5">
              <Button variant="outline" className="w-1/2">
                Cancel
              </Button>
              <Button className="w-1/2" onClick={() => handleSubmit}>
                Save Changes
              </Button>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/picture/Company-Logos.svg"
                alt="companies logo"
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Button
                    variant="destructive"
                    className="md:text-base text-xs"
                  >
                    Remove
                  </Button>
                  <Button variant="outline" className="md:text-base text-xs">
                    Change Photo
                  </Button>
                </div>
                <h6 className="md:text-base text-xs text-[#17171F66]">
                  or drag and drop (SVG, PNG, JPG)
                </h6>
              </div>
            </div>
            <div className="flex gap-2 hidden lg:flex">
              <Button variant="outline">Cancel</Button>
              <Button onClick={() => handleSubmit}>Save Changes</Button>
            </div>
          </div>

          <div className="lg:mt-8 mt-20 grid md:grid-cols-2 md:grid-rows-2 gap-y-5 gap-x-20">
            {cmps.map((data, index) => (
              <form
                className="grid w-full max-w-xl items-center gap-1.5"
                key={index}
              >
                <Label htmlFor="text">{data.label}</Label>
                <Input
                  type="text"
                  id={data.placeholder}
                  placeholder={data.placeholder}
                />
              </form>
            ))}
          </div>

          <div className="mt-10">
            <h5 className="font-medium">Employee Count</h5>
            <ToggleGroup
              type="single"
              variant="outline"
              className="flex gap-3 w-[fit-content] mt-2"
            >
              <ToggleGroupItem value="1-10" className="text-xs sm:text-base">
                1-10
              </ToggleGroupItem>
              <ToggleGroupItem value="10-100" className="text-xs sm:text-base">
                10-100
              </ToggleGroupItem>
              <ToggleGroupItem value="100-500" className="text-xs sm:text-base">
                100-500
              </ToggleGroupItem>
              <ToggleGroupItem value="1000+" className="text-xs sm:text-base">
                1000+
              </ToggleGroupItem>
            </ToggleGroup>
            <div></div>
          </div>

          <div className="mt-10 flex flex-col gap-10">
            {infos.map((data, index) => (
              <form className="grid w-full items-center gap-1.5" key={index}>
                <Label htmlFor="email">{data.label}</Label>
                <Input
                  type="text"
                  id={data.id}
                  placeholder={data.placeholder}
                />
              </form>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:gap-20 gap-5">
            <div className="flex flex-col text-start w-full sm:w-1/2">
              <Select>
                <h1>Funding Round</h1>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seed" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="banana">Series-A</SelectItem>
                    <SelectItem value="blueberry">Series-B</SelectItem>
                    <SelectItem value="grapes">Series-C</SelectItem>
                    <SelectItem value="pineapple">IPO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-1/2 sm:mt-[-.1rem] mt-0">
              <Label htmlFor="faqs">FAQs</Label>
              <Input type="text" id="faqs" placeholder="" className="w-full" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </main>
  );
}
