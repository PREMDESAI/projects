import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Script from "next/script";
import { firebaseDb } from "./_app";

const Home: NextPage = ({ songs }: any) => {
  const [filteredSongs, setFilteredSongs] = useState<any[]>([]);
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const searchSongs = useCallback(
    (event?: any) => {
      const search = event?.target.value || "";
      setSearchInputValue(search);
      setFilteredSongs(
        songs.filter((song: any) => {
          return (
            song.title.toLowerCase().includes(search.toLowerCase()) ||
            song.content.toLowerCase().includes(search.toLowerCase()) ||
            song.number == search
          );
        })
      );
    },
    [songs]
  );

  useEffect(() => {
    searchSongs();
  }, [searchSongs, songs]);

  return (
    <>
      <main>
        <section className="hero is-medium is-success">
          <div className="hero-body">
            <div className="container">
              <p className="title">Celebrai IELB</p>
              <p className="subtitle">
                Encontre uma das {songs.length} músicas.
              </p>
              <div className="field">
                <div className="control is-medium">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Procure pela música..."
                    value={searchInputValue}
                    onChange={searchSongs}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-4 px-4">
          {filteredSongs.map((song) => (
            <div className="card mt-5" key={song.number}>
              <header className="card-header">
                <p className="card-header-title">
                  {song.number}. {song.title}
                </p>
              </header>
              <div className="card-content">
                <p style={{ whiteSpace: "pre-line" }}>
                  {song.content.replace(/\\n/g, "\n")}
                </p>
              </div>
            </div>
          ))}
          {!filteredSongs.length && (
            <section className="hero is-large">
              <div className="hero-body has-text-centered">
                <p className="icon is-large">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x fa-inverse"></i>
                    <i className="fas fa-slash fa-stack-1x"></i>
                    <i className="fas fa-music fa-stack-1x"></i>
                  </span>
                </p>
                <p className="subtitle">Não encontramos nenhuma música.</p>
              </div>
            </section>
          )}
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="level">
            <div className="level-item">
              <p>
                Feito com <i className="fas fa-heart has-text-danger op-1"></i>{" "}
                por Hildor
              </p>
            </div>
            <div className="level-item">
              <p>
                <a
                  target="_blank"
                  href="https://blog.hildor.com.br"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <i className="fa fa-rss-square"></i>
                  </span>
                  Blog
                </a>
              </p>
            </div>
            <div className="level-item">
              <p>
                <a
                  target="_blank"
                  href="mailto:oi@hildor.com.br"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  Email
                </a>
              </p>
            </div>
            <div className="level-item">
              <p>
                <a
                  target="_blank"
                  href="https://github.com/hildorjr"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  GitHub
                </a>
              </p>
            </div>
            <div className="level-item">
              <p>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/hildor"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Script
        src="https://kit.fontawesome.com/2796ccc163.js"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
};

export async function getStaticProps() {
  const songsRef = collection(firebaseDb, "songs");
  const querySnapshot = await getDocs(
    query(songsRef, orderBy("number", "desc"))
  );
  const songs: any[] = [];
  querySnapshot.forEach((doc) => {
    const song = doc.data();
    song.open = false;
    songs.unshift(song);
  });

  return {
    props: {
      songs,
    },
    revalidate: 86400, // 1 day
  };
}

export default Home;
