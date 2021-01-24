import React from 'react';
import { mount } from 'enzyme';
import CardChip from './CardChip';

const intent = {
  id: '34d7831e137a4016a55f98926800a643',
  name: 'Greeting',
  description: 'The user says hello.',
  trainingData: {
    expressionCount: 170,
    expressions: [
      {
        id: '6399fd6989984c7b871c6301744b0af5',
        text: 'Hello',
      },
      {
        id: '68bafebc2a2e4843a56a221c2ceb12ed',
        text: 'Hi',
      },
      {
        id: 'b2a3208dc801432992812638368e0668',
        text: 'Good morning!',
      },
    ],
  },
  reply: {
    id: 'f35d7e0936a44102bac9cb96c81eec3b',
    text: 'Hello :) How can I help you?',
  },
};

describe('CardChip Component', () => {
  const selectCard = jest.fn();
  const unSelectCard = jest.fn();

  let CardChipComponent = mount(
    <CardChip
      id="1"
      intent={intent}
      isCardSelected
      onSelectCard={selectCard}
      unSelectCard={unSelectCard}
    />
  );
  it('should render the Card Chip component', () => {
    expect(CardChipComponent).toMatchSnapshot();
  });

  it('should call unselect when chip is clicked', () => {
    const chip = CardChipComponent.find('#card-chip').first();
    chip.simulate('click');
    expect(unSelectCard).toHaveBeenCalled();
  });

  it('should call selectcard when isCardSelected is false', () => {
    CardChipComponent = mount(
      <CardChip
        id="1"
        intent={intent}
        isCardSelected={false}
        onSelectCard={selectCard}
        unSelectCard={unSelectCard}
      />
    );
    const chip = CardChipComponent.find('#card-chip').first();
    chip.simulate('click');
    expect(selectCard).toHaveBeenCalled();
  });
});
