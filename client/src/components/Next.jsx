import React from 'react';
import MidgameQuestionaire from './MidgameQuestionaire'; // Adjust the import path as necessary

function Next() {
    // Define the next function that handles what happens after the questionnaire
    const handleNext = () => {
        console.log("Questionnaire completed!");
        // Additional actions can be placed here, like navigation or state updates
    };

    return (
        <div>
            <h1>Parent Component</h1>
            {/* Pass the handleNext function to the MidgameQuestionaire component */}
            <MidgameQuestionaire next={handleNext} />
        </div>
    );
}

export default Next;
