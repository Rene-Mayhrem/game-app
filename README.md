# Employees app

This is a simple CRUD of employees. I created an API in Laravel PHP and I created an Angular view for consulting an API. If you want to check Laravel documentation, please read backend documentation.

[Laravel Documentation](backend/README.md)

[Angular Documentation](frontend/README.md)

## How to run the project?

1. Go to backend file, there is the docker-compose.
2. Laravel is working with sail, so some configurations are precharged there.
3. Create an alias for simplicity with the following command.
`` alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail' ``
5. Run the following command to up all the containers services
`` sail up -d``
