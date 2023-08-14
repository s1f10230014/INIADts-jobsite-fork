import { membersRepository } from '$/repository/membersRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await membersRepository.getAllFromDB() }),
}));