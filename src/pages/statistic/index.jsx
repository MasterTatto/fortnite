import React, {useState} from 'react';
import s from './styles.module.css'
import Container from "../../common/container/Container";
import {useDispatch, useSelector} from "react-redux";
import photo from '../../assests/photo.jpg'
import {getUserStatisticTC} from "./statistic.store";
import {ReactComponent as Kill} from '../../assests/kill.svg'
import {ReactComponent as Death} from '../../assests/death.svg'
import {ReactComponent as Kd} from '../../assests/kd.svg'

const Statistic = () => {
    const dispatch = useDispatch()

    const {user, battlePass, image} = useSelector((store) => store?.headerStore)
    const {images, userStatistic} = useSelector((store) => store?.statisticStore)

    const [dataSettings, setDataSettings] = useState({
        statistic: 'lifetime',
        device: 'keyboardMouse',
        typeGame: 'overall'
    })

    console.log(userStatistic)
    console.log(images)
    const getStatistic = () => dispatch(getUserStatisticTC(user.name, dataSettings.statistic, dataSettings.device, dataSettings.typeGame, dataSettings.device))

    return (
        <div className={s.statistic}>
            <Container>
                <div className={s.statistic_item}>
                    <div className={s.statistic_item_header}>
                        <div className={s.profile}>
                            <img src={image === null ? photo : image} alt=""/>
                            <div className={s.profile_text}>
                                <p>Ник: <span>{user.name}</span></p>
                                <p>Уровень: <span>{battlePass.level}</span></p>
                                <p>Прогресс: <span>{battlePass.progress}</span></p>
                            </div>
                        </div>
                        <div className={s.settings}>
                            <h2>Выберите параметры поиска вашей статистики</h2>
                            <div className={s.settings_settings}>
                                <div className={s.novelty_select_wrap}>
                                    <p>Статистика за</p>
                                    <div className={s.novelty_select}>
                                        <select
                                            name="novelty-select"
                                            onChange={(e) => setDataSettings((state) => ({
                                                ...state,
                                                statistic: e.target.value
                                            }))}
                                        >
                                            <option value="lifetime">Все время</option>
                                            <option value="season">Сезон</option>
                                        </select>
                                    </div>
                                </div>
                                {/*<div className={s.novelty_select_wrap}>*/}
                                {/*    <p>Платформа</p>*/}
                                {/*    <div className={s.novelty_select}>*/}
                                {/*        <select*/}
                                {/*            name="novelty-select"*/}
                                {/*        >*/}
                                {/*            <option value="epic">ПК</option>*/}
                                {/*            <option value="psn">PlayStation</option>*/}
                                {/*            <option value="xbl">Xbox</option>*/}
                                {/*        </select>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className={s.novelty_select_wrap}>
                                    <p>Устройство</p>
                                    <div className={s.novelty_select}>
                                        <select
                                            name="novelty-select"
                                            onChange={(e) => setDataSettings((state) => ({
                                                ...state,
                                                device: e.target.value
                                            }))}
                                        >
                                            <option value="keyboardMouse">ПК</option>
                                            <option value="gamepad">Приставка</option>
                                            <option value="touch">Телефон</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={s.novelty_select_wrap}>
                                    <p>Тип игры</p>
                                    <div className={s.novelty_select}>
                                        <select
                                            name="novelty-select"
                                            onChange={(e) => setDataSettings((state) => ({
                                                ...state,
                                                typeGame: e.target.value
                                            }))}
                                        >
                                            <option value="overall">Показать все</option>
                                            <option value="solo">Соло</option>
                                            <option value="duo">Двоем</option>
                                            <option value="trio">Троем</option>
                                            <option value="squad">Четвером</option>
                                        </select>
                                    </div>
                                </div>
                                <button onClick={getStatistic}>
                                    Показать информацию
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className={s.shower}>
                        {!userStatistic ? <h1>Настройте параметры поиска...</h1> :
                            <div className={s.table}>

                                <div className={s.kd}>
                                    <div>
                                        <h3>Убийств</h3>
                                        <Kill/>
                                        <p>{userStatistic?.kills || '---'}</p>
                                    </div>
                                    <div>
                                        <h3>Смертей</h3>
                                        <Death/>
                                        <p>{userStatistic?.deaths || '---'}</p>
                                    </div>
                                    <div>
                                        <h3>КД</h3>
                                        <Kd/>
                                        <p>{userStatistic?.kd || '---'}</p>
                                    </div>
                                </div>

                                <div className={s.matches}>
                                    <div>
                                        <h3>Сыграно матчей</h3>
                                        <p>{userStatistic?.matches || '---'}</p>
                                    </div>
                                    <div>
                                        <h3>Винрейт</h3>
                                        <p>{userStatistic?.winRate || '---'}</p>
                                    </div>
                                    <div>
                                        <h3>Минут в игре</h3>
                                        <p>{userStatistic?.minutesPlayed || '---'}</p>
                                    </div>
                                </div>

                                <div className={s.top}>
                                    <div>
                                        <h3>Топ 1</h3>
                                        <p>{userStatistic?.wins || '---'}</p>
                                    </div>

                                    <div>
                                        <h3>Топ 5</h3>
                                        <p>{userStatistic?.top5 || '---'}</p>
                                    </div>

                                    <div>
                                        <h3>Топ 10</h3>
                                        <p>{userStatistic?.top10 || '---'}</p>
                                    </div>
                                </div>

                                <div>
                                    <a className={s.btn} href={images} target={'_blank'}>
                                        Статистика Fortnite
                                    </a>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Statistic;