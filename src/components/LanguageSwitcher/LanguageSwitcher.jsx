import React from 'react';
import './LanguageSwitcher.scss';

const LanguageSwitcher = () => {
  return (
    <div className="language-switcher">
      <button onClick={() => console.log('Language switched to English!')}>
        English
      </button>
      <button onClick={() => console.log('Language switched to Romanian!')}>
        Romanian
      </button>
    </div>
  );
};

export default LanguageSwitcher;