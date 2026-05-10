export default function Page() {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', lineHeight: '1.5' }}>
            <h1>Git - основные команды:</h1>

            <section>
                <h2>Локальные commit</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <p><b>git revert</b> — отменяет предыдущий коммит.</p>
                    <p style={{ color: '#555', fontStyle: 'italic' }}>
                        Когда ты делаешь git revert на уже созданный реверт-коммит, Git просто заново применяет
                        те изменения, которые были в самом первом (исходном) коммите. Это называют «переотменой».
                    </p>
                    <code>git revert HEAD — Отменить последний коммит</code>
                    <code>git revert 560a3e4 — Отменить конкретный коммит по его ID</code>
                </div>
            </section>

            <section style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <p>
                        <b>git reset</b> — команда для «отмотки» назад. Переписывает историю, перемещая указатель ветки в прошлое.
                    </p>
                    <p>— <b>--soft</b>: отменяет только коммит. Код остается в индексе (staged).</p>
                    <p>— <b>--mixed</b> (default): отменяет коммит, убирает из индекса. Код остается.</p>
                    <p>— <b>--hard</b>: полностью стирает коммит и все изменения в файлах.</p>
                    <p>— <b>--keep</b>: режим отката, сохраняющий текущие незакоммиченные правки.</p>
                    <p><b>HEAD~1</b> — откатиться на один коммит назад (<code>git reset --soft HEAD~1</code>)</p>
                </div>
            </section>

            <section style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <p><b>edit commit message (Изменение сообщения коммита) :</b></p>
                <ul>
                    <li><code>git commit --amend -m "Новое правильное сообщение"</code> — исправить сообщение последнего коммита</li>
                    <li><code>git rebase -i HEAD~[число]</code> — исправить старые коммиты (выбрать reword).
                    Например: git rebase -i HEAD~3 (Например, если он 3-й с конца) </li>
                    <p><b>Как работает git rebase -i:</b></p>
                    <ol>
                        <li>Запускаешь команду: <code>git rebase -i HEAD~3</code></li>
                        <li>В открывшемся списке меняешь <code>pick</code> на <code>reword</code> (или просто <code>r</code>) у нужного коммита.</li>
                        <li>Сохраняешь и закрываешь (в Vim это <code>:wq</code>).</li>
                        <li>Git сам откроет новое окно — там пишешь <b>новое сообщение</b>, сохраняешь и выходишь.</li>
                    </ol>
                    <p><i>Интересно: если выбрать <b>squash</b>, можно объединить несколько коммитов в один!</i></p>
                </ul>
                <p style={{color: 'orange'}}>⚠️ Если коммит уже на сервере, понадобится <code>git push --force</code></p>
                </div>
            </section>
            <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
                <p><b>Отправка на сервер:</b></p>
                <ul>
                    <li><code>git push origin main</code> — Она отправляет ваши локальные коммиты из ветки main в удаленный репозиторий (например, на GitHub), который по умолчанию называется origin</li>
                    <li><code>git push -u origin main</code> — флаг -u связывает локальную ветку с удаленной. После этого вам достаточно будет писать просто <code>git push</code>)</li>
                    <li><code>git push --force</code> — принудительная отправка (перезаписывает историю на сервере!)</li>
                </ul>
            </div>
            <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ffcccb', borderRadius: '8px' }}>
                <p><b>Удаление из удаленного репозитория (GitHub):</b></p>
                <ul>
                    <li>
                        <code>git rm --cached [file]</code> — убрать файл из Git, но <b>оставить</b> его на компьютере.
                    </li>
                    <li>
                        <code>git rm -r --cached [folder]</code> — убрать папку из Git, оставив её локально.
                    </li>
                    <li>
                        <code>git rm [file]</code> — удалить файл и из Git, и с компьютера.
                    </li>
                </ul>
                <p style={{ fontSize: '0.9em', color: '#666' }}>
                    * После этих команд обязательно нужно сделать <b>commit</b> и <b>push</b>.
                </p>
            </div>
        </div>
    );
}
