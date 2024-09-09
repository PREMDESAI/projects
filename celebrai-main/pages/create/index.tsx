import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  query,
  orderBy,
} from "firebase/firestore";

import styles from "../styles/Home.module.css";
import { firebaseDb } from "../_app";

const Create: NextPage = () => {
  const [numberInput, setNumberInput] = useState<number>();
  const [titleInput, setTitleInput] = useState<string>("");
  const [contentInput, setContentInput] = useState<string>("");

  const setNumber = (event: any) => {
    setNumberInput(Number(event.target.value));
  };
  const setTitle = (event: any) => {
    setTitleInput(event.target.value);
  };
  const setContent = (event: any) => {
    setContentInput(event.target.value);
  };

  const makeid = (length: number) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const insert = async () => {
    await setDoc(doc(firebaseDb, "songs", makeid(20)), {
      album: "celebrai",
      number: numberInput,
      title: titleInput,
      content: contentInput,
    });
    alert("Salvo");
    setTitleInput("");
    setContentInput("");
  };

  return (
    <>
      <main>
        <section className="hero is-medium is-success">
          <div className="hero-body">
            <div className="container">
              <p className="title">Celebrai IELB</p>
              <p className="subtitle">Inserir música.</p>
            </div>
          </div>
        </section>
        {/* <section className="container py-4 px-4">
          <div className="field">
            <div className="control is-medium">
              <input className="input is-medium" type="text" placeholder="Número" value={numberInput} onChange={setNumber} />
            </div>
          </div>
          <div className="field">
            <div className="control is-medium">
              <input className="input is-medium" type="text" placeholder="Título" value={titleInput} onChange={setTitle} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea className="textarea is-medium" placeholder="Letra" value={contentInput} onChange={setContent}></textarea>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" onClick={insert}>Salvar</button>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default Create;
