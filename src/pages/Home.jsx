import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import CheatContent from '../components/CheatContent'
import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar'
import cheatsheets from '../data/cheatsheets.json'
import '../styles/global.css'

function Home() {
    const [selected, setSelected] = useState(cheatsheets[0])
    const [search, setSearch] = useState('')

    const filtered = cheatsheets.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className='layout'>
            <Sidebar
                items={filtered}
                selected={selected}
                setSelected={setSelected}
                search={search}
                setSearch={setSearch}
            />
            <div className='main-content'>
                <Navbar selected={selected} total={cheatsheets.length} />
                <CheatContent data={selected} />
            </div>
        </div>
    )
}

export default Home
