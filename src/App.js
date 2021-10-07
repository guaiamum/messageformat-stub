import "./styles.css";
import {
  Message,
  MessageProvider,
  useMessageGetter
} from "@messageformat/react";

const messages = {
  message: "Your message is important",
  answers: {
    sixByNine: ({ base }) => (6 * 9).toString(base),
    universe: 42
  }
};

const Equality = () => {
  const getAnswer = useMessageGetter("answers");
  const foo = getAnswer("sixByNine", { base: 13 });
  const bar = getAnswer("universe");
  return `${foo} and ${bar} are equal`;
};

export default function App() {
  return (
    <MessageProvider messages={messages}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Equality />
      </div>
    </MessageProvider>
  );
}
