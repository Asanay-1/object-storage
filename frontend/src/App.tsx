
function App() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="flex flex-col items-center justify-center w-xl h-96 border-2 border-dashed border-white/40 rounded-xl font-mono text-white/60 gap-3 cursor-pointer hover:border-white/70 hover:text-white/80 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        <p className="text-sm">drag and drop files here</p>
        <p className="text-xs text-white/30">or click to browse</p>
      </section>
    </div>
  )
}

export default App
