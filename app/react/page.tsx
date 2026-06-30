"use client";

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function ReactHooksCheatSheet() {
    const pathname = usePathname();
    const router = useRouter();

    // Общий стиль для ссылок меню
    const getSidebarLinkStyle = (isActive: boolean): React.CSSProperties  => ({
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
    } as const;

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
    } as const;

    const paramRowStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        paddingBottom: '10px',
        borderBottom: '1px solid #f0f0f0'
    } as const;

    const paramCodeStyle = {
        backgroundColor: '#f9f0ff',
        padding: '3px 8px',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '0.92em',
        color: '#531dab',
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    } as const;


    return (
        <div style={{ display: 'flex', gap: '30px', padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>

            {/* БОКОВОЕ МЕНЮ (SIDEBAR) */}
            <aside style={{ width: '280px', position: 'sticky', top: '20px', height: 'fit-content' }}>
                <div style={{ backgroundColor: '#fafafa', padding: '15px', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
                    <p style={sidebarTitleStyle}>На этой странице</p>
                    <a href="#solid" style={anchorLinkStyle}>
                        🔹 SOLID
                    </a>
                    <a href="#virtualDom" style={anchorLinkStyle}>
                        📦 Virtual DOM & Reconciliation
                    </a>
                    <a href="#reactPrinciples" style={anchorLinkStyle}>
                        ⚛️ Фундаментальные принципы React
                    </a>
                    <a href="#reactBatching" style={anchorLinkStyle}>
                        ⚡ Механизм Батчинга стейта
                    </a>

                    <a href="#reactReconciliation" style={anchorLinkStyle}>
                        📦 Стадии рендеринга и Reconciliation
                    </a>
                    <a href="#reactPropsEvents" style={anchorLinkStyle}>
                        ⚙️ Передача Props и событий
                    </a>
                    <a href="#reactEventPrevention"  style={anchorLinkStyle}>
                        🛑 Предотвращение DOM-событий
                    </a>

                    <a href="#reactFiber"  style={anchorLinkStyle}>
                        ⚙️ Архитектурный движок Fiber
                    </a>
                    <a href="#reactErrorBoundary"  style={anchorLinkStyle}>
                        🛡️ Механизм Error Boundary
                    </a>
                    <a href="#controlledComponents"  style={anchorLinkStyle}>
                        📝 Контролируемые инпуты и формы
                    </a>
                    <a href="#reactCallbackProps" style={anchorLinkStyle}>
                        ↗️ Передача данных наверх (Callbacks)
                    </a>
                    <a href="#reduxSelectors"  style={anchorLinkStyle}>
                        📊 Селекторы Redux и Мемоизация
                    </a>

                </div>
            </aside>


            {/* ОСНОВНОЙ КОНТЕНТ СТРАНИЦЫ */}
            <main style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '40px'}}>
                <div style={{
                    textAlign: 'center', // 🎯 Главный секрет: выравнивание всех внутренних элементов по центру
                    padding: '40px 20px', // Комфортные отступы вокруг контента шапки
                    fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif' // Фирменный шрифт
                }}>
                    {/* 1. Капсула-лейбл сверху */}
                    <div style={{
                        display: 'inline-flex', // inline-flex позволяет блоку сжиматься по размеру текста внутри
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: '#f1f5f9',
                        border: '1px solid #e2e8f0',
                        borderRadius: '9999px',
                        padding: '4px 14px',
                        marginBottom: '16px'
                    }}>
                        <span style={{ fontSize: '12px', display: 'flex', alignItems: 'center' }}>✨</span>
                        <span style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            color: '#475569',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase'
                        }}>
            React
        </span>
                    </div>

                    {/* 2. Большой главный заголовок */}
                    <h1 style={{
                        fontSize: '36px',
                        fontWeight: '800',
                        color: '#0f172a',
                        margin: '0 0 16px 0',
                        letterSpacing: '-0.03em',
                        lineHeight: '1.2'
                    }}>
                        Библиотека React.js
                    </h1>

                    {/* 3. Подзаголовок-описание */}
                    <p style={{
                        fontSize: '16px',
                        color: '#475569',
                        lineHeight: '1.6',
                        maxWidth: '600px',
                        margin: '0 auto 24px auto' // margin: '0 auto' центрирует блок с ограниченной шириной maxWidth
                    }}>
                        Полное руководство по созданию современных интерфейсов: от фундаментальной философии декларативности до продвинутого управления состоянием и оптимизации рендеринга.
                    </p>

                    {/* 4. Неоново-голубая разделительная линия (как на вашем скриншоте) */}
                    <div style={{
                        width: '64px',
                        height: '4px',
                        backgroundColor: '#06b6d4', // Яркий циан / неоново-голубой
                        borderRadius: '9999px',
                        margin: '0 auto 32px auto' // Отцентрировано по горизонтали
                    }} />
                </div>


                <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    <div id="reactAdvancedHero" style={{
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                        padding: '32px 24px sm:40px 32px',
                        width: '100%',
                        boxSizing: 'border-box',
                        fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                        color: '#334155',
                        position: 'relative',
                        overflow: 'hidden',
                        marginTop: '16px',
                        textAlign: 'center' // Центрирование в стиле вашего главного экрана Hooks
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



                        {/* 5. Главная ментальная модель (фиолетовый блок философии) */}
                        <div style={{
                            backgroundColor: '#f5f3ff',
                            border: '1px solid #ddd6fe',
                            padding: '20px',
                            borderRadius: '8px',
                            maxWidth: '800px',
                            margin: '0 auto 32px auto',
                            textAlign: 'left',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#4c1d95'
                        }}>
                            <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', fontSize: '15px' }}>
                                ⚛️ Ключевая концепция: Декларативное программирование
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                В отличие от императивного подхода (чистый JS / jQuery), где вы пошагово диктуете браузеру: <em>«найди кнопку, добавь класс, измени текст»</em>, в React вы описываете финальное состояние интерфейса: <strong>«при таких данных экран выглядит вот так»</strong>.
                            </div>
                            <div>
                                React берет на себя всю рутину по автоматическому и точечному обновлению реального DOM дерева при изменении данных приложения.
                            </div>
                        </div>

                        {/* 6. Сетка разделов (План изучения) */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '16px',
                            maxWidth: '900px',
                            margin: '0 auto',
                            textAlign: 'left'
                        }}>
                            {/* Карточка 1 */}
                            <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
      <span style={{ fontWeight: '700', color: '#0f172a', display: 'block', marginBottom: '6px', fontSize: '14px' }}>
        📦 Virtual DOM & Reconciliation
      </span>
                                <span style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.4', display: 'block' }}>
        Изучим механизм «снимков» виртуального дерева и алгоритмы поиска минимальных изменений.
      </span>
                            </div>

                            {/* Карточка 2 */}
                            <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
      <span style={{ fontWeight: '700', color: '#0f172a', display: 'block', marginBottom: '6px', fontSize: '14px' }}>
        ⚙️ Props, State & Батчинг
      </span>
                                <span style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.4', display: 'block' }}>
        Разберем разницу между иммутабельными входящими данными и локальной памятью компонента.
      </span>
                            </div>

                            {/* Карточка 3 */}
                            <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
      <span style={{ fontWeight: '700', color: '#0f172a', display: 'block', marginBottom: '6px', fontSize: '14px' }}>
        ⚓️ Встроенные Hooks (Хуки)
      </span>
                                <span style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.4', display: 'block' }}>
        Жизненный цикл, управление побочными эффектами (useEffect) и оптимизация (useMemo, useCallback).
      </span>
                            </div>
                        </div>
                    </div>


                    <div id="solidPrinciples" style={{
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
                            Принципы проектирования SOLID в JavaScript / TypeScript
                        </h2>

                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                            <strong>SOLID</strong> — это аббревиатура пяти основных принципов объектно-ориентированного проектирования и программирования, сформулированных Робертом Мартином (Дядей Бобом). Их главная цель — сделать архитектуру приложения гибкой, понятной и легкой в сопровождении при разрастании кодовой базы.
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
                                🧠 Глобальная ментальная модель SOLID:
                            </div>
                            <div style={{ marginBottom: '6px' }}>
                                Эти принципы защищают ваш код от трех главных архитектурных проблем: <strong>Хрупкости</strong> (изменение в одном месте ломает другое), <strong>Жесткости</strong> (сложно вносить изменения, так как нужно переписывать пол-проекта) и <strong>Вязкости</strong> (проще написать костыль, чем сделать правильно). SOLID заставляет уменьшать зацепление (coupling) модулей и увеличивать их зацепленность (cohesion).
                            </div>
                        </div>

                        {/* Разбор принципов */}
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '16px' }}>
                            Расшифровка и суть каждого принципа:
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px', fontSize: '14px', lineHeight: '1.5' }}>

                            {/* S */}
                            <div style={{ paddingLeft: '12px', borderLeft: '3px solid #3b82f6' }}>
                                <strong style={{ color: '#1e3a8a', fontSize: '15px' }}>S — Single Responsibility Principle (Принцип единственной ответственности)</strong>
                                <p style={{ margin: '4px 0 0 0', color: '#475569' }}>
                                    У одного класса или модуля должна быть <em>только одна причина для изменения</em>. Он должен решать ровно одну задачу. Если класс одновременно считает логику, форматирует HTML и отправляет запросы в сеть — его нужно разделять.
                                </p>
                            </div>

                            {/* O */}
                            <div style={{ paddingLeft: '12px', borderLeft: '3px solid #10b981' }}>
                                <strong style={{ color: '#065f46', fontSize: '15px' }}>O — Open/Closed Principle (Принцип открытости / закрытости)</strong>
                                <p style={{ margin: '4px 0 0 0', color: '#475569' }}>
                                    Программные сущности должны быть <em>открыты для расширения, но закрыты для модификации</em>. Чтобы добавить новую фичу (например, новый тип оплаты), вы не должны переписывать старый работающий код или конструкции <code style={{ fontFamily: 'monospace' }}>switch/case</code>. Вы должны расширять систему через полиморфизм и интерфейсы.
                                </p>
                            </div>

                            {/* L */}
                            <div style={{ paddingLeft: '12px', borderLeft: '3px solid #f59e0b' }}>
                                <strong style={{ color: '#78350f', fontSize: '15px' }}>L — Liskov Substitution Principle (Принцип подстановки Барбары Лисков)</strong>
                                <p style={{ margin: '4px 0 0 0', color: '#475569' }}>
                                    Функции, которые используют базовый тип, должны иметь возможность использовать подтипы базового типа, даже не зная об этом. Проще говоря: <em>наследники не должны ломать поведение и логику родителя</em>. Классический пример-ошибка: класс Ostrich (Страус), наследующийся от Bird (Птица), но выбрасывающий ошибку в методе <code style={{ fontFamily: 'monospace' }}>fly()</code>.
                                </p>
                                <div
                                    id="liskovPrinciple"
                                    style={{
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
                                    }}
                                >


                                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                        Суть принципа формулируется просто: <strong>классы-наследники должны иметь возможность заменять свои базовые классы без изменения правильности работы программы</strong>. Если у вас есть функция, которая принимает базовый класс, вы должны иметь возможность передать туда любого его наследника, и программа не должна упасть или повести себя непредсказуемо.
                                    </p>

                                    {/* Mental Model (Violet Box) */}
                                    <div
                                        style={{
                                            backgroundColor: '#f5f3ff',
                                            border: '1px solid #ddd6fe',
                                            padding: '16px',
                                            borderRadius: '6px',
                                            marginBottom: '24px',
                                            fontSize: '14px',
                                            lineHeight: '1.6',
                                            color: '#4c1d95'
                                        }}
                                    >
                                        <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                            🧠 Главное правило LSP: Наследник должен расширять, а не ломать родителя!
                                        </div>
                                        <div style={{ marginBottom: '6px' }}>
                                            Наследование не должно использоваться просто ради того, чтобы «скопировать методы» родительского класса. Наследник обязан строго соблюдать контракт родителя:
                                        </div>
                                        <ul style={{ paddingLeft: '16px', margin: 0, listStyleType: 'disc' }}>
                                            <li style={{ marginBottom: '4px' }}>Нельзя изменять типы возвращаемых значений на несовместимые.</li>
                                            <li style={{ marginBottom: '4px' }}>Нельзя ужесточать входные параметры (требовать больше, чем родитель).</li>
                                            <li><strong>Категорически нельзя генерировать исключения (throw Error)</strong> там, где родитель этого не делает.</li>
                                        </ul>
                                    </div>

                                    {/* Text Before Code */}
                                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                        Классический пример нарушения и исправления (Проблема Птицы и Страуса):
                                    </div>

                                    {/* Code Block (Formatted & Cleaned) */}
                                    <pre
                                        style={{
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
                                        }}
                                    >
{`// ❌ НАРУШЕНИЕ LSP: Наследник ломает контракт базового класса
class Bird {
    fly() {
        return "Я лечу!";
    }
}

class Ostrich extends Bird {
    fly() {
        // Страус не умеет летать! Нам приходится выбрасывать ошибку.
        // Это ломает код, который ожидает, что ВСЕ птицы умеют летать.
        throw new Error("Я не умею летать!"); 
    }
}

function makeBirdFly(bird) {
    return bird.fly(); // Если передать Ostrich, приложение аварийно упадет!
}


// 🟢 СОБЛЮДЕНИЕ LSP: Правильное разделение абстракций через интерфейсы/классы
class RealBird {
    eat() {
        return "Кушаю зерно";
    }
}

// Выносим способность летать в отдельную категорию
class FlyingBird extends RealBird {
    fly() {
        return "Я лечу!";
    }
}

class Duck extends FlyingBird { /* Умеет летать и кушать */ }
class NewOstrich extends RealBird { /* Умеет только кушать */ }

// Теперь функция работает безопасно, так как принимает только летающих птиц
function makeFlyingBirdFly(flyingBird) {
    return flyingBird.fly(); // Сюда физически нельзя передать NewOstrich
}`}
    </pre>

                                    {/* Interview Tips */}
                                    <div
                                        id="liskovRectangleTrap"
                                        style={{
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
                                        }}
                                    >
                                        {/* Upper Indigo Card Bar */}
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                height: '4px',
                                                backgroundColor: '#6366f1'
                                            }}
                                        />

                                        {/* Title */}
                                        <h2
                                            style={{
                                                fontSize: '20px',
                                                fontWeight: '700',
                                                color: '#4338ca',
                                                margin: '0 0 12px 0'
                                            }}
                                        >
                                            Разбор ловушки LSP: Почему Квадрат — это НЕ Прямоугольник в ООП
                                        </h2>

                                        {/* Простыми словами (Фиолетовый блок) */}
                                        <div
                                            style={{
                                                backgroundColor: '#f5f3ff',
                                                border: '1px solid #ddd6fe',
                                                padding: '16px',
                                                borderRadius: '6px',
                                                marginBottom: '24px',
                                                fontSize: '14px',
                                                lineHeight: '1.6',
                                                color: '#4c1d95'
                                            }}
                                        >
                                            <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                                🧠 Ментальная модель (Объяснение на пальцах):
                                            </div>
                                            <div style={{ marginBottom: '8px' }}>
                                                В геометрии нас учили: <em>«Квадрат — это частный случай прямоугольника, у которого все стороны равны»</em>. Из-за этого у разработчиков возникает соблазн написать код: <code style={{ fontFamily: 'monospace' }}>class Square extends Rectangle</code>.
                                            </div>
                                            <div style={{ marginBottom: '8px' }}>
                                                Но в ООП важно не то, кем объект <strong>является</strong>, а то, как он себя <strong>ведет</strong> (его поведение и контракты).
                                            </div>
                                            <div>
                                                У Прямоугольника есть поведение: <em>«Я могу изменить ширину, при этом моя высота останется прежней»</em>. Если мы унаследуем Квадрат, нам придется при изменении ширины принудительно менять и высоту (чтобы он оставался квадратом). Тем самым мы <strong>ломаем поведение родителя</strong>, нарушая принцип Барбары Лисков.
                                            </div>
                                        </div>

                                        {/* Text Before Code */}
                                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                            Пример катастрофы в коде при нарушении LSP:
                                        </div>

                                        {/* Code Block */}
                                        <pre
                                            style={{
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
                                            }}
                                        >
{`// Базовый класс Прямоугольника
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    setWidth(w) { this.width = w; }
    setHeight(h) { this.height = h; }
    getArea() { return this.width * this.height; }
}

// ❌ Нарушение LSP: Наследуем Квадрат от Прямоугольника
class Square extends Rectangle {
    // Вынуждены переопределять сеттеры, чтобы сохранять геометрию квадрата
    setWidth(w) {
        this.width = w;
        this.height = w; // Сеттер ширины неожиданно меняет высоту!
    }
    setHeight(h) {
        this.width = h; // Сеттер высоты неожиданно меняет ширину!
        this.height = h;
    }
}

// Посторонняя функция в приложении, которая работает с прямоугольниками
function increaseWidthAndCheck(rectangle) {
    rectangle.setWidth(10); // Меняем ширину на 10
    rectangle.setHeight(5);  // Меняем высоту на 5

    // Логика функции железобетонно ожидает: площадь = 10 * 5 = 50
    if (rectangle.getArea() === 50) {
        console.log("🔥 Все работает отлично!");
    } else {
        // Если передать Square, его площадь будет 5 * 5 = 25!
        console.error("💥 БАГ! Программа сломалась, хотя мы передали наследника!");
    }
}

increaseWidthAndCheck(new Rectangle(2, 3)); // Выведет: "Все работает отлично!"
increaseWidthAndCheck(new Square(2, 2));    // Выведет: "БАГ! Программа сломалась..."`}
    </pre>

                                        {/* How to fix */}
                                        <div
                                            style={{
                                                borderLeft: '4px solid #10b981',
                                                backgroundColor: '#f0fdf4',
                                                padding: '12px 16px',
                                                borderRadius: '0 6px 6px 0',
                                                fontSize: '14px',
                                                color: '#065f46',
                                                lineHeight: '1.5',
                                                marginBottom: '20px'
                                            }}
                                        >
                                            💡 <strong>Как это исправить правильно?</strong> Квадрат и Прямоугольник не должны наследовать друг друга. Они должны быть независимыми классами, которые, например, реализуют общий интерфейс или абстрактный класс <code style={{ fontFamily: 'monospace' }}>Shape</code> (Фигура) с единственным методом <code style={{ fontFamily: 'monospace' }}>getArea()</code>. Тогда у Квадрата вообще не будет методов <code style={{ fontFamily: 'monospace' }}>setWidth</code> и <code style={{ fontFamily: 'monospace' }}>setHeight</code>, и никто случайно не сломает логику программы.
                                        </div>

                                        {/* Interview Advice */}
                                        <div
                                            style={{
                                                borderLeft: '4px solid #3b82f6',
                                                backgroundColor: '#eff6ff',
                                                padding: '12px 16px',
                                                borderRadius: '0 6px 6px 0',
                                                fontSize: '14px',
                                                color: '#1e3a8a',
                                                lineHeight: '1.5'
                                            }}
                                        >
                                            🎯 <strong>Формулировка для собеседования:</strong> Если на интервью вас спросят про эту ловушку, скажите одну ключевую фразу:
                                            <em> «Наследование в ООП — это не связь свойств объектов в реальном мире, это совместимость их поведения. Поскольку поведение изменяемого Квадрата несовместимо с поведением изменяемого Прямоугольника, наследование между ними нарушает контракт базового класса и ломает принцип LSP».</em>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* I */}
                            <div style={{ paddingLeft: '12px', borderLeft: '3px solid #ec4899' }}>
                                <strong style={{ color: '#9d174d', fontSize: '15px' }}>I — Interface Segregation Principle (Принцип разделения интерфейса)</strong>
                                <p style={{ margin: '4px 0 0 0', color: '#475569' }}>
                                    Клиенты не должны зависеть от методов, которые они не используют. Множество специализированных интерфейсов лучше, чем один универсальный «толстый». В TypeScript вместо создания одного гигантского интерфейса <code style={{ fontFamily: 'monospace' }}>Worker</code> с методами <code style={{ fontFamily: 'monospace' }}>work()</code> и <code style={{ fontFamily: 'monospace' }}>eat()</code>, лучше сделать раздельные интерфейсы <code style={{ fontFamily: 'monospace' }}>Workable</code> и <code style={{ fontFamily: 'monospace' }}>Feedable</code>.
                                </p>
                                <div
                                    id="interfaceSegregation"
                                    style={{
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
                                    }}
                                >



                                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                        Главная формулировка принципа: <strong>клиенты не должны зависеть от методов, которые они не используют</strong>. Когда интерфейс (или базовый класс) становится слишком «толстым» и универсальным, содержащиеся в нем методы размывают его зону ответственности, вынуждая подклассы реализовывать пустые функции-заглушки.
                                    </p>

                                    {/* Mental Model (Violet Box) */}
                                    <div
                                        style={{
                                            backgroundColor: '#f5f3ff',
                                            border: '1px solid #ddd6fe',
                                            padding: '16px',
                                            borderRadius: '6px',
                                            marginBottom: '24px',
                                            fontSize: '14px',
                                            lineHeight: '1.6',
                                            color: '#4c1d95'
                                        }}
                                    >
                                        <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                            🧠 Ментальная модель (Дробление вместо универсальности):
                                        </div>
                                        <div style={{ marginBottom: '6px' }}>
                                            Представьте универсальный швейцарский нож, в котором есть пила, ножницы, штопор и фонарик. Если вам в программе нужен просто фонарик, вам приходится носить с собой весь этот тяжелый нож и следить за тем, чтобы лезвия никого не поранили.
                                        </div>
                                        <div>
                                            Принцип ISP утверждает: <strong>много специализированных интерфейсов гораздо лучше, чем один универсальный «комбайн»</strong>. В JavaScript роль интерфейсов выполняют контракты объектов или абстрактные базовые классы.
                                        </div>
                                    </div>

                                    {/* Text Before Code */}
                                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                        Пример нарушения и исправления ISP (на TypeScript/JS абстракциях):
                                    </div>

                                    {/* Code Block (Formatted & Cleaned) */}
                                    <pre
                                        style={{
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
                                        }}
                                    >
{`// ❌ НАРУШЕНИЕ ISP: Создан "жирный" интерфейс для умного дома
// Из-за этого простые устройства вынуждены имитировать ненужное поведение
class SmartDeviceContract {
    turnOn() {}
    turnOff() {}
    setTemperature(degrees) {} // Нужен только термостатам
    changeChannel(number) {}    // Нужен только телевизорам
}

class SimpleLightBulb extends SmartDeviceContract {
    turnOn() { console.log("Лампочка включена"); }
    turnOff() { console.log("Лампочка выключена"); }
    
    // Вынужденные пустые заглушки из-за жесткого контракта родителя
    setTemperature() { /* Лампочка не греет, ничего не делаем */ }
    changeChannel() { /* У лампочки нет каналов */ }
}


// 🟢 СОБЛЮДЕНИЕ ISP: Разделяем один большой контракт на три маленьких
class Switchable {
    turnOn() {}
    turnOff() {}
}

class TemperatureRegulatable {
    setTemperature(degrees) {}
}

class ChannelSwitchable {
    changeChannel(number) {}
}

// Теперь каждый класс собирает контракт только из нужных ему частей (миксины или имплементация)
class CorrectLightBulb extends Switchable {
    turnOn() { console.log("Лампочка горит"); }
    turnOff() { console.log("Лампочка погасла"); }
}

class CorrectThermostat extends Switchable {
    constructor() { super(); }
    setTemperature(degrees) { console.log(\`Установлено: \${degrees}°C\`); }
}`}
    </pre>

                                    {/* Interview Tips */}
                                    <div
                                        style={{
                                            borderLeft: '4px solid #10b981',
                                            backgroundColor: '#f0fdf4',
                                            padding: '12px 16px',
                                            borderRadius: '0 6px 6px 0',
                                            fontSize: '14px',
                                            color: '#065f46',
                                            lineHeight: '1.5'
                                        }}
                                    >
                                        💡 <strong>Зачем это нужно во фронтенд-разработке?</strong> Соблюдение ISP напрямую влияет на чистоту архитектуры компонентов (например, в React). Если вы передаете в дочерний компонент карточки товара <code style={{ fontFamily: 'monospace' }}>{'<ProductCard />'}</code> весь гигантский объект пользователя <code style={{ fontFamily: 'monospace' }}>user</code> (со всеми его токенами, корзиной и историей заказов) ради одной лишь строки с именем, вы нарушаете ISP. Компонент становится избыточно зависимым. Передавайте только то, что компонент реально использует: <code style={{ fontFamily: 'monospace' }}>{'name={user.name}'}</code>.
                                    </div>
                                </div>

                            </div>

                            {/* D */}
                            <div style={{ paddingLeft: '12px', borderLeft: '3px solid #6366f1' }}>
                                <strong style={{ color: '#3730a3', fontSize: '15px' }}>D — Dependency Inversion Principle (Принцип инверсии зависимостей)</strong>
                                <div
                                    id="dependencyInversion"
                                    style={{
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
                                    }}
                                >
                                    {/* Upper Indigo Card Bar */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                        }}
                                    />


                                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                                        Этот принцип формулируется двумя жесткими правилами:
                                        1. <strong>Модули верхнего уровня не должны зависеть от модулей нижнего уровня. Оба должны зависеть от абстракций.</strong>
                                        2. <strong>Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.</strong>
                                    </p>

                                    {/* Mental Model (Violet Box) */}
                                    <div
                                        style={{
                                            backgroundColor: '#f5f3ff',
                                            border: '1px solid #ddd6fe',
                                            padding: '16px',
                                            borderRadius: '6px',
                                            marginBottom: '24px',
                                            fontSize: '14px',
                                            lineHeight: '1.6',
                                            color: '#4c1d95'
                                        }}
                                    >
                                        <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                            🧠 Ментальная модель (Розетка и Электроприборы):
                                        </div>
                                        <div style={{ marginBottom: '6px' }}>
                                            Представьте, что провода от вашего телевизора намертво припаяны прямо к стене дома. Если вы захотите заменить телевизор на тостер, вам придется вызывать электрика, штробить стены и переделывать всю проводку. Это жесткая зависимость верхнего уровня от нижнего.
                                        </div>
                                        <div>
                                            Чтобы этого избежать, люди придумали абстракцию — <strong>розетку (интерфейс)</strong>. Стене (высокий уровень) все равно, что в нее вставят. Тостеру и телевизору (детали) тоже все равно, как генерируется электричество. Оба они зависят только от формы вилки и розеточного стандарта.
                                        </div>
                                    </div>

                                    {/* Text Before Code */}
                                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                                        Пример нарушения и исправления DIP (Внедрение зависимости через конструктор):
                                    </div>

                                    {/* Code Block (Formatted & Cleaned) */}
                                    <pre
                                        style={{
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
                                        }}
                                    >
{`// ❌ НАРУШЕНИЕ DIP: Модуль заказа жестко завязан на конкретную базу данных (деталь)
class AxiosFetch {
    request(url) { return \`Данные из сети для \${url}\`; }
}

class OrderManagerError {
    constructor() {
        // Ошибка! Класс сам создает экземпляр жесткой зависимости внутри себя.
        // Если мы захотим заменить Axios на GraphQL или Fetch, придется переписывать этот класс.
        this.api = new AxiosFetch(); 
    }

    loadOrder(id) {
        return this.api.request(\`/orders/\${id}\`);
    }
}


// 🟢 СОБЛЮДЕНИЕ DIP: Инвертируем управление (IoC) с помощью Dependency Injection (DI)
// Шаг 1: Создаем "контракты" (в JS это могут быть базовые классы или соглашения о методах)
class ApiServiceContract {
    request(url) {}
}

// Шаг 2: Реализуем детали, которые следуют контракту
class AxiosService extends ApiServiceContract {
    request(url) { return \`[Axios] Данные для \${url}\`; }
}

class GraphQLService extends ApiServiceContract {
    request(url) { return \`[GraphQL] Данные для \${url}\`; }
}

// Шаг 3: Модуль верхнего уровня ожидает абстракцию снаружи
class OrderManager {
    // Передаем зависимость извне (через аргументы конструктора). Это и есть Dependency Injection!
    constructor(apiService) {
        this.api = apiService; 
    }

    loadOrder(id) {
        return this.api.request(\`/orders/\${id}\`);
    }
}

// Использование: Теперь мы можем безболезненно подменять сервисы на лету!
const managerWithAxios = new OrderManager(new AxiosService());
console.log(managerWithAxios.loadOrder(42));

const managerWithGraphQL = new OrderManager(new GraphQLService());
console.log(managerWithGraphQL.loadOrder(42)); // Код самого OrderManager остался нетронутым!`}
    </pre>

                                    {/* Interview Tips */}
                                    <div
                                        style={{
                                            borderLeft: '4px solid #10b981',
                                            backgroundColor: '#f0fdf4',
                                            padding: '12px 16px',
                                            borderRadius: '0 6px 6px 0',
                                            fontSize: '14px',
                                            color: '#065f46',
                                            lineHeight: '1.5'
                                        }}
                                    >
                                        💡 <strong>Популярный вопрос: В чем разница между DIP, DI и IoC?</strong>
                                        На собеседованиях часто просят не путать эти понятия:
                                        <ul style={{ paddingLeft: '16px', margin: '4px 0 0 0', listStyleType: 'disc' }}>
                                            <li style={{ marginBottom: '4px' }}><strong>DIP (Принцип)</strong> — это верхнеуровневое архитектурное правило проектирования (зависимость от абстракций, а не деталей).</li>
                                            <li style={{ marginBottom: '4px' }}><strong>DI (Паттерн)</strong> — это конкретный способ реализации этого правила на практике, когда зависимости передаются («внедряются») объекту извне (через конструктор или пропсы), а не создаются им внутри.</li>
                                            <li><strong>IoC (Inversion of Control)</strong> — это глобальный подход, когда управление ходом программы передается внешнему фреймворку или контейнеру (например, когда не вы вызываете компоненты, а React сам решает, когда их зарендерить).</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* Текст перед кодом */}
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                            Пример нарушения и исправления принципа Open/Closed (OCP):
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
{`// ❌ НАРУШЕНИЕ: При добавлении нового типа уведомления придется переписывать этот класс
class NotificationServiceError {
  send(type, message) {
    if (type === 'email') { /* ... */ }
    if (type === 'sms') { /* ... */ }
    // Если понадобится 'telegram' — придется менять логику метода send!
  }
}

// 🟢 СОБЛЮДЕНИЕ OCP: Код закрыт для изменений, но открыт для расширения
class EmailSender { send(msg) { /* логика отправки email */ } }
class SmsSender { send(msg) { /* логика отправки sms */ } }
class TelegramSender { send(msg) { /* логика отправки telegram */ } } // Добавили без изменения базы!

class NotificationService {
  constructor(sender) {
    this.sender = sender; // Зависим от абстрактного интерфейса сендера (это также и принцип D)
  }
  
  send(message) {
    this.sender.send(message);
  }
}

const service = new NotificationService(new TelegramSender());
service.send("Привет!");`}
  </pre>

                        {/* Итог для интервью */}
                        <div style={{
                            borderLeft: '4px solid #10b981',
                            backgroundColor: '#f0fdf4',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#065f46',
                            lineHeight: '1.5'
                        }}>
                            💡 <strong>Как отвечать на интервью:</strong> SOLID — это не законы, а рекомендации. Главная их суть — предотвратить появление спагетти-кода. Обязательно выучите расшифровку каждой буквы и держите в голове по одному простому примеру (как пример с отправкой уведомлений для OCP/DIP или пример со страусом для LSP). Это покажет, что вы понимаете суть проектирования, а не просто зазубрили определения.
                        </div>
                    </div>

                    <div
                        id="virtualDom"
                        style={{
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
                        }}
                    >
                        {/* Upper Indigo Card Bar */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                backgroundColor: '#6366f1'
                            }}
                        />

                        {/* Title */}
                        <h2
                            style={{
                                fontSize: '20px',
                                fontWeight: '700',
                                color: '#4338ca',
                                margin: '0 0 12px 0'
                            }}
                        >
                            Механизм Virtual DOM и алгоритм Reconciliation
                        </h2>

                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                            <strong>Virtual DOM (Виртуальный DOM)</strong> — это легковесная копия реального DOM-дерева в виде обычных JavaScript-объектов в оперативной памяти. Изменение реального DOM в браузере — крайне «дорогая» операция (вызывает тяжелые процессы <em>Reflow</em> и <em>Repaint</em>). React решает эту проблему, сначала производя все расчеты в памяти.
                        </p>

                        {/* Mental Model (Violet Box) */}
                        <div
                            style={{
                                backgroundColor: '#f5f3ff',
                                border: '1px solid #ddd6fe',
                                padding: '16px',
                                borderRadius: '6px',
                                marginBottom: '24px',
                                fontSize: '14px',
                                lineHeight: '1.6',
                                color: '#4c1d95'
                            }}
                        >
                            <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                🧠 Пошаговый процесс обновления интерфейса:
                            </div>
                            <ol style={{ paddingLeft: '16px', margin: 0, listStyleType: 'decimal' }}>
                                <li style={{ marginBottom: '4px' }}> При изменении состояния (State) React строит <strong>новое виртуальное дерево</strong> компонентов.</li>
                                <li style={{ marginBottom: '4px' }}>Запускается процесс <strong>Diffing</strong>: React сравнивает новый снимок Virtual DOM со старым снимком (предыдущим состоянием).</li>
                                <li style={{ marginBottom: '4px' }}>Алгоритм <strong>Reconciliation (Согласование)</strong> вычисляет минимальный набор изменений, который нужно внести.</li>
                                <li>Пакет этих изменений атомарно и точечно применяется к реальному браузерному DOM (синхронизация).</li>
                            </ol>
                        </div>

                        {/* Text Before Code */}
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                            Как JSX превращается в объект Virtual DOM (Концептуальный вид):
                        </div>

                        {/* Code Block */}
                        <pre
                            style={{
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
                            }}
                        >
{`// 1. Мы пишем привычный JSX код:
const element = <button className="btn">Кликни меня</button>;

// 2. Сборщик (Babel/SWC) под капотом компилирует его в вызов React.createElement():
const compiled = React.createElement('button', { className: 'btn' }, 'Кликни меня');

// 3. На выходе получается чистый JS-объект — это и есть узел Virtual DOM:
{
    type: 'button',
    props: {
        className: 'btn',
        children: 'Кликни меня'
    }
}
// Сравнить два таких объекта в памяти компьютера — это миллисекунды.`}
    </pre>

                        {/* Key Attribute Trap */}
                        <div
                            style={{
                                borderLeft: '4px solid #ef4444',
                                backgroundColor: '#fef2f2',
                                padding: '12px 16px',
                                borderRadius: '0 6px 6px 0',
                                fontSize: '14px',
                                color: '#991b1b',
                                lineHeight: '1.5'
                            }}
                        >
                            🚨 <strong>Важнейший вопрос на интервью (Зачем нужен атрибут key?):</strong> При рендеринге списков React требует передавать уникальный <code style={{ fontFamily: 'monospace' }}>key</code> для каждого элемента. Без него при добавлении элемента в начало списка алгоритм Diffing решит, что изменились <em>все</em> элементы ниже, и полностью перерисует их. Стабильный <code style={{ fontFamily: 'monospace' }}>key</code> служит паспортом элемента: по нему React мгновенно понимает, какие элементы просто передвинулись, какие добавились, а какие удалились, сохраняя их внутреннее состояние и DOM-узлы. Использовать случайные числа (Math.random) или индексы массива в качестве key — грубое нарушение, ломающее оптимизацию.
                        </div>
                    </div>
                    <div
                        id="reactPrinciples"
                        style={{
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
                        }}
                    >
                        {/* Upper Indigo Card Bar */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                backgroundColor: '#6366f1'
                            }}
                        />

                        {/* Title */}
                        <h2
                            style={{
                                fontSize: '20px',
                                fontWeight: '700',
                                color: '#4338ca',
                                margin: '0 0 12px 0'
                            }}
                        >
                            Фундаментальные принципы проектирования React
                        </h2>

                        <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                            В основе React лежат жесткие архитектурные соглашения, которые делают код предсказуемым, легким в тестировании и масштабировании. Знание этих принципов отличает Junior-кодера от разработчика осознанного уровня.
                        </p>

                        {/* Mental Model (Violet Box) */}
                        <div
                            style={{
                                backgroundColor: '#f5f3ff',
                                border: '1px solid #ddd6fe',
                                padding: '16px',
                                borderRadius: '6px',
                                marginBottom: '24px',
                                fontSize: '14px',
                                lineHeight: '1.6',
                                color: '#4c1d95'
                            }}
                        >
                            <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                                🧠 4 кита философии React:
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <strong>1. Декларативность (UI как функция от данных):</strong>
                                Вы не управляете DOM вручную и не пишете инструкции в духе <em>«найди этот класс и добавь тег»</em>. Вы описываете конечный вид интерфейса для конкретного состояния. Математическая формула React выглядит так: <code style={{ fontFamily: 'monospace', fontWeight: '700' }}>UI = f(State)</code>. При изменении состояния функция вызывается заново.
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <strong>2. Компонентный подход (Component-Driven):</strong>
                                Интерфейс собирается из изолированных, независимых кубиков (компонентов). Каждый компонент инкапсулирует внутри себя собственную разметку (JSX), стили и логику, что позволяет повторно использовать их по всему проекту.
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <strong>3. Однонаправленный поток данных (Unidirectional Data Flow):</strong>
                                Данные в React строго и всегда текут <strong>сверху вниз</strong> — от родительских компонентов к дочерним через пропсы (<code style={{ fontFamily: 'monospace' }}>props</code>). Дочерний компонент никогда не может напрямую изменить данные родителя, что исключает появление хаотичных багов.
                            </div>

                            <div>
                                <strong>4. Иммутабельность состояния (Immutability):</strong>
                                Состояние в React считается священным и неизменяемым. Вы никогда не мутируете стейт напрямую (<code style={{ fontFamily: 'monospace' }}>state.user = 'Bob'</code>). Вместо этого вы всегда создаете <em>абсолютно новую копию данных</em> через специальную функцию-модификатор. Это позволяет React мгновенно фиксировать изменения.
                            </div>
                        </div>

                        {/* Text Before Code */}
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                            Демонстрация принципов (Иммутабельность, Однонаправленный поток, Декларативность) в коде:
                        </div>

                        {/* Code Block (Formatted & Cleaned) */}
                        <pre
                            style={{
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
                            }}
                        >
{`import React, { useState } from 'react';

// Дочерний компонент: принимает данные СВЕРХУ (Однонаправленный поток)
// Пропсы для дочернего компонента СТРОГО иммутабельны (только для чтения)
function WelcomeMessage({ username }) {
    return <h1 style={{ color: '#4338ca' }}>Привет, {username}!</h1>;
}

export default function App() {
    const [user, setUser] = useState({ name: 'Катя', role: 'admin' });

    const handleUpdate = () => {
        // Соблюдаем ИММУТАБЕЛЬНОСТЬ: не пишем user.name = 'Алексей'!
        // Создаем абсолютно новый объект через Spread-оператор
        setUser({
            ...user,
            name: 'Алексей'
        });
    };

    // ДЕКЛАРАТИВНОСТЬ: мы просто возвращаем разметку на основе текущего стейта user
    return (
        <div style={{ padding: '24px' }}>
            <WelcomeMessage username={user.name} />
            <button onClick={handleUpdate}>Изменить имя</button>
        </div>
    );
}`}
    </pre>

                        {/* Interview Tips */}
                        <div
                            style={{
                                borderLeft: '4px solid #10b981',
                                backgroundColor: '#f0fdf4',
                                padding: '12px 16px',
                                borderRadius: '0 6px 6px 0',
                                fontSize: '14px',
                                color: '#065f46',
                                lineHeight: '1.5'
                            }}
                        >
                            💡 <strong>Каверзный вопрос на собеседовании:</strong> Если поток данных однонаправленный, как дочерний компонент может сообщить родителю, что внутри него что-то произошло (например, кликнули кнопку)?
                            <br />
                            <strong>Ответ:</strong> Через механизм <strong>коллбэков (Callback функции)</strong>. Родитель вместе с обычными данными передает вниз по пропсам функцию-обработчик. Дочерний компонент вызывает эту функцию внутри себя и прокидывает туда аргументы. Таким образом, данные все равно технически не текут наверх — дочерний компонент просто активирует триггер, переданный ему сверху.
                        </div>
                    </div>
                    <div
                        id="reactCorePrinciples"
                        style={{
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
                        }}
                    >
                        {/* Upper Indigo Card Bar */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                backgroundColor: '#6366f1'
                            }}
                        />

                        {/* Title */}
                        <h2
                            style={{
                                fontSize: '22px',
                                fontWeight: '800',
                                color: '#0f172a',
                                margin: '0 0 6px 0',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            Спецификация фундаментальных принципов React
                        </h2>
                        <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 24px 0', fontWeight: '500' }}>
                            Архитектурный фундамент построения предсказуемых и масштабируемых интерфейсов
                        </p>

                        {/* Блоки принципов */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px', lineHeight: '1.6' }}>

                            {/* 1. Декларативный подход */}
                            <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                                <strong style={{ color: '#0f172a', fontSize: '15px', display: 'block', marginBottom: '4px' }}>
                                    📢 Декларативный подход (Declarative UI)
                                </strong>
                                Разработчик описывает финальный вид интерфейса в зависимости от текущего состояния, а не диктует браузеру пошаговые инструкции по изменению DOM-дерева. React самостоятельно вычисляет разницу и берет на себя всю рутину по обновлению экрана.
                            </div>

                            {/* 2. Компонентная архитектура */}
                            <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                                <strong style={{ color: '#0f172a', fontSize: '15px', display: 'block', marginBottom: '4px' }}>
                                    📦 Компонентная архитектура (Component-Driven)
                                </strong>
                                Весь интерфейс приложения декомпозируется (разбивается) на независимые, изолированные и переиспользуемые кусочки кода — компоненты. Каждый компонент инкапсулирует свою логику, состояние и JSX-разметку, а также может быть вложен в другие компоненты.
                            </div>

                            {/* 3. Однонаправленный поток данных */}
                            <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                                <strong style={{ color: '#0f172a', fontSize: '15px', display: 'block', marginBottom: '4px' }}>
                                    ⏳ Однонаправленный поток данных (One-Way Data Flow)
                                </strong>
                                Данные в приложении строго циркулируют <strong>сверху вниз</strong>: от родительских компонентов к дочерним посредством неизменяемых свойств (<code style={{ fontFamily: 'monospace' }}>props</code>). Это исключает появление перекрестных багов мутации и существенно упрощает отладку и трассировку состояния.
                            </div>

                            {/* 4. Виртуальный DOM */}
                            <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                                <strong style={{ color: '#0f172a', fontSize: '15px', display: 'block', marginBottom: '4px' }}>
                                    🧠 Виртуальный DOM (Virtual DOM & Diffing)
                                </strong>
                                React содержит в оперативной памяти легковесную копию реального DOM в виде JS-объектов. При изменении данных генерируется новое виртуальное дерево, алгоритм сравнивает его с предыдущим снимком и точечно обновляет в реальном DOM только изменившиеся узлы, оптимизируя производительность рендеринга.
                            </div>

                            {/* 5. Props vs State */}
                            <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                                <strong style={{ color: '#0f172a', fontSize: '15px', display: 'block', marginBottom: '4px' }}>
                                    ⚙️ Разделение ответственности: Props и State
                                </strong>
                                <ul style={{ paddingLeft: '16px', margin: 0, listStyleType: 'disc' }}>
                                    <li><code style={{ fontFamily: 'monospace', fontWeight: '700' }}>props</code> — внешние входные конфигурационные данные компонента, передаваемые родителем. Они строго <strong>иммутабельны</strong> (доступны только для чтения).</li>
                                    <li><code style={{ fontFamily: 'monospace', fontWeight: '700' }}>state</code> — внутренняя локальная память компонента. Данные стейта реактивны, могут изменяться внутри компонента и напрямую управляют его жизненным циклом.</li>
                                </ul>
                            </div>

                            {/* 6. Реактивность */}
                            <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                                <strong style={{ color: '#0f172a', fontSize: '15px', display: 'block', marginBottom: '4px' }}>
                                    ⚡ Реактивность (Reactive Updates)
                                </strong>
                                Прямая связь между данными и экраном. Любое санкционированное изменение локального состояния компонента автоматического инициирует повторный вызов функции компонента (рендер) и обновление соответствующего пользовательского интерфейса.
                            </div>

                            {/* 7. Композиция вместо наследования */}
                            <div style={{ padding: '16px', backgroundColor: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: '6px', color: '#4c1d95' }}>
                                <strong style={{ color: '#4c1d95', fontSize: '15px', display: 'block', marginBottom: '4px' }}>
                                    🧩 Композиция вместо наследования (Composition over Inheritance)
                                </strong>
                                React полностью отказывается от классического ООП-наследования классов для расширения UI. Вместо создания цепочек наследования сложные компоненты конструируются путем комбинирования и вложения более простых компонентов, в том числе используя пропс-контейнер <code style={{ fontFamily: 'monospace' }}>children</code>.
                            </div>

                        </div>

                        {/* Серая плашка с кодом, демонстрирующим Композицию и Props */}
                        <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', margin: '24px 0 12px 0' }}>
                            Пример реализации принципа Композиции (вложение через children):
                        </div>
                        <pre
                            style={{
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
                            }}
                        >
{`import React from 'react';

// Универсальный переиспользуемый компонент карточки (Композиция)
// Принимает props.children для встраивания любой разметки внутрь
function Card({ title, children }) {
    return (
        <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 12px 0', color: '#0f172a' }}>{title}</h3>
            {/* Сюда внедрится всё, что мы передадим между тегами <Card> */}
            <div>{children}</div>
        </div>
    );
}

export default function Profile() {
    return (
        // Конструируем сложный UI из простых блоков без наследования классов!
        <Card title="Профиль пользователя">
            <p>Имя: Екатерина</p>
            <button style={{ backgroundColor: '#06b6d4', color: '#fff' }}>
                Редактировать
            </button>
        </Card>
    );
}`}
    </pre>
                    </div>

                </div>
                <div
                    id="reactBatching"
                    style={{
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
                    }}
                >
                    {/* Upper Indigo Card Bar */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#6366f1'
                        }}
                    />

                    {/* Title */}
                    <h2
                        style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#4338ca',
                            margin: '0 0 12px 0'
                        }}
                    >
                        Механизм Батчинга (State Batching) в React
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        <strong>Батчинг (Группировка обновлений)</strong> — это встроенный механизм оптимизации React, при котором несколько вызовов функций изменения состояния (<code style={{ fontFamily: 'monospace' }}>setState</code>) объединяются в один цикл обновления интерфейса. Вместо того чтобы перерисовывать компонент после каждого чиха, React ждет завершения обработчика событий и выполняет всего <strong>один повторный рендер</strong>.
                    </p>

                    {/* Mental Model (Violet Box) */}
                    <div
                        style={{
                            backgroundColor: '#f5f3ff',
                            border: '1px solid #ddd6fe',
                            padding: '16px',
                            borderRadius: '6px',
                            marginBottom: '24px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#4c1d95'
                        }}
                    >
                        <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                            🧠 Ментальная модель (Официант в ресторане):
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                            Представьте, что вы пришли в ресторан. Если вы скажете официанту: <em>«Я хочу суп»</em>, он не побежит сломя голову на кухню сразу же. Он подождет, пока вы назовете второе блюдо, десерт и напиток. Официант собирает весь ваш заказ (батчит) и делает <strong>один единственный поход на кухню</strong>.
                        </div>
                        <div>
                            Точно так же работает React: он собирает все запросы на изменение стейта внутри функции и обновляет экран один раз в самом конце.
                        </div>
                    </div>

                    {/* Evolution of Batching */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Эволюция механизма: Автоматический батчинг в React 18+
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px', fontSize: '13px', lineHeight: '1.5' }}>
                        {/* React 17 */}
                        <div style={{ padding: '14px', backgroundColor: '#fff7ed', border: '1px solid #ffedd5', borderRadius: '6px' }}>
            <span style={{ fontWeight: '700', color: '#9a3412', display: 'block', marginBottom: '4px' }}>
                ⚠️ Как было в React 17 и раньше
            </span>
                            Группировка обновлений работала <strong>только внутри родных обработчиков событий React</strong> (например, клики по кнопкам <code style={{ fontFamily: 'monospace' }}>onClick</code>). Если вы обновляли стейт внутри асинхронного кода (<code style={{ fontFamily: 'monospace' }}>fetch</code>, промисы, таймеры <code style={{ fontFamily: 'monospace' }}>setTimeout</code>), батчинг ломался, и React вызывал рендер на каждое изменение строки за строкой.
                        </div>

                        {/* React 18+ */}
                        <div style={{ padding: '14px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px' }}>
            <span style={{ fontWeight: '700', color: '#166534', display: 'block', marginBottom: '4px' }}>
                🚀 Автоматический батчинг (Automatic Batching)
            </span>
                            В современных версиях React абсолютно все обновления состояния группируются автоматически. Независимо от того, где вызван <code style={{ fontFamily: 'monospace' }}>setState</code> — в обычном клике, внутри <code style={{ fontFamily: 'monospace' }}>setTimeout</code>, после сетевого <code style={{ fontFamily: 'monospace' }}>await</code> или в слушателях нативных событий WebSocket — компонент перерисуется ровно один раз.
                        </div>
                    </div>

                    {/* Text Before Code */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Практическая демонстрация батчинга и асинхронности обновлений:
                    </div>

                    {/* Code Block (Formatted & Cleaned) */}
                    <pre
                        style={{
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
                        }}
                    >
{`import React, { useState } from 'react';

export default function BatchingDemo() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    console.log("🔄 РЕНДЕР КОМПОНЕНТА СРАБОТАЛ!"); // Мы увидим этот лог только ОДИН раз при клике

    const handleClick = () => {
        // Запрос 1
        setCount(c => c + 1);
        // Запрос 2
        setFlag(f => !f);
        
        // 🚨 ЛОВУШКА ИНТЕРВЬЮ: Что выведет console.log прямо на следующей строке?
        // Ответ: Изменения еще не применились в реальные переменные! Значение стейта всё еще старое.
        // Выведет: "Текущий count: 0"
        console.log("Текущий count:", count); 
        
        // Ждем завершения функции handleClick...
        // React закрывает "пакет" задач и запускает ОДИН повторный рендер для обоих изменений.
    };

    const handleAsyncClick = () => {
        fetch('/api/data').then(() => {
            // В React 18+ здесь сработает Автоматический Батчинг ✅ (1 рендер)
            // В React 17 здесь произошло бы 2 последовательных рендера ❌
            setCount(c => c + 1);
            setFlag(f => !f);
        });
    };

    return (
        <div>
            <p>Счетчик: {count}</p>
            <button onClick={handleClick}>Обычный клик</button>
            <button onClick={handleAsyncClick}>Асинхронный клик</button>
        </div>
    );
}`}
    </pre>

                    {/* How to bypass batching */}
                    <div
                        style={{
                            borderLeft: '4px solid #ef4444',
                            backgroundColor: '#fef2f2',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#991b1b',
                            lineHeight: '1.5'
                        }}
                    >
                        💡 <strong>Продвинутый уровень (Как принудительно отключить батчинг?):</strong> Если вам критически необходимо немедленно применить изменения к DOM синхронно (например, чтобы высчитать геометрию элемента сразу после изменения стейта), вы можете импортировать и обернуть вызовы в функцию <code style={{ fontFamily: 'monospace' }}>flushSync</code> из пакета <code style={{ fontFamily: 'monospace' }}>'react-dom'</code>:
                        <code style={{ display: 'block', backgroundColor: '#ffffff', padding: '6px 10px', borderRadius: '4px', marginTop: '8px', fontFamily: 'monospace', border: '1px solid #fee2e2', color: '#0f172a' }}>
                            {`import { flushSync } from 'react-dom';\n\nflushSync(() => {\n    setCount(count + 1); // Реальный DOM обновится немедленно!\n});`}
                        </code>
                        Использовать <code style={{ fontFamily: 'monospace' }}>flushSync</code> рекомендуется крайне редко, так как это бьет по производительности приложения.
                    </div>
                </div>
                <div
                    id="reactReconciliation"
                    style={{
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
                    }}
                >
                    {/* Upper Indigo Card Bar */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#6366f1'
                        }}
                    />

                    {/* Title */}
                    <h2
                        style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#4338ca',
                            margin: '0 0 12px 0'
                        }}
                    >
                        Архитектура рендеринга: Render phase, Commit phase и Reconciliation
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        Процесс обновления интерфейса в React жестко разделен на две независимые стадии: расчетную (<strong>Render phase</strong>) и физическую (<strong>Commit phase</strong>). Между ними работает алгоритм <strong>Reconciliation (Согласование)</strong>, который вычисляет разницу (Diffing) между старым и новым снимками виртуального дерева.
                    </p>

                    {/* Mental Model (Violet Box) */}
                    <div
                        style={{
                            backgroundColor: '#f5f3ff',
                            border: '1px solid #ddd6fe',
                            padding: '16px',
                            borderRadius: '6px',
                            marginBottom: '24px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#4c1d95'
                        }}
                    >
                        <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                            🧠 Ментальная модель (Архитектор и Строители):
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                            <strong>Render Phase (Проектирование):</strong> Архитектор садится за стол и чертит новый план здания на бумаге (React вызывает функции компонентов и строит новое дерево Virtual DOM). Это чисто математический расчет в памяти. На этой фазе ничего на улице не строится.
                        </div>
                        <div>
                            <strong>Commit Phase (Строительство):</strong> Строители берут чертеж, сравнивают его со старым зданием, находят изменения и точечно перекладывают кирпичи (React передает инструкции в библиотеку <code style={{ fontFamily: 'monospace' }}>react-dom</code>, которая вносит изменения в реальный браузерный DOM).
                        </div>
                    </div>

                    {/* Detailed Phase Separation */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Глубокий разбор стадий жизненного цикла рендера:
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px', fontSize: '13px', lineHeight: '1.5' }}>
                        {/* Render Phase */}
                        <div style={{ padding: '14px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '6px' }}>
            <span style={{ fontWeight: '700', color: '#1e3a8a', display: 'block', marginBottom: '6px' }}>
                ⚙️ 1. Render Phase (Асинхронная / Чистая)
            </span>
                            <ul style={{ paddingLeft: '16px', margin: 0, listStyleType: 'circle', color: '#1e40af' }}>
                                <li>React вызывает функции ваших компонентов сверху вниз.</li>
                                <li>Генерируется новое виртуальное дерево (JSX транслируется в JS-объекты).</li>
                                <li><strong>Эта фаза является чистой (Pure):</strong> она не должна содержать побочных эффектов (никаких <code style={{ fontFamily: 'monospace' }}>fetch</code> или манипуляций с DOM).</li>
                                <li>В React 18+ эта фаза может ставиться на паузу или прерываться ради приоритетных задач (Concurrent Mode).</li>
                            </ul>
                        </div>

                        {/* Commit Phase */}
                        <div style={{ padding: '14px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px' }}>
            <span style={{ fontWeight: '700', color: '#166534', display: 'block', marginBottom: '6px' }}>
                🚀 2. Commit Phase (Синхронная / Побочные эффекты)
            </span>
                            <ul style={{ paddingLeft: '16px', margin: 0, listStyleType: 'circle', color: '#14532d' }}>
                                <li>React точечно применяет изменения к реальному DOM через методы вроде <code style={{ fontFamily: 'monospace' }}>appendChild</code> или <code style={{ fontFamily: 'monospace' }}>setAttribute</code>.</li>
                                <li><strong>Эта фаза всегда синхронна</strong> и не может быть прервана, чтобы пользователь не увидел наполовину обновленный экран.</li>
                                <li>После завершения мутации DOM-дерева браузер делает перерисовку (Paint).</li>
                                <li>Сразу после этого React запускает хуки побочных эффектов: <code style={{ fontFamily: 'monospace' }}>useLayoutEffect</code> (до отрисовки экрана) и <code style={{ fontFamily: 'monospace' }}>useEffect</code> (после).</li>
                            </ul>
                        </div>
                    </div>

                    {/* Reconciliation Rules */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '8px' }}>
                        Эвристический алгоритм Reconciliation (Diffing):
                    </div>
                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                        Полное сравнение двух деревьев объектов имеет математическую сложность <strong>O(n³)</strong>, что неприемлемо для интерфейсов. React реализует эвристический алгоритм со сложностью <strong>O(n)</strong>, основанный на двух железных правилах:
                    </p>
                    <ul style={{ paddingLeft: '16px', margin: '0 0 20px 0', fontSize: '14px', lineHeight: '1.6', listStyleType: 'decimal' }}>
                        <li style={{ marginBottom: '6px' }}><strong>Разные типы элементов уничтожают ветку:</strong> Если тип элемента изменился (был <code style={{ fontFamily: 'monospace' }}>{'<div>'}</code>, а стал <code style={{ fontFamily: 'monospace' }}>{'<span>'}</code>), React не ищет сходства ниже. Он полностью уничтожает (размонтирует) старое дерево со всеми его дочерними узлами и стейтом, и строит новое с нуля.</li>
                        <li><strong>Атрибут `key` сохраняет идентичность:</strong> При рендеринге списков элементы сравниваются по ключам. Если ключ совпал, React понимает, что это тот же самый DOM-узел, который просто передвинулся в массиве, и не перерисовывает его внутренности.</li>
                    </ul>

                    {/* Text Before Code */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Концептуальный пример: Как изменение типов элементов сбрасывает состояние
                    </div>

                    {/* Code Block */}
                    <pre
                        style={{
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
                        }}
                    >
{`import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(c => c + 1)}>Счет: {count}</button>;
}

export default function App() {
    const [isWrapperDiv, setIsWrapperDiv] = useState(true);

    return (
        <div>
            {isWrapperDiv ? (
                // Контейнер DIV. Внутри него живет Counter
                <div className="container">
                    <Counter />
                </div>
            ) : (
                // ⚠️ Переключаем на SECTION! 
                // Алгоритм Reconciliation видит смену типа тега (div -> section).
                // Результат: Старый div и вложенный Counter полностью уничтожаются.
                // Внутренний стейт count сотрется и сбросится в 0!
                <section className="container">
                    <Counter />
                </section>
            )}
            <button onClick={() => setIsWrapperDiv(!isWrapperDiv)}>Переключить обертку</button>
        </div>
    );
}`}
    </pre>

                    {/* Interview Advice */}
                    <div
                        style={{
                            borderLeft: '4px solid #3b82f6',
                            backgroundColor: '#eff6ff',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#1e3a8a',
                            lineHeight: '1.5'
                        }}
                    >
                        🎯 <strong>Формулировка для собеседования:</strong> Если вас просят объяснить разницу между рендером и коммитом, ответьте так:
                        <em> «Рендеринг — это запуск функций компонентов для вычисления нового снимка Virtual DOM. Это фаза расчетов. Коммит — это физическое применение изменений к реальному браузерному DOM-дереву. Рендеринг происходит всегда при изменении стейта, но коммит случится только в том случае, если алгоритм Reconciliation обнаружит фактическую разницу между старым и новым снимком виртуального дерева».</em>
                    </div>
                </div>
                <div
                    id="reactPropsEvents"
                    style={{
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
                    }}
                >
                    {/* Upper Indigo Card Bar */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#6366f1'
                        }}
                    />

                    {/* Title */}
                    <h2
                        style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#4338ca',
                            margin: '0 0 12px 0'
                        }}
                    >
                        Тонкости работы с Props и обработчиками событий
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        Свойства (<strong>Props</strong>) и события (<strong>Events</strong>) — это главные кровеносные сосуды любого React-приложения, обеспечивающие однонаправленный поток данных и коммуникацию между компонентами. Их некорректная организация — главная причина скрытых багов производительности.
                    </p>

                    {/* Mental Model (Violet Box) */}
                    <div
                        style={{
                            backgroundColor: '#f5f3ff',
                            border: '1px solid #ddd6fe',
                            padding: '16px',
                            borderRadius: '6px',
                            marginBottom: '24px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#4c1d95'
                        }}
                    >
                        <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                            🧠 Золотые правила Props и Events на интервью:
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                            <strong>1. Пропсы строго иммутабельны (Только для чтения):</strong> Компонент никогда не должен пытаться изменить свои входящие <code style={{ fontFamily: 'monospace' }}>props</code> напрямую (например, <code style={{ fontFamily: 'monospace' }}>props.title = "Новый"</code>). За попытку мутации пропсов движок выкинет ошибку, так как это нарушает предсказуемость потока данных.
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                            <strong>2. Избегайте стрелочных функций в JSX:</strong> Отрендерить инлайн-стрелку вида <code style={{ fontFamily: 'monospace' }}>{'onClick={() => handleClick(id)}'}</code> кажется удобным, но это порождает новую ссылку на функцию при <em>каждом</em> рендере. Если этот пропс передается в дочерний оптимизированный компонент (<code style={{ fontFamily: 'monospace' }}>React.memo</code>), оптимизация полностью ломается.
                        </div>
                        <div>
                            <strong>3. Синтетические события (SyntheticEvent):</strong> Реакт оборачивает нативные браузерные события в свою кроссбраузерную обертку <code style={{ fontFamily: 'monospace' }}>SyntheticEvent</code> ради оптимизации производительности и делегирования событий.
                        </div>
                    </div>

                    {/* Text Before Code */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Правильные и неправильные способы передачи аргументов в обработчики:
                    </div>

                    {/* Code Block (Formatted & Cleaned) */}
                    <pre
                        style={{
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
                        }}
                    >
{`import React from 'react';

// Дочерний компонент: принимает данные и коллбэк-обработчик клика
const ListItem = React.memo(({ id, text, onRemove }) => {
    console.log(\`🔄 Рендер элемента: \${text}\`);
    return (
        <li>
            {text} <button onClick={() => onRemove(id)}>Удалить</button>
        </li>
    );
});

export default function TodoList() {
    const list = [
        { id: 1, text: 'Выучить React' },
        { id: 2, text: 'Пройти собеседование' }
    ];

    // Базовый обработчик (автоматически получает объект события Event)
    const handleSimpleClick = (event) => {
        event.preventDefault();
        console.log("Кликнули по ссылке:", event.target);
    };

    // Архитектурно ПРАВИЛЬНЫЙ способ передачи аргументов (Каррирование)
    // Функция возвращает другую функцию, фиксируя ID в замыкании заранее
    const handleRemoveCorrect = (id) => (event) => {
        console.log(\`Удаляем элемент с ID: \${id}\`);
    };

    return (
        <div>
            {/* 🟢 Правильный вызов без аргументов */}
            <a href="#" onClick={handleSimpleClick}>Простая ссылка</a>

            <ul>
                {list.map(item => (
                    <ListItem 
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        
                        // ❌ НЕПРАВИЛЬНО: Инлайн-стрелка ломает React.memo для ListItem!
                        // При каждом рендере TodoList здесь создается новая ссылка на функцию.
                        // onRemove={() => console.log(item.id)}

                        // 🟢 ПРАВИЛЬНО: Передаем функцию, созданную через каррирование
                        // Ссылка на handleRemoveCorrect(item.id) стабильна (если обернуть в useCallback)
                        onRemove={handleRemoveCorrect(item.id)}
                    />
                ))}
            </ul>
        </div>
    );
}`}
    </pre>

                    {/* Performance Trap */}
                    <div
                        style={{
                            borderLeft: '4px solid #ef4444',
                            backgroundColor: '#fef2f2',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#991b1b',
                            lineHeight: '1.5'
                        }}
                    >
                        🚨 <strong>Ловушка на собеседовании (Немедленный вызов функции):</strong> Самая популярная ошибка новичков — написать в JSX круглые скобки вызова прямо при передаче события: <code style={{ fontFamily: 'monospace' }}>{'onClick={handleClick()}'}</code>. Помните: в фигурные скобки нужно передавать <strong>ссылку на функцию</strong>, а не её вызов! Если написать круглые скобки, функция выполнится немедленно в фазе рендеринга. Если внутри неё меняется стейт, приложение упадет в бесконечный цикл ререндеров и намертво зависнет с ошибкой <code style={{ fontFamily: 'monospace' }}>Too many re-renders</code>.
                    </div>
                </div>
                <div
                    id="reactEventPrevention"
                    style={{
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
                    }}
                >
                    {/* Upper Indigo Card Bar */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#6366f1'
                        }}
                    />

                    {/* Title */}
                    <h2
                        style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#4338ca',
                            margin: '0 0 12px 0'
                        }}
                    >
                        Предотвращение DOM-событий: Bubbling и Default Actions
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        Управление потоком событий в React завязано на стандартную архитектуру DOM браузера, но упаковано в кроссбраузерную обертку <code style={{ fontFamily: 'monospace' }}>SyntheticEvent</code>. Разработчик обязан контролировать два независимых механизма: <strong>всплытие (Bubbling)</strong> и <strong>поведение по умолчанию (Default Behavior)</strong>.
                    </p>

                    {/* Mental Model (Violet Box) */}
                    <div
                        style={{
                            backgroundColor: '#f5f3ff',
                            border: '1px solid #ddd6fe',
                            padding: '16px',
                            borderRadius: '6px',
                            marginBottom: '24px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#4c1d95'
                        }}
                    >
                        <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                            🧠 Разница между методами «на пальцах»:
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <strong>event.stopPropagation() — Остановка всплытия:</strong> Предотвращает движение события вверх по дереву DOM. Если этого не сделать, клик по маленькой кнопке внутри большой карточки «всплывёт» и активирует обработчик клика на самой карточке.
                        </div>
                        <div>
                            <strong>event.preventDefault() — Отмена действия по умолчанию:</strong> Отключает стандартное поведение самого браузера для этого тега. Например, запрещает ссылке <code style={{ fontFamily: 'monospace' }}>{'<a href="...">'}</code> перезагружать страницу или переходить по URL, а форме <code style={{ fontFamily: 'monospace' }}>{'<form>'}</code> — отправлять данные на сервер с перезагрузкой экрана при нажатии на Submit.
                        </div>
                    </div>

                    {/* Text Before Code */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Практический пример: Изоляция клика в карточке и отмена отправки формы
                    </div>

                    {/* Code Block (Formatted & Cleaned) */}
                    <pre
                        style={{
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
                        }}
                    >
{`import React from 'react';

export default function EventControl() {
    const handleCardClick = () => {
        console.log("👉 Открываем карточку товара...");
    };

    const handleFavoriteClick = (event) => {
        // 🟢 1. Останавливаем всплытие!
        // Клик замрёт на кнопке и НЕ пойдёт вверх к handleCardClick.
        event.stopPropagation();
        console.log("❤️ Добавлено в избранное!");
    };

    const handleSubmit = (event) => {
        // 🟢 2. Отменяем поведение по умолчанию!
        // Страница НЕ перезагрузится, мы можем обработать данные через JS.
        event.preventDefault();
        console.log("🚀 Форма отправлена асинхронно через fetch/axios");
    };

    return (
        <div style={{ padding: '20px', gap: '20px', display: 'flex', flexDirection: 'column' }}>
            {/* Пример со stopPropagation */}
            <div 
                onClick={handleCardClick} 
                style={{ border: '1px solid #ccc', padding: '24px', cursor: 'pointer' }}
            >
                <h3>Карточка товара (Кликни меня)</h3>
                
                <button onClick={handleFavoriteClick}>
                    В избранное
                </button>
            </div>

            {/* Пример с preventDefault */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Введите текст..." required />
                <button type="submit">Сохранить</button>
            </form>
        </div>
    );
}`}
    </pre>

                    {/* Interview Caveat */}
                    <div
                        style={{
                            borderLeft: '4px solid #ef4444',
                            backgroundColor: '#fef2f2',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#991b1b',
                            lineHeight: '1.5'
                        }}
                    >
                        🚨 <strong>Важная ловушка на интервью (React-делегирование и nativeEvent):</strong> Помните, что под капотом React вешает обработчики не на сами DOM-элементы, а делегирует их на один корневой узел (<code style={{ fontFamily: 'monospace' }}>#root</code>) []. Поэтому использование <code style={{ fontFamily: 'monospace' }}>event.nativeEvent.stopPropagation()</code> внутри Реакт-компонента работает непредсказуемо и **не остановит** всплытие для других реакт-событий. Всегда используйте стандартный реакт-метод <code style={{ fontFamily: 'monospace' }}>event.stopPropagation()</code>, который гарантированно изолирует виртуальное всплытие.
                    </div>
                </div>
                <div
                    id="reactFiber"
                    style={{
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
                    }}
                >
                    {/* Upper Indigo Card Bar */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#6366f1'
                        }}
                    />

                    {/* Title */}
                    <h2
                        style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#4338ca',
                            margin: '0 0 12px 0'
                        }}
                    >
                        Архитектурный движок React Fiber
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        <strong>React Fiber</strong> — это полностью переписанное под капотом ядро алгоритма Reconciliation, запущенное начиная с React 16. Главная цель Fiber — обеспечить **плавность интерфейса (60 FPS)** при тяжелых вычислениях, превратив синхронный и монолитный процесс рендеринга в гибкий, разделенный на порции и управляемый поток задач.
                    </p>

                    {/* Mental Model (Violet Box) */}
                    <div
                        style={{
                            backgroundColor: '#f5f3ff',
                            border: '1px solid #ddd6fe',
                            padding: '16px',
                            borderRadius: '6px',
                            marginBottom: '24px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#4c1d95'
                        }}
                    >
                        <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                            🧠 Революция Fiber: Тайм-слайсинг против Stack Reconciler
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <strong>Как было раньше (Stack Reconciler):</strong> Старый движок сравнивал виртуальные деревья рекурсивно через стек вызовов. Этот процесс нельзя было прервать. Если дерево было огромным, JS «замерзал» на 200мс, полностью блокируя поток: анимации дергались, а клики пользователя игнорировались.
                        </div>
                        <div>
                            <strong>Как стало сейчас (Fiber):</strong> Каждому элементу интерфейса соответствует свой виртуальный **Fiber-узел** — по сути, изолированная рабочая микро-задача (квант работы). Движок использует **Тайм-слайсинг (Time Slicing)**: он рендерит компоненты небольшими порциями в пределах ~5мс, затем делает паузу, отдает управление браузеру для обработки кликов и анимаций, а потом плавно возвращается к рендерингу с того места, где остановился.
                        </div>
                    </div>

                    {/* Fiber Node Structure */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Анатомия Fiber-узла (Из каких связей состоит дерево):
                    </div>
                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                        В отличие от классического Virtual DOM, где у узла есть массив ссылок на всех детей (<code style={{ fontFamily: 'monospace' }}>children</code>), Fiber представляет собой **односвязный список со сложными перекрестными указателями**, превращающий дерево в граф задач:
                    </p>
                    <ul style={{ paddingLeft: '16px', margin: '0 0 20px 0', fontSize: '14px', lineHeight: '1.6', listStyleType: 'disc' }}>
                        <li style={{ marginBottom: '4px' }}><code style={{ fontFamily: 'monospace', fontWeight: '700' }}>child</code> — указывает строго на <strong>первого (старшего)</strong> дочернего ребенка.</li>
                        <li style={{ marginBottom: '4px' }}><code style={{ fontFamily: 'monospace', fontWeight: '700' }}>sibling</code> — указывает на <strong>соседний (следующий)</strong> элемент на том же уровне (родного брата/сестру).</li>
                        <li style={{ marginBottom: '4px' }}><code style={{ fontFamily: 'monospace', fontWeight: '700' }}>return</code> — указывает обратно на <strong>родительский</strong> узел, куда нужно вернуть результат после завершения работы.</li>
                        <li><code style={{ fontFamily: 'monospace', fontWeight: '700' }}>memoizedState</code> — односвязный список, в котором по порядку хранятся состояния всех хуков этого компонента.</li>
                    </ul>

                    {/* Text Before Code */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Пример структуры связей Fiber-узлов под капотом (Концептуальный вид):
                    </div>

                    {/* Code Block (Formatted & Cleaned) */}
                    <pre
                        style={{
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
                        }}
                    >
{`// Представим структуру JSX: <Parent> <ChildA /> <ChildB /> </Parent>

// Так эти объекты связаны в памяти через Fiber архитектуру:
const parentFiber = { type: Parent, child: childAFiber, return: null };
const childAFiber  = { type: ChildA, child: null, sibling: childBFiber, return: parentFiber };
const childBFiber  = { type: ChildB, child: null, sibling: null,        return: parentFiber };

// Благодаря связям sibling и return, React может в любой момент прервать 
// обход дерева, запомнить ссылку на текущий Fiber-объект, а затем 
// продолжить цикл без использования рекурсивного стека JS!`}
    </pre>

                    {/* Double Buffering */}
                    <div
                        style={{
                            borderLeft: '4px solid #10b981',
                            backgroundColor: '#f0fdf4',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#065f46',
                            lineHeight: '1.5'
                        }}
                    >
                        💡 <strong>Продвинутый механизм: Двойная буферизация (Double Buffering)</strong>
                        <br />
                        Чтобы пользователь никогда не видел промежуточное «полусобранное» состояние интерфейса, Fiber использует технику из игровой индустрии — двойную буферизацию. В памяти одновременно существуют два Fiber-дерева:
                        <ul style={{ paddingLeft: '16px', margin: '4px 0 0 0', listStyleType: 'circle' }}>
                            <li style={{ marginBottom: '2px' }}><strong>current:</strong> То дерево, которое прямо сейчас отображается на экране пользователя.</li>
                            <li><strong>workInProgress:</strong> Тайное альтернативное дерево, которое React прямо сейчас собирает и рассчитывает в фоновом режиме во время фазы рендера.</li>
                        </ul>
                        Как только фоновая сборка дерева <code style={{ fontFamily: 'monospace' }}>workInProgress</code> полностью завершена, React в одну синхронную строчку кода на стадии Commit фазы меняет указатель местами, мгновенно делая новое дерево текущим.
                    </div>
                    {/* Блок "Простыми словами" для интеграции внутрь карточки #reactFiber */}
                    <div
                        style={{
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            padding: '20px',
                            borderRadius: '6px',
                            marginBottom: '24px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#334155',
                            fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif'
                        }}
                    >
                        <div
                            style={{
                                fontWeight: '700',
                                color: '#0f172a',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                marginBottom: '12px',
                                fontSize: '15px'
                            }}
                        >
                            📦 Механика Fiber простыми словами: Один компонент = Один узел
                        </div>

                        <p style={{ margin: '0 0 16px 0' }}>
                            В React Fiber один узел (Fiber node) — это обычный JS-объект, который представляет
                            <strong>ровно один компонент</strong> в дереве приложения.
                        </p>

                        {/* Сетка со схемами */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                                gap: '20px',
                                marginBottom: '20px'
                            }}
                        >
                            {/* Схема 1: Дерево связей */}
                            <div style={{ backgroundColor: '#ffffff', padding: '14px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
            <span style={{ fontWeight: '700', color: '#4338ca', display: 'block', marginBottom: '8px', fontSize: '13px' }}>
                🗺️ Структура графа в памяти:
            </span>
                                <pre style={{ margin: 0, fontFamily: 'ui-monospace, monospace', fontSize: '12px', color: '#0f172a', lineHeight: '1.4' }}>
{`Fiber(App)
   │
   ├── Fiber(Header) ──► (сосед: Main)
   │
   ├── Fiber(Main) ──► (сосед: Footer)
   │      │
   │      └── Fiber(Sidebar) ──► (сосед: Content)
   │
   └── Fiber(Footer)`}
            </pre>
                            </div>

                            {/* Схема 2: Карточка узла */}
                            <div style={{ backgroundColor: '#ffffff', padding: '14px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
            <span style={{ fontWeight: '700', color: '#4338ca', display: 'block', marginBottom: '8px', fontSize: '13px' }}>
                📇 Анатомия карточки узла:
            </span>
                                <pre style={{ margin: 0, fontFamily: 'ui-monospace, monospace', fontSize: '12px', color: '#0f172a', lineHeight: '1.3' }}>
{`┌──────────────────────────┐
│ Fiber(Header)            │
├──────────────────────────┤
│ type: Header             │
│ props: { title: "Dev" }  │
│ state: null              │
│ child: null              │
│ sibling: Fiber(Main)     │
│ return: Fiber(App)       │
└──────────────────────────┘`}
            </pre>
                            </div>
                        </div>

                        {/* Схема 3: Горизонтальный конвейер */}
                        <div style={{ backgroundColor: '#ffffff', padding: '14px', borderRadius: '6px', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
        <span style={{ fontWeight: '700', color: '#4338ca', display: 'block', marginBottom: '8px', fontSize: '13px' }}>
            🔄 Жизненный цикл связывания:
        </span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', fontFamily: 'ui-monospace, monospace', fontSize: '12px', color: '#0f172a' }}>
                                <span style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px' }}>Компонент React</span>
                                <span>➔</span>
                                <span style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px' }}>Создаётся Fiber-узел</span>
                                <span>➔</span>
                                <span style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px' }}>React связывает ссылки</span>
                                <span>➔</span>
                                <span style={{ backgroundColor: '#f1f5f9', padding: '4px 8px', borderRadius: '4px' }}>Точечное обновление UI</span>
                            </div>
                        </div>

                        <p style={{ margin: 0, fontStyle: 'italic', color: '#475569' }}>
                            📌 <strong>Главная идея:</strong> Все узлы намертво связаны между собой жесткими ссылками на родителя (<code style={{ fontFamily: 'monospace' }}>return</code>), первого ребёнка (<code style={{ fontFamily: 'monospace' }}>child</code>) и соседа (<code style={{ fontFamily: 'monospace' }}>sibling</code>). Благодаря этой паутине указателей React может в любой момент поставить задачу на паузу, обработать клик пользователя, а затем мгновенно вернуться и продолжить обновление интерфейса частями, не перерисовывая всё дерево целиком.
                        </p>
                    </div>

                </div>
                <div
                    id="reactErrorBoundary"
                    style={{
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
                    }}
                >
                    {/* Upper Indigo Card Bar */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#6366f1'
                        }}
                    />

                    {/* Title */}
                    <h2
                        style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#4338ca',
                            margin: '0 0 12px 0'
                        }}
                    >
                        Механизм Предохранителей: Error Boundary в React
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        <strong>Error Boundary (Предохранитель)</strong> — это специальный компонент, который ловит JavaScript-ошибки в любом месте своего <strong>дочернего дерева компонентов</strong>, логирует эти ошибки и вместо упавшего интерфейса отображает запасной UI (Fallback).
                    </p>

                    {/* Mental Model (Violet Box) */}
                    <div
                        style={{
                            backgroundColor: '#f5f3ff',
                            border: '1px solid #ddd6fe',
                            padding: '16px',
                            borderRadius: '6px',
                            marginBottom: '24px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#4c1d95'
                        }}
                    >
                        <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                            🧠 Поведение по умолчанию и Системная ментальная модель:
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            Начиная с React 16, любая необработанная ошибка в JavaScript (например, попытка прочитать свойство у <code style={{ fontFamily: 'monospace' }}>undefined</code> во время рендера) приводит к **полному размонтированию всего приложения**. React считает, что оставлять поломанный UI на экране небезопасно для пользователя.
                        </div>
                        <div>
                            Предохранители работают как обычные электрические автоматы в щитке: если «закоротило» один конкретный компонент (например, сломался виджет погоды), предохранитель отключает только эту ветку дерева, сохраняя остальную страницу (шапку, меню, чат) абсолютно рабочей.
                        </div>
                    </div>

                    {/* Class Components Trap */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '8px' }}>
                        🚨 Важнейшая ловушка для интервью (Только Классовые компоненты):
                    </div>
                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                        На сегодняшний день в React **не существует хуков для создания Предохранителя**. На собеседовании вас обязательно спросят: <em>«Можно ли написать Error Boundary как функциональный компонент?»</em>. Единственный правильный ответ — **нет, нельзя**. Предохранитель обязан быть классовым компонентом, так как он завязан на два специфических метода жизненного цикла:
                    </p>
                    <ul style={{ paddingLeft: '16px', margin: '0 0 20px 0', fontSize: '14px', lineHeight: '1.6', listStyleType: 'disc' }}>
                        <li style={{ marginBottom: '4px' }}><code style={{ fontFamily: 'monospace', fontWeight: '700' }}>static getDerivedStateFromError(error)</code> — вызывается во время <strong>фазы рендера (Render phase)</strong>. Используется для изменения стейта, чтобы переключить интерфейс на отображение заглушки.</li>
                        <li><code style={{ fontFamily: 'monospace', fontWeight: '700' }}>componentDidCatch(error, errorInfo)</code> — вызывается во время <strong>фазы коммита (Commit phase)</strong>. Используется для отправки логов в сервисы мониторинга ошибок (например, Sentry).</li>
                    </ul>

                    {/* Text Before Code */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Реализация эталонного Error Boundary компонента:
                    </div>

                    {/* Code Block (Formatted & Cleaned) */}
                    <pre
                        style={{
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
                        }}
                    >
{`import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    // 1. Перехватываем ошибку на фазе рендера и обновляем стейт
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // 2. Логируем сбой на фазе коммита
    componentDidCatch(error, errorInfo) {
        console.error("Sentry Log:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Отображаем переданный сверху Fallback UI или дефолтный текст
            return this.props.fallback || <h2>Что-то пошло не так.</h2>;
        }

        // Если все отлично — просто рендерим дочерние компоненты (композиция)
        return this.props.children;
    }
}

// 🟢 Использование в приложении: Изолируем тяжелый виджет
function App() {
    return (
        <div>
            <Header />
            <ErrorBoundary fallback={<p>Ошибка загрузки аналитики 😢</p>}>
                <HeavyAnalyticsWidget />
            </ErrorBoundary>
            <Footer />
        </div>
    );
}`}
    </pre>

                    {/* Limits of Error Boundaries */}
                    <div
                        style={{
                            borderLeft: '4px solid #ef4444',
                            backgroundColor: '#fef2f2',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#991b1b',
                            lineHeight: '1.5'
                        }}
                    >
                        ⚠️ <strong>Что Error Boundary поймать НЕ сможет (Ограничения):</strong>
                        <br />
                        Предохранители перехватывают ошибки **только во время рендеринга и в методах жизненного цикла**. Они абсолютно бессильны перед следующими сценариями:
                        <ul style={{ paddingLeft: '16px', margin: '4px 0 0 0', listStyleType: 'circle' }}>
                            <li style={{ marginBottom: '2px' }}><strong>Асинхронный код:</strong> Ошибки внутри вызовов <code style={{ fontFamily: 'monospace' }}>setTimeout</code> или блоков <code style={{ fontFamily: 'monospace' }}>fetch().then()</code>.</li>
                            <li style={{ marginBottom: '2px' }}><strong>Обработчики событий:</strong> Если ошибка упадет внутри функции <code style={{ fontFamily: 'monospace' }}>onClick</code> при клике пользователя, предохранитель её пропустит (для обработки таких ошибок используйте стандартный <code style={{ fontFamily: 'monospace' }}>try/catch</code>).</li>
                            <li><strong>Серверный рендеринг (SSR):</strong> Ошибки, возникшие при генерации HTML на сервере.</li>
                        </ul>
                    </div>
                </div>
                <div
                    id="controlledComponents"
                    style={{
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
                    }}
                >
                    {/* Upper Indigo Card Bar */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#6366f1'
                        }}
                    />

                    {/* Title */}
                    <h2
                        style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#4338ca',
                            margin: '0 0 12px 0'
                        }}
                    >
                        Работа с формами: Контролируемые и Неконтролируемые компоненты
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        В React управление элементами ввода форм (<code style={{ fontFamily: 'monospace' }}>input</code>, <code style={{ fontFamily: 'monospace' }}>textarea</code>, <code style={{ fontFamily: 'monospace' }}>select</code>) может осуществляться двумя кардинально разными путями. Разница заключается в том, <strong>где именно хранятся текущие данные</strong>, вводимые пользователем.
                    </p>

                    {/* Mental Model (Violet Box) */}
                    <div
                        style={{
                            backgroundColor: '#f5f3ff',
                            border: '1px solid #ddd6fe',
                            padding: '16px',
                            borderRadius: '6px',
                            marginBottom: '24px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#4c1d95'
                        }}
                    >
                        <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                            🧠 Ментальная модель (Кто владеет правдой?):
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                            <strong>Контролируемый компонент:</strong> Источником правды является сам <strong>React-стейт</strong>. Каждое нажатие клавиши триггерит функцию-обработчик, меняет состояние React, а React через пропс <code style={{ fontFamily: 'monospace' }}>value</code> принудительно диктует инпуту, что отображать.
                        </div>
                        <div>
                            <strong>Неконтролируемый компонент:</strong> Источником правды является сам <strong>браузерный DOM</strong>. Инпут живет своей жизнью и сам помнит, что в него ввели. Чтобы вытащить данные из инпута (например, при отправке формы), React заглядывает внутрь DOM-узла с помощью специальной ссылки — <strong>Рефы (useRef)</strong>.
                        </div>
                    </div>

                    {/* Detailed Comparison Table */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Сравнение сценариев использования:
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px', fontSize: '13px', lineHeight: '1.5' }}>
                        {/* Controlled Props */}
                        <div style={{ padding: '14px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px' }}>
            <span style={{ fontWeight: '700', color: '#166534', display: 'block', marginBottom: '6px' }}>
                🟢 Контролируемые (Через useState)
            </span>
                            <ul style={{ paddingLeft: '16px', margin: 0, listStyleType: 'circle', color: '#14532d' }}>
                                <li>Идеально для **валидации на лету** (например, подсветить поле красным, если пароль слишком короткий).</li>
                                <li>Позволяет делать **динамическое форматирование** (автоматически подставлять дефисы в номер телефона при вводе).</li>
                                <li>Критически важно для отключения кнопки отправки формы в реальном времени, если поля не заполнены.</li>
                                <li style={{ color: '#b91c1c' }}><em>Минус:</em> вызывает повторный рендер компонента на каждое нажатие клавиши пользователем.</li>
                            </ul>
                        </div>

                        {/* Uncontrolled Props */}
                        <div style={{ padding: '14px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '6px' }}>
            <span style={{ fontWeight: '700', color: '#1e3a8a', display: 'block', marginBottom: '6px' }}>
                🔵 Неконтролируемые (Через useRef)
            </span>
                            <ul style={{ paddingLeft: '16px', margin: 0, listStyleType: 'circle', color: '#1e40af' }}>
                                <li>Максимальная **производительность** (ноль лишних ререндеров при наборе текста).</li>
                                <li>Идеально для очень простых форм (например, форма поиска или логина из двух полей, где данные нужны только в момент клика «Войти»).</li>
                                <li>Единственный способ работы с тегом <code style={{ fontFamily: 'monospace' }}>{'<input type="file" />'}</code>, так как файлы в целях безопасности браузера доступны только для чтения из DOM.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Text Before Code */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Практическая реализация обоих подходов в коде:
                    </div>

                    {/* Code Block (Formatted & Cleaned) */}
                    <pre
                        style={{
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
                        }}
                    >
{`import React, { useState, useRef } from 'react';

export default function FormDemo() {
    // 🟢 Контролируемый инпут: стейт синхронизирован с полем ввода
    const [controlledValue, setControlledValue] = useState('');

    // 🔵 Неконтролируемый инпут: создаем ссылку на DOM-узел
    const uncontrolledInputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Извлекаем данные из неконтролируемого инпута через .current.value
        const uncontrolledValue = uncontrolledInputRef.current.value;

        console.log("Данные отправки:", {
            controlled: controlledValue,
            uncontrolled: uncontrolledValue
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* 1. КОНТРОЛИРУЕМЫЙ ИНПУТ */}
            <div>
                <label>Контролируемый: </label>
                <input 
                    type="text" 
                    value={controlledValue} 
                    onChange={(e) => setControlledValue(e.target.value)} 
                />
                {controlledValue.length < 3 && <span style={{ color: 'red' }}> Минимум 3 символа!</span>}
            </div>

            {/* 2. НЕКОНТРОЛИРУЕМЫЙ ИНПУТ */}
            <div>
                <label>Неконтролируемый: </label>
                {/* Вместо value/onChange используем ref. По желанию задаем defaultValue */}
                <input 
                    type="text" 
                    ref={uncontrolledInputRef} 
                    defaultValue="Значение по умолчанию" 
                />
            </div>

            <button type="submit">Отправить форму</button>
        </form>
    );
}`}
    </pre>

                    {/* Блок углубленного разбора ловушки для интеграции внутрь карточки #controlledComponents */}
                    <div style={{ marginTop: '24px', fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 12px 0' }}>
                            🚨 Спецификация ловушки: Переключение режимов инпута в течение жизненного цикла
                        </h3>

                        <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                            React строго требует, чтобы режим работы инпута оставался неизменным на протяжении всей его жизни. Смешивать подходы или менять их на лету категорически запрещено. Нарушение этого правила приводит к рассинхронизации данных между DOM и Virtual DOM.
                        </p>

                        {/* Сетка двух сценариев ошибок */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '20px' }}>

                            {/* Сценарий 1 */}
                            <div style={{ padding: '14px', backgroundColor: '#fef2f2', border: '1px solid #fee2e2', borderRadius: '6px' }}>
            <span style={{ fontWeight: '700', color: '#991b1b', display: 'block', marginBottom: '6px', fontSize: '13px' }}>
                ❌ Сценарий А: Uncontrolled → Controlled
            </span>
                                <pre style={{ margin: '0 0 8px 0', fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#ffffff', padding: '8px', borderRadius: '4px', border: '1px solid #fca5a5' }}>
{`const [name, setName] = useState(); // undefined
<input value={name} /> // Режим: uncontrolled

// Позже после ввода пользователя:
setName('Alex'); // Режим: controlled`}
            </pre>
                                <span style={{ fontSize: '12px', color: '#7f1d1d', lineHeight: '1.4', display: 'block' }}>
                <strong>Предупреждение:</strong> <code style={{ fontFamily: 'monospace', fontSize: '11px' }}>Warning: A component is changing an uncontrolled input to be controlled.</code>
            </span>
                            </div>

                            {/* Сценарий 2 */}
                            <div style={{ padding: '14px', backgroundColor: '#fef2f2', border: '1px solid #fee2e2', borderRadius: '6px' }}>
            <span style={{ fontWeight: '700', color: '#991b1b', display: 'block', marginBottom: '6px', fontSize: '13px' }}>
                ❌ Сценарий Б: Controlled → Uncontrolled
            </span>
                                <pre style={{ margin: '0 0 8px 0', fontFamily: 'monospace', fontSize: '12px', backgroundColor: '#ffffff', padding: '8px', borderRadius: '4px', border: '1px solid #fca5a5' }}>
{`const [name, setName] = useState('Alex');
<input value={name} /> // Режим: controlled

// Позже при очистке формы:
setName(undefined); // Режим: uncontrolled`}
            </pre>
                                <span style={{ fontSize: '12px', color: '#7f1d1d', lineHeight: '1.4', display: 'block' }}>
                <strong>Предупреждение:</strong> <code style={{ fontFamily: 'monospace', fontSize: '11px' }}>Warning: A component is changing a controlled input to be uncontrolled.</code>
            </span>
                            </div>

                        </div>

                        {/* Реальный кейс с загрузкой данных */}
                        <div style={{ fontWeight: '700', fontSize: '14px', color: '#0f172a', marginBottom: '8px' }}>
                            Частая архитектурная ошибка при загрузке данных с сервера:
                        </div>
                        <pre
                            style={{
                                backgroundColor: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: '6px',
                                padding: '16px',
                                overflowX: 'auto',
                                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                                fontSize: '13px',
                                color: '#0f172a',
                                margin: '0 0 20px 0',
                                whiteSpace: 'pre',
                                lineHeight: '1.5'
                            }}
                        >
{`// ❌ Опасный код: пока данные грузятся, user равен null. user?.name возвращает undefined!
function Profile() {
    const [user, setUser] = useState(null);
    return <input value={user?.name} />; // Сначала uncontrolled, после загрузки — controlled!
}

// 🟢 Решение №1: Оператор нулевого слияния (Nullish Coalescing) напрямую в JSX
function ProfileFixed1() {
    const [user, setUser] = useState(null);
    return <input value={user?.name ?? ''} />; // Гарантирует строку '' на первом рендере
}

// 🟢 Решение №2: Инициализация стейта правильным дефолтным примитивом
function ProfileFixed2() {
    const [name, setName] = useState(''); // Сразу контролируемый режим
    // Загружаем данные в useEffect и вызываем setName(res.user.name)
}`}
    </pre>

                        {/* Шпаргалка для ответа на интервью */}
                        <div
                            style={{
                                borderLeft: '4px solid #3b82f6',
                                backgroundColor: '#eff6ff',
                                padding: '12px 16px',
                                borderRadius: '0 6px 6px 0',
                                fontSize: '14px',
                                color: '#1e3a8a',
                                lineHeight: '1.5'
                            }}
                        >
                            🎯 <strong>Что говорить на собеседовании:</strong>
                            <em> «Инпут в React должен оставаться либо строго controlled, либо строго uncontrolled на протяжении всего своего жизненного цикла. Если на первом рендере передать в пропс value значение undefined (или забыть передать дефолтный стейт в useState), React посчитает инпут неконтролируемым. Как только туда позже прилетит строка, произойдет запрещенное переключение режимов, и React выдаст предупреждение. Для предотвращения этого controlled-компоненты всегда обязаны иметь валидное начальное значение, например пустую строку '' или оператор защиты ?? ''».</em>
                        </div>
                    </div>

                </div>
                <div
                    id="reactCallbackProps"
                    style={{
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
                    }}
                >
                    {/* Upper Indigo Card Bar */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#6366f1'
                        }}
                    />

                    {/* Title */}
                    <h2
                        style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#4338ca',
                            margin: '0 0 12px 0'
                        }}
                    >
                        Передача данных наверх: Подъём состояния (Callback Props)
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        Несмотря на то, что поток данных в React строго однонаправленный, дочерний компонент может отправлять информацию родителю. Для этого родитель передаёт вниз через <code style={{ fontFamily: 'monospace' }}>props</code> специальную функцию-обработчик (<strong>Callback</strong>). Дочерний компонент вызывает её и прокидывает аргументы обратно наверх.
                    </p>

                    {/* Mental Model (Violet Box) */}
                    <div
                        style={{
                            backgroundColor: '#f5f3ff',
                            border: '1px solid #ddd6fe',
                            padding: '16px',
                            borderRadius: '6px',
                            marginBottom: '24px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#4c1d95'
                        }}
                    >
                        <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                            🧠 Ментальная модель (Кнопка звонка и Диспетчер):
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                            Родительский компонент — это <strong>Диспетчерская</strong>, у которой есть рация и пульт управления стейтом. Дочерний компонент — это <strong>Кнопка вызова</strong> на стене.
                        </div>
                        <div>
                            Кнопка не знает, что произойдет после нажатия, и не имеет доступа к пульту. Она просто активирует «провод» (вызывает функцию-коллбэк), переданный ей сверху, и кричит в него данные: <em>«Эй, меня нажали, вот мой ID!»</em>. Диспетчер ловит этот сигнал и обновляет состояние на своем уровне.
                        </div>
                    </div>

                    {/* Text Before Code */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Практическая реализация паттерна (Передача данных из инпута родителю):
                    </div>

                    {/* Code Block (Formatted & Cleaned) */}
                    <pre
                        style={{
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
                        }}
                    >
{`import React, { useState } from 'react';

// 1. ДОЧЕРНИЙ КОМПОНЕНТ: принимает колллбэк-пропс 'onSelectColor'
function ColorPicker({ onSelectColor }) {
    const colors = ['#ef4444', '#3b82f6', '#10b981'];

    return (
        <div style={{ display: 'flex', gap: '8px' }}>
            {colors.map(color => (
                <button
                    key={color}
                    style={{ backgroundColor: color, width: '30px', height: '30px', border: 'none' }}
                    // При клике вызываем функцию родителя и передаем цвет НАВЕРХ ↗️
                    onClick={() => onSelectColor(color)}
                />
            ))}
        </div>
    );
}

// 2. РОДИТЕЛЬСКИЙ КОМПОНЕНТ: владеет стейтом и логикой
export default function ThemeSettings() {
    const [selectedColor, setSelectedColor] = useState('#ffffff');

    // Функция-обработчик, которая примет данные из дочернего компонента
    const handleColorChange = (colorFromServer) => {
        setSelectedColor(colorFromServer); // Обновляем стейт родителя
    };

    return (
        <div style={{ padding: '20px', backgroundColor: selectedColor }}>
            <h3>Выберите цвет фона приложения:</h3>
            {/* Передаем ссылку на функцию вниз через props */}
            <ColorPicker onSelectColor={handleColorChange} />
        </div>
    );
}`}
    </pre>

                    {/* Performance Advice */}
                    <div
                        style={{
                            borderLeft: '4px solid #3b82f6',
                            backgroundColor: '#eff6ff',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#1e3a8a',
                            lineHeight: '1.5',
                            marginBottom: '20px'
                        }}
                    >
                        ⚡ <strong>Совет по оптимизации производительности:</strong> Помните, что передача инлайн-функций в пропсы дочерних компонентов (например, <code style={{ fontFamily: 'monospace' }}>{'onSelectColor={(color) => handleColorChange(color)}'}</code>) заставляет дочерний компонент перерисовываться при каждом рендере родителя. Чтобы сохранить ссылку на функцию стабильной, оборачивайте её в хук <code style={{ fontFamily: 'monospace' }}>useCallback</code>, а сам дочерний компонент — в <code style={{ fontFamily: 'monospace' }}>React.memo</code>.
                    </div>

                    {/* Interview Summary */}
                    <div
                        style={{
                            borderLeft: '4px solid #10b981',
                            backgroundColor: '#f0fdf4',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#065f46',
                            lineHeight: '1.5'
                        }}
                    >
                        🎯 <strong>Что сказать на собеседовании:</strong>
                        <em> «В React нет прямого способа передать данные от ребенка к родителю из-за принципа однонаправленного потока данных. Вместо этого используется паттерн подъёма состояния (Lifting State Up). Родитель объявляет функцию-коллбэк и спускает её ребенку через пропсы. Ребенок вызывает эту функцию и прокидывает туда свои локальные данные в качестве аргументов. Технически поток все еще направлен сверху вниз, так как ребенок использует лишь предоставленный ему сверху интерфейс рации».</em>
                    </div>
                </div>
                <div
                    id="reduxSelectors"
                    style={{
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
                    }}
                >
                    {/* Upper Indigo Card Bar */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '4px',
                            backgroundColor: '#6366f1'
                        }}
                    />

                    {/* Title */}
                    <h2
                        style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            color: '#4338ca',
                            margin: '0 0 12px 0'
                        }}
                    >
                        Управление данными: Селекторы в Redux и Мемоизация (Reselect)
                    </h2>

                    <p style={{ fontSize: '15px', color: '#0f172a', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                        <strong>Селектор (Selector)</strong> — это обычная чистая функция, которая принимает на вход весь глобальный объект состояния Redux (<strong>state</strong>) и возвращает из него конкретный, необходимый компоненту кусочек данных. Селекторы служат защитной абстракцией между внутренней структурой стора и компонентами интерфейса.
                    </p>

                    {/* Mental Model (Violet Box) */}
                    <div
                        style={{
                            backgroundColor: '#f5f3ff',
                            border: '1px solid #ddd6fe',
                            padding: '16px',
                            borderRadius: '6px',
                            marginBottom: '24px',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#4c1d95'
                        }}
                    >
                        <div style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                            🧠 Три главные причины использовать селекторы:
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                            <strong>1. Инкапсуляция структуры (DRY):</strong> Если структура вашего стора изменится (например, вы перенесете <code style={{ fontFamily: 'monospace' }}>state.items</code> в <code style={{ fontFamily: 'monospace' }}>state.products.list</code>), вам не придется переписывать 50 компонентов по всему проекту. Вы измените путь только в одном глобальном селекторе.
                        </div>
                        <div style={{ marginBottom: '6px' }}>
                            <strong>2. Переиспользование логики:</strong> Фильтрация, сортировка или тяжелый расчет данных выносится из тела компонентов в селекторы, делая UI-компоненты «глупыми» и легко тестируемыми.
                        </div>
                        <div>
                            <strong>3. Оптимизация производительности:</strong> Хук <code style={{ fontFamily: 'monospace' }}>useSelector</code> запускается при каждом экшене в системе. Если селектор возвращает новую ссылку (например, после фильтрации через <code style={{ fontFamily: 'monospace' }}>.filter()</code>), компонент перерисуется, даже если данные не изменились. Селекторы позволяют внедрить **мемоизацию** и остановить лишние рендеры.
                        </div>
                    </div>

                    {/* Text Before Code */}
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#0f172a', marginBottom: '12px' }}>
                        Реализация базовых и мемоизированных селекторов (Redux Toolkit + Reselect):
                    </div>

                    {/* Code Block (Formatted & Cleaned) */}
                    <pre
                        style={{
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
                        }}
                    >
{`import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit'; // Встроено в RTK под капотом

// 1. БАЗОВЫЕ СЕЛЕКТОРЫ (Просто вытаскивают сырые данные один-к-одному)
const selectTodos = (state) => state.todo.items;
const selectFilter = (state) => state.todo.currentFilter;

// ❌ ТЯЖЕЛЫЙ НЕОПТИМИЗИРОВАННЫЙ СЕЛЕКТОР:
// Метод .filter() ВСЕГДА возвращает новую ссылку на массив.
// Этот селектор заставит компонент перерисовываться при ЛЮБОМ изменении стора!
// const selectFilteredTodosBad = (state) => state.todo.items.filter(t => t.completed);


// 🟢 МЕМОИЗИРОВАННЫЙ СЕЛЕКТОР (Через createSelector):
// Он кэширует результат. Если 'items' и 'currentFilter' в сторе не изменились, 
// функция фильтрации НЕ запустится, и вернется СТАРАЯ ссылка на массив!
export const selectFilteredTodos = createSelector(
    [selectTodos, selectFilter], // 1. Передаем входные селекторы-зависимости
    (todos, filter) => {         // 2. Результаты прилетают в аргументы функции расчета
        console.log("⚡ Тяжелый расчет запустился!"); 
        switch (filter) {
            case 'completed': return todos.filter(t => t.completed);
            case 'active':    return todos.filter(t => !t.completed);
            default:          return todos;
        }
    }
);

// 3. Использование в React компоненте
export function TodoList() {
    // Хук useSelector строго следит за ссылкой. Благодаря мемоизации, рендер очень плавный.
    const filteredTodos = useSelector(selectFilteredTodos);

    return (
        <ul>
            {filteredTodos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
    );
}`}
    </pre>

                    {/* Performance Caveat */}
                    <div
                        style={{
                            borderLeft: '4px solid #ef4444',
                            backgroundColor: '#fef2f2',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#991b1b',
                            lineHeight: '1.5',
                            marginBottom: '20px'
                        }}
                    >
                        🚨 <strong>Ловушка производительности (Динамические селекторы с аргументами):</strong>
                        <br />
                        Если вам нужно передать аргумент в селектор (например, найти задачу по ID: <code style={{ fontFamily: 'monospace' }}>{'useSelector(state => selectTodoById(state, id))'}</code>), стандартный кэш <code style={{ fontFamily: 'monospace' }}>createSelector</code> размером в 1 элемент **сломается**, если компонент используется в списке многократно. Каждый экземпляр компонента будет затирать кэш предыдущего.
                        <br />
                        <strong>Решение:</strong> Оборачивайте создание мемоизированного селектора в хук <code style={{ fontFamily: 'monospace' }}>useMemo</code> прямо внутри компонента, чтобы у каждого инстанса была своя изолированная фабрика селектора.
                    </div>

                    {/* Summary for Interview */}
                    <div
                        style={{
                            borderLeft: '4px solid #10b981',
                            backgroundColor: '#f0fdf4',
                            padding: '12px 16px',
                            borderRadius: '0 6px 6px 0',
                            fontSize: '14px',
                            color: '#065f46',
                            lineHeight: '1.5'
                        }}
                    >
                        🎯 <strong>Что сказать на собеседовании:</strong>
                        <em> «Селекторы инкапсулируют структуру глобального стейта от компонентов UI, следуя принципу единственной ответственности. Хук useSelector делает строгое сравнение по ссылке (===) для возвращаемого значения, чтобы решить, нужен ли рендер. Если селектор производит трансформацию данных (через .map() или .filter()), он обязан быть мемоизированным с помощью библиотеки Reselect (метод createSelector). Это гарантирует стабильность ссылок и предотвращает каскадные лишние перерендеры дочерних деревьев».</em>
                    </div>
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


