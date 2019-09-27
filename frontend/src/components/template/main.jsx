import React from 'react'
import './main.css'

import Header from './header'

export default props =>
    <React.Fragment>
        <Header />
        <main className="content">
            conteúdo
        </main>
    </React.Fragment>