import React from 'react';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock, MdImage, MdEditSquare, MdWorkspaces, MdArticle, MdFormatPaint, MdVideoFile, MdFileDownload, MdStore,
} from 'react-icons/md';

const routes = [
  {
    name: 'Maaagic AI',
    layout: '/pages',
    path: '/Maaagic_AI',
    icon: <MdHome className="h-6 w-6" />,
  },

  {
    name: 'Image to Image',
    layout: '/pages',
    path: '/Image_To_Image',
    icon: <MdImage className="h-6 w-6" />,

  },
  {
    name: 'Text to Image',
    layout: '/pages',
    path: '/Text_To_Images',
    icon: <MdEditSquare className="h-6 w-6" />,
  },
  {
    name: 'Workflow Editor',
    layout: '/pages',
    path: '/Workflow_Editor',
    icon: <MdWorkspaces className="h-6 w-6" />,
  },
  {
    name: 'Canvas',
    layout: '/pages',
    path: '/Canvas',
    icon: <MdFormatPaint className="h-6 w-6" />,
  },
  {
    name: 'Video Maker',
    layout: '/pages',
    path: '/Video_Maker',
    icon: <MdVideoFile className="h-6 w-6" />,
  },
  {
    name: 'Model Management',
    layout: '/pages',
    path: '/Model_Management',
    icon: <MdFileDownload className="h-6 w-6" />,
  },
  {
    name: 'Store',
    layout: '/pages',
    path: '/Store',
    icon: <MdStore className="h-6 w-6" />,
  },


];
export default routes;
