import { Router } from 'express';
import { query } from 'express-validator';
import Photo from '../models/Photo';
import { validateRequest } from '../middleware/validateRequest';

const router = Router();

// GET /api/photos - Get all photos with optional category filter
router.get(
  '/',
  [
    query('category').optional().isString().trim(),
    query('limit').optional().isInt({ min: 1, max: 100 }),
    query('skip').optional().isInt({ min: 0 })
  ],
  validateRequest,
  async (req, res) => {
    try {
      const { category, limit = 50, skip = 0 } = req.query;

      const filter = category ? { category } : {};

      const photos = await Photo.find(filter)
        .sort({ order: 1, createdAt: -1 })
        .limit(Number(limit))
        .skip(Number(skip))
        .select('-__v');

      res.json({ success: true, data: photos });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Server error' });
    }
  }
);

// GET /api/photos/:id - Get single photo
router.get('/:id', async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id).select('-__v');

    if (!photo) {
      return res.status(404).json({ success: false, error: 'Photo not found' });
    }

    res.json({ success: true, data: photo });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

export default router;
