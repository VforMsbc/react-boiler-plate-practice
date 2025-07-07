import { IFormInputFilleds } from './Login.hooks';

const formInputFilleds: IFormInputFilleds[] = [
  {
    id: 1,
    lable: 'Email',
    type: 'text',
    disable: false,
    value: 'email',
    errValue: 'email',
    placeholder: 'demo11@xyz',
  },
  {
    id: 2,
    lable: 'Password',
    type: 'password',
    disable: false,
    value: 'password',
    errValue: 'password',
    placeholder: '*****',
  },
];

const textData = [
  { id: 1, variant: 'h4', label: 'Manage Your Capital' },
  {
    id: 2,
    variant: 'h6',
    label:
      'Capital management (CM) entails planning for and managing current assets and liabilities to ensure the company can meet short-term financial obligations and finance future growth',
  },
  { id: 3, variant: 'h6', label: 'Ph - (+1)804-873-7820' },
  { id: 4, variant: 'h6', label: 'Fax - (+1)714-443-5479' },
];

export const forgotPass = () => {
  alert('hii');
};

export { formInputFilleds, textData };
