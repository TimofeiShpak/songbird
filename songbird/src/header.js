import React, { useState } from 'react';

function Link({name, active}) {
    return (
    <li className={active === true ? "nav-link active" : "nav-link"}>{name}</li>
    );
}

function Header({level, score}) {
    const [links] = useState(['Разминка', 'Водоплавающие птицы', 'Перелетные птицы',
     'Оседлые птицы', 'Лесные птицы', 'Африканские птицы']);

    return (
        <header>
            <div className="navbar">
                <div className='title'>
                    <h1>Songbird</h1>
                    <h4 className='score'>
                        Score: {score}
                    </h4>
                </div>
                <ul className="navbar-nav">
                    {links.map((link, index) => {
                        return <Link 
                                    name={link} 
                                    key={index}
                                    active = {level === index ? true : false}
                                />
                    })}
                </ul>
            </div>
        </header>
    )
}

export default Header;