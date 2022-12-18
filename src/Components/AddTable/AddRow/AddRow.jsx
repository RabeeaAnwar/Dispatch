import React, { useState } from 'react';
import { TableRow, TableCell, Checkbox, TextField } from '@mui/material';

export const AddRow = ({ addRows, rowId, data, setData }) => {

    const [check, setCheck] = useState(false);

                                            //Adding a new Row on Checkbox Checked
    const handleChange = (e) => {
        let result = data.filter(entry => entry.id === Number(e.target.name))[0];
        if (!check) {
            setCheck(true);
            addRows(prevArr => [...prevArr, rowId]);
            result = { ...result, id: rowId, checked: true };

        }
        else {
            setCheck(false);
            result = { ...result, id: rowId, checked: false };
        }

        let index = data.findIndex(value => value.id === Number(e.target.name));
        if (index === -1) {
            setData(prevArr => [...prevArr, result]);
        }
        else {
            const newArr = Object.assign([...data], {
                [index]: result
            })
            setData(newArr);
        }

    }
                                        //Handling Textfields Data
    const onTextChange = (e) => {
        let result = data.filter(entry => entry.id === rowId)[0];
        result = { ...result, id: rowId, [e.target.name]: e.target.value };
        let index = data.findIndex(value => value.id === rowId);
        if (index === -1) {
            setData(prevArr => [...prevArr, result]);
        }
        else {
            const newArr = Object.assign([...data], {
                [index]: result
            })
            setData(newArr);
        }

    }

    return (
        <TableRow style={{ margin: '2rem !important' }}>
            <TableCell padding='none'>
                <Checkbox
                    size={String('medium')}
                    style={{
                        padding: '2px 5px !important',
                        color: 'var(--color-border)'
                    }}
                    onChange={(e) => handleChange(e)}
                    checked={check}
                    name={String(rowId)}
                />
            </TableCell>
            <TableCell >
                <TextField size='small'
                 sx={{ input: { color: 'var(--color-text)' } }}
                    style={{
                        border: '1px solid var(--color-border)', borderRadius: '5px',
                        backgroundColor: 'var(--color-box-bg)'
                    }}
                    onChange={(e) => onTextChange(e)}
                    name="key"
                />
            </TableCell>
            <TableCell >
                <TextField size='small'
                 sx={{ input: { color: 'var(--color-text)' } }}
                    style={{
                        border: '1px solid var(--color-border)', borderRadius: '5px',
                        backgroundColor: 'var(--color-box-bg)'
                    }}
                    onChange={(e) => onTextChange(e)}
                    name="value"
                />
            </TableCell>

        </TableRow>
    )
}

