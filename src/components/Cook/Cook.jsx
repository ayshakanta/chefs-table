import PropTypes from 'prop-types';

const Cook = ({ cook, handlePreparingButton}) => {
    const {recipe_id, recipe_name, preparing_time, calories } = cook
    return (
        <tr className='bg-[#28282808]'>

            {/* row */}
            <td>{recipe_id}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
            <td><button
            className='bg-[#0BE58A] font-medium px-3 py-2 rounded-full' 
            onClick={() =>handlePreparingButton(cook)}
            >Preparing</button></td>
        </tr>




    );
};

Cook.propTypes = {
    cook: PropTypes.object.isRequired,
    handlePreparingButton: PropTypes.func.isRequired
}
export default Cook;