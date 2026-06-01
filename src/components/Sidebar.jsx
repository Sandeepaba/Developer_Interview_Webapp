import '../styles/sidebar.css'

const iconMap = {
    React: 'Re', JavaScript: 'JS', HTML: 'HT', CSS: 'CS',
    TypeScript: 'TS', 'Node.js': 'ND', MongoDB: 'MG', Git: 'GT',
    'Next.js': 'NX', Redux: 'RX', 'Tailwind CSS': 'TW', Python: 'PY',
    Java: 'JV', 'C++': 'C+', SQL: 'SQ', Docker: 'DK',
    Firebase: 'FB', GraphQL: 'GQ', Linux: 'LX', DSA: 'DS'
}

function Sidebar({ items, selected, setSelected, search, setSearch }) {
    return (
        <div className='sidebar'>

            <div className='sidebar-logo'>
                <span className='logo-name'>DevPrep</span>
                <span className='logo-tag'>// CHEATSHEETS</span>
            </div>

            <div className='sidebar-search'>
                <span className='search-icon'>⌕</span>
                <input
                    type='text'
                    className='search-input'
                    placeholder='Search technology...'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    autoComplete='off'
                />
            </div>

            <div className='sidebar-label'>Technologies</div>

            <div className='sidebar-list'>
                {items.length === 0 && (
                    <div className='sidebar-empty'>No results found</div>
                )}
                {items.map(item => (
                    <div
                        key={item.id}
                        className={`sidebar-item ${selected?.id === item.id ? 'active' : ''}`}
                        onClick={() => setSelected(item)}
                    >
                        <span className='item-icon'>{iconMap[item.title] || item.title.slice(0, 2).toUpperCase()}</span>
                        <span className='item-title'>{item.title}</span>
                        <span className='item-badge'>{item.sections.length}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Sidebar
