import React from 'react';
import ItemButtons from './ItemButtons';

const SelectItem = ({selectedItem, setSelectedItem, setOrderProgress}) => {
  return (
    <div>
      <p className='mb-11 font-bold text-4xl'>
        What do you need repairing/altering?
      </p>
      <ItemButtons
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        setOrderProgress={setOrderProgress}
      />
    </div>
  );
};

export default SelectItem;
