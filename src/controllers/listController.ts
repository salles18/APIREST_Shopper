import { Request, Response } from 'express';
import { findMeasuresByCustomer } from '../services/measureService';

export const listMeasures = async (req: Request, res: Response) => {
  const { customerCode } = req.params;
  const { measure_type } = req.query;

  try {
    
    let measureType = measure_type ? String(measure_type).toUpperCase() : null;
    if (measureType && !['WATER', 'GAS'].includes(measureType)) {
      return res.status(400).json({ message: 'Invalid measure type' });
    }

    const measures = await findMeasuresByCustomer(customerCode, measureType);
    res.json(measures);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
