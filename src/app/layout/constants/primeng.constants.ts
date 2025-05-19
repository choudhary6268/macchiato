export const buttonDesignTokens = {
    primary: {
      borderColor: 'red',
      background: 'red',
      color: 'blue',
      hover: {
        background: 'pink',
        borderColor: 'pink',
      },
      active: {
        background: 'green',
        borderColor: 'green',
      },
      selected: {
        background: 'black',
        borderColor: 'black',
      }
    },
    secondary: {
      borderColor: '#D9D8D6',
      background: '#FAFAFA',
      color: '#202020',
      hover: {
        background: '{primary.500}',
        borderColor: '{primary.500}',
        color: '{neutral.white}',
      },
      active: {
        background: '{primary.500}',
        borderColor: '{primary.500}',
        color: '{neutral.white}',
      },
    },
  };

  export const selectDesignTokens = {
    borderColor: 'red',
    hoverBorderColor: 'blue',
    focusBorderColor: 'black',
    optionSelectedBackground: 'green',
    optionSelectedFocusBackground: 'green',
    optionGroupBackground: 'green',
    optionGroupColor: 'yellow',
    optionSelectedColor: 'red',
    optionSelectedFocusColor: 'red',
  };
