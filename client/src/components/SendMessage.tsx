"use client";

import { SendHorizontalIcon, Smile } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { toast } from "sonner";
import useSWRMutation from "swr/mutation";
import { addMessageFetcher } from "@/lib/fetchers";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "./Icons";

const FormSchema = z.object({
  message: z.string().min(1, {
    message: "Oops! You can't send an empty message :-P",
  }),
});

const SendMessage = () => {
  const [submittedOnce, setSubmittedOnce] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { trigger, isMutating } = useSWRMutation(
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_API_URL_PROD
      : process.env.NEXT_PUBLIC_API_URL_DEV,
    addMessageFetcher
  );

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      await trigger(data.message);
      toast("Message sent. Have a nice day!");
      setSubmittedOnce(true);
    } catch (e) {
      toast("Oops! There was a problem sending your message. Try again?");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="scroll-m-20 text-xl font-semibold tracking-tight">
                Send me an anonymous message!
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={10}
                  className="resize-none leading-7 [&:not(:first-child)]:mt-6"
                  placeholder="Don't be shy, let them fingers type..."
                  {...field}
                />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={submittedOnce}
            className={cn(
              "w-full flex py-6 gap-5 leading-7 [&:not(:first-child)]:mt-6",
              {
                "text-md": !submittedOnce,
                "text-sm text-muted": submittedOnce,
              }
            )}
          >
            {!submittedOnce ? (
              <>
                Send
                <SendHorizontalIcon />
              </>
            ) : isMutating ? (
              <Icons.Loader className="w-7 h-7" />
            ) : (
              <>Spam proof too hehe</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SendMessage;
