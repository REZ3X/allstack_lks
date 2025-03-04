# THIS PROJECT IS UNDER DEVELOPMENT (BUG EXPECTED)

# Allstack LKS Project

This project is a full-stack web application that includes a frontend built with Next.js and a backend powered by Laravel.

## Project Structure

- **Frontend**: Located in the `frontend` directory, built with Next.js.
- **Backend**: Located in the `backend` directory, built with Laravel.

## Getting Started

### Frontend

The frontend is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

#### Development

To start the development server, navigate to the `frontend` directory and run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Backend

The backend is a [Laravel](https://laravel.com) application.

#### Development

To start the development server, navigate to the `backend` directory and run:

```bash
php artisan serve
```

You may also need to set up the database and run migrations:

```bash
php artisan migrate
```

## Learn More

### Frontend

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Backend

To learn more about Laravel, take a look at the following resources:

- [Laravel Documentation](https://laravel.com/docs) - learn about Laravel features and API.
- [Laracasts](https://laracasts.com) - thousands of video tutorials on Laravel, PHP, and JavaScript.

## Deployment

### Frontend

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Backend

To deploy your Laravel application, you can follow the [Laravel deployment documentation](https://laravel.com/docs/deployment).

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
