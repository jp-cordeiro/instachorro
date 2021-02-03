import { useCallback, useState } from 'react';

export default function useFom() {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    ({ target }) => {
      setValue(target.value);
    },
    [setValue]
  );

  return {
    value,
    onChange,
  };
}
