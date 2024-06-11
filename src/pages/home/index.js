import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <ul> 
                <li>
                    <NavLink to={"/home"}> 钱包登录 </NavLink>
                </li>
                <li>
                    <NavLink to={"/home"}> 签名操作 </NavLink>
                </li>
                <li>
                    <NavLink to={"/home"}> 发送交易 </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Home;