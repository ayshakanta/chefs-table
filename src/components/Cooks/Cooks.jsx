import PropTypes from 'prop-types';
import Cook from '../Cook/Cook';

const Cooks = ({ cooks, handlePreparingButton , totalCalories , totalTime}) => {
    return (
        <div className="mb-10 w-96">
            <h1 className='font-semibold text-2xl p-4 items-center text-center'>Want to cook: {cooks.length} </h1>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        cooks.map(cook => <Cook
                            key={cook.recipe_id}
                            handlePreparingButton={handlePreparingButton}
                            cook={cook}
                            totalTime = {totalTime}
                            totalCalories = {totalCalories}
                        ></Cook>)
                    }
                   
                </tbody>
            </table>
        </div>
    );
};


Cooks.propTypes = {
    cooks: PropTypes.any.isRequired,
    handlePreparingButton: PropTypes.func.isRequired,
    totalCalories: PropTypes.number,
    totalTime: PropTypes.number
}
export default Cooks;