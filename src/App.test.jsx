import { render, screen } from "@testing-library/react";
import App from './App';


describe('App', () => {
    it('tests', () => {
        render(<App />);

        expect(screen.getByLabelText('Character Name')).toBeInTheDocument();
        // screen.debug();
    })
});
