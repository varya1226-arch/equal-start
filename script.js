// ==========================================
// 1. БАЗА ДАННЫХ ВОЗМОЖНОСТЕЙ (opportunities)
// ==========================================
const opportunities = [
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
    deadline: "Весна 2026",
    description: "Флагманский конкурс платформы «Россия — страна возможностей». Миллионные гранты на образование и развитие проектов.",
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
    description: "Командная инженерная олимпиада. Победа дает 100 баллов ЕГЭ или льготы БВИ в ведущие IT и технические вузы.",
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
    description: "Конкурсная поддержка молодежных инициатив до 1,5 млн рублей на реализацию социально значимых проектов.",
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
    description: "Единая система учета волонтерской деятельности. Дает верифицированные часы и баллы к поступлению.",
    officialUrl: "https://dobro.ru"
  },
  {
    id: 5,
    title: "Всероссийский студенческий проект «Твой Ход»",
    category: "Кейс-чемпионаты",
    subjects: ["стартапы", "лидерство", "проекты", "студенты"],
    format: "Онлайн + Офлайн",
    region: "Все регионы",
    ageMin: 17,
    ageMax: 25,
    audience: ["Студенты"],
    free: true,
    deadline: "Осень 2026",
    description: "Студенческое сообщество: треки «Делаю» и «Первопроходец» с премиями до 1 000 000 рублей.",
    officialUrl: "https://tvoyhod.online"
  },
  {
    id: 6,
    title: "Образовательный центр «Сириус»: научные смены",
    category: "Образование",
    subjects: ["математика", "физика", "химия", "биология", "it"],
    format: "Офлайн (г. Сочи)",
    region: "Все регионы",
    ageMin: 12,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Ежемесячно",
    description: "Интенсивные профильные смены в Сочи для одаренных школьников под руководством ведущих ученых РАН.",
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
    description: "Масштабная олимпиада для студентов. Предоставляет льготы в магистратуру и стажировки в топ-компаниях.",
    officialUrl: "https://yandex.ru/profi"
  },
  {
    id: 8,
    title: "Стажировка в Аналитике AI-агентов (Сбер)",
    category: "Стажировки",
    subjects: ["ai", "искусственный интеллект", "nlp", "it"],
    format: "Гибрид / Москва",
    region: "Москва",
    ageMin: 18,
    ageMax: 26,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Срочный отбор",
    description: "Разработка автономных AI-агентов в экосистеме Сбера. Практика применения современных LLM-моделей.",
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
    format: "Офлайн / Гибрид",
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
    description: "Прожарка резюме и персональные консультации по отбору в консалтинг группы ДРТ (экс-Deloitte).",
    officialUrl: "https://delret.ru"
  },
  {
    id: 103,
    title: "Воркшоп «Оставь свой след» (ДРТ х Касперский)",
    category: "Карьера",
    subjects: ["it", "кибербезопасность", "консалтинг"],
    format: "Офлайн (Москва)",
    region: "Москва",
    ageMin: 18,
    ageMax: 26,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "12 ноября",
    description: "Практический воркшоп экспертов кибербезопасности и консалтинга для студентов IT-специальностей.",
    officialUrl: "https://delret.ru"
  },
  {
    id: 104,
    title: "Форум «Город.Карьера.Бизнес.2026» (Ломоносов)",
    category: "Карьера",
    subjects: ["карьера", "бизнес", "предпринимательство"],
    format: "Офлайн",
    region: "Москва",
    ageMin: 16,
    ageMax: 30,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "14 ноября",
    description: "Масштабный молодежный форум карьеры в кластере «Ломоносов» с презентациями ключевых стажировок Москвы.",
    officialUrl: "https://moscow.ru"
  },
  {
    id: 105,
    title: "Бесплатный AI Кампус от МТС Банка",
    category: "Образование",
    subjects: ["ai", "fintech", "it", "машинное обучение"],
    format: "Онлайн / Смешанный",
    region: "Все регионы",
    ageMin: 18,
    ageMax: 28,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "15 ноября",
    description: "Образовательный онлайн-кампус для разработчиков и аналитиков по внедрению AI в финтех.",
    officialUrl: "https://mtsbank.ru"
  },
  {
    id: 106,
    title: "Онлайн-интенсив «Карьерный компас» (ДОМ.РФ)",
    category: "Карьера",
    subjects: ["финансы", "аналитика", "строительство"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 17,
    ageMax: 25,
    audience: ["Студенты"],
    free: true,
    deadline: "17–19 ноября",
    description: "Трехдневный карьерный интенсив: погружение в финансовый институт развития в жилищной сфере.",
    officialUrl: "https://xn--d1aqf.xn--p1ai"
  },
  {
    id: 107,
    title: "Вебинар МИЭФ: «AI в финансах»",
    category: "Образование",
    subjects: ["финансы", "ai", "миэф", "экономика"],
    format: "Онлайн",
    region: "Все регионы",
    ageMin: 17,
    ageMax: 30,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "20 ноября",
    description: "Вебинар программы «Финансовая экономика» МИЭФ ВШЭ: заменит ли искусственный интеллект аналитиков.",
    officialUrl: "https://mief.hse.ru"
  },
  {
    id: 108,
    title: "Школа Т2 x ВШЭ: «Big Data & Продуктовый подход»",
    category: "Кейс-чемпионаты",
    subjects: ["big data", "телеком", "it", "продуктовый подход"],
    format: "Смешанный",
    region: "Москва",
    ageMin: 18,
    ageMax: 26,
    audience: ["Студенты"],
    free: true,
    deadline: "23–26 ноября",
    description: "Практический командный кейс на реальных данных мобильного оператора Т2 под монетизацию данных.",
    officialUrl: "https://career.hse.ru"
  },
  {
    id: 109,
    title: "VK Education в Вышке: «Теория игр в карьере»",
    category: "Карьера",
    subjects: ["теория игр", "it", "vk", "математика"],
    format: "Офлайн (Покровка)",
    region: "Москва",
    ageMin: 17,
    ageMax: 25,
    audience: ["Студенты"],
    free: true,
    deadline: "24–25 ноября",
    description: "Лекция и нетворкинг с разработчиками VK: использование принципов теории игр в карьерных траекториях.",
    officialUrl: "https://education.vk.company"
  },
  {
    id: 110,
    title: "Школа Авито x ВШЭ: «Запуск продукта: от идеи до питча»",
    category: "Кейс-чемпионаты",
    subjects: ["продакт", "авито", "стартапы", "питчинг"],
    format: "Смешанный",
    region: "Москва",
    ageMin: 18,
    ageMax: 26,
    audience: ["Студенты"],
    free: true,
    deadline: "25–30 ноября",
    description: "Разработка продуктового функционала и защита перед ведущими продакт-менеджерами Авито.",
    officialUrl: "https://career.hse.ru"
  },
  {
    id: 111,
    title: "Консультант в стратегический консалтинг (ТеДо)",
    category: "Стажировки",
    subjects: ["стратегия", "консалтинг", "тедо", "экономика"],
    format: "Гибрид",
    region: "Москва",
    ageMin: 19,
    ageMax: 26,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Открытый отбор",
    description: "Практика бизнес-консультирования «Технологии Доверия» (экс-PwC): решение стратегических задач бизнеса.",
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
    description: "Оптимизация цепочек поставок, инвестпрограмм и операционной модели ведущих компаний ТЭК.",
    officialUrl: "https://tedo.ru"
  },
  {
    id: 113,
    title: "Стажёрская программа ДОМ.РФ (4 трека)",
    category: "Стажировки",
    subjects: ["финансы", "it", "юриспруденция", "аналитика"],
    format: "Гибрид",
    region: "Москва",
    ageMin: 18,
    ageMax: 25,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Идет прием",
    description: "Оплачиваемая полугодовая стажировка в финансовом институте с возможностью перехода в штат.",
    officialUrl: "https://xn--d1aqf.xn--p1ai/career"
  },
  {
    id: 114,
    title: "Стажёрская программа «Прыжок тигра» (А7)",
    category: "Стажировки",
    subjects: ["маркетинг", "бизнес", "продажи"],
    format: "Офлайн",
    region: "Москва",
    ageMin: 18,
    ageMax: 25,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Ноябрь 2026",
    description: "Интенсивная программа развития талантов с менторством топ-менеджмента группы А7.",
    officialUrl: "https://a7.ru"
  },
  {
    id: 115,
    title: "Стажер в отдел ТВ-закупок (КИТ1217)",
    category: "Стажировки",
    subjects: ["медиа", "реклама", "тв", "маркетинг"],
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
    subjects: ["госслужба", "промышленность", "вэд", "экономика"],
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
    subjects: ["культура", "госуправление", "искусство"],
    format: "Офлайн",
    region: "Москва",
    ageMin: 18,
    ageMax: 27,
    audience: ["Студенты"],
    free: true,
    deadline: "Ноябрь 2026",
    description: "Координация федеральных проектов в сфере культурного наследия и искусства.",
    officialUrl: "https://culture.gov.ru"
  },
  {
    id: 118,
    title: "Стажер-аналитик данных в инвестпроектах (Содружество)",
    category: "Стажировки",
    subjects: ["инвестиции", "финансы", "аналитика"],
    format: "Гибрид",
    region: "Москва",
    ageMin: 19,
    ageMax: 26,
    audience: ["Студенты", "Выпускники"],
    free: true,
    deadline: "Набор открыт",
    description: "Оценка финансовой эффективности крупных инвестиционных проектов и построение моделей в Excel.",
    officialUrl: "https://sodrugestvo.ru"
  },
  {
    id: 119,
    title: "Аналитик M&A и стратегии (СУЭК)",
    category: "Стажировки",
    subjects: ["m&a", "корпоративные финансы", "стратегия"],
    format: "Офлайн",
    region: "Москва",
    ageMin: 20,
    ageMax: 27,
    audience: ["Выпускники", "Студенты"],
    free: true,
    deadline: "Срочный отбор",
    description: "Участие в сделках слияний и поглощений (M&A) и разработка стратегии добывающей компании СУЭК.",
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
    description: "Разработка ML-моделей кредитного скоринга и рекомендательных алгоритмов для агро-маркетплейса.",
    officialUrl: "https://pole.rf"
  },
  {
    id: 121,
    title: "Олимпиадная школа «Кружок»: подготовка к ВсОШ",
    category: "Онлайн-школы",
    subjects: ["олимпиады", "всош", "экономика", "математика"],
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
    subjects: ["химия", "биология", "физика", "олимпиады"],
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
    subjects: ["математика", "программирование", "it"],
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
    subjects: ["математика", "обществознание", "бви", "история"],
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
    subjects: ["химия", "биология", "физика", "бви"],
    format: "Очно-заочный",
    region: "Все регионы",
    ageMin: 13,
    ageMax: 18,
    audience: ["Школьники"],
    free: true,
    deadline: "Ноябрь 2026",
    description: "Олимпиада 1-го и 2-го уровней: результаты засчитываются МФТИ, НГУ, СПбГУ и МГТУ им. Баумана для БВИ.",
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

// ==========================================
// 2. ДВИЖОК САЙТА (ФИЛЬТРАЦИЯ, КЛИКИ, МОДАЛКА)
// ==========================================

let currentCategory = 'all';
let currentSearch = '';
let currentRegion = 'all';
let currentAudience = 'all';
let currentFormat = 'all';
let isViewingFavoritesOnly = false;
let favorites = JSON.parse(localStorage.getItem('ravny_favorites') || '[]');

const cardsContainer = document.getElementById('cardsContainer');
const countDisplay = document.getElementById('countDisplay');
const emptyState = document.getElementById('emptyState');
const favBadge = document.getElementById('favBadge');
const feedTitle = document.getElementById('feedTitle');

function updateFavBadge() { 
  if (favBadge) favBadge.textContent = favorites.length; 
}

function isFav(id) { 
  return favorites.includes(id); 
}

function toggleFavorite(id) {
  favorites = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
  localStorage.setItem('ravny_favorites', JSON.stringify(favorites));
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
    if (currentAudience !== 'all' && !item.audience.some(a => a.toLowerCase().includes(currentAudience.toLowerCase()))) return false;
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
  if (!cardsContainer) return;
  const filtered = filterOpportunities();
  if (countDisplay) countDisplay.textContent = filtered.length;

  if (filtered.length === 0) {
    cardsContainer.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  cardsContainer.innerHTML = filtered.map(item => `
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
  document.querySelectorAll('.pill-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.cat === cat));
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
  if (feedTitle) feedTitle.textContent = 'Каталог возможностей';
  document.querySelectorAll('.pill-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.cat === 'all'));
  renderFeed();
}

function applySearchScroll() { 
  handleFilter(); 
  handleSearch(); 
  const area = document.querySelector('.content-area');
  if (area) area.scrollIntoView({ behavior: 'smooth' }); 
}

function showAll() { 
  isViewingFavoritesOnly = false; 
  if (document.getElementById('btnViewAll')) document.getElementById('btnViewAll').classList.add('active');
  if (document.getElementById('btnViewFavs')) document.getElementById('btnViewFavs').classList.remove('active');
  if (feedTitle) feedTitle.textContent = 'Каталог возможностей'; 
  renderFeed(); 
}

function showFavorites() { 
  isViewingFavoritesOnly = true; 
  if (document.getElementById('btnViewAll')) document.getElementById('btnViewAll').classList.remove('active');
  if (document.getElementById('btnViewFavs')) document.getElementById('btnViewFavs').classList.add('active');
  if (feedTitle) feedTitle.textContent = 'Избранные возможности'; 
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

// Автозапуск отрисовки при загрузке документа
document.addEventListener('DOMContentLoaded', () => {
  updateFavBadge();
  renderFeed();
});

// Прямой вызов на случай, если DOMContentLoaded уже отработал
updateFavBadge();
renderFeed();
