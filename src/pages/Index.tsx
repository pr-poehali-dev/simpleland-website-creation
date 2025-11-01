import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
      title: 'Жилые здания',
      description: 'Современные быстровозводимые дома',
      features: ['Комфортная планировка', 'Энергоэффективность', 'Экологичные материалы'],
      icon: 'Home'
    },
    {
      title: 'Торговые павильоны',
      description: 'Здания для розничной торговли и шоурумов',
      features: ['Современный дизайн', 'Витражное остекление', 'Готовые коммуникации'],
      icon: 'Store'
    },
    {
      title: 'Общественные здания',
      description: 'Решения для оперативного развертывания медицинского учреждения',
      features: ['Качественная отделка', 'Эргономичная планировка', 'Энергосбережение'],
      icon: 'Building2'
    }
  ];

  const advantages = [
    {
      title: 'Скорость строительства',
      description: 'Сокращение сроков строительства в 3-5 раз по сравнению с традиционными методами',
      icon: 'Zap'
    },
    {
      title: 'Экономия бюджета',
      description: 'Снижение стоимости строительства до 40% благодаря заводскому производству',
      icon: 'TrendingDown'
    },
    {
      title: 'Высокое качество',
      description: 'Контроль на каждом этапе производства, сертифицированные материалы',
      icon: 'Award'
    },
    {
      title: 'Надежность конструкций',
      description: 'Расчет на снеговые и ветровые нагрузки, сейсмостойкость до 9 баллов',
      icon: 'Shield'
    },
    {
      title: 'Энергоэффективность',
      description: 'Современная изоляция и инженерные системы снижают затраты на отопление',
      icon: 'Leaf'
    },
    {
      title: 'Гибкость решений',
      description: 'Любые архитектурные формы, возможность расширения и модификации',
      icon: 'Maximize2'
    }
  ];

  const projects = [
    {
      title: 'Логистический комплекс',
      location: 'Московская область',
      area: '5000 м²',
      period: '3 месяца',
      image: 'https://cdn.poehali.dev/projects/f6225a51-0c86-488d-89f3-904193aeffb6/files/6fcb276a-e310-4f3b-81cd-0c4f55f9614d.jpg'
    },
    {
      title: 'Производственный цех',
      location: 'Санкт-Петербург',
      area: '3500 м²',
      period: '2.5 месяца',
      image: 'https://cdn.poehali.dev/projects/f6225a51-0c86-488d-89f3-904193aeffb6/files/c8ebd147-0cc8-4095-95b9-513fffb0fd59.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">SimpleLand</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('products')} className="text-sm font-medium hover:text-primary transition-colors">Продукция</button>
              <button onClick={() => scrollToSection('advantages')} className="text-sm font-medium hover:text-primary transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-primary transition-colors">Проекты</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="hidden md:inline-flex">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Быстровозводимые здания
                <span className="block text-primary mt-2">нового поколения</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                SimpleLand — производитель современных металлоконструкций и быстровозводимых зданий. 
                Создаем надежные решения для бизнеса с использованием передовых технологий.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('products')} className="text-lg px-8">
                  Наша продукция
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('projects')} className="text-lg px-8">
                  Портфолио
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Реализованных проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://cdn.poehali.dev/projects/f6225a51-0c86-488d-89f3-904193aeffb6/files/6fcb276a-e310-4f3b-81cd-0c4f55f9614d.jpg" 
                alt="Современное быстровозводимое здание" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша продукция</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий спектр решений для различных отраслей бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={product.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5 flex-shrink-0" />
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

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Преимущества технологии быстровозводимых зданий SimpleLand
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 border-2 border-slate-100 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon name={advantage.icon} size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Реализованные проекты</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Примеры наших работ — от складов до производственных комплексов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-slate-800 text-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300">{project.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Maximize2" size={20} className="text-primary" />
                      <div>
                        <div className="text-xs text-slate-400">Площадь</div>
                        <div className="font-semibold">{project.area}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <div>
                        <div className="text-xs text-slate-400">Срок</div>
                        <div className="font-semibold">{project.period}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://cdn.poehali.dev/projects/f6225a51-0c86-488d-89f3-904193aeffb6/files/9923e119-ec62-4bb5-b6db-1b8d4126ce02.jpg" 
                alt="Команда SimpleLand" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании SimpleLand</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  SimpleLand — российский производитель быстровозводимых зданий с 15-летним опытом работы. 
                  Мы специализируемся на проектировании и строительстве современных металлоконструкций для различных отраслей.
                </p>
                <p>
                  Наша миссия — предоставлять клиентам инновационные строительные решения, которые сочетают высокое качество, 
                  надежность и экономическую эффективность.
                </p>
                <p>
                  Производственные мощности компании позволяют реализовывать проекты любой сложности — от небольших 
                  торговых павильонов до крупных логистических и производственных комплексов.
                </p>
              </div>
              <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                <div className="flex items-start gap-3">
                  <Icon name="Award" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Сертификаты и лицензии</h3>
                    <p className="text-muted-foreground">
                      Все наши решения соответствуют российским и международным стандартам качества, 
                      имеют необходимые сертификаты соответствия.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать проект?</h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Свяжитесь с нами для консультации и расчета стоимости вашего объекта. 
              Наши специалисты помогут подобрать оптимальное решение.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/30">
                <Icon name="Mail" size={20} className="mr-2" />
                info@simpleland.ru
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={28} className="text-primary" />
                <span className="text-xl font-bold">SimpleLand</span>
              </div>
              <p className="text-slate-400 text-sm">
                Производитель быстровозводимых зданий и металлоконструкций
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Складские комплексы</li>
                <li>Производственные здания</li>
                <li>Торговые павильоны</li>
                <li>Офисные центры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>О нас</li>
                <li>Наши проекты</li>
                <li>Сертификаты</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Москва, ул. Промышленная, 15</li>
                <li>+7 (495) 123-45-67</li>
                <li>info@simpleland.ru</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
            © 2024 SimpleLand. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;