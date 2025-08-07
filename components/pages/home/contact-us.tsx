"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PaperclipIcon } from "lucide-react";
import InfoCard from "@/components/modules/info-card";
import Footer from "@/public/assets/footer-hero.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
  attachment: z.any().optional(),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

export default function ContactUs() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      privacyPolicy: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <div
      style={{ backgroundImage: `url(${Footer.src})` }}
      className="cover flex h-screen w-full flex-col gap-4 px-[120px] py-[80px]"
    >
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="bricolage text-[50px] leading-[120%] font-[700] tracking-[-2px] normal-case">
            Contact Us
          </span>
          <span className="text-[24px] font-[700] text-white">Don&apos;t be left behind</span>
          <span className="font-[700] text-white">
            Stay up to date with the latest news and offers from LogicCraft!
          </span>
        </div>
        <InfoCard className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-white">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name Surname"
                        className="border-[#292929] bg-[#1D1D1E] text-white placeholder:text-gray-400 focus:border-blue-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-white">Your Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        className="border-[#292929] bg-[#1D1D1E] text-white placeholder:text-gray-400 focus:border-blue-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-white">Your Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone"
                        className="border-[#292929] bg-[#1D1D1E] text-white placeholder:text-gray-400 focus:border-blue-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message..."
                        className="min-h-[100px] border-[#292929] bg-[#1D1D1E] text-white placeholder:text-gray-400 focus:border-blue-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex cursor-pointer items-center gap-2 text-white">
                <PaperclipIcon className="h-4 w-4" />
                <span className="text-sm">Add an attachment (pdf, doc, docx)</span>
              </div>

              <FormField
                control={form.control}
                name="privacyPolicy"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-[#292929] data-[state=checked]:bg-blue-500"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-white">
                        Yes, I have read and agree to LogicCraft Privacy Policy
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full rounded-lg border border-blue-500 bg-[#1D1D1E] py-3 text-white hover:bg-[#292929]"
              >
                Send
              </Button>
            </form>
          </Form>
        </InfoCard>
      </div>
    </div>
  );
}
