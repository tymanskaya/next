"use client";

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function ReactHooksCheatSheet() {
    const pathname = usePathname();
    const router = useRouter();

    // Общий стиль для ссылок меню
    const getSidebarLinkStyle = (isActive) => ({
        display: 'block',
        width: '100%',
        padding: '10px 15px',
        borderRadius: '8px',
        color: isActive ? '#0076ff' : '#57606a',
        backgroundColor: isActive ? '#e6f7ff' : 'transparent',
        fontWeight: isActive ? '600' : '500',
        fontSize: '14px',
        border: 'none',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        marginBottom: '4px',
        textDecoration: 'none'
    });

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f0f2f5', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

            {/* БОКОВОЕ МЕНЮ (SIDEBAR) */}
            <aside style={{
                width: '260px',
                backgroundColor: '#fff',
                borderRight: '1px solid #d1d9e0',
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                padding: '30px 20px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '2px 0 10px rgba(0,0,0,0.02)',
                zIndex: 100
            }}>
                {/* Логотип/Название справочника */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px', paddingLeft: '10px' }}>
                    <div style={{ backgroundColor: '#00d8ff', width: '8px', height: '24px', borderRadius: '4px' }}></div>
                    <span style={{ fontWeight: '800', fontSize: '18px', color: '#1f2328' }}>DevDocs</span>
                </div>

                {/* Основные разделы (Глобальная навигация приложения) */}
                <div style={{ marginBottom: '25px' }}>
                    <p style={sidebarTitleStyle}>Страницы</p>
                    <button onClick={() => router.push('/git')} style={getSidebarLinkStyle(pathname === '/git')}>
                        🪵 Git Справочник
                    </button>
                    <button onClick={() => router.push('/localStorage')} style={getSidebarLinkStyle(pathname === '/localStorage')}>
                        💾 Web Storage
                    </button>
                    <button onClick={() => router.push('/hooks')} style={getSidebarLinkStyle(pathname === '/hooks')}>
                        ⚛️ React Hooks
                    </button>
                </div>

                {/* Содержимое текущей страницы (Якорные ссылки) */}
                <div>
                    <p style={sidebarTitleStyle}>На этой странице</p>
                    <a href="#useState" style={anchorLinkStyle}>
                        🔹 useState (Состояние)
                    </a>
                    <a href="#useEffect" style={anchorLinkStyle}>
                        🔹 useEffect (Эффекты)
                    </a>
                    <a href="#useRef" style={{...anchorLinkStyle, opacity: 0.5, cursor: 'not-allowed'}} onClick={(e) => e.preventDefault()}>
                        🔹 useRef (Скоро...)
                    </a>
                </div>
            </aside>

            {/* ОСНОВНОЙ КОНТЕНТ СТРАНИЦЫ */}
            <main style={{
                flex: 1,
                marginLeft: '260px', // Отступ, равный ширине бокового меню
                padding: '40px 40px 80px 40px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '25px' }}>

                    {/* КРАСИВАЯ ШАПКА РАЗДЕЛА */}
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            padding: '8px 16px',
                            backgroundColor: '#f6f8fa',
                            borderRadius: '30px',
                            marginBottom: '20px',
                            border: '1px solid #d1d9e0',
                            color: '#57606a',
                            fontSize: '13px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            <svg height="16" width="16" viewBox="0 0 16 16" style={{ fill: '#00d8ff' }}>
                                <path d="M15.53 6.45c-.32-1.7-1.44-3.23-3.13-4.14-1.69-.91-3.69-.99-5.38-.25L6.45 2.53C4.75 2.85 3.22 3.97 2.31 5.66c-.91 1.69-.99 3.69-.25 5.38l.47-.47c-.52-1.34-.43-2.92.3-4.21.72-1.3 1.95-2.18 3.36-2.45l.6-.12c-.22-.3-.5-.54-.83-.72-.73-.4-1.57-.43-2.3-.12l-.39.18 1.34-1.34c.73-.31 1.57-.28 2.3.12.33.18.61.42.83.72l.12-.6c.27-1.41 1.15-2.64 2.45-3.36 1.29-.73 2.87-.82 4.21-.3l-.47.47z"/>
                                <circle cx="8" cy="8" r="1.5"/>
                            </svg>
                            React Hooks Core
                        </div>

                        <h1 style={{
                            fontSize: '46px',
                            fontWeight: '850',
                            color: '#1f2328',
                            margin: '0 0 15px 0',
                            letterSpacing: '-0.03em'
                        }}>
                            Хуки в React
                        </h1>

                        <p style={{ fontSize: '19px', color: '#636c76', maxWidth: '650px', margin: '0 auto', lineHeight: '1.5' }}>
                            Справочник по встроенным функциям React для управления <b>состоянием</b>, <b>жизненным циклом</b> компонентов и оптимизацией производительности
                        </p>

                        <div style={{ width: '80px', height: '5px', background: 'linear-gradient(90deg, #00d8ff, #0076ff)', margin: '25px auto 0', borderRadius: '10px' }}></div>
                    </div>

                    {/* КАРТОЧКА: USESTATE */}
                    <section id="useState" style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', borderTop: '6px solid #00d8ff', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', scrollMarginTop: '40px' }}>
                        <h2 style={{ marginTop: 0, color: '#0050b3', fontSize: '22px' }}>Управление состоянием (useState)</h2>
                        <p style={{ margin: '0 0 15px 0', color: '#555' }}>
                            <b>useState</b> &mdash; позволяет добавлять динамическое состояние в functional-компоненты. React запоминает эти данные между рендерами и автоматически обновляет интерфейс на экране при их изменении.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                            {/* Базовый синтаксис */}
                            <div style={{ backgroundColor: '#e6f7ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #00d8ff' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#0050b3' }}>Синтаксис деструктуризации:</p>
                                <code style={{ display: 'block', backgroundColor: '#fff', padding: '6px 12px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>
                                    const [state, setState] = useState(initialState);
                                </code>
                                <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '0.92em', color: '#333' }}>
                                    <li><code style={codeInlineStyle}>state</code> &mdash; переменная, хранящая текущее значение (только для чтения).</li>
                                    <li><code style={codeInlineStyle}>setState</code> &mdash; функция-модификатор, через которую меняют значение.</li>
                                    <li><code style={codeInlineStyle}>initialState</code> &mdash; стартовое значение (число, строка, массив, объект или булево).</li>
                                </ul>
                            </div>

                            {/* Золотые правила */}
                            <div>
                                <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>⚠️ 3 золотых правила работы с useState:</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                                    <div style={{ borderBottom: '1px solid #f0f0f0', paddingBottom: '10px' }}>
                                        <p style={{ margin: '0 0 4px 0', fontWeight: '600' }}>1. Обновление стейта асинхронно</p>
                                        <p style={{ margin: 0, fontSize: '0.95em', color: '#555' }}>
                                            Вызов функции <code style={codeInlineStyle}>setState</code> не меняет переменную мгновенно на следующей строчке кода. Новое значение будет доступно только при следующем рендере компонента.
                                        </p>
                                    </div>

                                    <div style={{ borderBottom: '1px solid #f0f0f0', paddingBottom: '10px' }}>
                                        <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#cf1322' }}>2. Прямая мутация строго запрещена!</p>
                                        <p style={{ margin: 0, fontSize: '0.95em', color: '#555' }}>
                                            Нельзя писать <code style={codeInlineStyle}>count = 5</code> или <code style={codeInlineStyle}>user.name = &apos;Alex&apos;</code>. React не отследит такое изменение и страница не перерисуется. Всегда используй только функцию-модификатор.
                                        </p>
                                    </div>

                                    <div>
                                        <p style={{ margin: '0 0 4px 0', fontWeight: '600' }}>3. Обновление объектов и массивов через копирование</p>
                                        <p style={{ margin: '0 0 8px 0', fontSize: '0.95em', color: '#555' }}>
                                            При изменении объекта или массива нужно передавать <b>абсолютно новый объект/массив</b>, создавая его копию через спред-оператор (<code style={codeInlineStyle}>...</code>):
                                        </p>
                                        <pre style={codeBlockStyle}>
{`// ПРАВИЛЬНОЕ обновление объекта в стейте
const [user, setUser] = useState({ name: 'Kris', age: 20 });

const birthday = () => {
    setUser({ ...user, age: 21 }); // Копируем старые поля, заменяем нужные
};`}
                                        </pre>
                                    </div>

                                </div>
                            </div>

                            {/* Живой пример */}
                            <div style={{ backgroundColor: '#f6ffed', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #52c41a' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#237804' }}>🛠️ Классический пример счетчика:</p>
                                <pre style={{...codeBlockStyle, backgroundColor: '#fff', border: '1px solid #d9d9d9'}}>
{`import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Вы нажали {count} раз(а)</p>
            <button onClick={() => setCount(count + 1)}>
                Увеличить
            </button>
        </div>
    );
}`}
                                </pre>
                            </div>

                        </div>
                        {/* Блок: Ленивая инициализация */}
                        {/* Блок: Что такое функция-инициализатор */}
                        <div style={{
                            backgroundColor: '#f6ffed',
                            padding: '15px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #52c41a',
                            marginTop: '15px'
                        }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 6px 0', color: '#237804' }}>📖 Терминология: Функция-инициализатор (Initializer Function)</p>
                            <p style={{ fontSize: '0.95em', margin: 0 }}>
                                Это чистая функция без аргументов, передаваемая в <code style={{ backgroundColor: '#fff', padding: '1px 4px' }}>useState</code> для отложенного вычисления начального состояния. Она запускается <b>ровно один раз</b> при инициализации компонента и полностью игнорируется при повторных рендерах, защищая приложение от лишней нагрузки.
                            </p>
                        </div>

                        <div style={{
                            backgroundColor: '#fffbe6',
                            padding: '15px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #faad14',
                            marginTop: '15px'
                        }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#856404' }}>⚡ Оптимизация: Ленивая инициализация (Lazy Initialization)</p>
                            <p style={{ fontSize: '0.95em', margin: '0 0 10px 0' }}>
                                Если начальное значение стейта вычисляется &laquo;тяжёлой&raquo; функцией (например, чтение из <code style={{ backgroundColor: '#fff', padding: '1px 4px' }}>localStorage</code>), то при обычном вызове она будет перезапускаться <b>при каждом рендере</b>.
                            </p>

                            <p style={{ fontSize: '0.95em', margin: '0 0 10px 0' }}>
                                <b>Решение:</b> Передавай в <code style={{ backgroundColor: '#fff', padding: '1px 4px' }}>useState</code> не результат функции, а стрелочную функцию-колбэк. Тогда React вызовет её <b>строго один раз</b> при создании компонента.
                            </p>

                            <pre style={{
                                display: 'block',
                                backgroundColor: '#fff',
                                padding: '12px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '0.88em',
                                color: '#333',
                                border: '1px solid #ffe58f',
                                margin: 0,
                                whiteSpace: 'pre-wrap'
                            }}>
{`// ❌ Неправильно (вызывается при каждом рендере):
const [data, setData] = useState(getHeavyData());

//  Правильно (вызовется только один раз при старте):
const [data, setData] = useState(() => getHeavyData());`}
    </pre>
                        </div>
                    </section>

                    <section id="useEffect" style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #52c41a',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        scrollMarginTop: '40px'
                    }}>
                        <h2 style={{ marginTop: 0, color: '#237804', fontSize: '22px' }}>Синхронизация и эффекты (useEffect)</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <p><b>useEffect</b> &mdash; выполняет побочные эффекты (side-effects) после рендеринга компонента: запросы к API, подписки на события, работу с таймерами и прямое взаимодействие с DOM.</p>

                            {/* Таблица режимов работы */}
                            <div style={{ backgroundColor: '#f6ffed', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #52c41a' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#237804' }}>Управление массивом зависимостей:</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95em' }}>
                                    <div>• <code style={codeInlineStyle}>useEffect(() =&gt; {"{}"})</code> &mdash; <b>Без массива:</b> запускается при <i>каждом</i> рендере приложения.</div>
                                    <div>• <code style={codeInlineStyle}>useEffect(() =&gt; {"{}"}, [])</code> &mdash; <b>Пустой массив:</b> запускается ровно <i>один раз</i> при создании (монтировании) компонента.</div>
                                    <div>• <code style={codeInlineStyle}>useEffect(() =&gt; {"{}"}, [id])</code> &mdash; <b>С переменными:</b> запускается на старте + каждый раз, когда меняется значение <code style={codeInlineStyle}>id</code>.</div>
                                </div>
                            </div>

                            {/* Функция очистки */}
                            <div style={{ backgroundColor: '#fff1f0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ff4d4f' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#cf1322' }}>🧹 Функция очистки (Cleanup Function):</p>
                                <p style={{ fontSize: '0.95em', margin: '0 0 8px 0' }}>
                                    Если эффект создает подписку, таймер или глобальный слушатель, он обязан вернуть функцию-очистку для предотвращения утечек памяти.
                                </p>
                                <pre style={codeBlockStyle}>
{`useEffect(() => {
    const timer = setInterval(() => console.log('Тик'), 1000);
    // Возвращаем очистку:
    return () => clearInterval(timer);
}, []);`}
            </pre>
                            </div>

                            {/* Пример запроса к API */}
                            <div>
                                <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Шаблон безопасного запроса данных (Fetch):</p>
                                <pre style={codeBlockStyle}>
{`useEffect(() => {
    let isMounted = true; // Защита от race conditions
    
    fetch(\`https://api.com\${id}\`)
        .then(res => res.json())
        .then(data => {
            if (isMounted) setUser(data);
        });
        
    return () => { isMounted = false; }; // Сбрасываем при смене id
}, [id]);`}
            </pre>
                            </div>
                        </div>
                    </section>


                </div>
            </main>
        </div>
    );
}

// Вспомогательные стили
const sidebarTitleStyle = {
    fontSize: '11px',
    fontWeight: '700',
    color: '#8c95a0',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    margin: '0 0 10px 10px'
};

const anchorLinkStyle = {
    display: 'block',
    padding: '8px 15px',
    color: '#57606a',
    fontSize: '13px',
    fontWeight: '500',
    textDecoration: 'none',
    borderRadius: '6px',
    transition: 'color 0.2s'
};

const codeInlineStyle = {
    backgroundColor: '#f0f0f0',
    padding: '2px 5px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '0.9em',
    color: '#c41d7f'
};

const codeBlockStyle = {
    display: 'block',
    backgroundColor: '#f5f5f5',
    padding: '12px',
    borderRadius: '6px',
    fontFamily: 'monospace',
    fontSize: '0.88em',
    color: '#333',
    overflowX: 'auto',
    margin: '8px 0 0 0',
    whiteSpace: 'pre-wrap'
};
