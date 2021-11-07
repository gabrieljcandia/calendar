import {Fab} from "@mui/material";
import AddIcon from '@material-ui/icons/Add';
import {useDispatch} from "react-redux";
import {selectReminder} from "../../store/reminder/action";

const AddRemainderButton = () => {
    const dispatch = useDispatch();

    return (
        <Fab onClick={() => dispatch(selectReminder({}))}>
            <AddIcon />
        </Fab>
    );
}

export default AddRemainderButton;