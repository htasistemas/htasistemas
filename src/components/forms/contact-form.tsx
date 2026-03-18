import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  contactSchema,
  type ContactFormValues,
  simulateSubmit,
} from "@/components/forms/form-utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatWhatsApp } from "@/lib/utils";

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      institution: "",
      whatsapp: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    await simulateSubmit();
    toast.success("Mensagem enviada com sucesso.", {
      description: `Recebemos sua mensagem, ${values.name}. Retornaremos em breve.`,
    });
    form.reset();
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-panel lg:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-800">Nome</label>
          <Input placeholder="Seu nome" {...form.register("name")} />
          {form.formState.errors.name ? (
            <p className="mt-2 text-sm text-red-500">
              {form.formState.errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-800">
            Empresa ou instituição
          </label>
          <Input
            placeholder="Nome da organização"
            {...form.register("institution")}
          />
          {form.formState.errors.institution ? (
            <p className="mt-2 text-sm text-red-500">
              {form.formState.errors.institution.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-800">WhatsApp</label>
          <Controller
            name="whatsapp"
            control={form.control}
            render={({ field }) => (
              <Input
                placeholder="(00) 00000-0000"
                value={field.value}
                onChange={(event) => field.onChange(formatWhatsApp(event.target.value))}
              />
            )}
          />
          {form.formState.errors.whatsapp ? (
            <p className="mt-2 text-sm text-red-500">
              {form.formState.errors.whatsapp.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-800">E-mail</label>
          <Input type="email" placeholder="voce@empresa.com" {...form.register("email")} />
          {form.formState.errors.email ? (
            <p className="mt-2 text-sm text-red-500">
              {form.formState.errors.email.message}
            </p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-800">
            Mensagem
          </label>
          <Textarea
            placeholder="Conte o que sua operação precisa resolver."
            {...form.register("message")}
          />
          {form.formState.errors.message ? (
            <p className="mt-2 text-sm text-red-500">
              {form.formState.errors.message.message}
            </p>
          ) : null}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full md:w-auto"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mensagem"
        )}
      </Button>
    </form>
  );
}
