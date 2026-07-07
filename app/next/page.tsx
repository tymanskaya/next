"use client";

import React from 'react';

export default function NextJsCheatSheet() {
    const tableHeaderStyle: React.CSSProperties = {
        textAlign: 'left',
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            minHeight: '100vh',
            backgroundColor: '#f0f2f5',
            padding: '40px 20px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: '1.6'
        }}>
            <div style={{ width: '100%', maxWidth: '850px', display: 'flex', flexDirection: 'column', gap: '25px' }}>

                {/* КРАСИВОЕ ЗАГЛАВИЕ СТРАНИЦЫ */}
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
                        <svg height="16" width="16" viewBox="0 0 16 16" style={{ fill: '#000000' }}>
                            <path d="M12.98 2a.45.45 0 0 0-.41.26L6.5 13H4.15l5.24-9.35c.1-.18.06-.41-.11-.53a.47.47 0 0 0-.54.04L2 8.77V14h12V2h-1.02z" />
                        </svg>
                        Production Framework
                    </div>

                    <h1 style={{
                        fontSize: '46px',
                        fontWeight: '850',
                        color: '#1f2328',
                        margin: '0 0 15px 0',
                        letterSpacing: '-0.03em'
                    }}>
                        Что такое <span style={{
                        background: 'linear-gradient(90deg, #000000, #555555)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Next.js</span>?
                    </h1>

                    <p style={{ fontSize: '19px', color: '#636c76', maxWidth: '650px', margin: '0 auto', lineHeight: '1.5' }}>
                        Архитектура, ключевые фичи и фундаментальные отличия от библиотеки <b>React</b> в современной фронтенд-разработке
                    </p>

                    <div style={{ width: '80px', height: '5px', backgroundColor: '#000000', margin: '25px auto 0', borderRadius: '10px' }}></div>
                </div>

                {/* ВНУТРЕННЯЯ НАВИГАЦИЯ ПО СТРАНИЦЕ */}
                <nav style={{
                    backgroundColor: '#fff',
                    padding: '15px 20px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '15px',
                    flexWrap: 'wrap'
                }}>
                    <a href="#difference" style={anchorLinkStyle}>📊 Главное отличие</a>
                    <a href="#routing" style={anchorLinkStyle}>📁 Файловый роутинг</a>
                    <a href="#optimization" style={anchorLinkStyle}>⚡ Оптимизация</a>
                    <a href="#fullstack" style={anchorLinkStyle}>🛠️ Full-stack фичи</a>
                    <a href="#folders" style={anchorLinkStyle}>🔹 Виды папок Next.js</a>
                    <a href="#pageFile" style={anchorLinkStyle}>🔹 Системный файл page.tsx</a>
                    <a href="#layouts" style={anchorLinkStyle}>🔹 layout.tsx и template.tsx</a>



                </nav>

                {/* БЛОК 1: ГЛАВНОЕ ОТЛИЧИЕ */}
                <section id="difference" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>1. Место рендеринга кода (React vs Next.js)</h2>
                    <p style={{ margin: '0 0 15px 0', color: '#555' }}>
                        React &mdash; это библиотека для построения интерфейсов на клиенте. Next.js &mdash; это полноценный фреймворк, который берет React за основу, но переносит сборку страниц на сервер.
                    </p>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', fontSize: '0.95em' }}>
                            <thead>
                            <tr style={{ borderBottom: '2px solid #e1e4e8', backgroundColor: '#fafbfc' }}>
                                <th style={tableHeaderStyle}>Критерий</th>
                                <th style={tableHeaderStyle}>React (Чистый Client-Side)</th>
                                <th style={tableHeaderStyle}>Next.js (Server-Side &amp; Hybrid)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
                                <td style={tableCellStyle}><b>Сборка HTML</b></td>
                                <td style={tableCellStyle}><b>В браузере (CSR).</b> Сервер шлет пустую разметку, браузер сам собирает сайт через JS.</td>
                                <td style={tableCellStyle}><b>На сервере (SSR/SSG).</b> Браузер сразу получает готовую страницу с текстом.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
                                <td style={tableCellStyle}><b>SEO (Поисковики)</b></td>
                                <td style={tableCellStyle}><span style={{ color: '#cf1322' }}>Плохо.</span> Роботы видят пустой HTML и плохо индексируют контент.</td>
                                <td style={tableCellStyle}><span style={{ color: '#388e3c' }}>Идеально.</span> Роботы мгновенно считывают готовый текст с сервера.</td>
                            </tr>
                            <tr>
                                <td style={tableCellStyle}><b>Первый экран</b></td>
                                <td style={tableCellStyle}>Пользователь ждет, пока скачается и запустится тяжелый бандл скриптов.</td>
                                <td style={tableCellStyle}>Каркас и текст видны сразу, а скрипты «оживляют» кнопки чуть позже.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* БЛОК 2: ФАЙЛОВЫЙ РОУТИНГ */}
                <section id="routing" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>2. Автоматический файловый роутинг (App Router)</h2>
                    <p style={{ margin: '0 0 15px 0', color: '#555' }}>
                        Забудь про ручную настройку тяжелого пакета <code style={codeInlineStyle}>react-router-dom</code>. В Next.js структура твоих папок внутри директории <code style={codeInlineStyle}>src/app</code> автоматически превращается в рабочие адреса страниц на сайте.
                    </p>

                    <div style={{ backgroundColor: '#f6f8fa', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #24292f' }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 8px 0' }}>Как устроен App Router:</p>
                        <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.95em' }}>
                            <li>Папка <code style={codeInlineStyle}>src/app/page.tsx</code> &mdash; главная страница сайта (<code style={codeInlineStyle}>/</code>).</li>
                            <li>Папка <code style={codeInlineStyle}>src/app/git/page.tsx</code> &mdash; страница со встроенным адресом <code style={codeInlineStyle}>/git</code>.</li>
                            <li>Папка <code style={codeInlineStyle}>src/app/profile/[id]/page.tsx</code> &mdash; динамический роут для профилей (например, <code style={codeInlineStyle}>/profile/123</code>).</li>
                        </ul>
                    </div>
                </section>

                {/* БЛОК 3: УМНАЯ ОПТИМИЗАЦИЯ */}
                <section id="optimization" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>3. Автоматическая оптимизация производительности</h2>
                    <p style={{ margin: '0 0 15px 0', color: '#555' }}>Next.js поставляется со встроенными умными компонентами, которые берут на себя всю рутину по оптимизации скорости работы приложения:</p>

                    <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95em' }}>
                        <li><b>&lt;Image /&gt;</b> &mdash; автоматически сжимает картинки под экраны, конвертирует их в современный формат WebP и загружает их лениво (строго при скролле).</li>
                        <li><b>&lt;Link /&gt;</b> &mdash; фоном предзагружает (prefetch) код страницы, на которую ведет ссылка, как только она появляется в зоне видимости пользователя.</li>
                        <li><b>&lt;Font /&gt;</b> &mdash; скачивает Google-шрифты на этапе сборки проекта и хранит их локально, защищая интерфейс от задержек загрузки сторонней сети.</li>
                    </ul>
                </section>

                {/* БЛОК 4: API ROUTES */}
                <section id="fullstack" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>4. Возможности Full-stack разработки (API Routes)</h2>
                    <p style={{ margin: '0 0 15px 0', color: '#555' }}>Тебе больше не нужно создавать отдельный бэкенд-сервер на Node.js/Express для простых задач. Вы можете писать бэкенд-код прямо внутри папки проекта Next.js.</p>

                    <div style={{ backgroundColor: '#f0f5ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #2f54eb' }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#1d39c4' }}>Безопасное скрытие секретных токенов и API-ключей:</p>
                        <p style={{ fontSize: '0.95em', margin: 0 }}>
                            Если делать запросы к сторонним ИИ-сервисам (например, OpenAI) прямо из обычного React, злоумышленники увидят твой приватный токен в сетевых вкладках браузера. В Next.js ты можешь создать изолированный файл <code style={codeInlineStyle}>route.ts</code>, делать защищенные запросы через него на стороне сервера, а браузер пользователя никогда не увидит секретные ключи.
                        </p>
                    </div>
                </section>
                {/* БЛОК 5: ВИДЫ ПАПОК В APP ROUTER */}
                <section id="folders" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>5. Виды папок в App Router</h2>
                    <p style={{ margin: '0 0 20px 0', color: '#555' }}>
                        В Next.js папки внутри <code style={codeInlineStyle}>src/app/</code> &mdash; это не просто организация кода. У каждой есть своя роль, определяемая именем папки.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                        {/* 1. Обычная папка */}
                        <div style={folderBlockStyle('#000000')}>
                            <p style={folderTitleStyle}>📁 <span style={{ color: '#d63384', fontFamily: 'monospace' }}>movies</span> &mdash; обычная папка &rarr; сегмент URL</p>
                            <p style={folderExampleStyle}>
                                <span style={{ color: '#666' }}>src/app/movies/page.tsx</span> &rarr; <span style={{ color: '#d63384', fontWeight: 'bold' }}>/movies</span>
                            </p>
                            <p style={{ margin: '8px 0 0 0', fontSize: '0.95em', color: '#333' }}>
                                Просто папка + <code style={codeInlineStyle}>page.tsx</code> внутри = новая страница на сайте.
                            </p>
                        </div>

                        {/* 2. Динамический сегмент */}
                        <div style={folderBlockStyle('#faad14')}>
                            <p style={folderTitleStyle}>📁 <span style={{ color: '#d63384', fontFamily: 'monospace' }}>[id]</span> &mdash; динамический сегмент</p>
                            <p style={folderExampleStyle}>
                                <span style={{ color: '#666' }}>src/app/movies/[id]/page.tsx</span> &rarr; <span style={{ color: '#d63384', fontWeight: 'bold' }}>/movies/123</span> , <span style={{ color: '#d63384', fontWeight: 'bold' }}>/movies/456</span>
                            </p>
                            <p style={{ margin: '8px 0 0 0', fontSize: '0.95em', color: '#333' }}>
                                Значение из URL приходит в компонент через <code style={{...codeInlineStyle, color: '#d63384'}}>params.id</code>.
                            </p>
                        </div>

                        {/* 3. Группа маршрутов */}
                        <div style={folderBlockStyle('#1890ff')}>
                            <p style={folderTitleStyle}>📁 <span style={{ color: '#d63384', fontFamily: 'monospace' }}>(group)</span> &mdash; группа маршрутов <span style={{ color: '#888', fontWeight: 'normal' }}>(не влияет на URL)</span></p>
                            <p style={folderExampleStyle}>
                                <span style={{ color: '#666' }}>src/app/(auth)/login/page.tsx</span> &rarr; <span style={{ color: '#d63384', fontWeight: 'bold' }}>/login</span> <span style={{ color: '#888' }}>(не /auth/login!)</span>
                            </p>
                            <p style={{ margin: '8px 0 0 0', fontSize: '0.95em', color: '#333' }}>
                                Организует файлы и применяет общий <code style={codeInlineStyle}>layout.tsx</code> к группе страниц без лишнего сегмента в адресе.
                            </p>
                        </div>

                        {/* 4. Исключена из роутинга */}
                        <div style={folderBlockStyle('#ff4d4f')}>
                            <p style={folderTitleStyle}>📁 <span style={{ color: '#d63384', fontFamily: 'monospace' }}>_private</span> &mdash; исключена из роутинга</p>
                            <p style={folderExampleStyle}>
                                <span style={{ color: '#666' }}>src/app/_components/Button.tsx</span> &rarr; <span style={{ color: '#cf1322', fontWeight: 'bold' }}>не создаёт страницу</span>
                            </p>
                            <p style={{ margin: '8px 0 0 0', fontSize: '0.95em', color: '#333' }}>
                                Нижнее подчёркивание говорит Next.js: &laquo;это приватная папка, игнорируй её&raquo;.
                            </p>
                        </div>

                        {/* 5. Параллельные роуты */}
                        <div style={folderBlockStyle('#722ed1')}>
                            <p style={folderTitleStyle}>📁 <span style={{ color: '#d63384', fontFamily: 'monospace' }}>@slot</span> &mdash; параллельные роуты</p>
                            <p style={folderExampleStyle}>
                                <span style={{ color: '#666' }}>src/app/@modal/login/page.tsx</span>
                            </p>
                            <p style={{ margin: '8px 0 0 0', fontSize: '0.95em', color: '#333' }}>
                                Продвинутая фича &mdash; рендерит несколько страниц одновременно в одном layout. Например, модалка поверх текущей страницы без смены URL.
                            </p>
                        </div>

                    </div>
                </section>
                {/* БЛОК 6: КАК ВЫГЛЯДИТ PAGE.TSX */}
                <section id="pageFile" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>6. Системный файл page.tsx</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p><b>page.tsx</b> &mdash; это обязательный файл, который делает папку доступной в виде веб-страницы. Он должен содержать React-компонент, экспортируемый <b>по умолчанию (export default)</b>.</p>

                        {/* Разница Server vs Client */}
                        <div style={{ backgroundColor: '#f6f8fa', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #24292f' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#24292f' }}>Два режима работы страницы:</p>
                            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95em' }}>
                                <li><b>Server Component (По умолчанию):</b> Страница рендерится на сервере. В ней можно напрямую делать запросы к базе данных или скрывать API-ключи, но нельзя использовать хуки (<code style={codeInlineStyle}>useState</code>, <code style={codeInlineStyle}>useEffect</code>).</li>
                                <li><b>Client Component (С директивой):</b> Если в самой первой строчке файла написать <code style={codeInlineStyle}>&quot;use client&quot;;</code>, страница оживёт: в ней можно будет кликать по кнопкам, открывать модалки и использовать любые хуки.</li>
                            </ul>
                        </div>

                        {/* Пример кода динамической страницы */}
                        <div>
                            <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Шаблон динамической страницы (например, для /profile/[id]):</p>
                            <pre style={{
                                display: 'block',
                                backgroundColor: '#f5f5f5',
                                padding: '12px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '0.88em',
                                color: '#333',
                                overflowX: 'auto',
                                margin: 0,
                                whiteSpace: 'pre-wrap'
                            }}>
{`// Обязательно экспортируем через default
export default async function ProfilePage({ params }) {
    // Получаем динамический ID из URL-адреса
    const { id } = await params;

    return (
        <div>
            <h1>Личный кабинет</h1>
            <p>Вы просматриваете профиль: {id}</p>
        </div>
    );
}`}
            </pre>
                        </div>
                    </div>
                </section>
                {/* БЛОК 7: LAYOUT И TEMPLATE */}
                <section id="layouts" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>7. Обёртки страниц: layout.tsx и template.tsx</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p>Для создания общих элементов интерфейса (шапки, меню) в Next.js используются файлы <code style={codeInlineStyle}>layout.tsx</code> и <code style={codeInlineStyle}>template.tsx</code>. Они принимают текущую страницу в пропсы как <code style={codeInlineStyle}>children</code>.</p>

                        {/* ПРАВИЛО КОРНЕВОГО ЛАЙАУТА */}
                        <div style={{ backgroundColor: '#fff1f0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ff4d4f' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#cf1322' }}>🚨 Главное правило: Корневой Root Layout</p>
                            <p style={{ fontSize: '0.95em', margin: 0 }}>
                                В самом корне папки <code style={codeInlineStyle}>src/app/layout.tsx</code> <b>обязательно</b> должен лежать самый главный, корневой макет. Он применяется ко всему сайту целиком. Только в этом корневом файле прописываются системные теги <code style={codeInlineStyle}>&lt;html&gt;</code> и <code style={codeInlineStyle}>&lt;body&gt;</code>. Если его удалить или забыть создать, Next.js выдаст критическую ошибку и приложение не запустится.
                            </p>
                        </div>

                        {/* Сравнение макетов и шаблонов */}
                        <div style={{ backgroundColor: '#f0f5ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #2f54eb' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#1d39c4' }}>В чём разница между Layout и Template:</p>
                            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95em' }}>
                                <li>
                                    <b>layout.tsx (Макет):</b> Создаётся один раз. При переходах между страницами внутри него он <b>не перерисовывается</b>. Состояние хуков <code style={codeInlineStyle}>useState</code> внутри макета полностью сохраняется. Идеально для боковых меню (Sidebar). Вложенные макеты в подпапках дополняют корневой, но не заменяют его.
                                </li>
                                <li>
                                    <b>template.tsx (Шаблон):</b> Полностью <b>пересоздаётся с нуля</b> при каждом переходе между страницами. Все стейты внутри него сбрасываются. Идеально подходит, если нужно запускать анимацию появления страницы каждый раз или собирать чистую аналитику просмотров.
                                </li>
                            </ul>
                        </div>

                        {/* Пример кода */}
                        <div>
                            <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Базовый синтаксис корневого layout.tsx:</p>
                            <pre style={{
                                display: 'block',
                                backgroundColor: '#f5f5f5',
                                padding: '12px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontSize: '0.88em',
                                color: '#333',
                                overflowX: 'auto',
                                margin: 0,
                                whiteSpace: 'pre-wrap'
                            }}>
{`// Корневой макет ОБЯЗАН содержать теги html и body
export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body style={{ margin: 0, display: 'flex' }}>
                <aside>Общий Sidebar на весь сайт</aside>
                
                {/* Сюда Next.js подставит вложенные страницы */}
                <main style={{ flex: 1 }}>{children}</main>
            </body>
        </html>
    );
}`}
            </pre>
                        </div>
                    </div>
                </section>


            </div>
        </div>

);
}

// НАБОР СТИЛЕЙ ДЛЯ КОРРЕКТНОЙ СБОРКИ (Вставить в самый конец файла)
const sidebarTitleStyle = {
    fontSize: '11px',
    fontWeight: '700',
    color: '#8c95a0',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    margin: '0 0 10px 10px'
};

const anchorLinkStyle: React.CSSProperties = {
    display: 'block',
    padding: '8px 15px',
    color: '#57606a',
    fontSize: '13px',
    fontWeight: '500',
    textDecoration: 'none',
    borderRadius: '6px',
    transition: 'color 0.2s',
    scrollBehavior: 'smooth'
};

const sectionCardStyle = {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
    scrollMarginTop: '40px'
};

const tableHeaderStyle = {
    padding: '12px',
    textAlign: 'left',
    fontWeight: '700',
    color: '#1f2328'
};

const tableCellStyle = {
    padding: '12px',
    verticalAlign: 'top',
    color: '#444',
    lineHeight: '1.5'
};

const codeInlineStyle = {
    backgroundColor: '#f0f0f0',
    padding: '2px 5px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '0.9em',
    color: '#c41d7f'
};
const folderBlockStyle = (borderColor: string): React.CSSProperties => ({
    backgroundColor: '#fafbfc',
    padding: '20px',
    borderRadius: '8px',
    borderLeft: `4px solid ${borderColor}`,
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
    fontFamily: 'system-ui, sans-serif'
});

const folderTitleStyle: React.CSSProperties = {
    fontWeight: '700',
    margin: '0 0 10px 0',
    color: '#1f2328',
    fontSize: '16px'
};

const folderExampleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '14px',
    fontFamily: 'monospace',
    backgroundColor: '#fff',
    padding: '8px 12px',
    borderRadius: '6px',
    display: 'inline-block',
    border: '1px solid #e1e4e8'
};
