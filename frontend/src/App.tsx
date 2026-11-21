import { useState } from "react"

function App() {
  const [fileName, setFileName] = useState<string>('or click to browse')
  const [isDragging, setIsDragging] = useState<boolean>(false)

  // file pciker
  const handlePicker = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement
      const files = target.files
      if (files && files.length > 0) {
        setFileName(files[0].name)
      }
    }
    input.click()
  }
  // drag and drop
  const handleDragOver = (e:React.DragEvent<HTMLElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }
  const handleDragLeave = (e:React.DragEvent<HTMLElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }
  const handleDrop = (e:React.DragEvent<HTMLElement>) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer?.files
    if (files && files.length > 0) {
      setFileName(files[0].name)
    }
  }
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex-col">
          {/* drag and drop box */}
          <section
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center w-xl h-96 border-2 border-dashed border-white/40 rounded-xl font-mono text-white/60 gap-3 cursor-pointer ${isDragging ? "border-white text-white bg-white/5" : "hover:border-white/70 hover:text-white/80"}  transition-colors`} onClick={handlePicker}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <p className="text-sm">Drag and drop files here</p>
          <p className="text-xs text-white/30">{fileName}</p>
        </section>
        {/* send button */}
        <div className="flex justify-end mt-2.5">
          <button className="p-1 mt-2.5 border border-white rounded-sm bg-white hover:bg-gray-200 active:scale-95 font-mono">Send</button>
        </div>
        </div>
      </div>
    )
  }

  export default App
