import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";

export default function ContactUsForm() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen px-2 sm:px-4">
      <Card className="relative w-full max-w-7xl flex flex-col lg:flex-row overflow-hidden rounded-3xl border border-solid border-[#d0d0d0] bg-white">
        {/* Image section, hidden on small screens */}
        <div className="relative hidden lg:block min-w-[300px]">
          <img
            className="h-full w-[350px] xl:w-[522px] object-cover"
            alt="Contact"
            src="/contact.png"
          />
        </div>

        <div className="flex-1 bg-[#f4f6fc] rounded-[30px]">
          <div className="flex flex-col gap-6 p-4 sm:p-8 md:p-12">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-5">
                  <h2 className="bg-[linear-gradient(90deg,rgba(34,104,223,1)_0%,rgba(29,125,189,1)_50%,rgba(24,145,155,1)_100%)] bg-clip-text text-[28px] sm:text-[34px] font-semibold tracking-[0.68px] text-transparent font-['Poppins',Helvetica]">
                    Contact us
                  </h2>
                  <Separator className="h-px w-full" />
                </div>

                <p className="text-[14px] sm:text-[15px] font-normal text-[#6c6c6c] font-['Poppins',Helvetica]">
                  Please complete the form below and we will get back to you as
                  soon as possible
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <Input
                        className="h-[48px] sm:h-[52px] rounded-[10px] border-[#e2e2e2] bg-white px-[18px] sm:px-[30px] py-[11px] sm:py-[13px] text-base font-normal text-[#5e6366] font-['Poppins',Helvetica]"
                        placeholder="Full Name*"
                      />
                    </div>
                    <div className="flex-1">
                      <Input
                        className="h-[48px] sm:h-[52px] rounded-[10px] border-[#e2e2e2] bg-white px-[18px] sm:px-[30px] py-[11px] sm:py-[13px] text-base font-normal text-[#5e6366] font-['Poppins',Helvetica]"
                        placeholder="Mobile No*"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <Input
                        className="h-[48px] sm:h-[52px] rounded-[10px] border-[#e2e2e2] bg-white px-[18px] sm:px-[30px] py-[11px] sm:py-[13px] text-base font-normal text-[#5e6366] font-['Poppins',Helvetica]"
                        placeholder="Email Id*"
                      />
                    </div>

                    <div className="flex-1">
                      <Select>
                        <SelectTrigger className="h-[48px] sm:h-[52px] rounded-[10px] border-[#e2e2e2] bg-white px-[18px] sm:px-[30px] py-[11px] sm:py-[13px] text-base font-normal text-[#5e6366] font-['Poppins',Helvetica]">
                          <SelectValue placeholder="Enquiry Type - For Course, General" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="course">For Course</SelectItem>
                          <SelectItem value="general">General</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Textarea
                  className="h-[100px] sm:h-[133px] rounded-[10px] border-[#e2e2e2] bg-white px-[14px] sm:px-[21px] py-[10px] sm:py-[15px] text-base font-normal text-[#5e6366] font-['Poppins',Helvetica]"
                  placeholder="Your Message..."
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button className="h-auto w-full sm:w-auto rounded-xl bg-figma-gradient px-8 sm:px-12 py-3 text-base font-semibold text-white">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}