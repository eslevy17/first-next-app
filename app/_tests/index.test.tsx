import { render, screen } from '@testing-library/react'
import Home from '../page'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('Confirms first line text', () => {
        const lineText: string = 'Starting my first Next.js page'
        render(<Home />)

        const firstLine = screen.getByText(lineText)

        expect(firstLine.innerHTML).toBe(lineText)
    })
})