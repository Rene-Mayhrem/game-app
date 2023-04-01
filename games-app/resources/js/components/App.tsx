import React from "react";
import Button from "./Button";

interface Props {
    name: string;
}

const App = ({ name }: Props) => {
    return (
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Game Application</h1>
                        <p className="lead text-body-secondary">
                            Created by {name}
                        </p>
                        <Button
                            id="create-modal"
                            children="Create new Game"
                            color="success"
                            onclick={() => {
                                console.log("clicked");
                            }}
                        ></Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default App;
