import {useState} from 'react'

import {Heading, Para, ListItem} from './styledComponents'

const NoteItem = props => {
  const {noteItem} = props
  const {notes, description} = noteItem

  return (
    <ListItem>
      <Heading>{notes}</Heading>
      <Para>{description}</Para>
    </ListItem>
  )
}

export default NoteItem
