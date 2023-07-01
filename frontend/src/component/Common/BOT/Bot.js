import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const steps = [
  {
    id: "0",
    message: "Welcome to ECE Society! write your name?",
    trigger: "1",
  },
  {
    id: "1",
    user: true,
    trigger: "2",
  },
  {
    id: "2",
    message:
      " hi {previousValue}, Thank you for visiting our website ! Please Visit our Events Sections. Do you want to know more about our society ?",
    trigger: 3,
  },
  {
    id: "3",
    user: true,
    end: true,
  },
];

// Creating our own theme
const theme = {
  background: "#064a7a",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

// Set some properties of the bot
const config = {
  botAvatar: "/assets/img/Bot.png",
  floating: true,
};


export default function Bot() {
  return (
    <>
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="Need help!" steps={steps} {...config} />
      </ThemeProvider>
    </div>
    </>
  )
}
