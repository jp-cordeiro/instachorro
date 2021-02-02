import { useState } from 'react';

export default function useFom() {
  const [value, setValue] = useState('');

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    onChange,
  };
}
