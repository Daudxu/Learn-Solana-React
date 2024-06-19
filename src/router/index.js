import Home from '../pages/home/index'
import Wallet from '../pages/wallet'
import Transaction from '../pages/transaction'
import Airdrop from '../pages/airdrop'

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
  },
  {
    path: '/airdrop',
    element: <Airdrop />
  }
]

export default router;