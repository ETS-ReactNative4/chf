// Helpers
import { camelizeKeys, decamelize } from 'humps';
import { has } from 'lodash';
import bcrypt from 'bcryptjs';
import knex from '../../sql/connector';
import { returnId } from '../../sql/helpers';

// Actual query fetching and transformation in DB
class User {
  async generateUUID() {
    const UUID = () => {
      let d = Date.now();
      return 'xxxxxxxxxxxxx'.replace(/x/g, function(c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      });
    };
    let newId = UUID();
    let checkExistingUser = async id => this.checkUniqueUserId(id);
    let current;
    do {
      current = await checkExistingUser(newId);
      if (current.length > 0) newId = UUID();
      else return newId;
    } while (current.length !== 0);
  }

  /** MAIN STATEMENTS BEGIN**/
  get = {
    userById(id) {
      return knex
        .select()
        .from('user')
        .where({ id })
        .first();
    },
    userByEmail(email) {
      return knex
        .select()
        .from('user')
        .where({ email })
        .first();
    },
    users(orderBy, filter) {
      const queryBuilder = knex.select('id', 'email', 'first_name', 'last_name', 'role').from('user AS u');

      // add order by
      if (orderBy && orderBy.column) {
        let column = orderBy.column;
        let order = 'asc';
        if (orderBy.order) {
          order = orderBy.order;
        }

        queryBuilder.orderBy(column, order);
      }

      // add filter conditions
      if (filter) {
        if (has(filter, 'role') && filter.role !== '') {
          queryBuilder.where(function() {
            this.where('u.role', filter.role);
          });
        }

        if (has(filter, 'is_active') && filter.is_active !== null) {
          queryBuilder.where(function() {
            this.where('u.is_active', filter.is_active);
          });
        }

        if (has(filter, 'searchText') && filter.searchText !== '') {
          queryBuilder.where(function() {
            this.where('u.username', 'like', `%${filter.searchText}%`)
              .orWhere('u.email', 'like', `%${filter.searchText}%`)
              .orWhere('up.first_name', 'like', `%${filter.searchText}%`)
              .orWhere('up.last_name', 'like', `%${filter.searchText}%`);
          });
        }
      }

      return queryBuilder;
    }
  };
  add = {
    user(input) {
      return returnId(
        knex('user')
          .insert(input)
          .returning('*')
      );
    }
  };
  update = {};
  delete = {
    userById(id) {
      return knex('user')
        .where('id', '=', id)
        .del();
    }
  };
  /** MAIN STATEMENTS END **/
 async getUserByUsername(username) {
    return camelizeKeys(
      await knex
        .select('u.id', 'u.username', 'u.role', 'u.is_active', 'u.email', 'up.first_name', 'up.last_name')
        .from('user AS u')
        .where('u.username', '=', username)
        .leftJoin('user_profile AS up', 'up.user_id', 'u.id')
        .first()
    );
  }
   async getUserByEmail(email) {
    return camelizeKeys(
      await knex
        .select(
          'u.id',
          'u.username',
          'u.password_hash',
          'u.role',
          'u.is_active',
          'u.email',
          'up.first_name',
          'up.last_name'
        )
        .from('user AS u')
        .leftJoin('user_profile AS up', 'up.user_id', 'u.id')
        .where({ email })
        .first()
    );
  }
  async register({ username, email, password, role, isActive }) {
    const passwordHash = await bcrypt.hash(password, 12);

    if (role === undefined) {
      role = 'user';
    }

    return returnId(knex('user')).insert({ username, email, role, password_hash: passwordHash, is_active: !!isActive });
  }
  /** OLD STATEMENTS BEGIN **/
  // TODO: Incorporate below statements into new or delete
  async getUsers(orderBy, filter) {
    const queryBuilder = knex
      .select(
        'u.id as id',
        'u.username',
        'u.role',
        'u.is_active',
        'u.email',
        'up.first_name',
        'up.last_name',
        'ca.serial',
        'fa.fb_id',
        'fa.display_name AS fbDisplayName',
        'lna.ln_id',
        'lna.display_name AS lnDisplayName',
        'gha.gh_id',
        'gha.display_name AS ghDisplayName',
        'ga.google_id',
        'ga.display_name AS googleDisplayName'
      )
      .from('user AS u')
      .leftJoin('auth_certificate AS ca', 'ca.user_id', 'u.id')
      .leftJoin('auth_facebook AS fa', 'fa.user_id', 'u.id')
      .leftJoin('auth_google AS ga', 'ga.user_id', 'u.id')
      .leftJoin('auth_github AS gha', 'gha.user_id', 'u.id')
      .leftJoin('auth_linkedin AS lna', 'lna.user_id', 'u.id');

    // add order by
    if (orderBy && orderBy.column) {
      let column = orderBy.column;
      let order = 'asc';
      if (orderBy.order) {
        order = orderBy.order;
      }

      queryBuilder.orderBy(decamelize(column), order);
    }

    // add filter conditions
    if (filter) {
      if (has(filter, 'role') && filter.role !== '') {
        queryBuilder.where(function() {
          this.where('u.role', filter.role);
        });
      }

      if (has(filter, 'is_active') && filter.is_active !== null) {
        queryBuilder.where(function() {
          this.where('u.is_active', filter.is_active);
        });
      }

      if (has(filter, 'searchText') && filter.searchText !== '') {
        queryBuilder.where(function() {
          this.where('u.username', 'like', `%${filter.searchText}%`)
            .orWhere('u.email', 'like', `%${filter.searchText}%`)
            .orWhere('up.first_name', 'like', `%${filter.searchText}%`)
            .orWhere('up.last_name', 'like', `%${filter.searchText}%`);
        });
      }
    }

    return camelizeKeys(await queryBuilder);
  }

  async editUser({ id, username, email, role, is_active, password }) {
    let localAuthInput = { email };
    if (password) {
      const passwordHash = await bcrypt.hash(password, 12);
      localAuthInput = { email, password_hash: passwordHash };
    }

    return knex('user')
      .update({
        username,
        role,
        is_active: is_active,
        ...localAuthInput
      })
      .where({ id });
  }

  deleteUser(id) {
    return knex('user')
      .where('id', '=', id)
      .del();
  }
}
/** OLD STATEMENTS END **/

const userDAO = new User();

export default userDAO;
