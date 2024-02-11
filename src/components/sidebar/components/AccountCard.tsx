'use client'

import React, { useState } from "react";
import { MdSettings, MdLogout } from "react-icons/md";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

const Account = () => {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleSettingsClick = (e: any) => {
        e.stopPropagation(); // Prevent the click event from propagating to the button and closing the dropdown
        toggleDropdown();

        // Navigate to the settings page
        router.push("/components/settings");
    };

    return (
        <div className="relative mt-14 w-[256px]">
            {/* Trigger Button */}
            <div className="flex items-center justify-center bg-secondary p-2 shadow-md border border-primary/20 rounded-full">
                {/* Profile Photo */}
                <img
                    src="/avatar.jpg"
                    alt="Profile"
                    className="rounded-full w-10 h-10 object-cover object-center"
                />

                {/* User Info */}
                <div className="ml-4 text-primary flex items-center">
                    <p className="font-bold">Anonymous User</p>

                    {/* Icons */}
                    <div className="flex items-center ml-2">
                        <MdSettings className="mr-1" onClick={handleSettingsClick} />
                        <MdLogout className="mr-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
