// import Making from "../Making/Making";
import PropTypes from 'prop-types';


const CurrentlyCooking = ({totalCalories , totalTime  }) => {


    return (
        <div>
            <h1 className='font-semibold text-2xl p-4 items-center text-center'>Currently Cooking: {0} </h1>
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
                    {
                        // cooks.map(cook => <Making
                        //     key={cook.recipe_id}
                        //     handlePreparingButton = {handlePreparingButton}
                        // cook = {cook}
                        // ></Making>) 
                       
                    }
                </tbody>
            </table>

            <div className=" p-4 flex gap-5"> 
                <p>Total Time= 
                    <br /><span>{totalTime} minutes</span></p>
                <p>Total Calories= 
                    <br /><span>{totalCalories} calories</span></p>
            </div>
            
        </div>
    );
};

CurrentlyCooking.propTypes = {
    totalCalories: PropTypes.number,
    totalTime: PropTypes.number

}

export default CurrentlyCooking;