import React from 'react';

import './app-error.scss';

export default function AppError({ error }) {
  if (!error) return null;
  return <p className="error-form anime-in">{error.message}</p>;
}
