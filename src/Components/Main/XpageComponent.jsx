import { Menu, DownloadForOffline, DownloadForOfflineOutlined, BorderColor } from "@mui/icons-material";
import { Box, Checkbox, CircularProgress, Divider, FormControlLabel, FormGroup, Grid, InputLabel, List, ListItem, ListItemText, Tooltip, Typography, styled, tooltipClasses } from "@mui/material";
import PropTypes from 'prop-types';
import { Fragment } from "react";
import classes from "./XpageComponent.module.css";

const TooltipLabelAnswerComponent = ({ label, subText  }) => {
  return (
    <div>
      <Typography component="p" color=  '#85868b' sx={  {fontWeight:'600', fontSize: '0.6rem' }}>{label}</Typography>
      <Typography component="p" color= 'primary' sx={  { fontWeight: '700', fontSize: '0.6rem' }}>
        {subText}
      </Typography>
    </div>
  );
};

const BigGridLabelSubtextComponent = ({label,subText}) => {
  return (
    <div>
      <Typography component="p" color='secondary'  sx={ { fontWeight: '400', fontSize: '0.6rem' }}>{label}</Typography>
      <Typography component="p" color='secondary'  sx={  { fontWeight: '400' }}>
        {subText}
      </Typography>
    </div>
  )
}

const MenuTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .MuiTooltip-tooltip`]: {

  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff',
    color: '#8e8e8e',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.2)'
  },
  [`& .${tooltipClasses.arrow}`]: {
    "&:before": {
      boxShadow: '0px 4px 8px rgba(0,0,0,0.2)'
    },
    color: '#ffffff',
  }
}));

const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: '#c0c0c0'
  },
  '& .MuiCheckbox-root':{
    fontSize: '1.2rem'
  },
  '& .MuiCheckbox-root.Mui-checked': {
    color: '#02a91f'
  },
  '& .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label': {
    color: '#02a91f',
    fontWeight: '700',
  }
}
))



const MenuTooltipFragment = () => {
  return (
    <div className={classes.menuTooltipFragment}>
      <Typography component="div">
      <TooltipLabelAnswerComponent label="Request Number" subText="0123456" />
      </Typography>
      <Divider sx={{my: 0.5}}/>
      <Typography component="div">
      <TooltipLabelAnswerComponent  label="Validated By" subText="Rohit" />
      </Typography>
      
    </div>
  )
}

const NestedGridItem = ({ label1, label2 }) => {
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
            control={<Checkbox size="large" />}
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

          <div className={classes.gridItemOneInsideOne}>
            <BigGridLabelSubtextComponent label="Client Name" subText="Eternal Health Corporation"   />
            <DownloadForOfflineOutlined sx={{
              fontSize: '2rem',
              color: '#ffffff'
            }}/>
          </div>
          <div className={classes.gridItemOneInsideTwo}>
            <BigGridLabelSubtextComponent label="File Name" subText="Brand File Name sample_123456.PDF"   />
          </div>
          <div className={classes.gridItemOneInsideThree}>
            <BigGridLabelSubtextComponent label="Agreement Number" subText="985674839301123"   />

            <BigGridLabelSubtextComponent label="PDF ID" subText="1234" />

            <BigGridLabelSubtextComponent label="Version ID" subText="030"   />

            <BigGridLabelSubtextComponent label="Audit Version" subText="#01"   />
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
          <NestedGridItem label1="Network" label2="Processed" />
        </div>
        <div className={classes.gridItemSix}>
          <NestedGridItem label1="Non Financial Terms" label2="Processed" />
        </div>
        <div className={classes.gridItemSeven}>
          <NestedGridItem />
        </div>
      </div>
    </div>
  );
};
