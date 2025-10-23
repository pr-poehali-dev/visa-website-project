import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const countries = [
    { name: 'США', flag: '🇺🇸', description: 'Туристические и бизнес-визы', price: 'от $199', popular: true },
    { name: 'Великобритания', flag: '🇬🇧', description: 'Все типы виз и документов', price: 'от $249', popular: true },
    { name: 'Шенген', flag: '🇪🇺', description: '26 европейских стран', price: 'от $149', popular: true },
    { name: 'Канада', flag: '🇨🇦', description: 'Туризм, учёба, работа', price: 'от $229' },
    { name: 'Австралия', flag: '🇦🇺', description: 'Туристические визы', price: 'от $279' },
    { name: 'Япония', flag: '🇯🇵', description: 'Туризм и бизнес', price: 'от $169' }
  ];

  const services = [
    { icon: 'FileCheck', title: 'Подготовка документов', description: 'Полное сопровождение сбора и оформления всех необходимых документов' },
    { icon: 'Calendar', title: 'Запись на визу', description: 'Помощь в записи на собеседование и подаче документов' },
    { icon: 'Plane', title: 'Срочное оформление', description: 'Ускоренное получение визы в короткие сроки' },
    { icon: 'Shield', title: 'Гарантия качества', description: 'Возврат средств при отказе по нашей вине' }
  ];

  const prices = [
    { country: 'США', tourist: '$199', business: '$299', urgent: '$399' },
    { country: 'Великобритания', tourist: '$249', business: '$349', urgent: '$449' },
    { country: 'Шенген', tourist: '$149', business: '$249', urgent: '$349' },
    { country: 'Канада', tourist: '$229', business: '$329', urgent: '$429' }
  ];

  const testimonials = [
    { name: 'Анна Смирнова', text: 'Получили визу в США за 2 недели! Всё прошло гладко, спасибо команде за профессионализм.', rating: 5 },
    { name: 'Дмитрий Козлов', text: 'Отличный сервис! Помогли с документами для Шенгена, всё объяснили понятно.', rating: 5 },
    { name: 'Елена Петрова', text: 'Оформляли визу в Канаду всей семьёй. Всё прошло без проблем, рекомендую!', rating: 5 }
  ];

  const faqs = [
    { q: 'Сколько времени занимает оформление визы?', a: 'В среднем от 7 до 21 рабочего дня в зависимости от страны и типа визы. Доступно срочное оформление за дополнительную плату.' },
    { q: 'Какие документы нужны для визы?', a: 'Основной пакет: загранпаспорт, фото, анкета, справка с работы, выписка со счёта. Полный список зависит от страны назначения.' },
    { q: 'Что делать если отказали в визе?', a: 'Мы анализируем причины отказа и помогаем подготовить документы для повторной подачи. Если отказ произошёл по нашей вине - возвращаем деньги.' },
    { q: 'Можно ли оформить визу срочно?', a: 'Да, предлагаем услугу срочного оформления для большинства стран. Сроки сокращаются до 3-7 дней.' },
    { q: 'Нужно ли приезжать в офис?', a: 'Нет, работаем онлайн. Консультация, подготовка документов и подача - всё дистанционно. В офис приезжать не обязательно.' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center">
                <Icon name="Plane" className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold text-secondary">VISA AGENCY</span>
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors font-medium">Услуги</button>
              <button onClick={() => scrollToSection('countries')} className="text-foreground hover:text-primary transition-colors font-medium">Страны</button>
              <button onClick={() => scrollToSection('prices')} className="text-foreground hover:text-primary transition-colors font-medium">Цены</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">О нас</button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors font-medium">Отзывы</button>
              <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors font-medium">FAQ</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">Консультация</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-orange-50/50 to-white"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                <Icon name="Star" size={14} className="mr-1" />
                Более 5000 успешных виз
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-secondary leading-tight">
                Ваш надёжный партнёр в мире виз
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Профессиональное оформление виз в любую страну мира. Быстро, надёжно, с гарантией результата.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="text-lg px-8">
                  Получить консультацию
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('countries')}>
                  Выбрать страну
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Виз оформлено</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Одобрений</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in hidden md:block">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-orange-400/30 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full border-4 border-primary/20 rounded-3xl"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/548e317b-c3f3-45a8-a3b8-fe823f15a11e/files/354b393d-bd2c-45ac-b7bf-c6b5256d7aa9.jpg" 
                  alt="Visa Services"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border-2 border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon name="CheckCircle" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Успешных виз</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4">Услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Что мы предлагаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по оформлению виз для любых целей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="group border-2 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all"></div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="countries" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 text-9xl">✈️</div>
          <div className="absolute bottom-40 right-20 text-8xl">🌍</div>
          <div className="absolute top-1/2 right-1/4 text-7xl">🎫</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4">Направления</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Популярные страны</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Оформляем визы в более чем 50 стран мира
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, idx) => (
              <Card key={idx} className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl group hover:-translate-y-2 bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-100/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {country.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-primary text-white">Популярно</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{country.flag}</div>
                    <div>
                      <CardTitle className="text-2xl">{country.name}</CardTitle>
                      <div className="text-2xl font-bold text-primary mt-1">{country.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{country.description}</CardDescription>
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-colors" variant="outline">
                    Оформить визу
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-orange-100/50 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4">Прайс-лист</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Стоимость услуг</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-400 to-primary"></div>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2">
                        <th className="text-left p-4 font-bold text-lg">Страна</th>
                        <th className="text-center p-4 font-bold text-lg">Туристическая</th>
                        <th className="text-center p-4 font-bold text-lg">Бизнес</th>
                        <th className="text-center p-4 font-bold text-lg">Срочная</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prices.map((row, idx) => (
                        <tr key={idx} className="border-b hover:bg-gradient-to-r hover:from-primary/5 hover:to-orange-50/50 transition-all duration-200">
                          <td className="p-4 font-semibold">{row.country}</td>
                          <td className="text-center p-4 text-primary font-bold">{row.tourist}</td>
                          <td className="text-center p-4 text-primary font-bold">{row.business}</td>
                          <td className="text-center p-4 text-primary font-bold">{row.urgent}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="text-center text-muted-foreground mt-6">
              * Консульские сборы оплачиваются отдельно
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">О компании</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Почему мы?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-gradient-to-br from-white to-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Опыт с 2015 года</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    9 лет успешной работы на рынке визовых услуг. Знаем все тонкости оформления виз.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-gradient-to-br from-white to-orange-50/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Персональный подход</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    За каждым клиентом закрепляется личный менеджер, который ведёт дело от начала до конца.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-gradient-to-br from-white to-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Быстрые сроки</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Оформляем документы в максимально короткие сроки. Доступна срочная подача за 3-7 дней.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-gradient-to-br from-white to-orange-50/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="ShieldCheck" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Гарантия качества</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    98% одобренных виз. При отказе по нашей вине - полный возврат средств.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Что говорят клиенты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 5000 довольных клиентов по всей России
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((review, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group bg-gradient-to-br from-white via-white to-orange-50/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">💬</div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={18} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{review.text}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-10 left-20 text-8xl opacity-5">❓</div>
        <div className="absolute bottom-20 right-20 text-9xl opacity-5">💡</div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Частые вопросы</h2>
              <p className="text-xl text-muted-foreground">
                Ответы на самые популярные вопросы о визах
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-2 rounded-xl px-6 bg-white hover:shadow-lg transition-all duration-300 hover:border-primary group">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pt-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-primary/5">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                      <div className="text-muted-foreground">+7 (800) 555-35-35</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-muted-foreground">info@visaagency.ru</div>
                      <div className="text-muted-foreground">support@visaagency.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Тверская, д. 10</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00 - 19:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-orange-50/30">
                <CardHeader>
                  <CardTitle>Оставить заявку</CardTitle>
                  <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" className="border-2" />
                    </div>
                    <div>
                      <Input placeholder="Телефон" className="border-2" />
                    </div>
                    <div>
                      <Input placeholder="Email" className="border-2" />
                    </div>
                    <div>
                      <Textarea placeholder="Ваше сообщение" className="border-2 min-h-[100px]" />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить заявку
                      <Icon name="Send" size={18} className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Plane" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">VISA AGENCY</span>
              </div>
              <p className="text-white/80">Ваш надёжный партнёр в оформлении виз с 2015 года</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/80">
                <li>Туристические визы</li>
                <li>Бизнес визы</li>
                <li>Срочное оформление</li>
                <li>Подготовка документов</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-white/80">
                <li>О нас</li>
                <li>Отзывы</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@visaagency.ru</li>
                <li>г. Москва, ул. Тверская, д. 10</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2025 Visa Agency. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;