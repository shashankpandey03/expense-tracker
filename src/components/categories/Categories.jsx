import { Grid, Icon, IconButton } from '@material-ui/core'
import Category from '../category/Category';
import './Categories.css'
import Add from '@material-ui/icons/Add'

function Categories() {

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
                    <IconButton style={{ bottom: 3, right: 50, backgroundColor: 'green' }}>
                        <Add style={{ color: 'white' }} />
                    </IconButton>
                </Grid>
            </div>
        </div>
    )
}

export default Categories