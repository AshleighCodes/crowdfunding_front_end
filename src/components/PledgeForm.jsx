// FOR ASH NEW

import { useState } from "react";
import postPledge from "../api/post-pledge.js";


function PledgeForm(props) {
    const { projectId } = props;
    const [pledgeData, setPledgeData] = useState({
        amount: "",
        comment: "",
        anonymous: false,
    });
    
    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        setPledgeData((prevPledgeData) => ({
            ...prevPledgeData,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

        const handleSubmit = async (event) => {
            event.preventDefault();

            const { amount, comment, anonymous } = pledgeData;
            console.log("Submitted pledgeData:", pledgeData);
            
            if (amount && projectId) {
                try {
                    await postPledge(amount, comment, anonymous, projectId);
                    alert("Pledge created successfully!");
                    setPledgeData({
                        amount: "",
                        comment: "",
                        anonymous: false,
                    });
                } catch (error) {
                    console.error("Error during pledge creation:", error.message);
                }
            } else {
                alert("Amount and Project ID are required!");
            }
        };

        return (
            <form onSubmit={handleSubmit}>  
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input
                    type="number"
                    id="amount"
                    step="1"
                    placeholder="Enter pledge amount"
                    value={pledgeData.amount}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                    id="comment"
                    placeholder="Enter a comment (optional)"
                    value={pledgeData.comment}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="anonymous">
                        <input
                        type="checkbox"
                        id="anonymous"
                        checked={pledgeData.anonymous}
                        onChange={handleChange}
                        />
                        Pledge anonymously
                        </label>
                </div>
            <button type="submit">Create Pledge</button>
        </form>
    );
}

export default PledgeForm;