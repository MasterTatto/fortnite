import React, {useState} from 'react';
import Container from "../../common/container/Container";
import s from './styles.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as Logout} from "../../assests/logout.svg";
import {toggleLoginAC} from "./header.store";

const Header = () => {
    const dispatch = useDispatch()

    const [activeItems, setActiveItem] = useState('static')
    const {user} = useSelector((store) => store.headerStore)

    const logout = () => dispatch(toggleLoginAC(false))

    const headerData = JSON.parse(localStorage.getItem('headerStore'))
    console.log(headerData)
    return (
        <div className={s.header}>
            <Container>
                <div className={s.header_items}>
                    <ul className={s.ul}>
                        <NavLink to={'/'} onClick={() => setActiveItem('static')}
                                 className={activeItems === 'static' && s.active}>Статистика
                        </NavLink>
                        <NavLink to={'news'} onClick={() => setActiveItem('news')}
                                 className={activeItems === 'news' && s.active}>Новости
                        </NavLink>
                        <NavLink to={'things'} onClick={() => setActiveItem('things')}
                                 className={activeItems === 'things' && s.active}>Вещи
                        </NavLink>
                        <NavLink to={'market'} onClick={() => setActiveItem('market')}
                                 className={activeItems === 'market' && s.active}>Магазин
                        </NavLink>
                    </ul>
                    <div >
                        <div className={s.user}><h4>{headerData.user.name}</h4> <div onClick={logout}><Logout/></div></div>
                        <span><b>ID</b> {headerData.user.id}</span>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;