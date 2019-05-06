import bcrypt from 'bcryptjs';
import settings from '../../../../../settings';
import { returnId, truncateTables } from '../../sql/helpers';

export async function seed(knex, Promise) {
  await truncateTables(knex, Promise, [
    'user',
    'user_profile',
    'auth_certificate',
    'auth_facebook',
    'auth_github',
    'auth_linkedin'
  ]);

  await returnId(knex('user')).insert({
    first_name: 'Greg',
    last_name: 'Brodzik',
    email: 'gregbrodzik@gmail.com',
    password_hash: await bcrypt.hash(settings.user.secret, 12),
    role: 'admin',
    is_active: true
  });

  await returnId(knex('user')).insert({
    first_name: 'Michael',
    last_name: 'Bolens',
    email: 'bolensmichael@gmail.com',
    password_hash: await bcrypt.hash(settings.user.secret, 12),
    role: 'admin',
    is_active: true
  });

  await returnId(knex('user')).insert({
    first_name: 'Marc',
    last_name: 'Moore',
    email: 'marcm@cahomefitness.com',
    password_hash: await bcrypt.hash(settings.user.secret, 12),
    role: 'admin',
    is_active: true
  });

  await returnId(knex('user')).insert({
    first_name: 'David',
    last_name: 'Silva',
    email: 'dsilva@cahomefitness.com',
    password_hash: await bcrypt.hash(settings.user.secret, 12),
    role: 'admin',
    is_active: true
  });

  await returnId(knex('user')).insert({
    first_name: 'Brandon',
    last_name: 'Sugimoto',
    email: 'bsugimoto@cahomefitness.com',
    password_hash: await bcrypt.hash(settings.user.secret, 12),
    role: 'admin',
    is_active: true
  });

  await returnId(knex('user')).insert({
    username: 'user',
    email: 'user@example.com',
    password_hash: await bcrypt.hash('user1234', 12),
    role: 'user',
    is_active: true
  });
}
