
import { StyledEngineProvider } from '@mui/material/styles';
import LeaveTable from './LeaveTable';
import DepartmentDropDown from './DepartmentDropDown';
import SearchField from './SearchField';


// render all the relevant components 

function ManageLeave() {
  return (
    <div>
      <div>
        <h1>Daily Attendance</h1>
      </div>
      <div id="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <DepartmentDropDown></DepartmentDropDown>
        <SearchField id="searchfield"></SearchField>
      </div>
      <div>
        <StyledEngineProvider injectFirst>
          <LeaveTable />
        </StyledEngineProvider>
      </div>
    </div>
  );
}

export default ManageLeave;
