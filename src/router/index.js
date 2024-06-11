import Home from '../pages/home/index'
import Wallet from '../pages/wallet/index'

const router = [
  { path: '/', element: <Home /> },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/wallet',
    element: <Wallet />
  }
]

export default router;