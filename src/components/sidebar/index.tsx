/* eslint-disable */

import { HiX } from 'react-icons/hi';
import Links from './components/Links';

import SidebarCard from '@/components/sidebar/components/AccountCard';
import { IRoute } from '@/types/navigation';

function SidebarHorizon(props: { routes: IRoute[]; [x: string]: any }) {
  const { routes, open, setOpen } = props;
  return (
      <div
          className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-secondary pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white ${
              open ? 'translate-x-0' : '-translate-x-96 lg:-translate-x-96 xl:translate-x-0'
          }`}
          style={{ marginBottom: '10px' }}
      >
      <span
          className="absolute right-4 top-4 block cursor-pointer xl:hidden"
          onClick={() => setOpen(false)}
      >
        <HiX/>
      </span>

          <div className={`mx-[56px] mt-[50px] flex items-center`}>
              <div
                  className="ml-1 mt-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
                  Maaagic <span className="font-medium">UI</span>
              </div>
          </div>
          <div className="mb-7 mt-[58px] h-px bg-gray-300 dark:bg-white/30"/>
          {/* Nav item */}

          <ul className="mb-auto pt-1">
              <Links routes={routes}/>

          </ul>

        <div className="flex justify-center">
          <SidebarCard />
        </div>
<br/>
        {/* Nav item end */}
      </div>
  );
}

export default SidebarHorizon;
