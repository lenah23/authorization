'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface IProps {
  options: { id: number; name: string }[];
}

const UseIndustriesHooks = ({ options }: IProps) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedIndustries, setSelectedIndustries] = useState<
    { id: number; name: string }[]
  >([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleItemClick = (industry: { id: number; name: string }) => {
    const isIndustrySelected = selectedIndustries.some(
      (selected) => selected.id === industry.id
    );

    if (!isIndustrySelected) {
      if (selectedIndustries.length < 3) {
        setSelectedIndustries((prevSelected) => [...prevSelected, industry]);
      } else {
        toast.warning('You can only select up to 3 industries.');
      }
    }
    setIsFocused(false);
  };

  const handleRemoveIndustry = (id: number) => {
    setSelectedIndustries((prevSelected) =>
      prevSelected.filter((industry) => industry.id !== id)
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = options?.filter((option) =>
        option.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredOptions(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue, options]);

  return {
    isFocused,
    searchValue,
    selectedValue,
    filteredOptions,
    selectedIndustries,
    handleRemoveIndustry,
    setFilteredOptions,
    setSelectedValue,
    handleItemClick,
    setIsFocused,
    handleChange,
  };
};

export default UseIndustriesHooks;
