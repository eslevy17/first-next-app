import {fireEvent, render, screen} from '@testing-library/react'
import Page from './page'
import '@testing-library/jest-dom'

describe('Page', () => {
    it('Finds the heading', () => {
        render(<Page />)

        const lineText = 'Testing Button Clicks'
        const firstLine = screen.getByText(lineText)
        expect(firstLine.innerHTML).toBe(lineText)
    })

    it('Increments the counter to 5', () => {
        render(<Page />)

        const plusButton = screen.getByTitle('plus')
        const counter = screen.getByTitle('count')

        for (let i = 0; i < 5; i++) {
            fireEvent.click(plusButton)
        }

        expect(counter.innerHTML).toBe('5')
    })

    it('Increments the counter to 5 then subtracts 2', () => {
        render(<Page />)

        const plusButton = screen.getByTitle('plus')
        const minusButton = screen.getByTitle('minus')
        const counter = screen.getByTitle('count')

        for (let i = 0; i < 5; i++) {
            fireEvent.click(plusButton)
        }

        expect(counter.innerHTML).toBe('5')

        for (let i = 0; i < 2; i++) {
            fireEvent.click(minusButton)
        }

        expect(counter.innerHTML).toBe('3')
    })

    it('Decrements to -2', () => {
        render(<Page />)

        const minusButton = screen.getByTitle('minus')
        const counter = screen.getByTitle('count')

        for (let i = 0; i < 2; i++) {
            fireEvent.click(minusButton)
        }

        expect(counter.innerHTML).toBe('-2')
    })
})