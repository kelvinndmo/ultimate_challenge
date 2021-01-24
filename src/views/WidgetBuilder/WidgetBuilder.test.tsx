import React from 'react';
import { mount } from 'enzyme';
import WidgetBuilder from './WidgetBuilder';

describe('Widget Builder Component', () => {
  const WidgetBuilderComponent = mount(<WidgetBuilder />);
  it('should render the widget builder component', () => {
    expect(WidgetBuilderComponent).toMatchSnapshot();
  });

  it('should set selected card on selection', () => {
    const checkbox = WidgetBuilderComponent.find('#check-all-cards').first();
    checkbox.simulate('click');

    const cardChip = WidgetBuilderComponent.find('#card-chip-widget').first();
    cardChip.simulate('click');
  });

  it('should set selected card on selection', () => {
    const cardChip = WidgetBuilderComponent.find('#card-chip-widget').first();
    cardChip.simulate('click');
  });
});
