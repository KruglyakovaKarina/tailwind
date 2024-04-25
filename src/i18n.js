import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          navbarOverview: 'Overview',
          navbarFeatures: 'Features',
          navbarAbout: 'About',
          navbarPricing: 'Pricing',
          navbarLanguage: 'Language',
          navbarSignUp: 'Sign Up',
          bannerTitle: 'Develop your skills without diligence',
          bannerText:
            'A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals.',
          btnGetStarted: 'Get Started',
          bannerBtn2: 'Discount',
          featuresTitle: 'Why we are better than others',
          featureText: 'Conventient study schedule',
          aboutTitlePart1: 'We have been improving our product',
          aboutTitlePart2: 'for many years.',
          aboutText:
            "A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China. Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees.",
          pricingTitle: 'Here are all our plans',
          pricingText: 'A good example of a paragraph contains a topic sentence, details and a conclusion.',
          monthly: 'Monthly',
          yearly: 'Yearly',
          start: 'Start',
          advance: 'Advance',
          premium: 'Premium',
          pricingBenefit1: 'Videos of Lessons',
          pricingBenefit2: 'Homework check',
          pricingBenefit3: 'Additional practical task',
          pricingBenefit4: 'Monthly conferences',
          pricingBenefit5: 'Personal advice from teachers',
          discountTitle: 'Each student can share their discount code for friends',
          discountBtn: 'I have a code',
          footerTitle1: 'Platform',
          footerTitle2: 'Help',
          footerTitle3: 'Contacts',
          footerHelp1: 'How does it works?',
          footerHelp2: 'Where to ask question?',
          footerHelp3: 'How to play?',
          footerHelp4: 'What is needed for this?',
          email: 'Your email',
          subscribeBtn: 'Subscribe',
          footerRights: 'All rights reserved.',
        },
      },
      ru: {
        translation: {
          navbarOverview: 'Обзор',
          navbarFeatures: 'Особенности',
          navbarAbout: 'О нас',
          navbarPricing: 'Цены',
          navbarLanguage: 'Язык',
          navbarSignUp: 'Войти',
          bannerTitle: 'Развивайте свои навыки без усердия',
          bannerText:
            'Хороший пример абзаца содержит тематическое предложение, детали и заключение. Есть много разных видов животных.',
          btnGetStarted: 'Начать',
          bannerBtn2: 'Скидка',
          featuresTitle: 'Почему мы лучше других',
          featureText: 'Удобный график обучения',
          aboutTitlePart1: 'Мы совершенствуем наш продукт',
          aboutTitlePart2: 'на протяжении многих лет.',
          aboutText:
            'Хороший пример абзаца содержит тематическое предложение, детали и заключение. В Китае обитает много разных видов животных. Тигры и леопарды — животные, обитающие в лесах Китая на севере. В джунглях на деревьях качаются обезьяны.',
          pricingTitle: 'Наши тарифные планы',
          pricingText: 'Хороший пример абзаца содержит тематическое предложение, детали и заключение.',
          monthly: 'В месяц',
          yearly: 'В год',
          start: 'Старт',
          advance: 'Продвинутый',
          premium: 'Примиум',
          month: 'месяц',
          year: 'год',
          pricingBenefit1: 'Видео уроков',
          pricingBenefit2: 'Проверка домашнего задания',
          pricingBenefit3: 'Дополнительное практическое задание',
          pricingBenefit4: 'Ежемесячные конференции',
          pricingBenefit5: 'Персональные консультации от преподавателей',
          discountTitle: 'Каждый студент может поделиться своим кодом скидки с друзьями.',
          discountBtn: 'У меня есть код',
          footerTitle1: 'Платформа',
          footerTitle2: 'Помощь',
          footerTitle3: 'Контакты',
          footerHelp1: 'Как это работает?',
          footerHelp2: 'Где задать вопрос?',
          footerHelp3: 'Как пользоваться?',
          footerHelp4: 'Что нужно для этого?',
          email: 'Ваш email',
          subscribeBtn: 'Подписаться',
          footerRights: 'Все права защищены.',
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
