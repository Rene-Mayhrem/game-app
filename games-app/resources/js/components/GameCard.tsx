import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

//? props value per game
interface Props {
    id?: string;
    name?: string;
    developer?: string;
    price?: number;
}

const GameCard: React.FC<Props> = ({ name, developer, price }: Props) => {
    const data = (
        <div className="col">
            <div className="card shadow-sm">
                <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                >
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        {name}
                    </text>
                </svg>
                <div className="card-body">
                    <p className="card-text">{developer}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Button
                                id="btn-delete"
                                children="Delete me"
                                color="danger"
                                onclick={() => {
                                    console.log("Deleted");
                                }}
                            ></Button>
                            <Button
                                id="btn-edit"
                                children="Update me"
                                color="warning"
                                onclick={() => {
                                    console.log("Deleted");
                                }}
                            ></Button>
                        </div>
                        <small className="text-body-secondary">
                            ${price}.00
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {name?.length !== 0 && data} <p></p>
        </div>
    );
};

document.querySelectorAll(".card").forEach((game) => {
    const props: Props = JSON.parse(game.getAttribute("data-props")!);
    ReactDOM.render(<GameCard {...props} />, game);
});

export default GameCard;
