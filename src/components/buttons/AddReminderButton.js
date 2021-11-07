import {Fab} from "@mui/material";
import AddIcon from '@material-ui/icons/Add';
import {useDispatch} from "react-redux";
import {selectReminder} from "../../store/reminder/action";
import './styles.css';

const AddReminderButton = () => {
    const dispatch = useDispatch();

    return (
        <div className="plusButton">
            <Fab onClick={() => dispatch(selectReminder({}))}>
                <AddIcon />
            </Fab>
        </div>
    );
}

export default AddReminderButton;