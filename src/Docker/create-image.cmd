docker build --no-cache -f SQL\Dockerfile.PostgreSql -t status_2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t status_2/app ../..
