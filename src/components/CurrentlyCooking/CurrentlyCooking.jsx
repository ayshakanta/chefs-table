import Making from "../Making/Making";



const CurrentlyCooking = ({totalCalories , totalTime}) => {
    return (
        <div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    <Making></Making>
                </tbody>
            </table>

            <div>
                <p>Total Time= <span>{totalTime} minutes</span></p>
                <p>Total Calories= <span>{totalCalories} calories</span></p>
            </div>
            
        </div>
    );
};

export default CurrentlyCooking;