
import PropTypes from 'prop-types';
import Making from '../Making/Making';


const CurrentlyCooking = ({totalCalories , totalTime, currentlyCooking  }) => {


    return (
        <div>
            <h1 className='font-semibold text-2xl p-3 items-center text-center'>Currently Cooking: {currentlyCooking.length} </h1>
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
                       currentlyCooking.map(making => <Making
                       key={making.recipe_id}
                       making = {making}
                       ></Making>)
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
    totalTime: PropTypes.number,
    currentlyCooking: PropTypes.array

}

export default CurrentlyCooking;