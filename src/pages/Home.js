import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [roomId, setRoomId] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);

        toast.success("Room created successfully");
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error("Please enter room id and username");
            return;
        }

        //Redirect after join
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            joinRoom();
        }
    };

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src="/code-sync.png"
                    alt="code-sync-logo"
                />
                <h4 className="mainLabel"> Paste invitation ROOM ID </h4>

                <div className="inputGroup">
                    <input
                        type="text"
                        placeholder="ROOM ID"
                        className="inputBox"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                        onKeyUp={handleEnter}
                    />{" "}
                    <input
                        type="text"
                        placeholder="USERNAME"
                        className="inputBox"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleEnter}
                    />{" "}
                    <button className="joinBtn btn" onClick={joinRoom}>
                        {" "}
                        Join{" "}
                    </button>
                    <span className="createInfo">
                        {" "}
                        If you don 't have an invite then create &nbsp;{" "}
                        <a onClick={createNewRoom} href="" className="createNewBtn">
                            new room{" "}
                        </a>{" "}
                    </span>{" "}
                </div>
            </div>
            <footer>
                <h4>
                    {" "}
                    Built with💛 by & nbsp;{" "}
                    <a
                        href="https://github.com/kaushikd-coder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        Kaushik{" "}
                    </a>{" "}
                </h4>{" "}
            </footer>{" "}
        </div>
    );
};

export default Home;
