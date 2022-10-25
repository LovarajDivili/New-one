import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';

export const SidebarData = [
  {
    title: 'Transmart',
    path: '/project_details/Transmart',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'IAVR Enterprise',
    path: '/project_details/IAVR Enterprise',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'PCA',
    path: '/project_details/PCA',
    icon: <FiIcons.FiBox />,
    cName: 'nav-text'
  },
  {
    title: 'PAC',
    path: '/project_details/PAC',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Genie-Project',
    path: '/project_details/Genie-Project',
    icon: <FiIcons.FiTwitch />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];