import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  type LeadFormValues,
  leadSchema,
  simulateSubmit,
} from "@/components/forms/form-utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatWhatsApp } from "@/lib/utils";

interface LeadFormProps {
  title?: string;
  description?: string;
}

export function LeadForm({ title, description }: LeadFormProps) {
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      institution: "",
      whatsapp: "",
      email: "",
    },
  });

  const onSubmit = async (values: LeadFormValues) => {
    await simulateSubmit();
    toast.success("Solicitação enviada com sucesso.", {
      description: `Recebemos o interesse de ${values.name} e retornaremos em breve.`,
    });
    form.reset();
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="rounded-[30px] border border-white/15 bg-white/12 p-6 shadow-panel backdrop-blur-xl"
    >
      {title ? (
        <div className="mb-6">
          <h3 className="font-display text-xl font-bold text-white md:text-2xl">{title}</h3>
          {description ? (
            <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
          ) : null}
        </div>
      ) : null}

      <div className="grid gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-white">Nome</label>
          <Input
            placeholder="Seu nome"
            className="border-white/15 bg-white/95"
            {...form.register("name")}
          />
          {form.formState.errors.name ? (
            <p className="mt-2 text-sm text-red-200">
              {form.formState.errors.name.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Empresa ou instituição
          </label>
          <Input
            placeholder="Nome da organização"
            className="border-white/15 bg-white/95"
            {...form.register("institution")}
          />
          {form.formState.errors.institution ? (
            <p className="mt-2 text-sm text-red-200">
              {form.formState.errors.institution.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">WhatsApp</label>
          <Controller
            name="whatsapp"
            control={form.control}
            render={({ field }) => (
              <Input
                placeholder="(00) 00000-0000"
                className="border-white/15 bg-white/95"
                value={field.value}
                onChange={(event) => field.onChange(formatWhatsApp(event.target.value))}
              />
            )}
          />
          {form.formState.errors.whatsapp ? (
            <p className="mt-2 text-sm text-red-200">
              {form.formState.errors.whatsapp.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">E-mail</label>
          <Input
            type="email"
            placeholder="voce@instituicao.com"
            className="border-white/15 bg-white/95"
            {...form.register("email")}
          />
          {form.formState.errors.email ? (
            <p className="mt-2 text-sm text-red-200">
              {form.formState.errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        variant="success"
        className="mt-6 w-full"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Solicitar demonstração"
        )}
      </Button>
    </form>
  );
}
