import React from 'react';

export const setWhyDidYouRender = async (): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React, {
      trackAllPureComponents: true,
      include: [/.*/],
    });
  }
};

setWhyDidYouRender();