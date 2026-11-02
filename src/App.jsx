import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { searchTatoebaSentences } from "./utils/tatoebaApi";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import VocabularyPage from "./components/VocabularyPage/VocabularyPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [sentences, setSentences] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSearch(event) {
    event.preventDefault();

    const searchTerm = word.trim();
    if (!searchTerm) return;

    setStatus("loading");
    setErrorMessage("");
    setSentences([]);
    setVisibleCount(3);

    try {
      const results = await searchTatoebaSentences(searchTerm);
      setSentences(results);
      setStatus(results.length > 0 ? "success" : "empty");
    } catch (error) {
      setErrorMessage(error.message);
      setStatus("error");
    }
  }

  function handleShowMore() {
    setVisibleCount((count) => count + 3);
  }

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route
          path="/vocabulary"
          element={
            <VocabularyPage
              word={word}
              onWordChange={setWord}
              onSearch={handleSearch}
              sentences={sentences}
              visibleCount={visibleCount}
              onShowMore={handleShowMore}
              status={status}
              errorMessage={errorMessage}
            />
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
