import React, { useState } from 'react';
import modelTypesData from '@/../modelTypes.json';
import baseModelsData from '@/../baseModels.json';

interface ModelType {
    id: number;
    name: string;
}

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]); // State to hold the selected options
    const [nsfwOption, setNsfwOption] = useState<string>('false'); // State to hold NSFW option, default to false
    const [pageNumber, setPageNumber] = useState<number>(1); // State to hold page number
    const [limit, setLimit] = useState<number>(10); // State to hold limit
    const [tags, setTags] = useState<string>(''); // State to hold the entered tags

    const handleOptionSelect = (optionName: string) => {
        // Toggle the selection
        if (selectedOptions.includes(optionName)) {
            setSelectedOptions(selectedOptions.filter(option => option !== optionName));
        } else {
            setSelectedOptions([...selectedOptions, optionName]);
        }
    };

    const handleTagsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTags(event.target.value);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed   inset-0 z-50 overflow-auto bg-black bg-opacity-75 scrollbar-none scroll-smooth">
                    <div className="flex  items-center justify-center min-h-screen ">
                        <div className="p-4 md:p-8 rounded-lg w-full md:max-w-md bg-secondary text-primary ">
                            <h3 className="text-lg font-semibold mb-4 border-b border-primary/20">Filter</h3>
                            {/* Display selectable options for model types */}
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold mb-2">Model Types</h2>
                                {modelTypesData.modelTypes.map((option: ModelType) => (
                                    <label key={option.id} className="inline-flex items-center mr-4">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            value={option.name}
                                            checked={selectedOptions.includes(option.name)}
                                            onChange={() => handleOptionSelect(option.name)}
                                        />
                                        <span>{option.name}</span>
                                    </label>
                                ))}
                            </div>
                            {/* Display selectable options for base models */}
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold mb-2">Base Models</h2>
                                {baseModelsData.baseModels.map((baseModel: string, index: number) => (
                                    <label key={index} className="inline-flex items-center mr-4">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            value={baseModel}
                                            checked={selectedOptions.includes(baseModel)}
                                            onChange={() => handleOptionSelect(baseModel)}
                                        />
                                        <span>{baseModel}</span>
                                    </label>
                                ))}
                            </div>
                            {/* NSFW option */}
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold mb-2">NSFW</h2>
                                <div className="flex items-center">
                                    <label className="mr-4">
                                        <input
                                            type="radio"
                                            className="mr-2"
                                            value="true"
                                            checked={nsfwOption === 'true'}
                                            onChange={() => setNsfwOption('true')}
                                        />
                                        True
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            className="mr-2"
                                            value="false"
                                            checked={nsfwOption === 'false'}
                                            onChange={() => setNsfwOption('false')}
                                        />
                                        False
                                    </label>
                                </div>
                            </div>
                            {/* Page number input */}
                            <div className="mb-4">
                                <label className="block text-lg font-semibold mb-2">Page</label>
                                <input
                                    type="number"
                                    className="border border-gray-300 rounded px-3 py-2 w-full bg-primary/40"
                                    value={pageNumber}
                                    onChange={(e) => setPageNumber(parseInt(e.target.value))}
                                />
                            </div>
                            {/* Limit input */}
                            <div className="mb-4">
                                <label className="block text-lg font-semibold mb-2">Limit</label>
                                <input
                                    type="number"
                                    className="border border-gray-300 rounded px-3 py-2 w-full bg-primary/40"
                                    value={limit}
                                    onChange={(e) => setLimit(parseInt(e.target.value))}
                                />
                            </div>
                            {/* Tags input */}
                            <div className="mb-4">
                                <label className="block text-lg font-semibold mb-2">Tags</label>
                                <textarea
                                    className="border border-gray-300 rounded px-3 py-2 w-full bg-primary/40"
                                    value={tags}
                                    onChange={handleTagsChange}
                                ></textarea>
                            </div>
                            {/* Add more options as needed */}
                            <div className="flex justify-end">
                                <button onClick={onClose} className="mt-4 p-2 bg-secondary border border-primary/20 text-primary rounded focus:bg-primary/30 ">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FilterModal;
