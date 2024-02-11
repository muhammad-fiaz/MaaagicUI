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
    layout: '/components',
    path: '/Maaagic_AI',
    icon: <MdHome className="h-6 w-6" />,
  },

  {
    name: 'Image to Image',
    layout: '/components',
    path: '/Image_To_Image',
    icon: <MdImage className="h-6 w-6" />,

  },
  {
    name: 'Text to Image',
    layout: '/components',
    path: '/Text_To_Images',
    icon: <MdEditSquare className="h-6 w-6" />,
  },
  {
    name: 'Workflow Editor',
    layout: '/components',
    path: '/Workflow_Editor',
    icon: <MdWorkspaces className="h-6 w-6" />,
  },
  {
    name: 'Canvas',
    layout: '/components',
    path: '/Canvas',
    icon: <MdFormatPaint className="h-6 w-6" />,
  },
  {
    name: 'Video Maker',
    layout: '/components',
    path: '/Video_Maker',
    icon: <MdVideoFile className="h-6 w-6" />,
  },
  {
    name: 'Model Management',
    layout: '/components',
    path: '/Model_Management',
    icon: <MdFileDownload className="h-6 w-6" />,
  },
  {
    name: 'Store',
    layout: '/components',
    path: '/Store',
    icon: <MdStore className="h-6 w-6" />,
  },


];
export default routes;
