import { MultiSelectValue } from 'components/inputs/multi-select/types';
import { SelectValue } from 'components/inputs/select/types';

export const SELECT_LANGUAGES: SelectValue[] = [
  {
    id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7',
    label: 'English',
  },
  {
    id: 'b4b08a09-e287-400b-ba65-afd6ae1f6fd7',
    label: 'Russian',
  },
  {
    id: '641fc722-af5a-4426-8f8a-1566cc492b91',
    label: 'German',
  },
];

export const MULTI_SELECT_VALUES: MultiSelectValue[] = [
  { id: '57b5a856-bc4b-4c2f-8295-9f44434fafc7', label: 'English', selected: false },
  { id: '583e8b60-0177-4e38-a423-4b1d5d0a2236', label: 'Spanish', selected: false },
  { id: 'b20bea7b-8172-4d12-b172-d5feac02d863', label: 'French', selected: false },
  { id: '641fc722-af5a-4426-8f8a-1566cc492b91', label: 'German', selected: false },
];
