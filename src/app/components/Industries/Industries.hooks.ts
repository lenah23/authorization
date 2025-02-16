'use client';

import { useState } from 'react';

const UseIndustriesHooks = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  return { selectedValue, setSelectedValue };
};

export default UseIndustriesHooks;
