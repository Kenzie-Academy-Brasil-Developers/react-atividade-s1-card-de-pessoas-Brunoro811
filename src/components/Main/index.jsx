import "./style.css";
import "../Developer";
import CardPerson from "../Developer";

const Main = () => {
  return (
    <main className="Main">
      <CardPerson name="Bruno" age="24 anos" country="Brasil" />
      <CardPerson name="Igor" age="27 anos" country="Brasil" />
      <CardPerson name="Rafael" age="28 anos" country="Brasil" />
    </main>
  );
};
export default Main;
