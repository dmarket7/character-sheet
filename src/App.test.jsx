import { render, screen } from "@testing-library/react";
import App from './App';


describe('App', () => {
    it('tests', () => {
        render(<App />);

        expect(screen.getByLabelText('Character Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Class & Level')).toBeInTheDocument();
        expect(screen.getByLabelText('Background')).toBeInTheDocument();
        expect(screen.getByLabelText('Player Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Alignment')).toBeInTheDocument();
        expect(screen.getByLabelText('Experience Points')).toBeInTheDocument();
        // screen.debug();
    })
});
