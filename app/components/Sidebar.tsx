"use client";

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Sidebar() {
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

    return (
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
            zIndex: 100,
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px', paddingLeft: '10px' }}>
                <div style={{ backgroundColor: '#00d8ff', width: '8px', height: '24px', borderRadius: '4px' }}></div>
                <span style={{ fontWeight: '800', fontSize: '18px', color: '#1f2328' }}>DevDocs</span>
            </div>

            <div>
                <p style={{ fontSize: '11px', fontWeight: '700', color: '#8c95a0', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 10px 10px' }}>
                    Страницы
                </p>
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
        </aside>
    );
}
