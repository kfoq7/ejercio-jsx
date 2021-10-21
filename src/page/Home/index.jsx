import { useState } from 'react';

const Home = () => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }
    return (
        <div>
            <h1>Home</h1>
            <h1>Home</h1>
            <button onClick={handleShow} > Mostrar</button>
            <br />
            {
                show && (
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DD9avX-jtIPM&psig=AOvVaw2mimbpJjYZVO4pfWciWVd9&ust=1634865101207000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPipovSo2vMCFQAAAAAdAAAAABAD" alt="" />
                )
            }
        </div>
    )
}

export default Home