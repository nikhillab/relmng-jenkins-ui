import * as React from "react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import DnsIcon from '@mui/icons-material/Dns';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import SettingsIcon from '@mui/icons-material/Settings';
import KeyIcon from '@mui/icons-material/Key';

export const mainMenu = (
  <React.Fragment>
    <ListSubheader component='div' inset>
      General 
    </ListSubheader>
    <ListItemButton>
      <Link to='/environment'>
        <Tooltip title='Environments'>
          <ListItemIcon>
            <EditLocationAltIcon />
          </ListItemIcon>
        </Tooltip>
      </Link>
      <ListItemText primary='Environments' />
    </ListItemButton>
    <ListItemButton>
      <Link to='/server'>
        <Tooltip title='Server'>
          <ListItemIcon>
            <DnsIcon />
          </ListItemIcon>
        </Tooltip>
      </Link>
      <ListItemText primary='Server' />
    </ListItemButton>
    <ListItemButton>
      <Link to='/job'>
        <Tooltip title='Job'>
          <ListItemIcon>
            <PlayCircleFilledIcon />
          </ListItemIcon>
        </Tooltip>
      </Link>
      <ListItemText primary='Job' />
    </ListItemButton>
    <ListItemButton>
      <Link to='/filter'>
        <Tooltip title='Filters'>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
        </Tooltip>
      </Link>
      <ListItemText primary='Filters' />
    </ListItemButton>
    <ListItemButton>
      <Link to='/audit'>
        <Tooltip title='Audit History'>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
        </Tooltip>
      </Link>
      <ListItemText primary='Audit History' />
    </ListItemButton>
  </React.Fragment>
);

export const recentMenu = (
  <React.Fragment>
    <ListSubheader component='div' inset>
      Admin 
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary='Settings' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary='Users' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <KeyIcon />
      </ListItemIcon>
      <ListItemText primary='Secret Key' />
    </ListItemButton>
  </React.Fragment>
);
