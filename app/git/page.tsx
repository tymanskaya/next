export default function Page() {
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
                    <svg height="16" width="16" viewBox="0 0 16 16" style={{ fill: '#f05032' }}>
                        <path d="M15.672 6.645L9.355.328a1.19 1.19 0 00-1.683 0L6.445 1.55l1.45 1.45c.348-.113.75-.03 1.033.253.284.283.366.685.253 1.033l1.45 1.45c.348-.113.75-.03 1.033.253a1.2 1.2 0 010 1.697 1.2 1.2 0 01-1.697 0 1.2 1.2 0 01-.253-1.033l-1.45-1.45c-.348.113-.75.03-1.033-.253-.284-.283-.366-.685-.253-1.033l-1.45-1.45-3.873 3.872a1.19 1.19 0 000 1.683l6.317 6.317c.464.464 1.22.464 1.683 0l6.317-6.317a1.19 1.19 0 000-1.683z" />
                    </svg>
                    Documentation Helper
                </div>

                <h1 style={{
                    fontSize: '48px',
                    fontWeight: '850',
                    color: '#1f2328',
                    margin: '0 0 15px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '15px',
                    letterSpacing: '-0.03em'
                }}>
                    <span style={{ color: '#f05032' }}>Git</span>
                    основные команды
                </h1>

                <p style={{
                    fontSize: '19px',
                    color: '#636c76',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.5'
                }}>
                    Интерактивный справочник по работе с <span style={{ color: '#1f2328', fontWeight: '600' }}>локальной историей</span> и <span style={{ color: '#1f2328', fontWeight: '600' }}>удаленными репозиториями</span>
                </p>

                {/* Декоративный градиентный разделитель */}
                <div style={{
                    width: '80px',
                    height: '5px',
                    background: 'linear-gradient(90deg, #f05032, #ff8a00)',
                    margin: '30px auto 0',
                    borderRadius: '10px'
                }}></div>
            </div>


            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '25px',
                padding: '30px',
                backgroundColor: '#f8f9fa',
                fontFamily: 'sans-serif',
                color: '#333',
                lineHeight: '1.5'
            }}>

                {/* Секция: Локальные commit / Revert */}
                <section style={{
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '10px',
                    borderTop: '5px solid #52c41a',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}>
                    <h2 style={{ marginTop: 0, color: '#237804' }}>Локальные commit</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p><b>git revert</b> — отменяет предыдущий коммит.</p>
                        <p style={{ color: '#666', fontStyle: 'italic', fontSize: '0.95em', borderLeft: '3px solid #f0f0f0', paddingLeft: '10px' }}>
                            Когда ты делаешь git revert на уже созданный реверт-коммит, Git просто заново применяет
                            те изменения, которые были в самом первом (исходном) коммите. Это называют «переотменой».
                        </p>
                        <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>
                            git revert HEAD — Отменить последний коммит
                        </code>
                        <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>
                            git revert 560a3e4 — Отменить конкретный коммит по его ID
                        </code>
                    </div>
                </section>

                {/* Секция: Reset */}
                <section style={{
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '10px',
                    borderTop: '5px solid #faad14',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p>
                            <b>git reset</b> — команда для «отмотки» назад. Переписывает историю, перемещая указатель ветки в прошлое.
                        </p>
                        <div style={{ paddingLeft: '10px' }}>
                            <p>— <b>--soft</b>: отменяет только коммит. Код остается в индексе (staged).</p>
                            <p>— <b>--mixed</b> (default): отменяет коммит, убирает из индекса. Код остается.</p>
                            <p>— <b>--hard</b>: полностью стирает коммит и все изменения в файлах.</p>
                            <p>— <b>--keep</b>: режим отката, сохраняющий текущие незакоммиченные правки.</p>
                        </div>
                        <p>
                            <b>HEAD~1</b> — откатиться на один коммит назад
                            (<code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git reset --soft HEAD~1</code>)
                        </p>
                    </div>
                </section>

                {/* Секция: Edit Commit Message */}
                <section style={{
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '10px',
                    borderTop: '5px solid #722ed1',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <p><b>edit commit message (Изменение сообщения коммита) :</b></p>
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '10px' }}>
                                <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git commit --amend -m "Новое правильное сообщение"</code> — исправить сообщение последнего коммита
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git rebase -i HEAD~[число]</code> — исправить старые коммиты (выбрать reword).
                                Например: git rebase -i HEAD~3 (Например, если он 3-й с конца) </li>
                        </ul>

                        <div style={{ backgroundColor: '#f9f0ff', padding: '15px', borderRadius: '8px' }}>
                            <p style={{ fontWeight: 'bold', marginTop: 0 }}>Как работает git rebase -i:</p>
                            <ol style={{ margin: 0, paddingLeft: '20px' }}>
                                <li>Запускаешь команду: <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git rebase -i HEAD~3</code></li>
                                <li>В открывшемся списке меняешь <code>pick</code> на <code>reword</code> (или просто <code>r</code>) у нужного коммита.</li>
                                <li>Сохраняешь и закрываешь (в Vim это <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>:wq</code>).</li>
                                <li>Git сам откроет новое окно — там пишешь <b>новое сообщение</b>, сохраняешь и выходишь.</li>
                            </ol>
                        </div>

                        <p style={{ margin: '10px 0 0 0' }}><i>Интересно: если выбрать <b>squash</b>, можно объединить несколько коммитов в один!</i></p>
                        <p style={{ color: '#d4380d', fontWeight: 'bold', marginTop: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            ⚠️ Если коммит уже на сервере, понадобится
                            <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#d4380d' }}>git push --force</code>
                        </p>
                    </div>
                </section>

            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f8f9fa' }}>

                {/* Отправка на сервер */}
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', borderTop: '5px solid #555', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <p><b>Отправка на сервер:</b></p>
                    <ul style={{ margin: '10px 0 0 0', paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '10px' }}><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git push origin main</code> — Она отправляет ваши локальные коммиты из ветки main в удаленный репозиторий (например, на GitHub), который по умолчанию называется origin</li>
                        <li style={{ marginBottom: '10px' }}><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git push -u origin main</code> — флаг -u связывает локальную ветку с удаленной. После этого вам достаточно будет писать просто <code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git push</code>)</li>
                        <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git push --force</code> — принудительная отправка (перезаписывает историю на сервере!)</li>
                    </ul>
                </div>

                {/* Удаление из удаленного репозитория */}
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', borderTop: '5px solid #ff4d4f', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <p><b>Удаление из удаленного репозитория (GitHub):</b></p>
                    <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '8px' }}><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git rm --cached [file]</code> — убрать файл из Git, но <b>оставить</b> его на компьютере.</li>
                        <li style={{ marginBottom: '8px' }}><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git rm -r --cached [folder]</code> — убрать папку из Git, оставив её локально.</li>
                        <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git rm [file]</code> — удалить файл и из Git, и с компьютера.</li>
                    </ul>
                    <p style={{ fontSize: '0.9em', color: '#666', marginTop: '10px' }}>* После этих команд обязательно нужно сделать <b>commit</b> и <b>push</b>.</p>
                </div>

                {/* Удаление коммитов из удаленного репозитория */}
                <div style={{ backgroundColor: '#fff5f5', padding: '20px', borderRadius: '10px', borderLeft: '5px solid #ff4d4f', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <p><b>Удаление коммитов из удаленного репозитория:</b></p>
                    <ol style={{ paddingLeft: '20px', margin: '10px 0' }}>
                        <li>Сначала делаем локальный откат: <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git reset --hard HEAD~1</code></li>
                        <li>Затем "силой" обновляем сервер: <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git push origin main --force</code></li>
                    </ol>
                    <p><b>Удаление без потери кода (Soft Reset):</b></p>
                    <ol style={{ paddingLeft: '20px', margin: '10px 0' }}>
                        <li>Сначала делаем локальный откат: <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git reset --soft HEAD~1</code></li>
                        <li>Затем "силой" обновляем сервер: <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git push origin main --force</code></li>
                    </ol>
                    <p style={{ color: '#cf1322', fontWeight: 'bold', marginTop: '10px' }}>⚠️ ВНИМАНИЕ: Команда --force перезаписывает историю. Используйте её только если работаете в ветке в одиночку!</p>
                </div>

                {/* Клонирование репозитория */}
                <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', borderTop: '5px solid #4CAF50', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <p><b>Клонирование репозитория:</b></p>
                    <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '8px' }}><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git clone git@github.com:имя-пользователя/название-репозитория.git</code> — скачать проект на компьютер.</li>
                        <li><code style={{ backgroundColor: '#f0f0f0', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git clone git@github.com:имя-пользователя/название-репозитория.git .</code> — скачать содержимое репозитория прямо в <b>текущую папку</b> (без создания подпапки).</li>
                    </ul>
                    <p style={{ fontSize: '0.9em', color: '#666', marginTop: '10px' }}>* URL можно взять на GitHub в кнопке <b>Code</b>.</p>
                </div>

                {/* Как дать доступ */}
                <div style={{ backgroundColor: '#f8f5ff', padding: '20px', borderRadius: '10px', borderTop: '5px solid #722ed1', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <p><b>Как дать доступ другому разработчику:</b></p>
                    <ol style={{ paddingLeft: '20px', margin: '10px 0' }}>
                        <li>GitHub &gt; Repository &gt; <b>Settings</b></li>
                        <li>Раздел <b>Collaborators</b> &gt; Кнопка <b>Add people</b></li>
                        <li>Ввести никнейм и отправить приглашение</li>
                        <li><i>Разработчик должен принять инвайт на своей почте!</i></li>
                    </ol>
                    <p style={{ fontSize: '0.9em', color: '#666', marginTop: '10px' }}>* После этого он сможет делать <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git push</code> в твои ветки.</p>
                </div>

                {/* Получение обновлений */}
                <div style={{ backgroundColor: '#e3f2fd', padding: '20px', borderRadius: '10px', borderTop: '5px solid #2196F3', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <p><b>Получение обновлений (git pull):</b></p>
                    <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #2196F3', margin: '15px 0' }}>
                        <b>Зачем она нужна:</b> Чтобы ваш код на компьютере был актуальным и вы видели правки, которые сделали ваши коллеги или вы сами с другого устройства.
                    </div>
                    <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '8px' }}><code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git pull</code> — скачать изменения с сервера и автоматически объединить их с локальным кодом.</li>
                        <li><code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace', color: '#c41d7f' }}>git fetch</code> — только скачать данные с сервера, <b>без объединения</b> (безопасно, чтобы просто изучить историю изменений).</li>
                    </ul>
                    <p style={{ fontSize: '0.9em', color: '#2196F3', marginTop: '15px' }}><i>💡 Совет: всегда делайте <b>pull</b> перед началом рабочего дня, чтобы работать с самой свежей версией проекта.</i></p>
                </div>
                <section style={{
                    backgroundColor: '#fff',
                    padding: '25px',
                    borderRadius: '12px',
                    borderTop: '6px solid #FFC107',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    fontFamily: 'sans-serif'
                }}>
                    <h2 style={{ marginTop: 0, color: '#856404' }}>Работа с чужими репозиториями</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div>
                            <p><b>«Форкнуть» (от англ. Fork — вилка)</b> — создать полную копию чужого репозитория в своем аккаунте на GitHub (или GitLab/Bitbucket).</p>
                            <p style={{ color: '#666', fontSize: '0.95em', fontStyle: 'italic' }}>
                                Это позволяет свободно менять код, не портя оригинал. Используется для Open Source(Ты хочешь предложить изменения в чужой проект. Ты делаешь форк, правишь код у себя и отправляешь оригиналу запрос на слияние (Pull Request).) или как база для своего проекта.
                            </p>
                        </div>

                        <div style={{ backgroundColor: '#fff9db', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #FBC02D' }}>
                            <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>Pull Request (PR) — процесс предложения правок:</p>
                            <ol style={{ margin: 0, paddingLeft: '20px' }}>
                                <li>Делаешь <b>Fork</b> проекта. (На странице любого проекта на GitHub в правом верхнем углу нажми кнопку Fork. Через пару секунд этот проект появится в списке твоих репозиториев.
                                    )</li>
                                <li>Вносишь изменения в свою копию и делаешь <b>push</b>.</li>
                                <li>Нажимаешь <b>New Pull Request</b>, чтобы автор оригинала проверил и принял твой код.</li>
                            </ol>
                        </div>

                        <div style={{ marginTop: '5px' }}>
                            <p><b>Разница понятий:</b></p>
                            <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
                                <li><span style={{ color: '#FBC02D', fontWeight: 'bold' }}>•</span> <b>Clone</b> — скачиваешь код на компьютер.</li>
                                <li><span style={{ color: '#FBC02D', fontWeight: 'bold' }}>•</span> <b>Fork</b> — копируешь проект внутри GitHub себе в профиль.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section style={{
                    backgroundColor: '#fff',
                    padding: '25px',
                    borderRadius: '12px',
                    borderTop: '6px solid #1890ff',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    fontFamily: 'sans-serif'
                }}>
                    <h2 style={{ marginTop: 0, color: '#003a8c' }}>Ветки (Branches)</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p><b>Ветки</b> позволяют работать над разными задачами одновременно, не смешивая код.</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <code style={{ backgroundColor: '#f0f0f0', padding: '6px 12px', borderRadius: '6px', color: '#c41d7f' }}>
                                git branch &mdash; посмотреть список всех веток
                            </code>
                            <code style={{ backgroundColor: '#f0f0f0', padding: '6px 12px', borderRadius: '6px', color: '#c41d7f' }}>
                                git branch [name] &mdash; создать новую ветку
                            </code>
                            <code style={{ backgroundColor: '#f0f0f0', padding: '6px 12px', borderRadius: '6px', color: '#c41d7f' }}>
                                git checkout [name] &mdash; перейти на другую ветку
                            </code>
                            <code style={{ backgroundColor: '#e6f7ff', padding: '6px 12px', borderRadius: '6px', color: '#0050b3', fontWeight: 'bold' }}>
                                git checkout -b [name] &mdash; создать и сразу перейти (2 в 1)
                            </code>
                        </div>
                        <h2 style={{ marginTop: 0, color: '#9e1068' }}>Слияние веток (Merge)</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <p><b>Merge</b> объединяет историю двух веток в одну.</p>

                            <div style={{ backgroundColor: '#fff0f6', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #eb2f96' }}>
                                <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>Алгоритм слияния (например, ветки feature в main):</p>
                                <ol style={{ margin: 0, paddingLeft: '20px' }}>
                                    <li style={{ marginBottom: '8px' }}>Переходим в ту ветку, <b>В которую</b> хотим влить изменения: <br/>
                                        <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px', color: '#c41d7f' }}>git checkout main</code>
                                    </li>
                                    <li>Запускаем слияние: <br/>
                                        <code style={{ backgroundColor: '#fff', padding: '2px 6px', borderRadius: '4px', color: '#c41d7f' }}>git merge feature-name</code>
                                    </li>
                                </ol>
                            </div>



                            <div style={{ marginTop: '5px' }}>
                                <p><b>Что может пойти не так?</b></p>
                                <p style={{ fontSize: '0.95em', color: '#666' }}>
                                    Если в обеих ветках менялись одни и те же строки в одних и тех же файлах, возникнет <b>Конфликт</b>.
                                    Git попросит вас вручную выбрать, какой код оставить, после чего нужно сделать финальный коммит.
                                </p>
                            </div>

                            <div style={{ backgroundColor: '#f6ffed', padding: '10px', borderRadius: '8px', fontSize: '0.9em', color: '#52c41a', fontWeight: '500' }}>
                                💡 Лайфхак: В GitHub чаще всего слияние делают через кнопку <b>Merge Pull Request</b> — это удобнее и нагляднее.
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#fffbe6', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #faad14', marginTop: '5px' }}>
                            <p style={{ margin: 0 }}><b>Как удалять:</b></p>
                            <ul style={{ margin: '5px 0 0 0', paddingLeft: '20px' }}>
                                <li><code style={{ backgroundColor: '#fff', padding: '2px 4px' }}>git branch -d [name]</code> &mdash; удалить ветку (безопасно)</li>
                                <li><code style={{ backgroundColor: '#fff', padding: '2px 4px' }}>git branch -D [name]</code> &mdash; удалить принудительно</li>
                            </ul>
                        </div>
                        {/* Новый блок про визуализацию */}
                        <div style={{
                            backgroundColor: '#f6ffed',
                            padding: '15px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #52c41a',
                            marginTop: '5px'
                        }}>
                            <p style={{ margin: 0 }}><b>🧪 Визуализация в GitHub:</b></p>
                            <p style={{ fontSize: '0.95em', margin: '5px 0 0 0' }}>
                                Во вкладке <b>Insights &gt; Network</b> можно наглядно посмотреть «дерево» проекта:
                                все переключения между ветками, слияния и то, как развивалась история коммитов.
                            </p>
                        </div>

                    </div>
                </section>
            </div>



</div>
        </div>
    );
}
