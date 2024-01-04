import { useState } from "react";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const submitApplication = () => {
        console.log(firstName ?? "", lastName ?? "", email ?? "");
    };

    return (
        <section>
            <h2 className={styles.sectionHeading}>Apply now to live here</h2>
            <form>
                <label>First Name</label>
                <input
                    id="first-name"
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />

                <label>Last Name</label>
                <input
                    id="last-name"
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />

                <label>Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <button
                    type="submit"
                    className={styles.primary}
                    onClick={submitApplication}
                >
                    Apply now
                </button>
            </form>
        </section>
    );
};
