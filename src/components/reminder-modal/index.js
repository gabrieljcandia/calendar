import {useDispatch, useSelector} from "react-redux";
import {selectReminder, editReminder, saveReminder} from "../../store/reminder/action";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import {dateToHourMin, dateToIsoString} from "../../utils/date-utils";
import _ from "lodash";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import colors, {defaultColor} from "../../constants/colors";

const ReminderModal = () => {
    const dispatch = useDispatch();
    const reminder = useSelector(state => state.reminder.selected);
    const show = reminder != null;

    const updateValue = (key, value) => {
        reminder[key] = value;
        dispatch(editReminder(reminder));
    }

    const closeModal = () => dispatch(selectReminder(null));
    const currentColor = reminder?.color != null ? reminder.color : defaultColor;

    return (
        <>
            <Dialog
                maxWidth="sm"
                open={show}
                onClose={() => closeModal()}
            >
                <DialogTitle>Reminder</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        onChange={(e) => updateValue('title', e.target.value)}
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={reminder?.title != null ? reminder.title : ""}
                    />
                    <br/><br/>
                    <TextField
                        type="date"
                        defaultValue={reminder?.date != null ? dateToIsoString(reminder.date) : dateToIsoString(new Date())}
                        onChange={e => updateValue('date', new Date(e.target.value))}
                    />
                    <TextField
                        type="time"
                        defaultValue={reminder?.time != null ? reminder.time : dateToHourMin(new Date())}
                        onChange={e => updateValue('time', e.target.value)}
                    />
                    <FormControl>
                        <Select
                            defaultValue={currentColor}
                            style={{color: currentColor}}
                        >
                            {colors.map(color =>
                                <MenuItem
                                    key={color}
                                    onClick={() => updateValue('color', color)}
                                    value={color}
                                    style={{background: color}}>
                                    {_.upperFirst(color)}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => closeModal()}>Cancel</Button>
                    <Button onClick={() => dispatch(saveReminder())}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ReminderModal;