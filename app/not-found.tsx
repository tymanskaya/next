// src/app/not-found.tsx
import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
            textAlign: 'center',
            fontFamily: 'system-ui, sans-serif',
            padding: '20px'
        }}>
            <h1 style={{ fontSize: '96px', fontWeight: '900', color: '#1f2328', margin: '0 0 10px 0' }}>
                404
            </h1>
            <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#57606a', margin: '0 0 20px 0' }}>
                Упс! Страница не найдена
            </h2>
            <p style={{ fontSize: '16px', color: '#636c76', maxWidth: '450px', margin: '0 0 30px 0', lineHeight: '1.6' }}>
                К сожалению, запрашиваемая страница не существует, была удалена или переехала по новому адресу.
            </p>

            {/* Используем встроенный Link для быстрого возврата домой */}
            <Link href="/" style={{
                backgroundColor: '#0076ff',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'background-color 0.2s'
            }}>
                Вернуться на главную
            </Link>
        </div>
    );
}
