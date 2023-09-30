// Style your elements here
import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *:focus{
        outline:none;
    }


`

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`

export const TopHeading = styled.h1`
  font-family: 'Bree Serif';
  color: #475569;
`

export const FormContainer = styled.form`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px #aab8c8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  height: 300px;
  margin-bottom: 30px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  border: none;
`

export const Label = styled.label`
  font-family: 'Roboto';
  color: #475569;
  margin-bottom: 8px;
`

export const Input = styled.input`
  background-color: transparent;

  padding: 10px;
  border: none;
`

export const TextArea = styled.textarea`
  background-color: transparent;

  padding: 10px;
  border: none;
`

export const Btn = styled.button`
  background-color: #4c64b6;
  padding: 10px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
  border: none;
`

export const EmptyViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
`

export const Image = styled.img`
  width: 40%;
  margin-bottom: 30px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: black;
`

export const Para = styled.p`
  font-family: 'Roboto';
`
export const NotesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px;
  width: 65%;
`
