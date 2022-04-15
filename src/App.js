import './App.css';
import Header from "./components/header";
import Routers from "./routes/routes";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserTC} from "./components/header/header.store";
import bgLogin from './assests/bg_login.jpg'
import bg from './assests/bg.jpg'

function App() {
    const {isUserLogin} = useSelector((store) => store.headerStore)
    const dispatch = useDispatch()
    const [name, setName] = useState('masterthunder')

    const getUserData = () => dispatch(getUserTC(name))
    return (
        <div className='App' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center ,center',
            backgroundRepeat: 'no-repeat',
            background: !isUserLogin ? `url(${bgLogin})` : `url(${bg})`,

        }}>
            {isUserLogin === false ?
                <div className={'login'}>
                    <h2>Для пользования сервисом вам необходимо ввести ваш ник-нейм аккаунта</h2>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text"
                           placeholder={'Введите ник аккаунта'}/>
                    <button onClick={getUserData}>Вход</button>
                </div> :
                <>
                    <Header/>
                    <Routers/>
                </>
            }
        </div>
    );
}

export default App;
