

interface Measure {
    uuid: string;
    customerCode: string;
    type: 'WATER' | 'GAS';
    value: number;
    isConfirmed: boolean;
    date: string;
  }

  const mockDatabase: Measure[] = [
    { uuid: '12345', customerCode: 'cust1', type: 'WATER', value: 100, isConfirmed: false, date: '2024-08-01' },
    { uuid: '67890', customerCode: 'cust1', type: 'GAS', value: 50, isConfirmed: true, date: '2024-08-05' },
    { uuid: '54321', customerCode: 'cust2', type: 'WATER', value: 75, isConfirmed: false, date: '2024-08-10' }
  ];
  
  
  export const findMeasuresByCustomer = async (customerCode: string, measureType: string | null): Promise<Measure[]> => {
    return mockDatabase.filter(measure => 
      measure.customerCode === customerCode && (!measureType || measure.type === measureType)
    );
  };
  
  
  export const findMeasureByUUID = async (uuid: string): Promise<Measure | null> => {
    return mockDatabase.find(measure => measure.uuid === uuid) || null;
  };
  
  
  export const confirmMeasure = async (uuid: string, confirmedValue: number): Promise<void> => {
    const measure = mockDatabase.find(measure => measure.uuid === uuid);
    if (measure) {
      measure.value = confirmedValue;
      measure.isConfirmed = true;
    }
  };
  