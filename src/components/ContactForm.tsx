import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя не должно превышать 50 символов"),
  email: z
    .string()
    .email("Введите корректный email адрес")
    .min(1, "Email обязателен для заполнения"),
  subject: z
    .string()
    .min(5, "Тема должна содержать минимум 5 символов")
    .max(100, "Тема не должна превышать 100 символов"),
  message: z
    .string()
    .min(10, "Сообщение должно содержать минимум 10 символов")
    .max(1000, "Сообщение не должно превышать 1000 символов"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // EmailJS конфигурация (пользователь должен будет настроить свои ключи)
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: "dev@example.com", // Email получателя
      };

      // Для демонстрации используем имитацию отправки
      // В реальном проекте нужно заменить на реальные ключи EmailJS:
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   templateParams,
      //   'YOUR_PUBLIC_KEY'
      // );

      // Имитация отправки письма
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Сообщение отправлено!",
        description: "Спасибо за обращение. Отвечу в течение 24 часов.",
        duration: 5000,
      });

      reset();
    } catch (error) {
      console.error("Ошибка отправки:", error);
      toast({
        title: "Ошибка отправки",
        description: "Что-то пошло не так. Попробуйте позже или свяжитесь напрямую.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Send" size={24} className="text-primary" />
          Написать сообщение
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Имя <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("name")}
                placeholder="Ваше имя"
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  {errors.name.message}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                {...register("email")}
                type="email"
                placeholder="your@email.com"
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Тема <span className="text-red-500">*</span>
            </label>
            <Input
              {...register("subject")}
              placeholder="Тема сообщения"
              className={errors.subject ? "border-red-500" : ""}
            />
            {errors.subject && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <Icon name="AlertCircle" size={14} />
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Сообщение <span className="text-red-500">*</span>
            </label>
            <Textarea
              {...register("message")}
              placeholder="Расскажите подробнее о вашем проекте..."
              className={`min-h-32 ${errors.message ? "border-red-500" : ""}`}
            />
            {errors.message && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <Icon name="AlertCircle" size={14} />
                {errors.message.message}
              </p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                Отправляю...
              </>
            ) : (
              <>
                <Icon name="Send" size={16} className="mr-2" />
                Отправить сообщение
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-blue-900 mb-1">Настройка EmailJS</p>
              <p className="text-blue-700">
                Для работы формы необходимо настроить EmailJS с вашими ключами. 
                Инструкции по настройке доступны в документации EmailJS.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;