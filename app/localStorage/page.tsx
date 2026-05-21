"use client";
import React, { useEffect } from 'react';
import {usePathname, useRouter} from "next/navigation";
import {anchorLinkStyle, sidebarTitleStyle} from "@/app/hooks/page";

export default function WebStorageCheatSheet() {
    const pathname = usePathname();
    const router = useRouter();
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
            <a href="#localStorage" style={anchorLinkStyle}>
                🔹 localStorage
            </a>
            <a href="#sessionStorage" style={anchorLinkStyle}>
                🔹 sessionStorage
            </a>

            <a href="#JSON" style={anchorLinkStyle}>
                🔹 Сериализация структур данных
            </a>
            <a href="#limitmemory" style={anchorLinkStyle}>
                🔹 Лимиты памяти и ограничения объемов
            </a>
            <a href="#integrationnext" style={anchorLinkStyle}>
                🔹 Специфика интеграции в Next.js
            </a>

        </div>
    </aside>
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

                {/* ЕДИНАЯ КРАСИВАЯ ШАПКА СТРАНИЦЫ */}
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
                        <svg height="16" width="16" viewBox="0 0 16 16" style={{ fill: '#f7df1e', backgroundColor: '#000', borderRadius: '2px' }}>
                            <path d="M0 0h16v16H0V0zm11.534 12.164c.06.39.24.696.534.914.3.22.68.324 1.134.324.446 0 .814-.1 1.106-.3s.434-.48.434-.84c0-.312-.178-.562-.534-.75-.24-.132-.66-.264-1.254-.396-.78-.174-1.354-.378-1.72-.612-.474-.3-.714-.774-.714-1.422 0-.582.214-1.044.64-1.386.43-.342.996-.516 1.7-.516.68 0 1.254.156 1.72.468.468.312.72.744.756 1.296h-1.638c-.036-.288-.162-.516-.378-.684-.216-.168-.534-.252-.954-.252-.39 0-.702.09-.936.27-.234.18-.354.414-.354.702 0 .252.138.456.414.612.18.096.582.216 1.206.36.792.18 1.38.396 1.764.648.486.318.732.81.732 1.476 0 .642-.252 1.158-.756 1.548-.504.39-1.176.588-2.016.588-.858 0-1.554-.21-2.094-.63-.54-.42-.786-.99-.738-1.71h1.662zm-6.39 0c.06.39.24.696.534.914.3.22.68.324 1.134.324.446 0 .814-.1 1.106-.3s.434-.48.434-.84c0-.312-.178-.562-.534-.75-.24-.132-.66-.264-1.254-.396-.78-.174-1.354-.378-1.72-.612-.474-.3-.714-.774-.714-1.422 0-.582.214-1.044.64-1.386.43-.342.996-.516 1.7-.516.68 0 1.254.156 1.72.468.468.312.72.744.756 1.296H9.362c-.036-.288-.162-.516-.378-.684-.216-.168-.534-.252-.954-.252-.39 0-.702.09-.936.27-.234.18-.354.414-.354.702 0 .252.138.456.414.612.18.096.582.216 1.206.36.792.18 1.38.396 1.764.648.486.318.732.81.732 1.476 0 .642-.252 1.158-.756 1.548-.504.39-1.176.588-2.016.588-.858 0-1.554-.21-2.094-.63-.54-.42-.786-.99-.738-1.71h1.662z" fill="#000000"/>
                        </svg>
                        Web API Storage
                    </div>

                    <h1 style={{
                        fontSize: '46px',
                        fontWeight: '850',
                        color: '#1f2328',
                        margin: '0 0 15px 0',
                        letterSpacing: '-0.03em'
                    }}>
                        Браузерные хранилища данных
                    </h1>

                    <p style={{ fontSize: '19px', color: '#636c76', maxWidth: '650px', margin: '0 auto', lineHeight: '1.5' }}>
                        Интерактивный разбор механизмов <b>localStorage</b> и <b>sessionStorage</b>, методов работы с JSON и тонкостей интеграции в Next.js
                    </p>

                    <div style={{ width: '80px', height: '5px', background: 'linear-gradient(90deg, #2f54eb, #722ed1)', margin: '25px auto 0', borderRadius: '10px' }}></div>
                </div>

                {/* СРАВНИТЕЛЬНАЯ ПЛАШКА: ГЛАВНОЕ ОТЛИЧИЕ */}
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', borderLeft: '5px solid #722ed1' }}>
                    <p style={{ margin: 0, fontWeight: '700', color: '#531dab', fontSize: '1.05em' }}>⚖️ В чем принципиальная разница?</p>
                    <p style={{ margin: '5px 0 0 0', fontSize: '0.98em', color: '#444' }}>
                        Оба хранилища имеют одинаковый синтаксис, но разный жизненный цикл. Данные в <b>localStorage</b> бессмертны и перекладываются между вкладками. Данные в <b>sessionStorage</b> привязаны строго к одной вкладке браузера и полностью стираются при её закрытии.
                    </p>
                </div>

                {/* РАЗДЕЛ 1: LOCALSTORAGE */}
                <section id="localStorage" style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', borderTop: '6px solid #2f54eb', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                    <h2 style={{ marginTop: 0, color: '#1d39c4', fontSize: '22px' }}>1. Постоянное хранилище (localStorage)</h2>
                    <p style={{ margin: '0 0 15px 0', color: '#555' }}>Идеально подходит для долгосрочных настроек пользователя, которые не должны сбрасываться (например, выбранная цветовая тема, токен авторизации или сохраненный язык интерфейса).</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ backgroundColor: '#f0f5ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #2f54eb' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#1d39c4' }}>Базовые команды взаимодействия:</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: 'monospace', fontSize: '0.92em' }}>
                                <code style={{ backgroundColor: '#fff', padding: '4px 8px', borderRadius: '4px' }}>localStorage.setItem(&apos;theme&apos;, &apos;dark&apos;) &mdash; сохранить запись</code>
                                <code style={{ backgroundColor: '#fff', padding: '4px 8px', borderRadius: '4px' }}>localStorage.getItem(&apos;theme&apos;) &mdash; прочитать запись (вернет null, если ключа нет)</code>
                                <code style={{ backgroundColor: '#fff', padding: '4px 8px', borderRadius: '4px' }}>localStorage.removeItem(&apos;theme&apos;) &mdash; точечно удалить запись</code>
                                <code style={{ backgroundColor: '#fff', padding: '4px 8px', borderRadius: '4px' }}>localStorage.clear() &mdash; полностью стереть все данные сайта</code>
                            </div>
                        </div>
                    </div>
                    <section style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #13c2c2',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        fontFamily: 'sans-serif'
                    }}>
                        <h2 style={{ marginTop: 0, color: '#006d75', fontSize: '20px' }}>Синхронизация вкладок (Событие storage)</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <p>Глобальное событие <b>storage</b> срабатывает на всех вкладках твоего сайта (кроме текущей), когда в localStorage вносятся изменения. Это позволяет координировать состояние приложения между окнами.Если пользователь в одной вкладке нажал «Выйти из профиля» или «Сменил тему на темную», остальные вкладки должны узнать об этом автоматически.
                            </p>

                            {/* Свойства события */}
                            <div style={{ backgroundColor: '#e6fffb', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #13c2c2' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#006d75' }}>Анатомия объекта StorageEvent:</p>
                                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.95em' }}>
                                    <li><code style={{ backgroundColor: '#fff', padding: '1px 4px' }}>event.key</code> &mdash; имя измененного ключа.</li>
                                    <li><code style={{ backgroundColor: '#fff', padding: '1px 4px' }}>event.newValue</code> &mdash; свежее записанное значение (null, если удалено).</li>
                                    <li><code style={{ backgroundColor: '#fff', padding: '1px 4px' }}>event.oldValue</code> &mdash; то, что лежало в памяти до перезаписи.</li>
                                    <li><code style={{ backgroundColor: '#fff', padding: '1px 4px' }}>event.url</code> &mdash; адрес страницы, которая инициировала изменение.</li>
                                </ul>
                            </div>

                            {/* Пример кода */}
                            <p style={{ fontWeight: 'bold', margin: '5px 0 0 0' }}>Пример подписки на изменения в React:</p>
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
{`useEffect(() => {
    const syncData = (e) => {
        if (e.key === 'auth_token' && !e.newValue) {
            // Если в другой вкладке разлогинились — выкидываем пользователя и тут
            window.location.reload();
        }
    };
    window.addEventListener('storage', syncData);
    return () => window.removeEventListener('storage', syncData);
}, []);`}
        </pre>
                        </div>
                    </section>
                </section>



                {/* РАЗДЕЛ 2: SESSIONSTORAGE */}
                <section id="sessionStorage" style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', borderTop: '6px solid #722ed1', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                    <h2 style={{ marginTop: 0, color: '#531dab', fontSize: '22px' }}>2. Сессионное хранилище (sessionStorage)</h2>
                    <p style={{ margin: '0 0 15px 0', color: '#555' }}>Используется для временных данных в рамках одного сеанса (например, многошаговая форма регистрации, корзина покупок до оформления заказа или состояние фильтров в каталоге, которые должны обнулиться, если пользователь закроет сайт).</p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ backgroundColor: '#f9f0ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #722ed1' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#531dab' }}>Базовые команды взаимодействия (идентичны):</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: 'monospace', fontSize: '0.92em' }}>
                                <code style={{ backgroundColor: '#fff', padding: '4px 8px', borderRadius: '4px' }}>sessionStorage.setItem(&apos;step&apos;, &apos;2&apos;) &mdash; сохранить данные в сессию</code>
                                <code style={{ backgroundColor: '#fff', padding: '4px 8px', borderRadius: '4px' }}>sessionStorage.getItem(&apos;step&apos;) &mdash; прочитать данные из сессии</code>
                                <code style={{ backgroundColor: '#fff', padding: '4px 8px', borderRadius: '4px' }}>sessionStorage.removeItem(&apos;step&apos;) &mdash; удалить ключ из сессии</code>
                                <code style={{ backgroundColor: '#fff', padding: '4px 8px', borderRadius: '4px' }}>sessionStorage.clear() &mdash; полностью очистить сессию текущей вкладки</code>
                            </div>
                        </div>
                    </div>
                </section>

                {/* РАЗДЕЛ 3: ПОДРОБНО ПРО JSON СЕРИАЛИЗАЦИЮ */}
                <section id="JSON" style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', borderTop: '6px solid #faad14', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                    <h2 style={{ marginTop: 0, color: '#d46b08', fontSize: '22px' }}>3. Сериализация структур данных через JSON</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ backgroundColor: '#fffbe6', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #faad14' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#856404' }}>⚠️ Важное ограничение: Хранятся только строки!</p>
                            <p style={{ margin: 0, fontSize: '0.95em' }}>
                                Браузерные хранилища не понимают объекты или массивы. Если попытаться записать их без конвертации, внутри сохранится бесполезная строка <b>&quot;[object Object]&quot;</b>.
                            </p>
                        </div>

                        <div>
                            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <li>
                                    <b>JSON.stringify(object)</b> &mdash; преобразует объект или массив в JSON-строку для безопасного хранения.
                                    <pre style={codeBlockStyle}>
{`// Сохранение сложной структуры данных
const user = { name: 'Kris', skills: ['React', 'Next.js'] };
localStorage.setItem('dev_profile', JSON.stringify(user));`}
                                    </pre>
                                </li>
                                <li>
                                    <b>JSON.parse(string)</b> &mdash; превращает текстовый JSON из памяти обратно в полноценный объект, у которого можно читать свойства.
                                    <pre style={codeBlockStyle}>
{`// Безопасное извлечение с проверкой на существование ключа
const rawData = localStorage.getItem('dev_profile');
if (rawData) {
    const parsedUser = JSON.parse(rawData);
    console.log(parsedUser.skills[0]); // Выведет: React
}`}
                                    </pre>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* РАЗДЕЛ 4: ОБЪЕМ ПАМЯТИ И ЛИМИТЫ */}
                <section id="limitmemory" style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', borderTop: '6px solid #ff4d4f', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                    <h2 style={{ marginTop: 0, color: '#cf1322', fontSize: '20px' }}>4. Лимиты памяти и ограничения объемов</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ backgroundColor: '#fff1f0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #ff4d4f' }}>
                            <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.95em' }}>
                                <li><b>Общий объем памяти:</b> И для localStorage, и для sessionStorage браузеры выделяют примерно <b>5 МБ</b> памяти на домен.</li>
                                <li><b>Что будет при превышении:</b> Попытка записать данные сверх лимита вызовет ошибку с именем <b>QuotaExceededError</b>, прервав выполнение скрипта.</li>
                            </ul>
                        </div>

                        <p style={{ fontWeight: 'bold', margin: '5px 0 0 0' }}>🛡️ Безопасный перехват переполнения квоты:</p>
                        <pre style={codeBlockStyle}>
{`try {
    sessionStorage.setItem('session_logs', JSON.stringify(heavyLogsArray));
} catch (error) {
    if (error.name === 'QuotaExceededError') {
        console.error('Лимит хранилища исчерпан! Очищаем старые логи...');
        sessionStorage.removeItem('old_session_logs');
    }
}`}
                        </pre>
                    </div>
                </section>

                {/* РАЗДЕЛ 5: ТОНКОСТИ СБОРКИ В NEXT.JS */}
                <section id="integrationnext" style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', borderTop: '6px solid #52c41a', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                    <h2 style={{ marginTop: 0, color: '#237804', fontSize: '20px' }}>5. Специфика интеграции в Next.js (SSR)</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <p>На этапе серверного рендеринга (SSR) Next.js не имеет доступа к браузеру, поэтому прямая попытка обратиться к `window`, `localStorage` или `sessionStorage` упадет с ошибкой <i>ReferenceError: localStorage is not defined</i>.</p>

                        <div style={{ backgroundColor: '#f6ffed', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #52c41a', marginTop: '5px' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#237804' }}>Запуск строго на стороне клиента:</p>
                            <p style={{ fontSize: '0.95em', margin: 0 }}>Всю работу с браузерной памятью нужно размещать строго внутри хука <b>useEffect</b>. Он гарантирует, что код выполнится только тогда, когда проект успешно соберется и откроется на компьютере пользователя.</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
        </div>
    );
}

// Повторяющийся стиль для текстовых блоков кода
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
