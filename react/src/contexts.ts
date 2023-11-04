import constate from 'constate';
import React from 'react';

export const [DrawerProvider, useDrawerContext] = constate(() => {
  return React.useState(true);
});
