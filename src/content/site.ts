export type NavLink = {
  label: string;
  href: string;
};

export const nav: {
  brand: string;
  tagline: string;
  links: NavLink[];
  phone: string;
  callback: string;
  cta: { label: string; href: string };
} = {
  brand: "1C Agent Pro",
  tagline: "Мобильное рабочее место торгового представителя",
  links: [
    { label: "О продукте", href: "#about" },
    { label: "Возможности", href: "#features" },
    { label: "Как это работает", href: "#process" },
    { label: "Тарифы", href: "#pricing" },
    { label: "Для кого", href: "#industries" },
    { label: "Контакты", href: "#cta" },
  ],
  phone: "+992 92 123 45 67",
  callback: "Заказать звонок",
  cta: { label: "Получить демо", href: "#pricing" },
};

export const hero = {
  eyebrow: "Мобильное рабочее место торгового представителя",
  titleLine1: "Ваши продажи",
  titleLine2: "в",
  titleAccent: "надёжных руках",
  description:
    "Современное решение для эффективной работы торговой команды — заказы, визиты и фотоотчёты с полной синхронизацией с вашей 1С в реальном времени.",
  checklist: [
    "Полная интеграция с 1С",
    "Контроль агентов в реальном времени",
    "Больше визитов. Больше заказов. Больше прибыли.",
  ],
  script: "Больше возможностей для вашего бизнеса!",
  primaryCta: { label: "Узнать подробнее", href: "#pricing" },
  secondaryCta: { label: "Смотреть видео (1 мин)", href: "#process" },
  phoneMock: {
    routeLabel: "Маршрут на сегодня",
    stops: [
      { name: "ООО Сино Трейд", time: "09:00" },
      { name: "Маркет 24", time: "10:30" },
      { name: "ИП Каримов", time: "12:00" },
      { name: "Супермаркет Вахдат", time: "14:00" },
    ],
    summaryLabel: "Итого за визит",
    summary: [
      { label: "Заказ создан", value: "1 290 смн" },
      { label: "Фотоотчёт", value: "done" as const },
      { label: "Синхронизация", value: "done" as const },
    ],
  },
  floatingBadges: {
    visits: "4 визита сегодня",
    growth: "+32% продаж",
  },
} as const;

export const stats = [
  { value: "+32%", label: "рост продаж" },
  { value: "−40%", label: "экономия времени" },
  { value: "100%", label: "данные в 1С онлайн" },
  { value: "1 день", label: "запуск команды" },
] as const;

export const advantages = {
  eyebrow: "Наши преимущества",
  title: "Всё, что нужно для эффективной работы",
  description: "Полный набор возможностей для торгового представителя — в одном решении.",
  script: "Работайте эффективнее каждый день!",
  items: [
    {
      icon: "smartphone",
      title: "Работает на Android и iPhone",
      description: "Удобное мобильное приложение для любой команды.",
    },
    {
      icon: "wifi",
      title: "Онлайн и офлайн режим",
      description: "Работает даже без интернета — все данные сохраняются.",
    },
    {
      icon: "blocks",
      title: "Полная интеграция с 1С",
      description: "Заказы, клиенты, остатки и документы автоматически в вашей 1С.",
    },
    {
      icon: "navigation",
      title: "GPS-контроль и маршруты",
      description: "Контроль местоположения, планирование маршрутов и отчёты о визитах.",
    },
    {
      icon: "camera",
      title: "Фотоотчёты и задания",
      description: "Фото точек, мерчендайзинга и чеков. Гибкие задания для агента.",
    },
    {
      icon: "rocket",
      title: "Простая установка и быстрый старт",
      description: "Минимальные настройки. Можно начать работу уже за 1 день.",
    },
    {
      icon: "layout-dashboard",
      title: "Удобный и понятный интерфейс",
      description: "Интуитивно понятное приложение, минимум обучения.",
    },
    {
      icon: "trending-up",
      title: "Повышает продажи и контроль",
      description: "Больше визитов, больше заказов, больше прозрачности.",
    },
    {
      icon: "headphones",
      title: "Надёжная поддержка",
      description: "Мы рядом на всех этапах: внедрение, обучение, сопровождение.",
    },
    {
      icon: "gem",
      title: "Подходит для любой отрасли",
      description: "Дистрибуция, опт, производство, розничные сети и FMCG.",
    },
  ],
} as const;

export const process = {
  eyebrow: "Шаг за шагом",
  title: "Реальный рабочий день агента",
  description:
    "Всё, что нужно для эффективной работы — в одном приложении, от синхронизации утром до отчёта в 1С вечером.",
  steps: [
    {
      icon: "refresh-cw",
      title: "Синхронизация",
      description:
        "Загрузка клиентов, товаров, цен и остатков. Работает даже при нестабильном интернете.",
    },
    {
      icon: "route",
      title: "Маршрут",
      description:
        "Оптимальный план визитов с учётом геолокации, экономия времени в дороге.",
    },
    {
      icon: "map-pin",
      title: "Визит к клиенту",
      description: "Карточка клиента: история заказов, долги, контакты — всё под рукой.",
    },
    {
      icon: "shopping-cart",
      title: "Оформление заказа",
      description:
        "Подбор товаров из каталога, актуальные цены и остатки, заказ за пару минут.",
    },
    {
      icon: "camera",
      title: "Фотоотчёт",
      description:
        "Фото выкладки и рекламных материалов — доказательство визита, рост дисциплины.",
    },
    {
      icon: "check-circle-2",
      title: "Завершение",
      description:
        "Заказы, фото и визиты автоматически синхронизируются в 1С в реальном времени.",
    },
  ],
} as const;

export const features = {
  eyebrow: "Всё необходимое в одном приложении",
  title: "Возможности 1C Agent Pro",
  description:
    "Полный набор инструментов для эффективной работы торгового агента — от базы клиентов до GPS-трека визита.",
  items: [
    {
      icon: "users",
      title: "Клиенты",
      description:
        "База клиентов, история заказов, долги и классификация по типам точек.",
    },
    {
      icon: "package",
      title: "Товары",
      description:
        "Актуальные цены, остатки и фото номенклатуры прямо в карточке товара.",
    },
    {
      icon: "shopping-cart",
      title: "Заказ",
      description:
        "Быстрое оформление заказа: добавление товаров, скидки, автоподбор склада.",
    },
    {
      icon: "map-pin",
      title: "Визиты",
      description:
        "План на день, GPS-контроль, трек маршрута и история фактических визитов.",
    },
    {
      icon: "clipboard-list",
      title: "Задания",
      description:
        "Поручения и плановые задачи от руководителя с контролем сроков выполнения.",
    },
    {
      icon: "camera",
      title: "Фотоотчёт",
      description: "Фото торговых точек, выкладки, мерчендайзинга и контроль чеков.",
    },
  ],
} as const;

export const industries = {
  eyebrow: "Решение для любого бизнеса",
  title: "Для кого подходит 1C Agent Pro",
  description:
    "Одно решение для разных моделей полевых продаж — от дистрибуции до HoReCa.",
  items: [
    {
      icon: "truck",
      title: "Дистрибьюторы",
      points: ["Контроль маршрутов", "Больше покрытия", "Актуальные остатки"],
    },
    {
      icon: "factory",
      title: "Производители",
      points: ["Контроль мерчендайзеров", "Обратная связь с рынка", "Анализ спроса"],
    },
    {
      icon: "store",
      title: "Розничные сети",
      points: ["Проверка выкладки", "Стандарты в рознице", "Быстрая передача в 1С"],
    },
    {
      icon: "users-round",
      title: "Торговые команды",
      points: ["Планирование маршрутов", "Онлайн-обмен с 1С", "Мотивация агентов"],
    },
    {
      icon: "utensils",
      title: "HoReCa",
      points: ["Актуальный ассортимент", "Заказы на месте", "Спец. условия"],
    },
  ],
} as const;

export const managerControl = {
  eyebrow: "Полный контроль в реальном времени",
  title: "Полный контроль для руководителя",
  description:
    "Вся работа торговой команды — в вашей 1С: прозрачно, наглядно, эффективно.",
  points: [
    {
      icon: "map-pin",
      title: "Геолокация агентов",
      description: "Где находятся сотрудники, каких клиентов посещают",
    },
    {
      icon: "shopping-cart",
      title: "Заказы и продажи",
      description: "Все заказы сразу в 1С, актуальные остатки и цены",
    },
    {
      icon: "bar-chart-3",
      title: "Аналитика и отчёты",
      description: "Показатели по агентам, клиентам, территориям и товарам",
    },
  ],
  dashboard: {
    title: "Аналитика агента Pro",
    date: "18.09.2026",
    metrics: [
      { label: "Агентов", value: "2" },
      { label: "Заказы, смн", value: "34 000" },
      { label: "Продажи, смн", value: "20 500" },
      { label: "Визитов", value: "32" },
    ],
    agents: [
      { name: "Саидов Б.", status: "online" as const, label: "Онлайн" },
      { name: "Каримов А.", status: "online" as const, label: "В пути" },
      { name: "Ибрагимов С.", status: "busy" as const, label: "Визит" },
      { name: "Насруллаев Д.", status: "online" as const, label: "Онлайн" },
    ],
  },
} as const;

export const pricing = {
  eyebrow: "Тарифы и условия",
  title: "Простая и понятная стоимость",
  description:
    "Выберите подходящий тариф для вашей команды. Оплата по факту, внедрение и обучение включены.",
  tiers: [
    {
      tag: "Standard",
      name: "Базовые продажи",
      priceRange: "40–50",
      unit: "смн / агент / мес",
      highlighted: false,
      badge: null,
      features: [
        "Клиенты, товары, цены, остатки",
        "Заказы, продажи, возвраты",
        "Синхронизация с 1С",
      ],
    },
    {
      tag: "Pro",
      name: "Контроль и аналитика",
      priceRange: "51–60",
      unit: "смн / агент / мес",
      highlighted: true,
      badge: "Рекомендуем",
      features: [
        "Всё из Standard",
        "Фотоотчёт и фотоанализ",
        "Визиты, маршруты, геолокация",
        "SMS-бонусы при подключении",
      ],
    },
    {
      tag: "Business",
      name: "Полный контроль",
      priceRange: "60–70",
      unit: "смн / агент / мес",
      highlighted: false,
      badge: null,
      features: [
        "Всё из Pro",
        "Мобильный кабинет руководителя",
        "Сводные и сравнительные отчёты",
      ],
    },
  ],
} as const;

export const cta = {
  title: "Готовы навести порядок в полевых продажах?",
  description:
    "Оставьте заявку — подберём тариф, проведём демонстрацию 1C Agent Pro и рассчитаем стоимость для вашей команды.",
  primary: { label: "Запросить демо", href: "#" },
  secondary: { label: "Написать в WhatsApp", href: "#" },
} as const;

export const footer = {
  brand: "1C Agent Pro",
  phone: "+992 92 123 45 67",
  tagline: "Дистрибуция, розница, HoReCa",
  copyright: "© 2026 1C Agent Pro",
} as const;

export const whatsappPrefill =
  "Здравствуйте! Хочу узнать больше о 1C Agent Pro и получить демо.";

export const demoForm = {
  triggerLabel: "Получить демо",
  title: "Получить демо 1C Agent Pro",
  subtitle: "Оставьте контакты — перезвоним, ответим на вопросы и проведём демонстрацию.",
  fields: {
    name: { label: "Имя", placeholder: "Как к вам обращаться" },
    phone: { label: "Телефон", placeholder: "+992 __ ___ __ __" },
    email: { label: "Email", placeholder: "you@company.com", optional: "необязательно" },
  },
  submit: "Отправить заявку",
  submitting: "Отправляем…",
  whatsapp: "Написать в WhatsApp",
  success: {
    title: "Заявка отправлена!",
    text: "Мы свяжемся с вами в ближайшее время. Спасибо за интерес к 1C Agent Pro.",
  },
  error: "Не удалось отправить. Попробуйте ещё раз или напишите нам в WhatsApp.",
  consent:
    "Нажимая «Отправить заявку», вы соглашаетесь на обработку персональных данных.",
} as const;
