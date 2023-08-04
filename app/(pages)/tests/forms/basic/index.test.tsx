import {fireEvent, render, screen} from '@testing-library/react'
import Page from './page'
import '@testing-library/jest-dom'

describe('Page', () => {
    it('Updates the text input', () => {
        render(<Page />)
        const textInput = screen.getByRole<HTMLInputElement>('textbox', { name: /text/i} )
        const desiredText = 'add some text'
        fireEvent.change(textInput, {target: {value: desiredText}})
        expect(textInput.value).toBe(desiredText)
    })
})

describe('Page', () => {
    it('Updates the number input', () => {
        render(<Page />)
        const numberInput = screen.getByRole<HTMLInputElement>('spinbutton', { name: /number/i} )
        const desiredNumber = '23'
        fireEvent.change(numberInput, {target: {value: desiredNumber}})
        expect(numberInput.value).toBe(desiredNumber)
    })
})

describe('Page', () => {
    it('Updates the date input', () => {
        render(<Page />)
        const dateInput = screen.getByLabelText<HTMLInputElement>(/date/i)
        const desiredDate = '2020-05-24'
        fireEvent.change(dateInput, {target: {value: desiredDate}})
        expect(dateInput.value).toBe(desiredDate)
    })
})

describe('Page', () => {
    it('Updates the time input', () => {
        render(<Page />)
        const timeInput = screen.getByLabelText<HTMLInputElement>(/time/i)
        const desiredTime = '10:30:28'
        fireEvent.change(timeInput, {target: {value: desiredTime}})
        expect(timeInput.value).toBe(desiredTime)
    })
})

describe('Page', () => {
    it('Clicks the submit button', () => {
        render(<Page />)
        const submitButton = screen.getByRole<HTMLButtonElement>('button', { name: /submit/i})
        fireEvent.click(submitButton)
    })
})