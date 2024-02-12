// pages/Notification.tsx

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faInfoCircle, faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

interface NotificationProps {
    id: string | number;
    message: string;
    type?: 'error' | 'notice' | 'success';
    timeout?: boolean;
    onClose?: (id: string) => void;
}

const Notification: React.FC<NotificationProps> = ({ id, message, type = 'notice', timeout = true, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (timeout) {
            const timer = setTimeout(() => {
                handleClose();
            }, 10000); // Adjusted to 10 seconds (10000 milliseconds)

            return () => {
                clearTimeout(timer);
                handleClose();
            };
        }
    }, [timeout]);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => {
            if (onClose) {
                onClose(id.toString());
            }
        }, 300);
    };

    const getIcon = () => {
        switch (type) {
            case 'error':
                return <FontAwesomeIcon icon={faExclamationCircle} />;
            case 'success':
                return <FontAwesomeIcon icon={faCheckCircle} />;
            case 'notice':
            default:
                return <FontAwesomeIcon icon={faInfoCircle} />;
        }
    };

    return (
        <div
            className={`fixed top-15 right-0 m-4 p-2 ${
                type === 'error' ? 'bg-red-500' : type === 'success' ? 'bg-green-500' : 'bg-blue-500'
            } text-white font-bold rounded-lg border shadow-lg ${
                visible ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="mr-2">{getIcon()}</div>
                    <span>{message}</span>
                </div>
                <button onClick={handleClose} className="text-white focus:outline-none ml-3">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>
    );
};

export default Notification;
