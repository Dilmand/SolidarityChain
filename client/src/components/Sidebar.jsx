import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import VolunteerActivism from '@mui/icons-material/VolunteerActivism';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, useLocation } from 'react-router-dom'
import { navlinks } from '../constants';



const Sidebar = () => {
  return (
    <div className=' bg-green-900 w-60 p-3 flex flex-col text-white'>

      <div className='flex items-center gap-2 px-1 py-3'>
      <VolunteerActivism/>
      <span className='text-neutral-100 text-lg'>SolidarityChain</span>

      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {navlinks.map((link) => (
          <Sidebarlink key={link.key} link={link}></Sidebarlink>
        ))}
      </div>
      
    </div>
  );
};
export default Sidebar;

const Sidebarlink = ({link}) => {
  const { pathname } = useLocation()

  const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

	return (
		<Link
			to={link.path}
			className={linkClass}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
};