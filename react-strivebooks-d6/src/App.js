import "./App.css";
// import MyBadge from "./Components/MyBadge";
// import SingleBook from "./Components/SingleBook";
// import WarningSign from "./Components/WarningSign";
import history from "..//src/books/history.json";
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div class="container-fluid">
      {/* <WarningSign text="your books available" variant="danger" />
        <MyBadge text="whatever" color="primary" /> */}

      {/* <SingleBook book={history[0]} /> */}
      <BookList books={history} />
    </div>
  );
}

export default App;
