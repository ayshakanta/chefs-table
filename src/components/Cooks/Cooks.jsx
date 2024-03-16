import PropTypes from 'prop-types';
import Cook from '../Cook/Cook';

const Cooks = ({ cooks }) => {
    return (
        <div className="">
            <h1>Want to cook: {cooks.length} </h1>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        {
                            cooks.map(cook => <Cook key={cook.recipe_id} cook={cook}></Cook>)
                        }

                    </tr>


                </tbody>


            </table>




        </div>
    );
};


Cooks.propTypes = {
    cooks: PropTypes.any.isRequired
}
export default Cooks;