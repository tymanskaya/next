'use client'; // Строго обязательно для Next.js, чтобы работали события клика и скролла

import React from 'react';

// Общие стили для переиспользования
const codeInlineStyle: React.CSSProperties = {
    backgroundColor: '#f5f5f5',
    padding: '2px 6px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '0.9em',
    color: '#c41d7f' // Сделаем инлайн-код чуть ярче
};

const codeBlockStyle: React.CSSProperties = {
    backgroundColor: '#f5f5f5',
    padding: '15px',
    borderRadius: '6px',
    overflowX: 'auto',
    fontFamily: 'monospace',
    fontSize: '0.9em',
    lineHeight: '1.5',
    margin: '10px 0',
    color: '#000'
};

const sidebarTitleStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#595959',
    marginBottom: '12px',
    paddingLeft: '5px'
};

const anchorLinkStyle: React.CSSProperties = {
    display: 'block',
    padding: '8px 12px',
    color: '#1890ff',
    textDecoration: 'none',
    fontSize: '14px',
    borderRadius: '6px',
    transition: 'background 0.2s',
    marginBottom: '4px'
};

export default function JavaScriptOOP() {
    // Функция плавного скролла, адаптированная под Next.js (без перезаписи роутера)
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Мягко меняем хэш в URL без перезагрузки страницы Next.js
            window.history.pushState(null, '', `#${id}`);
        }
    };

    return (
        <div style={{ display: 'flex', gap: '30px', padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>

            {/* Левый Сайдбар навигации */}
            <aside style={{ width: '280px', position: 'sticky', top: '20px', height: 'fit-content' }}>
                <div style={{ backgroundColor: '#fafafa', padding: '15px', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
                    <p style={sidebarTitleStyle}>JavaScript & ООП</p>
                    <a href="#oopBase" onClick={(e) => handleScroll(e, 'oopBase')} style={anchorLinkStyle}>
                        🧱 Что такое ООП (База)
                    </a>
                    <a href="#prototypeFormula" onClick={(e) => handleScroll(e, 'prototypeFormula')} style={anchorLinkStyle}>
                        🧬 Золотая формула прототипов
                    </a>
                    <a href="#prototypeParadox" onClick={(e) => handleScroll(e, 'prototypeParadox')} style={anchorLinkStyle}>
                        🤯 Парадокс Function vs Object
                    </a>
                </div>
            </aside>

            {/* Правый основной Контент */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>

                {/* Секция 1: База ООП */}
                <section id="oopBase" style={{
                    backgroundColor: '#fff',
                    padding: '25px',
                    borderRadius: '12px',
                    borderTop: '6px solid #fadb14',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                    scrollMarginTop: '40px'
                }}>
                    <h2 style={{ marginTop: 0, color: '#ad8b00', fontSize: '22px' }}>Что такое ООП в JavaScript (База)</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p style={{ lineHeight: '1.6', margin: 0, color: '#333' }}>
                            <b>Объектно-Ориентированное Программирование (ООП)</b> &mdash; это подход к написанию кода, где программа состоит из <b>объектов</b>. Каждый объект объединяет в себе данные (<i>свойства</i>) и функции для работы с ними (<i>методы</i>).
                        </p>

                        <div style={{ backgroundColor: '#feffe6', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #fadb14' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#ad8b00' }}>🚗 Главная ментальная модель:</p>
                            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95em', color: '#444' }}>
                                <li><b>Класс (Функция-конструктор):</b> Чертеж автомобиля на бумаге. На нем написано, какими свойствами (цвет, мотор) будет обладать машина, но физически её еще нет.</li>
                                <li><b>Инстанс (Экземпляр):</b> Реальный автомобиль, собранный по этому чертежу через оператор <code style={codeInlineStyle}>new</code>. Он материален и готов к езде.</li>
                            </ul>
                        </div>

                        <div>
                            <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0', color: '#222' }}>Пример создания класса и инстанса:</p>
                            <pre style={codeBlockStyle}>
{`class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    drive() {
        console.log(\`\${this.brand} (\${this.color}) поехала!\`);
    }
}

const myCar = new Car("Audi", "Красная");
myCar.drive(); // "Audi (Красная) поехала!"`}
                            </pre>
                        </div>
                    </div>
                </section>

                {/* Секция 2: Золотая формула */}
                <section id="prototypeFormula" style={{
                    backgroundColor: '#fff',
                    padding: '25px',
                    borderRadius: '12px',
                    borderTop: '6px solid #fadb14',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                    scrollMarginTop: '40px'
                }}>
                    <h2 style={{ marginTop: 0, color: '#ad8b00', fontSize: '22px' }}>🧬 Золотая формула прототипов</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ backgroundColor: '#fffbe6', padding: '18px', borderRadius: '8px', borderLeft: '4px solid #fadb14', lineHeight: '1.6' }}>
                            <p style={{ margin: '0 0 10px 0', fontSize: '1.02em', color: '#1a1a1a' }}>
                                <b>Абсолютно у каждого объекта</b> в JS есть свойство <code style={codeInlineStyle}>__proto__</code>, и это свойство является ссылкой на <code style={codeInlineStyle}>prototype</code> класса или функции-конструктора, с помощью которого/которой был создан данный объект.
                            </p>
                            <p style={{ margin: 0, fontSize: '1.02em', color: '#1a1a1a' }}>
                                В свою очередь, свойство <code style={codeInlineStyle}>prototype</code> является <b>объектом, в котором размещены все методы</b>, доступные для инстансов данного класса.
                            </p>
                        </div>

                        <pre style={codeBlockStyle}>
{`const myArray = [];
// Проверяем золотое правило на массиве:
console.log(myArray.__proto__ === Array.prototype); // true

// Все методы вроде .map() и .filter() лежат в одном месте — в Array.prototype`}
                        </pre>
                    </div>
                </section>

                {/* Секция 3: Парадокс Function vs Object */}
                <section id="prototypeParadox" style={{
                    backgroundColor: '#fff',
                    padding: '25px',
                    borderRadius: '12px',
                    borderTop: '6px solid #ff4d4f',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                    scrollMarginTop: '40px'
                }}>
                    <h2 style={{ marginTop: 0, color: '#cf1322', fontSize: '22px' }}>🤯 Главный парадокс: Цепочка Function и Object</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p style={{ margin: 0, lineHeight: '1.6', color: '#333' }}>
                            В JavaScript встроенные конструкторы замыкаются друг на друга. Происходит это потому, что <code style={codeInlineStyle}>Function</code> &mdash; это объект, а <code style={codeInlineStyle}>Object</code> &mdash; это функция.
                        </p>

                        <div style={{ backgroundColor: '#fff1f0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ff4d4f', fontFamily: 'monospace', fontSize: '0.93em' }}>
                            <div style={{ color: '#cf1322' }}>// Function — это функция, её прототип — Function.prototype</div>
                            <div style={{ color: '#000' }}>console.log(Function.__proto__ === Function.prototype); <span style={{ color: '#389e0d', fontWeight: 'bold' }}>// true</span></div>

                            <div style={{ color: '#cf1322', marginTop: '10px' }}>// Сам прототип функции — это объект, он наследуется от Object</div>
                            <div style={{ color: '#000' }}>console.log(Function.prototype.__proto__ === Object.prototype); <span style={{ color: '#389e0d', fontWeight: 'bold' }}>// true</span></div>

                            <div style={{ color: '#cf1322', marginTop: '10px' }}>// Конструктор Object — это функция, он наследуется от Function!</div>
                            <div style={{ color: '#000' }}>console.log(Object.__proto__ === Function.prototype); <span style={{ color: '#389e0d', fontWeight: 'bold' }}>// true</span></div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
