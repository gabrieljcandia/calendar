import {useDispatch, useSelector} from "react-redux";
import {selectReminder, editReminder, saveReminder, deleteReminder} from "../../store/reminder/action";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import {Col} from "react-bootstrap";
import {dateToHourMin, dateToIsoString} from "../../utils/date-utils";
import _ from "lodash";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import colors, {defaultColor} from "../../constants/colors";
import './styles.css';

const ReminderModal = () => {
    const dispatch = useDispatch();
    const reminder = useSelector(state => state.reminder.selected);

    const updateValue = (key, value) => {
        reminder[key] = value;
        dispatch(editReminder(reminder));
    }

    const closeModal = () => dispatch(selectReminder(null));

    const handleSaveButton = () => {
        if (reminder?.title?.length <= 30) dispatch(saveReminder());
    }

    const showModal = reminder != null;
    const showDeleteButton = reminder?.id != null;
    const currentColor = reminder?.color != null ? reminder.color : defaultColor;
    const currentTitle = reminder?.title != null ? reminder.title : "";
    const currentTime = reminder?.time != null ? reminder.time : dateToHourMin(new Date());
    const currentDate = reminder?.date != null ? dateToIsoString(reminder.date) : dateToIsoString(new Date());
    const titleWarning = reminder?.title?.length > 30;

    return (
        <>
            <Dialog
                maxWidth="sm"
                open={showModal}
                onClose={() => closeModal()}
            >
                <DialogTitle>Reminder</DialogTitle>
                <DialogContent>
                    <TextField
                        id="title"
                        autoFocus
                        onChange={(e) => updateValue('title', e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' ? handleSaveButton() : ''}
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={currentTitle}
                        error={titleWarning}
                        helperText={titleWarning ? "Up to 30 characters" : ""}
                    />
                    <br/><br/>
                    <TextField
                        id="date"
                        type="date"
                        defaultValue={currentDate}
                        onChange={e => updateValue('date', new Date(e.target.value))}
                    />
                    <TextField
                        id="time"
                        type="time"
                        defaultValue={currentTime}
                        onChange={e => updateValue('time', e.target.value)}
                    />
                    <FormControl>
                        <Select
                            id="color-picker"
                            value={currentColor}
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
                <DialogActions className="bottomButtons">
                    <Col>
                        {showDeleteButton
                            ? <Button id="delete" onClick={() => dispatch(deleteReminder(reminder))}>Delete</Button>
                            : <></>
                        }
                    </Col>
                    <Col>
                        <Button onClick={() => closeModal()}>Cancel</Button>
                        <Button id="save" onClick={() => handleSaveButton()}>Save</Button>
                    </Col>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ReminderModal;