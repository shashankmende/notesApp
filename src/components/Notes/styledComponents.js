// Style your elements here
import styled, {createGlobalStyle} from './styledComponents'

export const GlobalStyle = createGlobalStyle`
    *:focus{
        outline:none;
    }


`

export const BgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  box-shadow: #aab8c8;
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-family: 'Roboto';
  color: #475569;
  margin-bottom: 8px;
`

export const Input = styled.input`
  background-color: transparent;

  padding: 10px;
`

export const Btn = styled.button`
  background-color: #4c64b6;
  padding: 10px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
`

export const EmptyViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
`

export const Image = styled.img`
  width: 100;
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
  width: 80%;
`
