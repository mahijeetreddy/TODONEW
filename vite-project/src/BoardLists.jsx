import './BoardLists.css';

function BoardLists() {
    return (
        <>
            <div className="board-lists-container">
                <div className="card">
                    <h2>TO DO</h2>
                    <div className="task-container">
                        {/* Placeholder for tasks */}
                        <p>Task 1</p>
                        <p>Task 2</p>
                        <p>Task 3</p>
                        <p>Task 4</p>
                        <p>Task 5</p>
                        <p>Task 6</p>  
                        <p>Task 7</p>
                        <p>Task 8</p>
                        <p>Task 9</p>
                        <p>Task 10</p>
                        <p>Task 11</p>
                    </div>
                </div>
                <div className="card">
                    <h2>IN PROGRESS</h2>
                    <div className="task-container">
                        <p>Task 1</p>
                        <p>Task 2</p>
                    </div>
                </div>
                <div className="card">
                    <h2>FINISHED</h2>
                    <div className="task-container">
                        <p>Task 1</p>
                    </div>
                </div>
                <div className="card">
                    <h2>ADD CUSTOM TASKS</h2>
                    <div className="task-container">
                        <p>No tasks yet!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BoardLists;
