import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const technologies = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "PostgreSQL", level: 88 },
    { name: "AWS", level: 75 }
  ];

  const services = [
    {
      icon: "Code2",
      title: "Frontend разработка",
      description: "Создание современных интерфейсов на React, Vue.js и Angular с адаптивным дизайном"
    },
    {
      icon: "Server",
      title: "Backend разработка",
      description: "Разработка серверной логики, API и баз данных на Node.js и Python"
    },
    {
      icon: "Smartphone",
      title: "Мобильная разработка",
      description: "Кроссплатформенные мобильные приложения на React Native и Flutter"
    },
    {
      icon: "Globe",
      title: "Веб-приложения",
      description: "Полнофункциональные веб-приложения с современной архитектурой и высокой производительностью"
    }
  ];

  const projects = [
    {
      title: "E-commerce платформа",
      description: "Полнофункциональный интернет-магазин с админ-панелью",
      tech: ["React", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Система управления задачами",
      description: "Корпоративное приложение для управления проектами",
      tech: ["Vue.js", "Python", "MongoDB"],
      link: "#"
    },
    {
      title: "Мобильное приложение",
      description: "iOS/Android приложение для бронирования услуг",
      tech: ["React Native", "Firebase"],
      link: "#"
    }
  ];

  const reviews = [
    {
      name: "Анна Смирнова",
      company: "ООО 'Технологии'",
      text: "Отличная работа! Проект сдан вовремя и соответствует всем требованиям.",
      rating: 5
    },
    {
      name: "Михаил Петров",
      company: "StartupXYZ",
      text: "Профессиональный подход, качественный код и понятная архитектура.",
      rating: 5
    },
    {
      name: "Елена Козлова",
      company: "Digital Agency",
      text: "Рекомендую! Высокое качество разработки и отличная коммуникация.",
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: "Современные тренды в веб-разработке 2024",
      excerpt: "Обзор самых актуальных технологий и подходов в разработке",
      date: "15 марта 2024",
      readTime: "5 мин"
    },
    {
      title: "Оптимизация производительности React приложений",
      excerpt: "Практические советы по улучшению скорости работы приложений",
      date: "28 февраля 2024",
      readTime: "8 мин"
    },
    {
      title: "TypeScript: лучшие практики для больших проектов",
      excerpt: "Как правильно структурировать типы в крупных приложениях",
      date: "10 февраля 2024",
      readTime: "6 мин"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">WebDev.Pro</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
              <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
              <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Создаю <span className="text-primary">современные</span> веб-решения
              </h1>
              <p className="text-xl text-gray-600 text-body">
                Fullstack разработчик с опытом 5+ лет. Специализируюсь на создании 
                высокопроизводительных веб-приложений с современной архитектурой.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Обсудить проект
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Мое портфолио
                  <Icon name="ExternalLink" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/img/99e1a088-3868-47a1-93e4-90f7863c6795.jpg" 
                alt="Веб-разработчик"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Технологии</h2>
            <p className="text-xl text-gray-600 text-body max-w-2xl mx-auto">
              Использую передовые технологии для создания надежных и масштабируемых решений
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{tech.name}</h3>
                  <span className="text-sm text-gray-500">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <img 
              src="/img/5c992900-06a6-49d2-bbd4-4481eb927275.jpg" 
              alt="Технологии веб-разработки"
              className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Услуги</h2>
            <p className="text-xl text-gray-600 text-body max-w-2xl mx-auto">
              Предлагаю полный спектр услуг по разработке веб-приложений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-body">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Обо мне</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 text-body">
                  Привет! Я — опытный веб-разработчик с более чем 5-летним опытом создания 
                  современных веб-приложений. Специализируюсь на fullstack разработке, 
                  используя самые актуальные технологии.
                </p>
                <p className="text-lg text-gray-600 text-body">
                  За время работы я реализовал более 50 проектов различной сложности — 
                  от landing pages до сложных корпоративных систем. Мой подход основан 
                  на clean code, современной архитектуре и внимании к деталям.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-gray-600">Проектов</div>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-gray-600">Лет опыта</div>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">30+</div>
                    <div className="text-gray-600">Клиентов</div>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-gray-600">Качество</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Проекты</h2>
            <p className="text-xl text-gray-600 text-body max-w-2xl mx-auto">
              Примеры моих работ — от простых landing pages до сложных веб-приложений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-body">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Подробнее
                    <Icon name="ExternalLink" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Блог</h2>
            <p className="text-xl text-gray-600 text-body max-w-2xl mx-auto">
              Делюсь знаниями и опытом в области веб-разработки
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <Separator orientation="vertical" className="h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-body">{post.excerpt}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы</h2>
            <p className="text-xl text-gray-600 text-body max-w-2xl mx-auto">
              Что говорят мои клиенты о совместной работе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-body italic">"{review.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600 text-body max-w-2xl mx-auto">
              Готов обсудить ваш проект. Свяжитесь со мной удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-600 text-body">dev@example.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Телефон</div>
                  <div className="text-gray-600 text-body">+7 (999) 123-45-67</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="MessageSquare" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Telegram</div>
                  <div className="text-gray-600 text-body">@webdev_pro</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Написать сообщение</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Тема</label>
                  <Input placeholder="Тема сообщения" />
                </div>
                <div>
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." className="min-h-32" />
                </div>
                <Button className="w-full">
                  Отправить сообщение
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-semibold mb-4 md:mb-0">WebDev.Pro</div>
            <div className="text-gray-400 text-center text-body">
              © 2024 Все права защищены. Создано с ❤️ для ваших проектов
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;