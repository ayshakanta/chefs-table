import PropTypes from 'prop-types';

const Making = ({making}) => {
    const {recipe_id, recipe_name, preparing_time, calories} = making
    return (
        <tr className='bg-[#28282808]'>

            {/* row */}
            <td>{recipe_id}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time} minutes</td>
            <td>{calories} calories</td>
        
            
        </tr>
    );
};

Making.propTypes = {
    making: PropTypes.object.isRequired
}

export default Making;