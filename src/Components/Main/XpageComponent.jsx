import { Menu, DownloadForOffline } from "@mui/icons-material";
import { Box, Checkbox, CircularProgress, FormControlLabel, FormGroup, Grid, InputLabel, List, ListItem, ListItemText, Tooltip, Typography, styled, tooltipClasses } from "@mui/material";
import PropTypes from 'prop-types';
import { Fragment } from "react";
import classes from "./XpageComponent.module.css";

const LabelAnswerComponent = ({ label, subText, bigGrid }) => {
  return (
    <Fragment>
      <Typography component="p" color={bigGrid ? 'secondary' : '#020202'} sx={bigGrid && { fontWeight: '600' }}>{label}</Typography>
      <Typography component="p" color={bigGrid ? 'secondary' : 'primary'} sx={bigGrid && { fontWeight: '600' }}>
        {subText}
      </Typography>
    </Fragment>
  );
};

const MenuTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff',
    color: '#8e8e8e',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#ffffff',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
  }
}));

const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: '#c0c0c0'
  },
  '& .MuiCheckbox-root.Mui-checked': {
    color: '#02a91f',
  },
  '& .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label': {
    color: '#02a91f',
    fontWeight: '700'
  }
}
))

 

const MenuTooltipFragment = () => {
  return (
    <div className={classes.menuTooltipFragment}>
      <LabelAnswerComponent label="Request Number" subText="0123456" />
      <LabelAnswerComponent label="valiated By" subText="Rohit" />
    </div>
  )
}

const NestedGridItem = ({label1,label2}) => {
  return (
    <div className={classes.nestedGridItem}>
      <div className={classes.nestedGridItemOne}>
        <Typography component="p" color="primary" sx={{ fontWeight: 'bold' }}>{label1}</Typography>
        <MenuTooltip title={<MenuTooltipFragment />} placement="right-end" arrow>

          <Menu />

        </MenuTooltip>
      </div>
      <div className={classes.nestedGridItemTwo}>
        <Typography component="p" color="primary" sx={{ fontWeight: 'bold' }}>{label2}</Typography>
        <FormGroup>
          <CustomFormControlLabel
            color="success"
            control={<Checkbox size="small" />}
            label="Audit"
            sx={{ margin: 0 }}
          />
        </FormGroup>
      </div>
    </div>
  );
};

export const XpageComponent = () => {
  return (
    <div className={classes.xPage}>
      <div className={classes.gridContainer}>
        <div className={classes.gridItemOne}>
          <div className={classes.gridItemOneInside}>
            <div className={classes.gridItemOneInsideOne}>
              <LabelAnswerComponent label="Client Name" subText="Eternal Health Corporation" bigGrid={true} />
            </div>
            <div className={classes.gridItemOneInsideTwo}>
              <DownloadForOffline  />
            </div>
            <div className={classes.gridItemOneInsideThree}>
              <LabelAnswerComponent label="File Name" subText="Brand File Name sample_123456.PDF" bigGrid={true} />
            </div>
            <div>
              <LabelAnswerComponent label="Agreement Number" subText="985674839301123" bigGrid={true} />
            </div>
            <div>
              <LabelAnswerComponent label="PDF ID" subText="1234" bigGrid={true} />
            </div>
            <div>
              <LabelAnswerComponent label="Version ID" subText="030" bigGrid={true} />
            </div>
            <div>
              <LabelAnswerComponent label="Audit Version" subText="#01" bigGrid={true} />
            </div>
          </div>
        </div>
        <div className={classes.gridItemTwo}>
          <NestedGridItem label1="Contract Term" label2="Processed" />
        </div>
        <div className={classes.gridItemThree}>
          <NestedGridItem label1="Brand/Generic Definitions" label2="Feedback Required" />
        </div>
        <div className={classes.gridItemFour}>
          <NestedGridItem label1="Rebate" label2="Processed" />
        </div>
        <div className={classes.gridItemFive}>
          <NestedGridItem label1="Network" label2="Processed"/>
        </div>
        <div className={classes.gridItemSix}>
          <NestedGridItem  label1="Non Financial Terms" label2="Processed" />
        </div>
        <div className={classes.gridItemSeven}>
          <NestedGridItem />
        </div>
      </div>
    </div>
  );
};
