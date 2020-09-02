import React from "react";
import MainStructure from '../components/structure/MainStructure';
import InsertForm from "../components/notes/InsertForm";
import NoteWrapper from "../components/notes/NoteWrapper";

const Main = () => {
  return (
    <MainStructure>
      <NoteContainer />
    </MainStructure>
  );
};

export default Main;
