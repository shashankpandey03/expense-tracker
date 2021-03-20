import React from 'react';
import './AddCategory.css'
import TextField from '@material-ui/core/TextField';
import { Button, Paper } from '@material-ui/core';

function AddCategory() {

    const addCategory = () => {
        let categoriesString = sessionStorage.getItem("categories");
        let categoryJson = null;
        if(categoriesString) {
            categoryJson = JSON.parse(categoriesString);
        } else {
            categoryJson = [];
        }
        categoryJson.push(document.getElementById('category').value);
        sessionStorage.setItem("categories",JSON.stringify(categoryJson));
        alert('Category added');
        console.log(categoryJson);
    }

    return (
        <Paper elevation={3} className='addCategoryBox'>
            <div>
                <div className='title'>
                    Add new category
                </div>
                <div>
                    <div className='text'>
                        <TextField id="category" variant="outlined" />
                    </div>
                    <div>
                        <Button variant="contained" color="primary" value="Add category" onClick={() => addCategory()}>Add category</Button>
                    </div>
                </div>
            </div>
        </Paper>
    );
}

export default AddCategory;