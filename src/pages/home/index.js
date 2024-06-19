import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <ul> 
                <li>
                    <NavLink to={"/home"}> 首页 </NavLink>
                </li>
                <li>
                    <NavLink to={"/wallet"}> 钱包登录 </NavLink>
                </li>
                <li>
                    <NavLink to={"/airdrop"}> 空投 </NavLink>
                </li>
                <li>
                    <NavLink to={"/transaction"}> 发送交易 </NavLink>
                </li>
                <li>
                    <NavLink to={"/transferToken"}> 发送Token </NavLink>
                </li>
                <li>
                    <NavLink to={"/test"}> test </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Home;