import {useState} from 'react'

import {Heading, Para, ListItem} from './styledComponents'

const NoteItem = props => {
  const {noteItem} = props
  const {title, description} = noteItem

  return (
    <ListItem>
      <Heading>{title}</Heading>
      <Para>{description}</Para>
    </ListItem>
  )
}

export default NoteItem
