// 1. БОРДОВОЕ ОФОРМЛЕНИЕ
(function applyBurgundy() {
  const s = document.createElement('style');
  s.innerHTML = `
    :root {
      --primary: #800020 !important;
      --primary-hover: #5c0017 !important;
      --primary-light: #fdf2f4 !important;
      --primary-border: #f3cbd3 !important;
      --accent: #d97706 !important;
    }
    body { background-color: #faf7f8 !important; }
    .brand, .brand span, .stats-title, .stats-count, .hero h1, .modal-title {
      color: #800020 !important;
    }
    .brand-icon {
      background: linear-gradient(135deg, #800020, #a81c3c) !important;
    }
    .hero {
      background: linear-gradient(180deg, #fff5f6 0%, #faf7f8 100%) !important;
      border-bottom: 1px solid #f5e6e8 !important;
    }
    .hero-badge, .card-category, .modal-pill {
      background: #fdf2f4 !important;
      color: #800020 !important;
      border: 1px solid #f3cbd3 !important;
    }
    .pill-btn.active, .btn-primary, .btn-card-solid {
      background: #800020 !important;
      border-color: #800020 !important;
      color: #ffffff !important;
    }
    .pill-btn:hover {
      background: #fdf2f4 !important;
      color: #800020 !important;
    }
    .card {
      border: 1px solid #ebd7dc !important;
    }
    .card:hover {
      border-color: #f3cbd3 !important;
      box-shadow: 0 12px 20px -3px rgba(128, 0, 32, 0.12) !important;
    }
    .fav-count-badge {
      background: #800020 !important;
    }
  `;
  document.head.appendChild(s);
})();

// 2. ПОЛНАЯ БАЗА: 44 ИСХОДНЫЕ + ВСЕ НОВЫЕ (ВСЕГО 72 КАРТОЧКИ)
const opportunities = [
  // --- 44 ИСХОДНЫЕ КАРТОЧКИ ИЗ ПЕРВОГО КОДА ---
  {
    id: 1,
    title: "Всероссийский конкурс «Большая перемена»",
    category: "Олимпиады и конкурсы",
    subjects: ["образование", "конкурсы", "карьера", "лидерство"],
    format: "Онлайн + Финал очно",
    region: "Все регионы",
    ageMin: 14,
    ageMax: 18,
    audience: ["Школьники", "Студенты"],
    free: true,
    deadline: "Ежегодно (весна)",
    description: "Флагманский конкурс платформы «Россия — страна возможностей». Миллионные призы на образование и развитие собственных проектов.",
    officialUrl: "https://bolshayaperemena.online"
  },
  {
    id: 2,
    title: "Национальная технологическая олимпиада (НТО)",
    category: "Олимпиады и конкурсы",
    subjects: ["математика", "информатика", "робототехника", "ai"],
    format: "Онлайн + Офлайн",
    region: "Все регионы",
    ageMin: 13,
    ageMax: 25,
    audience: ["Школьники", "Студенты"],
    free: true,
    deadline: "Ноябрь–Декабрь",
    description: "Командная инженерная олимпиада. Победа дает 100 баллов ЕГЭ или поступление БВИ в ведущие технические вузы России.",
    officialUrl: "https://ntolymp.ru"
  },
  {
    id: 3,
    title: "Гранты Росмолодёжи (1 и 2 сезоны)",
    category: "Гранты",
    subjects: ["социальные проекты", "волонтёрство", "предпринимательство"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 14,
    ageMax: 35,
    audience: ["Школьники", "Студенты", "Выпускники"],
    free: true,
    deadline: "Регулярно",
    description: "Финансовая поддержка молодежных инициатив до 1,5 млн рублей на реализацию социально значимых проектов.",
    officialUrl: "https://fadm.gov.ru"
  },
  {
    id: 4,
    title: "Платформа ДОБРО.РФ: волонтерские проекты",
    category: "Карьера",
    subjects: ["волонтёрство", "социальные проекты"],
    format: "Онлайн и офлайн",
    region: "Все регионы",
    ageMin: 14,
    ageMax: 35,
    audience: ["Школьники", "Студенты", "Выпускники"],
    free: true,
    deadline: "Круглый год",
    description: "Единая система учета добровольчества. Позволяет копить верифицированные часы для дополнительных баллов к ЕГЭ.",
    officialUrl: "https://dobro.ru"
  },
  {
    id: 5,
    title: "Всероссийский проект «Твой Ход»",
    category: "Кейс-чемпионаты",
    subjects: ["стартапы", "лидерство", "проекты", "студенты"],
    format: "Онлайн + Офлайн",
    region: "Все регионы",
    ageMin: 17,
    ageMax: 25,
    audience: ["Студенты"],
    free: true,
    deadline: "Осень 2026",
    description: "Главное сообщество студентов России. Конкурсные треки с главными премиями по 1 000 000 рублей.",
    officialUrl: "https://tvoyhod.online"
  },
  {
    id: 6,
    title: "Образовательный центр «Сириус»: научные смены",
    category: "Онлайн-школы",
    subjects: ["математика", "физика", "химия", "биология", "it"],
    format: "Офлайн (г. Сочи)",
    region: "Все регионы",
    ageMin: 12,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Ежемесячно",
    description: "Бесплатные профильные смены в Сочи для одаренных школьников под руководством ведущих ученых РАН.",
    officialUrl: "https://sochisirius.ru"
  },
  {
    id: 7,
    title: "Всероссийская олимпиада «Я — профессионал»",
    category: "Олимпиады и конкурсы",
    subjects: ["экономика", "юриспруденция", "инженерия", "it"],
    format: "Онлайн + Офлайн",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 28,
    audience: ["Студенты"],
    free: true,
    deadline: "Ноябрь 2026",
    description: "Масштабная олимпиада для студентов бакалавриата и магистратуры: льготы при поступлении и стажировки.",
    officialUrl: "https://yandex.ru/profi"
  },
  {
    id: 8,
    title: "Стажировка в Аналитике AI-агентов (Сбер)",
    category: "Стажировки",
    subjects: ["ai", "искусственный интеллект", "nlp", "it"],
    format: "Гибрид",
    region: "Москва",
    ageMin: 18,
    ageMax: 26,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Срочный отбор",
    description: "Разработка логики автономных AI-агентов в экосистеме Сбера. Практика применения современных LLM-моделей.",
    officialUrl: "https://sbergraduate.ru"
  },
  {
    id: 9,
    title: "Оплачиваемая стажировка BIG IN (X5 Group)",
    category: "Стажировки",
    subjects: ["ритейл", "логистика", "маркетинг", "финансы"],
    format: "Гибрид",
    region: "Москва",
    ageMin: 19,
    ageMax: 26,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Ноябрь 2026",
    description: "Старт карьеры в ритейле: реальные проекты в сетях «Пятерочка», «Перекресток» и «Чижик».",
    officialUrl: "https://x5.ru"
  },
  {
    id: 10,
    title: "Стажерские программы ПСБ (4 направления)",
    category: "Стажировки",
    subjects: ["банкинг", "финансы", "it", "риск-менеджмент"],
    format: "Офлайн",
    region: "Москва",
    ageMin: 18,
    ageMax: 25,
    audience: ["Студенты"],
    free: true,
    deadline: "Открытый набор",
    description: "Оплачиваемая практика в Промсвязьбанке с графиком от 20 часов в неделю и наставничеством экспертов.",
    officialUrl: "https://psbank.ru"
  },
  {
    id: 11,
    title: "Школа Анализа Данных (ШАД Яндекса)",
    category: "Онлайн-школы",
    subjects: ["data science", "машинное обучение", "алгоритмы", "math"],
    format: "Онлайн + Офлайн",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 30,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Май (отбор)",
    description: "Двухгодичная программа по Computer Science и машинному обучению топ-уровня.",
    officialUrl: "https://yandex.ru/shad"
  },
  {
    id: 12,
    title: "Стажировки Яндекс (Development / ML / Analytics)",
    category: "Стажировки",
    subjects: ["разработка", "python", "c++", "ml"],
    format: "Гибрид",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 27,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Круглый год",
    description: "Оплачиваемые стажировки от 3 до 6 месяцев с возможностью перехода в штат разработчиков Яндекса.",
    officialUrl: "https://yandex.ru/yacamp"
  },
  {
    id: 13,
    title: "Changellenge » Cup Russia: Кейс-чемпионат",
    category: "Кейс-чемпионаты",
    subjects: ["консалтинг", "стратегия", "маркетинг", "финансы"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 17,
    ageMax: 25,
    audience: ["Студенты"],
    free: true,
    deadline: "Весна/Осень",
    description: "Крупнейший кейс-чемпионат России и СНГ для студентов всех специальностей.",
    officialUrl: "https://changellenge.com"
  },
  {
    id: 14,
    title: "VK Cup: Соревнования для разработчиков",
    category: "Олимпиады и конкурсы",
    subjects: ["алгоритмы", "mobile", "frontend", "cybersecurity"],
    format: "Онлайн + Финал в СПб/Мск",
    region: "Все регионы",
    ageMin: 14,
    ageMax: 25,
    audience: ["Школьники", "Студенты"],
    free: true,
    deadline: "Ежегодно",
    description: "Флагманский кубок VK по программированию с крупным призовым фондом.",
    officialUrl: "https://vk.com/cup"
  },
  {
    id: 15,
    title: "Тинькофф Поколение (Курсы по алгоритмам)",
    category: "Онлайн-школы",
    subjects: ["алгоритмы", "олимпиадное программирование"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 13,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Сентябрь / Январь",
    description: "Бесплатные углубленные курсы по алгоритмам для школьников от олимпиадных тренеров Т-Банка.",
    officialUrl: "https://tinkoff.ru/generation"
  },
  {
    id: 16,
    title: "Стажировка в Т-Банке (Tinkoff Start)",
    category: "Стажировки",
    subjects: ["backend", "frontend", "qa", "аналитика"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 26,
    audience: ["Студенты"],
    free: true,
    deadline: "Весна / Лето / Осень",
    description: "Оплачиваемая удаленная стажировка с гибким графиком и ментором.",
    officialUrl: "https://fintech.tinkoff.ru"
  },
  {
    id: 17,
    title: "Всероссийская олимпиада школьников (ВсОШ)",
    category: "Олимпиады и конкурсы",
    subjects: ["школьные предметы", "бви"],
    format: "Офлайн",
    region: "Все регионы",
    ageMin: 12,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Сентябрь–Апрель",
    description: "Главная олимпиада страны: диплом заключительного этапа дает поступление БВИ в любой вуз РФ.",
    officialUrl: "https://vos.olimpiada.ru"
  },
  {
    id: 18,
    title: "Олимпиада «Высшая проба» (НИУ ВШЭ)",
    category: "Олимпиады и конкурсы",
    subjects: ["экономика", "обществознание", "математика", "it"],
    format: "Онлайн (отбор) + Офлайн",
    region: "Все регионы",
    ageMin: 13,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Ноябрь",
    description: "Перечневая олимпиада ВШЭ I уровня. Дипломы победителей дают 100 баллов или зачисление БВИ.",
    officialUrl: "https://olymp.hse.ru/mmo"
  },
  {
    id: 19,
    title: "Школа лекторов Фонда «Знание»",
    category: "Карьера",
    subjects: ["публичные выступления", "наука", "педагогика"],
    format: "Онлайн + Офлайн",
    region: "Все регионы",
    ageMin: 16,
    ageMax: 35,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Круглогодично",
    description: "Федеральный проект по подготовке спикеров и популяризаторов науки с поездками по регионам.",
    officialUrl: "https://znanierussia.ru"
  },
  {
    id: 20,
    title: "Грантовый конкурс Фонда содействия инновациям «УМНИК»",
    category: "Гранты",
    subjects: ["стартапы", "инновации", "наука"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 30,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Ежегодно (осень)",
    description: "Грант 500 000 рублей на проведение научно-исследовательских работ и коммерциализацию идеи.",
    officialUrl: "https://fasie.ru"
  },
  {
    id: 21,
    title: "Стажировка в Правительстве Москвы",
    category: "Стажировки",
    subjects: ["госуправление", "урбанистика", "юриспруденция", "медиа"],
    format: "Офлайн",
    region: "Москва",
    ageMin: 18,
    ageMax: 27,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Весна/Осень",
    description: "Оплачиваемая программа стажировки в департаментах Правительства Москвы на 6 месяцев.",
    officialUrl: "https://talent.mos.ru"
  },
  {
    id: 22,
    title: "Лидеры России: трек «Студенты / Молодые специалисты»",
    category: "Карьера",
    subjects: ["лидерство", "менеджмент", "госуправление"],
    format: "Онлайн + Офлайн",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 35,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "По сезонам",
    description: "Конкурс управленцев нового поколения: наставничество топ-руководителей и гранты на образование.",
    officialUrl: "https://лидерыроссии.рф"
  },
  {
    id: 23,
    title: "Олимпиада «Покори Воробьёвы горы!» (МГУ)",
    category: "Олимпиады и конкурсы",
    subjects: ["математика", "физика", "литература", "история"],
    format: "Онлайн + Офлайн",
    region: "Все регионы",
    ageMin: 12,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Декабрь–Январь",
    description: "Совместная перечневая олимпиада МГУ и газеты МК для школьников из всех уголков России.",
    officialUrl: "https://pvg.mk.ru"
  },
  {
    id: 24,
    title: "Школа молодого предпринимателя от Сбера (SberZ / SberStudent)",
    category: "Кейс-чемпионаты",
    subjects: ["стартапы", "бизнес", "инвестиции"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 14,
    ageMax: 25,
    audience: ["Школьники", "Студенты"],
    free: true,
    deadline: "Осень–Зима",
    description: "Бесплатный акселератор стартапов: создание MVP и защита перед инвесторами на Демо-дне.",
    officialUrl: "https://sberstudent.sber.ru"
  },
  {
    id: 25,
    title: "Летняя школа CTF (Кибербезопасность)",
    category: "Онлайн-школы",
    subjects: ["кибербезопасность", "hacking", "reverse", "crypto"],
    format: "Онлайн / Выездная",
    region: "Все регионы",
    ageMin: 14,
    ageMax: 22,
    audience: ["Школьники", "Студенты"],
    free: true,
    deadline: "Июнь",
    description: "Интенсив по информационной безопасности и решение соревнований формата Capture the Flag.",
    officialUrl: "https://ctfnews.ru"
  },
  {
    id: 26,
    title: "Грант «Студенческий стартап» (1 000 000 ₽)",
    category: "Гранты",
    subjects: ["стартапы", "технологии", "бизнес"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 30,
    audience: ["Студенты"],
    free: true,
    deadline: "Весна 2026",
    description: "Грант 1 миллион рублей студентам вузов на открытие собственного технологического юрлица.",
    officialUrl: "https://fasie.ru/studstartup"
  },
  {
    id: 27,
    title: "Академия Яндекса: базовые курсы разработки",
    category: "Онлайн-школы",
    subjects: ["python", "c++", "django", "frontend"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 14,
    ageMax: 25,
    audience: ["Школьники", "Студенты"],
    free: true,
    deadline: "Круглый год",
    description: "Бесплатные онлайн-учебники и интерактивные тренажеры по Python, C++ и математике.",
    officialUrl: "https://academy.yandex.ru"
  },
  {
    id: 28,
    title: "Стажировка в OZON Camp",
    category: "Стажировки",
    subjects: ["e-commerce", "it", "маркетинг", "логистика"],
    format: "Гибрид",
    region: "Москва",
    ageMin: 18,
    ageMax: 26,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Весна/Осень",
    description: "Оплачиваемая полугодовая стажировка в e-commerce гиганте с первых дней работы над реальными фичами.",
    officialUrl: "https://job.ozon.ru/camp"
  },
  {
    id: 29,
    title: "Кейс-чемпионат «Кубок МТС»",
    category: "Кейс-чемпионаты",
    subjects: ["телеком", "it", "маркетинг", "fintech"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 25,
    audience: ["Студенты"],
    free: true,
    deadline: "Осень 2026",
    description: "Соревнование по решению стратегических кейсов цифровой экосистемы МТС с фаст-треком на работу.",
    officialUrl: "https://mts.ru"
  },
  {
    id: 30,
    title: "Школа программирования 21 (Сбер)",
    category: "Онлайн-школы",
    subjects: ["c", "c++", "unix", "devops", "peer-to-peer"],
    format: "Офлайн (кампусы в РФ)",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 40,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Круглый год (бассейны)",
    description: "Бесплатная школа программирования по методике «равный равному» без учителей и оценок.",
    officialUrl: "https://21-school.ru"
  },
  {
    id: 31,
    title: "Олимпиада Innopolis Open (Иннополис)",
    category: "Олимпиады и конкурсы",
    subjects: ["информатика", "робототехника", "бви"],
    format: "Онлайн + Офлайн",
    region: "Все регионы",
    ageMin: 13,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Декабрь–Январь",
    description: "Международная олимпиада Университета Иннополис для талантливых юных программистов.",
    officialUrl: "https://olymp.innopolis.ru"
  },
  {
    id: 32,
    title: "VK Тестирование (Курсы по QA)",
    category: "Онлайн-школы",
    subjects: ["qa", "тестирование", "автоматизация"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 16,
    ageMax: 26,
    audience: ["Студенты", "Школьники"],
    free: true,
    deadline: "По набору",
    description: "Обучение основам ручного и автоматизированного тестирования сервисов VK.",
    officialUrl: "https://vk.company/ru/edu"
  },
  {
    id: 33,
    title: "Стажировка в Росатоме",
    category: "Стажировки",
    subjects: ["ядерная физика", "инженерия", "it", "химия"],
    format: "Офлайн",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 27,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Круглый год",
    description: "Практика и трудоустройство на ключевых предприятиях атомной отрасли РФ.",
    officialUrl: "https://rosatom-career.ru"
  },
  {
    id: 34,
    title: "Хакатон Цифровой Прорыв (Созидатели)",
    category: "Кейс-чемпионаты",
    subjects: ["хакатон", "ai", "web", "mobile"],
    format: "Гибрид",
    region: "Все регионы",
    ageMin: 14,
    ageMax: 35,
    audience: ["Школьники", "Студенты", "Выпускники"],
    free: true,
    deadline: "По сезонам",
    description: "Главный хакатон страны: разработка IT-решений по реальным кейсам с призовым фондом в десятки миллионов.",
    officialUrl: "https://hacks-ai.ru"
  },
  {
    id: 35,
    title: "Программа стипендий «Альфа-Шанс»",
    category: "Гранты",
    subjects: ["стипендия", "поддержка студентов"],
    format: "Онлайн отбор",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 23,
    audience: ["Студенты"],
    free: true,
    deadline: "Ноябрь–Декабрь",
    description: "Именная стипендия 300 000 рублей от Альфа-Банка для лучших студентов 3–4 курсов.",
    officialUrl: "https://alfabank.ru/alfa-chance"
  },
  {
    id: 36,
    title: "Стажировки в Контуре (СКБ Контур)",
    category: "Стажировки",
    subjects: ["c#", "frontend", "qa", "аналитика"],
    format: "Гибрид / Екатеринбург / Онлайн",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 25,
    audience: ["Студенты"],
    free: true,
    deadline: "Весна/Лето",
    description: "Оплачиваемая стажировка в одной из крупнейших экосистем для бизнеса в России.",
    officialUrl: "https://kontur.ru/career"
  },
  {
    id: 37,
    title: "Олимпиада «Технокубок» (МГТУ им. Баумана и VK)",
    category: "Олимпиады и конкурсы",
    subjects: ["информатика", "алгоритмы", "бви"],
    format: "Онлайн + Офлайн",
    region: "Все регионы",
    ageMin: 14,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Осень–Зима",
    description: "Олимпиада по спортивному программированию I уровня для поступления без экзаменов.",
    officialUrl: "https://technocup.mail.ru"
  },
  {
    id: 38,
    title: "Акселератор «Архипелаг» (НТИ)",
    category: "Кейс-чемпионаты",
    subjects: ["бпла", "биотех", "космос", "инженерия"],
    format: "Офлайн интенсив",
    region: "Все регионы",
    ageMin: 16,
    ageMax: 35,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Лето",
    description: "Главное инженерное мероприятие по разработке дронов, космоса и биотех-стартапов.",
    officialUrl: "https://archipelago2026.ru"
  },
  {
    id: 39,
    title: "Стажерская программа ВТБ Юниор",
    category: "Стажировки",
    subjects: ["банкинг", "инвестиции", "it", "риски"],
    format: "Гибрид",
    region: "Москва",
    ageMin: 19,
    ageMax: 26,
    audience: ["Студенты старших курсов", "Выпускники"],
    free: true,
    deadline: "Осень/Весна",
    description: "Годовая программа развития выпускников в головном офисе банка ВТБ.",
    officialUrl: "https://vtbcareer.com"
  },
  {
    id: 40,
    title: "Олимпиада «Турнир Городов» по математике",
    category: "Олимпиады и конкурсы",
    subjects: ["математика", "олимпиадные задачи"],
    format: "Офлайн в городах",
    region: "Все регионы",
    ageMin: 13,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Осень/Весна",
    description: "Международная сложная олимпиада по математике с глубокими нестандартными задачами.",
    officialUrl: "https://turgor.ru"
  },
  {
    id: 41,
    title: "Стажер-разработчик в Лаборатории Касперского (Safeboard)",
    category: "Стажировки",
    subjects: ["c++", "python", "cybersecurity"],
    format: "Гибрид",
    region: "Москва",
    ageMin: 18,
    ageMax: 26,
    audience: ["Студенты"],
    free: true,
    deadline: "Октябрь–Ноябрь",
    description: "Стажировка в области кибербезопасности и разработки антивирусных систем.",
    officialUrl: "https://safeboard.kaspersky.ru"
  },
  {
    id: 42,
    title: "Кейс-чемпионат CUP TECHNICAL (Инженерный кубок)",
    category: "Кейс-чемпионаты",
    subjects: ["инженерия", "нефтехимия", "производство"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 25,
    audience: ["Студенты"],
    free: true,
    deadline: "Осень",
    description: "Решение производственных кейсов металлургических и нефтехимических заводов.",
    officialUrl: "https://changellenge.com/cup-technical"
  },
  {
    id: 43,
    title: "Стипендия Правительства РФ / Президента РФ",
    category: "Гранты",
    subjects: ["наука", "публикации", "учеба"],
    format: "Документальный отбор",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 30,
    audience: ["Студенты"],
    free: true,
    deadline: "Ежегодно (весна)",
    description: "Государственная стипендия за выдающиеся успехи в учебе и научные статьи в Scopus/ВАК.",
    officialUrl: "https://минобрнауки.рф"
  },
  {
    id: 44,
    title: "Олимпиада Юношеской математической школы (ЮМШ)",
    category: "Олимпиады и конкурсы",
    subjects: ["математика", "бви"],
    format: "Онлайн + Офлайн СПб",
    region: "Все регионы",
    ageMin: 11,
    ageMax: 17,
    audience: ["Школьники"],
    free: true,
    deadline: "Осень",
    description: "Традиционная исследовательская олимпиада СПбГУ для одаренных математиков.",
    officialUrl: "https://yumsh.ru"
  },

  // --- НОВЫЕ КАРТОЧКИ: ДАЙДЖЕСТ ВШЭ + ТЕДО + ОЛИМПИАДЫ РСОШ ---
  {
    id: 101,
    title: "Осенний карьерный марафон ЦРК ВШЭ (39 компаний)",
    category: "Карьера",
    subjects: ["карьера", "стажировки", "вшэ", "нетворкинг"],
    format: "Офлайн (Покровка, Атриум)",
    region: "Москва",
    ageMin: 17,
    ageMax: 26,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "18 ноября (12:00–17:00)",
    description: "Стенд-сессии 39 компаний (ТеДо, ДОМ.РФ, А7), экспресс-собеседования, мастер-классы. Открыто для всех вузов.",
    officialUrl: "https://career.hse.ru"
  },
  {
    id: 102,
    title: "HR-День от ДРТ на Покровке",
    category: "Карьера",
    subjects: ["консалтинг", "резюме", "дрт"],
    format: "Офлайн (Покровка)",
    region: "Москва",
    ageMin: 18,
    ageMax: 25,
    audience: ["Студенты"],
    free: true,
    deadline: "10 ноября",
    description: "Прожарка резюме и консультации по отбору в стратегический консалтинг ДРТ (экс-Deloitte).",
    officialUrl: "https://delret.ru"
  },
  {
    id: 103,
    title: "Воркшоп «Оставь свой след» (ДРТ х Касперский)",
    category: "Карьера",
    subjects: ["it", "кибербезопасность", "консалтинг"],
    format: "Офлайн",
    region: "Москва",
    ageMin: 18,
    ageMax: 26,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "12 ноября",
    description: "Практический воркшоп экспертов консалтинга и кибербезопасности для студентов IT-направлений.",
    officialUrl: "https://delret.ru"
  },
  {
    id: 104,
    title: "Форум «Город.Карьера.Бизнес.2026» (Ломоносов)",
    category: "Карьера",
    subjects: ["карьера", "бизнес", "стартапы"],
    format: "Офлайн",
    region: "Москва",
    ageMin: 16,
    ageMax: 30,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "14 ноября",
    description: "Масштабный молодежный форум развития карьеры в инновационном кластере «Ломоносов».",
    officialUrl: "https://moscow.ru"
  },
  {
    id: 105,
    title: "Бесплатный AI Кампус от МТС Банка",
    category: "Онлайн-школы",
    subjects: ["ai", "fintech", "it"],
    format: "Онлайн / Смешанный",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 28,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "15 ноября",
    description: "Образовательный онлайн-кампус для разработчиков по внедрению искусственного интеллекта в банкинг.",
    officialUrl: "https://mtsbank.ru"
  },
  {
    id: 106,
    title: "Онлайн-интенсив «Карьерный компас» (ДОМ.РФ)",
    category: "Карьера",
    subjects: ["финансы", "аналитика"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 17,
    ageMax: 25,
    audience: ["Студенты"],
    free: true,
    deadline: "17–19 ноября",
    description: "Трехдневный карьерный онлайн-интенсив: ключевые направления финансовой сферы ДОМ.РФ.",
    officialUrl: "https://xn--d1aqf.xn--p1ai"
  },
  {
    id: 107,
    title: "Вебинар МИЭФ: «AI в финансах»",
    category: "Онлайн-школы",
    subjects: ["финансы", "ai", "миэф"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 17,
    ageMax: 30,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "20 ноября",
    description: "Вебинар магистратуры МИЭФ ВШЭ: заменит ли искусственный интеллект финансовых аналитиков.",
    officialUrl: "https://mief.hse.ru"
  },
  {
    id: 108,
    title: "Школа Т2 x ВШЭ: «Big Data & Продуктовый подход»",
    category: "Кейс-чемпионаты",
    subjects: ["big data", "телеком", "it"],
    format: "Смешанный",
    region: "Москва",
    ageMin: 18,
    ageMax: 26,
    audience: ["Студенты"],
    free: true,
    deadline: "23–26 ноября",
    description: "Практический командный кейс на реальных датасетах мобильного оператора Т2 под монетизацию данных.",
    officialUrl: "https://career.hse.ru"
  },
  {
    id: 109,
    title: "VK Education в Вышке: «Теория игр в карьере»",
    category: "Карьера",
    subjects: ["теория игр", "it", "vk"],
    format: "Офлайн (Покровка)",
    region: "Москва",
    ageMin: 17,
    ageMax: 25,
    audience: ["Студенты"],
    free: true,
    deadline: "24–25 ноября",
    description: "Интерактивная лекция лидеров разработки VK: как алгоритмы теории игр помогают строить карьеру.",
    officialUrl: "https://education.vk.company"
  },
  {
    id: 110,
    title: "Школа Авито x ВШЭ: «Запуск продукта: от идеи до питча»",
    category: "Кейс-чемпионаты",
    subjects: ["продакт", "авито", "стартапы"],
    format: "Смешанный",
    region: "Москва",
    ageMin: 18,
    ageMax: 26,
    audience: ["Студенты"],
    free: true,
    deadline: "25–30 ноября",
    description: "Разработка продуктового решения и защита перед ведущими продакт-менеджерами Авито.",
    officialUrl: "https://career.hse.ru"
  },
  {
    id: 111,
    title: "Консультант в стратегический консалтинг (ТеДо)",
    category: "Стажировки",
    subjects: ["стратегия", "консалтинг", "тедо"],
    format: "Гибрид",
    region: "Москва",
    ageMin: 19,
    ageMax: 26,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Открытый отбор",
    description: "Отбор в практику бизнес-консультирования компании «Технологии Доверия» (экс-PwC).",
    officialUrl: "https://tedo.ru"
  },
  {
    id: 112,
    title: "Консультант в нефтегазовый консалтинг ТеДо",
    category: "Стажировки",
    subjects: ["энергетика", "нефтегаз", "консалтинг"],
    format: "Гибрид",
    region: "Москва",
    ageMin: 20,
    ageMax: 27,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Ноябрь 2026",
    description: "Консультирование корпораций ТЭК по оптимизации цепочек поставок и операционной модели.",
    officialUrl: "https://tedo.ru"
  },
  {
    id: 113,
    title: "Стажёрская программа ДОМ.РФ (4 трека)",
    category: "Стажировки",
    subjects: ["финансы", "it", "юриспруденция"],
    format: "Гибрид",
    region: "Москва",
    ageMin: 18,
    ageMax: 25,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Идет прием",
    description: "Оплачиваемая полугодовая стажировка в финансовом институте развития с возможностью оффера.",
    officialUrl: "https://xn--d1aqf.xn--p1ai/career"
  },
  {
    id: 114,
    title: "Стажёрская программа «Прыжок тигра» (А7)",
    category: "Стажировки",
    subjects: ["маркетинг", "бизнес"],
    format: "Офлайн",
    region: "Москва",
    ageMin: 18,
    ageMax: 25,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Ноябрь 2026",
    description: "Практическая программа развития талантов с менторством топ-менеджеров холдинга А7.",
    officialUrl: "https://a7.ru"
  },
  {
    id: 115,
    title: "Стажер в отдел ТВ-закупок (КИТ1217)",
    category: "Стажировки",
    subjects: ["медиа", "реклама", "тв"],
    format: "Офлайн",
    region: "Москва",
    ageMin: 18,
    ageMax: 24,
    audience: ["Студенты"],
    free: true,
    deadline: "Срочный набор",
    description: "Медиапланирование, аналитика рейтингов и закупки рекламы на федеральных телеканалах.",
    officialUrl: "https://kit1217.ru"
  },
  {
    id: 116,
    title: "Стажерская программа Минпромторга России",
    category: "Стажировки",
    subjects: ["госслужба", "промышленность"],
    format: "Офлайн (Москва-Сити)",
    region: "Москва",
    ageMin: 18,
    ageMax: 27,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Регулярный набор",
    description: "Практика в ключевых департаментах Минпромторга РФ: господдержка, ВЭД и промышленная аналитика.",
    officialUrl: "https://minpromtorg.gov.ru"
  },
  {
    id: 117,
    title: "XV Стажерская программа Минкультуры России",
    category: "Стажировки",
    subjects: ["культура", "госуправление"],
    format: "Офлайн",
    region: "Москва",
    ageMin: 18,
    ageMax: 27,
    audience: ["Студенты"],
    free: true,
    deadline: "Ноябрь 2026",
    description: "Опыт координации федеральных проектов в сфере искусства и культурного наследия.",
    officialUrl: "https://culture.gov.ru"
  },
  {
    id: 118,
    title: "Стажер-аналитик данных в инвестпроектах (Содружество)",
    category: "Стажировки",
    subjects: ["инвестиции", "финансы"],
    format: "Гибрид",
    region: "Москва",
    ageMin: 19,
    ageMax: 26,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Набор открыт",
    description: "Оценка финансовой эффективности крупных инвестпроектов и построение моделей в Excel.",
    officialUrl: "https://sodrugestvo.ru"
  },
  {
    id: 119,
    title: "Аналитик M&A и стратегии (СУЭК)",
    category: "Стажировки",
    subjects: ["m&a", "корпоративные финансы"],
    format: "Офлайн",
    region: "Москва",
    ageMin: 20,
    ageMax: 27,
    audience: ["Выпускники", "Студенты"],
    free: true,
    deadline: "Срочный отбор",
    description: "Участие в сделках слияний и поглощений (M&A) и разработка стратегии горнорудной компании.",
    officialUrl: "https://suek.ru"
  },
  {
    id: 120,
    title: "Junior ML-Engineer / Data Scientist (Поле.рф)",
    category: "Стажировки",
    subjects: ["ml", "python", "data science"],
    format: "Удаленный / Офлайн",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 28,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Набор открыт",
    description: "Разработка ML-моделей кредитного скоринга и рекомендательных алгоритмов для маркетплейса.",
    officialUrl: "https://pole.rf"
  },
  {
    id: 121,
    title: "Олимпиадная школа «Кружок»: подготовка к ВсОШ",
    category: "Онлайн-школы",
    subjects: ["олимпиады", "всош", "экономика"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 13,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Круглый год",
    description: "Бесплатные интенсивы по подготовке к муниципальному и региональному этапам ВсОШ.",
    officialUrl: "https://kruzhok.org"
  },
  {
    id: 122,
    title: "Атриум: естественно-научные сборы",
    category: "Онлайн-школы",
    subjects: ["химия", "биология", "физика"],
    format: "Онлайн / Выездные",
    region: "Все регионы",
    ageMin: 13,
    ageMax: 18,
    audience: ["Школьники"],
    free: false,
    deadline: "Набор открыт",
    description: "Специализированная олимпиадная подготовка к перечням РСОШ по химии, биологии и физике.",
    officialUrl: "https://atrium-edu.ru"
  },
  {
    id: 123,
    title: "Олимпиадные программы «Сколково» (IT/Математика)",
    category: "Онлайн-школы",
    subjects: ["математика", "программирование"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 14,
    ageMax: 18,
    audience: ["Школьники"],
    free: false,
    deadline: "Идет запись",
    description: "Курсы углубленного решения задач олимпиад 1-го уровня по математике и информатике.",
    officialUrl: "https://sk.ru"
  },
  {
    id: 124,
    title: "Олимпиада «Физтех» (МФТИ) — I уровень РСОШ",
    category: "Олимпиады и конкурсы",
    subjects: ["физика", "математика", "бви"],
    format: "Онлайн + Офлайн",
    region: "Все регионы",
    ageMin: 14,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Ноябрь–Декабрь",
    description: "Олимпиада МФТИ. Дает право поступления БВИ в МФТИ, Бауманку, ВШЭ при подтверждении 85+ ЕГЭ.",
    officialUrl: "https://olymp.mipt.ru"
  },
  {
    id: 125,
    title: "Олимпиада «Росатом» (НИЯУ МИФИ) — I/II уровень",
    category: "Олимпиады и конкурсы",
    subjects: ["физика", "математика", "бви"],
    format: "Онлайн + Офлайн",
    region: "Все регионы",
    ageMin: 13,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Декабрь",
    description: "Олимпиада Росатома и МИФИ: дает БВИ или 100 баллов при подтверждении классическим результатом 75+ ЕГЭ.",
    officialUrl: "https://mephi.ru"
  },
  {
    id: 126,
    title: "Олимпиада «Ломоносов» (МГУ)",
    category: "Олимпиады и конкурсы",
    subjects: ["математика", "обществознание", "бви"],
    format: "Онлайн + Финал",
    region: "Все регионы",
    ageMin: 12,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Ноябрь 2026",
    description: "Флагманская университетская олимпиада МГУ. Предоставляет льготы БВИ и 100 баллов по всей РФ.",
    officialUrl: "https://olymp.msu.ru"
  },
  {
    id: 127,
    title: "Всесибирская олимпиада школьников (НГУ)",
    category: "Олимпиады и конкурсы",
    subjects: ["химия", "биология", "физика"],
    format: "Очно-заочный",
    region: "Все регионы",
    ageMin: 13,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Ноябрь 2026",
    description: "Олимпиада 1-го и 2-го уровней: результаты засчитываются МФТИ, НГУ, СПбГУ и МГТУ для БВИ.",
    officialUrl: "https://sesc.nsu.ru"
  },
  {
    id: 128,
    title: "Олимпиада «Курчатов» (НИЦ Курчатовский ин-т)",
    category: "Олимпиады и конкурсы",
    subjects: ["физика", "математика", "бви"],
    format: "Онлайн + Офлайн",
    region: "Все регионы",
    ageMin: 13,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Январь–Февраль",
    description: "Олимпиада ЦПМ и Курчатовского института. Входит в перечень РСОШ, гарантирует поступление БВИ.",
    officialUrl: "https://kurchatov.olimpiada.ru"
  }
];

// 3. УПРАВЛЕНИЕ ИНТЕРФЕЙСОМ
let currentCategory = 'all';
let currentSearch = '';
let currentRegion = 'all';
let currentAudience = 'all';
let currentFormat = 'all';
let isViewingFavoritesOnly = false;
let favorites = [];

try {
  const saved = localStorage.getItem('ravny_favs_v3');
  if (saved) favorites = JSON.parse(saved);
} catch (e) {
  favorites = [];
}

function getCardsContainer() {
  return document.getElementById('cardsContainer') || document.querySelector('.cards-grid');
}

function getCountDisplay() {
  return document.getElementById('countDisplay') || document.querySelector('.stats-count');
}

function updateFavBadge() {
  const b = document.getElementById('favBadge') || document.querySelector('.fav-count-badge');
  if (b) b.textContent = favorites.length;
}

function isFav(id) {
  return favorites.includes(id);
}

function toggleFavorite(id) {
  favorites = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
  try {
    localStorage.setItem('ravny_favs_v3', JSON.stringify(favorites));
  } catch (e) {}
  updateFavBadge();
  renderFeed();
}

function filterOpportunities() {
  return opportunities.filter(item => {
    if (isViewingFavoritesOnly && !isFav(item.id)) return false;
    if (currentCategory !== 'all' && item.category !== currentCategory) return false;

    if (currentRegion !== 'all') {
      if (currentRegion === 'Москва' && !item.region.includes('Москва')) return false;
      if (currentRegion === 'Все регионы' && !item.region.includes('Все регионы') && !item.format.includes('Онлайн')) return false;
    }

    if (currentAudience !== 'all') {
      const match = item.audience.some(a => a.toLowerCase().includes(currentAudience.toLowerCase()));
      if (!match) return false;
    }

    if (currentFormat !== 'all') {
      if (currentFormat === 'Онлайн' && !item.format.includes('Онлайн')) return false;
      if (currentFormat === 'Офлайн' && !item.format.includes('Офлайн')) return false;
    }

    if (currentSearch.trim() !== '') {
      const q = currentSearch.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchSubj = item.subjects.some(s => s.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchSubj) return false;
    }

    return true;
  });
}

function renderFeed() {
  const container = getCardsContainer();
  if (!container) return;

  const filtered = filterOpportunities();
  const counter = getCountDisplay();
  if (counter) counter.textContent = filtered.length;

  const emptyState = document.getElementById('emptyState');
  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }
  if (emptyState) emptyState.style.display = 'none';

  container.innerHTML = filtered.map(item => `
    <div class="card">
      <div>
        <div class="card-top">
          <span class="card-category">${item.category}</span>
          <button class="card-fav-btn ${isFav(item.id) ? 'is-fav' : ''}" onclick="toggleFavorite(${item.id})">★</button>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.description}</p>
      </div>
      <div>
        <div class="card-meta">
          <span class="meta-tag">📍 ${item.region}</span>
          <span class="meta-tag">💻 ${item.format}</span>
          <span class="meta-tag">👤 ${item.audience.join(', ')}</span>
          ${item.deadline ? `<span class="meta-tag" style="background:#fee2e2;color:#800020;font-weight:700;">⏳ ${item.deadline}</span>` : ''}
        </div>
        <div class="card-actions">
          <button class="btn-card btn-card-outline" onclick="openDetailsModal(${item.id})">Подробнее</button>
          <a href="${item.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-solid">Источник ↗</a>
        </div>
      </div>
    </div>
  `).join('');
}

function handleSearch() {
  const el = document.getElementById('searchInput');
  if (el) currentSearch = el.value;
  renderFeed();
}

function handleFilter() {
  const r = document.getElementById('regionSelect');
  const a = document.getElementById('audienceSelect');
  const f = document.getElementById('formatSelect');
  if (r) currentRegion = r.value;
  if (a) currentAudience = a.value;
  if (f) currentFormat = f.value;
  renderFeed();
}

function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderFeed();
}

function resetFilters() {
  currentCategory = 'all'; currentSearch = ''; currentRegion = 'all'; currentAudience = 'all'; currentFormat = 'all'; isViewingFavoritesOnly = false;
  if (document.getElementById('searchInput')) document.getElementById('searchInput').value = '';
  if (document.getElementById('regionSelect')) document.getElementById('regionSelect').value = 'all';
  if (document.getElementById('audienceSelect')) document.getElementById('audienceSelect').value = 'all';
  if (document.getElementById('formatSelect')) document.getElementById('formatSelect').value = 'all';
  if (document.getElementById('btnViewAll')) document.getElementById('btnViewAll').classList.add('active');
  if (document.getElementById('btnViewFavs')) document.getElementById('btnViewFavs').classList.remove('active');
  document.querySelectorAll('.pill-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.cat === 'all'));
  renderFeed();
}

function applySearchScroll() {
  handleFilter();
  handleSearch();
  const area = document.querySelector('.content-area') || getCardsContainer();
  if (area) area.scrollIntoView({ behavior: 'smooth' });
}

function showAll() {
  isViewingFavoritesOnly = false;
  if (document.getElementById('btnViewAll')) document.getElementById('btnViewAll').classList.add('active');
  if (document.getElementById('btnViewFavs')) document.getElementById('btnViewFavs').classList.remove('active');
  renderFeed();
}

function showFavorites() {
  isViewingFavoritesOnly = true;
  if (document.getElementById('btnViewAll')) document.getElementById('btnViewAll').classList.remove('active');
  if (document.getElementById('btnViewFavs')) document.getElementById('btnViewFavs').classList.add('active');
  renderFeed();
}

function openDetailsModal(id) {
  const item = opportunities.find(o => o.id === id);
  if (!item) return;
  if (document.getElementById('modalCategory')) document.getElementById('modalCategory').textContent = item.category;
  if (document.getElementById('modalTitle')) document.getElementById('modalTitle').textContent = item.title;
  if (document.getElementById('modalDescription')) document.getElementById('modalDescription').textContent = item.description;
  if (document.getElementById('modalFormat')) document.getElementById('modalFormat').textContent = `${item.format} (${item.region})`;
  if (document.getElementById('modalAudience')) document.getElementById('modalAudience').textContent = `${item.audience.join(', ')} (возраст: ${item.ageMin}–${item.ageMax} лет)`;
  
  const deadlineSec = document.getElementById('modalDeadlineSection');
  if (deadlineSec) {
    if (item.deadline) {
      deadlineSec.style.display = 'block';
      document.getElementById('modalDeadline').textContent = item.deadline;
    } else {
      deadlineSec.style.display = 'none';
    }
  }
  if (document.getElementById('modalLink')) document.getElementById('modalLink').href = item.officialUrl;
  const backdrop = document.getElementById('modalBackdrop');
  if (backdrop) backdrop.classList.add('open');
}

function closeModal() {
  const backdrop = document.getElementById('modalBackdrop');
  if (backdrop) backdrop.classList.remove('open');
}

function closeModalOnBackdrop(e) {
  if (e.target.id === 'modalBackdrop') closeModal();
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Запуск
function init() {
  updateFavBadge();
  renderFeed();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}