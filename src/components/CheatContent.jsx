import { useState } from 'react'
import '../styles/content.css'

function CopyButton({ code }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code).catch(() => { })
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <button
            className={`copy-btn ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
        >
            {copied ? '✓ Copied' : 'Copy'}
        </button>
    )
}

function CheatContent({ data }) {
    if (!data) return null

    return (
        <div className='content'>

            <div className='content-hero'>
                <div className='hero-eyebrow'>// cheatsheet</div>
                <h1 className='hero-title'>{data.title}</h1>
                <p className='hero-desc'>{data.description}</p>
                <div className='hero-meta'>
                    <span className='meta-tag'>{data.sections.length} sections</span>
                    <span className='meta-tag'>reference</span>
                </div>
            </div>

            <div className='cards-grid'>
                {data.sections.map((section, index) => (
                    <div className='content-card' key={index}>
                        <div className='card-header'>
                            <span className='card-index'>{String(index + 1).padStart(2, '0')}</span>
                            <h3 className='card-title'>{section.heading}</h3>
                            <CopyButton code={section.code} />
                        </div>
                        <div className='code-block'>
                            <span className='code-line-num'>1</span>
                            <code>{section.code}</code>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CheatContent
