CREATE USER react_django WITH PASSWORD 'react_django';

GRANT ALL PRIVILEGES ON DATABASE caslab TO react_django;
ALTER ROLE react_django SET search_path TO react_django;


SELECT * FROM auth_user au ;
SELECT * FROM product;


