import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import PrimaryButton from './PrimaryButton'
//import { shallow } from 'enzyme';

test("button renders without crashing", () => {
    render(<PrimaryButton text={'Sign up'} />)
    expect(screen.getByText('Sign up')).toHaveTextContent('Sign up')
})

test("button renders without crashing", () => {
    render(<PrimaryButton text={'Sign in'} />)
    expect(screen.getByText('Sign in')).toHaveTextContent('Sign in')
})


  test('loads and displays greeting', async () => {
    const handleClick = jest.fn();
    render(<PrimaryButton text={'Sign in'} callBack={handleClick}/>);
    fireEvent.click(screen.getByText('Sign in'));
    expect(handleClick).toHaveBeenCalledTimes(1)
  })