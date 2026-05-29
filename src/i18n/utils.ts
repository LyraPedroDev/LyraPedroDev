import ptBR from './pt-BR.json';
import en from './en.json';

const dictionaries = {
  'pt-BR': ptBR,
  en: en,
};

export function t(key: string, lang: 'pt-BR' | 'en' = 'pt-BR') {
  const dictionary = dictionaries[lang] || ptBR;
  return (dictionary as Record<string, string>)[key] || key;
}
