import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const content = {
    ru: {
      nav: {
        home: 'Главная',
        products: 'Продукция',
        advantages: 'Преимущества',
        projects: 'Проекты',
        about: 'О компании',
        contact: 'Связаться'
      },
      hero: {
        title: 'Быстровозводимые здания',
        subtitle: 'нового поколения',
        description: 'SimpleLand — производитель современных металлоконструкций и быстровозводимых зданий. Создаем надежные решения для бизнеса с использованием передовых технологий.',
        btnProducts: 'Наша продукция',
        btnPortfolio: 'Портфолио',
        stats: {
          projects: 'Реализованных проектов',
          years: 'Лет на рынке',
          clients: 'Довольных клиентов'
        }
      },
      products: {
        title: 'Наша продукция',
        subtitle: 'Широкий спектр решений для различных отраслей бизнеса',
        items: [
          {
            title: 'Жилые здания',
            description: 'Современные быстровозводимые дома',
            features: ['Комфортная планировка', 'Энергоэффективность', 'Экологичные материалы']
          },
          {
            title: 'Торговые павильоны',
            description: 'Здания для розничной торговли и шоурумов',
            features: ['Современный дизайн', 'Витражное остекление', 'Готовые коммуникации']
          },
          {
            title: 'Общественные здания',
            description: 'Решения для оперативного развертывания медицинского учреждения',
            features: ['Качественная отделка', 'Эргономичная планировка', 'Энергосбережение']
          }
        ]
      },
      advantages: {
        title: 'Преимущества',
        subtitle: 'Почему выбирают SimpleLand',
        items: [
          {
            title: 'Скорость строительства',
            description: 'Сокращение сроков строительства в 3-5 раз по сравнению с традиционными методами'
          },
          {
            title: 'Экономия бюджета',
            description: 'Снижение стоимости строительства до 40% благодаря заводскому производству'
          },
          {
            title: 'Высокое качество',
            description: 'Контроль на каждом этапе производства, сертифицированные материалы'
          },
          {
            title: 'Надежность конструкций',
            description: 'Расчет на снеговые и ветровые нагрузки, сейсмостойкость до 9 баллов'
          },
          {
            title: 'Энергоэффективность',
            description: 'Современная изоляция и инженерные системы снижают затраты на отопление'
          },
          {
            title: 'Гибкость решений',
            description: 'Любые архитектурные формы, возможность расширения и модификации'
          }
        ]
      },
      projectsSection: {
        title: 'Реализованные проекты',
        subtitle: 'Примеры наших работ',
        area: 'Площадь',
        period: 'Срок строительства'
      },
      about: {
        title: 'О компании SimpleLand',
        paragraphs: [
          'SimpleLand — российский производитель быстровозводимых зданий с 15-летним опытом работы. Мы специализируемся на проектировании и строительстве современных металлоконструкций для различных отраслей.',
          'Наша миссия — предоставлять клиентам инновационные строительные решения, которые сочетают высокое качество, скорость возведения и экономическую эффективность.'
        ]
      },
      contact: {
        title: 'Свяжитесь с нами',
        subtitle: 'Готовы обсудить ваш проект',
        name: 'Имя',
        email: 'Email',
        message: 'Сообщение',
        send: 'Отправить',
        phone: 'Телефон',
        workHours: 'Режим работы'
      }
    },
    en: {
      nav: {
        home: 'Home',
        products: 'Products',
        advantages: 'Advantages',
        projects: 'Projects',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title: 'Prefabricated buildings',
        subtitle: 'of new generation',
        description: 'SimpleLand is a manufacturer of modern metal structures and prefabricated buildings. We create reliable solutions for business using advanced technologies.',
        btnProducts: 'Our products',
        btnPortfolio: 'Portfolio',
        stats: {
          projects: 'Completed projects',
          years: 'Years in business',
          clients: 'Satisfied clients'
        }
      },
      products: {
        title: 'Our products',
        subtitle: 'Wide range of solutions for various business sectors',
        items: [
          {
            title: 'Residential buildings',
            description: 'Modern prefabricated houses',
            features: ['Comfortable layout', 'Energy efficiency', 'Eco-friendly materials']
          },
          {
            title: 'Commercial pavilions',
            description: 'Buildings for retail and showrooms',
            features: ['Modern design', 'Glazed facades', 'Ready utilities']
          },
          {
            title: 'Public buildings',
            description: 'Solutions for rapid deployment of medical facilities',
            features: ['Quality finishing', 'Ergonomic layout', 'Energy saving']
          }
        ]
      },
      advantages: {
        title: 'Advantages',
        subtitle: 'Why choose SimpleLand',
        items: [
          {
            title: 'Construction speed',
            description: 'Reduction of construction time by 3-5 times compared to traditional methods'
          },
          {
            title: 'Budget savings',
            description: 'Reduction of construction costs up to 40% thanks to factory production'
          },
          {
            title: 'High quality',
            description: 'Control at every stage of production, certified materials'
          },
          {
            title: 'Structural reliability',
            description: 'Calculation for snow and wind loads, seismic resistance up to 9 points'
          },
          {
            title: 'Energy efficiency',
            description: 'Modern insulation and engineering systems reduce heating costs'
          },
          {
            title: 'Flexibility of solutions',
            description: 'Any architectural forms, possibility of expansion and modification'
          }
        ]
      },
      projectsSection: {
        title: 'Completed projects',
        subtitle: 'Examples of our work',
        area: 'Area',
        period: 'Construction period'
      },
      about: {
        title: 'About SimpleLand',
        paragraphs: [
          'SimpleLand is a Russian manufacturer of prefabricated buildings with 15 years of experience. We specialize in the design and construction of modern metal structures for various industries.',
          'Our mission is to provide customers with innovative construction solutions that combine high quality, speed of construction and economic efficiency.'
        ]
      },
      contact: {
        title: 'Contact us',
        subtitle: 'Ready to discuss your project',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        phone: 'Phone',
        workHours: 'Working hours'
      }
    }
  };

  const t = content[language];

  const products = [
    {
      ...t.products.items[0],
      icon: 'Home'
    },
    {
      ...t.products.items[1],
      icon: 'Store'
    },
    {
      ...t.products.items[2],
      icon: 'Building2'
    }
  ];

  const advantages = [
    {
      ...t.advantages.items[0],
      icon: 'Zap'
    },
    {
      ...t.advantages.items[1],
      icon: 'TrendingDown'
    },
    {
      ...t.advantages.items[2],
      icon: 'Award'
    },
    {
      ...t.advantages.items[3],
      icon: 'Shield'
    },
    {
      ...t.advantages.items[4],
      icon: 'Leaf'
    },
    {
      ...t.advantages.items[5],
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
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">{t.nav.home}</button>
              <button onClick={() => scrollToSection('products')} className="text-sm font-medium hover:text-primary transition-colors">{t.nav.products}</button>
              <button onClick={() => scrollToSection('advantages')} className="text-sm font-medium hover:text-primary transition-colors">{t.nav.advantages}</button>
              <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-primary transition-colors">{t.nav.projects}</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">{t.nav.about}</button>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium"
              >
                <Icon name="Languages" size={18} />
                <span>{language === 'ru' ? 'EN' : 'RU'}</span>
              </button>
              <Button onClick={() => scrollToSection('contact')} className="hidden md:inline-flex">
                {t.nav.contact}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {t.hero.title}
                <span className="block text-primary mt-2">{t.hero.subtitle}</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('products')} className="text-lg px-8">
                  {t.hero.btnProducts}
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('projects')} className="text-lg px-8">
                  {t.hero.btnPortfolio}
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">{t.hero.stats.projects}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">{t.hero.stats.years}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">{t.hero.stats.clients}</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://cdn.poehali.dev/files/9df5c296-9ea8-4791-9a8e-9833e477de77.jpg" 
                alt="Современное быстровозводимое здание" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.products.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.products.subtitle}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.advantages.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.advantages.subtitle}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.projectsSection.title}</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {t.projectsSection.subtitle}
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
                        <div className="text-xs text-slate-400">{t.projectsSection.area}</div>
                        <div className="font-semibold">{project.area}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <div>
                        <div className="text-xs text-slate-400">{t.projectsSection.period}</div>
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
                src="https://cdn.poehali.dev/files/384245b7-b4e3-4a31-b303-f1ae96605b35.jpg" 
                alt="Команда SimpleLand" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.about.title}</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                {t.about.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              {t.contact.subtitle}
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
                <li>Жилые здания</li>
                <li></li>
                <li>Торговые павильоны</li>
                <li>Общественные здания</li>
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