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


