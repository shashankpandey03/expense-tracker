import { Paper } from "@material-ui/core";
import './Category.css';

function Category({category}) {
    return (
        <Paper elevation={20} className='category'>
            <div className='categoryHeader'>
                {category.categoryName}
            </div>
            <div className='description'>
                {category.description}
            </div>
        </Paper>
    )
}

export default Category;