import React from 'react';
import Dropdown from '@/components/dropdown';
import { FiAlignJustify } from 'react-icons/fi';
import NavLink from '@/components/link/NavLink';
import navbarimage from '@/../public/maaagicstudios.jpg';
import { BsArrowBarUp } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';

import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from 'react-icons/io';
import avatar from '@/../public/avatar.jpg';
import Image from 'next/image';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

const Navbar = (props: {
  onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
  [x: string]: any;
}) => {
  const { onOpenSidenav, brandText, mini, hovered } = props;
  const router = useRouter();
    const pathname = usePathname();
  const currentPath = pathname || "/";
  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl  bg-secondary/40 p-2 backdrop-blur-xl ">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
              className="text-sm font-normal text-navy-700 hover:underline dark:text-primary dark:hover:text-white"
              onClick={() => router.push('/')}
          >
            Studio
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-primary">
  /
</span>
          </a>

          <NavLink
              className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-primary dark:hover:text-primary"
           href="#"
          >
            {pathname.substring(pathname.lastIndexOf('/') + 1).replace(/_/g, ' ')}
          </NavLink>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-primary">
          <NavLink
            href="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {pathname.substring(pathname.lastIndexOf('/') + 1).toUpperCase().replace(/_/g, ' ')}
          </NavLink>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[500px] flex-grow items-center justify-around gap-2 rounded-full bg-secondary/40 border border-primary/20 px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-primary xl:w-[300px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-primary" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full  text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 bg-secondary/30 dark:placeholder:!text-white sm:w-fit"
          />
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-primary "
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5 xl:hidden" />
        </span>
        {/* start Notification */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-primary" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          classNames={'py-2 top-4 -left-[230px] md:-left-[440px] w-max'}
        >
          <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-secondary p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-primary dark:shadow-none sm:w-[460px]">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-navy-700 dark:text-secondary">
                Notification
              </p>
              <p className="text-sm font-bold text-navy-700 dark:text-secondary">
                Mark all read
              </p>
            </div>

            <button className="flex w-full items-center">
              <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-primary">
                <BsArrowBarUp />
              </div>
              <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-primary">
                  New Update: Maaagic UI Dashboard
                </p>
                <p className="font-base text-left text-xs text-gray-900 dark:text-primary">
                  A new update for your downloaded UI is available!
                </p>
              </div>
            </button>

            <button className="flex w-full items-center">
              <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-primary">
                <BsArrowBarUp />
              </div>
              <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-primary">
                  New Update: Maaagic AI Available
                </p>
                <p className="font-base text-left text-xs text-gray-900 dark:text-primary">
                  A new update for your Model downloaded is available!
                </p>
              </div>
            </button>
          </div>
        </Dropdown>
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdInformationCircleOutline className="h-4 w-4 text-gray-600 dark:text-primary" />
            </p>
          }
          classNames={'py-2 top-6 -left-[250px] md:-left-[330px] w-max'}
          animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
        >
          <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-secondary p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-secondary dark:shadow-none border border-primary/20">
            <div
              style={{
                backgroundImage: `url(${navbarimage.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              className="mb-2 aspect-video w-full rounded-lg"
            />
            <a
              target="blank"
              href="https://github.com/muhammad-fiaz/MaaagicUI"
              className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-primary transition duration-200 hover:bg-brand-600 hover:text-primary active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
            >
              Maaagic
            </a>
            <a
              target="blank"
              href="https://github.com/muhammad-fiaz/MaaagicUI#readme"
              className="px-full linear flex cursor-pointer items-center justify-center rounded-xl border py-[11px] font-bold text-primary transition duration-200 hover:bg-gray-200 hover:text-navy-700 dark:!border-white/10 dark:text-primary dark:hover:bg-white/20 dark:hover:text-white dark:active:bg-white/10"
            >
              See Documentation
            </a>
            <a
              target="blank"
              href="https://github.com/muhammad-fiaz/MaaagicUI"
              className="hover:bg-secondary px-full linear flex cursor-pointer items-center justify-center rounded-xl py-[11px] font-bold text-primary transition duration-200 hover:text-navy-700 dark:text-primary dark:hover:text-primary/20"
            >
              Try Maaagic UI Free
            </a>
          </div>
        </Dropdown>

        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <Image
              width="2"
              height="20"
              className="rounded-full h-10 w-10 object-cover object-center  cursor-pointer hover:opacity-80 transition duration-200"
              src={avatar}
              alt="User"
            />
          }
          classNames={'py-2 top-8 -left-[180px] w-max'}
        >
          <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-secondary bg-cover bg-no-repeat shadow-xl shadow-shadow-500  border border-primary/20 dark:!bg-navy-700 dark:text-primary dark:shadow-none">
            <div className="ml-4 mt-3">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-navy-700 dark:text-primary cursor-pointer">
                  👋 Hey, User
                </p>{' '}
              </div>
            </div>
            <div className="mt-3 h-px w-full bg-gray-200 dark:bg-primary/20 " />

            <div className="ml-4 mt-3 flex flex-col">
              <a
                href=" "
                className="text-sm text-gray-800 dark:text-primary hover:dark:text-primary/20 cursor-pointer"
              >
               Settings
              </a>
              <a
                href=" "
                className="mt-3 text-sm text-gray-800 dark:text-primary hover:dark:text-primary/20 cursor-pointer"
              >
               Account
              </a>
              <a
                href=" "
                className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
              >
                Log Out
              </a>
            </div>
          </div>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
