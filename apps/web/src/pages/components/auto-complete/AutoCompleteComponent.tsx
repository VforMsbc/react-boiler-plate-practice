import React from 'react';
import { Box, TextField, Autocomplete, Button } from '@mui/material';
import { MButton, MMultiselect } from '@jp/material-core-master';
import departmentData from '../../../data/multi-select-data.json';


interface AutoCompleteProps {
  onSubmit: (filters: {
    departmentId: string | null;
    teamLeadId: string | null;
    projectId: string | null;
  }) => void;
}

const AutoCompleteComponent = ({ onSubmit }: AutoCompleteProps) => {
  const [selectedDepartmentId, setSelectedDepartmentId] = React.useState<
    string | null
  >(null);
  const [selectedTeamLeadId, setSelectedTeamLeadId] = React.useState<
    string | null
  >(null);
  const [selectedProjectId, setSelectedProjectId] = React.useState<
    string | null
  >(null);

  const [multiSelectOptions, setMultiSelectOptions] = React.useState(() =>
    departmentData.map((dept) => ({
      label: dept.department,
      value: dept.id.toString(),
      checked: false,
    }))
  );

  const handleDepartmentChange = (updatedOptions: any) => {
    setMultiSelectOptions(updatedOptions);

    const selected = updatedOptions.find((opt: any) => opt.checked);
    if (selected) {
      setSelectedDepartmentId(selected.value);
    } else {
      setSelectedDepartmentId(null);
    }

    setSelectedTeamLeadId(null);
    setSelectedProjectId(null);
  };

  const selectedDepartment = selectedDepartmentId
    ? departmentData.find((d) => d.id.toString() === selectedDepartmentId) ||
      null
    : null;

  const selectedTeamLead =
    selectedDepartment?.teamLeads.find(
      (lead) => lead.id.toString() === selectedTeamLeadId
    ) || null;

  const selectedProject =
    selectedTeamLead?.projects.find(
      (proj) => proj.id.toString() === selectedProjectId
    ) || null;

  // console.log('selectedTeamLead:', selectedTeamLead);
  // console.log('selectedTeamLead.projects:', selectedTeamLead?.projects);
  // console.log('selectedProject:', selectedProject);

  React.useEffect(() => {
    setSelectedProjectId(null);
  }, [selectedTeamLeadId]);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <MMultiselect
      
        label="Department"
        labelPlacement="top"
        placeholder={'Select Department'}
        options={multiSelectOptions}
        onChange={handleDepartmentChange}
      />

      <Autocomplete
        options={selectedDepartment?.teamLeads || []}
        getOptionLabel={(option) => option.label}
        value={selectedTeamLead}
        onChange={(e, newValue) =>
          setSelectedTeamLeadId(newValue ? newValue.id.toString() : null)
        }
        disabled={!selectedDepartment}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => <TextField {...params} label="Team Lead" />}
      />

      <Autocomplete
        options={selectedTeamLead?.projects || []}
        getOptionLabel={(option) => option.label}
        value={selectedProject}
        onChange={(e, newValue) =>
          setSelectedProjectId(newValue ? newValue.id.toString() : null)
        }
        disabled={!selectedTeamLead}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => <TextField {...params} label="Project" />}
      />

      <Box>
        <MButton
          label="Submit"
          color="primary"
          variant="contained"
          onClick={() =>
            onSubmit({
              departmentId: selectedDepartmentId,
              teamLeadId: selectedTeamLeadId,
              projectId: selectedProjectId,
            })
          }
        />
      </Box>

      <Box>
        <MButton
          color="primary"
          variant="contained"
          label="Reset"
          onClick={() => {
            setSelectedDepartmentId(null);
            setSelectedTeamLeadId(null);
            setSelectedProjectId(null);
            
            setMultiSelectOptions((prevOptions) =>
              prevOptions.map((opt) => ({
                ...opt,
                checked: false,
              }))
            );
          }}

        />
      </Box>
    </Box>
  );
};

export default AutoCompleteComponent;
