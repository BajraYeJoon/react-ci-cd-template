import {expect, test} from 'vitest';
import {screen, render, fireEvent} from '@testing-library/react';
import App from '../App';

test('default Page', () => {

    render(<App />);
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');

    expect(viteLogo).toHaveProperty('src', 'httsp://vitejs.dev');

    expect(reactLogo).toHaveProperty('src', 'https:react.dev');
   
    // Button click

    const buttonClick = screen.getByRole('button');

    fireEvent.click(buttonClick);

    expect(buttonClick).toHaveLength(1);
   

    
});
