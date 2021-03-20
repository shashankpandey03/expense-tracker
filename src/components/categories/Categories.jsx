import { Grid, Icon, IconButton, Tooltip } from '@material-ui/core'
import Category from '../category/Category';
import './Categories.css'
import Add from '@material-ui/icons/Add'
import { useHistory } from 'react-router-dom';

function Categories() {

    const history = useHistory();

    const addCategory = () => {
        history.push('/addNewCategory');
    }

    return (
        <div>
            <div className='categories'>
                {
                    sessionStorage.getItem('categories') && JSON.parse(sessionStorage.getItem('categories')).map((category, i) => {
                        return <Category categoryName={category} />
                    })
                }
            </div>
            <div className='footer'>
                <Grid container justify="flex-end" alignItems="flex-end">
                    <Tooltip title="Add new category">
                        <IconButton style={{ bottom: 3, right: 50, backgroundColor: 'green' }} onClick={() => addCategory()}>
                            <Add style={{ color: 'white' }} />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </div>
        </div>
    )
}

export default Categories