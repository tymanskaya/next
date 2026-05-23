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
                    <a href="#fourPillars" onClick={(e) => handleScroll(e, 'fourPillars')} style={anchorLinkStyle}>
                        🏛️ 4 столпа ООП в JS
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
                {/* Карточка железного правила с идеальным выводом */}


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
                    <section id="fourPillars" style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #2f54eb', // Глубокий синий цвет архитектуры
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        marginTop: '40px',
                        scrollMarginTop: '40px',
                        fontFamily: 'sans-serif'
                    }}>
                        <h2 style={{ marginTop: 0, color: '#1d39c4', fontSize: '22px' }}>🏛️ Четыре столпа ООП в реалиях JavaScript</h2>
                        <p style={{ lineHeight: '1.6', color: '#333' }}>
                            ООП держится на четырех базовых принципах. Давайте разберем, как они работают в современном JS:
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', marginTop: '20px' }}>

                            {/* 1. ИНКАПСУЛЯЦИЯ */}
                            <div style={{ backgroundColor: '#f0f5ff', padding: '18px', borderRadius: '8px', borderLeft: '4px solid #2f54eb' }}>
                                <h3 style={{ margin: '0 0 8px 0', color: '#1d39c4', fontSize: '18px' }}>1. Инкапсуляция (Скрытие данных)</h3>
                                <p style={{ margin: '0 0 12px 0', fontSize: '0.95em', lineHeight: '1.5' }}>
                                    Это объединение данных и методов для работы с ними внутри одного объекта, а также **ограничение прямого доступа** к внутренностям извне. В современном JS для создания приватных полей используется символ решетки <code style={codeInlineStyle}>#</code>.
                                </p>
                                <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', padding: '12px' }}>
{`class BankAccount {
    #balance = 0; // Приватное свойство (скрыто от внешнего мира)

    deposit(amount) {
        if (amount > 0) this.#balance += amount; // Изменение только через метод
    }

    getBalance() { return this.#balance; } // Геттер для безопасного чтения
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); // 500
console.log(account.#balance);      // ❌ SyntaxError: приватное поле нельзя вызвать напрямую!`}
            </pre>
                            </div>

                            {/* 2. НАСЛЕДОВАНИЕ */}
                            <div style={{ backgroundColor: '#f6ffed', padding: '18px', borderRadius: '8px', borderLeft: '4px solid #52c41a' }}>
                                <h3 style={{ margin: '0 0 8px 0', color: '#237804', fontSize: '18px' }}>2. Наследование (Передача способностей)</h3>
                                <p style={{ margin: '0 0 12px 0', fontSize: '0.95em', lineHeight: '1.5' }}>
                                    Позволяет создать дочерний класс на основе родительского, чтобы не дублировать код. Дочерний класс получает все методы родителя. Реализуется через ключевое слово <code style={codeInlineStyle} >extends</code> (а под капотом работает наша золотая формула прототипов).
                                </p>
                                <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', padding: '12px' }}>
{`class Animal {
    constructor(name) { this.name = name; }
    eat() { console.log(\`\${this.name} кушает\`); }
}

// Dog наследует всё от Animal
class Dog extends Animal {
    bark() { console.log(\`\${this.name} лает: Гав!\`); }
}

const rex = new Dog("Рекс");
rex.eat();  // "Рекс кушает" (взято у родителя через __proto__)
rex.bark(); // "Рекс лает: Гав!" (собственный метод)`}
            </pre>
                            </div>

                            {/* 3. ПОЛИМОРФИЗМ */}
                            <div style={{ backgroundColor: '#fff7e6', padding: '18px', borderRadius: '8px', borderLeft: '4px solid #ffa940' }}>
                                <h3 style={{ margin: '0 0 8px 0', color: '#d46b08', fontSize: '18px' }}>3. Полиморфизм (Многообразие форм)</h3>
                                <p style={{ margin: '0 0 12px 0', fontSize: '0.95em', lineHeight: '1.5' }}>
                                    Возможность использовать один и тот же метод для разных классов, при этом каждый класс выполнит его по-своению (**переопределение методов**).
                                </p>
                                <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', padding: '12px' }}>
{`class Instrument {
    makeSound() { console.log("Какой-то звук"); }
}

class Guitar extends Instrument {
    makeSound() { console.log("Брsection-нь!"); } // Переопределили метод родителя
}

class Drum extends Instrument {
    makeSound() { console.log("Бум-бам!"); }      // Переопределили метод родителя
}

const orchestra = [new Guitar(), new Drum()];
orchestra.forEach(item => item.makeSound()); // Выдаст: "Брsection-нь!", затем "Бум-бам!"`}
            </pre>
                            </div>

                            {/* 4. АБСТРАКЦИЯ */}
                            <div style={{ backgroundColor: '#fff0f6', padding: '18px', borderRadius: '8px', borderLeft: '4px solid #eb2f96' }}>
                                <h3 style={{ margin: '0 0 8px 0', color: '#9e1055', fontSize: '18px' }}>4. Абстракция (Выделение главного)</h3>
                                <p style={{ margin: '0 0 12px 0', fontSize: '0.95em', lineHeight: '1.5' }}>
                                    Это сокрытие сложных деталей реализации и предоставление пользователю только простого и понятного интерфейса. Нам важно *что* делает объект, а не *как* он устроен внутри.
                                </p>
                                <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', padding: '12px' }}>
{`class CoffeeMachine {
    // Пользователю не нужно знать физику нагрева воды и давление помпы
    #heatWater() { console.log("Вода нагревается до 95 градусов..."); }
    #grindBeans() { console.log("Помол зерен..."); }

    // Всё сложная внутренняя кухня запускается одной простой кнопкой:
    makeCoffee() {
        this.#grindBeans();
        this.#heatWater();
        console.log("Кофе готов! ☕");
    }
}

const machine = new CoffeeMachine();
machine.makeCoffee(); // Юзер нажал одну кнопку и получил результат.`}
            </pre>
                            </div>

                        </div>
                    </section>
                    {/* Сводная таблица "Коротко о главном" */}
                    <div style={{ marginTop: '30px', fontFamily: 'sans-serif' }}>
                        <h3 style={{ fontSize: '18px', color: '#111', marginBottom: '15px' }}>Коротко о главном</h3>

                        <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92em' }}>
                                <thead>
                                <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #f0f0f0' }}>
                                    <th style={{ padding: '12px 16px', color: '#8c8c8c', fontWeight: '500', width: '25%' }}>Концепция</th>
                                    <th style={{ padding: '12px 16px', color: '#8c8c8c', fontWeight: '500', width: '45%' }}>Смысл</th>
                                    <th style={{ padding: '12px 16px', color: '#8c8c8c', fontWeight: '500', width: '30%' }}>Ключевое слово</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* Инкапсуляция */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500', color: '#222' }}>Инкапсуляция</td>
                                    <td style={{ padding: '12px 16px', color: '#434343' }}>Скрываем детали</td>
                                    <td style={{ padding: '12px 16px' }}>
                                        <code style={{ ...codeInlineStyle, backgroundColor: '#f5f5f5', color: '#000' }}>#privateField</code>
                                    </td>
                                </tr>
                                {/* Наследование */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500', color: '#222' }}>Наследование</td>
                                    <td style={{ padding: '12px 16px', color: '#434343' }}>Берём от родителя</td>
                                    <td style={{ padding: '12px 16px', display: 'flex', gap: '6px', alignItems: 'center' }}>
                                        <code style={{ ...codeInlineStyle, backgroundColor: '#f5f5f5', color: '#000' }}>extends</code>
                                        <span style={{ color: '#bfbfbf' }}>,</span>
                                        <code style={{ ...codeInlineStyle, backgroundColor: '#f5f5f5', color: '#000' }}>super</code>
                                    </td>
                                </tr>
                                {/* Полиморфизм */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500', color: '#222' }}>Полиморфизм</td>
                                    <td style={{ padding: '12px 16px', color: '#434343' }}>Один интерфейс &mdash; разное поведение</td>
                                    <td style={{ padding: '12px 16px', color: '#595959', fontSize: '0.95em' }}>переопределение методов</td>
                                </tr>
                                {/* Абстракция */}
                                <tr style={{ backgroundColor: '#fafafa' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500', color: '#222' }}>Абстракция</td>
                                    <td style={{ padding: '12px 16px', color: '#434343' }}>Упрощаем интерфейс</td>
                                    <td style={{ padding: '12px 16px', color: '#595959', fontSize: '0.95em' }}>приватные методы</td>
                                </tr>
                                </tbody>
                            </table>
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
                    <section id="prototypeParadox" style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #ff4d4f', // Красный цвет для продвинутых парадоксов
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        marginTop: '40px',
                        fontFamily: 'sans-serif'
                    }}>
                        <h3 style={{ marginTop: 0, color: '#cf1322', fontSize: '20px' }}>🤯 Главный парадокс: Цепочка Function и Object</h3>
                        <p style={{ lineHeight: '1.6' }}>
                            В JavaScript встроенные конструкторы <code style={codeInlineStyle}>Function</code> и <code style={codeInlineStyle}>Object</code> замкнуты друг на друга. Это порождает забавные, но логичные правила:
                        </p>

                        <div style={{ backgroundColor: '#fff1f0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ff4d4f', fontFamily: 'monospace', fontSize: '0.93em' }}>
                            <div style={{ color: '#cf1322' }}>// 1. Function — это функция, поэтому её прототипом является Function.prototype</div>
                            <div>console.log(Function.__proto__ === Function.prototype); <span style={{ color: '#389e0d', fontWeight: 'bold' }}>// true</span></div>

                            <div style={{ color: '#cf1322', marginTop: '10px' }}>// 2. Сам прототип функции — это объект, поэтому он наследуется от Object</div>
                            <div>console.log(Function.prototype.__proto__ === Object.prototype); <span style={{ color: '#389e0d', fontWeight: 'bold' }}>// true</span></div>

                            <div style={{ color: '#cf1322', marginTop: '10px' }}>// 3. А сам конструктор Object — это функция, поэтому он наследуется от Function!</div>
                            <div>console.log(Object.__proto__ === Function.prototype); <span style={{ color: '#389e0d', fontWeight: 'bold' }}>// true</span></div>
                        </div>

                        <p style={{ marginTop: '15px', fontSize: '0.95em', color: '#555' }}>
                            🚩 <b>Ментальная карта:</b> Все функции (включая <code style={codeInlineStyle}>Object</code>) происходят от <code style={codeInlineStyle}>Function.prototype</code>. А все объекты (включая <code style={codeInlineStyle}>Function.prototype</code>) в конечном счете происходят от <code style={codeInlineStyle}>Object.prototype</code>. В самом верху цепочки всегда лежит <code style={codeInlineStyle}>null</code>.
                        </p>

                    </section>
                    <div style={{
                        backgroundColor: '#fffbe6',
                        padding: '20px',
                        borderRadius: '12px',
                        border: '2px dashed #fadb14',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                        fontFamily: 'sans-serif',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        <h3 style={{ margin: '0 0 5px 0', color: '#ad8b00', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            💡 Железное правило собеседований
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '1.05em', lineHeight: '1.5' }}>

                            {/* Пункт про __proto__ */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                <span style={{ fontSize: '1.2em', marginTop: '2px' }}>🔗</span>
                                <div style={{ width: '100%' }}>
                                    <code style={{ ...codeInlineStyle, backgroundColor: '#fff', fontSize: '0.95em', fontWeight: 'bold' }}>__proto__</code>
                                    &mdash; есть у <b>абсолютно каждого</b> объекта в JS.

                                    {/* ИСКЛЮЧЕНИЕ С ВШИТЫМ КОДОМ */}
                                    <div style={{ backgroundColor: '#fff1f0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ff4d4f', fontSize: '0.9em', marginTop: '8px', color: '#1a1a1a' }}>
                                        <span style={{ color: '#cf1322', fontWeight: 'bold' }}>⚠️ Исключение:</span> Объекты, созданные через <code style={{ ...codeInlineStyle, backgroundColor: '#fff' }}>Object.create(null)</code>. Они не наследуются ни от чего, у них нет <code style={{ ...codeInlineStyle, backgroundColor: '#fff' }}>__proto__</code>, и у них полностью отсутствуют базовые методы.

                                        <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', border: '1px solid #f0f0f0', marginTop: '10px', padding: '10px' }}>
{`const cleanObj = Object.create(null);

console.log(cleanObj.__proto__); // undefined (свойства просто нет)
cleanObj.name = "Эдвард";        // Свойства записывать можно

// Попытка вызвать метод базового Object приведет к падению программы:
console.log(cleanObj.toString()); // ❌ TypeError: cleanObj.toString is not a function`}
                    </pre>
                                    </div>
                                </div>
                            </div>

                            {/* Пункт про prototype */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                <span style={{ fontSize: '1.2em', marginTop: '2px' }}>🏗️</span>
                                <div>
                                    <code style={{ ...codeInlineStyle, backgroundColor: '#fff', fontSize: '0.95em', fontWeight: 'bold' }}>prototype</code>
                                    &mdash; есть <b>только у функций-конструкторов</b> и классов. Это объект, который автоматически становится <code style={codeInlineStyle}>__proto__</code> для всех экземпляров, созданных через оператор <code style={codeInlineStyle}>new</code>.
                                </div>
                            </div>
                            {/* НОВЫЙ БЛОК: СОВРЕМЕННЫЙ СТАНДАРТ (Уровень Middle / Senior) */}
                            <div style={{ backgroundColor: '#f6ffed', padding: '12px 15px', borderRadius: '8px', borderLeft: '4px solid #52c41a', fontSize: '0.95em', color: '#1a1a1a', marginTop: '5px' }}>
                                🛠️ <b>Современный стандарт (Best Practice):</b><br/>
                                В реальном коде использовать свойство <code style={codeInlineStyle}>__proto__</code> запрещено (оно устарело). Вместо него применяются статические методы класса Object:
                                <ul style={{ margin: '5px 0 0 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <li><code style={codeInlineStyle}>Object.getPrototypeOf(obj)</code> &mdash; безопасное чтение прототипа.</li>
                                    <li><code style={codeInlineStyle}>Object.setPrototypeOf(obj, proto)</code> &mdash; безопасная запись (замена для <code style={codeInlineStyle}>obj.__proto__ = proto</code>).</li>
                                </ul>
                            </div>
                            <section id="whyProtoForbidden" style={{
                                backgroundColor: '#fff',
                                padding: '25px',
                                borderRadius: '12px',
                                borderTop: '6px solid #ff4d4f', // Красный цвет опасности
                                boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                                marginTop: '30px',
                                fontFamily: 'sans-serif'
                            }}>
                                <h3 style={{ marginTop: 0, color: '#cf1322', fontSize: '20px' }}>❌ Почему __proto__ официально запрещен в продакшене?</h3>
                                <p style={{ lineHeight: '1.6', color: '#333' }}>
                                    В современном коде использование <code style={codeInlineStyle}>__proto__</code> карается линтерами (ESLint) по трем веским причинам:
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>

                                    {/* Причина 1 */}
                                    <div style={{ backgroundColor: '#fff1f0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ff4d4f' }}>
                                        <h4 style={{ margin: '0 0 5px 0', color: '#cf1322' }}>🛡️ 1. Уязвимость Prototype Pollution (Взлом прототипа)</h4>
                                        <p style={{ margin: 0, fontSize: '0.93em', lineHeight: '1.5' }}>
                                            Если злоумышленник передаст строку <code style={codeInlineStyle}>"__proto__"</code> через форму или API, а ваш код тупо скопирует её в объект, хакер сможет внедриться в базовый <code style={codeInlineStyle}>Object.prototype</code>. После этого <b>все объекты приложения во всей памяти сервера</b> изменят свое поведение.
                                        </p>
                                    </div>

                                    {/* Причина 2 */}
                                    <div style={{ backgroundColor: '#fff1f0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ff4d4f' }}>
                                        <h4 style={{ margin: '0 0 5px 0', color: '#cf1322' }}>🚀 2. Дикое падение производительности (Удар по V8)</h4>
                                        <p style={{ margin: 0, fontSize: '0.93em', lineHeight: '1.5' }}>
                                            Прямая мутация прототипа через <code style={codeInlineStyle}>obj.__proto__ = ...</code> мгновенно уничтожает внутренние оптимизации движка V8 (скрытые классы). Движок "выбрасывает" скомпилированный быстрый код и переключает работу с объектом в режим медленного словаря. Скорость падает до 50 раз!
                                        </p>
                                    </div>

                                    {/* Причина 3 */}
                                    <div style={{ backgroundColor: '#fafafa', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #bfbfbf' }}>
                                        <h4 style={{ margin: '0 0 5px 0', color: '#595959' }}>📜 3. Статус Устаревшего (Deprecated)</h4>
                                        <p style={{ margin: 0, fontSize: '0.93em', lineHeight: '1.5' }}>
                                            Свойство признано устаревшим в спецификации ECMAScript [1]. Настоящий стандарт для чтения прототипа &mdash; это статический метод <code style={codeInlineStyle}>Object.getPrototypeOf(obj)</code>.
                                        </p>
                                    </div>

                                </div>
                            </section>
                            {/* ВАШ ФИНАЛЬНЫЙ ВЫВОД В ОДНУ СТРОКУ */}
                            <div style={{
                                backgroundColor: '#e6f7ff',
                                padding: '12px 15px',
                                borderRadius: '8px',
                                borderLeft: '4px solid #1890ff',
                                fontSize: '1em',
                                fontWeight: 'bold',
                                color: '#0050b3',
                                marginTop: '5px'
                            }}>
                                🚀 Запомнить навсегда:<br/>
                                • <code style={codeInlineStyle}>__proto__</code> &mdash; у экземпляра, смотрит вверх.<br/>
                                • <code style={codeInlineStyle}>prototype</code> &mdash; у конструктора/класса, это то, на что смотрит <code style={codeInlineStyle}>__proto__</code> экземпляра.
                            </div>
                        </div>
                    </div>
                </section>



            </main>
        </div>
    );
}
