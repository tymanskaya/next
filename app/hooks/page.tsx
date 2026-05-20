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

    const paramRowStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        paddingBottom: '10px',
        borderBottom: '1px solid #f0f0f0'
    };

    const paramCodeStyle = {
        backgroundColor: '#f9f0ff',
        padding: '3px 8px',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '0.92em',
        color: '#531dab',
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    };


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
                    <a href="#useLayoutEffect" style={anchorLinkStyle}>
                        🔹 useLayoutEffect (Синхронный эффект)
                    </a>
                    <a href="#useRef" style={anchorLinkStyle}>
                        🔹 useRef (Ссылки)
                    </a>
                    <a href="#useReducer" style={anchorLinkStyle}>
                        🔹 useReducer (Диспетчер)
                    </a>
                    <a href="#useContext" style={anchorLinkStyle}>
                        🔹 useContext (Глобальный транспорт)
                    </a>
                    <a href="#useMemo" style={anchorLinkStyle}>
                        🔹 useMemo (Кэш значений)
                    </a>
                    <a href="#useCallback" style={anchorLinkStyle}>
                        🔹 useCallback (Кэш функций)
                    </a>

                    <a href="#useTransition" style={anchorLinkStyle}>
                        🔹 useTransition (Фоновый рендер)
                    </a>
                    <a href="#useDeferredValue" style={anchorLinkStyle}>
                        🔹 useDeferredValue (Отложенное эхо)
                    </a>
                    <a href="#useId" style={anchorLinkStyle}>
                        🔹 useId (Фоновый рендер)
                    </a>
                    <a href="#useImperativeHandle" style={anchorLinkStyle}>
                        🔹 useImperativeHandle (Отложенное эхо)
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
                    <section id="useLayoutEffect" style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #fa541c', // Красно-оранжевый цвет
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        marginTop: '40px',
                        scrollMarginTop: '40px',
                        fontFamily: 'sans-serif'
                    }}>
                        <h2 style={{ marginTop: 0, color: '#ad2102', fontSize: '22px' }}>Синхронный замер DOM (useLayoutEffect)</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <p><b>useLayoutEffect</b> &mdash; работает идентично <code style={codeInlineStyle}>useEffect</code>, но запускается **синхронно сразу после изменения DOM**, но **ДО того, как браузер отрисует пиксели на экране**.
                            </p>

                            <div style={{ backgroundColor: '#fff2e8', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #fa541c', fontSize: '0.93em' }}>
                                ⚡ <b>Когда применять:</b> Только когда вам нужно считать точные размеры элемента (высоту, ширину, отступы) и мгновенно изменить интерфейс (например, спозиционировать всплывающую подсказку Tooltip). Если делать это в обычном `useEffect`, пользователь заметит секундное «мигание» или дергание элемента.
                            </div>

                            <div>
                                <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Шаблон использования:</p>
                                <pre style={codeBlockStyle}>
{`useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    // Делаем что-то с высотой ДО отрисовки экрана
    setTooltipPosition(height + 10);
}, [data]);`}
            </pre>
                            </div>
                        </div>
                    </section>

                    <section id="useRef" style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #fa8c16',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        scrollMarginTop: '40px'
                    }}>
                        <h2 style={{ marginTop: 0, color: '#d46b08', fontSize: '22px' }}>Ссылки и неизменяемые данные (useRef)</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <p><b>useRef</b> &mdash; возвращает специальный объект с единственным свойством <code style={codeInlineStyle}>.current</code>. Изменение этого свойства происходит мгновенно и <b>никогда не вызывает перерендер компонента</b>.</p>

                            {/* Две задачи хука */}
                            <div style={{ backgroundColor: '#fff7e6', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #fa8c16' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#d46b08' }}>Основные сценарии применения:</p>
                                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95em' }}>
                                    <li><b>Доступ к DOM-элементам:</b> Управление фокусом, скроллом, запуск HTML5-видео плееров или интеграция со сторонними JS-библиотеками.</li>
                                    <li><b>Хранение «тихих» переменных:</b> Сохранение ID таймеров (<code style={codeInlineStyle}>setInterval</code>), счетчиков шагов или предыдущих значений пропсов, которые не должны влиять на визуальный интерфейс при обновлении.</li>
                                </ul>
                            </div>

                            {/* Пример с DOM */}
                            <div>
                                <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Пример программного фокуса на поле ввода (DOM):</p>
                                <pre style={codeBlockStyle}>
{`import React, { useRef } from 'react';

export default function InputFocus() {
    const textInputRef = useRef(null); // 1. Создаем ссылку

    const onButtonClick = () => {
        textInputRef.current?.focus(); // 3. Управляем DOM напрямую
    };

    return (
        <div>
            {/* 2. Привязываем к тегу через атрибут ref */}
            <input ref={textInputRef} type="text" />
            <button onClick={onButtonClick}>Установить фокус</button>
        </div>
    );
}`}
            </pre>
                            </div>

                            {/* Сравнение с useState */}
                            <div style={{ backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '8px', fontSize: '0.93em' }}>
                                💡 <b>Главное отличие от useState:</b> Перезапись <code style={codeInlineStyle}>setValue(5)</code> заставляет компонент полностью перерисоваться, чтобы отобразить изменения на экране. Запись <code style={codeInlineStyle}>myRef.current = 5</code> просто тихо меняет значение в памяти компьютера, экран при этом остается неподвижным.
                            </div>
                        </div>
                    </section>
                    <section id="useReducer" style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #722ed1',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        scrollMarginTop: '40px'
                    }}>
                        <h2 style={{ marginTop: 0, color: '#531dab', fontSize: '22px' }}>Управление сложным состоянием (useReducer)</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <p><b>useReducer</b> &mdash; продвинутая альтернатива <code style={codeInlineStyle}>useState</code>. Идеально подходит, когда состояние состоит из множества взаимосвязанных полей, а логика его изменения включает разные типы действий (actions).</p>

                            {/* Схема работы */}
                            <div style={{ backgroundColor: '#f9f0ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #722ed1' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#531dab' }}>Три кита архитектурыuseReducer:</p>
                                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95em' }}>
                                    <li><b>State:</b> Текущий объект с данными (неизменяемый напрямую).</li>
                                    <li><b>Action:</b> Объект-сигнал, который передает тип операции. Обычно выглядит так: <code style={codeInlineStyle}>{"{ type: &apos;ADD_ITEM&apos;, payload: data }"}</code>.</li>
                                    <li><b>Reducer:</b> Чистая функция, которая принимает текущий стейт и экшен, обрабатывает их через оператор <code style={codeInlineStyle}>switch-case</code> и возвращает <b>абсолютно новый объект состояния</b>.</li>
                                </ul>
                            </div>

                            {/* Пример кода */}
                            <div>
                                <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Шаблон реализации Редьюсера:</p>
                                <pre style={codeBlockStyle}>
{`// 1. Описываем логику переключения состояний
function todoReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, { id: Date.now(), text: action.payload }];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

// 2. Вызываем внутри компонента
const [todos, dispatch] = useReducer(todoReducer, []);

// 3. Отправляем изменения в интерфейсе
dispatch({ type: 'add', payload: 'Купить молоко' });`}
            </pre>
                            </div>

                            {/* Когда выбирать */}
                            <div style={{ backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '8px', fontSize: '0.93em' }}>
                                💡 <b>Когда использовать:</b> Если у тебя в <code style={{ backgroundColor: '#fff', padding: '1px 4px' }}>useState</code> становится слишком много перекрестных обновлений (например, при обновлении одного поля нужно обязательно пересчитать еще три), смело переписывай этот блок на <code style={{ backgroundColor: '#fff', padding: '1px 4px' }}>useReducer</code>. Это сделает код чище и упростит его тестирование.
                            </div>
                        </div>
                        <section style={{
                            backgroundColor: '#fff',
                            padding: '25px',
                            borderRadius: '12px',
                            borderTop: '6px solid #722ed1',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                            fontFamily: 'sans-serif',
                            lineHeight: '1.6'
                        }}>
                            <h2 style={{ marginTop: 0, color: '#531dab', fontSize: '20px' }}>Анатомия useReducer: Входные и выходные данные</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <p>Вызов хука в коде выглядит так: <code style={codeInlineStyle}>const [state, dispatch] = useReducer(reducer, initialArg, init?)</code>. Давайте разберем, что скрывается за каждым параметром.</p>

                                {/* ЧТО ПРИНИМАЕТ */}
                                <div>
                                    <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#722ed1', fontSize: '1.1em' }}>📥 Что ПРИНИМАЕТ хук (Аргументы):</p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                                        <div style={paramRowStyle}>
                                            <code style={paramCodeStyle}>1. reducer (Функция)</code>
                                            <p style={{ margin: 0, fontSize: '0.95em' }}>
                                                Обязательная чистая функция, которая определяет, <i>как именно</i> меняется состояние. Она принимает текущий стейт и объект действия: <code style={codeInlineStyle}>(state, action) =&gt; newState</code>. Она должна проанализировать <code style={codeInlineStyle}>action.type</code> и вернуть <b>абсолютно новый объект</b> состояния.
                                            </p>
                                        </div>

                                        <div style={paramRowStyle}>
                                            <code style={paramCodeStyle}>2. initialArg (Любой тип)</code>
                                            <p style={{ margin: 0, fontSize: '0.95em' }}>
                                                Обязательный аргумент. Начальное значение состояния (число, строка, массив или объект). Это то, чем будет являться ваш стейт при самом первом запуске страницы (например: <code style={codeInlineStyle}>{"{ count: 0 }"}</code>).
                                            </p>
                                        </div>

                                        <div style={paramRowStyle}>
                                            <code style={paramCodeStyle}>3. init (Функция) &mdash; Необязательный</code>
                                            <p style={{ margin: 0, fontSize: '0.95em' }}>
                                                Функция для <b>ленивой инициализации</b>. Если она передана, то начальным состоянием станет результат её выполнения: <code style={codeInlineStyle}>init(initialArg)</code>. Это нужно, если стартовый стейт рассчитывается через тяжелые вычисления (например, парсинг данных из памяти).
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {/* ЧТО ВОЗВРАЩАЕТ */}
                                <div>
                                    <p style={{ fontWeight: 'bold', margin: '15px 0 10px 0', color: '#237804', fontSize: '1.1em' }}>📤 Что ВОЗВРАЩАЕТ хук (Массив из двух элементов):</p>
                                    <p style={{ margin: '0 0 10px 0', fontSize: '0.95em' }}>Хук возвращает массив, который деструктурируется на две переменные. Назвать их можно как угодно, но по стандарту пишут <code style={codeInlineStyle}>[state, dispatch]</code>.</p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                                        <div style={paramRowStyle}>
                                            <code style={{...paramCodeStyle, backgroundColor: '#f6ffed', color: '#237804'}}>Элемент 1: state</code>
                                            <p style={{ margin: 0, fontSize: '0.95em' }}>
                                                Текущее состояние компонента для чтения. При первом рендере оно равно <code style={codeInlineStyle} Dark>initialArg</code> (или результату функции <code style={codeInlineStyle}>init</code>). Вы выводите свойства этой переменной прямо в верстку (например, <code style={codeInlineStyle}>state.user.name</code>).
                                            </p>
                                        </div>

                                        <div style={paramRowStyle}>
                                            <code style={{...paramCodeStyle, backgroundColor: '#f6ffed', color: '#237804'}}>Элемент 2: dispatch (Функция)</code>
                                            <p style={{ margin: 0, fontSize: '0.95em' }}>
                                                Функция-отправитель. Единственный способ изменить состояние. Ты вызываешь её и передаешь внутрь объект действия (action): <code style={codeInlineStyle}>dispatch({"{ type: &apos;increment&apos; }"})</code>. React сам возьмет этот объект, передаст его в твой редьюсер вместе с текущим стейтом, обновит данные и перерисует интерфейс.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {/* ШАБЛОН С ЛЕНИВОЙ ИНИЦИАЛИЗАЦИЕЙ */}
                                <div style={{ marginTop: '5px' }}>
                                    <p style={{ fontWeight: 'bold', margin: '0 0 8px 0' }}>📋 Полный шаблон со всеми тремя аргументами (Ленивый редьюсер):</p>
                                    <pre style={codeBlockStyle}>
{`// 1. Функция-инициализатор (вызовется один раз при старте)
function initValues(initialCount) {
    return { count: initialCount, resetCount: 0 };
}

// 2. Редьюсер
function reducer(state, action) {
    switch (action.type) {
        case 'increment': return { ...state, count: state.count + 1 };
        case 'reset': return { ...state, count: state.resetCount };
        default: return state;
    }
}

// 3. Компонент
export default function App() {
    // Передаем: функцию редьюсера, число 10 (как initialArg) и функцию initValues
    // Стартовый стейт станет равен: { count: 10, resetCount: 0 }
    const [state, dispatch] = useReducer(reducer, 10, initValues);

    return <button onClick={() => dispatch({ type: 'increment' })}>{state.count}</button>;
}`}
            </pre>
                                </div>

                            </div>
                        </section>

                    </section>
                    <section id="useContext" style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #1890ff',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        scrollMarginTop: '40px'
                    }}>
                        <h2 style={{ marginTop: 0, color: '#0050b3', fontSize: '22px' }}>Глобальный контекст (useContext)</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <p><b>useContext</b> &mdash; позволяет передавать данные глубоко по дереву компонентов в обход ручной передачи пропсов через каждый уровень (решает проблему <i>Props Drilling</i>). Полезен для глобальных данных: тем оформления, языков интерфейса или данных авторизованного пользователя. Он превращает контекст в своеобразную «беспроводную сеть» (Wi-Fi) для данных внутри твоего приложения: любой дочерний компонент может мгновенно «подключиться» и считать нужную информацию.
                            </p>

                            {/* Схема трех шагов */}
                            <div style={{ backgroundColor: '#e6f7ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #1890ff' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#0050b3' }}>Три обязательных шага для работы:</p>
                                <ol style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95em' }}>
                                    <li><b>createContext:</b> Создаем именованную шину данных за пределами компонентов: <code style={codeInlineStyle}>const MyContext = createContext(null);</code></li>
                                    <li><b>Provider (Поставщик):</b> Оборачиваем родительский компонент в <code style={codeInlineStyle}>&lt;MyContext.Provider value={"{data}"}&gt;</code>, чтобы спустить данные вниз.</li>
                                    <li><b>useContext (Потребитель):</b> Внутри любого дочернего тега вызываем хук: <code style={codeInlineStyle}>const data = useContext(MyContext);</code> для чтения.</li>
                                </ol>
                            </div>
                            <section id="useContextSteps" style={{
                                backgroundColor: '#fff',
                                padding: '25px',
                                borderRadius: '12px',
                                borderTop: '6px solid #52c41a', // Зеленый цвет для секции "Практика"
                                boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                                marginTop: '25px',
                                scrollMarginTop: '40px'
                            }}>
                                <h2 style={{ marginTop: 0, color: '#237804', fontSize: '22px' }}>Архитектура внедрения (3 шага на практике)</h2>
                                <p>В реальных проектах код разделяют по разным файлам. Вот эталонная структура:</p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '15px' }}>

                                    {/* Шаг 1 */}
                                    <div>
                                        <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', color: '#1a1a1a' }}>📁 Шаг 1. Создание контекста и провайдера <code style={codeInlineStyle}>context/UserContext.jsx</code></h3>
                                        <pre style={codeBlockStyle}>
{`import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const login = (name) => setUser({ name });
    const logout = () => setUser(null);

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}`}
            </pre>
                                    </div>

                                    {/* Шаг 2 */}
                                    <div>
                                        <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', color: '#1a1a1a' }}>📁 Шаг 2. Обертка корневого компонента <code style={codeInlineStyle}>App.jsx</code></h3>
                                        <pre style={codeBlockStyle}>
{`import { UserProvider } from './context/UserContext';
import Header from './components/Header';

export default function App() {
    return (
        <UserProvider>
            <Header />
            {/* Другие компоненты приложения */}
        </UserProvider>
    );
}`}
            </pre>
                                    </div>

                                    {/* Шаг 3 */}
                                    <div>
                                        <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', color: '#1a1a1a' }}>📁 Шаг 3. Использование в компонентах <code style={codeInlineStyle}>Header.jsx</code></h3>
                                        <pre style={codeBlockStyle}>
{`import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Header() {
    const { user, logout } = useContext(UserContext);
    return user ? (
        <div>Привет, {user.name}! <button onClick={logout}>Выйти</button></div>
    ) : (
        <span>Войдите в систему</span>
    );
}`}
            </pre>
                                    </div>
                                </div>
                            </section>

                            {/* Пример кода */}
                            <div>
                                <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Пример извлечения данных из контекста:</p>
                                <pre style={codeBlockStyle}>
{`import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

export default function UserWidget() {
    // Хук автоматически заберет актуальный объект пользователя из провайдера сверху
    const user = useContext(UserContext); 

    if (!user) return <p>Пользователь не авторизован</p>;
    return <p>Добро пожаловать back, {user.name}!</p>;
}`}
            </pre>
                            </div>

                            {/* Важное предупреждение об оптимизации */}
                            <div style={{ backgroundColor: '#fff1f0', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #ff4d4f', fontSize: '0.93em' }}>
                                ⚠️ <b>Минус технологии (Важно знать):</b> Когда значение <code style={codeInlineStyle}>value</code> в провайдере меняется, <b>все</b> компоненты, которые вызывают <code style={codeInlineStyle}>useContext(MyContext)</code>, автоматически перерисовываются. Не используйте контекст для очень часто меняющихся данных (например, для позиций мыши или игровых таймеров), для этого лучше подходят стейт-менеджеры (Zustand, Redux).
                            </div>
                        </div>
                        {/* Эту таблицу можно вставить прямо в JSX вашей шпаргалки */}
                        <div style={{ overflowX: 'auto', marginTop: '20px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9em' }}>
                                <thead>
                                <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
                                    <th style={{ padding: '12px' }}>Критерий</th>
                                    <th style={{ padding: '12px', color: '#237804' }}>useState</th>
                                    <th style={{ padding: '12px', color: '#d46b08' }}>useReducer</th>
                                    <th style={{ padding: '12px', color: '#0050b3' }}>useContext</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '12px', fontWeight: 'bold' }}>Где хранятся данные</td>
                                    <td style={{ padding: '12px' }}>В ячейке памяти конкретного компонента.</td>
                                    <td style={{ padding: '12px' }}>В ячейке памяти конкретного компонента.</td>
                                    <td style={{ padding: '12px' }}>Внутри специального замыкания React (Fiber).</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#fafafa' }}>
                                    <td style={{ padding: '12px', fontWeight: 'bold' }}>Тип данных</td>
                                    <td style={{ padding: '12px' }}>Примитивы или простые плоские объекты.</td>
                                    <td style={{ padding: '12px' }}>Сложные структуры (массивы, вложенные объекты).</td>
                                    <td style={{ padding: '12px' }}>Любой тип данных (стейт, функции, конфиги).</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '12px', fontWeight: 'bold' }}>Вынос логики</td>
                                    <td style={{ padding: '12px' }}>Невозможен, привязан к телу компонента.</td>
                                    <td style={{ padding: '12px' }}>Идеален. Редюсер можно тестировать отдельно в `.test.js`.</td>
                                    <td style={{ padding: '12px' }}>Логики нет, только доставка.</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#fafafa' }}>
                                    <td style={{ padding: '12px', fontWeight: 'bold' }}>Триггер рендера</td>
                                    <td style={{ padding: '12px' }}>Вызов функции-сеттера с новым значением.</td>
                                    <td style={{ padding: '12px' }}>Вызов функции <code style={codeInlineStyle}>dispatch(action)</code>.</td>
                                    <td style={{ padding: '12px' }}>Смена ссылки на объект в <code style={codeInlineStyle}>value</code> Провайдера.</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '12px', fontWeight: 'bold' }}>Покрытие тестами</td>
                                    <td style={{ padding: '12px' }}>Сложное (только через UI или React Testing Library).</td>
                                    <td style={{ padding: '12px' }}>Очень легкое (как обычная чистая функция JS).</td>
                                    <td style={{ padding: '12px' }}>Требует создания фейкового Провайдера в тестах.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </section>
                    <section id="useMemo" style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #faad14', // Золотой/желтый цвет для оптимизации
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        marginTop: '40px',
                        scrollMarginTop: '40px',
                        fontFamily: 'sans-serif'
                    }}>
                        <h2 style={{ marginTop: 0, color: '#ad7c00', fontSize: '22px' }}>Мемоизация вычислений (useMemo)</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <p><b>useMemo</b> &mdash; возвращает **мемоизированное (сохраненное в кэше) значение**. Он запускает функцию вычислений только тогда, когда меняется одна из зависимостей. Если зависимости прежние, React просто берет готовый результат из памяти.
                            </p>

                            <div style={{ backgroundColor: '#fffbe6', padding: '12px', borderRadius: '8px', borderLeft: '4px solid #faad14', fontSize: '0.93em' }}>
                                💡 <b>Главное правило:</b> Не оборачивайте в <code style={codeInlineStyle}>useMemo</code> всё подряд. Сам хук тоже тратит ресурсы памяти. Используйте его только для сложных циклов, фильтрации больших массивов (от 1000 элементов) или тяжелой математики.
                            </div>

                            <div>
                                <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Пример фильтрации списка пользователей:</p>
                                <pre style={codeBlockStyle}>
{`import React, { useState, useMemo } from 'react';

export default function UsersList({ users }) {
    const [search, setSearch] = useState('');

    // Фильтрация запустится ТОЛЬКО при смене строки поиска или самого массива users
    const filteredUsers = useMemo(() => {
        console.log('Тяжелая фильтрация...');
        return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
    }, [search, users]);

    return (
        <div>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />
            {filteredUsers.map(user => <p key={user.id}>{user.name}</p>)}
        </div>
    );
}`}
            </pre>
                            </div>
                        </div>
                    </section>
                    <section id="useCallback" style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #eb2f96', // Розовый цвет
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        marginTop: '40px',
                        scrollMarginTop: '40px',
                        fontFamily: 'sans-serif'
                    }}>
                        <h2 style={{ marginTop: 0, color: '#9e1055', fontSize: '22px' }}>Мемоизация колбэков (useCallback)</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <p><b>useCallback</b> &mdash; возвращает **мемоизированную версию функции**. Он полезен, когда вы передаете функции в дочерние компоненты, оптимизированные с помощью <code style={codeInlineStyle}>React.memo</code>, чтобы предотвратить их лишние перерисовки.
                            </p>

                            <div>
                                <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Пример сохранения ссылки на обработчик клика:</p>
                                <pre style={codeBlockStyle}>
{`import React, { useState, useCallback } from 'react';
import ProductCard from './ProductCard'; // Допустим, он обернут в React.memo

export default function Shop() {
    const [cart, setCart] = useState([]);

    // Ссылка на функцию останется неизменной между рендерами
    const addToCart = useCallback((id) => {
        setCart((prevCart) => [...prevCart, id]);
    }, []); // Пустой массив — функция создается 1 раз

    return <ProductCard onAdd={addToCart} />;
}`}
            </pre>
                            </div>
                        </div>
                        <div style={{
                            backgroundColor: '#fff7e6', // Нежно-оранжевый фоновый цвет приковывает внимание
                            padding: '20px',
                            borderRadius: '12px',
                            border: '2px dashed #ffa940', // Пунктирная рамка, как у классической карточки-памятки
                            boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                            marginTop: '30px',
                            marginBottom: '20px',
                            fontFamily: 'sans-serif'
                        }}>
                            <h3 style={{ margin: '0 0 12px 0', color: '#d46b08', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                🧠 Шпаргалка: useMemo vs useCallback
                            </h3>

                            <p style={{ margin: '0 0 15px 0', fontSize: '0.95em', color: '#555', lineHeight: '1.5' }}>
                                Оба хука служат для одной цели — **оптимизации производительности**, но кэшируют (мемоизируют) они абсолютно разные вещи:
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <span style={{ fontSize: '1.2em', lineHeight: '1' }}>📦</span>
                                    <div style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                                        <code style={codeInlineStyle}>useMemo</code> кэширует <b>результат вычислений</b>. Он возвращает готовые данные: объект, массив, строку или число.
                                        <br/>
                                        <span style={{ color: '#8c8c8c', fontSize: '0.9em' }}>Решает проблему: «Не пересчитывать тяжелые циклы при каждом рендере».</span>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '5px' }}>
                                    <span style={{ fontSize: '1.2em', lineHeight: '1' }}>⚙️</span>
                                    <div style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                                        <code style={codeInlineStyle}>useCallback</code> кэширует <b>саму функцию</b>. Он возвращает стабильную ссылку на метод, который можно вызвать позже.
                                        <br/>
                                        <span style={{ color: '#8c8c8c', fontSize: '0.9em' }}>Решает проблему: «Не создавать функцию заново, чтобы дочерние компоненты не рендерились лишний раз».</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section id="useTransition" style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #13c2c2', // Красивый бирюзовый или синий акцент
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        marginTop: '40px',
                        scrollMarginTop: '40px',
                        fontFamily: 'sans-serif'
                    }}>
                        <h2 style={{ marginTop: 0, color: '#006d75', fontSize: '22px' }}>⏳ Оптимизация интерфейса (useTransition)</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <p>
                                <b>useTransition</b> &mdash; позволяет разделять обновления состояния на <b>срочные</b> (ввод текста в инпут, клики) и <b>фоновые</b> (рендеринг больших списков, графиков). Благодаря этому интерфейс приложения никогда не блокируется и не "зависает".
                            </p>

                            <div style={{ backgroundColor: '#e6fffb', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #13c2c2' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#006d75' }}>Синтаксис хука:</p>
                                <code style={{ ...codeInlineStyle, display: 'block', padding: '10px', whiteSpace: 'pre' }}>
                                    {`const [isPending, startTransition] = useTransition();`}
                                </code>
                                <ul style={{ margin: '10px 0 0 0', paddingLeft: '20px', fontSize: '0.9em', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                    <li><b>startTransition:</b> Обертка для "тяжелых" изменений стейта, которые можно отложить.</li>
                                    <li><b>isPending:</b> Флаг, сообщающий, что тяжелые вычисления прямо сейчас идут в фоновом режиме.</li>
                                </ul>
                            </div>

                            <div>
                                <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Шаблон использования (Умный поиск):</p>
                                <pre style={codeBlockStyle}>
{`const [query, setQuery] = useState('');
const [list, setList] = useState([]);
const [isPending, startTransition] = useTransition();

const handleChange = (e) => {
    // 1. Срочно меняем текст в инпуте
    setQuery(e.target.value); 
    
    // 2. Фильтрацию списка отправляем в фоновый приоритет
    startTransition(() => {
        setList(heavyFilterFunction(e.target.value));
    });
};`}
            </pre>
                            </div>
                        </div>
                        <div style={{
                            backgroundColor: '#fff7e6',
                            padding: '18px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #ffa940',
                            fontSize: '0.93em',
                            marginTop: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        }}>
                            <p style={{ fontWeight: 'bold', margin: 0, color: '#d46b08', fontSize: '1.05em' }}>
                                🧱 Важные правила и особенности использования:
                            </p>

                            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', lineHeight: '1.5' }}>
                                <li>
                                    <b>Прерываемость (Interruption):</b> Прерывание рендеринга (Interruption): Это самая крутая фишка. Если пользователь быстро пишет слово «React», при вводе буквы R запускается фоновая фильтрация. Но как только пользователь нажимает e, React бросает старую недоделанную фильтрацию для R и мгновенно переключается на обработку нового ввода. Больше никаких зависаний!
                                </li>
                                <li>
                                    <b>Только синхронные сеттеры:</b> Функция внутри <code style={codeInlineStyle}>startTransition</code> должна выполнять изменения стейта синхронно. Туда нельзя помещать асинхронные операции вроде <code style={codeInlineStyle}>setTimeout</code> или дожидаться ответа от <code style={codeInlineStyle} >fetch</code> напрямую.
                                </li>
                                <li>
                                    <b>Не используйте для инпутов:</b> Переменную состояния, привязанную к полю ввода (<code style={codeInlineStyle}>value={"query"}</code>), <b>нельзя</b> оборачивать в фоновый режим. Текст в инпуте всегда должен обновляться синхронно, иначе буквы будут появляться на экране с рывками и задержкой.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section id="useDeferredValue" style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #722ed1', // Красивый фиолетовый акцент
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        marginTop: '40px',
                        scrollMarginTop: '40px',
                        fontFamily: 'sans-serif'
                    }}>
                        <h2 style={{ marginTop: 0, color: '#531dab', fontSize: '22px' }}>Отложенное значение (useDeferredValue)</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <p>
                                <b>useDeferredValue</b> &mdash; принимает значение (обычно строку или массив) и возвращает его <b>копию, которая обновляется с задержкой</b>, только когда процессор свободен. Он работает как встроенный Debounce (задержка), но без жестких таймеров — React сам выбирает лучший момент.
                            </p>

                            {/* Разница с useTransition */}
                            <div style={{ backgroundColor: '#f9f0ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #722ed1' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#531dab' }}>⚖️ В чем разница с useTransition?</p>
                                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.92em' }}>
                                    <li><b>useTransition:</b> Используется, когда у вас есть доступ к функции-сеттеру (<code style={codeInlineStyle}>setQuery</code>) и вы можете обернуть её код руками.</li>
                                    <li><b>useDeferredValue:</b> Используется, когда вы получаете «тяжелое» значение извне (например, через пропсы от родителя) и не можете контролировать момент его изменения.</li>
                                </ul>
                            </div>

                            <div>
                                <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Шаблон использования:</p>
                                <pre style={codeBlockStyle}>
{`import React, { useState, useDeferredValue } from 'react';
import HeavyList from './HeavyList'; // "Тяжелый" компонент списка

export default function SearchPage() {
    const [search, setSearch] = useState('');
    
    // Создаем отложенную копию строки поиска
    const deferredSearch = useDeferredValue(search);

    return (
        <div>
            {/* Текст тут вводится моментально и не лагает */}
            <input value={search} onChange={e => setSearch(e.target.value)} />
            
            {/* Передаем ОТЛОЖЕННОЕ значение в тяжелый список */}
            <HeavyList query={deferredSearch} />
        </div>
    );
}`}
            </pre>
                            </div>

                            {/* Фирменный блок правил */}
                            <div style={{
                                backgroundColor: '#fff7e6',
                                padding: '18px',
                                borderRadius: '8px',
                                borderLeft: '4px solid #ffa940',
                                fontSize: '0.93em',
                                marginTop: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px'
                            }}>
                                <p style={{ fontWeight: 'bold', margin: 0, color: '#d46b08', fontSize: '1.05em' }}>
                                    🧱 Важные особенности:
                                </p>
                                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', lineHeight: '1.5' }}>
                                    <li><b>Индикация загрузки:</b> Вы можете узнать, откладывается ли рендер прямо сейчас, сравнив оригинальное значение и отложенное: <code style={codeInlineStyle}>const isStale = search !== deferredSearch;</code></li>
                                    <li><b>Без искусственных таймеров:</b> В отличие от библиотеки lodash (`_.debounce`), этот хук не заставляет пользователя ждать фиксированные 300мс на быстрых устройствах. На мощном компьютере задержки почти не будет, а на слабом смартфоне она автоматически увеличится, спасая интерфейс от зависания.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ===== USEID ===== */}
                    <section id="useId" style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', borderTop: '6px solid #13c2c2', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', scrollMarginTop: '40px' }}>
                        <h2 style={{ marginTop: 0, color: '#006d75', fontSize: '22px' }}>Уникальные идентификаторы (useId)</h2>
                        <p style={{ margin: '0 0 15px 0', color: '#555' }}>
                            <b>useId</b> &mdash; генерирует стабильный уникальный ID, который не меняется между рендерами
                            и одинаков на сервере и клиенте. Незаменим для связки <code style={codeInlineStyle}>{'<label htmlFor>'}</code>
                            {' '}и <code style={codeInlineStyle}>{'<input id>'}</code>, а также для <code style={codeInlineStyle}>aria-*</code> атрибутов доступности.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                            <div style={{ backgroundColor: '#e6fffb', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #13c2c2' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#006d75' }}>Синтаксис:</p>
                                <code style={{ display: 'block', backgroundColor: '#fff', padding: '6px 12px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>
                                    const id = useId();
                                </code>
                                <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '0.92em', color: '#333' }}>
                                    <li>Возвращает строку вида <code style={codeInlineStyle}>{':r1:'}</code>, <code style={codeInlineStyle}>{':r2:'}</code> — уникальную на всей странице.</li>
                                    <li>Значение стабильно — не меняется при повторных рендерах.</li>
                                    <li>Работает корректно при серверном рендеринге (SSR).</li>
                                </ul>
                            </div>

                            <div>
                                <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>⚠️ Важные правила:</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <div style={{ borderBottom: '1px solid #f0f0f0', paddingBottom: '10px' }}>
                                        <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#cf1322' }}>Не использовать для key в списках!</p>
                                        <p style={{ margin: 0, fontSize: '0.95em', color: '#555' }}>
                                            <code style={codeInlineStyle}>useId</code> предназначен только для атрибутов доступности. Для <code style={codeInlineStyle}>key</code> используй ID из данных.
                                        </p>
                                    </div>
                                    <div>
                                        <p style={{ margin: '0 0 4px 0', fontWeight: '600' }}>Несколько полей — один вызов useId</p>
                                        <p style={{ margin: '0 0 8px 0', fontSize: '0.95em', color: '#555' }}>
                                            Вызывай <code style={codeInlineStyle}>useId()</code> один раз, затем создавай производные через суффиксы:
                                        </p>
                                        <pre style={codeBlockStyle}>
{`function Form() {
    const id = useId();

    return (
        <>
            <label htmlFor={id + '-name'}>Имя</label>
            <input id={id + '-name'} />

            <label htmlFor={id + '-email'}>Email</label>
            <input id={id + '-email'} />
        </>
    );
}`}
                    </pre>
                                    </div>
                                </div>
                            </div>

                            <div style={{ backgroundColor: '#f6ffed', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #52c41a' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#237804' }}>🛠️ Классический пример — связка label + input:</p>
                                <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', border: '1px solid #d9d9d9' }}>
{`import { useId } from 'react';

export default function EmailField() {
    const id = useId();

    return (
        <div>
            <label htmlFor={id}>Email</label>
            <input id={id} type="email" />
        </div>
    );
}`}
            </pre>
                            </div>

                        </div>
                    </section>

                    {/* ===== USEIMPERATIVEHANDLE ===== */}
                    <section id="useImperativeHandle" style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', borderTop: '6px solid #722ed1', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', scrollMarginTop: '40px' }}>
                        <h2 style={{ marginTop: 0, color: '#391085', fontSize: '22px' }}>Управление ref снаружи (useImperativeHandle)</h2>
                        <p style={{ margin: '0 0 15px 0', color: '#555' }}>
                            <b>useImperativeHandle</b> &mdash; позволяет дочернему компоненту самому решать, что именно
                            увидит родитель через <code style={codeInlineStyle}>ref</code>. Вместо «голого» DOM-элемента
                            компонент прячет детали реализации и отдаёт только нужные методы. Используется вместе с <code style={codeInlineStyle}>forwardRef</code>.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                            <div style={{ backgroundColor: '#f9f0ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #722ed1' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#391085' }}>📦 Схема работы:</p>
                                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.92em', color: '#333', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <li>Родитель передаёт <code style={codeInlineStyle}>ref</code> дочернему компоненту.</li>
                                    <li>Дочерний получает его через <code style={codeInlineStyle}>forwardRef</code>.</li>
                                    <li><code style={codeInlineStyle}>useImperativeHandle</code> подменяет содержимое этого ref на свой объект с методами.</li>
                                    <li>Родитель видит только то, что дочерний решил «раскрыть» &mdash; принцип инкапсуляции.</li>
                                </ul>
                            </div>

                            <div>
                                <p style={{ fontWeight: 'bold', margin: '0 0 8px 0' }}>Синтаксис:</p>
                                <pre style={codeBlockStyle}>
{`useImperativeHandle(ref, () => ({
    // методы, которые увидит родитель
    focus: () => inputRef.current?.focus(),
    clear: () => { if (inputRef.current) inputRef.current.value = ''; },
}));`}
            </pre>
                            </div>

                            <div style={{ backgroundColor: '#f6ffed', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #52c41a' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#237804' }}>🛠️ Полный пример — кастомный инпут с методами:</p>
                                <pre style={{ ...codeBlockStyle, backgroundColor: '#fff', border: '1px solid #d9d9d9' }}>
{`import { forwardRef, useRef, useImperativeHandle } from 'react';

// Дочерний: прячет DOM, отдаёт только focus и clear
const FancyInput = forwardRef(function FancyInput(props, ref) {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => inputRef.current?.focus(),
        clear: () => { if (inputRef.current) inputRef.current.value = ''; },
    }));

    return <input ref={inputRef} />;
});

// Родитель: видит только { focus, clear }
export default function Form() {
    const inputRef = useRef(null);

    return (
        <>
            <FancyInput ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>Фокус</button>
            <button onClick={() => inputRef.current.clear()}>Очистить</button>
        </>
    );
}`}
            </pre>
                            </div>

                            <div style={{ backgroundColor: '#fffbe6', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #faad14' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#856404' }}>⚡ Когда использовать:</p>
                                <p style={{ fontSize: '0.95em', margin: 0 }}>
                                    Когда нужно дать родителю управление фокусом, скроллом или воспроизведением медиа &mdash; но <b>без доступа ко всему DOM-элементу целиком</b>. Снаружи виден только «пульт управления», а не внутренности компонента.
                                </p>
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


