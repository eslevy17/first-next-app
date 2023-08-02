import { render, screen } from '@testing-library/react'
import Page from './page'
import '@testing-library/jest-dom'

describe('Page', () => {
    it('Finds all the inputs', () => {
        render(<Page />)
        const textInput = screen.getByRole('textbox', { name: /text/i} )
        const numberInput = screen.getByRole('spinbutton', { name: /number/i} )
        const date = screen.getByLabelText(/date/i)
        const time = screen.getByLabelText(/time/i)
        const submitButton = screen.getByRole('button', { name: /submit/i})
    })
})