import { AiOutlineUser } from 'react-icons/ai'
import { MdDeliveryDining, MdAttachMoney, MdProductionQuantityLimits } from 'react-icons/md'
import { GiFruitBowl, GiBuyCard } from 'react-icons/gi'
const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar-title'>Admin Panel</div>
      <nav className='sidebar-nav'>
        <ul className='sidebar-ul'>
          <li><span><MdAttachMoney className='sidebar-icon' /><span />Accounting</span></li>
          <li><span><MdDeliveryDining className='sidebar-icon' /></span><span>Orders</span></li>
          <li><span><GiFruitBowl className='sidebar-icon' /></span><span>Stocks</span></li>
          <li><span><AiOutlineUser className='sidebar-icon' /></span><span>Users</span></li>
          <li><span><MdProductionQuantityLimits className='sidebar-icon' /></span><span>Products</span></li>
          <li><span><GiBuyCard className='sidebar-icon' /></span><span>Vendors</span></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
