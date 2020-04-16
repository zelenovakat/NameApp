import React, { useState } from "react"
import { people } from "./People"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import "./App.css"
import useLocalStorage from "./helper/components/UseLocalStoradge"

function startsWith(str, word) {
  return str.toLowerCase().lastIndexOf(word, 0) === 0
}

function App() {
  const [kids, setKids] = useState(people)

  const [favoriteKids, setFavoriteKids] = useLocalStorage("favoriteKids", [])

  const handleOnClick = (name) => {
    const updatedKids = [...favoriteKids, name]
    setFavoriteKids(updatedKids)
  }
  const removeFavoriteKids = (favoriteChildId) => {
    console.log(favoriteChildId)
    const favoriteKidsWithoutOne = favoriteKids.filter(
      (favoriteChild) => favoriteChild.id !== favoriteChildId
    )
    setFavoriteKids(favoriteKidsWithoutOne)
  }

  const mappedNameOfChildren = kids.map((favoriteKids) => {
    return (
      <MainDiv
        key={favoriteKids.id}
        className={favoriteKids.sex === "boy" ? "gender-boy" : "gender-girl"}
        onClick={() => handleOnClick(favoriteKids)}>
        <StyledRow>{favoriteKids.name}</StyledRow>
      </MainDiv>
    )
  })
  const mappedFavoriteKids = favoriteKids.map((favoriteChild) => {
    return (
      <MainWrapper
        key={favoriteChild.id}
        className={favoriteChild.sex === "boy" ? "gender-boy" : "gender-girl"}>
        <StyledRow>
          {favoriteChild.name}
          <Button onClick={() => removeFavoriteKids(favoriteChild.id)}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </Button>
        </StyledRow>
      </MainWrapper>
    )
  })

  function handleChange(event) {
    const filteredPeople = people.filter((kid) => {
      return startsWith(kid.name, event.target.value)
    })
    setKids(filteredPeople)
  }

  return (
    <>
      <StyledLable>Enter your name</StyledLable>
      <StyleInput name="name" defaultValue="" onChange={handleChange} />
      <Title>Favorite Name</Title>
      <MainWrapKids>{mappedFavoriteKids}</MainWrapKids>
      <MainWrapChildren>{mappedNameOfChildren}</MainWrapChildren>
    </>
  )
}

export default App
const Button = styled.button`
  font-size: 15px;
`

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
  margin: 3px;
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
