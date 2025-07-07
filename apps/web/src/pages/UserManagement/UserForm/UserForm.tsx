import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  InputLabel,
  TextField,
} from '@mui/material';
import { IUserDetailsData } from '../../../components/Table/types/type';
import {
  userFormCheckboxFields,
  userFormInputFields,
  userFormPasswordinputFields,
} from './util';
import useUserForm from './UserForm.hooks';
import { MButton } from '@app/lib/shared-components';
import * as style from './userFormStyle';

interface Props {
  isEdit?: boolean;
  rowData?: IUserDetailsData;
}

const UserForm = ({ isEdit = false, rowData }: Props) => {
  const {
    variable: { isLoading, formData, auth },
    methods: { handleInputChange, handleSubmit },
  } = useUserForm(isEdit, rowData);

  return (
    <>
      <Box sx={style.formDailogContainer}>
        <Box sx={style.formContainer}>
          <Box sx={style.userFormTextField}>
            {userFormInputFields.map((field) => (
              <Box
                sx={style.userform_box}
                key={field.key}
                id={`text-field-${field.label.toLowerCase().replace(' ', '-')}`}
              >
                <InputLabel
                  required
                  shrink
                  htmlFor={field.key}
                  className="userform_inputLabel"
                >
                  {field.label}
                </InputLabel>

                <TextField
                  variant="outlined"
                  size="small"
                  id={field.key}
                  placeholder={field.placeholder}
                  type={field.type}
                  required
                  value={formData[field.key] as string}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                />
              </Box>
            ))}

            {userFormPasswordinputFields.map((field, index) => (
              <Box
                sx={style.userform_box}
                key={field.key}
                id={`text-field-${field.label.toLowerCase().replace(' ', '-')}`}
              >
                <InputLabel required shrink htmlFor={field.key}>
                  {field.label}
                </InputLabel>

                <TextField
                  variant="outlined"
                  size="small"
                  type={'text'}
                  id={field.key}
                  placeholder={isEdit === true ? 'XXXX' : field.placeholder}
                  required
                  value={formData[field.key] || ''}
                  onChange={(e) => handleInputChange(field.key, e.target.value)}
                />
              </Box>
            ))}

            <Box sx={style.userForm_checkbox}>
              {userFormCheckboxFields.map((field) => (
                <FormGroup key={field.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id={`checkbox-${field.label
                          .toLowerCase()
                          .replace(' ', '-')}`}
                        checked={formData[field.id] as boolean}
                        size="large"
                      />
                    }
                    label={field.label}
                    labelPlacement="end"
                    color="primary"
                    onChange={() => {}}
                    sx={{ display: auth?.is_admin ? 'block ' : 'none' }}
                  />
                </FormGroup>
              ))}
            </Box>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: '#d9d9d9' }}
        />
      </Box>
      <Box sx={style.userform_button}>
        <MButton
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={isLoading}
          sx={{ color: 'white' }}
          label={
            auth?.is_admin
              ? !isLoading
                ? 'Submit'
                : 'Loading...'
              : !isLoading
              ? 'Save'
              : 'Loading...'
          }
        />
      </Box>
    </>
  );
};
export default UserForm;
