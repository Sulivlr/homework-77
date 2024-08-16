import {Container} from "@mui/material";
import GuestBar from "./UI/AppBar/GuestBar";
import Messages from "./features/Messages";

const App = () => {
    return (
        <>
            <header>
                <GuestBar/>
            </header>
            <main>
                <Container maxWidth="xl">
                    <h1>Messages Form</h1>
                    <Messages/>
                </Container>
            </main>
        </>
    );
};

export default App;
