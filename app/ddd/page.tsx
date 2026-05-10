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
        </div>
    );
}
