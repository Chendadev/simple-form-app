import { useState } from "react";
import '../components/FlavorForm.css';

const FlavorForm = () => {
    const [value, setValue] = useState("");

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleSubmit = event => {
        alert("Your favorite flavor is: " + value);
        event.preventDefault();
    };

    return (
        <div className="form-signUp">
            <form onSubmit={handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={value} onChange={handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FlavorForm;