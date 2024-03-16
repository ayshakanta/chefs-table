import PropTypes from 'prop-types';

const Cook = ({ cook, handlePreparingButton}) => {
    const {recipe_id, recipe_name, preparing_time, calories } = cook
    return (
        <tr>
            {/* row */}
            <td>{recipe_id}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
            <td><button onClick={() =>handlePreparingButton(preparing_time, calories)}>Preparing</button></td>
        </tr>




    );
};

Cook.propTypes = {
    cook: PropTypes.object.isRequired,
    handlePreparingButton: PropTypes.func.isRequired
}
export default Cook;