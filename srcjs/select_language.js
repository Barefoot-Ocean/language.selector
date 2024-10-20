import { reactShinyInput } from 'reactR';
import React, { useState, useEffect, useRef } from 'react';
import './SelectLanguage.css';


const SelectLanguage = ({ configuration, value, setValue }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(value.toUpperCase());
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const modalRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    const handleLanguageSelect = (abbr) => {
        setSelectedLanguage(abbr);
        setIsMenuOpen(false);
        setValue(abbr.toLowerCase());
    };

    return (
        <div className="language-select-container">
            <div
                className="language-select-radial-button"
                style={{
                    backgroundImage: `url(${configuration.main_icon_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '60px',
                    width: '60px'
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <img
                    style={{
                        height: 'inherit',
                        width: 'inherit'
                    }}
                    src={configuration.main_icon_path}
                    alt="languages"
                />
            </div>

            {isMobile ? (
                <div className={`language-select-modal ${isMenuOpen ? 'view' : ''}`}>
                    <div className="language-select-modal-content" ref={modalRef}>
                        <div className="language-select-modal-options">
                            {configuration.languages.map(({ name, lang, icon  }) => (
                                <button
                                    key={lang}
                                    className={`language-select-modal-item ${selectedLanguage.toUpperCase() === lang.toUpperCase() ? 'language-select-menu-item-selected' : ''}`}
                                    style={{
                                        backgroundImage: `
                                            linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
                                            url(${configuration.icons_path}/${icon})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
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
                    {configuration.languages.map(({ name, lang,icon }) => (
                        <button
                            key={name}
                            className={`language-select-menu-item ${selectedLanguage.toUpperCase() === lang.toUpperCase() ? 'language-select-menu-item-selected' : ''}`}
                            style={{
                                backgroundImage: `
                                    linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
                                    url(${configuration.icons_path}/${icon})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
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

