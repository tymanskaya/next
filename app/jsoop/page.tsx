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
                    <a href="#classes" onClick={(e) => handleScroll(e, 'classes')} style={anchorLinkStyle}>
                        🏗️ Классы (Синтаксический сахар)
                    </a>
                    <a href="#classCreation" onClick={(e) => handleScroll(e, 'classCreation')} style={anchorLinkStyle}>
                        🛠️ Создание классов (Полный гайд)
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
                <section id="classes" style={{
                    backgroundColor: '#fff',
                    padding: '25px',
                    borderRadius: '12px',
                    borderTop: '6px solid #fa8c16', // Оранжевый цвет для синтаксических разборов
                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                    marginTop: '40px',
                    scrollMarginTop: '40px',
                    fontFamily: 'sans-serif'
                }}>
                    <h2 style={{ marginTop: 0, color: '#d46b08', fontSize: '22px' }}>🏗️ Классы как синтаксический сахар</h2>
                    <p style={{ lineHeight: '1.6', color: '#333' }}>
                        В ES6 (2015 год) в JavaScript появилось ключевое слово <code style={codeInlineStyle}>class</code>. Но важно понимать: в JS <b>нет настоящих классов</b>, как в Java или C#. Классы в JS — это лишь красивая обертка над функциями-конструкторами и прототипами.
                    </p>

                    {/* Двухколоночное сравнение "До и После" */}
                    <div style={{ marginTop: '20px' }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 12px 0', color: '#222' }}>Эквивалентность кода под капотом движка V8:</p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

                            {/* Левая колонка: Современный сахар */}
                            <div style={{ backgroundColor: '#fff7e6', padding: '15px', borderRadius: '8px', borderTop: '3px solid #fa8c16' }}>
                                <h4 style={{ margin: '0 0 8px 0', color: '#d46b08' }}>✨ Современный синтаксис (с сахаром)</h4>
                                <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', padding: '10px', fontSize: '0.85em', margin: 0 }}>
{`class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
}

const user = new User("Анна");`}
                </pre>
                            </div>

                            {/* Правая колонка: Что происходит под капотом */}
                            <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '8px', borderTop: '3px solid #bfbfbf' }}>
                                <h4 style={{ margin: '0 0 8px 0', color: '#595959' }}>⚙️ Как это работает на самом деле</h4>
                                <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', padding: '10px', fontSize: '0.85em', margin: 0 }}>
{`// 1. Создается обычная функция
function User(name) {
    this.name = name;
}

// 2. Метод пишется в prototype
User.prototype.sayHi = function() {
    console.log(this.name);
};

const user = new User("Анна");`}
                </pre>
                            </div>

                        </div>
                    </div>

                    {/* Блок ключевых отличий класса от функции */}
                    <div style={{
                        backgroundColor: '#f9f0ff',
                        padding: '18px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #722ed1',
                        fontSize: '0.93em',
                        marginTop: '25px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    }}>
                        <p style={{ fontWeight: 'bold', margin: 0, color: '#531dab', fontSize: '1.05em' }}>
                            ⚡ Но класс &mdash; это не на 100% просто функция. Есть важные технические отличия:
                        </p>

                        <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', lineHeight: '1.5', color: '#333' }}>
                            <li>
                                <b>Обязательный <code style={codeInlineStyle}>new</code>:</b> Если вызвать функцию-конструктор без <code style={codeInlineStyle}>new</code>, она отработает (хоть и засрет глобальный контекст). Если вызвать класс без <code style={codeInlineStyle}>new</code>, JavaScript выбросит ошибку: <code style={{...codeInlineStyle, color: '#cf1322'}}>TypeError: Class constructor cannot be invoked without 'new'</code>.
                            </li>
                            <li>
                                <b>Строгий режим автоматически:</b> Весь код внутри конструкции <code style={codeInlineStyle}>class</code> автоматически выполняется в строгом режиме (<code style={codeInlineStyle}>'use strict'</code>). Это защищает от случайного замусоривания глобального объекта <code style={codeInlineStyle}>window</code>.

                                {/* Пример кода, наглядно показывающий поведение this */}
                                <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', border: '1px solid #f0f0f0', padding: '15px', marginTop: '10px', fontSize: '0.88em' }}>
{`// Обычная функция-конструктор (без strict):
function Person() {
  console.log(this);  // В браузере выдаст глобальный объект = window
}
Person(); 

// Внутри класса:
class Animal {
  test() {
    console.log(this);  // Всегда undefined, если метод вызван без контекста
  }
}
const pet = new Animal();
const brokenMethod = pet.test;
brokenMethod(); // ❌ Вызовет undefined (строгий режим защитил код!)`}
    </pre>
                            </li>
                            <li>
                                <b>Неперечисляемые методы:</b> Все методы, объявленные внутри класса, автоматически получают флаг конфигурации <code style={codeInlineStyle}>enumerable: false</code>. Это значит, что при цикле <code style={codeInlineStyle}>for...in</code> по объекту методы класса не будут глупо вылезать наружу, в отличие от методов, добавленных в функцию вручную.
                            </li>
                            <li>
                                <b>Отсутствие всплытия (No hoisting):</b> Функцию-конструктор, объявленную через <code style={codeInlineStyle}>function</code>, можно вызвать выше по коду, чем она написана в файле. Классы так делать запрещают. При попытке создать инстанс до объявления класса программа упадет со строгой ошибкой.
                            </li>

                            {/* Блок кода, в точности повторяющий ваш пример со скриншота */}
                            <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', border: '1px solid #f0f0f0', padding: '15px', marginTop: '10px', fontSize: '0.88em' }}>
{`// Функция: можно вызвать до объявления (hoisting)
sayHi() // ✅ работает
function sayHi() {}

// Класс — нельзя
const p = new Person() // ❌ ReferenceError
class Person {}`}
</pre>
                        </ul>
                    </div>
                    {/* Итоговая таблица сравнения Функций-конструкторов и Классов */}
                    <div style={{ marginTop: '30px', fontFamily: 'sans-serif' }}>
                        <h3 style={{ fontSize: '18px', color: '#111', marginBottom: '15px' }}>Итоговая таблица</h3>

                        <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92em' }}>
                                <thead>
                                <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #f0f0f0' }}>
                                    <th style={{ padding: '12px 16px', color: '#8c8c8c', fontWeight: '500', width: '30%' }}>Отличие</th>
                                    <th style={{ padding: '12px 16px', color: '#8c8c8c', fontWeight: '500', width: '35%' }}>Функция-конструктор</th>
                                    <th style={{ padding: '12px 16px', color: '#8c8c8c', fontWeight: '500', width: '35%' }}>Класс</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* 1. Вызов без new */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500' }}>Вызов без <code style={codeInlineStyle}>new</code></td>
                                    <td style={{ padding: '12px 16px', color: '#389e0d' }}>✅ (не падает)</td>
                                    <td style={{ padding: '12px 16px', color: '#cf1322' }}>❌ TypeError</td>
                                </tr>
                                {/* 2. Hoisting */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500' }}>Hoisting</td>
                                    <td style={{ padding: '12px 16px', color: '#389e0d' }}>✅ всплывает</td>
                                    <td style={{ padding: '12px 16px', color: '#cf1322' }}>❌ не всплывает</td>
                                </tr>
                                {/* 3. Strict mode */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500' }}>Strict mode</td>
                                    <td style={{ padding: '12px 16px', color: '#cf1322' }}>❌ не всегда</td>
                                    <td style={{ padding: '12px 16px', color: '#389e0d' }}>✅ всегда</td>
                                </tr>
                                {/* 4. Методы в for...in */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500' }}>Методы в <code style={codeInlineStyle}>for...in</code></td>
                                    <td style={{ padding: '12px 16px', color: '#389e0d' }}>✅ видны</td>
                                    <td style={{ padding: '12px 16px', color: '#cf1322' }}>❌ скрыты</td>
                                </tr>
                                {/* 5. Наследование статики */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500' }}>Наследование статики</td>
                                    <td style={{ padding: '12px 16px', color: '#cf1322' }}>❌ легко забыть</td>
                                    <td style={{ padding: '12px 16px', color: '#389e0d' }}>✅ автоматически</td>
                                </tr>
                                {/* 6. super */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500' }}><code style={codeInlineStyle}>super</code></td>
                                    <td style={{ padding: '12px 16px', color: '#cf1322' }}>❌ только через <code style={codeInlineStyle}>.call</code></td>
                                    <td style={{ padding: '12px 16px', color: '#389e0d' }}>✅ нативно</td>
                                </tr>
                                {/* 7. Приватные поля # */}
                                <tr style={{ backgroundColor: '#fff' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500' }}>Приватные поля <code style={codeInlineStyle}>#</code></td>
                                    <td style={{ padding: '12px 16px', color: '#cf1322' }}>❌</td>
                                    <td style={{ padding: '12px 16px', color: '#389e0d' }}>✅</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <section id="classCreation" style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #52c41a', // Яркий зеленый цвет для конструктора
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        marginTop: '40px',
                        scrollMarginTop: '40px',
                        fontFamily: 'sans-serif'
                    }}>
                        <h2 style={{ marginTop: 0, color: '#237804', fontSize: '22px' }}>🛠️ Анатомия создания классов в JavaScript</h2>
                        <p style={{ lineHeight: '1.6', color: '#333' }}>
                            Объявление класса состоит из нескольких типов полей и методов. Они принципиально отличаются тем, <b>где именно в памяти</b> они будут храниться — в самом инстансе, в общем прототипе или в теле функции-класса.
                        </p>

                        {/* Полный эталонный пример */}
                        <div>
                            <p style={{ fontWeight: 'bold', margin: '15px 0 8px 0', color: '#111' }}>Полная структура современного класса:</p>
                            <pre style={codeBlockStyle}>
{`class Worker {
    // 1. Публичное свойство инстанса (будет у каждого своя копия)
    role = "Developer"; 

    // 2. Приватное свойство инстанса (доступно только методам этого класса)
    #salary = 5000; 

    // 3. Статическое свойство (принадлежит самому классу, а не инстансам)
    static company = "TechCorp";

    // 4. Конструктор — инициализирует объект при вызове "new Worker()"
    constructor(name, age) {
        this.name = name; // Динамическое свойство
        this.age = age;
    }

    // 5. Обычный метод (автоматически улетает в Worker.prototype)
    getDetails() {
        return \`\${this.name} работает как \${this.role}\`;
    }

    // 6. Геттер и Сеттер (выглядят как свойства, но являются методами)
    get salaryInfo() {
        return \`Зарплата заблокирована на уровне \${this.#salary}\`;
    }
    set updateSalary(amount) {
        if (amount > 0) this.#salary = amount;
    }

    // 7. Статический метод (используется для утилит, не имеет доступа к инстансу)
    static compareAge(workerA, workerB) {
        return workerA.age - workerB.age;
    }
}`}
        </pre>
                        </div>

                        {/* Детальный разбор каждого элемента */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '25px' }}>

                            {/* Разбор Constructor */}
                            <section id="constructorDeep" style={{
                                backgroundColor: '#fff',
                                padding: '25px',
                                borderRadius: '12px',
                                borderTop: '6px solid #52c41a', // Фирменный зеленый цвет конструктора
                                boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                                marginTop: '40px',
                                scrollMarginTop: '40px',
                                fontFamily: 'sans-serif'
                            }}>
                                <h2 style={{ marginTop: 0, color: '#237804', fontSize: '22px' }}>Конструктор (constructor) под молекулярным микроскопом</h2>
                                <p style={{ lineHeight: '1.6', color: '#333' }}>
                                    Метод <code style={codeInlineStyle}>constructor</code> &mdash; это специальная функция внутри класса, которая автоматически вызывается при создании объекта через оператор <code style={codeInlineStyle}>new</code>. Её главная задача &mdash; инициализировать и наполнить новый инстанс свойствами.
                                </p>

                                {/* 1. БАЗОВЫЙ СИНТАКСИС И МЕХАНИКА NEW */}
                                <div style={{ marginTop: '20px' }}>
                                    <h3 style={{ fontSize: '18px', color: '#111', margin: '0 0 10px 0' }}>1. Базовый синтаксис и магия оператора <code style={codeInlineStyle}>new</code></h3>
                                    <pre style={codeBlockStyle}>
{`class Dog {
    constructor(name) {
        this.name = name; // Записываем свойство прямо в инстанс
    }
}

const rex = new Dog('Рекс');

// =======================================================
// ЧТО ПРОИСХОДИТ ПРИ ВЫЗОВЕ NEW — ПО ШАГАМ:
// =======================================================
// 1. Создаётся новый пустой объект: {}
// 2. Его скрытому свойству __proto__ присваивается ссылка на Dog.prototype
// 3. Вызывается метод constructor, при этом "this" внутри равен этому новому объекту
// 4. Выполняется тело конструктора: объекту записывается свойство name = 'Рекс'
// 5. Конструктор автоматически возвращает этот заполненный объект (this)
// 6. Переменная rex получает готовый объект { name: 'Рекс' }

console.log(rex.name); // 'Рекс'
console.log(Object.getPrototypeOf(rex) === Dog.prototype); // true`}
        </pre>
                                </div>

                                {/* 2. КОНСТРУКТОР ПО УМОЛЧАНИЮ */}
                                <div style={{ marginTop: '30px', borderTop: '1px dashed #e1e8e1', paddingTop: '20px' }}>
                                    <h3 style={{ fontSize: '18px', color: '#111', margin: '0 0 10px 0' }}>2. Конструктор по умолчанию (Implicit Constructor)</h3>
                                    <p style={{ fontSize: '0.95em', color: '#434343', margin: '0 0 12px 0' }}>
                                        Если внутри класса вообще опустить метод <code style={codeInlineStyle}>constructor</code>, JavaScript не выдаст ошибку. Движок V8 создаст его автоматически. Поведение зависит от того, является ли класс дочерним:
                                    </p>
                                    <pre style={codeBlockStyle}>
{`// А. В обычном базовом классе:
class Cat {} 
// Под капотом JS автоматически добавляет:
// constructor() {} — пустой конструктор


// Б. В дочернем классе (Конструктор с наследованием):
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Puppy extends Animal {
    // Конструктор не написан — JS развернет полноценный прокси-метод:
    // constructor(...args) { super(...args); }
}

const spot = new Puppy('Спот'); 
console.log(spot.name); // 'Спот' ✅ — аргументы автоматически прокинулись к родителю`}
        </pre>
                                </div>

                                {/* 3. КОНСТРУКТОР С НАСЛЕДОВАНИЕМ И SUPER */}
                                <div style={{ marginTop: '30px', borderTop: '1px dashed #e1e8e1', paddingTop: '20px' }}>
                                    <h3 style={{ fontSize: '18px', color: '#111', margin: '0 0 10px 0' }}>3. Конструктор с наследованием — <code style={codeInlineStyle}>super()</code></h3>
                                    <p style={{ fontSize: '0.95em', color: '#434343', margin: '0 0 12px 0' }}>
                                        В классах-наследниках (<code style={codeInlineStyle}>extends</code>) вы <b>обязаны</b> вызвать родительский конструктор через <code style={codeInlineStyle}>super()</code> строго до того, как попытаетесь использовать <code style={codeInlineStyle}>this</code>.
                                    </p>
                                    <pre style={codeBlockStyle}>
{`class Vehicle {
    constructor(type) {
        this.type = type;
    }
}

// ✅ ПРАВИЛЬНО: Сначала super(), только потом свои свойства
class Car extends Vehicle {
    constructor(type, brand) {
        super(type);         // Сначала super! Родитель создает объект в памяти
        this.brand = brand;   // Только теперь доступен собственный this
    }
}

// ❌ ОШИБКА: Попытка использовать this до вызова родителя
class BadCar extends Vehicle {
    constructor(type, brand) {
        this.brand = brand; // ❌ ReferenceError: Must call super() before accessing 'this'
        super(type);
    }
}`}
        </pre>
                                </div>

                                {/* 4. СВОДНАЯ ТАБЛИЦА ПОВЕДЕНИЯ */}
                                <div style={{ marginTop: '30px', borderTop: '1px dashed #e1e8e1', paddingTop: '20px' }}>
                                    <h3 style={{ fontSize: '18px', color: '#111', marginBottom: '15px' }}>4. Шпаргалка: Поведение конструктора в разных ситуациях</h3>

                                    <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #e1e8e1' }}>
                                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92em' }}>
                                            <thead>
                                            <tr style={{ backgroundColor: '#f6ffed', borderBottom: '1px solid #e1e8e1' }}>
                                                <th style={{ padding: '12px 16px', color: '#52c41a', fontWeight: '500', width: '35%' }}>Ситуация</th>
                                                <th style={{ padding: '12px 16px', color: '#52c41a', fontWeight: '500', width: '65%' }}>Поведение движка JS</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr style={{ borderBottom: '1px solid #e1e8e1' }}>
                                                <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>constructor</code> не написан</td>
                                                <td style={{ padding: '12px 16px', color: '#434343' }}>Создаётся пустой автоматически</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e1e8e1', backgroundColor: '#fafafa' }}>
                                                <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>extends</code> без <code style={codeInlineStyle}>constructor</code></td>
                                                <td style={{ padding: '12px 16px', color: '#434343' }}><code style={codeInlineStyle}>super(...args)</code> добавляется автоматически</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e1e8e1' }}>
                                                <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>extends</code> с <code style={codeInlineStyle}>constructor</code></td>
                                                <td style={{ padding: '12px 16px', color: '#434343' }}><code style={codeInlineStyle}>super()</code> обязателен до обращения к <code style={codeInlineStyle}>this</code></td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e1e8e1', backgroundColor: '#fafafa' }}>
                                                <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>async constructor</code></td>
                                                <td style={{ padding: '12px 16px', color: '#cf1322', fontWeight: '500' }}>
                                                    ❌ невозможно &mdash; использовать статический фабричный метод
                                                </td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #e1e8e1' }}>
                                                <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>return</code> примитив</td>
                                                <td style={{ padding: '12px 16px', color: '#434343' }}>Игнорируется &mdash; возвращается <code style={codeInlineStyle}>this</code></td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#fafafa' }}>
                                                <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>return</code> объект</td>
                                                <td style={{ padding: '12px 16px', color: '#434343' }}>Вернётся именно этот сторонний объект (подмена <code style={codeInlineStyle}>this</code>)</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Главное архитектурное правило */}
                                    <div style={{
                                        backgroundColor: '#e6f7ff',
                                        padding: '15px',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1890ff',
                                        fontSize: '0.95em',
                                        color: '#0050b3',
                                        marginTop: '15px',
                                        lineHeight: '1.5'
                                    }}>
                                        <b>📌 Золотое правило архитектуры:</b> Конструктор предназначен <u>только для инициализации полей</u>. Сложную бизнес-логику, сетевые запросы (fetch/axios) или тяжелые вычисления всегда выносите в отдельные методы или статические фабрики!
                                    </div>
                                </div>
                            </section>



                            {/* Разбор Свойств: Публичные vs Приватные */}
                            <div style={{ backgroundColor: '#fafafa', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #d9d9d9' }}>
                                <h4 style={{ margin: '0 0 8px 0', color: '#262626' }}>2. Свойства инстанса (Поля класса)</h4>
                                <p style={{ margin: 0, fontSize: '0.93em', lineHeight: '1.5', color: '#434343' }}>
                                    Поля, объявленные прямо в теле класса (например, <code style={codeInlineStyle}>role = "Developer"</code>), физически копируются в каждый создаваемый объект. У объектов будут абсолютно независимые копии этих переменных. Поля с решеткой <code style={codeInlineStyle}>#</code> инкапсулируются внутри класса и полностью защищены от чтения снаружи.
                                </p>
                            </div>
                            <section id="privateFields" style={{
                                backgroundColor: '#fff',
                                padding: '25px',
                                borderRadius: '12px',
                                borderTop: '6px solid #ff4d4f', // Красный цвет безопасности и защиты
                                boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                                marginTop: '40px',
                                scrollMarginTop: '40px',
                                fontFamily: 'sans-serif'
                            }}>
                                <h2 style={{ marginTop: 0, color: '#cf1322', fontSize: '22px' }}>Приватные поля и методы класса (<code style={{...codeInlineStyle, color: '#cf1322'}}>#</code>)</h2>
                                <p style={{ lineHeight: '1.6', color: '#333' }}>
                                    В старом JavaScript приватность имитировали с помощью нижнего подчеркивания (<code style={codeInlineStyle}>_balance</code>), но это было лишь джентльменским соглашением. Современный JS поддерживает настоящую приватность на уровне движка с помощью символа <code style={codeInlineStyle}>#</code>.
                                </p>

                                {/* Основной пример кода */}
                                <div>
                                    <p style={{ fontWeight: 'bold', margin: '15px 0 8px 0', color: '#111' }}>Живой пример инкапсуляции через приватность:</p>
                                    <pre style={codeBlockStyle}>
{`class BankAccount {
    name;             // Публичное свойство (доступно всем)
    #balance = 0;     // Приватное свойство (строго внутри класса)

    constructor(name, initialDeposit) {
        this.name = name;
        this.#balance = initialDeposit;
    }

    // Публичный метод имеет доступ к приватным полям
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            this.#logTransaction(\`Пополнение на \${amount}\`);
        }
    }

    // Приватный метод — его нельзя вызвать снаружи
    #logTransaction(msg) {
        console.log(\`[LOG]: \${msg}\`);
    }

    // Безопасный геттер для чтения приватного поля
    get currentBalance() {
        return \`На счету: \${this.#balance} руб.\`;
    }
}

const wallet = new BankAccount("Эдуард", 1000);

console.log(wallet.name);           // "Эдуард" ✅ работает
console.log(wallet.currentBalance); // "На счету: 1000 руб." ✅ работает (через геттер)

// Попытки взлома:
wallet.#balance = 5000000;  // ❌ SyntaxError: Private field '#balance' must be declared in an enclosing class
wallet.#logTransaction();   // ❌ SyntaxError: Приватный метод вызвать снаружи нельзя`}
        </pre>
                                </div>

                                {/* Важные правила и особенности */}
                                <div style={{
                                    backgroundColor: '#fff1f0',
                                    padding: '18px',
                                    borderRadius: '8px',
                                    borderLeft: '4px solid #ff4d4f',
                                    fontSize: '0.93em',
                                    marginTop: '25px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px'
                                }}>
                                    <p style={{ fontWeight: 'bold', margin: 0, color: '#cf1322', fontSize: '1.05em' }}>
                                        🧱 Важные правила приватности (Что нужно знать для собеседования):
                                    </p>

                                    <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', lineHeight: '1.5', color: '#333' }}>
                                        <li>
                                            <b>Обязательное объявление:</b> Все приватные поля <span style={{fontWeight: 'bold'}}>обязаны</span> быть объявлены прямо в теле класса (над конструктором). Нельзя создать приватное свойство на лету внутри конструктора, как это делается с публичными свойствами.
                                        </li>
                                        <li>
                                            <b>Решётка — часть имени:</b> Символ <code style={codeInlineStyle}>#</code> — это не просто модификатор доступа (как <code style={codeInlineStyle}>private</code> в TypeScript). Это физическая часть имени переменной. Нельзя обратиться к полю без решётки.
                                        </li>
                                        <li>
                                            <b>Динамический доступ запрещён:</b> К приватным полям нельзя обратиться через квадратные скобки. Код <code style={codeInlineStyle}>obj['#balance']</code> вернет <code style={codeInlineStyle}>undefined</code>, а не значение свойства. Это гарантирует жесткую защиту от обхода инкапсуляции.
                                        </li>
                                        <li>
                                            <b>Не наследуются:</b> Дочерние классы (<code style={codeInlineStyle}>extends</code>) **не имеют доступа** к приватным полям родителя напрямую. Если класс <code style={codeInlineStyle}>PremiumAccount</code> наследует <code style={codeInlineStyle}>BankAccount</code>, его методы не смогут прочитать <code style={codeInlineStyle} >this.#balance</code>. Чтение возможно только через публичные геттеры/сеттеры родительского класса.
                                        </li>
                                    </ul>
                                </div>
                            </section>


                            {/* Разбор Прототипных методов */}
                            <div style={{ backgroundColor: '#e6f7ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #1890ff' }}>
                                <h4 style={{ margin: '0 0 8px 0', color: '#0050b3' }}>3. Обычные методы (Прототипные)</h4>
                                <p style={{ margin: 0, fontSize: '0.93em', lineHeight: '1.5', color: '#434343' }}>
                                    Когда вы объявляете обычный метод вроде <code style={codeInlineStyle}>getDetails() {}</code>, он <b>не копируется</b> в инстансы. Он записывается в единственном экземпляре в объект <code style={codeInlineStyle}>Worker.prototype</code>. Все созданные рабочие будут делить этот метод через свои скрытые ссылки <code style={codeInlineStyle}>__proto__</code>, колоссально экономя оперативную память.
                                </p>
                            </div>

                            {/* Разбор Статики */}
                            {/* Замените содержимое блока статики на этот вариант с живым кодом */}
                            <div style={{ backgroundColor: '#fff7e6', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ffa940' }}>
                                <h4 style={{ margin: '0 0 8px 0', color: '#d46b08' }}>4. Статические поля и методы (static)</h4>
                                <p style={{ margin: '0 0 12px 0', fontSize: '0.93em', lineHeight: '1.5', color: '#434343' }}>
                                    Ключевое слово <code style={codeInlineStyle}>static</code> означает, что поле или метод принадлежит <b>самому классу</b>, а не его экземплярам. Чаще всего они используются для создания утилит или фабричных методов.
                                </p>

                                {/* Код из вашего примера со скриншота */}
                                <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', border: '1px solid #f0f0f0', padding: '15px', margin: 0, fontSize: '0.88em' }}>
{`class MathHelper {
    static PI = 3.14159 // статического поле

    static circle(r) {   // статический метод
        return MathHelper.PI * r * r
    }
}

console.log(MathHelper.PI);       // 3.14159 ✅
console.log(MathHelper.circle(5)); // 78.53 ✅

const m = new MathHelper()
console.log(m.PI);        // undefined ❌ — в инстансе нет
console.log(m.circle(5)); // ❌ TypeError: m.circle is not a function — тоже нет`}
    </pre>
                                {/* Добавьте этот подраздел внутрь оранжевой карточки статики */}
                                <div style={{ marginTop: '20px' }}>
                                    <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#d46b08', fontSize: '0.95em' }}>
                                        🔥 Продвинутый уровень: Статика наследуется!
                                    </p>
                                    <p style={{ margin: '0 0 10px 0', fontSize: '0.9em', color: '#434343', lineHeight: '1.4' }}>
                                        В отличие от классических функций-конструкторов (где статику приходилось копировать руками), классы автоматически связывают сами функции-конструкторы друг с другом. Поэтому дочерний класс видит статические методы родителя и может переопределять его статические свойства:
                                    </p>

                                    <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', border: '1px solid #f0f0f0', padding: '15px', margin: 0, fontSize: '0.88em' }}>
{`class Animal {
    static planet = 'Земля'

    static describe() {
        return \`Живём на планете \${this.planet}\`
    }
}

class Dog extends Animal {
    static planet = 'Земля (псовые)' // переопределяем статическое свойство
}

console.log(Animal.describe()); // 'Живём на планете Земля'
console.log(Dog.describe());    // 'Живём на планете Земля (псовые)' ✅`}
    </pre>
                                </div>
                                {/* Добавьте этот подраздел в самый конец оранжевой карточки статики */}
                                <div style={{ marginTop: '20px', borderTop: '1px dashed #ffa940', paddingTop: '15px' }}>
                                    <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#d46b08', fontSize: '0.95em' }}>
                                        🔒 Максимальная защита: static + приватность (#)
                                    </p>
                                    <p style={{ margin: '0 0 10px 0', fontSize: '0.9em', color: '#434343', lineHeight: '1.4' }}>
                                        Вы можете объединить статику и инкапсуляцию, объявив приватное статическое поле через <code style={codeInlineStyle}>static #field</code>. Такое поле хранится в самом классе, но доступно <b>строго внутренним статическим методам</b> этого же класса:
                                    </p>

                                    <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', border: '1px solid #f0f0f0', padding: '15px', margin: 0, fontSize: '0.88em' }}>
{`class IdGenerator {
    static #nextId = 1 // приватное статическое поле

    static generate() {
        return IdGenerator.#nextId++
    }
}

console.log(IdGenerator.generate()); // 1
console.log(IdGenerator.generate()); // 2
console.log(IdGenerator.generate()); // 3

console.log(IdGenerator.#nextId); // ❌ SyntaxError: снаружи недоступно`}
    </pre>
                                </div>

                            </div>


                        </div>
                    </section>
                    {/* Сводная таблица хранения элементов класса в памяти */}
                    <div style={{ marginTop: '30px', fontFamily: 'sans-serif' }}>
                        <h3 style={{ fontSize: '18px', color: '#111', marginBottom: '15px' }}>Итоговая таблица хранения и доступа</h3>

                        <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #f0f0f0' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92em' }}>
                                <thead>
                                <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #f0f0f0' }}>
                                    <th style={{ padding: '12px 16px', color: '#8c8c8c', fontWeight: '500', width: '20%' }}>Тип</th>
                                    <th style={{ padding: '12px 16px', color: '#8c8c8c', fontWeight: '500', width: '25%' }}>Синтаксис</th>
                                    <th style={{ padding: '12px 16px', color: '#8c8c8c', fontWeight: '500', width: '30%' }}>Где хранится</th>
                                    <th style={{ padding: '12px 16px', color: '#8c8c8c', fontWeight: '500', width: '25%' }}>Доступ</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* 1. Поле экземпляра */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500' }}>Поле экземпляра</td>
                                    <td style={{ padding: '12px 16px' }}>
                                        <code style={codeInlineStyle}>this.x = ...</code> / <code style={codeInlineStyle}>x = ...</code>
                                    </td>
                                    <td style={{ padding: '12px 16px', color: '#434343' }}>В каждом <code style={codeInlineStyle}>new</code></td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>obj.x</code></td>
                                </tr>
                                {/* 2. Приватное поле */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500' }}>Приватное поле</td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>#x = ...</code></td>
                                    <td style={{ padding: '12px 16px', color: '#434343' }}>В каждом <code style={codeInlineStyle}>new</code></td>
                                    <td style={{ padding: '12px 16px', color: '#8c8c8c', fontSize: '0.95em' }}>Только внутри класса</td>
                                </tr>
                                {/* 3. Метод */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500' }}>Метод</td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>foo() &#123;&#125;</code></td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>Class.prototype</code></td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>obj.foo()</code></td>
                                </tr>
                                {/* 4. Геттер/сеттер */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500' }}>Геттер/сеттер</td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>get x() &#123;&#125;</code></td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>Class.prototype</code></td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>obj.x</code></td>
                                </tr>
                                {/* 5. Статическое поле */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500' }}>Статическое поле</td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>static x = ...</code></td>
                                    <td style={{ padding: '12px 16px', color: '#434343' }}>В самом классе</td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>Class.x</code></td>
                                </tr>
                                {/* 6. Статический метод */}
                                <tr style={{ backgroundColor: '#fafafa' }}>
                                    <td style={{ padding: '12px 16px', fontWeight: '500' }}>Статический метод</td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>static foo() &#123;&#125;</code></td>
                                    <td style={{ padding: '12px 16px', color: '#434343' }}>В самом классе</td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>Class.foo()</code></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Блок оптимизации памяти на основе вашего скриншота */}
                    <div style={{ marginTop: '25px', fontFamily: 'sans-serif' }}>
                        <h4 style={{ fontSize: '16px', color: '#111', margin: '0 0 10px 0' }}>Почему это важно (Оптимизация памяти)</h4>
                        <p style={{ fontSize: '0.95em', lineHeight: '1.5', color: '#333', margin: '0 0 15px 0' }}>
                            Объявление методов внутри конструктора заставляет движок JavaScript создавать **новую функцию при каждом создании объекта**. Если вынести метод наружу, он запишется в прототип в одном экземпляре, экономя оперативную память:
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                            {/* Антипаттерн */}
                            <div style={{ backgroundColor: '#fff1f0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ff4d4f' }}>
                                <span style={{ color: '#cf1322', fontWeight: 'bold', fontSize: '0.9em' }}>❌ Антипаттерн &mdash; Метод в конструкторе</span>
                                <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', padding: '10px', margin: '8px 0 0 0', fontSize: '0.85em' }}>
{`class Dog {
    // ❌ Метод внутри конструктора
    constructor(name) {
        this.name = name;
        this.bark = function() { return 'Woof!'; } // Новая функция для КАЖДОГО объекта
    }
}

// 1000 объектов = 1000 копий функции bark в памяти 🎚️`}
            </pre>
                            </div>

                            {/* Правильный подход */}
                            <div style={{ backgroundColor: '#f6ffed', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #52c41a' }}>
                                <span style={{ color: '#237804', fontWeight: 'bold', fontSize: '0.9em' }}>✅ Правильно &mdash; Метод в прототипе</span>
                                <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', padding: '10px', margin: '8px 0 0 0', fontSize: '0.85em' }}>
{`class Dog {
    // ✅ Метод вынесен в тело класса
    constructor(name) {
        this.name = name;
    }
    bark() { return 'Woof!'; } // Одна копия на всех (лежит в Dog.prototype)
}

// 1000 объектов = 1 копия функции bark ✅`}
            </pre>
                            </div>

                        </div>
                    </div>
                    <section id="classInheritance" style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #1890ff', // Фирменный синий цвет для связей и наследования
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        marginTop: '40px',
                        scrollMarginTop: '40px',
                        fontFamily: 'sans-serif'
                    }}>
                        <h2 style={{ marginTop: 0, color: '#0050b3', fontSize: '22px' }}>🧬 Наследование классов (<code style={{...codeInlineStyle, color: '#0050b3'}}>extends / super</code>)</h2>
                        <p style={{ lineHeight: '1.6', color: '#333' }}>
                            Наследование позволяет расширить функционал родительского класса. При этом дочерний класс может использовать родительские методы, добавлять свои собственные или полностью переопределять поведение (Полиморфизм).
                        </p>

                        {/* Эталонный пример кода */}
                        <div>
                            <p style={{ fontWeight: 'bold', margin: '15px 0 8px 0', color: '#111' }}>Реализация наследования и расширения:</p>
                            <pre style={codeBlockStyle}>
{`class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(\`\${this.name} кушает.\`);
    }
}

// Dog наследует все свойства и методы класса Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Вызов конструктора родителя. Создает объект и прокидывает name.
        this.breed = breed; // Добавляем собственное свойство
    }

    // Добавляем собственный уникальный метод
    bark() {
        console.log(\`\${this.name} лает: Гав-гав!\`);
    }

    // Переопределение метода родителя (Полиморфизм)
    eat() {
        super.eat(); // Вызываем оригинальный метод родителя через super.method()
        console.log(\`А еще \${this.name} обожает грызть косточки.\`);
    }
}

const rex = new Dog("Рекс", "Хаски");

rex.eat();  
// Выведет:
// "Рекс кушает."
// "А еще Рекс обожает грызть косточки."

rex.bark(); // "Рекс лает: Гав-гав!"`}
        </pre>
                        </div>

                        {/* Как это устроено в памяти под капотом */}
                        <div style={{ backgroundColor: '#e6f7ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #1890ff', fontSize: '0.93em', marginTop: '20px' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#0050b3' }}>⚙️ Что происходит в памяти движка V8?</p>
                            Когда вы пишете <code style={codeInlineStyle}>class Dog extends Animal</code>, JavaScript настраивает двойную прототипную связь:
                            <ol style={{ margin: '8px 0 0 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <li><b>Для экземпляров:</b> <code style={codeInlineStyle}>Dog.prototype.__proto__ === Animal.prototype</code>. Именно поэтому объекты собак видят методы <code style={codeInlineStyle}>eat()</code>.</li>
                                <li><b>Для самих классов (Статика):</b> <code style={codeInlineStyle}>Dog.__proto__ === Animal</code>. Благодаря этому статические методы родителя автоматически наследуются дочерним классом.</li>
                            </ol>
                        </div>

                        {/* Ключевые правила для собеседования */}
                        <div style={{
                            backgroundColor: '#fffbe6',
                            padding: '18px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #fadb14',
                            fontSize: '0.93em',
                            marginTop: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        }}>
                            <p style={{ fontWeight: 'bold', margin: 0, color: '#ad8b00', fontSize: '1.05em' }}>
                                🧱 Жесткие правила наследования (Ловушки на интервью):
                            </p>

                            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', lineHeight: '1.5', color: '#333' }}>
                                <li>
                                    <b>Правило <code style={codeInlineStyle}>super()</code>:</b> Если у дочернего класса объявлен свой <code style={codeInlineStyle}>constructor</code>, первым делом внутри него обязан идти вызов <code style={codeInlineStyle}>super()</code>. Использовать <code style={codeInlineStyle}>this</code> до вызова родителя строго запрещено.
                                </li>
                                <li>
                                    <b>Множественное наследование запрещено:</b> В JavaScript класс может наследоваться **только от одного** класса. Конструкция вроде <code style={codeInlineStyle}>class Child extends Parent1, Parent2</code> вызовет синтаксическую ошибку. Для обхода этого ограничения используются миксины (примеси).
                                </li>
                                <li>
                                    <b>Обращение к родителю:</b> Ключевое слово <code style={codeInlineStyle}>super</code> можно использовать не только в конструкторе, но и в любых методах дочернего класса в виде <code style={codeInlineStyle}>super.имяМетода()</code> для вызова оригинальной логики родителя.
                                </li>
                            </ul>
                        </div>
                    </section>

                </section>




            </main>
        </div>
    );
}
