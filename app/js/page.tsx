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
                    <a href="#closures" onClick={(e) => handleScroll(e, 'closures')} style={anchorLinkStyle}>
                        🧬 Замыкания и Области видимости
                    </a>
                    <a href="#promises" onClick={(e) => handleScroll(e, 'promises')} style={anchorLinkStyle}>
                        ⏳ Промисы от А до Я
                    </a>
                    <a href="#asyncAwait" onClick={(e) => handleScroll(e, 'asyncAwait')} style={anchorLinkStyle}>
                        ⏳ Синтаксический сахар async/await
                    </a>
                    <a href="#eventLoop" onClick={(e) => handleScroll(e, 'eventLoop')} style={anchorLinkStyle}>
                        ⏳ Event Loop и Очереди задач
                    </a>
                    <a href="#jsDate" onClick={(e) => handleScroll(e, 'jsDate')} style={anchorLinkStyle}>
                        📅 Работа с датами (Date)
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
                            <div>
                                <div style={{color: '#cf1322'}}>
                                    1. Function — это функция, поэтому её прототипом является Function.prototype
                                </div>
                                <div>
                                    console.log(Function.__proto__ === Function.prototype);{' '}
                                    <span style={{color: '#389e0d', fontWeight: 'bold'}}>true</span>
                                </div>

                                <div style={{color: '#cf1322', marginTop: '10px'}}>
                                    2. Сам прототип функции — это объект, поэтому он наследуется от Object
                                </div>
                                <div>
                                    console.log(Function.prototype.__proto__ === Object.prototype);{' '}
                                    <span style={{color: '#389e0d', fontWeight: 'bold'}}>true</span>
                                </div>

                                <div style={{color: '#cf1322', marginTop: '10px'}}>
                                    3. А сам конструктор Object — это функция, поэтому он наследуется от Function!
                                </div>
                                <div>
                                    console.log(Object.__proto__ === Function.prototype);{' '}
                                    <span style={{color: '#389e0d', fontWeight: 'bold'}}>true</span>
                                </div>
                            </div>
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
                                            Если злоумышленник передаст строку <code style={codeInlineStyle}>{'"__proto__"'}</code> через форму или API, а ваш код
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
                                            классы). Движок выбрасывает скомпилированный быстрый код и переключает
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
                                invoked without new</code>.
                            </li>
                            <li>
                                <b>Строгий режим автоматически:</b> Весь код внутри конструкции <code
                                style={codeInlineStyle}>class</code> автоматически выполняется в строгом режиме (<code
                                style={codeInlineStyle}>&#39;use strict&rsquo;</code>). Это защищает от случайного замусоривания
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
                                    = Developer</code>), физически копируются в каждый создаваемый объект. У объектов
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
                                            через квадратные скобки. Код <code style={codeInlineStyle}>{"obj['#balance']"}</code> вернет <code
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
                            зависит от окружения (браузер/Node.js) и включения строгой директивы <code style={codeInlineStyle}>&apos;use strict&apos;</code>:

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
                            style={codeInlineStyle}>{"\"use strict\""}</code> активирован **автоматически**, любая потеря
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
                                <strong>Прямой доступ к элементу:</strong> Цикл сам заходит в коллекцию и на каждом шаге достает готовое <strong>значение</strong> (например, саму строку <code style={{ fontFamily: 'monospace', color: '#be123c' }}>React</code>), а не его порядковый номер.
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
                                <strong>Ключ (Имя свойства):</strong> Это название переменной внутри объекта (например,<code style={{ fontFamily: 'monospace', color: '#be123c' }}>{'"name"'}</code>
                                ). Цикл возвращает именно его в виде обычной <strong>строки</strong>.
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
                                <div><strong>Порядок сортировки ключей:</strong> Если ключи объекта являются целыми числами (например, <code style={{ fontFamily: 'monospace' }}> {`"4"`}</code>{', '}
                                    <code style={{ fontFamily: 'monospace' }}>{`"1"`}</code>{'), JavaScript автоматически отсортирует'}), JavaScript автоматически отсортирует их по возрастанию. Строковые же свойства выводятся строго в порядке их создания.</div>
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
                            🚨 <strong>Главное табу:</strong> Никогда не используйте <code style={{ fontFamily: 'monospace' }}>for...in</code> для массивов! Массив в JS — это тоже объект, поэтому цикл сработает, но индексы превратятся в <em>строки</em> (<code style={{ fontFamily: 'monospace' }}>{'"0"'}</code>
                            , <code style={{ fontFamily: 'monospace' }}>{'"1"'}</code>{')'}), что сломает математику (например, <code style={{ fontFamily: 'monospace' }}>key + 1</code> даст результат <code style={{ fontFamily: 'monospace' }}>{'"01"'}</code>
                            ). Кроме того, скорость работы такого перебора в разы ниже стандартных методов.
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
                        ⚠️ <strong>Официальный баг языка:</strong> Вызов <code style={{ fontFamily: 'monospace' }}>typeof null</code> возвращает строковое значение <code style={{ fontFamily: 'monospace' }}>{'"object"'}</code> [1, 7]. Это признанная историческая ошибка в архитектуре JavaScript, которую нельзя исправить, чтобы не сломать миллионы старых сайтов [7]. На самом деле <code style={{ fontFamily: 'monospace' }}>null</code> — это самостоятельный примитив [1, 5].
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
                                    <strong>Символ &quot;n&quot; в конце:</strong>
                                    Самый простой путь — просто дописать строчную букву <code style={{ fontFamily: 'monospace', color: '#be123c' }}>n</code> в самый конец числового литерала: <code style={{ fontFamily: 'monospace' }}>10n</code>.
                                </div>
                                <div>
                                    <strong>Функция-конструктор:</strong> Вызвать встроенную функцию <code style={{ fontFamily: 'monospace', color: '#be123c' }}>BigInt(значение)</code>. Это полезно, когда нужно преобразовать строку или обычное число в длинное число: <code style={{ fontFamily: 'monospace' }}>{`BigInt("9007199254740995")`}</code>{'.'}


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
                                        <strong>{`Одинарные (' ') и Двойные (" "):`}</strong>

                                        Абсолютно равноправны. Разница лишь в удобстве: если внутри текста нужны двойные кавычки, саму строку лучше обернуть в одинарные (<code style={{ fontFamily: 'monospace' }}>{`'Он сказал "Привет"'`}</code>), чтобы не заниматься экранированием.
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
                                    🚨 <strong>Ловушка неизменяемости (Immutability):</strong> Строки в JavaScript нельзя изменить «на месте». Код вида <code style={{ fontFamily: 'monospace' }}>let str = &quot;Hi&quot;; str[0] = &quot;G&quot;;</code>
                                    отработает без ошибок (или упадет в strict mode), но строка останется прежней: <code style={{ fontFamily: 'monospace' }}>&quot;Hi&quot;</code>{'.'}
                                    Чтобы изменить строку, её нужно перезаписать целиком: <code style={{ fontFamily: 'monospace' }}>str = &quot;Gi&quot;;</code>{'.'}

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
                                    📏 <strong>Длина строки:</strong> Свойство <code style={{ fontFamily: 'monospace' }}>.length</code> возвращает количество символов в строке: <code style={{ fontFamily: 'monospace' }}>&quot;Привет&quot;.length</code>
                                    вернет <code style={{ fontFamily: 'monospace' }}>6</code>. Помните, что это свойство, а не метод, поэтому круглые скобки в конце ставить не нужно.
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
                                        Тип данных Boolean (Логический тип)
                                    </h2>

                                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                        <strong>Тип Boolean</strong> представляет логическую сущность и содержит всего два значения: <code style={{ fontFamily: 'monospace' }}>true</code> (истина) и <code style={{ fontFamily: 'monospace' }}>false</code> (ложь). Обычно этот тип используется для проверки условий в операторах сравнения и циклах.
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
                                            🧠 Концепция Truthy и Falsy (Правдивые и Ложные значения):
                                        </div>
                                        <p style={{ margin: '0 0 8px 0' }}>
                                            В JavaScript любое значение другого типа (число, строка, объект) можно принудительно или автоматически превратить в логический тип — например, внутри условия <code style={{ fontFamily: 'monospace' }}>if (выражение)</code>.
                                        </p>
                                        <div style={{ marginBottom: '6px' }}>
                                            <strong>Falsy (Ложные):</strong> Существует строго ограниченный список значений, которые при превращении в Boolean всегда дают <code style={{ fontFamily: 'monospace', color: '#be123c' }}>false</code>.
                                        </div>
                                        <div>
                                            <strong>Truthy (Правдивые):</strong> Всё остальное, что не входит в список Falsy, автоматически превращается в <code style={{ fontFamily: 'monospace', color: '#16a34a' }}>true</code> (включая любые объекты, массивы и непустые строки).
                                        </div>
                                    </div>

                                    {/* Сводный блок Falsy значений */}
                                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                        Полный список Falsy-значений (приводятся к false):
                                    </div>

                                    <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
                                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                            <thead>
                                            <tr style={{ color: '#64748b', borderBottom: '1px solid #e2e8f0' }}>
                                                <th style={{ padding: '8px 12px' }}>Значение</th>
                                                <th style={{ padding: '8px 12px' }}>Описание</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}><td style={{ padding: '8px 12px', fontFamily: 'monospace', fontWeight: '600' }}>false</td><td style={{ padding: '8px 12px' }}>Сам логический тип ложь</td></tr>
                                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}><td style={{ padding: '8px 12px', fontFamily: 'monospace', fontWeight: '600' }}>0, -0, 0n</td><td style={{ padding: '8px 12px' }}>Число ноль (включая отрицательный и BigInt)</td></tr>
                                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}><td style={{ padding: '8px 12px', fontFamily: 'monospace', fontWeight: '600' }}>{`"", '', \` \``}</td><td style={{ padding: '8px 12px' }}>Абсолютно пустая строка (любой кавычки)</td></tr>
                                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}><td style={{ padding: '8px 12px', fontFamily: 'monospace', fontWeight: '600' }}>null</td><td style={{ padding: '8px 12px' }}>Намеренное отсутствие значения</td></tr>
                                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}><td style={{ padding: '8px 12px', fontFamily: 'monospace', fontWeight: '600' }}>undefined</td><td style={{ padding: '8px 12px' }}>Неприсвоенное значение</td></tr>
                                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}><td style={{ padding: '8px 12px', fontFamily: 'monospace', fontWeight: '600' }}>NaN</td><td style={{ padding: '8px 12px' }}>Результат математической ошибки (Not a Number)</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Текст перед кодом */}
                                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                        Примеры логического приведения и проверок:
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
{`const isLogged = true;
console.log(typeof isLogged); // "boolean"

// ⚡ Два способа явного приведения к Boolean:
// Способ А: Функция Boolean()
console.log(Boolean("Привет")); // true (строка не пустая)
console.log(Boolean(""));       // false (строка пустая)

// Способ Б: Двойное отрицание !! (Самый частый в реальном коде)
console.log(!!"Текст");         // true
console.log(!!0);               // false`}
  </pre>

                                    {/* Важное предупреждение (Красная сноска внизу — ловушка на собеседованиях) */}
                                    <div style={{
                                        borderLeft: '4px solid #ef4444',
                                        backgroundColor: '#fef2f2',
                                        padding: '12px 16px',
                                        borderRadius: '0 6px 6px 0',
                                        fontSize: '14px',
                                        color: '#991b1b',
                                        lineHeight: '1.5'
                                    }}>
                                        🚨 <strong>Главная ловушка для новичков:</strong> Пустой массив <code style={{ fontFamily: 'monospace' }}>[]</code> и пустой объект <code style={{ fontFamily: 'monospace' }}>{`{}`}</code> — это <strong>Truthy значения</strong>! Выражения <code style={{ fontFamily: 'monospace' }}>Boolean([])</code> и <code style={{ fontFamily: 'monospace' }}>Boolean({`{}`})</code> вернут <code style={{ fontFamily: 'monospace', fontWeight: '700' }}>true</code>. В JavaScript абсолютно любые объекты считаются правдивыми, даже если в них нет ни одного элемента.
                                    </div>
                                    <div style={{ marginTop: '24px', fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif' }}>
                                        <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 8px 0' }}>
                                            🤔 Почему [] и {'{}'} — это Truthy-значения?
                                        </h3>

                                        <p style={{ fontSize: '15px', color: '#475569', margin: '0 0 16px 0', lineHeight: '1.6' }}>
                                            В спецификации ECMAScript заложено строгое правило: <strong>любой объект (включая массивы) всегда приводится к <code style={{ fontFamily: 'monospace', color: '#16a34a' }}>true</code></strong>. Движок проверяет только тип данных, но никогда не заглядывает внутрь структуры, чтобы проверить её наполненность.
                                        </p>

                                        {/* Код с примерами проверок */}
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
{`// Ловушка: типы данных возвращают true
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// Как правильно проверять на пустоту в реальном UI:
const arr = [];
const obj = {};

if (arr.length > 0) {
  // Код выполнится только если массив НЕ пустой
}

if (Object.keys(obj).length > 0) {
  // Код выполнится только если в объекте есть ключи
}`}
  </pre>
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
                                        Типы данных Null и Undefined (Пустота)
                                    </h2>

                                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                        В JavaScript есть два примитива, обозначающих отсутствие значения: <strong>Null</strong> и <strong>Undefined</strong> [1, 5]. Несмотря на схожесть, они имеют принципиальное различие в семантике (смысле) использования.
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
                                            🧠 Главное отличие на пальцах:
                                        </div>
                                        <div style={{ marginBottom: '6px' }}>
                                            <strong>Undefined (Не определено):</strong> Это пустота, которая происходит <strong>автоматически</strong>. Означает, что переменная была создана, но ей физически еще не успели присвоить вообще никакое значение.
                                        </div>
                                        <div>
                                            <strong>Null (Намеренно пусто):</strong> Это пустота, которую разработчик создаёт <strong>вручную</strong> [1, 5]. Означает, что переменная известна, но значение в ней намеренно стёрто, отсутствует или неизвестно на данный момент [1, 5].
                                        </div>
                                    </div>

                                    {/* Сравнение на собеседовании */}
                                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                        Сравнение типов и равенства:
                                    </div>

                                    <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
                                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                            <thead>
                                            <tr style={{ color: '#64748b', borderBottom: '1px solid #e2e8f0' }}>
                                                <th style={{ padding: '8px 12px', width: '30%' }}>Критерий</th>
                                                <th style={{ padding: '8px 12px', width: '35%' }}>null</th>
                                                <th style={{ padding: '8px 12px', width: '35%' }}>undefined</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>Кто присваивает?</td><td style={{ padding: '8px 12px' }}>Разработчик вручную [1, 5]</td><td style={{ padding: '8px 12px' }}>Движок JS автоматически</td></tr>
                                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>Что вернет typeof?</td><td style={{ padding: '8px 12px', fontFamily: 'monospace', color: '#b91c1c' }}>
                                                {`"object" (баг языка)`}
                                            </td>
                                                <td style={{ padding: "8px 12px", fontFamily: "monospace", color: "#16a34a" }}>{`"undefined"`}</td>
                                            </tr>
                                            <tr style={{ borderBottom: '1px solid #f1f5f9' }}><td style={{ padding: '8px 12px', fontWeight: '600' }}>Математика (число)</td><td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>Приводится к 0</td><td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>Приводится к NaN</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Текст перед кодом */}
                                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                        Примеры поведения в коде:
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
{`// 1. Автоматический undefined
let age;
console.log(age);                // undefined

// 2. Намеренный null
let currentUser = null;          // Юзер пока не залогинен [1, 5]

// 3. Парадокс сравнения (Любимый вопрос на интервью)
console.log(null == undefined);  // true  (при нестрогом сравнении они равны друг другу)
console.log(null === undefined); // false (типы данных строго разные!)

// 4. Математические операции
console.log(null + 5);           // 5   (null превратился в 0)
console.log(undefined + 5);      // NaN (undefined превратился в NaN)`}
  </pre>

                                    {/* Важное предупреждение (Красная сноска внизу) */}
                                    <div style={{
                                        borderLeft: '4px solid #ef4444',
                                        backgroundColor: '#fef2f2',
                                        padding: '12px 16px',
                                        borderRadius: '0 6px 6px 0',
                                        fontSize: '14px',
                                        color: '#991b1b',
                                        lineHeight: '1.5'
                                    }}>
                                        🚨 <strong>Помните про typeof null:</strong> Исторический баг <code style={{ fontFamily: 'monospace' }}>{`typeof null === "object"`}</code>
                                        часто заставляет новичков думать, что null передается по ссылке. Это не так. `Null` — стопроцентный примитив, который копируется по значению и не имеет никаких свойств.
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
                                            Тип данных Symbol (Символы)
                                        </h2>

                                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                            <strong>Тип Symbol</strong> — это примитивный тип данных (появился в ES6), который используется для создания <strong>абсолютно уникальных идентификаторов</strong> [1, 3]. Основная цель символов — позволить разработчикам создавать скрытые, защищенные свойства объектов, которые никто случайно не перезапишет [3].
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
                                                🧠 Две главные суперсилы символов:
                                            </div>
                                            <div style={{ marginBottom: '6px' }}>
                                                <strong>Гарантия уникальности:</strong> Каждый созданный символ уникален, даже если у них одинаковые текстовые описания [3]. Выражение <code style={{ fontFamily: 'monospace' }}>{`Symbol("id") === Symbol("id")`}</code>
                                                всегда вернет <code style={{ fontFamily: 'monospace' }}>false</code> [3].
                                            </div>
                                            <div>
                                                <strong>Скрытые свойства:</strong> Ключи объекта, объявленные через символы, не пролезают в стандартные циклы вроде <code style={{ fontFamily: 'monospace' }}>for...in</code> и скрыты от методов вроде <code style={{ fontFamily: 'monospace' }}>Object.keys()</code> [3]. Это защищает системные данные от случайного изменения другими скриптами [3].
                                            </div>
                                        </div>

                                        {/* Текст перед кодом */}
                                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                            Примеры создания и защиты свойств:
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
{`// 1. Создание символа (Конструктор new использовать ЗАПРЕЩЕНО!)
const id1 = Symbol("userId");
const id2 = Symbol("userId");

console.log(typeof id1);         // "symbol"
console.log(id1 === id2);        // false! (Они абсолютно уникальны)

// 2. Использование символа в качестве скрытого ключа объекта
const user = {
  name: "Alex",
  age: 25,
  [id1]: 9988 // Записываем значение по уникальному ключу-символу
};

// 3. Попытка перебора через обычный цикл for...in
for (const key in user) {
  console.log(key);              // Выведет только "name" и "age"
}                                // Ключ Symbol("userId") полностью СКРЫТ!

// 4. Прямой доступ по символу по-прежнему работает:
console.log(user[id1]);          // 9988`}
  </pre>

                                        {/* Как всё-таки прочитать символы */}
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
                                            🔓 <strong>Как их прочитать:</strong> Символы скрыты от обычных переборов, но они не являются полноценным средством безопасности. Если сторонней библиотеке очень нужно вытащить все символы из объекта, она может сделать это через специальный встроенный метод: <code style={{ fontFamily: 'monospace' }}>Object.getOwnPropertySymbols(user)</code> [3].
                                        </div>

                                        {/* Важное предупреждение (Красная сноска внизу) */}
                                        <div style={{
                                            borderLeft: '4px solid #ef4444',
                                            backgroundColor: '#fef2f2',
                                            padding: '12px 16px',
                                            borderRadius: '0 6px 6px 0',
                                            fontSize: '14px',
                                            color: '#991b1b',
                                            lineHeight: '1.5'
                                        }}>
                                            🚨 <strong>Ловушка JSON:</strong> При попытке превратить объект в строку через метод <code style={{ fontFamily: 'monospace' }}>JSON.stringify(user)</code>, все свойства, ключами которых являются символы, будут автоматически проигнорированы и полностью удалены из итоговой строки.
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
                                                8-й тип данных: Объекты (Reference Types)
                                            </h2>

                                            <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                                В отличие от примитивов, которые хранят лишь одно простое значение, <strong>Объект (Object)</strong> представляет собой сложную структуру данных. Он используется для хранения коллекций значений и более сложных сущностей. Массивы (<code style={{ fontFamily: 'monospace' }}>Array</code>), функции (<code style={{ fontFamily: 'monospace' }}>Function</code>) и даты (<code style={{ fontFamily: 'monospace' }}>Date</code>) — всё это под капотом является объектами.
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
                                                    🧠 Ссылочный тип данных (Reference) под капотом:
                                                </div>
                                                <div style={{ marginBottom: '6px' }}>
                                                    <strong>Хранение в Куче (Heap):</strong> Примитивы занимают фиксированное место в быстрой памяти (Стек). Объекты могут динамически расти, поэтому они сохраняются в большой памяти (Куча), а в переменной лежит лишь <strong>«адрес ячейки»</strong> (ссылка).
                                                </div>
                                                <div>
                                                    <strong>Эффект близнецов:</strong> Если вы скопируете переменную с объектом в другую переменную (<code style={{ fontFamily: 'monospace' }}>const b = a</code>), вы скопируете только этот адрес. Обе переменные будут управлять <strong>одним и тем же физическим объектом</strong>.
                                                </div>
                                            </div>

                                            {/* Текст перед кодом */}
                                            <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                                Примеры работы со ссылками и сравнением:
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
{`// 1. Создание объекта и мутация по ссылке
const user1 = { name: "Alex" };
const user2 = user1; // Копируем адрес, а не сам объект!

user2.name = "Ivan";
console.log(user1.name); // "Ivan" (Исходный объект изменился!)

// 2. Парадокс сравнения
const itemA = { code: 123 };
const itemB = { code: 123 };

console.log(itemA === itemB); // false! (Объекты идентичны, но адреса в памяти разные)
console.log(user1 === user2); // true!  (Переменные указывают на один и тот же адрес)`}
  </pre>

                                            {/* Как правильно копировать объекты (Поверхностное копирование) */}
                                            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '24px 0 12px 0' }}>
                                                🔄 Как сделать независимую копию (Клонирование)
                                            </h3>
                                            <p style={{ fontSize: '15px', color: '#475569', margin: '0 0 12px 0', lineHeight: '1.6' }}>
                                                Чтобы разорвать связь между переменными, нужно создать новый физический объект и перенести туда свойства старого. Для этого используют **Spread-оператор (`...`)** или метод **`Object.assign()`**:
                                            </p>

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
{`const original = { role: "Admin", active: true };

// Создаем чистый объект и "распаковываем" туда свойства оригинала
const clone = { ...original }; 

clone.active = false;
console.log(original.active); // true (Оригинал защищен, связь разорвана!)`}
  </pre>

                                            {/* Важное предупреждение (Красная сноска внизу — ловушка глубокого копирования) */}
                                            <div style={{
                                                borderLeft: '4px solid #ef4444',
                                                backgroundColor: '#fef2f2',
                                                padding: '12px 16px',
                                                borderRadius: '0 6px 6px 0',
                                                fontSize: '14px',
                                                color: '#991b1b',
                                                lineHeight: '1.5'
                                            }}>
                                                🚨 <strong>Ловушка поверхностного копирования (Shallow Copy):</strong> Помните, что спред-оператор <code style={{ fontFamily: 'monospace' }}>...</code> копирует автономно только первый уровень свойств. Если внутри объекта лежит другой вложенный объект (например, <code style={{ fontFamily: 'monospace' }}>{`info: { age: 25 }`}</code>), то его адрес скопируется по старинке — по ссылке. Для полноценного глубокого копирования используют современный метод <code style={{ fontFamily: 'monospace', color: '#2563eb' }}>structuredClone(original)</code>.
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
                                                {/* Upper yellow border line */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: '4px',
                                                    backgroundColor: '#facc15'
                                                }} />

                                                {/* Header */}
                                                <h2 style={{
                                                    fontSize: '20px',
                                                    fontWeight: '700',
                                                    color: '#b45309',
                                                    margin: '0 0 12px 0'
                                                }}>
                                                    Альтернативные методы перебора объектов
                                                </h2>

                                                <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                                    Хотя цикл <code style={{ fontFamily: 'monospace' }}>for...in</code> является классическим способом обхода объектов, в современной разработке чаще используют методы встроенного класса <code style={{ fontFamily: 'monospace', fontWeight: '700' }}>Object</code>. Они преобразуют данные объекта в массивы, что позволяет комбинировать их с циклом <code style={{ fontFamily: 'monospace' }}>for...of</code> и деструктуризацией.
                                                </p>

                                                {/* Ментальная модель (Желтый блок) */}
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
                                                        ✍️ Три главных инструмента трансформации:
                                                    </div>
                                                    <div style={{ marginBottom: '6px' }}>
                                                        <strong>Object.keys(obj):</strong> Собирает все ключи (имена свойств) объекта в обычный одномерный массив строк.
                                                    </div>
                                                    <div style={{ marginBottom: '6px' }}>
                                                        <strong>Object.values(obj):</strong> Достает только значения из объекта и возвращает их в виде массива.
                                                    </div>
                                                    <div>
                                                        <strong>Object.entries(obj):</strong> Превращает объект в двумерный массив («массив массивов»), где каждый вложенный элемент — это пара вида <code style={{ fontFamily: 'monospace' }}>[ключ, значение]</code>.
                                                    </div>
                                                </div>

                                                {/* Текст перед кодом */}
                                                <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                                    Практический пример работы с методами Object:
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
{`const user = { name: 'Катя', age: 25, city: 'Минск' };

// 1. Классический for...in — бежит по ключам
for (const key in user) {
  console.log(key, user[key]);
  // 'name' 'Катя', 'age' 25, 'city' 'Минск'
}

// 2. Object.keys() — получаем массив ключей
console.log(Object.keys(user));    // ['name', 'age', 'city']

// 3. Object.values() — получаем массив значений
console.log(Object.values(user));  // ['Катя', 25, 'Минск']

// 4. Object.entries() — массив пар [ключ, значение]
console.log(Object.entries(user));
// [['name', 'Катя'], ['age', 25], ['city', 'Минск']]

// 🔥 Удобный паттерн: for...of + entries + деструктуризация
for (const [key, value] of Object.entries(user)) {
  console.log(\`\${key}: \${value}\`); // "name: Катя", "age: 25"...
}`}
  </pre>

                                                {/* Сине-зеленая плашка о преимуществе */}
                                                <div style={{
                                                    borderLeft: '4px solid #0d9488',
                                                    backgroundColor: '#f0fdfa',
                                                    padding: '12px 16px',
                                                    borderRadius: '0 6px 6px 0',
                                                    fontSize: '14px',
                                                    color: '#115e59',
                                                    lineHeight: '1.5'
                                                }}>
                                                    💡 <strong>Преимущество перед for...in:</strong> Методы <code style={{ fontFamily: 'monospace' }}>Object.keys / values / entries</code> собирают свойства <strong>только самого объекта</strong>. Они автоматически игнорируют любые чужие свойства, унаследованные из цепочки прототипов (<code style={{ fontFamily: 'monospace' }}>__proto__</code>), избавляя вас от необходимости писать ручные проверки через <code style={{ fontFamily: 'monospace' }}>hasOwnProperty()</code>.
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
                                                        Проблема typeof с объектами и правильная проверка массивов
                                                    </h2>

                                                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                                        Оператор <code style={{ fontFamily: 'monospace', fontWeight: '700' }}>typeof</code> отлично определяет примитивы, но ломается на сложных структурах данных. В JavaScript массивы, функции и даже <code style={{ fontFamily: 'monospace' }}>null</code> при вызове этого оператора возвращают один и тот же тип, что делает невозможным стандартную проверку.
                                                    </p>

                                                    {/* Текст перед кодом */}
                                                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                                        Парадоксы оператора typeof и решение через Array.isArray():
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
{`// ⚠️ Проблема: всё является объектом для typeof
console.log(typeof {});           // 'object'
console.log(typeof []);           // 'object'  ← массив тоже объект!
console.log(typeof function(){}); // 'function' (но структурно это тоже объект)
console.log(typeof null);         // 'object'  ← признанный баг JS

// 🟢 Решение: точная проверка, что перед нами именно массив
console.log(Array.isArray([]));   // true ✅
console.log(Array.isArray({}));   // false ✅`}
  </pre>

                                                    {/* Ментальный блок с объяснением для функций */}
                                                    <div style={{
                                                        backgroundColor: '#eff6ff',
                                                        border: '1px solid #bfdbfe',
                                                        padding: '16px',
                                                        borderRadius: '6px',
                                                        fontSize: '14px',
                                                        lineHeight: '1.6',
                                                        color: '#1e40af'
                                                    }}>
                                                        <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                                                            🧠 Почему функции возвращают &apos;function&apos;?
                                                        </div>
                                                        <div>
                                                            Хотя функции в JavaScript являются подтипом объектов (вы можете динамически добавлять им свойства и методы), создатели языка специально сделали так, чтобы <code style={{ fontFamily: 'monospace' }}>typeof function(){}</code> возвращал строку <code style={{ fontFamily: 'monospace' }}>{'"function"'}</code>
                                                            . Это позволяет разработчикам легко отличать исполняемый код (колбэки) от обычных объектов и массивов.
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
                                                            Приведение типов в JavaScript (Type Coercion)
                                                        </h2>

                                                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                                            Поскольку JavaScript является языком с <strong>динамической и слабой типизацией</strong>, он умеет автоматически преобразовывать значения из одного типа в другой прямо во время выполнения операций. Такое скрытое автоматическое преобразование называется <strong>неявным приведением типов</strong> (Implicit Coercion).
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
                                                                🧠 Три главных направления приведения типов:
                                                            </div>
                                                            <div style={{ marginBottom: '6px' }}>
                                                                <strong>Строковое (ToString):</strong> Происходит, когда один из операндов является строкой и используется оператор сложения <code style={{ fontFamily: 'monospace' }}>+</code>. Сложение превращается в <strong>конкатенацию</strong> (склеивание текста).
                                                            </div>
                                                            <div style={{ marginBottom: '6px' }}>
                                                                <strong>Численное (ToNumber):</strong> Происходит при математических операциях сравнения (<code style={{ fontFamily: 'monospace' }}>{`>, <, >=, <= tracking-wider)`}</code>
                                                                , вычитания <code style={{ fontFamily: 'monospace' }}>-</code>, умножения <code style={{ fontFamily: 'monospace' }}>*</code> и деления <code style={{ fontFamily: 'monospace' }}>/</code>.
                                                            </div>
                                                            <div>
                                                                <strong>Логическое (ToBoolean):</strong> Происходит в логических контекстах (например, в условиях <code style={{ fontFamily: 'monospace' }}>if (...)</code>, циклах или при использовании логических операторов <code style={{ fontFamily: 'monospace' }}>||</code> и <code style={{ fontFamily: 'monospace' }}>&&</code>).
                                                            </div>
                                                        </div>

                                                        {/* Текст перед кодом */}
                                                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                                            Примеры неявного приведения и парадоксы на собеседованиях:
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
{`// 1. Магия оператора плюс (+) — строка всегда побеждает
console.log(5 + "5");         // "55" (Число 5 применилось к строке и склеилось)
console.log("5" + 2 + 3);     // "523" (Идет слева направо: "5" + 2 = "52", затем + 3)
console.log(2 + 3 + "5");     // "55"  (Сначала математика 2+3=5, затем склеивание с "5")

// 2. Другие математические операторы приводят строго к ЧИСЛУ
console.log("5" - 2);         // 3  (Строка "5" успешно стала числом 5)
console.log("5" * "2");       // 10 (Обе строки превратились в числа)
console.log("текст" - 2);     // NaN (Строку "текст" нельзя преобразовать в число)

// 3. Логическое приведение примитивов и объектов
console.log(Boolean(""));     // false (Пустая строка — Falsy)
console.log(Boolean([]));     // true  (Массив — это объект, любой объект — Truthy!)

// 4. Поведение унарного плюса
console.log(+"10");           // 10 (Унарный плюс быстро приводит к числу)
console.log(+true);           // 1  (Булево true приводится к числу 1)`}
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
                                                            🚨 <strong>Золотое правило: Используйте === вместо ==.</strong> Нестрогое равенство <code style={{ fontFamily: 'monospace' }}>==</code> пытается неявно привести типы операндов перед сравнением, что рождает дикие парадоксы: <code style={{ fontFamily: 'monospace' }}>[] == false</code> вернет <code style={{ fontFamily: 'monospace' }}>true</code>. Строгое равенство <code style={{ fontFamily: 'monospace' }}>===</code> не занимается приведением типов и сразу возвращает <code style={{ fontFamily: 'monospace' }}>false</code>, если типы данных различаются. Это защищает ваш код от багов.
                                                        </div>

                                                        {/* Явное приведение типов */}
                                                        <div style={{
                                                            borderLeft: '4px solid #10b981',
                                                            backgroundColor: '#f0fdf4',
                                                            padding: '12px 16px',
                                                            borderRadius: '0 6px 6px 0',
                                                            fontSize: '14px',
                                                            color: '#065f46',
                                                            lineHeight: '1.5'
                                                        }}>
                                                            💡 <strong>Явное приведение (Explicit Coercion):</strong> Чтобы ваш код оставался читаемым для команды, заменяйте неявную магию на явные вызовы встроенных функций-конструкторов: <code style={{ fontFamily: 'monospace' }}>{`Number("123")`}</code>, <code style={{ fontFamily: 'monospace' }}>String(42)</code>, или <code style={{ fontFamily: 'monospace' }}>Boolean(value)</code>.
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
                                                                Логические операторы как селекторы значений (||, &&, ??)
                                                            </h2>

                                                            <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                                                В JavaScript операторы <code style={{ fontFamily: 'monospace' }}>||</code> и <code style={{ fontFamily: 'monospace' }}>&&</code> не приводят результат к булеву типу, а возвращают <strong>оригинальное значение</strong> одного из операндов. Проверка идет слева направо и останавливается, как только результат становится очевиден.
                                                            </p>

                                                            {/* Ментальная модель работы операторов (Голубой блок) */}
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
                                                                    🧠 Логика вычислений по короткой схеме (Short-circuit):
                                                                </div>
                                                                <div style={{ marginBottom: '6px' }}>
                                                                    <strong>Оператор ИЛИ (||):</strong> Ищет первый <strong>Truthy</strong>. Натыкаясь на правду, он мгновенно возвращает её и прекращает проверку. Если все ложные — возвращает самый последний элемент.
                                                                </div>
                                                                <div style={{ marginBottom: '6px' }}>
                                                                    <strong>Оператор И (&&):</strong> Ищет первый <strong>Falsy</strong>. Спотыкается на лжи — сразу возвращает её. Если все элементы правдивы — возвращает самый последний Truthy.
                                                                </div>
                                                                <div>
                                                                    <strong>Оператор нулевого слияния (??):</strong> Ищет первое значение, которое НЕ является <code style={{ fontFamily: 'monospace' }}>null</code> или <code style={{ fontFamily: 'monospace' }}>undefined</code>. Все остальные Falsy-значения (ноль, пустая строка, NaN) он считает валидными данными.
                                                                </div>
                                                            </div>

                                                            {/* Текст перед кодом */}
                                                            <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                                                Примеры работы операторов и решение проблемы нуля:
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
{`// 1. Оператор || — возвращает первое truthy значение (или последнее)
console.log('Катя' || 'Гость');   // 'Катя'  ← первое truthy
console.log(''     || 'Гость');   // 'Гость' ← первое truthy
console.log(null   || 0);         // 0       ← оба falsy, вернёт последнее
console.log(0      || '');        // ''      ← оба falsy, вернёт последнее

// 2. Оператор && — возвращает первое falsy (или последнее truthy)
console.log('Катя' && 'ok');      // 'ok'   ← оба truthy, вернёт последнее
console.log(null   && 'ok');      // null   ← первое falsy
console.log(0      && 'ok');      // 0      ← первое falsy

// 🛠️ ПРАКТИКА: Подстановка значения по умолчанию
const userName = user.name || 'Гость';

// ⚠️ Опасная ловушка с числом 0:
const count = 0;
const result = count || 'нет данных';
console.log(result); // 'нет данных' — ошибка! Ноль превратился в falsy

// ✅ РЕШЕНИЕ: Nullish coalescing (??) заменяет ТОЛЬКО null и undefined
const result2 = count ?? 'нет данных';
console.log(result2); // 0 ✅ (ноль сохранен как валидное число)`}
  </pre>

                                                            {/* Маленькая фишка для реакта внизу */}
                                                            <div style={{
                                                                borderLeft: '4px solid #10b981',
                                                                backgroundColor: '#f0fdf4',
                                                                padding: '12px 16px',
                                                                borderRadius: '0 6px 6px 0',
                                                                fontSize: '14px',
                                                                color: '#065f46',
                                                                lineHeight: '1.5'
                                                            }}>
                                                                ⚛️ <strong>Применение в React JSX:</strong> Конструкция <code style={{ fontFamily: 'monospace' }}>{`{isLogged && <Dashboard />}`}</code> работает именно благодаря этому правилу. Если переменная <code style={{ fontFamily: 'monospace' }}>isLogged</code> равна <code style={{ fontFamily: 'monospace' }}>false</code>, оператор <code style={{ fontFamily: 'monospace' }}>&&</code> спотыкается на ней, возвращает <code style={{ fontFamily: 'monospace' }}>false</code>, и React просто ничего не рендерит на экран.
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>

                </div>

                <div id='closures' style={{
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
                        color: '#6d28d9',
                        margin: '0 0 12px 0'
                    }}>
                        Области видимости и Замыкания (Closures)
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        <strong>Замыкание</strong> — это способность функции в JavaScript запоминать в каком лексическом окружении ее создали и иметь доступ к переменным из родительской (внешней) функции, даже когда эта родительская функция уже <strong>завершила свою работу</strong>.
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
                            🧠 Механизм LexicalEnvironment (Лексическое окружение):
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                            <strong>Скрытый объект:</strong> Каждый раз при запуске функции или блока кода внутри движка JS создается невидимый объект <code style={{ fontFamily: 'monospace' }}>LexicalEnvironment</code>. В нём хранятся все локальные переменные текущего блока.
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                            <strong>Ссылка на родителя:</strong> Каждое лексическое окружение имеет скрытую ссылку на внешнее (родительское) окружение. Если движок не находит переменную локально, он по цепочке идет искать её наружу, вплоть до глобальной области (<code style={{ fontFamily: 'monospace' }}>window</code> / <code style={{ fontFamily: 'monospace' }}>global</code>).
                        </div>
                        <div>
                            <strong>Живая память:</strong> Замыкание возникает автоматически, когда внутренняя функция «выносится» за пределы внешней (например, возвращается через <code style={{ fontFamily: 'monospace' }}>return</code>). Поскольку внутренняя функция хранит ссылку на родительское окружение, сборщик мусора не может удалить родительские переменные из памяти.
                        </div>
                    </div>

                    {/* Текст перед кодом */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Классический пример счетчика на замыкании:
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
{`function createCounter() {
  let count = 0; // Переменная изолирована внутри LexicalEnvironment

  return function() {
    count++; // Доступна по ссылке во внешнее окружение
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2  ← count сохраняет состояние между вызовами!

// Каждый вызов createCounter создает свою независимую ячейку памяти
const counter2 = createCounter();
console.log(counter2()); // 1  ← у второго счетчика свой собственный count`}
  </pre>

                    {/* Практическое применение (Приватные данные) */}
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '24px 0 12px 0' }}>
                        🛡️ Зачем это нужно? Инкапсуляция и приватность
                    </h3>
                    <p style={{ fontSize: '15px', color: '#475569', margin: '0 0 12px 0', lineHeight: '1.6' }}>
                        Замыкания позволяют эмулировать **приватные свойства** (private методы), скрывая переменные от прямого изменения из внешнего мира. Изменить переменную `count` из примера выше напрямую через `counter1.count = 10` физически невозможно.
                    </p>

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
{`// Пример инкапсуляции данных (Генератор секретного ключа)
function createSecretStorage(secretKey) {
  return {
    getSecret: () => secretKey,
    setSecret: (newKey) => { secretKey = newKey; }
  };
}

const storage = createSecretStorage("qwerty12345");
console.log(storage.getSecret()); // "qwerty12345"
// Сама переменная secretKey скрыта в замыкании, к ней нет прямого доступа!`}
  </pre>

                    {/* Важное предупреждение (Красная сноска внизу — утечка памяти) */}
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
                        🚨 <strong>Проблема утечки памяти (Memory Leaks):</strong> Так как замыкания насильно удерживают внешние переменные в оперативной памяти, злоупотребление ими может привести к переполнению кэша. Если функция-замыкание удерживает внутри себя тяжелый объект (например, массив на миллион элементов) и ссылка на эту функцию живет глобально — этот объект никогда не будет удален Garbage {`Collector'ом`}. Для очистки нужно вручную присвоить ссылке <code style={{ fontFamily: 'monospace' }}>null</code>.
                    </div>

                    {/* Ссылка на пройденную тему */}
                    <div style={{
                        borderLeft: '4px solid #10b981',
                        backgroundColor: '#f0fdf4',
                        padding: '12px 16px',
                        borderRadius: '0 6px 6px 0',
                        fontSize: '14px',
                        color: '#065f46',
                        lineHeight: '1.5'
                    }}>
                        🔗 <strong>Связь с циклами:</strong> Помните наш разбор асинхронности в циклах? Именно благодаря тому, что оператор <code style={{ fontFamily: 'monospace' }}>let</code> на каждом шаге цикла <code style={{ fontFamily: 'monospace' }}>for</code> создает свое собственное независимое <code style={{ fontFamily: 'monospace' }}>LexicalEnvironment</code>, функция внутри <code style={{ fontFamily: 'monospace' }}>setTimeout</code> замыкает правильное, актуальное значение счетчика <code style={{ fontFamily: 'monospace' }}>i</code>, выводя <code style={{ fontFamily: 'monospace' }}>0, 1, 2</code> вместо <code style={{ fontFamily: 'monospace' }}>3, 3, 3</code> у устаревшего <code style={{ fontFamily: 'monospace' }}>var</code>.
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
                                color: '#0f172a',
                                margin: '0 0 12px 0'
                            }}>
                                Что это такое
                            </h2>

                            <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                <strong>Замыкание</strong> — это когда функция запоминает переменные из внешней области видимости, даже после того как эта область видимости перестала существовать.
                            </p>

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
{`function outer() {
  const name = 'Катя'; // Переменная во внешней функции

  function inner() {
    console.log(name); // inner видит name из outer
  }

  return inner;
}

const fn = outer(); // outer выполнилась и завершилась
fn();               // 'Катя' — но name всё ещё доступен! ✅`}
  </pre>

                            {/* Нижняя инфо-плашка с серо-зеленой линией из вашего макета */}
                            <div style={{
                                borderLeft: '4px solid #15803d', // Темно-зеленая линия слева
                                backgroundColor: '#f8fafc',
                                padding: '12px 16px',
                                borderRadius: '0 6px 6px 0',
                                fontSize: '15px',
                                lineHeight: '1.6',
                                color: '#334155',
                                fontStyle: 'italic'
                            }}>
                                <code style={{ fontFamily: 'monospace', fontStyle: 'normal', fontWeight: '600', backgroundColor: '#f1f5f9', padding: '2px 4px', borderRadius: '4px' }}>inner</code> замкнула переменную <code style={{ fontFamily: 'monospace', fontStyle: 'normal', fontWeight: '600', backgroundColor: '#f1f5f9', padding: '2px 4px', borderRadius: '4px' }}>name</code> — унесла её с собой
                            </div>
                        </div>

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
                            color: '#6d28d9',
                            margin: '0 0 12px 0'
                        }}>
                            Анатомия Лексического Окружения (Lexical Environment)
                        </h2>

                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                            Чтобы понять замыкания до конца, нужно заглянуть вглубь движка JavaScript. Концептуально, объект <strong>Лексического Окружения (LE)</strong> можно представить в виде обычной JS-структуры:
                        </p>

                        {/* Серая плашка для псевдоструктуры LE */}
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
{`const LE = {
  environmentRecords: {}, // Место, куда записываются созданные переменные
  outer: LE || null,       // Ссылка на внешнее (родительское) лексическое окружение
}`}
  </pre>

                        <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                            Работа с переменными в JS — это буквально <strong>работа с ключами объекта environmentRecords</strong>.
                            LE формируется для всего скрипта (<code style={{ fontFamily: 'monospace' }}>globalLE</code>), для каждой функции в момент её вызова (<code style={{ fontFamily: 'monospace' }}>functionalLE</code>) и для блоков кода (<code style={{ fontFamily: 'monospace' }}>if</code>, <code style={{ fontFamily: 'monospace' }}>for</code>).
                            <strong>Важно:</strong> Обычный объект <code style={{ fontFamily: 'monospace' }}>{`{}`}</code> лексическое окружение НЕ формирует!
                        </p>

                        {/* Ментальный блок с жизненным циклом переменной (Фиолетовый) */}
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
                                ✍️ Эволюция глобального окружения (Мутация LE на примере):
                            </div>
                            <pre style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '4px', margin: '0 0 8px 0', border: '1px solid #ede9fe', color: '#0f172a' }}>
{`// Глобальное лексическое окружение изначально: {} --> null

let car;       // LE: { car: undefined } --> null
car = 'Toyota'; // LE: { car: 'Toyota' }    --> null
car = 'Ferrari';// LE: { car: 'Ferrari' }   --> null`}
    </pre>
                        </div>

                        <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '24px 0 12px 0' }}>
                            ⚙️ Жизненный цикл окружения при вызове функций
                        </h3>
                        <p style={{ fontSize: '15px', color: '#475569', margin: '0 0 12px 0', lineHeight: '1.6' }}>
                            В момент вызова функции создается её собственный объект LE. Туда записываются все её внутренние переменные и входящие параметры. На примере ниже показан точный хронологический порядок изменения объектов LE:
                        </p>

                        <pre style={{
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            padding: '16px',
                            overflowX: 'auto',
                            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                            fontSize: '14px',
                            color: '#0f172a',
                            margin: '0 0 24px 0',
                            whiteSpace: 'pre',
                            lineHeight: '1.5'
                        }}>
{`// globalLE {} --> null

const startEngine = function () {
  // В момент вызова создаётся: startEngineLE {} --> globalLE
  const car = 'kia'; // startEngineLE { car: 'kia' } --> globalLE
  console.log(\`Start \${car}\`);
}

let car = 'bmw'; // globalLE { car: 'bmw', startEngine: function } --> null

startEngine(); // Создает LE, выводит "Start kia", после выполнения LE уничтожается

car = 'audi';    // globalLE { car: 'audi', startEngine: function } --> null

startEngine(); // Создает НОВОЕ LE, снова уничтожает его после работы`}
  </pre>

                        <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '24px 0 12px 0' }}>
                            🔄 Итоговый разбор счетчика: Рождение Замыкания
                        </h3>

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
{`const counterCreator = () => {
  let count = 0; // Находится в counterCreatorLE

  return () => {
    console.log(count++); // Тянет ссылку из родительского counterCreatorLE
  };
};

const counter1 = counterCreator(); 
// Функция выполнилась, но её LE не удалено, потому что counter1 удерживает на него ссылку!

counter1(); // 0 (внутри counterCreatorLE переменная count стала 1)
counter1(); // 1 (внутри counterCreatorLE переменная count стала 2)
counter1(); // 2`}
  </pre>

                        {/* Важное различие теории для собеседований */}
                        <div style={{
                            borderLeft: '4px solid #10b981',
                            backgroundColor: '#f0fdf4',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#065f46',
                            lineHeight: '1.6'
                        }}>
                            💡 <strong>Разница понятий (Для интервью):</strong>
                            <ul style={{ paddingLeft: '16px', margin: '4px 0 0 0', listStyleType: 'circle' }}>
                                <li><strong>Лексическая область видимости (Lexical Scoping):</strong> Это заложенная в язык возможность функции просто заглядывать во внешнее окружение.</li>
                                <li><strong>Замыкание (Closure):</strong> Это физический процесс, когда внутренняя функция сохраняется во внешней переменной и продолжает насильно «удерживать» живой доступ к родительскому объекту LE даже после полного завершения работы внешней функции.</li>
                            </ul>
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
                                    color: '#6d28d9',
                                    margin: '0 0 12px 0'
                                }}>
                                    Лексическое окружение в блоках кода (if, for)
                                </h2>

                                <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                    Объекты лексического окружения создаются в JavaScript не только для функций, но и для любых блоков кода, ограниченных фигурными скобками <code style={{ fontFamily: 'monospace' }}>{`{}`}</code> — таких как ветвления <code style={{ fontFamily: 'monospace' }}>if</code>, <code style={{ fontFamily: 'monospace' }}>switch</code>, и циклы <code style={{ fontFamily: 'monospace' }}>for</code>, <code style={{ fontFamily: 'monospace' }}>while</code>.
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
                                        🧠 Блочная область видимости и скрытый outer:
                                    </div>
                                    <div style={{ marginBottom: '6px' }}>
                                        <strong>Локальный блок:</strong> Переменные, объявленные через <code style={{ fontFamily: 'monospace', color: '#be123c' }}>let</code> или <code style={{ fontFamily: 'monospace', color: '#be123c' }}>const</code> внутри фигурных скобок, записываются в <code style={{ fontFamily: 'monospace' }}>environmentRecords</code> этого блока.
                                    </div>
                                    <div style={{ marginBottom: '6px' }}>
                                        <strong>Временная жизнь:</strong> Как только выполнение кода доходит до закрывающей фигурной скобки блока, его объект LE уничтожается и стирается из памяти (если на него никто не сделал замыкание).
                                    </div>
                                    <div>
                                        <strong>Связь наружу:</strong> Свойство <code style={{ fontFamily: 'monospace' }}>outer</code> блочного окружения ссылается на то место, где этот блок был запущен. Изнутри блока можно читать внешние переменные, но снаружи заглянуть внутрь блока нельзя.
                                    </div>
                                </div>

                                {/* Текст перед кодом */}
                                <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                    Пример 1: Лексическое окружение блока IF
                                </div>

                                {/* Серая плашка для кода IF */}
                                <pre style={{
                                    backgroundColor: '#f8fafc',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '6px',
                                    padding: '16px',
                                    overflowX: 'auto',
                                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                                    fontSize: '14px',
                                    color: '#0f172a',
                                    margin: '0 0 24px 0',
                                    whiteSpace: 'pre',
                                    lineHeight: '1.5'
                                }}>
{`// globalLE: { userName: "Катя" } --> null
const userName = "Катя";

if (true) {
  // Входим в блок: создаётся blockLE: { age: 25 } --> globalLE
  const age = 25;
  
  console.log(userName); // "Катя" (Взято снаружи по ссылке outer)
  console.log(age);      // 25     (Найдено локально)
} 

// Вышли из блока: blockLE полностью уничтожен!
console.log(age);        // ReferenceError: age is not defined ❌`}
  </pre>

                                {/* Текст перед кодом FOR */}
                                <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                    Пример 2: Магия лексического окружения в цикле FOR
                                </div>
                                <p style={{ fontSize: '14px', color: '#475569', margin: '0 0 12px 0', lineHeight: '1.5' }}>
                                    Цикл <code style={{ fontFamily: 'monospace' }}>for</code> устроен уникально: для <strong>каждого шага (итерации)</strong> цикла создаётся своё **собственное, отдельное лексическое окружение**. Переменная <code style={{ fontFamily: 'monospace' }}>i</code> копируется в новое окружение на каждом круге.
                                </p>

                                {/* Серая плашка для кода FOR */}
                                <pre style={{
                                    backgroundColor: '#f8fafc',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '6px',
                                    padding: '16px',
                                    overflowX: 'auto',
                                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                                    fontSize: '14px',
                                    color: '#0f172a',
                                    margin: '0 0 24px 0',
                                    whiteSpace: 'pre',
                                    lineHeight: '1.5'
                                }}>
{`for (let i = 0; i < 3; i++) {
  // Шаг 0: loopStep0_LE: { i: 0 } --> globalLE
  // Шаг 1: loopStep1_LE: { i: 1 } --> globalLE
  // Шаг 2: loopStep2_LE: { i: 2 } --> globalLE
  
  setTimeout(() => {
    // Каждая стрелочная функция замыкает СВОЙ объект LE конкретного шага!
    console.log(i); 
  }, 100);
}
// Выведет через 100мс: 0, 1, 2 ✅ (Каждая функция помнит свой i)`}
  </pre>

                                {/* Важное предупреждение для собеседований (Проблема старого var) */}
                                <div style={{
                                    borderLeft: '4px solid #ef4444',
                                    backgroundColor: '#fef2f2',
                                    padding: '12px 16px',
                                    borderRadius: '0 6px 6px 0',
                                    fontSize: '14px',
                                    color: '#991b1b',
                                    lineHeight: '1.5'
                                }}>
                                    🚨 <strong>Почему var ломает эту логику:</strong> Ключевое слово <code style={{ fontFamily: 'monospace' }}>var</code> полностью игнорирует блочные лексические окружения. Переменная, созданная через <code style={{ fontFamily: 'monospace' }}>var</code> внутри <code style={{ fontFamily: 'monospace' }}>if</code> или <code style={{ fontFamily: 'monospace' }}>for</code>, записывается напрямую в верхнее <strong>родительское/глобальное окружение</strong>. Из-за этого циклы с <code style={{ fontFamily: 'monospace' }}>var</code> выдают знаменитый баг <code style={{ fontFamily: 'monospace' }}>3, 3, 3</code> в асинхронном коде, так как объект шага не изолируется.
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div id="promises" style={{
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
                    {/* Верхняя индиго-полоса карточки */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        backgroundColor: '#6366f1'
                    }} />

                    {/* Заголовок */}
                    <h2 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#4338ca',
                        margin: '0 0 12px 0'
                    }}>
                        Глубокий разбор объектов Promise (Промисы)
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        <strong>Promise (Промис)</strong> — это специальный объект в JavaScript, который служит «контейнером» для результата асинхронной операции, который пока еще неизвестен, но будет получен в будущем. Промис избавляет от ада колбэков (Callback Hell), позволяя выстраивать удобные цепочки вызовов.
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
                            ⏳ Ментальная модель: Три состояния и два колбэка
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            Промис создается через конструктор <code style={{ fontFamily: 'monospace' }}>new Promise((resolve, reject) =&gt; {`{...}`})</code> и всегда находится в одном из 3-х состояний:
                        </div>
                        <ul style={{ paddingLeft: '16px', margin: '0 0 12px 0', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '4px' }}><strong>Pending (Ожидание):</strong> Начальное состояние. Асинхронное действие еще не завершилось (например, запрос к API летит по сети).</li>
                            <li style={{ marginBottom: '4px' }}><strong>Fulfilled (Выполнено успешно):</strong> Операция завершена успешно. Вызывается функция <code style={{ fontFamily: 'monospace', color: '#16a34a', fontWeight: '700' }}>resolve(value)</code>.</li>
                            <li><strong>Rejected (Выполнено с ошибкой):</strong> Произошел сбой. Вызывается функция <code style={{ fontFamily: 'monospace', color: '#dc2626', fontWeight: '700' }}>reject(error)</code>.</li>
                        </ul>
                        <div>
                            📌 <strong>Важное правило:</strong> Состояние меняется только <strong>один раз</strong> и навсегда. Если промис перешел в статус <em>fulfilled</em>, он больше никогда не сможет стать <em>rejected</em>.
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
                        {/* Верхняя индиго-полоса карточки */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#6366f1'
                        }} />

                        {/* Заголовок */}
                        <h2 style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#4338ca',
                            margin: '0 0 12px 0'
                        }}>
                            Функция-исполнитель в Промисе (Executor)
                        </h2>

                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                            Конструктор <code style={{ fontFamily: 'monospace' }}>new Promise()</code> принимает в качестве единственного аргумента функцию-колбэк. Эта функция запускается движком JavaScript автоматически и управляет запуском асинхронной задачи.
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
                                🧠 Три главных правила функции-исполнителя:
                            </div>
                            <div style={{ marginBottom: '6px' }}>
                                <strong>1. Абсолютная синхронность:</strong> Код внутри этой функции выполняется <strong>мгновенно и синхронно</strong> прямо в текущем потоке! Асинхронным промис становится только тогда, когда внутри этой функции вызываются Web API (например, <code style={{ fontFamily: 'monospace' }}>fetch</code> или <code style={{ fontFamily: 'monospace' }}>setTimeout</code>).
                            </div>
                            <div style={{ marginBottom: '6px' }}>
                                <strong>2. Два встроенных рычага управления:</strong> Сам движок JS автоматически передаёт в вашу функцию два аргумента-колбэка: <code style={{ fontFamily: 'monospace', color: '#16a34a', fontWeight: '700' }}>resolve</code> (вызывать при успехе) и <code style={{ fontFamily: 'monospace', color: '#dc2626', fontWeight: '700' }}>reject</code> (вызывать при ошибке).
                            </div>
                            <div>
                                <strong>3. Одноразовый переключатель:</strong> Исполнитель должен вызвать только <strong>один</strong> из двух рычагов и только <strong>один раз</strong>. Все последующие вызовы <code style={{ fontFamily: 'monospace' }}>resolve()</code> или <code style={{ fontFamily: 'monospace' }}>reject()</code> внутри функции будут намертво проигнорированы движком.
                            </div>
                        </div>

                        {/* Текст перед кодом */}
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                            Доказательство синхронности и правила вызовов:
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
{`console.log("1: Старт скрипта");

const myPromise = new Promise((resolve, reject) => {
  // Код внутри этой функции выполняется СИНХРОННО!
  console.log("2: Код исполнителя внутри промиса"); 
  
  resolve("Данные"); // Сменили состояние на fulfilled
  
  reject("Ошибка");  // Игнорируется! Состояние нельзя изменить дважды.
  console.log("3: Код после resolve (тоже выполнится)");
});

myPromise.then(res => console.log("4: .then поймал:", res));

console.log("5: Конец скрипта");

// 📊 ТОЧНЫЙ ПОРЯДОК ВЫВОДА В КОНСОЛЬ:
// 1: Старт скрипта
// 2: Код исполнителя внутри промиса
// 3: Код после resolve (тоже выполнится)
// 5: Конец скрипта
// 4: .then поймал: Данные (Ушло в микрозадачи Event Loop)`}
  </pre>

                        {/* Важное предупреждение (Красная сноска внизу — неявный try...catch) */}
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
                            🚨 <strong>Автоматический встроенный try...catch:</strong> Вокруг функции-исполнителя движком JavaScript невидимо обёрнута конструкция перехвата ошибок. Если внутри этого кода случится непредвиденная ошибка (например, опечатка в переменной), промис не обрушит приложение, а автоматически перейдёт в состояние <code style={{ fontFamily: 'monospace' }}>rejected</code>, будто вы вручную вызвали <code style={{ fontFamily: 'monospace' }}>reject(error)</code>.
                        </div>

                        {/* Ограничение return */}
                        <div style={{
                            borderLeft: '4px solid #f59e0b',
                            backgroundColor: '#fef3c7',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#78350f',
                            lineHeight: '1.5'
                        }}>
                            🛑 <strong>Бесполезность return:</strong> Возвращать значение через оператор <code style={{ fontFamily: 'monospace' }}>{`return "успех"`}</code>
                            из функции-исполнителя абсолютно бессмысленно. Движок полностью игнорирует результат работы этой функции. Единственный способ передать что-то во внешний мир — вызвать <code style={{ fontFamily: 'monospace' }}>resolve()</code>.
                        </div>
                    </div>

                    {/* Текст перед кодом */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Создание промиса и обработка через .then / .catch / .finally:
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
{`// 1. Создаем промис (обертку над асинхронным таймером)
const checkAvailability = new Promise((resolve, reject) => {
  const isAvailable = true; // Имитация условия

  setTimeout(() => {
    if (isAvailable) {
      resolve("Товар на складе!"); // Успех -> передаем данные наружу
    } else {
      reject("Товара нет в наличии"); // Сбой -> передаем ошибку
    }
  }, 1000);
});

// 2. Потребляем результат (Consumer методы)
checkAvailability
  .then((data) => {
    console.log("Успех:", data); // Отработает, если вызвался resolve()
    return "Следующий шаг";      // chain-эффект: возвращенное значение летит в следующий .then
  })
  .then((nextData) => {
    console.log(nextData);      // "Следующий шаг"
  })
  .catch((error) => {
    console.error("Ошибка:", error); // Отработает, если вызвался reject()
  })
  .finally(() => {
    console.log("Операция завершена"); // Отработает ВСЕГДА (и при успехе, и при ошибке)
  });`}
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
                        position: 'relative',
                        overflow: 'hidden',
                        marginTop: '32px'
                    }}>
                        {/* Верхняя индиго-полоса карточки */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#6366f1'
                        }} />

                        {/* Заголовок */}
                        <h2 style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#4338ca',
                            margin: '0 0 12px 0'
                        }}>
                            Методы обработки Промисов (.then, .catch, .finally)
                        </h2>

                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                            Объект промиса является связующим звеном между асинхронным кодом и кодом, который ждет его результат. Для того чтобы получить данные, которыми зарезолвился промис, или ошибку, из-за которой он зареджектился, используются специальные методы-потребители.
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
                                ✍️ Разбор анатомии трех методов:
                            </div>
                            <div style={{ marginBottom: '6px' }}>
                                <strong>.then(onFulfilled, onRejected):</strong> Самый важный метод. Принимает колбэк, который автоматически запускается, когда промис переходит в состояние успешного выполнения (<code style={{ fontFamily: 'monospace' }}>fulfilled</code>), и получает переданный результат.
                            </div>
                            <div style={{ marginBottom: '6px' }}>
                                <strong>.catch(onRejected):</strong> Используется исключительно для обработки ошибок. Он мгновенно срабатывает, если промис упал в статус <code style={{ fontFamily: 'monospace' }}>rejected</code> или внутри исполнителя произошла непредвиденная ошибка компиляции.
                            </div>
                            <div>
                                <strong>.finally(onFinally):</strong> Колбэк запускается в самый последний момент, когда промис завершен. Он не знает, был ли запрос успешным или ошибочным — у него нет аргументов. Нужен для очистки «мусора»: отключения индикаторов загрузки (лоадеров), закрытия модальных окон или сброса форм.
                            </div>
                        </div>

                        {/* Текст перед кодом */}
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                            Пример чейнинга (построения цепочек вызовов):
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
{`const loadData = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ id: 1, name: "Катя" }), 1000);
});

loadData
  .then((user) => {
    console.log("Данные получены:", user); // { id: 1, name: "Катя" }
    // 🔥 Любой return внутри .then автоматически заворачивается в НОВЫЙ промис
    return user.name; 
  })
  .then((name) => {
    console.log("Имя из цепочки:", name);  // "Катя"
  })
  .catch((error) => {
    console.error("Поймали ошибку:", error); // Сюда прилетит любой сбой из цепочки выше
  })
  .finally(() => {
    console.log("Потоковая очистка ресурсов"); // Отработает при любом исходе
  });`}
  </pre>

                        {/* Важное предупреждение для Next.js */}
                        <div style={{
                            borderLeft: '4px solid #ef4444',
                            backgroundColor: '#fef2f2',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#991b1b',
                            lineHeight: '1.5'
                        }}>
                            🚨 <strong>Ловушка сквозной ошибки:</strong> Если ошибка произошла на самом первом этапе, а метод <code style={{ fontFamily: 'monospace' }}>.catch()</code> стоит в самом низу длинной цепочки из пяти <code style={{ fontFamily: 'monospace' }}>.then()</code> — JavaScript не упадет. Ошибка будет прокидываться сквозь все <code style={{ fontFamily: 'monospace' }}>.then()</code>, пропуская их выполнение, пока не доберется до ближайшего обработчика ошибок.
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
                        {/* Верхняя индиго-полоса карточки */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#6366f1'
                        }} />

                        {/* Заголовок */}
                        <h2 style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#4338ca',
                            margin: '0 0 12px 0'
                        }}>
                            Подробная спецификация методов обработки Промисов
                        </h2>

                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                            Методы <code style={{ fontFamily: 'monospace' }}>.then()</code>, <code style={{ fontFamily: 'monospace' }}>.catch()</code> и <code style={{ fontFamily: 'monospace' }}>.finally()</code> называют потребителями промиса. Каждый из них подчиняется строгим правилам автоматического перезапуска цепочки.
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
                                🧠 Спецификация поведения под капотом движка JS:
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <strong>• .then(onFulfilled, onRejected):</strong> Срабатывает в случае резолва промиса и вызывает переданный коллбек, в который поместит результат из функции <code style={{ fontFamily: 'monospace' }}>resolve()</code>.
                                <div style={{ paddingLeft: '12px', marginTop: '4px', color: '#5b21b6', fontSize: '13px' }}>
                                    👉 <strong>Скрытая фишка:</strong> Может принимать <em>два</em> коллбека. Второй аргумент делает абсолютно то же самое, что и метод <code style={{ fontFamily: 'monospace' }}>.catch()</code>, отлавливая ошибку текущего промиса.
                                </div>
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <strong>• .catch(onRejected):</strong> Срабатывает в случае реджекта промиса и вызывает переданный коллбек, в который поместит ошибку из функции <code style={{ fontFamily: 'monospace' }}>reject()</code>.
                            </div>

                            <div>
                                <strong>• .finally(onFinally):</strong> Срабатывает в любом случае (при резолве или реджекте) и вызывает коллбек, в который <strong>ничего не помещает</strong> (нет аргументов).
                            </div>
                        </div>

                        {/* Механизм возврата Промисов (Зеленая плашка) */}
                        <div style={{
                            borderLeft: '4px solid #10b981',
                            backgroundColor: '#f0fdf4',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#065f46',
                            lineHeight: '1.6',
                            marginBottom: '24px'
                        }}>
                            🔄 <strong>Железное правило Chaining (Цепочек):</strong> Абсолютно каждый из этих трех методов после своей отработки <strong>автоматически возвращает новый промис</strong>.
                            <ul style={{ paddingLeft: '16px', margin: '4px 0 0 0', listStyleType: 'circle' }}>
                                <li>Этот новый промис автоматически <strong>резолвится</strong>, если внутри коллбека не возникло ошибок и вы не вернули оттуда другой промис вручную.</li>
                                <li>В случае возникновения ошибки (через <code style={{ fontFamily: 'monospace' }}>throw</code> или баг в коде), возвращаемый промис автоматически <strong>реджектится</strong>.</li>
                            </ul>
                        </div>

                        {/* Текст перед кодом */}
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                            Пример использования двух коллбеков в .then() и продолжения цепочки после .catch():
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
{`const myPromise = new Promise((resolve, reject) => {
  reject("Упс, сбой системы!");
});

// 1. Двойной коллбек в .then()
myPromise.then(
  (data) => console.log("Успех:", data),
  (err) => console.log("Поймали ошибку в самом .then():", err) // Сработает этот коллбек
);

// 2. Доказательство автоматического резолва после .catch()
const brokenPromise = new Promise((_, reject) => reject("Ошибка"));

brokenPromise
  .catch((err) => {
    console.log("Откат ошибки:", err);
    return "Новые чистые данные"; // Возвращаем обычную строку
  })
  .then((data) => {
    // Этот .then СРАБОТАЕТ, потому что .catch вернул автоматически зарезолвленный промис!
    console.log("Цепочка спасена:", data); // "Цепочка спасена: Новые чистые данные" ✅
  });`}
  </pre>
                        <div style={{
                            borderLeft: '4px solid #ef4444',
                            backgroundColor: '#fef2f2',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#991b1b',
                            lineHeight: '1.5'
                        }}>
                            🚨 <strong>Тонкая разница для собеседования:</strong> Конструкция <code style={{ fontFamily: 'monospace' }}>.then(success, fail)</code> отличается от <code style={{ fontFamily: 'monospace' }}>.then(success).catch(fail)</code>. Если ошибка произойдет внутри самого коллбека <code style={{ fontFamily: 'monospace' }}>success</code>, то второй аргумент <code style={{ fontFamily: 'monospace' }}>fail</code> внутри того же `.then` её <strong>не поймает</strong>. А вот идущий следом метод <code style={{ fontFamily: 'monospace' }}>.catch()</code> перехватит её без проблем.
                        </div>
                        <div style={{ marginTop: '24px', fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif' }}>
                            {/* Подзаголовок в стиле вашего скриншота */}
                            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 12px 0' }}>
                                Важные особенности .finally
                            </h3>

                            {/* Серая плашка для кода со скриншота */}
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
{`// 1. Не получает аргументов
Promise.resolve(42)
  .finally((val) => console.log(val)) // undefined — значение не передаётся в коллбек
  .then(val => console.log(val))      // 42 — первоначальное значение прошло сквозь finally ✅

// 2. Не может изменить результат (если return — он игнорируется)
Promise.resolve(42)
  .finally(() => 'другое значение')   // return полностью игнорируется движком
  .then(val => console.log(val))      // 42 — цепочка сохранила исходный результат

// 3. Но может прервать цепочку ошибкой
Promise.resolve(42)
  .finally(() => { throw new Error('стоп') }) // Выбрасываем критическую ошибку
  .then(val => console.log(val))      // не выполнится (цепочка прервана)
  .catch(err => console.log(err.message)) // 'стоп' — ошибка перехвачена здесь`}
  </pre>
                        </div>

                        {/* Каверзный нюанс для интервью внизу */}

                    </div>

                    {/* Статические методы (Интервью-база) */}
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '24px 0 12px 0' }}>
                        🚀 Статические методы класса Promise (Комбинаторы)
                    </h3>
                    <p style={{ fontSize: '15px', color: '#475569', margin: '0 0 12px 0', lineHeight: '1.6' }}>
                        Когда нужно управлять сразу несколькими асинхронными запросами одновременно, используются встроенные статические методы:
                    </p>

                    <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '0 0 24px 0', fontSize: '14px', lineHeight: '1.6' }}>
                        <li style={{ display: 'flex', alignItems: 'start', gap: '8px', marginBottom: '10px' }}>
                            <span style={{ color: '#6366f1', flexShrink: 0 }}>▪</span>
                            <div><strong>Promise.all([p1, p2, p3]):</strong> Ждет выполнения <strong>всех</strong> промисов. Возвращает массив результатов. Если хотя бы один промис упадет в <code style={{ fontFamily: 'monospace' }}>reject</code>, весь метод мгновенно падает с этой ошибкой, игнорируя остальные успешные запросы.</div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'start', gap: '8px', marginBottom: '10px' }}>
                            <span style={{ color: '#6366f1', flexShrink: 0 }}>▪</span>
                            <div><strong>Promise.allSettled([p1, p2, p3]):</strong> Появился в ES2020. Безопасная альтернатива. Ждет завершения всех промисов (неважно, успешно или с ошибкой) и возвращает массив объектов со статусами <code style={{ fontFamily: 'monospace' }}>{`{ status: "fulfilled", value: ... }`}</code> или <code style={{ fontFamily: 'monospace' }}>{`{ status: "rejected", reason: ... }`}</code>.</div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'start', gap: '8px', marginBottom: '10px' }}>
                            <span style={{ color: '#6366f1', flexShrink: 0 }}>▪</span>
                            <div><strong>Promise.race([p1, p2, p3]):</strong> Устраивает «гонку». Возвращает результат того промиса, который выполнился (или упал) <strong>быстрее всех</strong>. Результаты остальных просто игнорируются.</div>
                        </li>
                    </ul>
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

                        {/* Заголовок таблицы в стиле вашего скриншота */}
                        <h2 style={{
                            fontSize: '22px',
                            fontWeight: '800',
                            color: '#0f172a',
                            margin: '0 0 20px 0',
                            letterSpacing: '-0.02em'
                        }}>
                            Сравнительная таблица методов Promise
                        </h2>

                        {/* Таблица с адаптивным контейнером */}
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                fontSize: '15px',
                                textAlign: 'left'
                            }}>
                                <thead>
                                <tr style={{ color: '#64748b', fontWeight: '600', borderBottom: '1px solid #e2e8f0' }}>
                                    <th style={{ padding: '12px 16px', width: '25%' }}>Метод</th>
                                    <th style={{ padding: '12px 16px', width: '20%' }}>Ждёт</th>
                                    <th style={{ padding: '12px 16px', width: '25%' }}>Успех</th>
                                    <th style={{ padding: '12px 16px', width: '30%' }}>Ошибка</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '14px 16px' }}>
                                        <code style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace', fontWeight: '600', color: '#0f172a' }}>Promise.all</code>
                                    </td>
                                    <td style={{ padding: '14px 16px' }}>Все</td>
                                    <td style={{ padding: '14px 16px' }}>Массив всех значений</td>
                                    <td style={{ padding: '14px 16px', color: '#64748b' }}>Первая ошибка (остальные теряются)</td>
                                </tr>
                                <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '14px 16px' }}>
                                        <code style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace', fontWeight: '600', color: '#0f172a' }}>Promise.allSettled</code>
                                    </td>
                                    <td style={{ padding: '14px 16px' }}>Все</td>
                                    <td style={{ padding: '14px 16px' }}>
                                        Массив <code style={{ fontFamily: 'monospace', fontSize: '14px' }}>{`{status, value/reason}`}</code>
                                    </td>
                                    <td style={{ padding: '14px 16px', color: '#64748b' }}>Никогда не отклоняется</td>
                                </tr>
                                <tr style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
                                    <td style={{ padding: '14px 16px' }}>
                                        <code style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace', fontWeight: '600', color: '#0f172a' }}>Promise.race</code>
                                    </td>
                                    <td style={{ padding: '14px 16px' }}>Первый (любой)</td>
                                    <td style={{ padding: '14px 16px' }}>Значение первого</td>
                                    <td style={{ padding: '14px 16px', color: '#64748b' }}>Ошибка, если первый упал</td>
                                </tr>
                                <tr style={{ backgroundColor: '#f8fafc' }}>
                                    <td style={{ padding: '14px 16px' }}>
                                        <code style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace', fontWeight: '600', color: '#0f172a' }}>Promise.any</code>
                                    </td>
                                    <td style={{ padding: '14px 16px' }}>Первый успешный</td>
                                    <td style={{ padding: '14px 16px' }}>Значение первого успешного</td>
                                    <td style={{ padding: '14px 16px', color: '#64748b' }}>
                                        <code style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '2px 4px', borderRadius: '4px', fontFamily: 'monospace' }}>AggregateError</code> если все упали
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>


                    {/* Важное предупреждение для Next.js */}
                    <div style={{
                        borderLeft: '4px solid #ef4444',
                        backgroundColor: '#fef2f2',
                        padding: '12px 16px',
                        borderRadius: '0 6px 6px 0',
                        fontSize: '14px',
                        color: '#991b1b',
                        lineHeight: '1.5'
                    }}>
                        🚨 <strong>Ловушка синхронного конструктора:</strong> Тело самого конструктора <code style={{ fontFamily: 'monospace' }}>new Promise((resolve, reject) =&gt; {`{...}`})</code> выполняется **синхронно и мгновенно** в момент создания! Асинхронными являются исключительно его методы-обработчики (<code style={{ fontFamily: 'monospace' }}>.then</code>, <code style={{ fontFamily: 'monospace' }}>.catch</code>), которые отправляют колбэки в очередь микрозадач Event Loop.
                    </div>
                </div>

                <div id="asyncAwait" style={{
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
                    {/* Верхняя индиго-полоса карточки */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        backgroundColor: '#6366f1'
                    }} />

                    {/* Заголовок */}
                    <h2 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#4338ca',
                        margin: '0 0 12px 0'
                    }}>
                        Современный асинхронный код: async/await
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        Конструкция <strong>async/await</strong> (появилась в ES2017) — это специальный «синтаксический сахар» над Промисами. Она позволяет писать асинхронный код так, будто он выполняется последовательно и синхронно, полностью избавляя от нагромождения цепочек методов <code style={{ fontFamily: 'monospace' }}>.then()</code> и <code style={{ fontFamily: 'monospace' }}>.catch()</code>.
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
                            🧠 Ментальная модель работы ключевых слов:
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                            <strong>Ключевое слово async:</strong> Ставится строго перед объявлением функции. Оно сообщает движку JS две вещи: во-первых, внутри функции разрешено использовать <code style={{ fontFamily: 'monospace' }}>await</code>, а во-вторых — эта функция теперь <strong>всегда принудительно возвращает Промис</strong>.
                        </div>
                        <div>
                            <strong>Ключевое слово await:</strong> Ставится исключительно внутри <code style={{ fontFamily: 'monospace' }}>async</code>-функции перед вызовом промиса. Оно буквально <strong>ставит на паузу</strong> выполнение кода функции до тех пор, пока промис не выполнится. При этом поток самого JavaScript не блокируется — движок просто переключается на другие задачи.
                        </div>
                    </div>
                    <div style={{ marginTop: '24px', fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif' }}>
                        {/* Подзаголовок в стиле вашего скриншота */}
                        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 12px 0' }}>
                            async функция
                        </h3>

                        {/* Серая плашка для кода со скриншота */}
                        <pre style={{
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            padding: '16px',
                            overflowX: 'auto',
                            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                            fontSize: '14px',
                            color: '#0f172a',
                            margin: '0 0 16px 0',
                            whiteSpace: 'pre',
                            lineHeight: '1.5'
                        }}>
{`async function fetchMovie() {
  return 42;
}

// 🔄 Эквивалентно:
function fetchMovie() {
  return Promise.resolve(42);
}

fetchMovie().then(console.log); // 42`}
  </pre>

                        {/* Ключевое правило снизу плашки */}
                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.5', margin: '12px 0 20px 0' }}>
                            📌 <strong>Ключевое правило:</strong> <code style={{ backgroundColor: '#f1f5f9', padding: '2px 4px', borderRadius: '4px', fontFamily: 'monospace' }}>async</code> функция всегда возвращает Promise, даже если ты возвращаешь обычное значение.
                        </p>
                    </div>

                    {/* Текст перед кодом */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Сравнение классических цепочек Промисов и async/await:
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
{`// Имитируем запрос данных о пользователе
const fetchUser = () => new Promise(res => setTimeout(() => res({ id: 1, name: "Катя" }), 1000));

// ❌ Старый подход через цепочки .then()
function oldWay() {
  fetchUser()
    .then(user => console.log("Old:", user.name))
    .catch(err => console.error(err));
}

// 🟢 Современный подход через async/await
async function modernWay() {
  try {
    // Код замрёт на этой строке на 1 секунду, пока fetchUser не вернет результат
    const user = await fetchUser(); 
    console.log("Modern:", user.name); // "Modern: Катя"
  } catch (error) {
    // Все ошибки (и реджекты промисов, и баги кода) отлавливаются здесь!
    console.error("Поймали сбой запроса:", error);
  }
}

modernWay();`}
  </pre>

                    {/* Важное предупреждение для интервью */}
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
                        🚨 <strong>Ловушка неявного Промиса:</strong> Если вы возвращаете из асинхронной функции обычную строку (например, return <code style={{ fontFamily: 'monospace' }}>return &quot;Успешно&quot;</code>
                        ), движок под капотом автоматически обернёт её в зарезолвленный промис <code style={{ fontFamily: 'monospace' }}>{`Promise.resolve( "Успешно" )`}</code>. Поэтому во внешнем коде вы не сможете прочитать эту строку напрямую — вам придётся либо заавейтить саму функцию (<code style={{ fontFamily: 'monospace' }}>await myAsyncFunc()</code>), либо обработать её через <code style={{ fontFamily: 'monospace' }}>.then()</code>.
                    </div>

                    {/* Обработка ошибок */}
                    <div style={{
                        borderLeft: '4px solid #10b981',
                        backgroundColor: '#f0fdf4',
                        padding: '12px 16px',
                        borderRadius: '0 6px 6px 0',
                        fontSize: '14px',
                        color: '#065f46',
                        lineHeight: '1.5'
                    }}>
                        💡 <strong>Обработка ошибок через try...catch:</strong> В мире <code style={{ fontFamily: 'monospace' }}>async/await</code> больше не нужен метод <code style={{ fontFamily: 'monospace' }}>.catch()</code>. Для перехвата ошибок используется стандартная синхронная конструкция <code style={{ fontFamily: 'monospace', fontWeight: '700' }}>try / catch</code>. Оборачивайте асинхронные блоки кода в неё всегда, чтобы забытый упавший запрос к серверу не приводил к критической ошибке приложения.
                    </div>
                </div>
                <div id="eventLoop" style={{
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
                    {/* Верхняя индиго-полоса карточки */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        backgroundColor: '#6366f1'
                    }} />

                    {/* Заголовок */}
                    <h2 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#4338ca',
                        margin: '0 0 12px 0'
                    }}>
                        Механизм Event Loop: Микрозадачи и Макрозадачи
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        Поскольку JavaScript является однопоточным языком, он может выполнять только одну задачу в один момент времени. <strong>Event Loop (Цикл событий)</strong> — это бесконечный цикл внутри движка, который координирует выполнение кода, распределяя асинхронные операции по разным очередям в зависимости от их приоритета.
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
                            🔄 Строгий алгоритм работы Event Loop (Приоритеты):
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            Каждый «оборот» цикла событий подчиняется железному порядку выполнения:
                        </div>
                        <ul style={{ paddingLeft: '16px', margin: '0 0 12px 0', listStyleType: 'decimal' }}>
                            <li style={{ marginBottom: '6px' }}><strong>Выполнение Call Stack (Синхронный код):</strong> Движок полностью опустошает стек вызовов. Синхронный код всегда выполняется первым.</li>
                            <li style={{ marginBottom: '6px' }}><strong>Выполнение ВСЕХ Микрозадач:</strong> Как только стек опустел, Event Loop заглядывает в очередь микрозадач. Он не сдвинется с места, пока эта очередь не станет абсолютно пустой. Если микрозадача порождает новую микрозадачу, она тоже выполнится в этом же цикле.</li>
                            <li style={{ marginBottom: '6px' }}><strong>Рендеринг страницы (UI Render):</strong> Браузер обновляет экран и перерисовывает интерфейс (если это необходимо).</li>
                            <li><strong>Выполнение ОДНОЙ Макрозадачи:</strong> Из очереди макрозадач берется ровно <strong>одна</strong> самая старая задача, отправляется в стек и выполняется. После этого весь цикл (начиная с проверки микрозадач) запускается заново.</li>
                        </ul>
                    </div>

                    {/* Разделение по типам задач */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Что к какой очереди относится:
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                        {/* Микрозадачи */}
                        <div style={{ padding: '14px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px' }}>
      <span style={{ fontWeight: '700', color: '#166534', display: 'block', marginBottom: '6px' }}>
        🟢 Очередь Микрозадач (Microtasks)
      </span>
                            <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '13px', color: '#14532d', listStyleType: 'circle' }}>
                                <li>Коллбэки Промисов (<code style={{ fontFamily: 'monospace' }}>.then()</code>, <code style={{ fontFamily: 'monospace' }}>.catch()</code>, <code style={{ fontFamily: 'monospace' }}>.finally()</code>)</li>
                                <li>Операции <code style={{ fontFamily: 'monospace' }}>await</code> в async-функциях</li>
                                <li>Специфический метод <code style={{ fontFamily: 'monospace' }}>queueMicrotask()</code></li>
                                <li><code style={{ fontFamily: 'monospace' }}>MutationObserver</code> (слежка за DOM)</li>
                            </ul>
                        </div>

                        {/* Макрозадачи */}
                        <div style={{ padding: '14px', backgroundColor: '#fff7ed', border: '1px solid #ffedd5', borderRadius: '6px' }}>
      <span style={{ fontWeight: '700', color: '#9a3412', display: 'block', marginBottom: '6px' }}>
        🟠 Очередь Макрозадач (Macrotasks)
      </span>
                            <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '13px', color: '#7c2d12', listStyleType: 'circle' }}>
                                <li>Таймеры (<code style={{ fontFamily: 'monospace' }}>setTimeout</code>, <code style={{ fontFamily: 'monospace' }}>setInterval</code>)</li>
                                <li>Сетевые запросы (<code style={{ fontFamily: 'monospace' }}>fetch</code>, <code style={{ fontFamily: 'monospace' }}>XHR</code>) после получения ответа</li>
                                <li>События пользователя (клики, ввод текста, скролл)</li>
                                <li>Рендеринг и парсинг HTML-документов</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '16px',
                        marginBottom: '24px',
                        fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif'
                    }}>

                        {/* Карточка Стека (LIFO) */}
                        <div style={{
                            padding: '16px',
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            borderLeft: '4px solid #3b82f6' // Синий акцент для стека
                        }}>
    <span style={{ fontWeight: '700', color: '#1e3a8a', display: 'block', marginBottom: '6px' }}>
      📥 Стек вызовов (Call Stack) — Принцип LIFO
    </span>
                            <span style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', display: 'block' }}>
      <strong>LIFO</strong> (Last In, First Out — «Последним пришёл, первым ушёл»).
      Представьте стопку тарелок: вы кладёте новые функции наверх стека, а движок JavaScript всегда забирает и выполняет ту функцию, которая оказалась на самом верху.
    </span>
                        </div>

                        {/* Карточка Очереди (FIFO) */}
                        <div style={{
                            padding: '16px',
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            borderLeft: '4px solid #10b981' // Зеленый акцент для очереди
                        }}>
    <span style={{ fontWeight: '700', color: '#065f46', display: 'block', marginBottom: '6px' }}>
      ⏳ Очереди задач (Tasks) — Принцип FIFO
    </span>
                            <span style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', display: 'block' }}>
      <strong>FIFO</strong> (First In, First Out — «Первым пришёл, первым ушёл»).
      Работает как обычная очередь в магазине: задачи (микро или макро) встают строго друг за другом. Та задача, которая попала в очередь раньше всех, первой отправится на выполнение в Стек.
    </span>
                        </div>

                    </div>

                    {/* Текст перед кодом */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Классическая задачка на понимание очередей:
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
{`console.log("Синхронно 1");

setTimeout(() => {
  console.log("Макрозадача (Таймер)");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Микрозадача 1");
  })
  .then(() => {
    console.log("Микрозадача 2 (Вытечет из первой)");
  });

console.log("Синхронно 2");

// 📊 ТОЧНЫЙ ПОРЯДОК ВЫВОДА В КОНСОЛЬ:
// 1. "Синхронно 1"                    (Выполнился сразу в Call Stack)
// 2. "Синхронно 2"                    (Выполнился сразу в Call Stack)
// 3. "Микрозадача 1"                  (Очередь микрозадач имеет высший приоритет)
// 4. "Микрозадача 2 (Вытечет из...)"  (Цепочка .then создала новую микрозадачу в этом же цикле)
// 5. "Макрозадача (Таймер)"           (Макрозадача ждала, пока очистятся ВСЕ микрозадачи)`}
  </pre>

                    {/* Важное предупреждение для интервью */}
                    <div style={{
                        borderLeft: '4px solid #ef4444',
                        backgroundColor: '#fef2f2',
                        padding: '12px 16px',
                        borderRadius: '0 6px 6px 0',
                        fontSize: '14px',
                        color: '#991b1b',
                        lineHeight: '1.5'
                    }}>
                        🚨 <strong>Опасность зависания (Бесконечные микрозадачи):</strong> Если создать рекурсивную функцию, которая бесконечно добавляет задачи в очередь микрозадач (например, через бесконечные промисы или <code style={{ fontFamily: 'monospace' }}>queueMicrotask</code>), Event Loop <strong>намертво зависнет</strong>. Он никогда не перейдет к этапу рендеринга интерфейса или макрозадачам. Браузер перестанет реагировать на клики, а вкладка заблокируется. Бесконечный <code style={{ fontFamily: 'monospace' }}>setTimeout</code>, напротив, интерфейс не вешает, так как между макрозадачами браузер успевает делать рендеринг.
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
                    {/* Верхняя индиго-полоса карточки */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        backgroundColor: '#6366f1'
                    }} />

                    {/* Заголовок */}
                    <h2 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#4338ca',
                        margin: '0 0 12px 0'
                    }}>
                        Очередь рендеринга и защита от голодания макрозадач
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        Очередь рендеринга (включающая колбэки <code style={{ fontFamily: 'monospace' }}>requestAnimationFrame</code>) подчиняется уникальному правилу безопасности, которое кардинально отличает её от бесконечной очереди микрозадач. Это защищает браузер от зависания при сложных анимациях.
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
                            🧠 Фиксация снимка (Snapshot Mechanism) под капотом:
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                            <strong>Запись на старте:</strong> Когда Event Loop переходит к этапу обновления экрана, он делает «снимок» очереди рендеринга и строго запоминает, сколько тасок в ней находилось на момент старта.
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                            <strong>Игнорирование новых поступлений:</strong> Будет выполнено только это фиксированное количество задач. Если одна из анимационных тасок внутри себя порождает новый вызов <code style={{ fontFamily: 'monospace' }}>requestAnimationFrame</code>, этот новый запрос не встанет в текущий поток, а перенесется на следующий цикл (кадр).
                        </div>
                        <div>
                            <strong>Передача хода:</strong> Как только зафиксированные таски рендеринга выполнены, Event Loop обязан передать управление очереди макрозадач и выполнить одну из них, даже если в очередь рендеринга продолжают лавиной сыпаться новые запросы.
                        </div>
                    </div>

                    {/* Текст перед кодом */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Разница в поведении рекурсивных промисов и рекурсивных анимаций:
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
{`// ❌ А. Рекурсия в микрозадачах — НАМЕРТВО повесит вкладку браузера
function infiniteMicro() {
  Promise.resolve().then(infiniteMicro); // Очередь микрозадач никогда не опустеет
}

// 🟢 Б. Рекурсия в рендеринге — РАБОТАЕТ БЕЗОПАСНО и плавно
function smoothAnimation() {
  // Новые вызовы фиксируются и переносятся на следующий кадр (через ~16мс)
  requestAnimationFrame(smoothAnimation); 
}
// Event Loop будет успевать выполнять макрозадачи и клики пользователя между кадрами`}
  </pre>

                    {/* Итоговый вывод */}
                    <div style={{
                        borderLeft: '4px solid #10b981',
                        backgroundColor: '#f0fdf4',
                        padding: '12px 16px',
                        borderRadius: '0 6px 6px 0',
                        fontSize: '14px',
                        color: '#065f46',
                        lineHeight: '1.5'
                    }}>
                        💡 <strong>Зачем это сделано:</strong> Если бы очередь рендеринга работала как микрозадачи (выполняя всё до победного конца, включая новые входящие), тяжелая JS-анимация полностью лишила бы процессорного времени обычные таймеры <code style={{ fontFamily: 'monospace' }}>setTimeout</code> и обработчики кликов. Механизм фиксации снимка гарантирует справедливое распределение ресурсов.
                    </div>
                </div>
                <div id="jsDate" style={{
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
                    {/* Верхняя индиго-полоса карточки */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        backgroundColor: '#6366f1'
                    }} />

                    {/* Заголовок */}
                    <h2 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#4338ca',
                        margin: '0 0 12px 0'
                    }}>
                        Работа с датами: Объект Date
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        Для управления временем в JavaScript используется встроенный объект <strong>Date</strong>. Под капотом он хранит целое число — количество миллисекунд, прошедших с 1 января 1970 года UTC+0 (Unix Timestamp Epoch).
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
                            🧠 Две главные ловушки объекта Date на интервью:
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <strong>1. Нумерация месяцев начинается с НУЛЯ:</strong> Январь — это <code style={{ fontFamily: 'monospace' }}>0</code>, Февраль — <code style={{ fontFamily: 'monospace' }}>1</code>, ..., Декабрь — <code style={{ fontFamily: 'monospace' }}>11</code>. Передача числа <code style={{ fontFamily: 'monospace' }}>12</code> в качестве месяца автоматически перенесет дату на январь следующего года.
                        </div>
                        <div>
                            <strong>2. Разница между Днем месяца и Днем недели:</strong> Метод получения числа месяца называется <code style={{ fontFamily: 'monospace' }}>getDate()</code> (возвращает 1-31). А метод <code style={{ fontFamily: 'monospace' }}>getDay()</code> возвращает порядковый номер <strong>дня недели</strong> (от 0 для Воскресенья до 6 для Субботы).
                        </div>
                    </div>

                    {/* Группы методов */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Основные методы взаимодействия:
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                        {/* Получение данных */}
                        <div style={{ padding: '14px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px' }}>
      <span style={{ fontWeight: '700', color: '#166534', display: 'block', marginBottom: '6px' }}>
        🟢 Геттеры (Получение)
      </span>
                            <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '13px', color: '#14532d', listStyleType: 'circle' }}>
                                <li><code style={{ fontFamily: 'monospace' }}>getFullYear()</code> — 4 цифры года</li>
                                <li><code style={{ fontFamily: 'monospace' }}>getMonth()</code> — месяц (<strong>0-11</strong>)</li>
                                <li><code style={{ fontFamily: 'monospace' }}>getDate()</code> — число месяца (1-31)</li>
                                <li><code style={{ fontFamily: 'monospace' }}>getHours()</code>, <code style={{ fontFamily: 'monospace' }}>getMinutes()</code>, <code style={{ fontFamily: 'monospace' }}>getSeconds()</code></li>
                                <li><code style={{ fontFamily: 'monospace' }}>getTime()</code> — таймстамп в мс</li>
                            </ul>
                        </div>

                        {/* Установка данных */}
                        <div style={{ padding: '14px', backgroundColor: '#fff7ed', border: '1px solid #ffedd5', borderRadius: '6px' }}>
      <span style={{ fontWeight: '700', color: '#9a3412', display: 'block', marginBottom: '6px' }}>
        🟠 Сеттеры (Установка)
      </span>
                            <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '13px', color: '#7c2d12', listStyleType: 'circle' }}>
                                <li><code style={{ fontFamily: 'monospace' }}>setFullYear(year)</code> — меняет год</li>
                                <li><code style={{ fontFamily: 'monospace' }}>setMonth(month)</code> — меняет месяц</li>
                                <li><code style={{ fontFamily: 'monospace' }}>setDate(day)</code> — меняет число месяца</li>
                                <li><code style={{ fontFamily: 'monospace' }}>setHours()</code>, <code style={{ fontFamily: 'monospace' }}>setMinutes()</code>, <code style={{ fontFamily: 'monospace' }}>setSeconds()</code></li>
                                <li><code style={{ fontFamily: 'monospace' }}>setTime(milliseconds)</code> — меняет всю дату</li>
                            </ul>
                        </div>
                    </div>

                    {/* Текст перед кодом */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Практический пример создания, чтения и модификации даты:
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
{`// 1. Создание даты (Задаем: 2026 год, Март (индекс 2), 15 число)
const myDate = new Date(2026, 2, 15, 14, 30); 

// 2. Получение компонентов даты (Геттеры)
console.log(myDate.getFullYear()); // 2026
console.log(myDate.getMonth());    // 2
console.log(myDate.getDate());     // 15 (Число месяца)
console.log(myDate.getDay());      // 0 (15 марта 2026 — это воскресенье!)

// 3. Изменение даты через Сеттеры
myDate.setFullYear(2027);
myDate.setDate(20);
console.log(myDate.toDateString()); // "Sun Mar 20 2027"

// 💡 Быстрое получение текущего таймстампа без создания объекта:
const timestamp = Date.now(); // Количество мс прямо сейчас`}
  </pre>

                    {/* Автоисправление дат */}
                    <div style={{
                        borderLeft: '4px solid #3b82f6',
                        backgroundColor: '#eff6ff',
                        padding: '12px 16px',
                        borderRadius: '0 6px 6px 0',
                        fontSize: '14px',
                        color: '#1e3a8a',
                        lineHeight: '1.5'
                    }}>
                        🔥 <strong>Суперсила Date (Автоисправление):</strong> Если вы передадите в сеттер значение, выходящее за рамки диапазона, объект самостоятельно пересчитает дату. Например, выражение <code style={{ fontFamily: 'monospace' }}>const d = new Date(2026, 0, 32)</code> автоматически превратится в <strong>1 февраля 2026 года</strong>. Это свойство делает объект Date идеальным инструментом для математических операций со временем (например, чтобы прибавить к дате 5 дней, достаточно сделать: <code style={{ fontFamily: 'monospace' }}>date.setDate(date.getDate() + 5)</code>).
                    </div>
                </div>

            </main>
        </div>
    );
}
