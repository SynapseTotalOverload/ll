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
import { BackgroundGradient } from "@/components/ui/background-gradient";

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
      id="contact-us-home"
      style={{ backgroundImage: `url(${Footer.src})` }}
      className="cover flex min-h-screen w-full flex-1 flex-col gap-4 py-8 sm:py-12 md:py-16 lg:py-[80px]"
    >
      <div className="container grid grid-cols-1 gap-8 px-4 sm:px-8 md:px-12 lg:grid-cols-2 lg:gap-0 lg:px-[120px]">
        <div className="flex flex-col gap-3 sm:gap-4">
          <span className="bricolage text-[28px] leading-[120%] font-[700] tracking-[-2px] normal-case sm:text-[36px] md:text-[42px] lg:text-[50px]">
            Contact Us
          </span>
          <span className="text-[18px] font-[700] text-white sm:text-[20px] md:text-[22px] lg:text-[24px]">
            Don&apos;t be left behind
          </span>
          <span className="font-[700] text-white">
            Stay up to date with the latest news and offers from LogicCraft!
          </span>
        </div>
        <InfoCard className="min-h-[500px] p-4 sm:min-h-[550px] sm:p-6 md:min-h-[580px] md:p-7 lg:min-h-[600px] lg:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex h-full flex-col justify-evenly">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-white">Full Name</FormLabel>
                    <FormControl>
                      <Input variant="outline" placeholder="Name Surname" {...field} />
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
                      <Input variant="outline" placeholder="Email" {...field} />
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
                      <Input variant="outline" placeholder="Phone" {...field} />
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
                      <Textarea placeholder="Your message..." {...field} />
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

              <BackgroundGradient>
                <Button type="submit" className="bg-opacity-100-black w-full rounded-full border py-3 text-white">
                  Send
                </Button>
              </BackgroundGradient>
            </form>
          </Form>
        </InfoCard>
      </div>
    </div>
  );
}
