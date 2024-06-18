import Home from '../pages/home/index'
import Wallet from '../pages/wallet'
import Transaction from '../pages/transaction'

const router = [
  { path: '/', element: <Home /> },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/wallet',
    element: <Wallet />
  },
  {
    path: '/transaction',
    element: <Transaction />
  }
]

export default router;