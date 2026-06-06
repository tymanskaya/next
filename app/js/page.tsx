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
                    <p style={sidebarTitleStyle}>На этой странице</p>
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
                    <a href="#thisKeyword" onClick={(e) => handleScroll(e, 'thisKeyword')} style={anchorLinkStyle}>
                        🎯 Контекст вызова (this)
                    </a>
                    <a href="#cycle" onClick={(e) => handleScroll(e, 'cycle')} style={anchorLinkStyle}>
                        🔄 Циклы в JavaScript
                    </a>
                    <a href="#dataTypes" onClick={(e) => handleScroll(e, 'dataTypes')} style={anchorLinkStyle}>
                        📦 Типы данных подробно
                    </a>

                </div>
            </aside>

            {/* Правый основной Контент */}
            <main style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '40px'}}>
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
                    <h2 style={{marginTop: 0, color: '#ad8b00', fontSize: '22px'}}>Что такое ООП в JavaScript
                        (База)</h2>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                        <p style={{lineHeight: '1.6', margin: 0, color: '#333'}}>
                            <b>Объектно-Ориентированное Программирование (ООП)</b> &mdash; это подход к написанию кода,
                            где программа состоит из <b>объектов</b>. Каждый объект объединяет в себе данные
                            (<i>свойства</i>) и функции для работы с ними (<i>методы</i>).
                        </p>

                        <div style={{
                            backgroundColor: '#feffe6',
                            padding: '15px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #fadb14'
                        }}>
                            <p style={{fontWeight: 'bold', margin: '0 0 10px 0', color: '#ad8b00'}}>🚗 Главная ментальная
                                модель:</p>
                            <ul style={{
                                margin: 0,
                                paddingLeft: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                                fontSize: '0.95em',
                                color: '#444'
                            }}>
                                <li><b>Класс (Функция-конструктор):</b> Чертеж автомобиля на бумаге. На нем написано,
                                    какими свойствами (цвет, мотор) будет обладать машина, но физически её еще нет.
                                </li>
                                <li><b>Инстанс (Экземпляр):</b> Реальный автомобиль, собранный по этому чертежу через
                                    оператор <code style={codeInlineStyle}>new</code>. Он материален и готов к езде.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p style={{fontWeight: 'bold', margin: '5px 0 8px 0', color: '#222'}}>Пример создания класса
                                и инстанса:</p>
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
                        <h2 style={{marginTop: 0, color: '#1d39c4', fontSize: '22px'}}>🏛️ Четыре столпа ООП в реалиях
                            JavaScript</h2>
                        <p style={{lineHeight: '1.6', color: '#333'}}>
                            ООП держится на четырех базовых принципах. Давайте разберем, как они работают в современном
                            JS:
                        </p>

                        <div style={{display: 'flex', flexDirection: 'column', gap: '25px', marginTop: '20px'}}>

                            {/* 1. ИНКАПСУЛЯЦИЯ */}
                            <div style={{
                                backgroundColor: '#f0f5ff',
                                padding: '18px',
                                borderRadius: '8px',
                                borderLeft: '4px solid #2f54eb'
                            }}>
                                <h3 style={{margin: '0 0 8px 0', color: '#1d39c4', fontSize: '18px'}}>1. Инкапсуляция
                                    (Скрытие данных)</h3>
                                <p style={{margin: '0 0 12px 0', fontSize: '0.95em', lineHeight: '1.5'}}>
                                    Это объединение данных и методов для работы с ними внутри одного объекта, а также
                                    **ограничение прямого доступа** к внутренностям извне. В современном JS для создания
                                    приватных полей используется символ решетки <code style={codeInlineStyle}>#</code>.
                                </p>
                                <pre style={{...codeBlockStyle, backgroundColor: '#fff', padding: '12px'}}>
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
                            <div style={{
                                backgroundColor: '#f6ffed',
                                padding: '18px',
                                borderRadius: '8px',
                                borderLeft: '4px solid #52c41a'
                            }}>
                                <h3 style={{margin: '0 0 8px 0', color: '#237804', fontSize: '18px'}}>2. Наследование
                                    (Передача способностей)</h3>
                                <p style={{margin: '0 0 12px 0', fontSize: '0.95em', lineHeight: '1.5'}}>
                                    Позволяет создать дочерний класс на основе родительского, чтобы не дублировать код.
                                    Дочерний класс получает все методы родителя. Реализуется через ключевое слово <code
                                    style={codeInlineStyle}>extends</code> (а под капотом работает наша золотая формула
                                    прототипов).
                                </p>
                                <pre style={{...codeBlockStyle, backgroundColor: '#fff', padding: '12px'}}>
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
                            <div style={{
                                backgroundColor: '#fff7e6',
                                padding: '18px',
                                borderRadius: '8px',
                                borderLeft: '4px solid #ffa940'
                            }}>
                                <h3 style={{margin: '0 0 8px 0', color: '#d46b08', fontSize: '18px'}}>3. Полиморфизм
                                    (Многообразие форм)</h3>
                                <p style={{margin: '0 0 12px 0', fontSize: '0.95em', lineHeight: '1.5'}}>
                                    Возможность использовать один и тот же метод для разных классов, при этом каждый
                                    класс выполнит его по-своению (**переопределение методов**).
                                </p>
                                <pre style={{...codeBlockStyle, backgroundColor: '#fff', padding: '12px'}}>
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
                            <div style={{
                                backgroundColor: '#fff0f6',
                                padding: '18px',
                                borderRadius: '8px',
                                borderLeft: '4px solid #eb2f96'
                            }}>
                                <h3 style={{margin: '0 0 8px 0', color: '#9e1055', fontSize: '18px'}}>4. Абстракция
                                    (Выделение главного)</h3>
                                <p style={{margin: '0 0 12px 0', fontSize: '0.95em', lineHeight: '1.5'}}>
                                    Это сокрытие сложных деталей реализации и предоставление пользователю только
                                    простого и понятного интерфейса. Нам важно *что* делает объект, а не *как* он
                                    устроен внутри.
                                </p>
                                <pre style={{...codeBlockStyle, backgroundColor: '#fff', padding: '12px'}}>
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
                    <div style={{marginTop: '30px', fontFamily: 'sans-serif'}}>
                        <h3 style={{fontSize: '18px', color: '#111', marginBottom: '15px'}}>Коротко о главном</h3>

                        <div style={{overflowX: 'auto', borderRadius: '8px', border: '1px solid #f0f0f0'}}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                textAlign: 'left',
                                fontSize: '0.92em'
                            }}>
                                <thead>
                                <tr style={{backgroundColor: '#fafafa', borderBottom: '1px solid #f0f0f0'}}>
                                    <th style={{
                                        padding: '12px 16px',
                                        color: '#8c8c8c',
                                        fontWeight: '500',
                                        width: '25%'
                                    }}>Концепция
                                    </th>
                                    <th style={{
                                        padding: '12px 16px',
                                        color: '#8c8c8c',
                                        fontWeight: '500',
                                        width: '45%'
                                    }}>Смысл
                                    </th>
                                    <th style={{
                                        padding: '12px 16px',
                                        color: '#8c8c8c',
                                        fontWeight: '500',
                                        width: '30%'
                                    }}>Ключевое слово
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* Инкапсуляция */}
                                <tr style={{borderBottom: '1px solid #f0f0f0'}}>
                                    <td style={{
                                        padding: '12px 16px',
                                        fontWeight: '500',
                                        color: '#222'
                                    }}>Инкапсуляция
                                    </td>
                                    <td style={{padding: '12px 16px', color: '#434343'}}>Скрываем детали</td>
                                    <td style={{padding: '12px 16px'}}>
                                        <code style={{
                                            ...codeInlineStyle,
                                            backgroundColor: '#f5f5f5',
                                            color: '#000'
                                        }}>#privateField</code>
                                    </td>
                                </tr>
                                {/* Наследование */}
                                <tr style={{borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa'}}>
                                    <td style={{
                                        padding: '12px 16px',
                                        fontWeight: '500',
                                        color: '#222'
                                    }}>Наследование
                                    </td>
                                    <td style={{padding: '12px 16px', color: '#434343'}}>Берём от родителя</td>
                                    <td style={{
                                        padding: '12px 16px',
                                        display: 'flex',
                                        gap: '6px',
                                        alignItems: 'center'
                                    }}>
                                        <code style={{
                                            ...codeInlineStyle,
                                            backgroundColor: '#f5f5f5',
                                            color: '#000'
                                        }}>extends</code>
                                        <span style={{color: '#bfbfbf'}}>,</span>
                                        <code style={{
                                            ...codeInlineStyle,
                                            backgroundColor: '#f5f5f5',
                                            color: '#000'
                                        }}>super</code>
                                    </td>
                                </tr>
                                {/* Полиморфизм */}
                                <tr style={{borderBottom: '1px solid #f0f0f0'}}>
                                    <td style={{
                                        padding: '12px 16px',
                                        fontWeight: '500',
                                        color: '#222'
                                    }}>Полиморфизм
                                    </td>
                                    <td style={{padding: '12px 16px', color: '#434343'}}>Один интерфейс &mdash; разное
                                        поведение
                                    </td>
                                    <td style={{
                                        padding: '12px 16px',
                                        color: '#595959',
                                        fontSize: '0.95em'
                                    }}>переопределение методов
                                    </td>
                                </tr>
                                {/* Абстракция */}
                                <tr style={{backgroundColor: '#fafafa'}}>
                                    <td style={{padding: '12px 16px', fontWeight: '500', color: '#222'}}>Абстракция</td>
                                    <td style={{padding: '12px 16px', color: '#434343'}}>Упрощаем интерфейс</td>
                                    <td style={{padding: '12px 16px', color: '#595959', fontSize: '0.95em'}}>приватные
                                        методы
                                    </td>
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
                    <h2 style={{marginTop: 0, color: '#ad8b00', fontSize: '22px'}}>🧬 Золотая формула прототипов</h2>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                        <div style={{
                            backgroundColor: '#fffbe6',
                            padding: '18px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #fadb14',
                            lineHeight: '1.6'
                        }}>
                            <p style={{margin: '0 0 10px 0', fontSize: '1.02em', color: '#1a1a1a'}}>
                                <b>Абсолютно у каждого объекта</b> в JS есть свойство <code
                                style={codeInlineStyle}>__proto__</code>, и это свойство является ссылкой на <code
                                style={codeInlineStyle}>prototype</code> класса или функции-конструктора, с помощью
                                которого/которой был создан данный объект.
                            </p>
                            <p style={{margin: 0, fontSize: '1.02em', color: '#1a1a1a'}}>
                                В свою очередь, свойство <code style={codeInlineStyle}>prototype</code> является <b>объектом,
                                в котором размещены все методы</b>, доступные для инстансов данного класса.
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
                        <h3 style={{marginTop: 0, color: '#cf1322', fontSize: '20px'}}>🤯 Главный парадокс: Цепочка
                            Function и Object</h3>
                        <p style={{lineHeight: '1.6'}}>
                            В JavaScript встроенные конструкторы <code style={codeInlineStyle}>Function</code> и <code
                            style={codeInlineStyle}>Object</code> замкнуты друг на друга. Это порождает забавные, но
                            логичные правила:
                        </p>

                        <div style={{
                            backgroundColor: '#fff1f0',
                            padding: '15px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #ff4d4f',
                            fontFamily: 'monospace',
                            fontSize: '0.93em'
                        }}>
                            <div style={{color: '#cf1322'}}>// 1. Function — это функция, поэтому её прототипом является
                                Function.prototype
                            </div>
                            <div>console.log(Function.__proto__ === Function.prototype); <span
                                style={{color: '#389e0d', fontWeight: 'bold'}}>// true</span></div>

                            <div style={{color: '#cf1322', marginTop: '10px'}}>// 2. Сам прототип функции — это объект,
                                поэтому он наследуется от Object
                            </div>
                            <div>console.log(Function.prototype.__proto__ === Object.prototype); <span
                                style={{color: '#389e0d', fontWeight: 'bold'}}>// true</span></div>

                            <div style={{color: '#cf1322', marginTop: '10px'}}>// 3. А сам конструктор Object — это
                                функция, поэтому он наследуется от Function!
                            </div>
                            <div>console.log(Object.__proto__ === Function.prototype); <span
                                style={{color: '#389e0d', fontWeight: 'bold'}}>// true</span></div>
                        </div>

                        <p style={{marginTop: '15px', fontSize: '0.95em', color: '#555'}}>
                            🚩 <b>Ментальная карта:</b> Все функции (включая <code style={codeInlineStyle}>Object</code>)
                            происходят от <code style={codeInlineStyle}>Function.prototype</code>. А все объекты
                            (включая <code style={codeInlineStyle}>Function.prototype</code>) в конечном счете
                            происходят от <code style={codeInlineStyle}>Object.prototype</code>. В самом верху цепочки
                            всегда лежит <code style={codeInlineStyle}>null</code>.
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
                        <h3 style={{
                            margin: '0 0 5px 0',
                            color: '#ad8b00',
                            fontSize: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            💡 Железное правило собеседований
                        </h3>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            fontSize: '1.05em',
                            lineHeight: '1.5'
                        }}>

                            {/* Пункт про __proto__ */}
                            <div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                                <span style={{fontSize: '1.2em', marginTop: '2px'}}>🔗</span>
                                <div style={{width: '100%'}}>
                                    <code style={{
                                        ...codeInlineStyle,
                                        backgroundColor: '#fff',
                                        fontSize: '0.95em',
                                        fontWeight: 'bold'
                                    }}>__proto__</code>
                                    &mdash; есть у <b>абсолютно каждого</b> объекта в JS.

                                    {/* ИСКЛЮЧЕНИЕ С ВШИТЫМ КОДОМ */}
                                    <div style={{
                                        backgroundColor: '#fff1f0',
                                        padding: '15px',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #ff4d4f',
                                        fontSize: '0.9em',
                                        marginTop: '8px',
                                        color: '#1a1a1a'
                                    }}>
                                        <span style={{
                                            color: '#cf1322',
                                            fontWeight: 'bold'
                                        }}>⚠️ Исключение:</span> Объекты, созданные через <code
                                        style={{...codeInlineStyle, backgroundColor: '#fff'}}>Object.create(null)</code>.
                                        Они не наследуются ни от чего, у них нет <code
                                        style={{...codeInlineStyle, backgroundColor: '#fff'}}>__proto__</code>, и у них
                                        полностью отсутствуют базовые методы.

                                        <pre style={{
                                            ...codeBlockStyle,
                                            backgroundColor: '#fff',
                                            border: '1px solid #f0f0f0',
                                            marginTop: '10px',
                                            padding: '10px'
                                        }}>
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
                            <div style={{display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                                <span style={{fontSize: '1.2em', marginTop: '2px'}}>🏗️</span>
                                <div>
                                    <code style={{
                                        ...codeInlineStyle,
                                        backgroundColor: '#fff',
                                        fontSize: '0.95em',
                                        fontWeight: 'bold'
                                    }}>prototype</code>
                                    &mdash; есть <b>только у функций-конструкторов</b> и классов. Это объект, который
                                    автоматически становится <code style={codeInlineStyle}>__proto__</code> для всех
                                    экземпляров, созданных через оператор <code style={codeInlineStyle}>new</code>.
                                </div>
                            </div>
                            {/* НОВЫЙ БЛОК: СОВРЕМЕННЫЙ СТАНДАРТ (Уровень Middle / Senior) */}
                            <div style={{
                                backgroundColor: '#f6ffed',
                                padding: '12px 15px',
                                borderRadius: '8px',
                                borderLeft: '4px solid #52c41a',
                                fontSize: '0.95em',
                                color: '#1a1a1a',
                                marginTop: '5px'
                            }}>
                                🛠️ <b>Современный стандарт (Best Practice):</b><br/>
                                В реальном коде использовать свойство <code
                                style={codeInlineStyle}>__proto__</code> запрещено (оно устарело). Вместо него
                                применяются статические методы класса Object:
                                <ul style={{
                                    margin: '5px 0 0 0',
                                    paddingLeft: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px'
                                }}>
                                    <li><code
                                        style={codeInlineStyle}>Object.getPrototypeOf(obj)</code> &mdash; безопасное
                                        чтение прототипа.
                                    </li>
                                    <li><code style={codeInlineStyle}>Object.setPrototypeOf(obj,
                                        proto)</code> &mdash; безопасная запись (замена для <code
                                        style={codeInlineStyle}>obj.__proto__ = proto</code>).
                                    </li>
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
                                <h3 style={{marginTop: 0, color: '#cf1322', fontSize: '20px'}}>❌ Почему __proto__
                                    официально запрещен в продакшене?</h3>
                                <p style={{lineHeight: '1.6', color: '#333'}}>
                                    В современном коде использование <code
                                    style={codeInlineStyle}>__proto__</code> карается линтерами (ESLint) по трем веским
                                    причинам:
                                </p>

                                <div style={{display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px'}}>

                                    {/* Причина 1 */}
                                    <div style={{
                                        backgroundColor: '#fff1f0',
                                        padding: '15px',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #ff4d4f'
                                    }}>
                                        <h4 style={{margin: '0 0 5px 0', color: '#cf1322'}}>🛡️ 1. Уязвимость Prototype
                                            Pollution (Взлом прототипа)</h4>
                                        <p style={{margin: 0, fontSize: '0.93em', lineHeight: '1.5'}}>
                                            Если злоумышленник передаст строку <code
                                            style={codeInlineStyle}>"__proto__"</code> через форму или API, а ваш код
                                            тупо скопирует её в объект, хакер сможет внедриться в базовый <code
                                            style={codeInlineStyle}>Object.prototype</code>. После этого <b>все объекты
                                            приложения во всей памяти сервера</b> изменят свое поведение.
                                        </p>
                                    </div>

                                    {/* Причина 2 */}
                                    <div style={{
                                        backgroundColor: '#fff1f0',
                                        padding: '15px',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #ff4d4f'
                                    }}>
                                        <h4 style={{margin: '0 0 5px 0', color: '#cf1322'}}>🚀 2. Дикое падение
                                            производительности (Удар по V8)</h4>
                                        <p style={{margin: 0, fontSize: '0.93em', lineHeight: '1.5'}}>
                                            Прямая мутация прототипа через <code style={codeInlineStyle}>obj.__proto__ =
                                            ...</code> мгновенно уничтожает внутренние оптимизации движка V8 (скрытые
                                            классы). Движок "выбрасывает" скомпилированный быстрый код и переключает
                                            работу с объектом в режим медленного словаря. Скорость падает до 50 раз!
                                        </p>
                                    </div>

                                    {/* Причина 3 */}
                                    <div style={{
                                        backgroundColor: '#fafafa',
                                        padding: '15px',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #bfbfbf'
                                    }}>
                                        <h4 style={{margin: '0 0 5px 0', color: '#595959'}}>📜 3. Статус Устаревшего
                                            (Deprecated)</h4>
                                        <p style={{margin: 0, fontSize: '0.93em', lineHeight: '1.5'}}>
                                            Свойство признано устаревшим в спецификации ECMAScript [1]. Настоящий
                                            стандарт для чтения прототипа &mdash; это статический метод <code
                                            style={codeInlineStyle}>Object.getPrototypeOf(obj)</code>.
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
                                • <code style={codeInlineStyle}>__proto__</code> &mdash; у экземпляра, смотрит
                                вверх.<br/>
                                • <code style={codeInlineStyle}>prototype</code> &mdash; у конструктора/класса, это то,
                                на что смотрит <code style={codeInlineStyle}>__proto__</code> экземпляра.
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
                    <h2 style={{marginTop: 0, color: '#d46b08', fontSize: '22px'}}>🏗️ Классы как синтаксический
                        сахар</h2>
                    <p style={{lineHeight: '1.6', color: '#333'}}>
                        В ES6 (2015 год) в JavaScript появилось ключевое слово <code
                        style={codeInlineStyle}>class</code>. Но важно понимать: в JS <b>нет настоящих классов</b>, как
                        в Java или C#. Классы в JS — это лишь красивая обертка над функциями-конструкторами и
                        прототипами.
                    </p>

                    {/* Двухколоночное сравнение "До и После" */}
                    <div style={{marginTop: '20px'}}>
                        <p style={{fontWeight: 'bold', margin: '0 0 12px 0', color: '#222'}}>Эквивалентность кода под
                            капотом движка V8:</p>

                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>

                            {/* Левая колонка: Современный сахар */}
                            <div style={{
                                backgroundColor: '#fff7e6',
                                padding: '15px',
                                borderRadius: '8px',
                                borderTop: '3px solid #fa8c16'
                            }}>
                                <h4 style={{margin: '0 0 8px 0', color: '#d46b08'}}>✨ Современный синтаксис (с
                                    сахаром)</h4>
                                <pre style={{
                                    ...codeBlockStyle,
                                    backgroundColor: '#fff',
                                    padding: '10px',
                                    fontSize: '0.85em',
                                    margin: 0
                                }}>
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
                            <div style={{
                                backgroundColor: '#f5f5f5',
                                padding: '15px',
                                borderRadius: '8px',
                                borderTop: '3px solid #bfbfbf'
                            }}>
                                <h4 style={{margin: '0 0 8px 0', color: '#595959'}}>⚙️ Как это работает на самом
                                    деле</h4>
                                <pre style={{
                                    ...codeBlockStyle,
                                    backgroundColor: '#fff',
                                    padding: '10px',
                                    fontSize: '0.85em',
                                    margin: 0
                                }}>
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
                        <p style={{fontWeight: 'bold', margin: 0, color: '#531dab', fontSize: '1.05em'}}>
                            ⚡ Но класс &mdash; это не на 100% просто функция. Есть важные технические отличия:
                        </p>

                        <ul style={{
                            margin: 0,
                            paddingLeft: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            lineHeight: '1.5',
                            color: '#333'
                        }}>
                            <li>
                                <b>Обязательный <code style={codeInlineStyle}>new</code>:</b> Если вызвать
                                функцию-конструктор без <code style={codeInlineStyle}>new</code>, она отработает (хоть и
                                засрет глобальный контекст). Если вызвать класс без <code
                                style={codeInlineStyle}>new</code>, JavaScript выбросит ошибку: <code
                                style={{...codeInlineStyle, color: '#cf1322'}}>TypeError: Class constructor cannot be
                                invoked without 'new'</code>.
                            </li>
                            <li>
                                <b>Строгий режим автоматически:</b> Весь код внутри конструкции <code
                                style={codeInlineStyle}>class</code> автоматически выполняется в строгом режиме (<code
                                style={codeInlineStyle}>'use strict'</code>). Это защищает от случайного замусоривания
                                глобального объекта <code style={codeInlineStyle}>window</code>.

                                {/* Пример кода, наглядно показывающий поведение this */}
                                <pre style={{
                                    ...codeBlockStyle,
                                    backgroundColor: '#fff',
                                    border: '1px solid #f0f0f0',
                                    padding: '15px',
                                    marginTop: '10px',
                                    fontSize: '0.88em'
                                }}>
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
                                <b>Неперечисляемые методы:</b> Все методы, объявленные внутри класса, автоматически
                                получают флаг конфигурации <code style={codeInlineStyle}>enumerable: false</code>. Это
                                значит, что при цикле <code style={codeInlineStyle}>for...in</code> по объекту методы
                                класса не будут глупо вылезать наружу, в отличие от методов, добавленных в функцию
                                вручную.
                            </li>
                            <li>
                                <b>Отсутствие всплытия (No hoisting):</b> Функцию-конструктор, объявленную через <code
                                style={codeInlineStyle}>function</code>, можно вызвать выше по коду, чем она написана в
                                файле. Классы так делать запрещают. При попытке создать инстанс до объявления класса
                                программа упадет со строгой ошибкой.
                            </li>

                            {/* Блок кода, в точности повторяющий ваш пример со скриншота */}
                            <pre style={{
                                ...codeBlockStyle,
                                backgroundColor: '#fff',
                                border: '1px solid #f0f0f0',
                                padding: '15px',
                                marginTop: '10px',
                                fontSize: '0.88em'
                            }}>
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
                    <div style={{marginTop: '30px', fontFamily: 'sans-serif'}}>
                        <h3 style={{fontSize: '18px', color: '#111', marginBottom: '15px'}}>Итоговая таблица</h3>

                        <div style={{overflowX: 'auto', borderRadius: '8px', border: '1px solid #f0f0f0'}}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                textAlign: 'left',
                                fontSize: '0.92em'
                            }}>
                                <thead>
                                <tr style={{backgroundColor: '#fafafa', borderBottom: '1px solid #f0f0f0'}}>
                                    <th style={{
                                        padding: '12px 16px',
                                        color: '#8c8c8c',
                                        fontWeight: '500',
                                        width: '30%'
                                    }}>Отличие
                                    </th>
                                    <th style={{
                                        padding: '12px 16px',
                                        color: '#8c8c8c',
                                        fontWeight: '500',
                                        width: '35%'
                                    }}>Функция-конструктор
                                    </th>
                                    <th style={{
                                        padding: '12px 16px',
                                        color: '#8c8c8c',
                                        fontWeight: '500',
                                        width: '35%'
                                    }}>Класс
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* 1. Вызов без new */}
                                <tr style={{borderBottom: '1px solid #f0f0f0'}}>
                                    <td style={{padding: '12px 16px', fontWeight: '500'}}>Вызов без <code
                                        style={codeInlineStyle}>new</code></td>
                                    <td style={{padding: '12px 16px', color: '#389e0d'}}>✅ (не падает)</td>
                                    <td style={{padding: '12px 16px', color: '#cf1322'}}>❌ TypeError</td>
                                </tr>
                                {/* 2. Hoisting */}
                                <tr style={{borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa'}}>
                                    <td style={{padding: '12px 16px', fontWeight: '500'}}>Hoisting</td>
                                    <td style={{padding: '12px 16px', color: '#389e0d'}}>✅ всплывает</td>
                                    <td style={{padding: '12px 16px', color: '#cf1322'}}>❌ не всплывает</td>
                                </tr>
                                {/* 3. Strict mode */}
                                <tr style={{borderBottom: '1px solid #f0f0f0'}}>
                                    <td style={{padding: '12px 16px', fontWeight: '500'}}>Strict mode</td>
                                    <td style={{padding: '12px 16px', color: '#cf1322'}}>❌ не всегда</td>
                                    <td style={{padding: '12px 16px', color: '#389e0d'}}>✅ всегда</td>
                                </tr>
                                {/* 4. Методы в for...in */}
                                <tr style={{borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa'}}>
                                    <td style={{padding: '12px 16px', fontWeight: '500'}}>Методы в <code
                                        style={codeInlineStyle}>for...in</code></td>
                                    <td style={{padding: '12px 16px', color: '#389e0d'}}>✅ видны</td>
                                    <td style={{padding: '12px 16px', color: '#cf1322'}}>❌ скрыты</td>
                                </tr>
                                {/* 5. Наследование статики */}
                                <tr style={{borderBottom: '1px solid #f0f0f0'}}>
                                    <td style={{padding: '12px 16px', fontWeight: '500'}}>Наследование статики</td>
                                    <td style={{padding: '12px 16px', color: '#cf1322'}}>❌ легко забыть</td>
                                    <td style={{padding: '12px 16px', color: '#389e0d'}}>✅ автоматически</td>
                                </tr>
                                {/* 6. super */}
                                <tr style={{borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa'}}>
                                    <td style={{padding: '12px 16px', fontWeight: '500'}}><code
                                        style={codeInlineStyle}>super</code></td>
                                    <td style={{padding: '12px 16px', color: '#cf1322'}}>❌ только через <code
                                        style={codeInlineStyle}>.call</code></td>
                                    <td style={{padding: '12px 16px', color: '#389e0d'}}>✅ нативно</td>
                                </tr>
                                {/* 7. Приватные поля # */}
                                <tr style={{backgroundColor: '#fff'}}>
                                    <td style={{padding: '12px 16px', fontWeight: '500'}}>Приватные поля <code
                                        style={codeInlineStyle}>#</code></td>
                                    <td style={{padding: '12px 16px', color: '#cf1322'}}>❌</td>
                                    <td style={{padding: '12px 16px', color: '#389e0d'}}>✅</td>
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
                        <h2 style={{marginTop: 0, color: '#237804', fontSize: '22px'}}>🛠️ Анатомия создания классов в
                            JavaScript</h2>
                        <p style={{lineHeight: '1.6', color: '#333'}}>
                            Объявление класса состоит из нескольких типов полей и методов. Они принципиально отличаются
                            тем, <b>где именно в памяти</b> они будут храниться — в самом инстансе, в общем прототипе
                            или в теле функции-класса.
                        </p>

                        {/* Полный эталонный пример */}
                        <div>
                            <p style={{fontWeight: 'bold', margin: '15px 0 8px 0', color: '#111'}}>Полная структура
                                современного класса:</p>
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
                        <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '25px'}}>

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
                                <h2 style={{marginTop: 0, color: '#237804', fontSize: '22px'}}>Конструктор (constructor)
                                    под молекулярным микроскопом</h2>
                                <p style={{lineHeight: '1.6', color: '#333'}}>
                                    Метод <code style={codeInlineStyle}>constructor</code> &mdash; это специальная
                                    функция внутри класса, которая автоматически вызывается при создании объекта через
                                    оператор <code style={codeInlineStyle}>new</code>. Её главная
                                    задача &mdash; инициализировать и наполнить новый инстанс свойствами.
                                </p>

                                {/* 1. БАЗОВЫЙ СИНТАКСИС И МЕХАНИКА NEW */}
                                <div style={{marginTop: '20px'}}>
                                    <h3 style={{fontSize: '18px', color: '#111', margin: '0 0 10px 0'}}>1. Базовый
                                        синтаксис и магия оператора <code style={codeInlineStyle}>new</code></h3>
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
                                <div style={{marginTop: '30px', borderTop: '1px dashed #e1e8e1', paddingTop: '20px'}}>
                                    <h3 style={{fontSize: '18px', color: '#111', margin: '0 0 10px 0'}}>2. Конструктор
                                        по умолчанию (Implicit Constructor)</h3>
                                    <p style={{fontSize: '0.95em', color: '#434343', margin: '0 0 12px 0'}}>
                                        Если внутри класса вообще опустить метод <code
                                        style={codeInlineStyle}>constructor</code>, JavaScript не выдаст ошибку. Движок
                                        V8 создаст его автоматически. Поведение зависит от того, является ли класс
                                        дочерним:
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
                                <div style={{marginTop: '30px', borderTop: '1px dashed #e1e8e1', paddingTop: '20px'}}>
                                    <h3 style={{fontSize: '18px', color: '#111', margin: '0 0 10px 0'}}>3. Конструктор с
                                        наследованием — <code style={codeInlineStyle}>super()</code></h3>
                                    <p style={{fontSize: '0.95em', color: '#434343', margin: '0 0 12px 0'}}>
                                        В классах-наследниках (<code style={codeInlineStyle}>extends</code>)
                                        вы <b>обязаны</b> вызвать родительский конструктор через <code
                                        style={codeInlineStyle}>super()</code> строго до того, как попытаетесь
                                        использовать <code style={codeInlineStyle}>this</code>.
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
                                <div style={{marginTop: '30px', borderTop: '1px dashed #e1e8e1', paddingTop: '20px'}}>
                                    <h3 style={{fontSize: '18px', color: '#111', marginBottom: '15px'}}>4. Шпаргалка:
                                        Поведение конструктора в разных ситуациях</h3>

                                    <div style={{overflowX: 'auto', borderRadius: '8px', border: '1px solid #e1e8e1'}}>
                                        <table style={{
                                            width: '100%',
                                            borderCollapse: 'collapse',
                                            textAlign: 'left',
                                            fontSize: '0.92em'
                                        }}>
                                            <thead>
                                            <tr style={{backgroundColor: '#f6ffed', borderBottom: '1px solid #e1e8e1'}}>
                                                <th style={{
                                                    padding: '12px 16px',
                                                    color: '#52c41a',
                                                    fontWeight: '500',
                                                    width: '35%'
                                                }}>Ситуация
                                                </th>
                                                <th style={{
                                                    padding: '12px 16px',
                                                    color: '#52c41a',
                                                    fontWeight: '500',
                                                    width: '65%'
                                                }}>Поведение движка JS
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr style={{borderBottom: '1px solid #e1e8e1'}}>
                                                <td style={{padding: '12px 16px'}}><code
                                                    style={codeInlineStyle}>constructor</code> не написан
                                                </td>
                                                <td style={{padding: '12px 16px', color: '#434343'}}>Создаётся пустой
                                                    автоматически
                                                </td>
                                            </tr>
                                            <tr style={{borderBottom: '1px solid #e1e8e1', backgroundColor: '#fafafa'}}>
                                                <td style={{padding: '12px 16px'}}><code
                                                    style={codeInlineStyle}>extends</code> без <code
                                                    style={codeInlineStyle}>constructor</code></td>
                                                <td style={{padding: '12px 16px', color: '#434343'}}><code
                                                    style={codeInlineStyle}>super(...args)</code> добавляется
                                                    автоматически
                                                </td>
                                            </tr>
                                            <tr style={{borderBottom: '1px solid #e1e8e1'}}>
                                                <td style={{padding: '12px 16px'}}><code
                                                    style={codeInlineStyle}>extends</code> с <code
                                                    style={codeInlineStyle}>constructor</code></td>
                                                <td style={{padding: '12px 16px', color: '#434343'}}><code
                                                    style={codeInlineStyle}>super()</code> обязателен до обращения
                                                    к <code style={codeInlineStyle}>this</code></td>
                                            </tr>
                                            <tr style={{borderBottom: '1px solid #e1e8e1', backgroundColor: '#fafafa'}}>
                                                <td style={{padding: '12px 16px'}}><code style={codeInlineStyle}>async
                                                    constructor</code></td>
                                                <td style={{padding: '12px 16px', color: '#cf1322', fontWeight: '500'}}>
                                                    ❌ невозможно &mdash; использовать статический фабричный метод
                                                </td>
                                            </tr>
                                            <tr style={{borderBottom: '1px solid #e1e8e1'}}>
                                                <td style={{padding: '12px 16px'}}><code
                                                    style={codeInlineStyle}>return</code> примитив
                                                </td>
                                                <td style={{
                                                    padding: '12px 16px',
                                                    color: '#434343'
                                                }}>Игнорируется &mdash; возвращается <code
                                                    style={codeInlineStyle}>this</code></td>
                                            </tr>
                                            <tr style={{backgroundColor: '#fafafa'}}>
                                                <td style={{padding: '12px 16px'}}><code
                                                    style={codeInlineStyle}>return</code> объект
                                                </td>
                                                <td style={{padding: '12px 16px', color: '#434343'}}>Вернётся именно
                                                    этот сторонний объект (подмена <code
                                                        style={codeInlineStyle}>this</code>)
                                                </td>
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
                                        <b>📌 Золотое правило архитектуры:</b> Конструктор предназначен <u>только для
                                        инициализации полей</u>. Сложную бизнес-логику, сетевые запросы (fetch/axios)
                                        или тяжелые вычисления всегда выносите в отдельные методы или статические
                                        фабрики!
                                    </div>
                                </div>
                            </section>


                            {/* Разбор Свойств: Публичные vs Приватные */}
                            <div style={{
                                backgroundColor: '#fafafa',
                                padding: '15px',
                                borderRadius: '8px',
                                borderLeft: '4px solid #d9d9d9'
                            }}>
                                <h4 style={{margin: '0 0 8px 0', color: '#262626'}}>2. Свойства инстанса (Поля
                                    класса)</h4>
                                <p style={{margin: 0, fontSize: '0.93em', lineHeight: '1.5', color: '#434343'}}>
                                    Поля, объявленные прямо в теле класса (например, <code style={codeInlineStyle}>role
                                    = "Developer"</code>), физически копируются в каждый создаваемый объект. У объектов
                                    будут абсолютно независимые копии этих переменных. Поля с решеткой <code
                                    style={codeInlineStyle}>#</code> инкапсулируются внутри класса и полностью защищены
                                    от чтения снаружи.
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
                                <h2 style={{marginTop: 0, color: '#cf1322', fontSize: '22px'}}>Приватные поля и методы
                                    класса (<code style={{...codeInlineStyle, color: '#cf1322'}}>#</code>)</h2>
                                <p style={{lineHeight: '1.6', color: '#333'}}>
                                    В старом JavaScript приватность имитировали с помощью нижнего подчеркивания (<code
                                    style={codeInlineStyle}>_balance</code>), но это было лишь джентльменским
                                    соглашением. Современный JS поддерживает настоящую приватность на уровне движка с
                                    помощью символа <code style={codeInlineStyle}>#</code>.
                                </p>

                                {/* Основной пример кода */}
                                <div>
                                    <p style={{fontWeight: 'bold', margin: '15px 0 8px 0', color: '#111'}}>Живой пример
                                        инкапсуляции через приватность:</p>
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
                                    <p style={{fontWeight: 'bold', margin: 0, color: '#cf1322', fontSize: '1.05em'}}>
                                        🧱 Важные правила приватности (Что нужно знать для собеседования):
                                    </p>

                                    <ul style={{
                                        margin: 0,
                                        paddingLeft: '20px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                        lineHeight: '1.5',
                                        color: '#333'
                                    }}>
                                        <li>
                                            <b>Обязательное объявление:</b> Все приватные поля <span
                                            style={{fontWeight: 'bold'}}>обязаны</span> быть объявлены прямо в теле
                                            класса (над конструктором). Нельзя создать приватное свойство на лету внутри
                                            конструктора, как это делается с публичными свойствами.
                                        </li>
                                        <li>
                                            <b>Решётка — часть имени:</b> Символ <code
                                            style={codeInlineStyle}>#</code> — это не просто модификатор доступа
                                            (как <code style={codeInlineStyle}>private</code> в TypeScript). Это
                                            физическая часть имени переменной. Нельзя обратиться к полю без решётки.
                                        </li>
                                        <li>
                                            <b>Динамический доступ запрещён:</b> К приватным полям нельзя обратиться
                                            через квадратные скобки. Код <code
                                            style={codeInlineStyle}>obj['#balance']</code> вернет <code
                                            style={codeInlineStyle}>undefined</code>, а не значение свойства. Это
                                            гарантирует жесткую защиту от обхода инкапсуляции.
                                        </li>
                                        <li>
                                            <b>Не наследуются:</b> Дочерние классы (<code
                                            style={codeInlineStyle}>extends</code>) **не имеют доступа** к приватным
                                            полям родителя напрямую. Если класс <code
                                            style={codeInlineStyle}>PremiumAccount</code> наследует <code
                                            style={codeInlineStyle}>BankAccount</code>, его методы не смогут
                                            прочитать <code style={codeInlineStyle}>this.#balance</code>. Чтение
                                            возможно только через публичные геттеры/сеттеры родительского класса.
                                        </li>
                                    </ul>
                                </div>
                            </section>


                            {/* Разбор Прототипных методов */}
                            <div style={{
                                backgroundColor: '#e6f7ff',
                                padding: '15px',
                                borderRadius: '8px',
                                borderLeft: '4px solid #1890ff'
                            }}>
                                <h4 style={{margin: '0 0 8px 0', color: '#0050b3'}}>3. Обычные методы (Прототипные)</h4>
                                <p style={{margin: 0, fontSize: '0.93em', lineHeight: '1.5', color: '#434343'}}>
                                    Когда вы объявляете обычный метод вроде <code
                                    style={codeInlineStyle}>getDetails() {}</code>, он <b>не копируется</b> в инстансы.
                                    Он записывается в единственном экземпляре в объект <code
                                    style={codeInlineStyle}>Worker.prototype</code>. Все созданные рабочие будут делить
                                    этот метод через свои скрытые ссылки <code style={codeInlineStyle}>__proto__</code>,
                                    колоссально экономя оперативную память.
                                </p>
                            </div>

                            {/* Разбор Статики */}
                            {/* Замените содержимое блока статики на этот вариант с живым кодом */}
                            <div style={{
                                backgroundColor: '#fff7e6',
                                padding: '15px',
                                borderRadius: '8px',
                                borderLeft: '4px solid #ffa940'
                            }}>
                                <h4 style={{margin: '0 0 8px 0', color: '#d46b08'}}>4. Статические поля и методы
                                    (static)</h4>
                                <p style={{
                                    margin: '0 0 12px 0',
                                    fontSize: '0.93em',
                                    lineHeight: '1.5',
                                    color: '#434343'
                                }}>
                                    Ключевое слово <code style={codeInlineStyle}>static</code> означает, что поле или
                                    метод принадлежит <b>самому классу</b>, а не его экземплярам. Чаще всего они
                                    используются для создания утилит или фабричных методов.
                                </p>

                                {/* Код из вашего примера со скриншота */}
                                <pre style={{
                                    ...codeBlockStyle,
                                    backgroundColor: '#fff',
                                    border: '1px solid #f0f0f0',
                                    padding: '15px',
                                    margin: 0,
                                    fontSize: '0.88em'
                                }}>
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
                                <div style={{marginTop: '20px'}}>
                                    <p style={{
                                        fontWeight: 'bold',
                                        margin: '0 0 8px 0',
                                        color: '#d46b08',
                                        fontSize: '0.95em'
                                    }}>
                                        🔥 Продвинутый уровень: Статика наследуется!
                                    </p>
                                    <p style={{
                                        margin: '0 0 10px 0',
                                        fontSize: '0.9em',
                                        color: '#434343',
                                        lineHeight: '1.4'
                                    }}>
                                        В отличие от классических функций-конструкторов (где статику приходилось
                                        копировать руками), классы автоматически связывают сами функции-конструкторы
                                        друг с другом. Поэтому дочерний класс видит статические методы родителя и может
                                        переопределять его статические свойства:
                                    </p>

                                    <pre style={{
                                        ...codeBlockStyle,
                                        backgroundColor: '#fff',
                                        border: '1px solid #f0f0f0',
                                        padding: '15px',
                                        margin: 0,
                                        fontSize: '0.88em'
                                    }}>
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
                                <div style={{marginTop: '20px', borderTop: '1px dashed #ffa940', paddingTop: '15px'}}>
                                    <p style={{
                                        fontWeight: 'bold',
                                        margin: '0 0 8px 0',
                                        color: '#d46b08',
                                        fontSize: '0.95em'
                                    }}>
                                        🔒 Максимальная защита: static + приватность (#)
                                    </p>
                                    <p style={{
                                        margin: '0 0 10px 0',
                                        fontSize: '0.9em',
                                        color: '#434343',
                                        lineHeight: '1.4'
                                    }}>
                                        Вы можете объединить статику и инкапсуляцию, объявив приватное статическое поле
                                        через <code style={codeInlineStyle}>static #field</code>. Такое поле хранится в
                                        самом классе, но доступно <b>строго внутренним статическим методам</b> этого же
                                        класса:
                                    </p>

                                    <pre style={{
                                        ...codeBlockStyle,
                                        backgroundColor: '#fff',
                                        border: '1px solid #f0f0f0',
                                        padding: '15px',
                                        margin: 0,
                                        fontSize: '0.88em'
                                    }}>
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
                    <div style={{marginTop: '30px', fontFamily: 'sans-serif'}}>
                        <h3 style={{fontSize: '18px', color: '#111', marginBottom: '15px'}}>Итоговая таблица хранения и
                            доступа</h3>

                        <div style={{overflowX: 'auto', borderRadius: '8px', border: '1px solid #f0f0f0'}}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                textAlign: 'left',
                                fontSize: '0.92em'
                            }}>
                                <thead>
                                <tr style={{backgroundColor: '#fafafa', borderBottom: '1px solid #f0f0f0'}}>
                                    <th style={{
                                        padding: '12px 16px',
                                        color: '#8c8c8c',
                                        fontWeight: '500',
                                        width: '20%'
                                    }}>Тип
                                    </th>
                                    <th style={{
                                        padding: '12px 16px',
                                        color: '#8c8c8c',
                                        fontWeight: '500',
                                        width: '25%'
                                    }}>Синтаксис
                                    </th>
                                    <th style={{
                                        padding: '12px 16px',
                                        color: '#8c8c8c',
                                        fontWeight: '500',
                                        width: '30%'
                                    }}>Где хранится
                                    </th>
                                    <th style={{
                                        padding: '12px 16px',
                                        color: '#8c8c8c',
                                        fontWeight: '500',
                                        width: '25%'
                                    }}>Доступ
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* 1. Поле экземпляра */}
                                <tr style={{borderBottom: '1px solid #f0f0f0'}}>
                                    <td style={{padding: '12px 16px', fontWeight: '500'}}>Поле экземпляра</td>
                                    <td style={{padding: '12px 16px'}}>
                                        <code style={codeInlineStyle}>this.x = ...</code> / <code
                                        style={codeInlineStyle}>x = ...</code>
                                    </td>
                                    <td style={{padding: '12px 16px', color: '#434343'}}>В каждом <code
                                        style={codeInlineStyle}>new</code></td>
                                    <td style={{padding: '12px 16px'}}><code style={codeInlineStyle}>obj.x</code></td>
                                </tr>
                                {/* 2. Приватное поле */}
                                <tr style={{borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa'}}>
                                    <td style={{padding: '12px 16px', fontWeight: '500'}}>Приватное поле</td>
                                    <td style={{padding: '12px 16px'}}><code style={codeInlineStyle}>#x = ...</code>
                                    </td>
                                    <td style={{padding: '12px 16px', color: '#434343'}}>В каждом <code
                                        style={codeInlineStyle}>new</code></td>
                                    <td style={{padding: '12px 16px', color: '#8c8c8c', fontSize: '0.95em'}}>Только
                                        внутри класса
                                    </td>
                                </tr>
                                {/* 3. Метод */}
                                <tr style={{borderBottom: '1px solid #f0f0f0'}}>
                                    <td style={{padding: '12px 16px', fontWeight: '500'}}>Метод</td>
                                    <td style={{padding: '12px 16px'}}><code
                                        style={codeInlineStyle}>foo() &#123;&#125;</code></td>
                                    <td style={{padding: '12px 16px'}}><code
                                        style={codeInlineStyle}>Class.prototype</code></td>
                                    <td style={{padding: '12px 16px'}}><code style={codeInlineStyle}>obj.foo()</code>
                                    </td>
                                </tr>
                                {/* 4. Геттер/сеттер */}
                                <tr style={{borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa'}}>
                                    <td style={{padding: '12px 16px', fontWeight: '500'}}>Геттер/сеттер</td>
                                    <td style={{padding: '12px 16px'}}><code style={codeInlineStyle}>get
                                        x() &#123;&#125;</code></td>
                                    <td style={{padding: '12px 16px'}}><code
                                        style={codeInlineStyle}>Class.prototype</code></td>
                                    <td style={{padding: '12px 16px'}}><code style={codeInlineStyle}>obj.x</code></td>
                                </tr>
                                {/* 5. Статическое поле */}
                                <tr style={{borderBottom: '1px solid #f0f0f0'}}>
                                    <td style={{padding: '12px 16px', fontWeight: '500'}}>Статическое поле</td>
                                    <td style={{padding: '12px 16px'}}><code style={codeInlineStyle}>static x =
                                        ...</code></td>
                                    <td style={{padding: '12px 16px', color: '#434343'}}>В самом классе</td>
                                    <td style={{padding: '12px 16px'}}><code style={codeInlineStyle}>Class.x</code></td>
                                </tr>
                                {/* 6. Статический метод */}
                                <tr style={{backgroundColor: '#fafafa'}}>
                                    <td style={{padding: '12px 16px', fontWeight: '500'}}>Статический метод</td>
                                    <td style={{padding: '12px 16px'}}><code style={codeInlineStyle}>static
                                        foo() &#123;&#125;</code></td>
                                    <td style={{padding: '12px 16px', color: '#434343'}}>В самом классе</td>
                                    <td style={{padding: '12px 16px'}}><code style={codeInlineStyle}>Class.foo()</code>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Блок оптимизации памяти на основе вашего скриншота */}
                    <div style={{marginTop: '25px', fontFamily: 'sans-serif'}}>
                        <h4 style={{fontSize: '16px', color: '#111', margin: '0 0 10px 0'}}>Почему это важно
                            (Оптимизация памяти)</h4>
                        <p style={{fontSize: '0.95em', lineHeight: '1.5', color: '#333', margin: '0 0 15px 0'}}>
                            Объявление методов внутри конструктора заставляет движок JavaScript создавать **новую
                            функцию при каждом создании объекта**. Если вынести метод наружу, он запишется в прототип в
                            одном экземпляре, экономя оперативную память:
                        </p>

                        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>

                            {/* Антипаттерн */}
                            <div style={{
                                backgroundColor: '#fff1f0',
                                padding: '15px',
                                borderRadius: '8px',
                                borderLeft: '4px solid #ff4d4f'
                            }}>
                                <span style={{
                                    color: '#cf1322',
                                    fontWeight: 'bold',
                                    fontSize: '0.9em'
                                }}>❌ Антипаттерн &mdash; Метод в конструкторе</span>
                                <pre style={{
                                    ...codeBlockStyle,
                                    backgroundColor: '#fff',
                                    padding: '10px',
                                    margin: '8px 0 0 0',
                                    fontSize: '0.85em'
                                }}>
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
                            <div style={{
                                backgroundColor: '#f6ffed',
                                padding: '15px',
                                borderRadius: '8px',
                                borderLeft: '4px solid #52c41a'
                            }}>
                                <span style={{
                                    color: '#237804',
                                    fontWeight: 'bold',
                                    fontSize: '0.9em'
                                }}>✅ Правильно &mdash; Метод в прототипе</span>
                                <pre style={{
                                    ...codeBlockStyle,
                                    backgroundColor: '#fff',
                                    padding: '10px',
                                    margin: '8px 0 0 0',
                                    fontSize: '0.85em'
                                }}>
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
                        <h2 style={{marginTop: 0, color: '#0050b3', fontSize: '22px'}}>🧬 Наследование классов (<code
                            style={{...codeInlineStyle, color: '#0050b3'}}>extends / super</code>)</h2>
                        <p style={{lineHeight: '1.6', color: '#333'}}>
                            Наследование позволяет расширить функционал родительского класса. При этом дочерний класс
                            может использовать родительские методы, добавлять свои собственные или полностью
                            переопределять поведение (Полиморфизм).
                        </p>

                        {/* Эталонный пример кода */}
                        <div>
                            <p style={{fontWeight: 'bold', margin: '15px 0 8px 0', color: '#111'}}>Реализация
                                наследования и расширения:</p>
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
                        <div style={{
                            backgroundColor: '#e6f7ff',
                            padding: '15px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #1890ff',
                            fontSize: '0.93em',
                            marginTop: '20px'
                        }}>
                            <p style={{fontWeight: 'bold', margin: '0 0 8px 0', color: '#0050b3'}}>⚙️ Что происходит в
                                памяти движка V8?</p>
                            Когда вы пишете <code style={codeInlineStyle}>class Dog extends Animal</code>, JavaScript
                            настраивает двойную прототипную связь:
                            <ol style={{
                                margin: '8px 0 0 0',
                                paddingLeft: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px'
                            }}>
                                <li><b>Для экземпляров:</b> <code style={codeInlineStyle}>Dog.prototype.__proto__ ===
                                    Animal.prototype</code>. Именно поэтому объекты собак видят методы <code
                                    style={codeInlineStyle}>eat()</code>.
                                </li>
                                <li><b>Для самих классов (Статика):</b> <code style={codeInlineStyle}>Dog.__proto__ ===
                                    Animal</code>. Благодаря этому статические методы родителя автоматически наследуются
                                    дочерним классом.
                                </li>
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
                            <p style={{fontWeight: 'bold', margin: 0, color: '#ad8b00', fontSize: '1.05em'}}>
                                🧱 Жесткие правила наследования (Ловушки на интервью):
                            </p>

                            <ul style={{
                                margin: 0,
                                paddingLeft: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                lineHeight: '1.5',
                                color: '#333'
                            }}>
                                <li>
                                    <b>Правило <code style={codeInlineStyle}>super()</code>:</b> Если у дочернего класса
                                    объявлен свой <code style={codeInlineStyle}>constructor</code>, первым делом внутри
                                    него обязан идти вызов <code style={codeInlineStyle}>super()</code>.
                                    Использовать <code style={codeInlineStyle}>this</code> до вызова родителя строго
                                    запрещено.
                                </li>
                                <li>
                                    <b>Множественное наследование запрещено:</b> В JavaScript класс может наследоваться
                                    **только от одного** класса. Конструкция вроде <code style={codeInlineStyle}>class
                                    Child extends Parent1, Parent2</code> вызовет синтаксическую ошибку. Для обхода
                                    этого ограничения используются миксины (примеси).
                                </li>
                                <li>
                                    <b>Обращение к родителю:</b> Ключевое слово <code
                                    style={codeInlineStyle}>super</code> можно использовать не только в конструкторе, но
                                    и в любых методах дочернего класса в виде <code
                                    style={codeInlineStyle}>super.имяМетода()</code> для вызова оригинальной логики
                                    родителя.
                                </li>
                            </ul>
                        </div>
                    </section>

                </section>
                <section id="thisKeyword" style={{
                    backgroundColor: '#fff',
                    padding: '25px',
                    borderRadius: '12px',
                    borderTop: '6px solid #13c2c2', // Красивый бирюзовый цвет для работы с контекстом
                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                    marginTop: '40px',
                    scrollMarginTop: '40px',
                    fontFamily: 'sans-serif'
                }}>
                    <h2 style={{marginTop: 0, color: '#006d75', fontSize: '22px'}}>🎯 Контекст вызова (this)</h2>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>

                        {/* ВАША ФУНДАМЕНТАЛЬНАЯ ФОРМУЛИРОВКА */}
                        <div style={{
                            backgroundColor: '#e6fffb',
                            padding: '15px 18px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #13c2c2',
                            lineHeight: '1.6'
                        }}>
                            <p style={{margin: '0 0 8px 0', fontSize: '1.05em', color: '#1a1a1a'}}>
                                <b><code
                                    style={{...codeInlineStyle, backgroundColor: '#fff', color: '#006d75'}}>this</code></b> &mdash; ключевое
                                слово, которое указывает на объект, в контексте которого выполняется код.
                            </p>
                            <p style={{margin: 0, fontSize: '1.05em', fontWeight: 'bold', color: '#006d75'}}>
                                🚀 Значение this зависит не от того, где функция написана, а от того, как она вызвана.
                            </p>
                        </div>

                        {/* Шпаргалка: От чего зависит this */}
                        <div style={{
                            backgroundColor: '#fafafa',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #f0f0f0'
                        }}>
                            <p style={{fontWeight: 'bold', margin: '0 0 10px 0', color: '#595959'}}>📊 Четыре режима
                                определения контекста:</p>
                            <ul style={{
                                margin: 0,
                                paddingLeft: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                                fontSize: '0.95em',
                                color: '#222'
                            }}>
                                <li><b>Вызов от точки (<code style={codeInlineStyle}>obj.foo()</code>):</b> <code
                                    style={codeInlineStyle}>this</code> равен объекту перед точкой (<code
                                    style={codeInlineStyle}>obj</code>).
                                </li>
                                <li><b>Обычный вызов (<code style={codeInlineStyle}>foo()</code>):</b> В классах и
                                    строгом режиме равен <code
                                        style={{...codeInlineStyle, color: '#cf1322'}}>undefined</code>, без строгого
                                    режима &mdash; объекту <code style={codeInlineStyle}>window</code>.
                                </li>
                                <li><b>С оператором <code style={codeInlineStyle}>new</code>:</b> Равен новому, только
                                    что созданному пустому объекту.
                                </li>
                                <li><b>В стрелочных функциях:</b> Своего <code style={codeInlineStyle}>this</code> нет,
                                    забирается из внешнего окружения.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Подраздел глобального контекста и дефолтного связывания для вставки в #thisKeyword */}
                    <div style={{marginTop: '20px', fontFamily: 'sans-serif'}}>
                        <h3 style={{fontSize: '18px', color: '#006d75', margin: '0 0 10px 0'}}>1. Глобальный контекст и
                            обычный вызов (Default Binding)</h3>
                        <p style={{fontSize: '0.95em', lineHeight: '1.5', color: '#333', margin: '0 0 15px 0'}}>
                            Поведение <code style={codeInlineStyle}>this</code> при вызове функции «сама по себе»
                            зависит от окружения (браузер/Node.js) и включения строгой директивы <code
                            style={codeInlineStyle}>'use strict'</code>:
                        </p>

                        <pre style={{
                            ...codeBlockStyle,
                            backgroundColor: '#fff',
                            border: '1px solid #b5f5ec',
                            padding: '15px',
                            margin: 0,
                            fontSize: '0.88em'
                        }}>
{`// 🌍 А. Глобальный контекст (вне функций)
console.log(this);  // window (в браузере) / global (в Node.js)

// 🏢 Б. Обычный вызов функции в НЕСТРОГОМ режиме
function sayHi() {
  console.log(this);  // window — ссылается на глобальный объект
}
sayHi();

// 🔒 В. Обычный вызов функции в СТРОГОМ режиме ('use strict')
function sayHiStrict() {
  'use strict'
  console.log(this);  // undefined — строгий режим защищает от утечки контекста
}
sayHiStrict();`}
    </pre>

                        <div style={{
                            backgroundColor: '#fff7e6',
                            padding: '12px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #ffa940',
                            fontSize: '0.9em',
                            marginTop: '12px',
                            color: '#d46b08'
                        }}>
                            ⚠️ <b>Важно для ООП:</b> Так как внутри всех ES6 классов режим <code
                            style={codeInlineStyle}>'use strict'</code> активирован **автоматически**, любая потеря
                            метода класса (например, при передаче в колбэк) превратит его <code
                            style={codeInlineStyle}>this</code> строго в <code style={codeInlineStyle}>undefined</code>,
                            а не в <code style={codeInlineStyle}>window</code>.
                        </div>
                    </div>

                    {/* Подраздел 2. Метод объекта и потеря контекста для вставки в #thisKeyword */}
                    <div style={{
                        marginTop: '30px',
                        borderTop: '1px dashed #b5f5ec',
                        paddingTop: '20px',
                        fontFamily: 'sans-serif'
                    }}>
                        <h3 style={{fontSize: '18px', color: '#006d75', margin: '0 0 10px 0'}}>2. Метод объекта и потеря
                            контекста (Implicit Binding)</h3>
                        <p style={{fontSize: '0.95em', lineHeight: '1.5', color: '#333', margin: '0 0 15px 0'}}>
                            Когда функция вызывается как метод объекта (через точку), её <code
                            style={codeInlineStyle}>this</code> указывает на сам объект. Но если оторвать метод от
                            объекта и скопировать в переменную — контекст теряется!
                        </p>

                        <pre style={{
                            ...codeBlockStyle,
                            backgroundColor: '#fff',
                            border: '1px solid #b5f5ec',
                            padding: '15px',
                            margin: 0,
                            fontSize: '0.88em'
                        }}>
{`// 🔵 Вызов метода объекта — this = сам объект перед точкой
const user = {
  name: 'Катя',
  greet() {
    return \`Привет, я \${this.name}\`  // this указывает на объект user
  }
}

console.log(user.greet());  // 'Привет, я Катя' ✅

// ⚠️ Важно — контекст зависит от того, кто ВЫЗЫВАЕТ, а не где написано
const greet = user.greet;   // вытащили функцию и записали в переменную (оторвали от объекта)

// Вызов функции без объекта ("в лоб")
console.log(greet());       // 'Привет, я undefined' ❌ (в нестрогом режиме)
                            // Либо падение с ошибкой TypeError (в 'use strict')
                            // this больше не указывает на user!`}
    </pre>

                        <div style={{
                            backgroundColor: '#e6f7ff',
                            padding: '12px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #1890ff',
                            fontSize: '0.9em',
                            marginTop: '12px',
                            color: '#0050b3'
                        }}>
                            💡 <b>Ментальное правило:</b> Посмотрите на строчку, где вызывается функция (со
                            скобками <code style={codeInlineStyle}>()</code>). Если если перед методом() - т.е. функцией
                            **есть точка** (например, <code style={codeInlineStyle}>user.greet()</code>), то <code
                            style={codeInlineStyle}>this</code> равен тому, что стоит слева от точки. Если точки нет
                            (<code style={codeInlineStyle}>greet()</code>), контекст потерян.
                        </div>
                    </div>

                    {/* Пример потери контекста */}
                    <div style={{marginTop: '15px'}}>
                        <p style={{fontWeight: 'bold', margin: '0 0 8px 0', color: '#111'}}>⚠️ Классическая потеря
                            контекста в ООП:</p>
                        <pre style={codeBlockStyle}>
{`class User {
    constructor(name) { this.name = name; }
    
    sayHi() { console.log(\`Привет, меня зовут \${this.name}\`); }
}

const alex = new User("Алексей");
alex.sayHi(); // ✅ Работает: "Привет, меня зовут Алексей"

// ПОТЕРЯ КОНТЕКСТА: передаем метод как обычную функцию
const greet = alex.sayHi; 
greet(); // ❌ TypeError: Cannot read properties of undefined (reading 'name')
// Так как внутри класса по умолчанию включен 'use strict', this стал равен undefined!`}
        </pre>
                    </div>


                    {/* Подраздел 4. Явная привязка для вставки в #thisKeyword */}
                    <div style={{
                        marginTop: '30px',
                        borderTop: '1px dashed #b5f5ec',
                        paddingTop: '20px',
                        fontFamily: 'sans-serif'
                    }}>
                        <h3 style={{fontSize: '18px', color: '#006d75', margin: '0 0 10px 0'}}>3. Явная привязка
                            контекста (Explicit Binding)</h3>
                        <p style={{fontSize: '0.95em', lineHeight: '1.5', color: '#333', margin: '0 0 15px 0'}}>
                            Если контекст потерян или функцию нужно вызвать в контексте чужого объекта, используются
                            нативные методы JavaScript: <code style={codeInlineStyle}>call</code>, <code
                            style={codeInlineStyle}>apply</code> и <code style={codeInlineStyle}>bind</code>.
                        </p>

                        {/* Код в точности как на вашем скриншоте */}
                        <pre style={{
                            ...codeBlockStyle, backgroundColor: '#fff', border: '1px solid #b5f5ec', padding: '15px', margin: 0, fontSize: '0.88em' }}>
{`function greet(greeting) {
  return \`\${greeting}, я \${this.name}\`
}

const user = { name: 'Катя' }
const admin = { name: 'Иван' }

// ⚡ call — вызов сразу, аргументы через запятую
greet.call(user, 'Привет')     // 'Привет, я Катя'
greet.call(admin, 'Здравствуй') // 'Здравствуй, я Иван'

// ⚡ apply — вызов сразу, аргументы массивом
greet.apply(user, ['Привет']) // 'Привет, я Катя'

// ⚡ bind — возвращает НОВУЮ функцию с привязанным this (без мгновенного вызова)
const greetKate = greet.bind(user)
greetKate('Привет') // 'Привет, я Катя' ✅
greetKate('Пока')   // 'Пока, я Катя'   ✅`}
    </pre>

                        {/* Небольшая памятка по разнице для закрепления */}
                        <div style={{ backgroundColor: '#e6f7ff', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #1890ff', fontSize: '0.9em', marginTop: '12px', color: '#0050b3' }}>
                            💡 <b>Как легко запомнить разницу:</b><br />
                            • <b>C</b>all — аргументы через <b>C</b>omma (запятую).<br />
                            • <b>A</b>pply — аргументы через <b>A</b>rray (массив).<br />
                            • <b>B</b>ind — создает <b>B</b>ound function (новую связанную функцию).
                        </div>
                    </div>


                    {/* Стрелочные функции в ООП */}
                    <div style={{ backgroundColor: '#fff7e6', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ffa940', marginTop: '25px' }}>
                        <h4 style={{ margin: '0 0 8px 0', color: '#d46b08' }}>🚀 Современное решение: Стрелочные функции в классах</h4>
                        <p style={{ margin: '0 0 10px 0', fontSize: '0.93em', lineHeight: '1.5', color: '#333' }}>
                            У стрелочных функций <span style={{ fontWeight: 'bold' }}>нет своего контекста</span>. Они берут <code style={codeInlineStyle}>this</code> из внешнего окружения в момент создания. Если объявить метод класса как стрелку, его контекст <b>никогда не потеряется</b>:
                        </p>
                        <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', padding: '10px', margin: 0 }}>
{`class Autopilot {
    constructor(brand) { this.brand = brand; }

    // Метод-стрелка намертво привязан к инстансу при создании
    start = () => {
        console.log(\`Автопилот \${this.brand} запущен\`);
    }
}

const tesla = new Autopilot("Tesla");
setTimeout(tesla.start, 1000); // ✅ Работает через секунду! Контекст не потерялся.`}
        </pre>
                    </div>
                    {/* Подраздел 5. Стрелочные функции для вставки в #thisKeyword */}
                    <div style={{ marginTop: '30px', borderTop: '1px dashed #b5f5ec', paddingTop: '20px', fontFamily: 'sans-serif' }}>
                        <h3 style={{ fontSize: '18px', color: '#006d75', margin: '0 0 10px 0' }}>4. Контекст в стрелочных функциях (Lexical Binding)</h3>
                        <p style={{ fontSize: '0.95em', lineHeight: '1.5', color: '#333', margin: '0 0 15px 0' }}>
                            У стрелочных функций <span style={{ fontWeight: 'bold' }}>нет собственного контекста вызова</span>. При обращении к <code style={codeInlineStyle}>this</code> они не смотрят на то, кто их вызвал — они берут значение из внешнего окружения. Их контекст фиксируется раз и навсегда в момент создания.
                        </p>

                        <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', border: '1px solid #b5f5ec', padding: '15px', margin: 0, fontSize: '0.88em' }}>
{`// 🏹 Стрелочная функция — this берётся из внешнего контекста
const obj = {
  name: 'Катя',
  // Обычный метод объекта создаёт контекст
  regularMethod() {
    // Стрелка внутри метода возьмет this у regularMethod (то есть obj)
    const arrow = () => console.log(this.name);
    arrow();
  },
  // Стрелка как метод объекта — внешним контекстом для неё будет являться window!
  arrowMethod: () => {
    console.log(this.name); 
  }
};

obj.regularMethod(); // 'Катя' ✅ (стрелка заглянула на один уровень вверх)
obj.arrowMethod();   // undefined ❌ (стрелка вышла на глобальный уровень window/global)`}
    </pre>

                        <div style={{ backgroundColor: '#fff7e6', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #ffa940', fontSize: '0.9em', marginTop: '12px', color: '#d46b08' }}>
                            ⚠️ <b>Важное правило для классов:</b> Именно из-за этого свойства стрелки идеальны для методов классов, которые передаются как колбэки (например, в обработчики кликов React или <code style={codeInlineStyle}>setTimeout</code>). Метод-стрелка внутри класса намертво привязывается к создаваемому инстансу и никогда не потеряет свой <code style={codeInlineStyle}>this</code>.
                        </div>
                    </div>

                    {/* Сводная таблица по всем режимам определения this */}
                    <div style={{ marginTop: '30px', fontFamily: 'sans-serif' }}>
                        <h3 style={{ fontSize: '18px', color: '#006d75', marginBottom: '15px' }}>Итоговая таблица: Чему равен this?</h3>

                        <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #b5f5ec' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92em' }}>
                                <thead>
                                <tr style={{ backgroundColor: '#e6fffb', borderBottom: '1px solid #b5f5ec' }}>
                                    <th style={{ padding: '12px 16px', color: '#006d75', fontWeight: '500', width: '45%' }}>Как вызвана</th>
                                    <th style={{ padding: '12px 16px', color: '#006d75', fontWeight: '500', width: '55%' }}><code style={codeInlineStyle}>this</code> равен</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* Глобально (non-strict) */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '12px 16px' }}>Глобально (non-strict)</td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>window</code> / <code style={codeInlineStyle}>global</code></td>
                                </tr>
                                {/* Глобально (strict) */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa' }}>
                                    <td style={{ padding: '12px 16px' }}>Глобально (strict)</td>
                                    <td style={{ padding: '12px 16px', color: '#cf1322', fontWeight: '500' }}><code style={codeInlineStyle}>undefined</code></td>
                                </tr>
                                {/* Метод объекта */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '12px 16px' }}>Метод объекта <code style={codeInlineStyle}>obj.fn()</code></td>
                                    <td style={{ padding: '12px 16px', fontWeight: '500' }}><code style={codeInlineStyle}>obj</code></td>
                                </tr>
                                {/* new Class() */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa' }}>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>new Class()</code></td>
                                    <td style={{ padding: '12px 16px', color: '#389e0d' }}>Новый инстанс (экземпляр)</td>
                                </tr>
                                {/* fn.call(ctx) */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>fn.call(ctx)</code></td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>ctx</code></td>
                                </tr>
                                {/* fn.apply(ctx) */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: '#fafafa' }}>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>fn.apply(ctx)</code></td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>ctx</code></td>
                                </tr>
                                {/* fn.bind(ctx)() */}
                                <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>fn.bind(ctx)()</code></td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>ctx</code></td>
                                </tr>
                                {/* Стрелочная функция */}
                                <tr style={{ backgroundColor: '#fafafa' }}>
                                    <td style={{ padding: '12px 16px' }}>Стрелочная функция <code style={codeInlineStyle}>() =&gt; &#123;&#125;</code></td>
                                    <td style={{ padding: '12px 16px' }}><code style={codeInlineStyle}>this</code> внешнего контекста (лексического)</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Главное правило и исключение в точности как на скриншоте */}
                        <div style={{
                            backgroundColor: '#f5f5f5',
                            padding: '15px 18px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #595959',
                            fontSize: '0.98em',
                            marginTop: '20px',
                            lineHeight: '1.6'
                        }}>
                            • <b>Главное правило:</b> <code style={codeInlineStyle}>this</code> определяется в момент вызова, а не написания.
                            <br />
                            • <b>Исключение &mdash; стрелочные функции:</b> их <code style={codeInlineStyle}>this</code> фиксируется в момент создания.
                        </div>
                    </div>

                </section>
                {/* !!!!!!! ЦИКЛЫ*/}
                <div
                    id="cycle"
                    style={{
                    width: '100%',
                    padding: '30px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    border: '1px solid #f1f5f9',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
                    fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                    color: '#334155',
                    boxSizing: 'border-box',
                    marginTop: '24px',
                    marginBottom: '24px'

                }}>

                    {/* Шапка конспекта */}
                    <h1 style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#0f172a',
                        marginBottom: '20px',
                        marginTop: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <span>🎯</span> Циклы в JavaScript
                    </h1>

                    {/* Инфо-блок с бирюзовой линией */}
                    <div  style={{
                        borderLeft: '4px solid #06b6d4',
                        backgroundColor: 'rgba(236, 254, 255, 0.5)',
                        padding: '16px',
                        borderRadius: '0 6px 6px 0',
                        marginBottom: '32px'
                    }}>
                        <p style={{ fontWeight: '500', color: '#0f172a', margin: '0 0 4px 0' }}>
                            <strong>Циклы</strong> — конструкции для многократного выполнения одного и того же участка кода.
                        </p>
                        <p style={{ fontSize: '14px', color: '#155e75', margin: 0 }}>
                            📌 Значение и поведение цикла зависит от его типа и структуры данных, которую нужно обработать.
                        </p>
                    </div>

                    {/* Список режимов */}
                    <h2 style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#1e293b',
                        marginTop: '32px',
                        marginBottom: '16px',
                        borderBottom: '1px solid #e2e8f0',
                        paddingBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        📊 Пять режимов работы с циклами:
                    </h2>

                    <ul style={{ listStyle: 'none', paddingLeft: '0', margin: '0 0 32px 0' }}>
                        <li style={{ display: 'flex', alignItems: 'start', marginBottom: '12px' }}>
                            <span style={{ color: '#6366f1', marginTop: '2px', marginRight: '10px', flexShrink: 0 }}>▪</span>
                            <div><strong style={{ color: '#db2777', fontWeight: '600' }}>Классический (for)</strong>: когда четко известно количество итераций (шагов).</div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'start', marginBottom: '12px' }}>
                            <span style={{ color: '#6366f1', marginTop: '2px', marginRight: '10px', flexShrink: 0 }}>▪</span>
                            <div><strong style={{ color: '#db2777', fontWeight: '600' }}>По условию (while / do...while)</strong>: работает, пока выражение истинно (true).</div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'start', marginBottom: '12px' }}>
                            <span style={{ color: '#6366f1', marginTop: '2px', marginRight: '10px', flexShrink: 0 }}>▪</span>
                            <div><strong style={{ color: '#db2777', fontWeight: '600' }}>По значениям (for...of)</strong>: идеален для массивов и строк.</div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'start', marginBottom: '12px' }}>
                            <span style={{ color: '#6366f1', marginTop: '2px', marginRight: '10px', flexShrink: 0 }}>▪</span>
                            <div><strong style={{ color: '#db2777', fontWeight: '600' }}>По свойствам (for...in)</strong>: строго для перебора ключей объектов.</div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'start', marginBottom: '12px' }}>
                            <span style={{ color: '#6366f1', marginTop: '2px', marginRight: '10px', flexShrink: 0 }}>▪</span>
                            <div><strong style={{ color: '#db2777', fontWeight: '600' }}>Методы массивов (forEach, map)</strong>: современный функциональный подход.</div>
                        </li>
                    </ul>

                    <div style={{ marginTop: '40px', fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif', color: '#334155' }}>
                        <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '12px', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
                            ⛏️ Глубокий разбор классического цикла for
                        </h2>

                        <p style={{ fontSize: '15px', color: '#475569', marginBottom: '16px', lineHeight: '1.6' }}>
                            Синтаксис <code style={{ backgroundColor: '#f1f5f9', padding: '2px 4px', borderRadius: '4px' }}>for (инициализация; условие; шаг)</code> управляет итерациями по строгой цепочке событий:
                        </p>

                        {/* Карточки этапов выполнения */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '24px' }}>
                            <div style={{ padding: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                                <span style={{ fontWeight: '700', color: '#0f172a', display: 'block', marginBottom: '4px' }}>1. Инициализация</span>
                                <span style={{ fontSize: '14px', color: '#64748b' }}>Выполняется 1 раз при старте. Создает изолированный счетчик.</span>
                            </div>
                            <div style={{ padding: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                                <span style={{ fontWeight: '700', color: '#0f172a', display: 'block', marginBottom: '4px' }}>2. Проверка условия</span>
                                <span style={{ fontSize: '14px', color: '#64748b' }}>Срабатывает ДО тела цикла. Если false — цикл завершается.</span>
                            </div>
                            <div style={{ padding: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                                <span style={{ fontWeight: '700', color: '#0f172a', display: 'block', marginBottom: '4px' }}>3. Шаг (Инкремент)</span>
                                <span style={{ fontSize: '14px', color: '#64748b' }}>Срабатывает ПОСЛЕ тела цикла, изменяя значение счетчика.</span>
                            </div>
                        </div>

                        <pre style={{
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            padding: '16px',
                            overflowX: 'auto',
                            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                            fontSize: '14px',
                            color: '#334155',
                            whiteSpace: 'pre'
                        }}>
{`// 🔁 Обход массива с конца (Обратный счетчик)
const fruits = ['яблоко', 'банан', 'груша'];

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]); // 'груша', 'банан', 'яблоко'
}

// ⚡ Оптимальное кэширование длины для больших массивов
for (let i = 0, len = fruits.length; i < len; i++) {
  console.log(fruits[i]);
}`}
  </pre>
                        <div style={{ marginTop: '40px', fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif', color: '#334155' }}>
                            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '12px', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
                                ❓ Обязательны ли все 3 элемента в цикле for?
                            </h2>

                            <p style={{ fontSize: '15px', color: '#475569', marginBottom: '16px', lineHeight: '1.6' }}>
                                <strong>Нет, не обязательны.</strong> Вы можете пропустить инициализацию, условие или шаг. Главное — сохранить две точки с запятой <code style={{ backgroundColor: '#f1f5f9', padding: '2px 4px', borderRadius: '4px', fontFamily: 'monospace' }}>; ;</code> внутри круглых скобок.
                            </p>

                            <pre style={{
                                backgroundColor: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                padding: '16px',
                                overflowX: 'auto',
                                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                                fontSize: '14px',
                                color: '#334155',
                                whiteSpace: 'pre'
                            }}>
{`// 1. Без инициализации (если переменная создана ранее)
let i = 0;
for (; i < 3; i++) {
  console.log(i);
}

// 2. Без шага (изменяем счетчик внутри тела)
for (let j = 0; j < 6; ) {
  console.log(j);
  j += 2; 
}

// 3. Без условий и параметров (бесконечный цикл)
for (;;) {
  console.log("Работаю вечно...");
  if (Math.random() > 0.8) break; // Обязательный ручной break
}`}
  </pre>
                        </div>
                        <div style={{ marginTop: '40px', fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif', color: '#334155' }}>
                            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '12px', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
                                📦 Вложенные циклы (Nested Loops)
                            </h2>

                            <p style={{ fontSize: '15px', color: '#475569', marginBottom: '16px', lineHeight: '1.6' }}>
                                Цикл можно вложить внутрь другого цикла. Внутренний цикл будет полностью выполнять <strong>все свои итерации</strong> на каждый отдельный шаг внешнего цикла. Обычно это применяется для обхода матриц (двумерных массивов) или координатных сеток.
                            </p>

                            {/* Важное правило для вложенных циклов */}
                            <div style={{
                                borderLeft: '4px solid #f59e0b',
                                backgroundColor: '#fef3c7',
                                padding: '12px 16px',
                                borderRadius: '0 6px 6px 0',
                                marginBottom: '20px',
                                fontSize: '14px',
                                color: '#78350f'
                            }}>
                                ⚠️ <strong>Правило именования:</strong> Никогда не используйте одно и то же имя переменной (например, <code style={{ fontFamily: 'monospace' }}>i</code>) для внешнего и внутреннего циклов. Это приведет к перезаписи счетчика и бесконечному зацикливанию. Стандартные имена для вложенных циклов: <code style={{ fontFamily: 'monospace' }}>i</code>, <code style={{ fontFamily: 'monospace' }}>j</code>, <code style={{ fontFamily: 'monospace' }}>k</code>.
                            </div>

                            <pre style={{
                                backgroundColor: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                padding: '16px',
                                overflowX: 'auto',
                                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                                fontSize: '14px',
                                color: '#334155',
                                marginBottom: '24px',
                                whiteSpace: 'pre'
                            }}>
{`// 📊 Обход двумерного массива (матрицы / таблицы)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Внешний цикл идет по строкам (i)
for (let i = 0; i < matrix.length; i++) {
  
  // Внутренний цикл идет по элементам внутри строки (j)
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(\`Элемент матрицы [\${i}][\${j}]:\`, matrix[i][j]);
  }
}`}
  </pre>

                            <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#0f172a', margin: '16px 0 8px 0' }}>
                                🏷️ Метки для выхода из вложенных циклов (Labels)
                            </h3>
                            <p style={{ fontSize: '15px', color: '#475569', marginBottom: '12px' }}>
                                Обычный <code style={{ backgroundColor: '#f1f5f9', padding: '2px 4px', borderRadius: '4px' }}>break</code> прерывает только тот цикл, в котором он находится (внутренний). Если нужно по условию выйти сразу из <strong>обоих</strong> циклов, используются специальные метки:
                            </p>

                            <pre style={{
                                backgroundColor: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                padding: '16px',
                                overflowX: 'auto',
                                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                                fontSize: '14px',
                                color: '#334155',
                                whiteSpace: 'pre'
                            }}>
{`// Устанавливаем метку "outerLoop" перед внешним циклом
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log('Нашли нужную точку. Прерываем ВСЕ циклы!');
      break outerLoop; // Выходит сразу из внешнего цикла
    }
    console.log(\`i:\${i}, j:\${j}\`);
  }
}`}
  </pre>
                        </div>

                    </div>

                    <div style={{ marginTop: '40px', fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif', color: '#334155' }}>
                        <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '12px', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
                            ⏳ Циклы с условием: while и do...while
                        </h2>

                        <p style={{ fontSize: '15px', color: '#475569', marginBottom: '16px', lineHeight: '1.6' }}>
                            В отличие от цикла <code style={{ backgroundColor: '#f1f5f9', padding: '2px 4px', borderRadius: '4px' }}>for</code>, эти циклы используются тогда, когда количество шагов **неизвестно заранее**. Они работают до тех пор, пока выполняется определенное логическое условие.
                        </p>

                        {/* Сравнение двух циклов */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>

                            {/* Карточка WHILE */}
                            <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
      <span style={{ fontWeight: '700', color: '#0f172a', display: 'block', marginBottom: '6px' }}>
        🟢 Cycle WHILE (С предусловием)
      </span>
                                <span style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', display: 'block' }}>
        Проверяет условие <strong>ДО</strong> выполнения кода. Если условие изначально ложно (<code style={{ fontFamily: 'monospace' }}>false</code>), тело цикла не выполнится <strong>ни разу</strong>.
      </span>
                            </div>

                            {/* Карточка DO WHILE */}
                            <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
      <span style={{ fontWeight: '700', color: '#0f172a', display: 'block', marginBottom: '6px' }}>
        🔵 Cycle DO...WHILE (С постусловием)
      </span>
                                <span style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', display: 'block' }}>
        Проверяет условие <strong>ПОСЛЕ</strong> выполнения кода. Это гарантирует, что тело цикла выполнится <strong>минимум один раз</strong> в любом случае.
      </span>
                            </div>

                        </div>

                        {/* Код для while */}
                        <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#0f172a', margin: '16px 0 8px 0' }}>
                            1. Использование классического цикла while
                        </h3>
                        <p style={{ fontSize: '14px', color: '#475569', margin: '0 0 12px 0' }}>
                            Часто применяется в задачах, где состояние меняется динамически под воздействием внешних факторов (например, генерация случайных чисел, чтение потока данных или игровая логика):
                        </p>

                        <pre style={{
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            padding: '16px',
                            overflowX: 'auto',
                            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                            fontSize: '14px',
                            color: '#334155',
                            marginBottom: '24px',
                            whiteSpace: 'pre'
                        }}>
{`// Пример: Имитация бросков кубика, пока не выпадет шестерка
let diceResult = 0;
let attempts = 0;

while (diceResult !== 6) {
  diceResult = Math.floor(Math.random() * 6) + 1;
  attempts++;
  console.log(\`Бросок №\${attempts}: Выпало \${diceResult}\`);
}

console.log(\`Ура! Шестерка выпала с \${attempts}-й попытки.\`);`}
  </pre>

                        {/* Код для do while */}
                        <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#0f172a', margin: '16px 0 8px 0' }}>
                            2. Особенность цикла do...while
                        </h3>
                        <p style={{ fontSize: '14px', color: '#475569', margin: '0 0 12px 0' }}>
                            Идеально подходит для сценариев интерактивного взаимодействия, когда перед проверкой условия нужно совершить обязательное действие (например, запросить ввод у пользователя):
                        </p>

                        <pre style={{
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            padding: '16px',
                            overflowX: 'auto',
                            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                            fontSize: '14px',
                            color: '#334155',
                            marginBottom: '24px',
                            whiteSpace: 'pre'
                        }}>
{`// Пример: Запрос ввода пароля (выполнится минимум 1 раз для проверки)
let password = "";

do {
  // В реальном браузере это был бы prompt(), здесь имитируем логику
  password = prompt("Введите мастер-пароль:");
} while (password !== "secret123");

console.log("Доступ успешно предоставлен!");`}
  </pre>

                        {/* Опасность бесконечных циклов */}
                        <div style={{
                            borderLeft: '4px solid #ef4444',
                            backgroundColor: '#fef2f2',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#991b1b'
                        }}>
                            🚨 <strong>Критическая ошибка новичков:</strong> Внутри тела <code style={{ fontFamily: 'monospace' }}>while</code> обязательно должно происходить изменение переменных, участвующих в условии (например, инкремент или смена флага). Если забыть изменить условие внутри фигурных скобок, цикл станет бесконечным, процессор загрузится на 100%, а вкладка намертво зависнет.
                        </div>

                    </div>

                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                        padding: '24px sm:32px',
                        width: '100%',
                        boxSizing: 'border-box',
                        fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                        color: '#334155',
                        position: 'relative',
                        overflow: 'hidden',
                        marginTop: '32px'
                    }}>
                        {/* Верхняя фиолетовая полоса карточки */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#8b5cf6'
                        }} />

                        {/* Заголовок */}
                        <h2 style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#6d28d9', // Фиолетовый оттенок для заголовка
                            margin: '0 0 12px 0'
                        }}>
                            Что такое цикл for...of в JavaScript (База)
                        </h2>

                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                            <strong>Цикл for...of</strong> — это современный синтаксис (появился в ES6) для последовательного обхода <strong>значений</strong> итерируемых коллекций (массивов, строк, Map/Set) [1]. В отличие от классического `for`, он не требует ручного управления счетчиком `i` и индексами.
                        </p>

                        {/* Главная ментальная модель (фиолетовый блок) */}
                        <div style={{
                            backgroundColor: '#f5f3ff',
                            border: '1px solid #ddd6fe',
                            padding: '16px',
                            borderRadius: '6px',
                            marginBottom: '24px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#4c1d95'
                        }}>
                            <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                ✍️ Главная ментальная модель:
                            </div>
                            <div style={{ marginBottom: '6px' }}>
                                <strong>Прямой доступ к элементу:</strong> Цикл сам заходит в коллекцию и на каждом шаге достает готовое <strong>значение</strong> (например, саму строку <code style={{ fontFamily: 'monospace', color: '#be123c' }}>"React"</code>), а не его порядковый номер.
                            </div>
                            <div>
                                <strong>Итератор под капотом:</strong> Цикл работает только с теми структурами, у которых есть скрытый метод <code style={{ fontFamily: 'monospace', color: '#be123c' }}>[Symbol.iterator]</code>. Он последовательно запрашивает элементы, пока они не закончатся.
                            </div>
                        </div>
                        <div style={{ marginTop: '24px', fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif' }}>
                            {/* Подзаголовок в стиле конспекта */}
                            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 8px 0' }}>
                                ⚙️ У кого есть скрытый метод [Symbol.iterator]?
                            </h3>

                            <p style={{ fontSize: '15px', color: '#475569', margin: '0 0 16px 0', lineHeight: '1.6' }}>
                                Цикл <code style={{ fontFamily: 'monospace', color: '#be123c' }}>for...of</code> работает только с теми структурами, которые содержат этот метод. Проверить его наличие у любого объекта можно вручную через строгий тип функции.
                            </p>

                            {/* Код с примерами проверки */}
                            <pre style={{
                                backgroundColor: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                padding: '16px',
                                overflowX: 'auto',
                                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                                fontSize: '14px',
                                color: '#0f172a',
                                margin: '0 0 20px 0',
                                whiteSpace: 'pre',
                                lineHeight: '1.5'
                            }}>
{`// 🟢 ТИПЫ С ИТЕРАТОРОМ (Вернут функцию):
console.log(typeof [][Symbol.iterator]);       // "function" (Массив)
console.log(typeof "JS"[Symbol.iterator]);     // "function" (Строка)
console.log(typeof new Set()[Symbol.iterator]);// "function" (Коллекция Set)

// ❌ ТИПЫ БЕЗ ИТЕРАТОРА (Вернут undefined):
const user = { name: "Alex" };
console.log(typeof user[Symbol.iterator]);     // "undefined" (Обычный объект)`}
  </pre>
                            <div style={{
                                backgroundColor: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                padding: '16px',
                                marginTop: '20px',
                                fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                                color: '#334155'
                            }}>
                                <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    📦 Объяснение простыми словами:
                                </div>
                                <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                                    <strong>Итерируемый объект</strong> — это просто «коробка с элементами», в которую можно заглянуть и последовательно, один за другим, достать все вещи от первой до последней.
                                    Если объект гарантирует, что у него есть внутренний порядок и элементы можно пересчитать (как буквы в строке или элементы в массиве) — он <strong>итерируемый</strong>.
                                    Если элементы лежат хаотичной кучей без номеров (как свойства в обычном объекте) — объект <strong>неитерируемый</strong>.
                                </p>
                            </div>


                            {/* Ментальный лайфхак как обойти объект */}
                            <div style={{
                                backgroundColor: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                padding: '14px 16px',
                                fontSize: '14px',
                                lineHeight: '1.5',
                                color: '#334155'
                            }}>
                                💡 <strong>Лайфхак для объектов:</strong> Если вам кровь из носу нужно обработать обычный объект через <code style={{ fontFamily: 'monospace' }}>for...of</code>, преобразуйте его в массив с помощью <code style={{ fontFamily: 'monospace', color: '#2563eb' }}>Object.values()</code> (массив значений) или <code style={{ fontFamily: 'monospace', color: '#2563eb' }}>Object.entries()</code> (массив пар ключ-значение). У полученных массивов итератор точно будет!
                            </div>
                        </div>

                        {/* Текст перед кодом */}
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                            Пример работы с массивом и строкой:
                        </div>

                        {/* Серая плашка для кода */}
                        <pre style={{
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            padding: '16px',
                            overflowX: 'auto',
                            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                            fontSize: '14px',
                            color: '#0f172a',
                            margin: '0 0 20px 0',
                            whiteSpace: 'pre',
                            lineHeight: '1.5'
                        }}>
{`// 1. Перебор элементов массива
const technologies = ["React", "Next.js", "TypeScript"];

for (const tech of technologies) {
  console.log(tech); // "React", "Next.js", "TypeScript"
}

// 2. Посимвольный перебор строки
const greeting = "JS";


for (const letter of greeting) {
  console.log(letter); // "J", "S"
}`}

  </pre>


                        {/* Зеленая плашка с преимуществами и фишками для собеседований */}
                        <div style={{
                            borderLeft: '4px solid #10b981',
                            backgroundColor: '#f0fdf4',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#065f46',
                            lineHeight: '1.5'
                        }}>
                            💡 <strong>Плюсы и отличия от .forEach():</strong> Внутри <code style={{ fontFamily: 'monospace' }}>for...of</code> можно полноценно использовать ключевые слова контроля <code style={{ color: '#b91c1c', fontWeight: '600' }}>break</code> (для остановки) и <code style={{ color: '#b91c1c', fontWeight: '600' }}>continue</code> (для пропуска шага) [1]. Также он нативно поддерживает асинхронные операции через <code style={{ color: '#b91c1c', fontWeight: '600' }}>await</code>. В методе <code style={{ fontFamily: 'monospace' }}>.forEach()</code> так сделать нельзя [1].
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                        padding: '24px sm:32px',
                        width: '100%',
                        boxSizing: 'border-box',
                        fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                        color: '#334155',
                        position: 'relative',
                        overflow: 'hidden',
                        marginTop: '32px'
                    }}>
                        {/* Верхняя желтая полоса карточки */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#facc15'
                        }} />

                        {/* Заголовок */}
                        <h2 style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#b45309', // Приглушенный оранжево-желтый цвет
                            margin: '0 0 12px 0'
                        }}>
                            Что такое цикл for...in в JavaScript (База)
                        </h2>

                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                            <strong>Цикл for...in</strong> — это специальный инструмент для перебора всех перечисляемых свойств (<strong>ключей</strong>) объекта. Он заглядывает внутрь объекта и на каждом шаге выдает строку — имя очередного поля (свойства).
                        </p>

                        {/* Главная ментальная модель (желтый блок) */}
                        <div style={{
                            backgroundColor: '#fefce8',
                            border: '1px solid #fef08a',
                            padding: '16px',
                            borderRadius: '6px',
                            marginBottom: '24px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#713f12'
                        }}>
                            <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                ✍️ Главная ментальная модель:
                            </div>
                            <div style={{ marginBottom: '6px' }}>
                                <strong>Ключ (Имя свойства):</strong> Это название переменной внутри объекта (например, <code style={{ fontFamily: 'monospace', color: '#be123c' }}>"name"</code>). Цикл возвращает именно его в виде обычной <strong>строки</strong>.
                            </div>
                            <div>
                                <strong>Значение свойства:</strong> Автоматически цикл его не дает. Чтобы вытащить данные, нужно обратиться к объекту через квадратные скобки: <code style={{ fontFamily: 'monospace', color: '#be123c' }}>obj[key]</code>. Использовать точку (<code style={{ fontFamily: 'monospace' }}>obj.key</code>) нельзя, так как JavaScript будет искать поле с буквальным именем «key».
                            </div>
                        </div>

                        {/* Текст перед кодом */}
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                            Пример работы с объектом:
                        </div>

                        {/* Серая плашка для кода */}
                        <pre style={{
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            padding: '16px',
                            overflowX: 'auto',
                            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                            fontSize: '14px',
                            color: '#0f172a',
                            margin: '0 0 20px 0',
                            whiteSpace: 'pre',
                            lineHeight: '1.5'
                        }}>
{`const developer = {
  name: "Alex",
  role: "Frontend"
};

for (const key in developer) {
  console.log("Имя ключа:", key);             // "name", "role"
  console.log("Значение поля:", developer[key]); // "Alex", "Frontend"
}`}
  </pre>

                        {/* Подзаголовок "Под капотом" */}
                        <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '24px 0 8px 0' }}>
                            ⚙️ Подводные камни и поведение под капотом
                        </h3>
                        <p style={{ fontSize: '15px', color: '#475569', margin: '0 0 16px 0', lineHeight: '1.6' }}>
                            Цикл <code style={{ fontFamily: 'monospace', color: '#be123c' }}>for...in</code> обладает специфическим поведением, о котором критически важно помнить на коммерческих проектах и технических интервью:
                        </p>

                        {/* Список особенностей */}
                        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '0 0 24px 0', fontSize: '14px', lineHeight: '1.6' }}>
                            <li style={{ display: 'flex', alignItems: 'start', marginBottom: '10px' }}>
                                <span style={{ color: '#d97706', marginRight: '8px', flexShrink: 0 }}>🔸</span>
                                <div><strong>Перебор прототипов:</strong> Цикл бежит не только по собственным свойствам объекта, но и по свойствам из его цепочки прототипов (<code style={{ fontFamily: 'monospace' }}>__proto__</code>). Чтобы отфильтровать чужие поля, используют метод <code style={{ fontFamily: 'monospace', color: '#2563eb' }}>obj.hasOwnProperty(key)</code>.</div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'start', marginBottom: '10px' }}>
                                <span style={{ color: '#d97706', marginRight: '8px', flexShrink: 0 }}>🔸</span>
                                <div><strong>Порядок сортировки ключей:</strong> Если ключи объекта являются целыми числами (например, <code style={{ fontFamily: 'monospace' }}>"4"</code>, <code style={{ fontFamily: 'monospace' }}>"1"</code>), JavaScript автоматически отсортирует их по возрастанию. Строковые же свойства выводятся строго в порядке их создания.</div>
                            </li>
                        </ul>

                        {/* Красное предупреждение */}
                        <div style={{
                            borderLeft: '4px solid #ef4444',
                            backgroundColor: '#fef2f2',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#991b1b',
                            lineHeight: '1.5'
                        }}>
                            🚨 <strong>Главное табу:</strong> Никогда не используйте <code style={{ fontFamily: 'monospace' }}>for...in</code> для массивов! Массив в JS — это тоже объект, поэтому цикл сработает, но индексы превратятся в <em>строки</em> (<code style={{ fontFamily: 'monospace' }}>"0"</code>, <code style={{ fontFamily: 'monospace' }}>"1"</code>), что сломает математику (например, <code style={{ fontFamily: 'monospace' }}>key + 1</code> даст результат <code style={{ fontFamily: 'monospace' }}>"01"</code>). Кроме того, скорость работы такого перебора в разы ниже стандартных методов.
                        </div>
                    </div>
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                        padding: '24px sm:32px',
                        width: '100%',
                        boxSizing: 'border-box',
                        fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                        color: '#334155',
                        position: 'relative',
                        overflow: 'hidden',
                        marginTop: '32px'
                    }}>
                        {/* Верхняя бирюзовая полоса карточки */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#0d9488'
                        }} />

                        {/* Заголовок */}
                        <h2 style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#115e59', // Темно-бирюзовый цвет для заголовка
                            margin: '0 0 12px 0'
                        }}>
                            Просто пробежаться по массиву (forEach)
                        </h2>

                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                            <strong>Метод array.forEach()</strong> — это встроенный метод массивов, который принимает функцию-колбэк и выполняет её <strong>один раз для каждого элемента</strong>. Он заменяет классический цикл `for`, делая код более декларативным и лаконичным.
                        </p>

                        {/* Главная ментальная модель (зеленый блок) */}
                        <div style={{
                            backgroundColor: '#f0fdf4',
                            border: '1px solid #bbf7d0',
                            padding: '16px',
                            borderRadius: '6px',
                            marginBottom: '24px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#166534'
                        }}>
                            <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                ⚙️ Главная ментальная модель:
                            </div>
                            <div style={{ marginBottom: '6px' }}>
                                <strong>Ничего не возвращает:</strong> Метод всегда возвращает <code style={{ fontFamily: 'monospace', color: '#be123c' }}>undefined</code>. Он используется исключительно ради <strong>побочных эффектов</strong> (side-effects) — например, вывести логи в консоль, записать данные в localStorage или обновить состояние UI.
                            </div>
                            <div>
                                <strong>Три аргумента колбэка:</strong> В функцию, которую вы передаете внутрь, JavaScript автоматически прокидывает три параметра: текущий элемент (<code style={{ fontFamily: 'monospace' }}>item</code>), его индекс (<code style={{ fontFamily: 'monospace' }}>index</code>) и сам исходный массив (<code style={{ fontFamily: 'monospace' }}>array</code>).
                            </div>
                        </div>

                        {/* Текст перед кодом */}
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                            Примеры использования с разным набором аргументов:
                        </div>

                        {/* Серая плашка для кода */}
                        <pre style={{
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            padding: '16px',
                            overflowX: 'auto',
                            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                            fontSize: '14px',
                            color: '#0f172a',
                            margin: '0 0 20px 0',
                            whiteSpace: 'pre',
                            lineHeight: '1.5'
                        }}>
{`const fruits = ["яблоко", "банан", "груша"];

// 1. Простой перебор (только элементы)
fruits.forEach((fruit) => {
  console.log("Фрукт:", fruit);
});

// 2. Использование элемента вместе с его индексом
fruits.forEach((fruit, index) => {
  console.log(\`\${index + 1}-й элемент — это \${fruit}\`);
});`}
  </pre>

                        {/* Красная предупреждающая плашка внизу — САМЫЙ ЧАСТЫЙ ВОПРОС НА ИНТЕРВЬЮ */}
                        <div style={{
                            borderLeft: '4px solid #ef4444',
                            backgroundColor: '#fef2f2',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#991b1b',
                            lineHeight: '1.5'
                        }}>
                            🚨 <strong>Критическое ограничение (Железное правило):</strong> Внутри <code style={{ fontFamily: 'monospace' }}>.forEach()</code> **невозможно** прервать выполнение или пропустить шаг. Операторы <code style={{ fontFamily: 'monospace' }}>break</code> и <code style={{ fontFamily: 'monospace' }}>continue</code> вызовут синтаксическую ошибку, а оператор <code style={{ fontFamily: 'monospace' }}>return</code> просто завершит текущую маленькую функцию-колбэк и сразу перейдет к следующему элементу массива. Если вам нужно останавливать перебор по условию — используйте обычный <code style={{ fontFamily: 'monospace' }}>for...of</code>.
                        </div>
                    </div>

                    {/* Блок 1 */}
                    <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginTop: '32px', marginBottom: '12px', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
                        1. Глобальный контекст и обычный вызов (Default Binding)
                    </h2>
                    <p style={{ fontSize: '15px', color: '#475569', marginBottom: '12px', margin: '0 0 12px 0' }}>
                        Поведение циклов зависит от начальных условий, шага счетчика и логического выражения.
                    </p>
                    <pre style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        padding: '16px',
                        overflowX: 'auto',
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                        fontSize: '14px',
                        color: '#334155',
                        marginBottom: '24px',
                        whiteSpace: 'pre'
                    }}>
{`// 🟢 А. Классический цикл for (счетчик)
// Используется, когда количество шагов известно заранее
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2 — явный контроль начала, условия и шага
}

// 🟢 Б. Цикл WHILE (с предусловием)
// Проверяет условие ДО выполнения тела цикла. Может не выполниться ни разу.
let count = 0;
while (count < 3) {
  console.log(count); // 0, 1, 2
  count++; // Важно: не забывать инкремент, иначе цикл станет бесконечным
}

// 🟢 В. Цикл DO...WHILE (с постусловием)
// Проверяет условие ПОСЛЕ выполнения. Тело выполнится МИНИМУМ один раз.
let active = false;
do {
  console.log("Отработает 1 раз"); // Вызовется, несмотря на то, что active === false
} while (active);`}
  </pre>

                    {/* Блок 2 */}
                    <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginTop: '32px', marginBottom: '12px', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
                        2. Специализированные циклы (Объекты и Массивы)
                    </h2>
                    <p style={{ fontSize: '15px', color: '#475569', marginBottom: '12px', margin: '0 0 12px 0' }}>
                        Выбор цикла напрямую зависит от типа структуры данных:
                    </p>
                    <pre style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        padding: '16px',
                        overflowX: 'auto',
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                        fontSize: '14px',
                        color: '#334155',
                        marginBottom: '24px',
                        whiteSpace: 'pre'
                    }}>
{`// 🟣 А. Цикл FOR...OF (Для массивов и итерируемых объектов)
// Забирает СТИЛИ/ЗНАЧЕНИЯ элементов напрямую, без индексов
const skills = ['JS', 'React', 'Next.js'];

for (const skill of skills) {
  console.log(skill); // 'JS', 'React', 'Next.js' — сразу значения
}

// 🟣 Б. Цикл FOR...IN (Для объектов)
// Перебирает КЛЮЧИ (имена свойств) объекта. Не использовать для массивов!
const developer = { name: 'Alex', role: 'Frontend' };

for (const key in developer) {
  console.log(key);        // 'name', 'role' — ключи
  console.log(developer[key]); // 'Alex', 'Frontend' — значения по ключам
}`}
  </pre>

                    {/* Блок 3 */}
                    <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginTop: '32px', marginBottom: '12px', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
                        3. Управление ходом цикла (Break / Continue)
                    </h2>
                    <pre style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        padding: '16px',
                        overflowX: 'auto',
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                        fontSize: '14px',
                        color: '#334155',
                        whiteSpace: 'pre'
                    }}>
{`// 🛑 А. Директива BREAK
// Мгновенно прерывает и полностью завершает работу цикла
for (let i = 0; i < 10; i++) {
  if (i === 3) break; 
  console.log(i); // Выведет только: 0, 1, 2
}

// ⏳ Б. Директива CONTINUE
// Прерывает текущий шаг и сразу переходит к проверке следующего
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; 
  console.log(i); // Выведет: 0, 1, 3, 4 (двойку пропустит)
}`}
  </pre>
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                        padding: '24px sm:32px',
                        width: '100%',
                        boxSizing: 'border-box',
                        fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                        color: '#334155',
                        marginTop: '32px'
                    }}>

                        {/* Заголовок таблицы */}
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: '800',
                            color: '#0f172a',
                            margin: '0 0 20px 0',
                            letterSpacing: '-0.02em'
                        }}>
                            Когда что использовать
                        </h2>

                        {/* Таблица */}
                        <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                fontSize: '15px',
                                textAlign: 'left'
                            }}>
                                <thead>
                                <tr style={{ color: '#64748b', fontWeight: '600' }}>
                                    <th style={{ padding: '10px 16px', width: '60%' }}>Ситуация</th>
                                    <th style={{ padding: '10px 16px', width: '40%' }}>Выбор</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style={{ backgroundColor: '#ffffff' }}>
                                    <td style={{ padding: '12px 16px', color: '#334155' }}>Знаешь количество повторений</td>
                                    <td style={{ padding: '12px 16px' }}>
                                        <code style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace', fontWeight: '600', color: '#0f172a' }}>for</code>
                                    </td>
                                </tr>
                                <tr style={{ backgroundColor: '#f8fafc' }}>
                                    <td style={{ padding: '12px 16px', color: '#334155' }}>Не знаешь количество повторений</td>
                                    <td style={{ padding: '12px 16px' }}>
                                        <code style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace', fontWeight: '600', color: '#0f172a' }}>while</code>
                                    </td>
                                </tr>
                                <tr style={{ backgroundColor: '#ffffff' }}>
                                    <td style={{ padding: '12px 16px', color: '#334155' }}>Нужно выполнить хотя бы раз</td>
                                    <td style={{ padding: '12px 16px' }}>
                                        <code style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace', fontWeight: '600', color: '#0f172a' }}>do...while</code>
                                    </td>
                                </tr>
                                <tr style={{ backgroundColor: '#f8fafc' }}>
                                    <td style={{ padding: '12px 16px', color: '#334155' }}>Перебрать массив / строку</td>
                                    <td style={{ padding: '12px 16px' }}>
                                        <code style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace', fontWeight: '600', color: '#0f172a' }}>for...of</code>
                                    </td>
                                </tr>
                                <tr style={{ backgroundColor: '#ffffff' }}>
                                    <td style={{ padding: '12px 16px', color: '#334155' }}>Перебрать ключи объекта</td>
                                    <td style={{ padding: '12px 16px' }}>
                                        <code style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace', fontWeight: '600', color: '#0f172a' }}>for...in</code>
                                    </td>
                                </tr>
                                <tr style={{ backgroundColor: '#f8fafc' }}>
                                    <td style={{ padding: '12px 16px', color: '#334155' }}>Трансформировать массив</td>
                                    <td style={{ padding: '12px 16px' }}>
                                        <code style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace', fontWeight: '600', color: '#0f172a' }}>map / filter / reduce</code>
                                    </td>
                                </tr>
                                <tr style={{ backgroundColor: '#ffffff' }}>
                                    <td style={{ padding: '12px 16px', color: '#334155' }}>Просто пробежаться по массиву</td>
                                    <td style={{ padding: '12px 16px' }}>
                                        <code style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace', fontWeight: '600', color: '#0f172a' }}>forEach</code>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Нижняя инфо-плашка с бирюзовой линией */}
                        <div style={{
                            borderLeft: '4px solid #0d9488', // Красивый темно-бирюзовый цвет (Teal)
                            backgroundColor: '#f0fdfa',
                            padding: '16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '15px',
                            lineHeight: '1.6',
                            color: '#115e59',
                            fontStyle: 'italic'
                        }}>
                            <strong>Главное:</strong> <code style={{ fontFamily: 'monospace', fontStyle: 'normal', fontWeight: '600' }}>for...of</code> — для массивов, <code style={{ fontFamily: 'monospace', fontStyle: 'normal', fontWeight: '600' }}>for...in</code> — для объектов, <code style={{ fontFamily: 'monospace', fontStyle: 'normal', fontWeight: '600' }}>while</code> — когда условие динамическое. А методы массива (<code style={{ fontFamily: 'monospace', fontStyle: 'normal' }}>map</code>, <code style={{ fontFamily: 'monospace', fontStyle: 'normal' }}>filter</code>, <code style={{ fontFamily: 'monospace', fontStyle: 'normal' }}>reduce</code>) в большинстве случаев чище и читаемее, чем ручной цикл.
                        </div>

                    </div>


                </div>
                <div id="dataTypes" style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                    padding: '24px sm:32px',
                    width: '100%',
                    boxSizing: 'border-box',
                    fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                    color: '#334155',
                    position: 'relative',
                    overflow: 'hidden',
                    marginTop: '32px'
                }}>
                    {/* Верхняя синяя полоса карточки */}

                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                        padding: '24px sm:32px',
                        width: '100%',
                        boxSizing: 'border-box',
                        fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                        color: '#334155',
                        position: 'relative',
                        overflow: 'hidden',
                        marginTop: '32px'
                    }}>
                        {/* Верхняя синяя полоса карточки */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#2563eb'
                        }} />

                        {/* Заголовок в стиле ваших лекций */}
                        <h2 style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#1e3a8a',
                            margin: '0 0 12px 0'
                        }}>
                            Типы данных в JavaScript (Введение)
                        </h2>

                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                            <strong>Тип данных</strong> — это классификация, которая сообщает движку JavaScript, какие операции можно производить с конкретным значением. Всего в современном JavaScript существует <strong>8 типов данных</strong>, которые делятся на две глобальные категории: примитивы и объекты.
                        </p>

                        {/* Главные характеристики типизации JS */}
                        <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '16px 0 12px 0' }}>
                            🎯 Три главных правила типизации языка:
                        </h3>

                        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '0 0 24px 0' }}>
                            <li style={{ display: 'flex', alignItems: 'start', gap: '8px', marginBottom: '12px', fontSize: '14px' }}>
                                <span style={{ color: '#2563eb', marginTop: '2px', flexShrink: 0 }}>▪</span>
                                <div><strong style={{ color: '#1e3a8a', fontWeight: '600' }}>Динамическая типизация:</strong> Вам не нужно вручную указывать тип переменной (как в Java или C#). JavaScript сам определяет его автоматически в момент присвоения значения.</div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'start', gap: '8px', marginBottom: '12px', fontSize: '14px' }}>
                                <span style={{ color: '#2563eb', marginTop: '2px', flexShrink: 0 }}>▪</span>
                                <div><strong style={{ color: '#1e3a8a', fontWeight: '600' }}>Типизируются значения, а не переменные:</strong> Одна и та же переменная <code style={{ fontFamily: 'monospace' }}>let data</code> может сначала хранить число, а затем строку. Ограничений на смену типа внутри переменной нет.</div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'start', gap: '8px', marginBottom: '12px', fontSize: '14px' }}>
                                <span style={{ color: '#2563eb', marginTop: '2px', flexShrink: 0 }}>▪</span>
                                <div><strong style={{ color: '#1e3a8a', fontWeight: '600' }}>Автовызов оператора typeof:</strong> Для быстрой проверки того, что именно сейчас лежит в переменной, используется встроенный оператор <code style={{ fontFamily: 'monospace', color: '#b91c1c' }}>typeof</code>, который возвращает тип в виде строки.</div>
                            </li>
                        </ul>

                        {/* Ментальная модель введения (сине-голубой блок) */}
                        <div style={{
                            backgroundColor: '#f0f9ff',
                            border: '1px solid #bae6fd',
                            padding: '16px',
                            borderRadius: '6px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#0369a1'
                        }}>
                            <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                                💡 Ментальное разделение категорий:
                            </div>
                            <div>
                                Все типы делятся по принципу их хранения в памяти компьютера. <strong>Примитивы (7 типов)</strong> — это «простые кирпичики», они хранятся и копируются как конечные значения. <strong>Объекты (8-й тип)</strong> — это «сложные коробки данных», которые могут динамически расти и передаются исключительно по адресу-ссылке.
                            </div>
                        </div>
                    </div>


                    <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1e3a8a', margin: '0 0 12px 0' }}>
                        Примитивные типы данных (Primitives)
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        В JavaScript существует 7 примитивных типов [1, 2]. Когда вы копируете примитив, создается <strong>абсолютно новая независимая копия</strong> значения в памяти [2, 3].
                    </p>

                    {/* Ментальная модель */}
                    <div style={{
                        backgroundColor: '#eff6ff',
                        border: '1px solid #bfdbfe',
                        padding: '16px',
                        borderRadius: '6px',
                        marginBottom: '24px',
                        fontSize: '14px',
                        lineHeight: '1.6',
                        color: '#1e40af'
                    }}>
                        <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                            🧠 Семь примитивов на пальцах:
                        </div>
                        <ul style={{ paddingLeft: '16px', margin: 0, listStyleType: 'disc' }}>
                            <li><strong>Number:</strong> Любые числа (целые, дробные), а также <code style={{ fontFamily: 'monospace' }}>NaN</code> и <code style={{ fontFamily: 'monospace' }}>Infinity</code> [1].</li>
                            <li><strong>BigInt:</strong> Числа произвольной длины, создаются добавлением <code style={{ fontFamily: 'monospace' }}>n</code> в конец [1, 4].</li>
                            <li><strong>String:</strong> Текстовые строки в одинарных, двойных или косых кавычках [1].</li>
                            <li><strong>Boolean:</strong> Логический тип, только два значения: <code style={{ fontFamily: 'monospace' }}>true</code> или <code style={{ fontFamily: 'monospace' }}>false</code> [1].</li>
                            <li><strong>Null:</strong> Отдельный тип, означающий «значение намеренно пусто или неизвестно» [1, 5].</li>
                            <li><strong>Undefined:</strong> Означает, что «значение вообще не было присвоено» [1, 6].</li>
                            <li><strong>Symbol:</strong> Уникальный идентификатор, используемый для скрытых свойств объектов [1].</li>
                        </ul>
                    </div>

                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Примеры кода и оператор typeof:
                    </div>

                    <pre style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        padding: '16px',
                        overflowX: 'auto',
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                        fontSize: '14px',
                        color: '#0f172a',
                        margin: '0 0 20px 0',
                        whiteSpace: 'pre',
                        lineHeight: '1.5'
                    }}>
{`const score = 42;                 // Number
const bigNum = 9007199254740991n;  // BigInt
const name = "Alex";               // String
const isOnline = true;             // Boolean
const emptySpace = null;           // Null
const currentJob = undefined;      // Undefined
const id = Symbol("id");           // Symbol

console.log(typeof score);         // "number"
console.log(typeof name);          // "string"
console.log(typeof currentJob);    // "undefined"`}
  </pre>

                    {/* Сноска об ошибке typeof для null */}
                    <div style={{
                        borderLeft: '4px solid #f59e0b',
                        backgroundColor: '#fef3c7',
                        padding: '12px 16px',
                        borderRadius: '0 6px 6px 0',
                        fontSize: '14px',
                        color: '#78350f',
                        lineHeight: '1.5'
                    }}>
                        ⚠️ <strong>Официальный баг языка:</strong> Вызов <code style={{ fontFamily: 'monospace' }}>typeof null</code> возвращает строковое значение <code style={{ fontFamily: 'monospace' }}>"object"</code> [1, 7]. Это признанная историческая ошибка в архитектуре JavaScript, которую нельзя исправить, чтобы не сломать миллионы старых сайтов [7]. На самом деле <code style={{ fontFamily: 'monospace' }}>null</code> — это самостоятельный примитив [1, 5].
                    </div>
                    <div style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                        padding: '24px sm:32px',
                        width: '100%',
                        boxSizing: 'border-box',
                        fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                        color: '#334155',
                        position: 'relative',
                        overflow: 'hidden',
                        marginTop: '32px'
                    }}>
                        {/* Верхняя синяя полоса карточки */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#2563eb'
                        }} />

                        {/* Заголовок */}
                        <h2 style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#1e3a8a',
                            margin: '0 0 12px 0'
                        }}>
                            Тип данных Number (Числа)
                        </h2>

                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                            <strong>Тип Number</strong> в JavaScript представляет числа как в виде целых значений, так и в виде чисел с плавающей точкой (дробных). Под капотом язык использует единый международный стандарт <strong>IEEE 754</strong> (двойная точность, 64 бит), из-за чего существуют важные математические особенности.
                        </p>

                        {/* Главная ментальная модель (голубой блок) */}
                        <div style={{
                            backgroundColor: '#eff6ff',
                            border: '1px solid #bfdbfe',
                            padding: '16px',
                            borderRadius: '6px',
                            marginBottom: '24px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#1e40af'
                        }}>
                            <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                🧠 Три специальных числовых значения (Спец-типы):
                            </div>
                            <div style={{ marginBottom: '6px' }}>
                                <strong>Infinity (Бесконечность):</strong> Математическая бесконечность <code style={{ fontFamily: 'monospace', color: '#be123c' }}>∞</code>. Получается, например, при делении любого ненулевого числа на ноль: <code style={{ fontFamily: 'monospace' }}>1 / 0</code>.
                            </div>
                            <div style={{ marginBottom: '6px' }}>
                                <strong>-Infinity:</strong> Отрицательная бесконечность. Получается при делении отрицательного числа на ноль: <code style={{ fontFamily: 'monospace' }}>-1 / 0</code>.
                            </div>
                            <div>
                                <strong>NaN (Not a Number):</strong> Результат вычислительной ошибки. Означает, что математическая операция завершилась некорректно (например, при попытке разделить строку на число). Любая операция с <code style={{ fontFamily: 'monospace', color: '#be123c' }}>NaN</code> снова возвращает <code style={{ fontFamily: 'monospace' }}>NaN</code>.
                            </div>
                        </div>

                        {/* Текст перед кодом */}
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                            Примеры работы и встроенные проверки:
                        </div>

                        {/* Серая плашка для кода */}
                        <pre style={{
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            padding: '16px',
                            overflowX: 'auto',
                            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                            fontSize: '14px',
                            color: '#0f172a',
                            margin: '0 0 20px 0',
                            whiteSpace: 'pre',
                            lineHeight: '1.5'
                        }}>
{`const intNum = 100;              // Целое число
const floatNum = 10.5;            // Дробное число

console.log(1 / 0);               // Infinity
console.log("текст" / 2);         // NaN

// ⚠️ Особенность проверки NaN: он не равен абсолютно никому, даже самому себе!
console.log(NaN === NaN);         // false

// Единственный надежный способ проверить на NaN:
console.log(Number.isNaN("abc" / 2)); // true

// ⚡ Решение проблемы округления (0.1 + 0.2):
const result = +(0.1 + 0.2).toFixed(2); 
console.log(result);              // 0.3 ✅

// Разбор типов под капотом:
console.log(typeof (0.1 + 0.2).toFixed(2));  // 'string' (toFixed возвращает строку)
console.log(typeof +(0.1 + 0.2).toFixed(2)); // 'number' (унарный плюс вернул тип Number) ✅`}
</pre>


                        {/* Важное предупреждение (Красная сноска внизу — ловушка на собеседованиях) */}
                        <div style={{
                            borderLeft: '4px solid #f59e0b',
                            backgroundColor: '#fef3c7',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#78350f',
                            lineHeight: '1.5',
                            marginBottom: '20px'
                        }}>
                            ⚠️ <strong>Ловушка точности (0.1 + 0.2):</strong> Из-за того, что в стандарте IEEE 754 числа переводятся в двоичную систему счисления, бесконечные дроби округляются. Выражение <code style={{ fontFamily: 'monospace' }}>0.1 + 0.2 === 0.3</code> вернет <code style={{ fontFamily: 'monospace' }}>false</code>, так как результат равен <code style={{ fontFamily: 'monospace' }}>0.30000000000000004</code>. Для исправления используют метод округления до знаков: <code style={{ fontFamily: 'monospace' }}>+(0.1 + 0.2).toFixed(2)</code>.
                        </div>

                        {/* Безопасные лимиты чисел */}
                        <div style={{
                            borderLeft: '4px solid #ef4444',
                            backgroundColor: '#fef2f2',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#991b1b',
                            lineHeight: '1.5'
                        }}>
                            🚨 <strong>Ограничение по величине:</strong> Тип Number не может надежно хранить целые числа больше чем <code style={{ fontFamily: 'monospace' }}>9007199254740991</code> (это <code style={{ fontFamily: 'monospace' }}>2^53 - 1</code>) и меньше чем <code style={{ fontFamily: 'monospace' }}>-9007199254740991</code>. Всё, что выходит за эти рамки, теряет точность. Если вам нужны сверхбольшие числа (например, для криптографии или ID из БД) — используйте тип <strong>BigInt</strong>.
                        </div>
                        <div style={{
                            backgroundColor: '#ffffff',
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                            padding: '24px sm:32px',
                            width: '100%',
                            boxSizing: 'border-box',
                            fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                            color: '#334155',
                            position: 'relative',
                            overflow: 'hidden',
                            marginTop: '32px'
                        }}>


                            {/* Заголовок */}
                            <h2 style={{
                                fontSize: '20px',
                                fontWeight: '700',
                                color: '#1e3a8a',
                                margin: '0 0 12px 0'
                            }}>
                                Тип данных BigInt (Сверхбольшие числа)
                            </h2>

                            <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                <strong>Тип BigInt</strong> был добавлен в JavaScript в ES2020. Он создан специально для работы с целыми числами <strong>произвольной длины</strong>, которые выходят за рамки безопасных лимитов обычного типа `Number` (больше <code style={{ fontFamily: 'monospace' }}>9007199254740991</code>).
                            </p>

                            {/* Главная ментальная модель (голубой блок) */}
                            <div style={{
                                backgroundColor: '#eff6ff',
                                border: '1px solid #bfdbfe',
                                padding: '16px',
                                borderRadius: '6px',
                                marginBottom: '24px',
                                fontSize: '14px',
                                lineHeight: '1.6',
                                color: '#1e40af'
                            }}>
                                <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                    🧠 Как создать BigInt (Два способа):
                                </div>
                                <div style={{ marginBottom: '6px' }}>
                                    <strong>Символ "n" в конце:</strong> Самый простой путь — просто дописать строчную букву <code style={{ fontFamily: 'monospace', color: '#be123c' }}>n</code> в самый конец числового литерала: <code style={{ fontFamily: 'monospace' }}>10n</code>.
                                </div>
                                <div>
                                    <strong>Функция-конструктор:</strong> Вызвать встроенную функцию <code style={{ fontFamily: 'monospace', color: '#be123c' }}>BigInt(значение)</code>. Это полезно, когда нужно преобразовать строку или обычное число в длинное число: <code style={{ fontFamily: 'monospace' }}>BigInt("9007199254740995")</code>.
                                </div>
                            </div>

                            {/* Текст перед кодом */}
                            <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                Примеры синтаксиса и математических операций:
                            </div>

                            {/* Серая плашка для кода */}
                            <pre style={{
                                backgroundColor: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                padding: '16px',
                                overflowX: 'auto',
                                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                                fontSize: '14px',
                                color: '#0f172a',
                                margin: '0 0 20px 0',
                                whiteSpace: 'pre',
                                lineHeight: '1.5'
                            }}>
{`// 1. Создание сверхбольшого числа
const bigInteger = 9007199254740995n;
const fromString = BigInt("9007199254740995");

console.log(typeof bigInteger); // "bigint"

// 2. Математика работает как обычно
console.log(2n + 3n);           // 5n
console.log(5n * 2n);           // 10n

// ⚠️ Особенность деления: дробная часть всегда ОТСЕКАЕТСЯ (округление к нулю)
console.log(5n / 2n);           // 2n (а не 2.5!)`}
  </pre>

                            {/* Важное предупреждение (Красная сноска внизу — жесткое правило на собеседованиях) */}
                            <div style={{
                                borderLeft: '4px solid #ef4444',
                                backgroundColor: '#fef2f2',
                                padding: '12px 16px',
                                borderRadius: '0 6px 6px 0',
                                fontSize: '14px',
                                color: '#991b1b',
                                lineHeight: '1.5',
                                marginBottom: '20px'
                            }}>
                                🚨 <strong>Запрет смешивания типов:</strong> Вы не можете проводить математические операции между типами `BigInt` и `Number`. Код вида <code style={{ fontFamily: 'monospace' }}>10n + 5</code> выбросит критическую ошибку <code style={{ fontFamily: 'monospace' }}>TypeError: Cannot mix BigInt and other types</code>. Чтобы сложить их, нужно сначала вручную привести обычное число к биг-инту: <code style={{ fontFamily: 'monospace' }}>10n + BigInt(5)</code>.
                            </div>

                            {/* Нюанс сравнения */}
                            <div style={{
                                borderLeft: '4px solid #f59e0b',
                                backgroundColor: '#fef3c7',
                                padding: '12px 16px',
                                borderRadius: '0 6px 6px 0',
                                fontSize: '14px',
                                color: '#78350f',
                                lineHeight: '1.5'
                            }}>
                                ⚖️ <strong>Сравнение с Number:</strong> Сравнение через нестрогое равенство работает: <code style={{ fontFamily: 'monospace' }}>2n == 2</code> вернет <code style={{ fontFamily: 'monospace' }}>true</code>. Однако строгое равенство учитывает разные типы данных, поэтому <code style={{ fontFamily: 'monospace' }}>2n === 2</code> вернет <code style={{ fontFamily: 'monospace' }}>false</code>.
                            </div>
                            <div style={{
                                backgroundColor: '#ffffff',
                                borderRadius: '8px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                padding: '24px sm:32px',
                                width: '100%',
                                boxSizing: 'border-box',
                                fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                                color: '#334155',
                                position: 'relative',
                                overflow: 'hidden',
                                marginTop: '32px'
                            }}>
                                {/* Верхняя синяя полоса карточки */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '4px',
                                    backgroundColor: '#2563eb'
                                }} />

                                {/* Заголовок */}
                                <h2 style={{
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    color: '#1e3a8a',
                                    margin: '0 0 12px 0'
                                }}>
                                    Тип данных String (Строки)
                                </h2>

                                <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                    <strong>Тип String</strong> используется для представления текстовой информации. Любая строка — это неизменяемый (immutable) упорядоченный массив символов, где каждый символ имеет свой индекс, начиная с нуля.
                                </p>

                                {/* Главная ментальная модель (голубой блок) */}
                                <div style={{
                                    backgroundColor: '#eff6ff',
                                    border: '1px solid #bfdbfe',
                                    padding: '16px',
                                    borderRadius: '6px',
                                    marginBottom: '24px',
                                    fontSize: '14px',
                                    lineHeight: '1.6',
                                    color: '#1e40af'
                                }}>
                                    <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                        🧠 Три вида кавычек на пальцах:
                                    </div>
                                    <div style={{ marginBottom: '6px' }}>
                                        <strong>Одинарные (' ') и Двойные (" "):</strong> Абсолютно равноправны. Разница лишь в удобстве: если внутри текста нужны двойные кавычки, саму строку лучше обернуть в одинарные (<code style={{ fontFamily: 'monospace' }}>'Он сказал "Привет"'</code>), чтобы не заниматься экранированием.
                                    </div>
                                    <div>
                                        <strong>Косые/Шаблонные кавычки (\` \`):</strong> Обладают суперсилами. Позволяют делать <strong>интерполяцию</strong> — вставлять выражения и переменные прямо внутрь строки через конструкцию <code style={{ fontFamily: 'monospace', color: '#be123c' }}>{`\${переменная}`}</code>, а также переносить текст на новую строку без спецсимволов.
                                    </div>
                                </div>

                                {/* Текст перед кодом */}
                                <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                    Примеры объявления строк и интерполяции:
                                </div>

                                {/* Серая плашка для кода */}
                                <pre style={{
                                    backgroundColor: '#f8fafc',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '6px',
                                    padding: '16px',
                                    overflowX: 'auto',
                                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                                    fontSize: '14px',
                                    color: '#0f172a',
                                    margin: '0 0 20px 0',
                                    whiteSpace: 'pre',
                                    lineHeight: '1.5'
                                }}>
{`// 1. Обычные строки
const single = 'Простые кавычки';
const double = "Тоже простые";

// Экранирование обратным слэшем (если кавычки совпадают)
const quote = 'It\\'s JavaScript'; 

// 2. Шаблонные строки (Template Literals)
const language = "JS";
const multiline = \`Строка 1
Строка 2 (перенос без \\n)\`;

// Интерполяция выражений:
const info = \`Я учу \${language}, мне \${20 + 5} лет\`;
console.log(info); // "Я учу JS, мне 25 лет"

// Доступ к символам по индексу (только для чтения!)
console.log(language[0]); // "J"`}
  </pre>

                                {/* Важное предупреждение (Красная сноска внизу) */}
                                <div style={{
                                    borderLeft: '4px solid #ef4444',
                                    backgroundColor: '#fef2f2',
                                    padding: '12px 16px',
                                    borderRadius: '0 6px 6px 0',
                                    fontSize: '14px',
                                    color: '#991b1b',
                                    lineHeight: '1.5',
                                    marginBottom: '20px'
                                }}>
                                    🚨 <strong>Ловушка неизменяемости (Immutability):</strong> Строки в JavaScript нельзя изменить «на месте». Код вида <code style={{ fontFamily: 'monospace' }}>let str = "Hi"; str[0] = "G";</code> отработает без ошибок (или упадет в strict mode), но строка останется прежней: <code style={{ fontFamily: 'monospace' }}>"Hi"</code>. Чтобы изменить строку, её нужно перезаписать целиком: <code style={{ fontFamily: 'monospace' }}>str = "Gi";</code>.
                                </div>

                                {/* Полезное свойство length */}
                                <div style={{
                                    borderLeft: '4px solid #10b981',
                                    backgroundColor: '#f0fdf4',
                                    padding: '12px 16px',
                                    borderRadius: '0 6px 6px 0',
                                    fontSize: '14px',
                                    color: '#065f46',
                                    lineHeight: '1.5'
                                }}>
                                    📏 <strong>Длина строки:</strong> Свойство <code style={{ fontFamily: 'monospace' }}>.length</code> возвращает количество символов в строке: <code style={{ fontFamily: 'monospace' }}>"Привет".length</code> вернет <code style={{ fontFamily: 'monospace' }}>6</code>. Помните, что это свойство, а не метод, поэтому круглые скобки в конце ставить не нужно.
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


            </main>
        </div>
    );
}
