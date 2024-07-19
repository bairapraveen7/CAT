import { Highlight, HighlightOff } from "@mui/icons-material";
import { Button, Checkbox, FormControlLabel, FormGroup, Link, TextField } from "@mui/material";
import { Fragment } from "react";

export const CustomInputRow = ({setDisplayCustomInput}) => {
    return (
        <Fragment>
            <td>
                <Link
                    component="label"
                    variant="contained"
                    tabIndex={-1}
                >
                    Upload contract
                    <input type="file" hidden />
                </Link>
            </td>
            <td><TextField variant="standard"></TextField></td>
            <td><TextField variant="standard"></TextField></td>
            <td><TextField variant="standard"></TextField></td>
            <td><TextField variant="standard"></TextField></td>
            <td><FormGroup
            >
                <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="Audit"
                />
            </FormGroup></td>
            <td onClick={() => setDisplayCustomInput(false)}><HighlightOff  fontSize="large"/></td>
        </Fragment>
  )
}