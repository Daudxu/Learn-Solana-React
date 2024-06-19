import Home from '../pages/home/index'
import Wallet from '../pages/wallet'
import Transaction from '../pages/transaction'
import Airdrop from '../pages/airdrop'
import TransferToken from '../pages/transferToken'
import Test from '../pages/test'

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
  },
  {
    path: '/transferToken',
    element: <TransferToken />
  },
  {
    path: '/test',
    element: <Test />
  }
]

export default router;