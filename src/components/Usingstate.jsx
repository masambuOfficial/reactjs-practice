import { useState } from "react";

function Usingstate() {
        // isSubmitted
        let [isSubmitted, setIsSubmitted] = useState(false);

        // name, email, profile
        let [name, setName] = useState("");
        let [email, setEmail] = useState("");
        let [profile, setProfile] = useState("");

        function handleChange(e, stateUpdater) {
            e.preventDefault();
            let inputValue = e.target.value;
            stateUpdater(inputValue);
        }
        function handleSubmit() {
            if (email && name && profile) {
            setIsSubmitted(true);
            } else {
            alert("All fields are required!!");
            }
        }
        function resetState() {
            setIsSubmitted(false);
            setEmail("");
            setName("");
            setProfile("");
        }
  return (
        <div>
            {isSubmitted ? (
                <section
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    height: "100dvh",
                }}
                >
                <div>
                    <img
                    style={{
                        borderRadius: "5px",
                    }}
                    src={profile}
                    alt="HeadShot"
                    width={200}
                    />
                    <h1>{name}</h1>
                    <p>{email}</p>
                    <button onClick={resetState}>Reset</button>
                </div>
                </section>
            ) : (
                <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100dvh",
                }}
                >
                <form action="#">
                    <label htmlFor="fullname">FullName</label>
                    <br />
                    <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={name}
                    onChange={function (e) {
                        handleChange(e, setName);
                    }}
                    />
                    <br />
                    <br />
                    <label htmlFor="fullname">Email</label>
                    <br />
                    <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={function (e) {
                        handleChange(e, setEmail);
                    }}
                    />
                    <br />
                    <br />
                    <label htmlFor="fullname">Profile Image</label>
                    <br />
                    <input
                    type="text"
                    name="profile"
                    id="profile"
                    value={profile}
                    onChange={function (e) {
                        handleChange(e, setProfile);
                    }}
                    />
                    <br />
                    <br />
                    <button type="submit" onClick={handleSubmit}>
                    Submit
                    </button>
                </form>
                </div>
            )}
        </div>
  );
}

export default Usingstate;
