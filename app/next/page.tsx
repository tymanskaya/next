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
                    <a href="#images" style={anchorLinkStyle}>🔹 Оптимизация картинок</a>
                    <a href="#paramsTheory" style={anchorLinkStyle}>🔹 Теория: URI vs Query</a>
                    <a href="#getParamsDetailed" style={anchorLinkStyle}>🔹 Извлечение параметров</a>
                    <a href="#routerMethods" style={anchorLinkStyle}>🔹 Навигация через useRouter</a>
                    <a href="#useClientDeep" style={anchorLinkStyle}>🔹 Под капотом use client</a>
                    <a href="#loadingFile" style={anchorLinkStyle}>🔹 loading.js</a>
                    <a href="#useWithSuspense" style={anchorLinkStyle}>🔹 use() + Suspense</a>
                    <a href="#serverRenderPractice" style={anchorLinkStyle}>🔹 Как сделать SSR</a>

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

                {/* БЛОК 8: РАБОТА С ИЗОБРАЖЕНИЯМИ */}
                <section id="images" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>8. Оптимизация изображений: компонент &lt;Image /&gt;</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p>Встроенный компонент <code style={codeInlineStyle}>&lt;Image /&gt;</code> автоматически оптимизирует картинки: сжимает их размер, конвертирует в современный формат <b>WebP/AVIF</b> и загружает лениво (строго при скролле), что критически ускоряет загрузку сайта.</p>

                        {/* ПРАВИЛО ALT */}
                        <div style={{ backgroundColor: '#fffbe6', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #faad14' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#856404' }}>♿ Важно для доступности: Атрибут alt является обязательным!</p>
                            <p style={{ fontSize: '0.95em', margin: 0 }}>
                                Параметр <code style={codeInlineStyle}>alt</code> (альтернативный текст) обязателен для каждого компонента <code style={codeInlineStyle}>&lt;Image /&gt;</code>. Он нужен для поисковых роботов и экранных дикторов (скринридеров), которые читают сайт вслух незрячим людям. Если картинка является чисто декоративной (например, фоновый узор или незначительная иконка), атрибут всё равно <b>нельзя удалять</b> &mdash; в таком случае укажи в качестве значения пустую строку: <code style={codeInlineStyle}>alt=&quot;&quot;</code>.
                            </p>
                        </div>

                        {/* ДВА СПОСОБА ИМПОРТА ИЗ ПРОЕКТА */}
                        <div style={{ backgroundColor: '#f6f8fa', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #24292f' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 12px 0', color: '#24292f' }}>Варианты подключения локальных изображений:</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                                {/* 1 способ: Папка public */}
                                <div style={{ borderBottom: '1px solid #e1e4e8', paddingBottom: '12px' }}>
                                    <p style={{ margin: '0 0 6px 0', fontWeight: '600' }}>1 способ: Когда картинка импортируется из папки public</p>
                                    <p style={{ margin: '0 0 8px 0', fontSize: '0.93em', color: '#555' }}>
                                        При использовании строкового пути из папки <code style={codeInlineStyle}>public</code> Next.js не может заранее прочитать файл. Поэтому размеры становятся обязательными.
                                    </p>
                                    <p style={{ margin: '0 0 6px 0', fontSize: '0.9em', fontWeight: 'bold', color: '#555' }}>Обязательные атрибуты: <code style={codeInlineStyle}>alt</code>, <code style={codeInlineStyle}>width</code> и <code style={codeInlineStyle}>height</code></p>
                                    <pre style={codeSnippetStyle}>
{`<Image src="/logo.png" alt="IT-Incubator's logo" width={100} height={100} />`}
                    </pre>
                                </div>

                                {/* 2 способ: Папка src */}
                                <div>
                                    <p style={{ margin: '0 0 6px 0', fontWeight: '600' }}>2 способ: Для изображений, которые находятся внутри папки src</p>
                                    <p style={{ margin: '0 0 8px 0', fontSize: '0.93em', color: '#555' }}>
                                        Используется для файлов, расположенных в <code style={codeInlineStyle}>src/assets</code> или рядом с компонентами, а не в public.
                                    </p>
                                    <p style={{ margin: '0 0 6px 0', fontSize: '0.9em', fontWeight: 'bold', color: '#388e3c' }}>
                                        🔥 Ключевое преимущество: при прямом импорте объекта НЕ нужно указывать width и height.
                                    </p>
                                    <pre style={codeSnippetStyle}>
{`import logo from './logo.png'; // Прямой импорт файла как объекта

<Image src={logo} alt="IT-Incubator's logo" />`}
                    </pre>
                                </div>

                            </div>
                        </div>

                        {/* Пример конфигурации удаленных картинок */}
                        <div style={{ backgroundColor: '#fff1f0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ff4d4f' }}>
                            <p><b>Удаленные файлы (по URL из сети):</b> В параметре <code style={codeInlineStyle}>src</code> передается строка-ссылка. Здесь ты <b>обязана вручную указать размеры</b> <code style={codeInlineStyle}>width</code> and <code style={codeInlineStyle}>height</code>, чтобы защитить верстку от дёргания при загрузке.</p>
                            <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#cf1322' }}>🚨 Настройка для внешних ссылок (из интернета):</p>
                            <p style={{ fontSize: '0.95em', margin: '0 0 8px 0' }}>
                                По соображениям безопасности Next.js заблокирует внешние URL-строки, пока ты не пропишешь домен в конфигурационном файле <code style={codeInlineStyle}>next.config.ts</code>. Для них ручные размеры или параметр <code style={codeInlineStyle}>fill</code> также обязательны.
                            </p>
                            <pre style={{ ...codeSnippetStyle, backgroundColor: '#fff', border: '1px solid #ffa39e' }}>
{`const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: '://unsplash.com' }
        ]
    }
};`}
            </pre>
                        </div>
                    </div>
                </section>

                {/* БЛОК 10: ГЛУБОКИЙ РАЗБОР URI И QUERY ПАРАМЕТРОВ */}
                <section id="paramsTheory" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>10. Что такое URI и Query параметры на самом деле?</h2>
                    <p style={{ margin: '0 0 15px 0', color: '#555' }}>
                        Разберём фундаментальную разницу на примере одного URL-адреса:
                    </p>

                    <div style={{
                        backgroundColor: '#fafbfc',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #e1e4e8',
                        fontFamily: 'monospace',
                        fontSize: '0.95em',
                        wordBreak: 'break-all',
                        marginBottom: '20px'
                    }}>
                        https://kinopoisk.ru/movies/<span style={{ backgroundColor: '#e6f7ff', color: '#0050b3', padding: '2px 4px', borderRadius: '4px', fontWeight: 'bold' }}>inception</span>?<span style={{ backgroundColor: '#f6ffed', color: '#237804', padding: '2px 4px', borderRadius: '4px', fontWeight: 'bold' }}>page=2&amp;lang=ru</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                        {/* Раздел: URI */}
                        <div style={{ borderLeft: '4px solid #1890ff', paddingLeft: '15px' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 6px 0', color: '#0050b3', fontSize: '1.05em' }}>🔵 URI-параметры (Path params)</p>
                            <p style={{ margin: '0 0 8px 0', fontSize: '0.95em' }}>Это часть самого пути &mdash; они вшиты прямо в адрес и ведут на конкретное место.</p>
                            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.93em', color: '#444' }}>
                                <li><b>Однозначно идентифицируют ресурс:</b> указывают на конкретный фильм, конкретного пользователя или статью.</li>
                                <li><b>Обязательны для структуры:</b> без них URL либо ведёт на совершенно другую страницу, либо вообще не существует (ошибка 404).</li>
                                <li><b>В Next.js:</b> реализуются через папки в квадратных скобках, например <code style={codeInlineStyle}>[id]</code> или <code style={codeInlineStyle}>[slug]</code>.</li>
                            </ul>
                        </div>

                        {/* Раздел: Query */}
                        <div style={{ borderLeft: '4px solid #52c41a', paddingLeft: '15px' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 6px 0', color: '#237804', fontSize: '1.05em' }}>🟢 Query-параметры (Search params)</p>
                            <p style={{ margin: '0 0 8px 0', fontSize: '0.95em' }}>Это дополнительные динамические настройки и фильтры, которые пишутся в конце адреса.</p>
                            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.93em', color: '#444' }}>
                                <li><b>Синтаксис:</b> всегда идут строго после знака вопроса <code style={codeInlineStyle}>?</code> и разделяются между собой амперсандом <code style={codeInlineStyle}>&amp;</code>.</li>
                                <li><b>Не меняют страницу:</b> они лишь уточняют, сортируют или фильтруют итоговый результат, но глобально пользователь остаётся на том же самом макете.</li>
                                <li><b>Необязательны:</b> их можно полностью стереть из адресной строки &mdash; страница всё равно продолжит успешно работать.</li>
                                <li><b>Используются для:</b> поиска, пагинации (номеров страниц), фильтров каталога и сортировок по цене/дате.</li>
                            </ul>
                        </div>

                        {/* Раздел: Аналогия из жизни */}
                        <div style={{ backgroundColor: '#fffbe6', padding: '15px', borderRadius: '12px', borderLeft: '4px solid #faad14', marginTop: '5px' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#856404' }}>🏠 Прекрасная аналогия из реальной жизни:</p>
                            <p style={{ fontSize: '0.95em', margin: '0 0 10px 0' }}>Представь стандартный адрес для курьера доставки:</p>

                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92em', backgroundColor: '#fff', borderRadius: '6px', overflow: 'hidden', border: '1px solid #ffe58f' }}>
                                <thead>
                                <tr style={{ backgroundColor: '#fffbe6', borderBottom: '1px solid #ffe58f' }}>
                                    <th style={{ padding: '8px 12px', textAlign: 'left', fontWeight: '700' }}>Тип параметра</th>
                                    <th style={{ padding: '8px 12px', textAlign: 'left', fontWeight: '700' }}>Пример из жизни</th>
                                    <th style={{ padding: '8px 12px', textAlign: 'left', fontWeight: '700' }}>Архитектурный смысл</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style={{ borderBottom: '1px solid #ffe58f' }}>
                                    <td style={{ padding: '8px 12px', color: '#0050b3', fontWeight: '600' }}>URI-параметр</td>
                                    <td style={{ padding: '8px 12px' }}>ул. Ленина, дом 5</td>
                                    <td style={{ padding: '8px 12px', color: '#555' }}>Находит конкретный физический объект (здание) в городе.</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px 12px', color: '#237804', fontWeight: '600' }}>Query-параметр</td>
                                    <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>этаж=3&amp;квартира=12</td>
                                    <td style={{ padding: '8px 12px', color: '#555' }}>Уточняет навигацию курьера уже внутри этого конкретного объекта.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </section>
                {/* БЛОК 11: КАК ДОСТАТЬ ПАРАМЕТРЫ И ЗАЧЕМ ЭТО НУЖНО */}
                <section id="getParamsDetailed" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>12. Как достать URI и Query параметры и зачем они нужны</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                        {/* Краткая суть */}
                        <p style={{ margin: 0 }}>
                            <b>URI-параметры</b> идентифицируют конкретный объект на сервере, а <b>Query-параметры</b> фильтруют, ищут или сортируют данные внутри этого объекта, не меняя саму страницу.
                        </p>

                        {/* СПОСОБ 1: НА СЕРВЕРЕ */}
                        <div style={{ backgroundColor: '#f0f5ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #2f54eb' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#1d39c4' }}>🌐 Способ 1: На сервере (Server Components в page.tsx):</p>
                            <p style={{ fontSize: '0.95em', margin: '0 0 10px 0' }}>
                                Параметры приходят автоматически в свойства (props) файла <code style={codeInlineStyle}>page.tsx</code> [INDEX].
                                <b> Критически важно:</b> начиная с Next.js 15, они являются асинхронными (Promise), поэтому перед ними обязательно нужно писать <b>await</b> [INDEX]!
                            </p>

                            <pre style={codeSnippetStyle}>
{`// src/app/movies/[id]/page.tsx
interface PageProps {
    params: Promise<{ id: string }>; // Из названия папки [id]
    searchParams: Promise<{ [key: string]: string | undefined }>; // Из ?page=2
}

export default async function MoviePage({ params, searchParams }: PageProps) {
    // Раскрываем асинхронные параметры через await
    const { id } = await params;
    const { page, lang } = await searchParams;

    return (
        <div>
            <p>Ищем в базе фильм с ID: {id}</p>
            <p>Фильтруем: страница {page || 1}, язык {lang || 'ru'}</p>
        </div>
    );
}`}
            </pre>
                        </div>

                        {/* СПОСОБ 2: НА КЛИЕНТЕ */}
                        <div style={{ backgroundColor: '#f9f0ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #722ed1' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#531dab' }}>💻 Способ 2: На клиенте (Client Components с &quot;use client&quot;):</p>
                            <p style={{ fontSize: '0.95em', margin: '0 0 10px 0' }}>
                                Внутри интерактивных кнопок, форм или виджетов пропсы страницы недоступны [INDEX]. Вместо них используются встроенные хуки из пакета <code style={codeInlineStyle}>next/navigation</code> [INDEX].
                            </p>

                            <pre style={codeSnippetStyle}>
{`"use client";

import { useParams, useSearchParams } from 'next/navigation';

export default function ClientWidget() {
    // 1. Достаем URI (из папки [id])
    const params = useParams();
    const id = params.id; 

    // 2. Достаем Query (всё, что после знака ?)
    const searchParams = useSearchParams();
    const page = searchParams.get('page'); // Используем метод .get()
    const lang = searchParams.get('lang');

    return <p>ID: {id}, Страница: {page}, Язык: {lang}</p>;
}`}
            </pre>
                        </div>

                        {/* ПОЛЕЗНЫЕ МЕТОДЫ SEARCHPARAMS */}
                        <div style={{ backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '8px', fontSize: '0.93em' }}>
                            💡 <b>Полезные встроенные методы клиентского <code style={codeInlineStyle}>useSearchParams()</code>:</b>
                            <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <li><code style={codeInlineStyle}>searchParams.get(&apos;key&apos;)</code> &mdash; возвращает первое найденное значение для этого ключа [INDEX].</li>
                                <li><code style={codeInlineStyle}>searchParams.has(&apos;key&apos;)</code> &mdash; возвращает <code style={codeInlineStyle}>true/false</code>, проверяя, передан ли параметр в URL [INDEX].</li>
                                <li><code style={codeInlineStyle}>searchParams.getAll(&apos;tag&apos;)</code> &mdash; вернет массив, если параметров несколько (например: <code style={codeInlineStyle}>?tag=js&amp;tag=react</code>) [INDEX].</li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/* БЛОК 12: ПРОГРАММНАЯ НАВИГАЦИЯ И USEROUTER */}
                <section id="routerMethods" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>11. Навигация в коде: хуки useRouter и usePathname</h2>
                    <p style={{ margin: '0 0 15px 0', color: '#555' }}>
                        В Next.js для перехода по страницам, предзагрузки данных и отслеживания текущего URL используются встроенные клиентские хуки.
                        <b> Важно:</b> импорт всегда должен идти строго из <code style={codeInlineStyle}>&quot;next/navigation&quot;</code>.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                        {/* Блок: Отслеживание активных ссылок */}
                        <div style={{ backgroundColor: '#e6f7ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #1890ff' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#0050b3' }}>🔍 Динамическое определение активного пути:</p>
                            <p style={{ fontSize: '0.95em', margin: '0 0 8px 0' }}>
                                Хук <code style={codeInlineStyle}>usePathname()</code> возвращает строку с текущим адресом (например, <code style={codeInlineStyle}>/git</code>). С его помощью создаётся функция проверки активности ссылки для подсветки пунктов меню:
                            </p>
                            <pre style={codeSnippetStyle}>
{`const pathname = usePathname();
const isActive = (path: string) => pathname === path;`}
            </pre>
                        </div>

                        {/* Блок: Разбор всех методов useRouter с примерами верстки */}
                        <div>
                            <p style={{ fontWeight: 'bold', margin: '0 0 15px 0' }}>🛠️ Разбор всех методов объекта router и примеры кнопок в JSX:</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                                {/* 1. router.push */}
                                <div style={methodRowStyle}>
                                    <code style={methodCodeStyle}>router.push(path, options?)</code>
                                    <p style={{ margin: '4px 0 6px 0', fontSize: '0.95em' }}>
                                        Перебрасывает пользователя на новый адрес, добавляя его в историю браузера. Кнопка &laquo;Назад&raquo; на компьютере будет работать.
                                    </p>
                                    <pre style={codeSnippetStyle}>
{`<li>
    <button 
        onClick={() => router.push("/git")} 
        className={\`\${styles.link} \${isActive("/git") ? styles.active : ""}\`}
    >
        GIT
    </button>
</li>

// Пример с отключением скролла наверх при переходе:
<button onClick={() => router.push("/profile/123", { scroll: false })}>
    Профиль
</button>`}
                    </pre>
                                </div>

                                {/* 2. router.replace */}
                                <div style={methodRowStyle}>
                                    <code style={methodCodeStyle}>router.replace(path, options?)</code>
                                    <p style={{ margin: '4px 0 6px 0', fontSize: '0.95em' }}>
                                        Перезаписывает (заменяет) текущий адрес в истории браузера на новый. Пользователь <b>не сможет</b> вернуться назад на предыдущую страницу.
                                    </p>
                                    <pre style={codeSnippetStyle}>
{`<li>
    <button 
        onClick={() => router.replace("/dashboard")} 
        className={\`\${styles.link} \${isActive("/dashboard") ? styles.active : ""}\`}
    >
        Панель управления
    </button>
</li>`}
                    </pre>
                                </div>

                                {/* 3. router.refresh */}
                                <div style={methodRowStyle}>
                                    <code style={methodCodeStyle}>router.refresh()</code>
                                    <p style={{ margin: '4px 0 6px 0', fontSize: '0.95em' }}>
                                        Обновляет текущий маршрут. Он заново делает запросы к серверу за данными и перерендеривает Серверные компоненты (Server Components), при этом **полностью сохраняя текущее состояние клиентских хуков** (<code style={codeInlineStyle}>useState</code>, положение скролла, фокус ввода в инпутах не сбросятся). Полезно для мгновенного обновления списков после добавления новой записи.
                                    </p>
                                    <pre style={codeSnippetStyle}>
{`<li>
    <button onClick={() => router.refresh()} className={styles.link}>
        Обновить данные
    </button>
</li>`}
                    </pre>
                                </div>

                                {/* 4. router.prefetch */}
                                <div style={methodRowStyle}>
                                    <code style={methodCodeStyle}>router.prefetch(path)</code>
                                    <p style={{ margin: '4px 0 6px 0', fontSize: '0.95em' }}>
                                        Программный **Prefetching (предзагрузка)**. Говорит Next.js заранее незаметно скачать в кэш браузера код и данные указанной страницы. Когда пользователь реально нажмет кнопку перехода, страница откроется мгновенно без ожидания сети. Встроенный тег <code style={codeInlineStyle}>&lt;Link&gt;</code> делает это автоматически, но метод <code style={codeInlineStyle}>router.prefetch()</code> незаменим, если навигация завязана на кастомные кнопки или логику.
                                    </p>
                                    <pre style={codeSnippetStyle}>
{`<li>
    {/* Загрузит код страницы '/profile' заранее, например, при наведении мыши */}
    <button 
        onMouseEnter={() => router.prefetch("/profile")} 
        onClick={() => router.push("/profile")} 
        className={styles.link}
    >
        Профиль (Быстрый вход)
    </button>
</li>`}
                    </pre>
                                    {/* Предупреждение о внешних ссылках для prefetch */}
                                    <div style={{
                                        backgroundColor: '#fff1f0',
                                        padding: '12px 15px',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #ff4d4f',
                                        marginTop: '10px',
                                        fontSize: '0.93em'
                                    }}>
                                        <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: '#cf1322' }}>⚠️ Ограничение метода prefetch:</p>
                                        <p style={{ margin: 0, color: '#444' }}>
                                            Метод <code style={codeInlineStyle}>router.prefetch()</code> работает <b>строго с внутренними маршрутами</b> твоего приложения. Ты не можешь предзагрузить сторонний сайт (например, Google или YouTube). Этот инструмент ищет файлы внутри твоей папки <code style={codeInlineStyle}>src/app/</code>, чтобы скачать их серверный кэш для мгновенного переключения.
                                        </p>
                                    </div>

                                </div>

                                {/* 5. router.back */}
                                <div style={methodRowStyle}>
                                    <code style={methodCodeStyle}>router.back()</code>
                                    <p style={{ margin: '4px 0 6px 0', fontSize: '0.95em' }}>
                                        Аналог кнопки &laquo;Назад&raquo; в браузере. Возвращает пользователя на одну страницу назад по его истории переходов.
                                    </p>
                                    <pre style={codeSnippetStyle}>
{`<li>
    <button onClick={() => router.back()} className={styles.link}>
        Back
    </button>
</li>`}
                    </pre>
                                </div>

                                {/* 6. router.forward */}
                                <div style={methodRowStyle}>
                                    <code style={methodCodeStyle}>router.forward()</code>
                                    <p style={{ margin: '4px 0 6px 0', fontSize: '0.95em' }}>
                                        Аналог кнопки &laquo;Вперёд&raquo; в браузере. Перемещает пользователя на одну страницу вперёд, если он до этого возвращался назад.
                                    </p>
                                    <pre style={codeSnippetStyle}>
{`<li>
    <button onClick={() => router.forward()} className={styles.link}>
        Forward
    </button>
</li>`}
                    </pre>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                {/* БЛОК 13: КАК РАБОТАЕТ USE CLIENT ПОД КАПОТОМ */}
                <section id="useClientDeep" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>13. Как на самом деле работает &quot;use client&quot;?</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p>Критически важное правило для понимания Next.js: <b>директива &quot;use client&quot; НЕ превращает компонент в чистый Client-Side (CSR)</b>. Страница всё равно проходит этап сборки на сервере.</p>

                        {/* Двухэтапная схема */}
                        <div style={{ backgroundColor: '#f6ffed', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #52c41a' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#237804' }}>🔄 Процесс гибридного рендеринга (Гидратация):</p>
                            <ol style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95em' }}>
                                <li>
                                    <b>Этап 1 (На сервере):</b> Next.js берет твой клиентский компонент и делает из него предварительный «сухой» HTML-каркас (Pre-rendering) [INDEX]. Пользователь мгновенно видит текст и блоки вместо белого экрана.
                                </li>
                                <li>
                                    <b>Этап 2 (В браузере):</b> Браузер загружает JavaScript и накладывает его на готовый HTML-каркас. Этот процесс называется <b>Гидратацией (Hydration)</b> &mdash; интерфейс оживает, подключаются хуки <code style={codeInlineStyle}>useState</code> и начинают работать клики [INDEX].
                                </li>
                            </ol>
                        </div>

                        {/* Что разрешает директива */}
                        <div style={{ backgroundColor: '#f5f5f5', padding: '12px', borderRadius: '8px', fontSize: '0.93em' }}>
                            💡 <b>Запомни:</b> Строка <code style={codeInlineStyle}>&quot;use client&quot;;</code> &mdash; это просто граница (Boundary) между серверным и клиентским кодом [INDEX]. Она говорит Next.js: <i>«Этому файлу и всем его вложенным импортам разрешено использовать браузерные API (window, document, localStorage), обработчики событий (onClick, onChange, onSubmit) и хуки React (useState, useEffect, useReducer, кастомным хукам)»</i> [INDEX].
                        </div>
                    </div>
                    {/* СВОДНАЯ ТАБЛИЦА ПРОЦЕССА */}
                    <div>
                        <p style={{ fontWeight: 'bold', margin: '10px 0 10px 0' }}>📋 Сводная таблица: Что и где происходит для &quot;use client&quot;</p>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92em', border: '1px solid #e1e4e8' }}>
                                <thead>
                                <tr style={{ backgroundColor: '#fafbfc', borderBottom: '2px solid #e1e4e8' }}>
                                    <th style={tableHeaderStyle}>Этап разработки</th>
                                    <th style={tableHeaderStyle}>Где выполняется код?</th>
                                    <th style={tableHeaderStyle}>Что именно происходит?</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
                                    <td style={tableCellStyle}><b>Первый визит (SSR)</b></td>
                                    <td style={{ ...tableCellStyle, color: '#0050b3', fontWeight: '600' }}>🌐 На Сервере</td>
                                    <td style={tableCellStyle}>Генерация начального HTML-каркаса страницы, чтобы пользователь не смотрел на белый экран [INDEX].</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
                                    <td style={tableCellStyle}><b>Оживление (Hydration)</b></td>
                                    <td style={{ ...tableCellStyle, color: '#722ed1', fontWeight: '600' }}>💻 В Браузере</td>
                                    <td style={tableCellStyle}>Подключение хуков, запуск обработчиков событий (<code style={codeInlineStyle}>onClick</code>), &laquo;оживление&raquo; интерфейса [INDEX].</td>
                                </tr>
                                <tr>
                                    <td style={tableCellStyle}><b>Повторные клики и роутинг</b></td>
                                    <td style={{ ...tableCellStyle, color: '#237804', fontWeight: '600' }}>💻 В Браузере</td>
                                    <td style={tableCellStyle}>Все дальнейшие изменения состояния (<code style={codeInlineStyle}>useState</code>), переключения табов и отрисовка новых блоков происходят <b>строго в браузере</b> [INDEX].</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Подблок: Почему первый рендер на сервере критичен для SEO */}
                    <div style={{
                        backgroundColor: '#f0f5ff',
                        padding: '15px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #2f54eb',
                        marginTop: '10px'
                    }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#1d39c4' }}>🎯 Зачем нужен первый рендер на сервере (Даже для Клиентских компонентов)?</p>
                        <p style={{ fontSize: '0.95em', margin: 0, color: '#333', lineHeight: '1.5' }}>
                            Основная причина первичной сборки разметки на сервере &mdash; это <b>Идеальное SEO (Поисковая оптимизация)</b> [INDEX].
                            Поисковые роботы (Яндекс, Google) сканируют страницы мгновенно. Если бы Next.js отдавал пустую страницу-пустышку (как чистый React), роботы не увидели бы твоего текста [INDEX].
                            Благодаря первому серверному запросу, робот сразу считывает полностью заполненный контентом HTML-код, индексирует сайт и выводит его на первые строчки поиска [INDEX].
                        </p>
                    </div>

                </section>

                {/* БЛОК 14: LOADING.JS */}
                <section id="loadingFile" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>14. Системный файл loading.js: экран загрузки для сегмента</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p style={{ margin: 0, color: '#444' }}>
                            <code style={codeInlineStyle}>loading.js</code> или <code style={codeInlineStyle}>loading.tsx</code> &mdash; это специальный файл App Router, который показывает пользователю временный интерфейс, пока новая страница или вложенный сегмент маршрута ещё загружается. Внутри Next.js он автоматически создаёт границу <code style={codeInlineStyle}>&lt;Suspense&gt;</code> вокруг содержимого сегмента.
                        </p>

                        <div style={{ backgroundColor: '#f0f5ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #2f54eb' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#1d39c4' }}>📁 Куда класть loading.tsx:</p>
                            <pre style={codeSnippetStyle}>
{`app/
  dashboard/
    loading.tsx   // показывается, пока грузится /dashboard
    page.tsx

  profile/
    [id]/
      loading.tsx // показывается, пока грузится /profile/123
      page.tsx`}
                            </pre>
                            <p style={{ fontSize: '0.95em', margin: '10px 0 0 0', color: '#444' }}>
                                Файл работает только для своей папки и дочерних сегментов. Если положить его в <code style={codeInlineStyle}>app/dashboard/loading.tsx</code>, он станет fallback UI для <code style={codeInlineStyle}>dashboard/page.tsx</code> и маршрутов ниже.
                            </p>
                        </div>

                        <div>
                            <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Минимальный пример:</p>
                            <pre style={codeSnippetStyle}>
{`// app/dashboard/loading.tsx
export default function Loading() {
    return <p>Загрузка...</p>;
}`}
                            </pre>
                        </div>

                        <div>
                            <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Более полезный вариант со скелетоном:</p>
                            <pre style={codeSnippetStyle}>
{`// app/dashboard/loading.tsx
export default function Loading() {
    return (
        <main style={{ padding: '24px' }}>
            <div style={{ width: '220px', height: '28px', background: '#e5e7eb', borderRadius: '6px' }} />
            <div style={{ marginTop: '16px', display: 'grid', gap: '12px' }}>
                <div style={{ height: '80px', background: '#f3f4f6', borderRadius: '8px' }} />
                <div style={{ height: '80px', background: '#f3f4f6', borderRadius: '8px' }} />
                <div style={{ height: '80px', background: '#f3f4f6', borderRadius: '8px' }} />
            </div>
        </main>
    );
}`}
                            </pre>
                        </div>

                        <div style={{ backgroundColor: '#f6ffed', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #52c41a' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#237804' }}>🔄 Что происходит при переходе:</p>
                            <ol style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95em' }}>
                                <li>Пользователь кликает на ссылку или вызывает <code style={codeInlineStyle}>router.push()</code>.</li>
                                <li>Next.js сразу показывает UI из ближайшего <code style={codeInlineStyle}>loading.tsx</code>, если основной сегмент ещё не готов.</li>
                                <li>Сервер продолжает рендерить настоящую страницу и постепенно стримит результат в браузер.</li>
                                <li>Когда данные и разметка готовы, fallback автоматически заменяется настоящим содержимым.</li>
                            </ol>
                        </div>

                        <div style={{ backgroundColor: '#fffbe6', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #faad14' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#856404' }}>⚠️ Важная граница ответственности:</p>
                            <p style={{ fontSize: '0.95em', margin: '0 0 10px 0', color: '#444' }}>
                                <code style={codeInlineStyle}>loading.tsx</code> автоматически оборачивает <code style={codeInlineStyle}>page.tsx</code>, <code style={codeInlineStyle}>not-found.tsx</code> и вложенные сегменты ниже. Но он <b>не оборачивает</b> <code style={codeInlineStyle}>layout.tsx</code>, <code style={codeInlineStyle}>template.tsx</code> и <code style={codeInlineStyle}>error.tsx</code> в той же папке.
                            </p>
                            <p style={{ fontSize: '0.95em', margin: 0, color: '#444' }}>
                                Поэтому если долгий запрос находится прямо в <code style={codeInlineStyle}>layout.tsx</code>, экран загрузки может не появиться вовремя: навигация будет ждать, пока layout закончит работу. Обычно долгие запросы лучше переносить в <code style={codeInlineStyle}>page.tsx</code> или оборачивать конкретную тяжёлую часть layout в ручной <code style={codeInlineStyle}>&lt;Suspense&gt;</code>.
                            </p>
                        </div>

                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92em', border: '1px solid #e1e4e8' }}>
                                <thead>
                                <tr style={{ backgroundColor: '#fafbfc', borderBottom: '2px solid #e1e4e8' }}>
                                    <th style={tableHeaderStyle}>Ситуация</th>
                                    <th style={tableHeaderStyle}>Что использовать</th>
                                    <th style={tableHeaderStyle}>Почему</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
                                    <td style={tableCellStyle}>Нужно показать общий экран загрузки для всей страницы</td>
                                    <td style={{ ...tableCellStyle, color: '#1d39c4', fontWeight: '600' }}>loading.tsx</td>
                                    <td style={tableCellStyle}>Next.js сам создаст Suspense boundary вокруг сегмента.</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
                                    <td style={tableCellStyle}>Нужно загрузить несколько блоков страницы независимо</td>
                                    <td style={{ ...tableCellStyle, color: '#722ed1', fontWeight: '600' }}>Ручной &lt;Suspense&gt;</td>
                                    <td style={tableCellStyle}>Каждый блок получит свой fallback и сможет появляться по мере готовности.</td>
                                </tr>
                                <tr>
                                    <td style={tableCellStyle}>Нужно обработать ошибку загрузки</td>
                                    <td style={{ ...tableCellStyle, color: '#cf1322', fontWeight: '600' }}>error.tsx</td>
                                    <td style={tableCellStyle}><code style={codeInlineStyle}>loading.tsx</code> отвечает только за ожидание, а не за ошибки.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div style={{ backgroundColor: '#f6f8fa', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #24292f' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#24292f' }}>🧠 Что важно запомнить:</p>
                            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '7px', fontSize: '0.95em', color: '#444' }}>
                                <li><code style={codeInlineStyle}>loading.tsx</code> не принимает пропсы.</li>
                                <li>По умолчанию это Server Component, но при необходимости можно добавить <code style={codeInlineStyle}>&quot;use client&quot;</code>.</li>
                                <li>Лучший loading UI &mdash; не просто текст, а skeleton, который похож на будущую страницу.</li>
                                <li>Общие layout остаются интерактивными, пока новый сегмент догружается.</li>
                                <li>При streaming сервер может уже начать отдавать HTML, поэтому статус ответа обычно остаётся <code style={codeInlineStyle}>200</code>.</li>
                                <li>Если нужна гарантированно мгновенная клиентская навигация, одного <code style={codeInlineStyle}>loading.tsx</code> может быть недостаточно: в Next 16 для этого отдельно используется настройка instant navigation.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* БЛОК 15: USE И SUSPENSE */}
                <section id="useWithSuspense" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>15. Хук use() и связка с Suspense</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p style={{ margin: 0, color: '#444' }}>
                            <code style={codeInlineStyle}>use()</code> &mdash; это React API для чтения асинхронного значения прямо во время рендера. В Next.js он особенно важен, потому что <code style={codeInlineStyle}>params</code> и <code style={codeInlineStyle}>searchParams</code> в <code style={codeInlineStyle}>page.tsx</code> являются <b>Promise</b>. В серверной странице их обычно раскрывают через <code style={codeInlineStyle}>await</code>, а в клиентской странице можно раскрыть через <code style={codeInlineStyle}>use()</code>.
                        </p>

                        <div style={{ backgroundColor: '#f6ffed', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #52c41a' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#237804' }}>🧠 Главная идея:</p>
                            <ol style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95em' }}>
                                <li>Компонент вызывает <code style={codeInlineStyle}>use(promise)</code>.</li>
                                <li>Если Promise уже выполнен, React сразу возвращает готовое значение.</li>
                                <li>Если Promise ещё выполняется, React временно приостанавливает этот компонент.</li>
                                <li>Ближайший родительский <code style={codeInlineStyle}>&lt;Suspense fallback=...&gt;</code> показывает запасной UI.</li>
                                <li>Когда Promise завершается, React продолжает рендер и заменяет fallback настоящим содержимым.</li>
                            </ol>
                        </div>

                        <div style={{ backgroundColor: '#f0f5ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #2f54eb' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#1d39c4' }}>📌 Серверный вариант: async/await проще</p>
                            <pre style={codeSnippetStyle}>
{`// app/blog/[slug]/page.tsx
export default async function Page({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ page?: string }>;
}) {
    const { slug } = await params;
    const { page = '1' } = await searchParams;

    return <h1>Пост: {slug}, страница: {page}</h1>;
}`}
                            </pre>
                            <p style={{ fontSize: '0.95em', margin: '10px 0 0 0', color: '#444' }}>
                                В Server Component можно сделать компонент <code style={codeInlineStyle}>async</code> и спокойно использовать <code style={codeInlineStyle}>await</code>. Это самый прямой и читаемый путь для страниц без клиентской интерактивности.
                            </p>
                        </div>

                        <div style={{ backgroundColor: '#f9f0ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #722ed1' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#531dab' }}>💻 Клиентский вариант: use() читает Promise</p>
                            <pre style={codeSnippetStyle}>
{`// app/shop/page.tsx
"use client";

import { use } from 'react';

export default function Page({
    searchParams,
}: {
    searchParams: Promise<{ query?: string; page?: string }>;
}) {
    const { query = '', page = '1' } = use(searchParams);

    return (
        <section>
            <h1>Каталог</h1>
            <p>Поиск: {query || 'без фильтра'}</p>
            <p>Страница: {page}</p>
        </section>
    );
}`}
                            </pre>
                            <p style={{ fontSize: '0.95em', margin: '10px 0 0 0', color: '#444' }}>
                                Client Component нельзя объявлять как <code style={codeInlineStyle}>async function Page()</code>. Поэтому, если пропс уже пришёл как Promise, его раскрывают через <code style={codeInlineStyle}>use(searchParams)</code>.
                            </p>
                        </div>

                        <div>
                            <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Связка с ручным Suspense:</p>
                            <pre style={codeSnippetStyle}>
{`// app/users/page.tsx
import { Suspense } from 'react';
import UsersList from './UsersList';

async function getUsers() {
    const res = await fetch('https://api.com/users');
    return res.json();
}

export default function Page() {
    const usersPromise = getUsers();

    return (
        <Suspense fallback={<p>Загружаем пользователей...</p>}>
            <UsersList usersPromise={usersPromise} />
        </Suspense>
    );
}`}
                            </pre>
                            <pre style={{ ...codeSnippetStyle, marginTop: '10px' }}>
{`// app/users/UsersList.tsx
"use client";

import { use } from 'react';

type User = {
    id: string;
    name: string;
};

export default function UsersList({
    usersPromise,
}: {
    usersPromise: Promise<User[]>;
}) {
    const users = use(usersPromise);

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}`}
                            </pre>
                        </div>

                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92em', border: '1px solid #e1e4e8' }}>
                                <thead>
                                <tr style={{ backgroundColor: '#fafbfc', borderBottom: '2px solid #e1e4e8' }}>
                                    <th style={tableHeaderStyle}>Инструмент</th>
                                    <th style={tableHeaderStyle}>Что делает</th>
                                    <th style={tableHeaderStyle}>Когда использовать</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
                                    <td style={{ ...tableCellStyle, color: '#237804', fontWeight: '600' }}>await</td>
                                    <td style={tableCellStyle}>Ждёт Promise внутри async Server Component.</td>
                                    <td style={tableCellStyle}>Обычная серверная страница или серверный компонент.</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
                                    <td style={{ ...tableCellStyle, color: '#531dab', fontWeight: '600' }}>use(promise)</td>
                                    <td style={tableCellStyle}>Читает Promise во время рендера и может приостановить компонент.</td>
                                    <td style={tableCellStyle}>Client Component, который получил Promise через props.</td>
                                </tr>
                                <tr>
                                    <td style={{ ...tableCellStyle, color: '#1d39c4', fontWeight: '600' }}>&lt;Suspense&gt;</td>
                                    <td style={tableCellStyle}>Показывает fallback, пока вложенный компонент suspended.</td>
                                    <td style={tableCellStyle}>Когда нужно контролировать, какая часть UI ждёт данные.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div style={{ backgroundColor: '#fffbe6', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #faad14' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#856404' }}>⚠️ Частая ошибка:</p>
                            <p style={{ fontSize: '0.95em', margin: 0, color: '#444' }}>
                                Не создавай новый Promise прямо в теле клиентского компонента на каждом рендере и сразу не передавай его в <code style={codeInlineStyle}>use()</code>. Так можно получить бесконечные повторные ожидания. Promise должен быть стабильным: прийти из Server Component через props, быть созданным выше по дереву или управляться через подходящий кэш/фреймворк-механизм.
                            </p>
                        </div>

                        <div style={{ backgroundColor: '#f6f8fa', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #24292f' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#24292f' }}>Короткая формула:</p>
                            <p style={{ fontSize: '0.95em', margin: 0, color: '#444' }}>
                                <code style={codeInlineStyle}>use()</code> &mdash; это точка чтения Promise, а <code style={codeInlineStyle}>&lt;Suspense&gt;</code> &mdash; место, где пользователь видит fallback, пока Promise не готов. Без Suspense ожидание всё равно произойдёт, но ты потеряешь точный контроль над тем, какой loading UI показать.
                            </p>
                        </div>
                    </div>
                </section>

                {/* БЛОК 16: КАК СДЕЛАТЬ СЕРВЕРНЫЙ РЕНДЕР */}
                <section id="serverRenderPractice" style={sectionCardStyle}>
                    <h2 style={{ marginTop: 0, color: '#000', fontSize: '22px' }}>16. Практика: Как сделать рендеринг на сервере?</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p>В Next.js App Router все компоненты <b>по умолчанию являются серверными</b>. Тебе не нужно включать SSR вручную &mdash; достаточно просто не писать директиву <code style={codeInlineStyle}>&quot;use client&quot;;</code> вверху файла [INDEX].</p>

                        {/* Шаблон серверного компонента */}
                        <div>
                            <p style={{ fontWeight: 'bold', margin: '5px 0 8px 0' }}>Идеальный шаблон серверной страницы с запросом данных:</p>
                            <pre style={codeSnippetStyle}>
{`// src/app/movies/page.tsx
// Компонент является асинхронным (async default)
export default async function MoviesPage() {
    // Запрос выполняется напрямую на сервере в момент клика пользователя
    const res = await fetch('https://api.com', { cache: 'no-store' });
    const movies = await res.json();

    return (
        <div>
            <h1>Каталог фильмов (SSR)</h1>
            <ul>
                {movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
            </ul>
        </div>
    );
}`}
            </pre>
                        </div>

                        {/* Главное правило архитектуры */}
                        <div style={{ backgroundColor: '#fff7e6', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #faad14', fontSize: '0.95em' }}>
                            📌 <b>Золотое правило архитектуры Next.js:</b> <br/>
                            Делай страницы серверными на 90%. Если внутри страницы нужна интерактивность (например, форма ввода или кнопка переключения табов), выноси её в отдельный изолированный клиентский компонент (папка <code style={codeInlineStyle}>_components</code>) и просто импортируй внутрь серверного макета. Это сохранит высокую скорость загрузки и идеальное SEO [INDEX].
                        </div>
                    </div>
                    {/* ПОДБЛОК: ГЛУБОКИЙ РАЗБОР АСИНХРОННЫХ КОМПОНЕНТОВ */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#1f2328' }}>🧠 Глубокий разбор: Почему компонент стал асинхронным?</p>
                        <p style={{ fontSize: '0.95em', margin: 0, color: '#444' }}>
                            В чистом React компоненты обязаны быть синхронными и сразу возвращать JSX [INDEX]. В серверных компонентах Next.js мы имеем право писать <code style={codeInlineStyle}>async/await</code> напрямую в теле функции [INDEX]. Это избавляет от необходимости писать тонны шаблонного кода с <code style={codeInlineStyle}>useEffect</code> и <code style={codeInlineStyle}>useState</code> для каждого запроса [INDEX].
                        </p>

                        {/* Сравнительная таблица запросов */}
                        <div style={{ overflowX: 'auto', marginTop: '10px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92em', border: '1px solid #e1e4e8' }}>
                                <thead>
                                <tr style={{ backgroundColor: '#fafbfc', borderBottom: '2px solid #e1e4e8' }}>
                                    <th style={tableHeaderStyle}>Где запрашиваем?</th>
                                    <th style={tableHeaderStyle}>Как выглядит код?</th>
                                    <th style={tableHeaderStyle}>Плюсы и особенности</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style={{ borderBottom: '1px solid #e1e4e8' }}>
                                    <td style={{ ...tableCellStyle, color: '#237804', fontWeight: '600' }}>🌐 На Сервере (По умолчанию)</td>
                                    <td style={{ ...tableCellStyle, fontFamily: 'monospace', fontSize: '0.85em', color: '#c41d7f' }}>
                                        {`export default async function Page() {
  const data = await fetch('...').then(res => res.json());
  return <div>{data.title}</div>;
}`}
                                    </td>
                                    <td style={tableCellStyle}>
                                        Компонент помечается как <code style={codeInlineStyle}>async</code>. Запрос идет на сервере, в браузер летит готовый HTML [INDEX]. <b>Идеально для SEO</b> [INDEX].
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ ...tableCellStyle, color: '#531dab', fontWeight: '600' }}>💻 На Клиенте (&quot;use client&quot;)</td>
                                    <td style={{ ...tableCellStyle, fontFamily: 'monospace', fontSize: '0.85em', color: '#555' }}>
                                        {`export default function Page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('...').then(res => res.json()).then(setData);
  }, []);
  return <div>{data?.title}</div>;
}`}
                                    </td>
                                    <td style={tableCellStyle}>
                                        Делать сам компонент асинхронным <b>запрещено</b>! Данные тянутся из браузера пользователя через стандартные хуки [INDEX].
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* ПОДБЛОК: КАК ЭТО УСТРОЕНО ПОД КАПОТОМ (ПОШАГОВО) */}
                    <div style={{
                        marginTop: '25px',
                        backgroundColor: '#f6f8fa',
                        padding: '20px',
                        borderRadius: '8px',
                        border: '1px solid #e1e4e8'
                    }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 15px 0', color: '#24292f', fontSize: '1.05em' }}>
                            🧱 Как это устроено под капотом (Пошагово):
                        </p>

                        <p style={{ fontSize: '0.95em', margin: '0 0 15px 0', color: '#57606a' }}>
                            Когда пользователь переходит на асинхронную серверную страницу, за кулисами происходит следующий процесс:
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', position: 'relative' }}>

                            {/* Шаг 1 */}
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <div style={stepNumberStyle}>1</div>
                                <div>
                                    <p style={{ margin: '0 0 4px 0', fontWeight: '600' }}>Анализ компонента</p>
                                    <p style={{ margin: 0, fontSize: '0.93em', color: '#444' }}>
                                        Next.js видит ключевое слово <code style={codeInlineStyle}>async</code> у экспортируемого компонента страницы.
                                    </p>
                                </div>
                            </div>

                            {/* Шаг 2 */}
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <div style={stepNumberStyle}>2</div>
                                <div>
                                    <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#1d39c4' }}>Ожидание данных (Пауза)</p>
                                    <p style={{ margin: 0, fontSize: '0.93em', color: '#444' }}>
                                        Сервер ставит рендеринг этой страницы &laquo;на паузу&raquo; и покорно ждет, пока полностью выполнится твой запрос <code style={codeInlineStyle}>await fetch()</code>.
                                    </p>
                                </div>
                            </div>

                            {/* Шаг 3 */}
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <div style={stepNumberStyle}>3</div>
                                <div>
                                    <p style={{ margin: '0 0 4px 0', fontWeight: '600' }}>Сборка HTML-строки</p>
                                    <p style={{ margin: 0, fontSize: '0.93em', color: '#444' }}>
                                        Сервер успешно получает данные из базы, подставляет их в JSX-верстку, превращает весь компонент в готовую текстовую HTML-строку и отправляет её по сети в браузер.
                                    </p>
                                </div>
                            </div>

                            {/* Шаг 4 */}
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <div style={stepNumberStyle}>4</div>
                                <div>
                                    <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#237804' }}>Мгновенное отображение</p>
                                    <p style={{ margin: 0, fontSize: '0.93em', color: '#444' }}>
                                        Браузер пользователя получает уже <b>100% готовый HTML с текстом и данными</b>. Никаких повторных фоновых запросов с компьютера пользователя больше не происходит.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* ПОДБЛОК: КОГДА НУЖЕН СЕРВЕР, А КОГДА КЛИЕНТ ДЛЯ ЗАПРОСОВ */}
                    <div style={{
                        marginTop: '20px',
                        backgroundColor: '#fff7e6',
                        padding: '15px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #faad14'
                    }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#856404' }}>🎯 Железное правило выбора архитектуры для запросов:</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95em', color: '#333' }}>
                            <div>
                                <b>1. Нужны данные при ЗАГРУЗКЕ страницы (Каталог, Профиль, Статья):</b> <br/>
                                &rarr; Используй <b>Серверный компонент</b> (без <code style={codeInlineStyle}>&quot;use client&quot;</code>). Делай функцию асинхронной <code style={codeInlineStyle}>async/await</code> и забирай готовый HTML, идеальный для SEO [INDEX].
                            </div>

                            <div>
                                <b>2. Нужен запрос после ДЕЙСТВИЯ пользователя (Клик на кнопку, ввод в поиск, отправка формы):</b> <br/>
                                &rarr; Используй <b>Клиентский компонент</b> с директивой <code style={codeInlineStyle}>&quot;use client&quot;</code>. Обрабатывай события через <code style={codeInlineStyle}>onClick / onSubmit</code> и делай запросы через стандартные хуки [INDEX].
                            </div>
                        </div>
                    </div>
                    {/* ПОДБЛОК: 3 ПРЕИМУЩЕСТВА СЕРВЕРНЫХ ЗАПРОСОВ */}
                    <div style={{
                        marginTop: '20px',
                        backgroundColor: '#f6ffed',
                        padding: '15px 20px',
                        borderRadius: '8px',
                        borderLeft: '4px solid #52c41a'
                    }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 12px 0', color: '#237804', fontSize: '1.05em' }}>
                            🔥 3 колоссальных преимущества запросов на сервере:
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95em', color: '#333' }}>
                            <div>
                                <b>1. Безопасность токенов:</b> <br/>
                                Весь бэкенд-код и секретные API-ключи (например, пароли от базы данных или приватные токены OpenAI) выполняются и хранятся строго на сервере. Они физически не могут утечь в браузер к хакерам или обычным пользователям во вкладку Network [INDEX].
                            </div>

                            <div>
                                <b>2. Минимум кода:</b> <br/>
                                Полное отсутствие рутины. Тебе больше вообще не нужны громоздкие конструкции из хуков <code style={codeInlineStyle}>useEffect</code>, <code style={codeInlineStyle}>useState</code>, а также ручные флаги загрузки <code style={codeInlineStyle}>loading</code> и обработки ошибок. Достаточно написать лаконичную строчку: <code style={codeInlineStyle}>const data = await fetch()</code> [INDEX].
                            </div>

                            <div>
                                <b>3. Идеальное SEO:</b> <br/>
                                Роботы поисковых систем (Google, Яндекс) мгновенно считывают полностью заполненную реальным текстом и данными из базы HTML-страницу. Сайт легко индексируется и без проблем поднимается на первые строчки поисковой выдачи [INDEX].
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </div>

);
}

// НАБОР СТИЛЕЙ ДЛЯ КОРРЕКТНОЙ СБОРКИ (Вставить в самый конец файла)
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
const codeSnippetStyle: React.CSSProperties = {
    display: 'block',
    backgroundColor: '#f5f5f5',
    padding: '10px 14px',
    borderRadius: '6px',
    fontFamily: 'monospace',
    fontSize: '13px',
    color: '#333',
    overflowX: 'auto',
    margin: 0,
    whiteSpace: 'pre-wrap',
    border: '1px solid #e1e4e8'
};
const methodRowStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    paddingBottom: '12px',
    borderBottom: '1px solid #f0f0f0'
};

const methodCodeStyle: React.CSSProperties = {
    backgroundColor: '#fafbfc',
    padding: '4px 8px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '14px',
    color: '#c41d7f',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    border: '1px solid #e1e4e8'
};
const stepNumberStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    border: '2px solid #e1e4e8',
    color: '#57606a',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '700',
    flexShrink: 0,
    marginTop: '2px'
};
