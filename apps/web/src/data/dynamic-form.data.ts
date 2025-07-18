import { FieldsConfig } from "../pages/components/form/Fields";

export const formFieldsData:FieldsConfig[] = [
    {
      id:"name",
      type: 'text' as const,
      label: 'Name',
      placeholder: 'Enter your name',
      name: 'name',
      required: true,
    },
    {
      id:"email",
      type: 'email' as const,
      label: 'Email',
      placeholder: 'Enter your email',
      name: 'email',
      required: true,
    },
    {
      id:"password",
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      name: 'password',
      required: true,
    },
    {
      id:"date",
      type: 'date' as const,
      label: 'Date of Birth',
      name: 'dob',
      required: false,
    },
    {
      id:"phoneno",
      type: 'number' as const,
      label: 'PhoneNo.',
      name: 'phoneNo',
      placeholder: 'Enter your phone number',
      required: false,
    },
    {
      id:'gender',
      type: 'radio' as const,
      label: 'Gender',
      name: 'gender',
      required: false,
      
      options: [
      { label: 'Male', value: 'male', checked: false },
      { label: 'Female', value: 'female', checked: false },
      { label: 'Other', value: 'other', checked: false },
    ],
    },

    {
      id:'rememberMe',
      type: 'checkbox' as const,
      label: 'Remember Me',
      name: 'rememberMe',
      required: false,
    },
    {
      id:'levels',
      type: 'single-selector' as const,
      label: 'Levels',
      name: 'levels',
      required: false,
      
      options: [
      { label: 'Level 1', value: 'level1', checked: false },
      { label: 'Level 2', value: 'level2', checked: false },
      { label: 'Level 3', value: 'level3', checked: false },
    ],
    },
    {
      id:'skills',
      type: 'multi-selector' as const,
      label: 'Skills',
      name: 'skills',
      required: false,
      
      options: [
      { label: 'Java', value: 'java', checked: false },
      { label: 'React', value: 'react', checked: false },
      { label: 'Sql', value: 'sql', checked: false },
    ],
    },
  ] satisfies FieldsConfig[];