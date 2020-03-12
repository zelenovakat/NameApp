import React, { useState } from "react"
import { people } from "./People"
import styled from "styled-components"
import "./App.css"
import useLocalStorage from "./UseLocalStoradge"

function startsWith(str, word) {
  return str.toLowerCase().lastIndexOf(word, 0) === 0
}

function App() {
  const [kids, setKids] = useState(people)
  const [favoriteKids, setFavoriteKids] = useState([])

  const handleOnClick = name => {
    console.log(favoriteKids)
    const updatedKids = [...favoriteKids, name]
    setFavoriteKids(updatedKids)
  }
  const mappedNameOfChildren = kids.map(favoriteKids => {
    return (
      <MainDiv
        key={favoriteKids.id}
        className={favoriteKids.sex === "boy" ? "gender-boy" : "gender-girl"}
        onClick={() => handleOnClick(favoriteKids)}>
        <StyledRow>{favoriteKids.name}</StyledRow>
      </MainDiv>
    )
  })
  const mappedFavoriteKids = favoriteKids.map(favoriteChild => {
    console.log(favoriteChild)
    return (
      <MainWrapper
        key={favoriteChild.id}
        className={favoriteChild.sex === "boy" ? "gender-boy" : "gender-girl"}>
        <StyledRow>{favoriteChild.name}</StyledRow>
      </MainWrapper>
    )
  })

  function handleChange(event) {
    const filteredPeople = people.filter(kid => {
      return startsWith(kid.name, event.target.value)
    })
    setKids(filteredPeople)
  }

  return (
    <>
      <StyledLable>Enter your name</StyledLable>
      <StyleInput name="name" defaultValue="" onChange={handleChange} />

      <MainWrapChildren>{mappedNameOfChildren}</MainWrapChildren>
      <Title>Favorite Name</Title>
      <MainWrapKids>{mappedFavoriteKids}</MainWrapKids>
    </>
  )
}

export default App

const MainWrapper = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  margin: 5px;
`
const MainWrapKids = styled.div`
  display: flex;
  margin: 10px;
  border: 2px double black;
  padding: 10px 5px;
  flex-wrap: wrap;
  margin-bottom: 50px;
`
const Title = styled.h2`
  display: flex;
  justify-content: center;
`
const StyledRow = styled.p`
  margin: 5px;
`
const MainWrapChildren = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const StyledLable = styled.h2`
  display: flex;
  justify-content: center;
`

const MainDiv = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  margin: 5px;
`
const StyleInput = styled.input`
  color: black;
  text-transform: uppercase;
  background: none;
  border: 3px solid black;
  padding: 20px;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  margin-left: 25px;
  margin-bottom: 10px;
  width: 80%;
`
