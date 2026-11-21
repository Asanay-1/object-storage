import { useState } from "react"

function App() {
  const [fileName, setFileName] = useState<string>('or click to browse')
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [file, setFile] = useState<File | null>(null)

  // file pciker
  const handlePicker = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.onchange = (e) => {
      const target = e.target as HTMLInputElement
      const files = target.files
      if (files && files.length > 0) {
        setFileName(files[0].name)
        setFile(files[0])
      }
    }
    input.click()
  }
  // drag and drop
  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }
  const handleDragLeave = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer?.files
    if (files && files.length > 0) {
      setFileName(files[0].name)
      setFile(files[0])
    }
  }
  // button func
  const handleUpload = async () => {
    if (!file) {
      alert("please select file")
      return
    }
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch(`/api/upload/${fileName}`, {
        method: "POST",
        body: formData,
      })
      if (!res.ok) {
        throw new Error(`upload failed: ${res.statusText}`)
      }
      const data = await res.json()
      console.log('success:', data)
      alert("upload success")
    } catch (err) {
      console.error(err)
      alert("upload error")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex-col">
        {/* send button */}
        <div className="flex justify-end mb-2.5">
          <button 
           onClick={handleUpload}
           className="font-inter p-1 mt-2.5 border border-white rounded-sm bg-white hover:bg-gray-200 active:scale-95 text-sm">Upload</button>
        </div>

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
      </div>
    </div>
  )
}

export default App
