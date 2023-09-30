import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
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
  NotesList,
  Para,
  TextArea,
} from './styledComponents'

const Notes = () => {
  const [notes, setNotes] = useState('')

  const [description, setDescription] = useState('')

  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setNotes(event.target.value)
  }

  const onChangeDescription = event => {
    setDescription(event.target.value)
  }

  const onClickAddBtn = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      notes,
      description,
    }
    setNotesList(prevState => [...prevState, newNotes])
    setNotes('')
    setDescription('')
  }

  return (
    <>
      <GlobalStyle />
      <BgContainer>
        <TopHeading>Notes</TopHeading>
        <FormContainer>
          <Input
            type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={notes}
          />
          <TextArea
            type="text"
            placeholder="Take a Note..."
            onChange={onChangeDescription}
            value={description}
          />
          <Btn type="submit" onClick={onClickAddBtn}>
            Add
          </Btn>
        </FormContainer>
        {notesList.length === 0 ? (
          <EmptyViewContainer>
            <Image
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
              className="empty-view"
            />
            <Heading>No Notes Yet</Heading>
            <Para>Notes you add will appear here</Para>
          </EmptyViewContainer>
        ) : (
          <NotesList>
            {notesList.map(each => (
              <NoteItem noteItem={each} key={each.id} />
            ))}
          </NotesList>
        )}
      </BgContainer>
    </>
  )
}
export default Notes
