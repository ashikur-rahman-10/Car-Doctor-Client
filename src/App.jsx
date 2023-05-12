import { useState } from "react";

import "./App.css";
import { Button } from "react-daisyui";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Button>Hello</Button>
        </>
    );
}

export default App;
