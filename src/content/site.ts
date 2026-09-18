export type NavLink = {
  label: string;
  href: string;
};

export const nav: {
  brand: string;
  links: NavLink[];
  cta: { label: string; href: string };
} = {
  brand: "1C Agent Pro",
  links: [
    { label: "Как это работает", href: "#process" },
    { label: "Возможности", href: "#features" },
    { label: "Для кого", href: "#industries" },
    { label: "Тарифы", href: "#pricing" },
  ],
  cta: { label: "Получить демо", href: "#pricing" },
};

export const hero = {
  eyebrow: "Мобильное рабочее место торгового агента",
  titleLine1: "Ваши продажи",
  titleLine2: "в",
  titleAccent: "надёжных руках",
  description:
    "Заказы, остатки, визиты и фотоотчёты — прямо из смартфона агента, с полной синхронизацией с вашей 1С в реальном времени.",
  checklist: [
    "Работает на Android и iPhone, онлайн и офлайн",
    "GPS-контроль визитов и оптимальные маршруты",
    "Запуск команды за 1 день, без сложной настройки",
  ],
  primaryCta: { label: "Узнать подробнее", href: "#pricing" },
  secondaryCta: { label: "Как это работает", href: "#process" },
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
  secondary: { label: "WhatsApp / Telegram", href: "#" },
} as const;

export const footer = {
  brand: "1C Agent Pro",
  phone: "+992 92 123 45 67",
  tagline: "Дистрибуция, розница, HoReCa",
  copyright: "© 2026 1C Agent Pro",
} as const;
