import { Delete, Download } from "@mui/icons-material";
import { Grid, InputLabel, Typography } from "@mui/material";
import { Fragment } from "react";
import classes from './XpageComponent.module.css'

const LabelAnswerComponent = ({ label, subText }) => {
  return (
    <Fragment>
      <InputLabel>{label}</InputLabel>
      <Typography variant="p">{subText}</Typography>
    </Fragment>
  );
};

const SmallBox = ({label1 ="1",subText1="2",label2="3",suText2="4",label3="4",subText3="5"}) => {
    return (
         <Grid container>
            <Grid item xs={10}>
               <LabelAnswerComponent label={label1} subText={subText1} />
            </Grid>
            <Grid item xs={2}>
                <Download />
            </Grid>
            <Grid item xs={6}>
            <LabelAnswerComponent label={label1} subText={subText1} />
            </Grid>
            <Grid item xs={6}>
            <LabelAnswerComponent label={label1} subText={subText1} />
            </Grid>
         </Grid>
    )
}

export const XpageComponent = () => {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={5} className={classes.box}>
          <Grid container>
            <Grid item xs={8}>
              <LabelAnswerComponent
                label={"Client Name"}
                subText={"Eternal Health Corporation"}
              />
            </Grid>
            <Grid item xs={4}>
              <Delete />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <LabelAnswerComponent
                label={"File Name"}
                subText={"123456.PDF"}
              />
            </Grid>
            <Grid item xs={4}>
              <LabelAnswerComponent
                label={"Agreement Number"}
                subText={"53745287348562084"}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <LabelAnswerComponent label={"PDF ID"} subText={"1234"} />
            </Grid>
            <Grid item xs={4}>
              <LabelAnswerComponent label={"Version ID"} subText={"030"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2.33} className={classes.box}>
             <SmallBox />
        </Grid>
        <Grid item xs={2.33} className={classes.box}>
            <SmallBox />
        </Grid>
        <Grid item xs={2.33} className={classes.box}>
            <SmallBox />
        </Grid>
      </Grid>
    </Fragment>
  );
};
