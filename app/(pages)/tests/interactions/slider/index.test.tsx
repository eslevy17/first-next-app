import {fireEvent, render, screen} from '@testing-library/react'
import Page from './page'
import '@testing-library/jest-dom'

describe('Page', () => {
    it('Moves the slider', () => {
        render(<Page />)
        const slider = screen.getByTitle<HTMLInputElement>('slider')
        const targetValue = '100'
        fireEvent.change(slider, {target: {value: targetValue}})
        expect(slider.value).toBe(targetValue)
    })
})