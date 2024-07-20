import { Delete } from "@mui/icons-material"
import { Grid, InputLabel, Typography } from "@mui/material"
import { Fragment } from "react"

const LabelAnswerComponent = ({ label, subText }) => {
    return (
        <Fragment>
            <InputLabel>{label}</InputLabel>
            <Typography variant="p">{subText}</Typography>
        </Fragment>
    )
}

export const Xpage = () => {
    return (
        <Fragment>
            <Grid container>
                <Grid item xs={4}>
                    <Grid item xs={12}>
                        <Grid item xs={8}>
                            <LabelAnswerComponent label={"Client Name"} subText={"Eternal Health Corporation"} />

                        </Grid>
                        <Grid item xs={4}>
                            <Delete />

                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    <Grid item xs={4}>
                        <LabelAnswerComponent label={"File Name"} subText={"123456.PDF"} />

                    </Grid>
                    <Grid item xs={4}>
                        <LabelAnswerComponent label={"Agreement Number"} subText={"53745287348562084"} />

                    </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    <Grid item xs={4}>
                        <LabelAnswerComponent label={"PDF ID"} subText={"1234"} />

                    </Grid>
                    <Grid item xs={4}>
                        <LabelAnswerComponent label={"Version ID"} subText={"030"} />

                    </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
        </Fragment>
    )
}