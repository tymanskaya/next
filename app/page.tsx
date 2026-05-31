

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '20px 0' }}>
              <span style={{ fontSize: '36px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>📝</span>
              <h1 style={{
                  fontSize: '36px',
                  fontWeight: '800',
                  fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
                  color: '#1e293b',
                  letterSpacing: '-0.02em',
                  position: 'relative'
              }}>
                  Конспект
                  <span style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '0',
                      width: '40px',
                      height: '4px',
                      backgroundColor: '#facc15',
                      borderRadius: '2px'
                  }} />
              </h1>
          </div>

      </main>
    </div>
  );
}

