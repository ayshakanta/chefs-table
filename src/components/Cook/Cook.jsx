import PropTypes from 'prop-types';

const Cook = ({ cook }) => {
    const { recipe_name, preparing_time, calories } = cook
    return (
        <tr>
            {/* row */}
            <th>1</th>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
            <td><button>Preparing</button></td>
        </tr>




    );
};

Cook.propTypes = {
    cook: PropTypes.object.isRequired
}
export default Cook;