import {Container} from "@mui/material";
import GuestBook from "./UI/AppBar/GuestBook";

const App = () => {
    return (
        <>
            <header>
                <Container>
                    <GuestBook />
                </Container>
            </header>
            <main>
                <h1>Messages Form</h1>
                <h2>Messages</h2>
            </main>
        </>
    );
};

export default App;
