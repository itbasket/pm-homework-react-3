import React from 'react';

const Select = ({ dataList, selectedOption, onSelect }) => {
  const items = dataList ?? []

  return (
    <div>
      <select value={selectedOption} onChange={(event) => onSelect(event.target.value)}>
        {items.map(item => {
          return <option value={item.id} key={item.id}>{item.name}</option>
        })}
      </select>
    </div>
  )
}

export default Select;