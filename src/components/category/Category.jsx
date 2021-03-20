import { Paper } from "@material-ui/core";
import './Category.css';

function Category({categoryName}) {
    return (
        <Paper elevation={3} className='category'>
            <div className='categoryHeader'>
                {categoryName}
            </div>
        </Paper>
    )
}

export default Category;