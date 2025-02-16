'use client';

import { useEffect, useState } from 'react';
import { IIndustry } from '@/app/store/interfaces';
import { useSaveIndustriesMutation } from '@/app/store/Requests/industriesApi';
import { toast } from 'react-toastify';

interface IProps {
  options: IIndustry[];
}

const UseIndustriesHooks = ({ options }: IProps) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedIndustries, setSelectedIndustries] = useState<IIndustry[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleItemClick = (industry: IIndustry) => {
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

  const [
    saveIndustries,
    { isLoading: saveLoading, isSuccess: saveSuccess, isError: saveError },
  ] = useSaveIndustriesMutation();

  const saveIndustriesReq = () => {
    const payload = selectedIndustries?.map((item) => item?.name);
    saveIndustries({ industry: payload });
  };

  useEffect(() => {
    if (saveSuccess) {
      toast.success('Successfully created');
      setSelectedIndustries([]);
    } else if (saveError) {
      toast.error('Smth went wrong, please try again');
    }
  }, [saveSuccess, saveError]);

  return {
    isFocused,
    searchValue,
    selectedValue,
    filteredOptions,
    selectedIndustries,
    handleRemoveIndustry,
    setSelectedIndustries,
    setFilteredOptions,
    setSelectedValue,
    handleItemClick,
    setIsFocused,
    handleChange,
    saveIndustriesReq,
    saveLoading,
  };
};

export default UseIndustriesHooks;
