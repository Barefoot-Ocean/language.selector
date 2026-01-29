import { reactShinyInput } from 'reactR';
import React, { useState, useEffect, useRef } from 'react';
import './SelectLanguage.css';


const SelectLanguage = ({ configuration, value, setValue }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(value.toUpperCase());
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        if (isMenuOpen && !isMobile) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen, isMobile]);

    const handleLanguageSelect = (abbr) => {
        setSelectedLanguage(abbr);
        setIsMenuOpen(false);
        setValue(abbr.toLowerCase());
    };

    // Close modal when clicking on backdrop (not content)
    const handleModalBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            setIsMenuOpen(false);
        }
    };

    // Get CSS class for language flag (uses bundled CSS)
    const getFlagClass = (lang) => `language-flag language-flag-${lang.toLowerCase()}`;

    return (
        <div className="language-select-container" ref={containerRef}>
            <div
                className={`language-select-radial-button language-flag language-flag-main`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            {isMobile ? (
                <div
                    className={`language-select-modal ${isMenuOpen ? 'view' : ''}`}
                    onClick={handleModalBackdropClick}
                >
                    <div className="language-select-modal-content">
                        <div className="language-select-modal-options">
                            {configuration.languages.map(({ name, lang }) => (
                                <button
                                    key={lang}
                                    className={`language-select-modal-item ${getFlagClass(lang)} ${selectedLanguage.toUpperCase() === lang.toUpperCase() ? 'language-select-menu-item-selected' : ''}`}
                                    onClick={() => handleLanguageSelect(lang.toUpperCase())}
                                >
                                    {lang.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`language-select-menu ${isMenuOpen ? 'open' : 'closed'}`}>
                    {configuration.languages.map(({ name, lang }) => (
                        <button
                            key={name}
                            className={`language-select-menu-item ${getFlagClass(lang)} ${selectedLanguage.toUpperCase() === lang.toUpperCase() ? 'language-select-menu-item-selected' : ''}`}
                            onClick={() => handleLanguageSelect(lang.toUpperCase())}
                        >
                            {lang.toUpperCase()}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default function initSelectLanguage(){
  return reactShinyInput(
    '.select_language',
    'language.selector.select_language',
    SelectLanguage);
}
