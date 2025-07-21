import { Box, TextField, Typography } from '@mui/material';
import AgGridTable from '../../../components/Table/AgGrid/AgGrid/index';
import React, { useState } from 'react';
import AutoCompleteComponent from '../auto-complete/AutoCompleteComponent';
import departmentData from '../../../data/multi-select-data.json';

interface DashboardProps {
  filters: {
    departmentId: string | null;
    teamLeadId: string | null;
    projectId: string | null;
  };
}
const flattenData = (departmentData: any) => {
  const rows: any = [];

  departmentData.forEach((dept: any) => {
    dept.teamLeads.forEach((lead: any) => {
      lead.projects.forEach((project: any) => {
        rows.push({
          department: dept.department,
          teamLead: lead.label,
          teamMembers: lead.teamMembers.join(', '),
          project: project.label,
          projectType: project.type,
          tools: project.tools.join(', '),
          noOfSprints: project.noOfSprints,
          noOfSprintsCompleted: project.noOfSprintsCompleted,
          deadline: project.deadline,
          milestones: project.milestones,
          milestonesAchieved: project.milestonesAchieved,
          progress: project.progress,
        });
      });
    });
  });

  return rows;
};
const data = flattenData(departmentData);
// console.log(data);
const gridheadCells = [
  {
    headerName: 'Department',
    field: 'department',
    sortable: true,
    filter: true,
  },
  { headerName: 'Team Lead', field: 'teamLead', sortable: true, filter: true },
  {
    headerName: 'Team Members',
    field: 'teamMembers',
    sortable: true,
    filter: true,
  },
  { headerName: 'Project', field: 'project', sortable: true, filter: true },
  { headerName: 'Type', field: 'projectType', sortable: true, filter: true },
  { headerName: 'Tools', field: 'tools', sortable: true, filter: true },
  { headerName: 'Sprints', field: 'noOfSprints' },
  { headerName: 'Sprints Completed', field: 'noOfSprintsCompleted' },
  { headerName: 'Deadline', field: 'deadline' },
  { headerName: 'Milestones', field: 'milestones' },
  { headerName: 'Achieved', field: 'milestonesAchieved' },
  { headerName: 'Progress (%)', field: 'progress' },
];
 // console.log(filteredList);
const Dashboard = ({ filters }: DashboardProps) => {
  const [search, setSearch] = useState('');

 const filteredList = data.filter((row: any) => {
  const matchesSearch = Object.values(row).some((value) =>
    String(value).toLowerCase().includes(search.toLowerCase())
  );

  const selectedDepartment = departmentData.find(
    (d) => d.id.toString() === filters.departmentId
  );

  const selectedTeamLead = selectedDepartment?.teamLeads.find(
    (lead) => lead.id.toString() === filters.teamLeadId
  );

  const selectedProject = selectedTeamLead?.projects.find(
    (proj) => proj.id.toString() === filters.projectId
  );

  const matchDepartment =
    !filters.departmentId || row.department === selectedDepartment?.department;

  const teamLeadMatch =
    !filters.teamLeadId || row.teamLead === selectedTeamLead?.label;

  const projectMatch =
    !filters.projectId || row.project === selectedProject?.label;

  return matchesSearch && matchDepartment && teamLeadMatch && projectMatch;
});

 
  return (
    <Box p={2} sx={{ height: '100%' }}>
      <TextField
        label="Search"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* <AutoCompleteComponent onSubmit={setFilters} /> */}
      <AgGridTable
        list={filteredList}
        columnDefs={gridheadCells}
        isLoading={false}
        handleOpenDialog={() => <Box>Dialog Content</Box>}
      />
    </Box>
  );
};

export default Dashboard;
