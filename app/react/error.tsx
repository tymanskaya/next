// src/app/next-info/error.tsx
"use client"; // Обязательно клиентский компонент! [INDEX]

import React, { useEffect } from 'react';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Здесь обычно отправляют логи в систему аналитики (Sentry, LogRocket)
        console.error("Поймана критическая ошибка:", error);
    }, [error]);

    return (
        <div style={{ padding: '30px', textAlign: 'center', backgroundColor: '#fff1f0', border: '1px solid #ffa39e', borderRadius: '8px' }}>
            <h2 style={{ color: '#cf1322' }}>Что-то пошло не так! 😭</h2>
            <p style={{ color: '#444' }}>{error.message || "Не удалось загрузить этот раздел сайта."}</p>

            {/* Кнопка сброса ошибки */}
            <button
                onClick={() => reset()}
                style={{ backgroundColor: '#ff4d4f', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
            >
                Попробовать снова
            </button>
        </div>
    );
}
