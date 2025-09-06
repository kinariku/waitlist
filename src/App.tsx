import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import WaitlistForm from './components/WaitlistForm';
import { translations } from './utils/translations';
import { Language as LanguageType } from './types';

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [languages] = useState<LanguageType[]>([
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ]);

  const currentTranslations = translations[currentLanguage];

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-8">
          <div className="w-full max-w-md mx-auto">
          {/* App Icon and Name */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 floating-animation pulse-glow">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight">
              {currentTranslations.hero.title}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
              {currentTranslations.hero.subtitle}
            </p>
          </div>
          
          {/* Waitlist Form */}
          <WaitlistForm translations={currentTranslations} currentLanguage={currentLanguage} />
        </div>
      </main>

      {/* Language Toggle - Bottom */}
        <footer className="pb-4 sm:pb-6 md:pb-8">
          <div className="flex justify-center px-4">
            <div className="flex items-center space-x-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  currentLanguage === lang.code
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-100'
                }`}
                aria-label={`Switch to ${lang.name}`}
              >
                <span className="mr-1">{lang.flag}</span>
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
