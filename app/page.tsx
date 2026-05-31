

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div className="logo-container" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              userSelect: 'none',
              cursor: 'pointer',
              padding: '10px 0',
              animation: 'fadeIn 0.8s ease-out forwards'
          }}>

              {/* Локальные стили для красивых эффектов */}
              <style>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .logo-container:hover .logo-text {
      background: linear-gradient(135deg, #0f172a 0%, #2563eb 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .logo-container:hover .logo-line {
      width: 100% !important;
      background-color: #fbbf24 !important;
    }
  `}</style>

              {/* Эмодзи блокнота с легким эффектом парения */}
              <span style={{
                  fontSize: '34px',
                  lineHeight: '1',
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.08))',
                  transition: 'transform 0.3s ease'
              }}
                    className="logo-icon">
    📝
  </span>

              {/* Контейнер для текста и динамической линии */}
              <div style={{
                  position: 'relative',
                  display: 'inline-block'
              }}>
                  <h1 className="logo-text" style={{
                      fontSize: '34px',
                      fontWeight: '800',
                      color: '#1e293b',
                      margin: 0,
                      padding: 0,
                      lineHeight: '1.1',
                      letterSpacing: '-0.03em',
                      transition: 'all 0.3s ease'
                  }}>
                      Конспект
                  </h1>

                  {/* Желтая линия, которая плавно увеличивается при наведении на логотип */}
                  <div className="logo-line" style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: 0,
                      width: '34px',
                      height: '4px',
                      backgroundColor: '#facc15',
                      borderRadius: '2px',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }} />
              </div>
          </div>



      </main>
    </div>
  );
}

