
import DonationsTable from '../ui/DonationsTable'
import { sideBarItems } from '../sideBarItems'
function UserDonations() {
  return (
    <div className='pl-3'>
        <div className="flex pl-10 gap-3 pb-1 pt-10 mid:pt-8 items-center ">
        {sideBarItems[1][1]}
        <h2 className="text-xl p-1">{sideBarItems[1][0]}</h2>
      </div>
        <DonationsTable />
    </div>
  )
}

export default UserDonations