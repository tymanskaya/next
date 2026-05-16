export default function Page() {
    const codeInline = {
        backgroundColor: '#f0f0f0',
        padding: '2px 5px',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '0.9em',
        color: '#c41d7f'
    };

    const codeBlock = {
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

    const methodRowStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        paddingBottom: '10px',
        borderBottom: '1px solid #f0f0f0'
    };

    const methodCodeStyle = {
        backgroundColor: '#f0f5ff',
        padding: '3px 8px',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '0.92em',
        color: '#2f54eb',
        alignSelf: 'flex-start',
        fontWeight: 'bold'
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            minHeight: '100vh',
            backgroundColor: '#f0f2f5',
            padding: '40px 20px'
        }}>
            <div style={{ width: '100%', maxWidth: '850px', display: 'flex', flexDirection: 'column', gap: '25px' }}>

                <div style={{
                    textAlign: 'center',
                    marginBottom: '50px',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                {/* Верхний бейдж с иконкой */}
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
                    fontSize: '48px',
                    fontWeight: '850',
                    color: '#1f2328',
                    margin: '0 0 15px 0',
                    letterSpacing: '-0.03em'
                }}>
                    <span style={{ color: '#2f54eb' }}>localStorage</span> свойства и методы
                </h1>

                <p style={{
                    fontSize: '19px',
                    color: '#636c76',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.5'
                }}>
                    Работа со встроенным <b>браузерным хранилищем</b>, сохранение состояний и особенности интеграции в <b>Next.js</b>
                </p>

                {/* Декоративный градиентный разделитель под тему localStorage (Синий) */}
                <div style={{
                    width: '80px',
                    height: '5px',
                    background: 'linear-gradient(90deg, #2f54eb, #1890ff)',
                    margin: '30px auto 0',
                    borderRadius: '10px'
                }}></div>
            </div>
            <section style={{
                backgroundColor: '#fff',
                padding: '25px',
                borderRadius: '12px',
                borderTop: '6px solid #2f54eb',
                boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                fontFamily: 'sans-serif'
            }}>
                <h2 style={{ marginTop: 0, color: '#1d39c4', fontSize: '20px' }}>Браузерное хранилище (localStorage)</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <p><b>localStorage</b> &mdash; это встроенное в браузер хранилище, позволяющее сайтам сохранять данные на компьютере пользователя. Данные не имеют срока годности и остаются на месте даже после перезагрузки страницы или закрытия браузера.</p>

                    {/* Основные методы */}
                    <div style={{ backgroundColor: '#f0f5ff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #2f54eb' }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#1d39c4' }}>4 главных метода для работы:</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: 'monospace', fontSize: '0.92em' }}>
                            <code style={{ backgroundColor: '#fff', padding: '4px 8px', borderRadius: '4px' }}>localStorage.setItem(&apos;key&apos;, &apos;value&apos;) &mdash; сохранить данные</code>
                            <code style={{ backgroundColor: '#fff', padding: '4px 8px', borderRadius: '4px' }}>localStorage.getItem(&apos;key&apos;) &mdash; прочитать данные</code>
                            <code style={{ backgroundColor: '#fff', padding: '4px 8px', borderRadius: '4px' }}>localStorage.removeItem(&apos;key&apos;) &mdash; удалить конкретную запись</code>
                            <code style={{ backgroundColor: '#fff', padding: '4px 8px', borderRadius: '4px' }}>localStorage.clear() &mdash; полностью очистить всё хранилище сайта</code>
                        </div>
                    </div>

                    {/* Важная особенность про строки */}
                    <div style={{ backgroundColor: '#fffbe6', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #faad14' }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>⚠️ Важно: Хранятся только строки!</p>
                        <p style={{ fontSize: '0.95em', margin: 0 }}>
                            Если нужно сохранить объект или массив, сначала преврати его в строку через <code style={{ backgroundColor: '#fff', padding: '1px 4px' }}>JSON.stringify()</code>.
                            При чтении верни обратно в объект через <code style={{ backgroundColor: '#fff', padding: '1px 4px' }}>JSON.parse()</code>.
                        </p>
                    </div>
                    <section style={{
                        backgroundColor: '#fff',
                        padding: '25px',
                        borderRadius: '12px',
                        borderTop: '6px solid #2f54eb',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                        fontFamily: 'sans-serif',
                        lineHeight: '1.6'
                    }}>
                        <h2 style={{ marginTop: 0, color: '#1d39c4', fontSize: '22px' }}>Глубокое погружение в localStorage &amp; JSON</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                            {/* Блок 1: Почему нужны stringify и parse */}
                            <div style={{ backgroundColor: '#fffbe6', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #faad14' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 8px 0', color: '#856404' }}>⚠️ Главное ограничение: Хранилище текстовое!</p>
                                <p style={{ margin: 0, fontSize: '0.95em' }}>
                                    Если попытаться записать объект напрямую: <code style={codeInline}>localStorage.setItem(&apos;user&apos;, {"{name: &apos;Kris&apos;}"})</code>,
                                    браузер автоматически приведет его к строке, и внутри сохранится бесполезный текст <b>&quot;[object Object]&quot;</b>.
                                </p>
                            </div>

                            {/* Блок 2: Разбор методов преобразования */}
                            <div>
                                <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>🔄 Сериализация данных (Превращение в строку и обратно):</p>
                                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <li>
                                        <b>JSON.stringify(object)</b> &mdash; превращает любой JavaScript-объект или массив в строку формата JSON для безопасной записи.
                                        <pre style={codeBlock}>
{`// Пример сохранения объекта
const user = { name: 'Kris', score: 100 };
localStorage.setItem('user_session', JSON.stringify(user));
// В памяти это сохранится как обычная строка: '{"name":"Kris","score":100}'`}
                    </pre>
                                    </li>
                                    <li>
                                        <b>JSON.parse(string)</b> &mdash; берет строку из хранилища и превращает её обратно в полноценный живой объект JavaScript, у которого можно читать свойства.
                                        <pre style={codeBlock}>
{`// Пример извлечения объекта обратно
const rawData = localStorage.getItem('user_session');
if (rawData) {
    const parsedUser = JSON.parse(rawData);
    console.log(parsedUser.name); // Выведет: Kris
}`}
                    </pre>
                                    </li>
                                </ul>
                            </div>

                            {/* Блок 3: Полный разбор API */}
                            <div>
                                <p style={{ fontWeight: 'bold', margin: '10px 0 10px 0' }}>🛠️ Подробный разбор всех методов localStorage:</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <div style={methodRowStyle}>
                                        <code style={methodCodeStyle}>.setItem(key, value)</code>
                                        <p style={{ margin: 0, fontSize: '0.95em' }}>Принимает два аргумента. Если ключ уже существует, старое значение <b>перезаписывается</b> новым.</p>
                                    </div>

                                    <div style={methodRowStyle}>
                                        <code style={methodCodeStyle}>.getItem(key)</code>
                                        <p style={{ margin: 0, fontSize: '0.95em' }}>Принимает имя ключа. Если такого ключа в браузере нет, метод вернет <code style={codeInline}>null</code>. <i>Всегда делай проверку на null перед JSON.parse!</i></p>
                                    </div>

                                    <div style={methodRowStyle}>
                                        <code style={methodCodeStyle}>.removeItem(key)</code>
                                        <p style={{ margin: 0, fontSize: '0.95em' }}>Удаляет переданный ключ и его значение. Очищает память точечно.</p>
                                    </div>

                                    <div style={methodRowStyle}>
                                        <code style={methodCodeStyle}>.clear()</code>
                                        <p style={{ margin: 0, fontSize: '0.95em' }}>Полностью стирает <b>все</b> данные, которые твой сайт когда-либо записывал в localStorage. Используй осторожно.</p>
                                    </div>

                                    <div style={methodRowStyle}>
                                        <code style={methodCodeStyle}>.length</code>
                                        <p style={{ margin: 0, fontSize: '0.95em' }}>Свойство (не метод), которое возвращает общее количество записей в хранилище для текущего домена.</p>
                                    </div>

                                </div>
                            </div>

                            {/* Блок 4: Безопасный кастомный хук для React/Next.js */}
                            <div style={{ backgroundColor: '#f6ffed', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #52c41a' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#237804' }}>🛡️ Безопасный способ использования (Best Practice):</p>
                                <p style={{ fontSize: '0.95em', margin: '0 0 10px 0' }}>Чтобы избежать падения Next.js на этапе SSR и безопасно парсить данные с отловом ошибок обработки строк, используй такую конструкцию внутри <code style={codeInline}>useEffect</code>:</p>
                                <pre style={{...codeBlock, backgroundColor: '#fff', border: '1px solid #d9d9d9'}}>
{`useEffect(() => {
    try {
        const item = localStorage.getItem('user_session');
        const user = item ? JSON.parse(item) : null;
        if (user) {
            // Действие с валидным объектом
        }
    } catch (error) {
        console.error("Ошибка парсинга JSON:", error);
        // Защита на случай, если в строке лежал битый JSON
    }
}, []);`}
            </pre>
                            </div>

                        </div>
                    </section>
                    {/* Особенность в Next.js */}
                    <div style={{ backgroundColor: '#f6ffed', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #52c41a' }}>
                        <p style={{ fontWeight: 'bold', margin: '0 0 5px 0', color: '#237804' }}>⚛️ Особенность работы в Next.js (SSR):</p>
                        <p style={{ fontSize: '0.95em', margin: '0 0 10px 0' }}>
                            Полноценный Next.js сначала рендерит код на сервере, где объекта <code style={{ backgroundColor: '#fff', padding: '1px 4px' }}>window</code> и браузера ещё нет. Прямой вызов вызовет ошибку <i>ReferenceError: localStorage is not defined</i>.
                        </p>
                        <p style={{ fontSize: '0.95em', margin: 0 }}>
                            <b>Решение:</b> Всегда пиши работу с localStorage внутрь хука <b>useEffect</b> &mdash; он гарантированно запускается только на клиенте (в браузере).
                        </p>
                    </div>
                </div>
            </section>



        </div>
        </div>
    );
}