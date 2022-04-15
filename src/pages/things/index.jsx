import React from 'react';
import s from './styles.module.css'
import Container from "../../common/container/Container";

const Things = () => {
    return (
        <div><Container>
            <div className={s.market_items}>
                <h1>В разработке...</h1>
            </div>
        </Container></div>
    );
};

export default Things;