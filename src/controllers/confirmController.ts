import { Request, Response } from 'express';
import { validateUUID, validateInteger } from '../utils/validations';
import { findMeasureByUUID, confirmMeasure } from '../services/measureService';

export const confirmMeasureValue = async (req: Request, res: Response) => {
  const { measure_uuid, confirmed_value } = req.body;

  if (!validateUUID(measure_uuid)) {
    return res.status(400).json({ message: 'Invalid measure UUID' });
  }

  if (!validateInteger(confirmed_value)) {
    return res.status(400).json({ message: 'Confirmed value must be an integer' });
  }

  try {
   
    const measure = await findMeasureByUUID(measure_uuid);
    if (!measure) {
      return res.status(404).json({ message: 'Measure not found' });
    }

    if (measure.isConfirmed) {
      return res.status(400).json({ message: 'Measure has already been confirmed' });
    }

    await confirmMeasure(measure_uuid, confirmed_value);

    res.status(200).json({ message: 'Measure confirmed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
