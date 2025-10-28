import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      title: 'Складские комплексы',
      description: 'Надежные решения для хранения и логистики',
      features: ['Высокие потолки', 'Большие пролеты', 'Быстрая сборка', 'Любая площадь'],
      icon: 'Warehouse'
    },
    {
      title: 'Производственные цеха',
      description: 'Здания для промышленного производства',
      features: ['Мостовые краны', 'Усиленные фундаменты', 'Вентиляция', 'Освещение'],
      icon: 'Factory'
    },
    {
      title: 'Торговые павильоны',
      description: 'Современные здания для торговли',
      features: ['Витражное остекление', 'Готовые коммуникации', 'Современный дизайн', 'Парковка'],
      icon: 'Store'
    },
    {
      title: 'Офисные центры',
      description: 'Комфортные пространства для бизнеса',
      features: ['Эргономичная планировка', 'Энергосбережение', 'Кондиционирование', 'Безопасность'],
      icon: 'Building2'
    },
    {
      title: 'Спортивные объекты',
      description: 'Спортзалы, стадионы, ледовые арены',
      features: ['Большие пролеты', 'Трибуны', 'Освещение', 'Вентиляция'],
      icon: 'Trophy'
    },
    {
      title: 'Ангары и навесы',
      description: 'Защита техники и оборудования',
      features: ['Быстрый монтаж', 'Экономичность', 'Надежность', 'Любой размер'],
      icon: 'Home'
    }
  ];

  const advantages = [
    {
      title: 'Скорость строительства',
      description: 'Возведение здания за 2-4 недели благодаря заводской готовности конструкций',
      icon: 'Zap'
    },
    {
      title: 'Экономия до 40%',
      description: 'Снижение затрат на материалы, работы и сроки строительства',
      icon: 'Wallet'
    },
    {
      title: 'Надежность',
      description: 'Сейсмостойкость до 9 баллов, расчет на снеговые и ветровые нагрузки',
      icon: 'Shield'
    },
    {
      title: 'Качество производства',
      description: 'Контроль на каждом этапе, сертифицированные материалы и технологии',
      icon: 'Award'
    },
    {
      title: 'Всесезонность',
      description: 'Монтаж при любой температуре, круглогодичное строительство',
      icon: 'Snowflake'
    },
    {
      title: 'Гарантия 10 лет',
      description: 'Полная гарантия на конструкции и работы, техническая поддержка',
      icon: 'CheckCircle2'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Обсуждаем ваши задачи, проводим осмотр участка, предлагаем решения'
    },
    {
      number: '02',
      title: 'Проектирование',
      description: 'Разрабатываем проект с учетом всех требований и нормативов'
    },
    {
      number: '03',
      title: 'Производство',
      description: 'Изготавливаем конструкции на собственном заводе с контролем качества'
    },
    {
      number: '04',
      title: 'Монтаж',
      description: 'Возводим здание под ключ с соблюдением сроков и технологий'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Building2" size={36} className="text-primary" />
              <div>
                <div className="text-2xl font-bold text-primary">SimpleLand</div>
                <div className="text-xs text-muted-foreground">Быстровозводимые здания</div>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('products')} className="text-sm font-medium hover:text-primary transition-colors">Продукция</button>
              <button onClick={() => scrollToSection('advantages')} className="text-sm font-medium hover:text-primary transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('process')} className="text-sm font-medium hover:text-primary transition-colors">Этапы</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="hidden md:inline-flex">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
                Производство и строительство с 2010 года
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Быстровозводимые здания
                <span className="block text-primary mt-2">под ключ</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Проектируем и строим склады, производственные цеха, торговые и офисные здания. 
                От идеи до готового объекта за 2-4 недели.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
                  Получить консультацию
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('products')} className="text-lg px-8">
                  Наши решения
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 p-6 bg-white rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Построенных объектов</div>
                </div>
                <div className="text-center border-x">
                  <div className="text-4xl font-bold text-primary mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Гарантия качества</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right relative">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/f6225a51-0c86-488d-89f3-904193aeffb6/files/9f0afb92-8b25-43e6-b30f-89fc3e242174.jpg" 
                alt="Быстровозводимое здание SimpleLand" 
                className="rounded-2xl shadow-2xl w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша продукция</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр быстровозводимых зданий для различных отраслей бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 hover:border-primary group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={product.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Преимущества работы с SimpleLand
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="flex gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={advantage.icon} size={28} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Этапы работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              От первого звонка до сдачи объекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Ответим на все вопросы и рассчитаем стоимость вашего проекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-slide-in-left">
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Расскажите о вашем проекте" rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 animate-slide-in-right">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@simpleland.ru</p>
                      <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Строителей, 15</p>
                      <p className="text-sm text-muted-foreground">Офис и производство</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={32} className="text-primary" />
                <span className="text-xl font-bold">SimpleLand</span>
              </div>
              <p className="text-slate-400 text-sm">
                Производитель быстровозводимых зданий с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Складские комплексы</li>
                <li>Производственные цеха</li>
                <li>Торговые павильоны</li>
                <li>Офисные центры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>О нас</li>
                <li>Проекты</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@simpleland.ru</li>
                <li>г. Москва, ул. Строителей, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>© 2024 SimpleLand. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;