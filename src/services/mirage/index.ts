import {
  createServer,
  Model,
  Factory,
  Response,
  RestSerializer
} from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: RestSerializer,
    },
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          // return `User ${i + 1}`;
          return `${faker.name.firstName()} ${faker.name.lastName()}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10); // return a date from 10 days ago
        },
      }),
    },

    seeds(server) {
      server.createList('user', 149);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750; // time in milliseconds to generate a small delay in the API responses

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user'))
          .users
          .sort(function (a, b) {
            if (a.name > b.name)
              return 1;
            else if (a.name < b.name)
              return -1;
            else
              return 0;
          })
          .slice(pageStart, pageEnd)

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users },
        );
      });

      this.get('/users/:id');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
};