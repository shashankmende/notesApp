import {useState} from 'react'
import {v4 as uuidv4 } from 'uuid'
import NoteItem from '../NoteItem'
import {
  GlobalStyle,
  BgContainer,
  Heading,
  FormContainer,
  Input,
  Btn,
  EmptyViewContainer,
    Image,
    TopHeading,
    NotesList
} from './styledComponents'

const Notes = () => {
  const [notes, setNotes] = useState({title: '', description: ''})

  const [notesList, setNotesList] = useState([])

  const onChangeTitle= (event)=>{
      setNotes(prevState=>{
          title: event.target.value,
          description: prevState.description
      })
  }

  const onChangeNote = (event)=>{
      setNotes(prevState=>{
          title: prevState.title,
          description: event.target.value
      })
  }

  const onSubmitAdd= ()=>{
      const newNotes = {
          id: uuidv4(),
          notes
      }
      setNotesList(prevState=>[...prevState,newNotes])
  }

  return (
    <>
      <GlobalStyle />
      <BgContainer>
        <TopHeading>Notes</TopHeading>
        <FormContainer onSubmit={onSubmitAdd}>
          <Input type="text" placeholder="Title" onChange={onChangeTitle}/>
          <Input type="text" placeholder="Take a Note..." />
          <Btn type='submit'>Add</Btn>
        </FormContainer>
        { notesList.length === 0 ? (<EmptyViewContainer>
            <Image src='https://assets.ccbp.in/frontend/hooks/empty-notes-img.png' alt='notes empty'/>
            <Heading>No Notes Yet</Heading>
            <Para>Notes you add will appear here</Para>
        </EmptyViewContainer>):(<NotesList>
            (notesList.map(each=><NoteItem noteItem={each} key={each.id})/>)
        </NotesList>)
        }
      </BgContainer>
    </>
  )
}
export default Notes
